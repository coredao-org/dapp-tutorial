"use client"

import { useState } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { NetworkSwitcher } from "@/components/network-switcher"
import Image from "next/image"
import { ethers } from "ethers"

interface LaunchTokenDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LaunchTokenDialog({ open, onOpenChange }: LaunchTokenDialogProps) {
  const { contract, account, isCorrectNetwork } = useWeb3()
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [symbol, setSymbol] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedPfpIndex, setSelectedPfpIndex] = useState(0)

  // IPFS PFP URLs
  const pfpUrls = [
    "https://pump.mypinata.cloud/ipfs/QmZ4ea3wmwzwYwyWnhzs35hyxw4YryWB82TknGY3L5Wbxn",
    "https://pump.mypinata.cloud/ipfs/QmfFEKp9zFzTmcDjHLXi5H6E5dnKn8NjeaT5ZN2yenFfUR",
    "https://pump.mypinata.cloud/ipfs/QmdwMz7LDs42JoUxz1E9fyWjRwi9dLE1R8HEGDc4EdTvty",
    "https://pump.mypinata.cloud/ipfs/QmQEhM1g9THLbi8WFdTSgVhUtXuBua26moQx29qUVFAomh",
    "https://pump.mypinata.cloud/ipfs/QmP3QrGTLWU3ovUSh3hhEZAkkmz4wQUytGFB8T6FYCNbmB",
    "https://pump.mypinata.cloud/ipfs/QmPPhPbe9t5AKkBgBP4uon7aBdwLzukdS5PJoujC4YjJBj",
  ]

  // Mock factory fee - in a real implementation, this would be fetched from the contract
  const factoryFee = ethers.parseEther("0.01" )// tCORE2

  // Reset state when dialog is opened or closed
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset state when dialog is closed
      setCurrentStep(0)
      setName("")
      setSymbol("")
      setSelectedPfpIndex(0)
    }
    onOpenChange(newOpen)
  }

  const handleNextStep = () => {
    if (currentStep === 0) {
      if (!name || !symbol) {
        toast({
          title: "Missing information",
          description: "Please provide both a token name and symbol.",
          variant: "destructive",
        })
        return
      }

      if (symbol.length > 5) {
        toast({
          title: "Symbol too long",
          description: "Token symbol should be 5 characters or less.",
          variant: "destructive",
        })
        return
      }
    }

    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handlePrevPfp = () => {
    setSelectedPfpIndex((selectedPfpIndex - 1 + pfpUrls.length) % pfpUrls.length)
  }

  const handleNextPfp = () => {
    setSelectedPfpIndex((selectedPfpIndex + 1) % pfpUrls.length)
  }

  const handleLaunch = async () => {
    if (!contract || !account || !isCorrectNetwork) return

    try {
      setIsLoading(true)

      // In a real implementation, this would call the contract's create function
      await contract.create(name, symbol, { value: factoryFee })

      // Simulate a transaction delay
      // await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Token launched!",
        description: `Your token ${name} (${symbol}) has been successfully created.`,
      })

      onOpenChange(false)
      setName("")
      setSymbol("")
      setCurrentStep(0)
    } catch (error) {
      console.error("Error launching token:", error)
      toast({
        title: "Transaction failed",
        description: "There was an error processing your transaction.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // If not on correct network, show network switcher
  if (!isCorrectNetwork && account) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Network Switch Required</DialogTitle>
            <DialogDescription>Please switch to Core Testnet 2 to launch a token.</DialogDescription>
          </DialogHeader>
          <div className="py-4 flex justify-center">
            <NetworkSwitcher />
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Launch New Token</DialogTitle>
          <DialogDescription>Create your own meme token on Core Testnet 2 in just a few steps.</DialogDescription>
        </DialogHeader>

        {currentStep === 0 && (
          <div className="grid gap-6 py-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Token Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Moon Coin" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="symbol">Token Symbol</Label>
              <Input
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="e.g. MOON"
                maxLength={5}
              />
              <p className="text-xs text-zinc-500">Maximum 5 characters recommended for token symbols.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-sm font-medium text-orange-800">Factory Fee: {factoryFee} tCORE2</p>
              <p className="text-xs text-orange-600 mt-1">
                This fee is required to create a new token and is paid to the contract owner.
              </p>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="grid gap-6 py-4">
            <div className="text-center">
              <h3 className="font-medium mb-2">Select Token Image</h3>
              <p className="text-sm text-zinc-500 mb-4">Choose a profile picture for your token from our collection.</p>

              <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-zinc-100 rounded-lg overflow-hidden">
                <Image
                  src={pfpUrls[selectedPfpIndex] || "/placeholder.svg"}
                  alt="Token PFP"
                  fill
                  className="object-cover"
                />

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={handlePrevPfp}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={handleNextPfp}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4 text-sm">
                <span className="font-medium">{selectedPfpIndex + 1}</span> of {pfpUrls.length}
              </div>
            </div>

            <div className="bg-zinc-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Token Summary</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-zinc-500">Name:</div>
                <div className="font-medium">{name}</div>
                <div className="text-zinc-500">Symbol:</div>
                <div className="font-medium">${symbol}</div>
                <div className="text-zinc-500">Fee:</div>
                <div className="font-medium">{factoryFee} tCORE2</div>
              </div>
            </div>
          </div>
        )}

        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-2">
          {currentStep > 0 && (
            <Button variant="outline" onClick={handlePrevStep} className="sm:mr-auto">
              Back
            </Button>
          )}

          {currentStep === 0 && (
            <Button onClick={handleNextStep} className="bg-orange-500 hover:bg-orange-600 text-white">
              Next
            </Button>
          )}

          {currentStep === 1 && (
            <Button
              onClick={handleLaunch}
              className="bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Launch Token"
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
