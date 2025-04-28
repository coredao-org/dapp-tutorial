"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@/hooks/use-wallet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Check, Loader2, Network } from "lucide-react"
import { ethers } from "ethers"

export function DomainSearch() {
  const [domainName, setDomainName] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [owner, setOwner] = useState<string | null>(null)
  const [showDialog, setShowDialog] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [registrationError, setRegistrationError] = useState<string | null>(null)
  const { isConnected, connect, networkStatus, switchNetwork, getContractOne, getContractTwo } = useWallet()
  const { isCorrectNetwork, isSwitchingNetwork } = networkStatus
  const router = useRouter()

  // Reset registration error when network status changes
  useEffect(() => {
    if (isCorrectNetwork) {
      setRegistrationError(null)
    }
  }, [isCorrectNetwork])

  // Ensure domain name has .core suffix
  const formatDomainName = (name: string) => {
    if (!name) return ""

    const trimmed = name.trim().toLowerCase()
    if (trimmed.endsWith(".core")) return trimmed
    return `${trimmed}.core`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomainName(e.target.value)
    // Reset states when input changes
    setIsAvailable(null)
    setOwner(null)
    setRegistrationError(null)
  }

  const checkAvailability = async () => {
    if (!domainName.trim()) return

    const formattedName = formatDomainName(domainName)
    setIsChecking(true)
    setRegistrationError(null)

    try {
      console.log("In here")
      const domainHash = ethers.encodeBytes32String(formattedName)
      console.log(domainHash)
      const ensRegistry = getContractOne()
      if (!ensRegistry) throw new Error("ENS Registry contract is not loaded")

        console.log(ensRegistry)
        console.log("Done!!")
      const record = await ensRegistry.getSpecificRecord(domainHash)
    console.log(record)
      const zeroAddress = "0x0000000000000000000000000000000000000000"

      // Mock check for demonstration (random result)
      if (record.owner === zeroAddress) {
        setIsAvailable(true)
      } else {
        setIsAvailable(false)
        setOwner(record.owner)
      }
      setShowDialog(true)
    } catch (error) {
      console.error("Error checking domain availability:", error)
      setRegistrationError("Failed to check domain availability. Please try again.")
    } finally {
      setIsChecking(false)
    }
  }

  const handleConnectOrSwitch = async () => {
    if (!isConnected) {
      await connect()
      return false
    }

    if (!isCorrectNetwork) {
      await switchNetwork()
      return false
    }

    return true
  }

  const registerDomain = async () => {
    setRegistrationError(null)

    const readyToProceed = await handleConnectOrSwitch()
    if (!readyToProceed) return

    if (!isAvailable) return

    const formattedName = formatDomainName(domainName)
    setIsRegistering(true)

    try {
      const domainHash = ethers.encodeBytes32String(formattedName)
      const registrar = getContractTwo()
      if (!registrar) throw new Error("Registrar contract is not loaded")
      const tx = await registrar.register(domainHash, {
        value: ethers.parseEther("0.01"),
      })
      await tx.wait()

      setRegistrationSuccess(true)
      setTimeout(() => {
        setShowDialog(false)
        router.push("/dashboard")
      }, 2000)
    } catch (error: any) {
      console.error("Error registering domain:", error)
      setRegistrationError(`Failed to register domain: ${error.message || "Unknown error"}`)
    } finally {
      setIsRegistering(false)
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row w-full items-center gap-3">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Enter domain name"
            value={domainName}
            onChange={handleInputChange}
            className="w-full h-12 text-lg px-4"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {domainName && !domainName.endsWith(".core") ? ".core" : ""}
          </span>
        </div>
        <Button
          onClick={checkAvailability}
          disabled={!domainName.trim() || isChecking}
          className="w-full sm:w-auto h-12 px-8 text-lg"
        >
          {isChecking ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Checking
            </>
          ) : (
            "Check"
          )}
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Domain Registration</DialogTitle>
            <DialogDescription>{formatDomainName(domainName)}</DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-4">
            {isAvailable === true && (
              <Alert className="border-orange-500 bg-orange-50 dark:bg-orange-950">
                <Check className="h-4 w-4 text-orange-500" />
                <AlertTitle className="text-orange-500">Available!</AlertTitle>
                <AlertDescription>This domain is available for registration.</AlertDescription>
              </Alert>
            )}

            {isAvailable === false && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Already Registered</AlertTitle>
                <AlertDescription>This domain has already been registered by {owner}.</AlertDescription>
              </Alert>
            )}

            {registrationSuccess && (
              <Alert className="border-orange-500 bg-orange-50 dark:bg-orange-950">
                <Check className="h-4 w-4 text-orange-500" />
                <AlertTitle className="text-orange-500">Success!</AlertTitle>
                <AlertDescription>Domain successfully registered. Redirecting to your dashboard...</AlertDescription>
              </Alert>
            )}

            {registrationError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Registration Failed</AlertTitle>
                <AlertDescription>{registrationError}</AlertDescription>
              </Alert>
            )}

            {isConnected && !isCorrectNetwork && (
              <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
                <Network className="h-4 w-4 text-yellow-500" />
                <AlertTitle className="text-yellow-500">Wrong Network</AlertTitle>
                <AlertDescription>You need to switch to CoreTestnet2 to register domains.</AlertDescription>
              </Alert>
            )}
          </div>

          <DialogFooter>
            {isAvailable && !registrationSuccess && (
              <Button onClick={registerDomain} disabled={isRegistering || isSwitchingNetwork} className="w-full">
                {isRegistering ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registering...
                  </>
                ) : isSwitchingNetwork ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Switching Network...
                  </>
                ) : !isConnected ? (
                  "Connect Wallet to Register"
                ) : !isCorrectNetwork ? (
                  "Switch to CoreTestnet2"
                ) : (
                  "Register Domain"
                )}
              </Button>
            )}

            {!isAvailable && (
              <Button variant="outline" onClick={() => setShowDialog(false)} className="w-full">
                Close
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
