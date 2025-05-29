"use client"

import { Button } from "@/components/ui/button"
import { useWeb3 } from "@/hooks/use-web3"
import { AlertTriangle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function NetworkSwitcher() {
  const { switchToCorrectNetwork, addCoreTestnet2, isCorrectNetwork } = useWeb3()
  const [showDialog, setShowDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSwitchNetwork = async () => {
    try {
      setIsLoading(true)
      await switchToCorrectNetwork()

      // If we get here, the switch was successful
      toast({
        title: "Network Switched",
        description: "Successfully connected to Core Testnet 2.",
      })

      setShowDialog(false)
    } catch (error: any) {
      console.error("Error switching network:", error)

      // If the network is not added, show the dialog to add it
      if (error.code === 4902) {
        setShowDialog(true)
      } else {
        toast({
          title: "Network Switch Failed",
          description: "There was an error switching networks. Please try again.",
          variant: "destructive",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddNetwork = async () => {
    try {
      setIsLoading(true)
      await addCoreTestnet2()

      toast({
        title: "Network Added",
        description: "Core Testnet 2 has been added to your wallet.",
      })

      setShowDialog(false)
    } catch (error) {
      console.error("Error adding network:", error)
      toast({
        title: "Failed to Add Network",
        description: "There was an error adding Core Testnet 2 to your wallet.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isCorrectNetwork) {
    return null
  }

  return (
    <>
      <Button
        onClick={handleSwitchNetwork}
        variant="destructive"
        size="sm"
        className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          "Switching..."
        ) : (
          <>
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">Wrong Network</span>
          </>
        )}
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Network Configuration Required</DialogTitle>
            <DialogDescription>
              Core Testnet 2 needs to be added to your wallet to use this application.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="font-medium">Network Name:</div>
                <div className="col-span-2">Core Testnet 2</div>

                <div className="font-medium">RPC URL:</div>
                <div className="col-span-2 break-all">https://rpc.test2.btcs.network</div>

                <div className="font-medium">Chain ID:</div>
                <div className="col-span-2">1114 (0x45a)</div>

                <div className="font-medium">Currency Symbol:</div>
                <div className="col-span-2">tCORE2</div>

                <div className="font-medium">Block Explorer:</div>
                <div className="col-span-2 break-all">https://scan.test2.btcs.network</div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={handleAddNetwork}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Adding Network..." : "Add Core Testnet 2 to Wallet"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
