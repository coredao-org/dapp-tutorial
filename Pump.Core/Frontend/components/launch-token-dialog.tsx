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
import Image from "next/image"

interface LaunchTokenDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LaunchTokenDialog({ open, onOpenChange }: LaunchTokenDialogProps) {
  const { contract, account } = useWeb3()
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
  const factoryFee = "0.01" // ETH

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
    if (!contract || !account) return

    try {
      setIsLoading(true)

      // In a real implementation, this would call the contract's create function
      // await contract.create(name, symbol, { value: parseEther(factoryFee) })

      // Simulate a transaction delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="launch-dialog">
        <DialogHeader>
          <DialogTitle>Launch New Token</DialogTitle>
          <DialogDescription>Create your own meme token on Ethereum in just a few steps.</DialogDescription>
        </DialogHeader>

        {currentStep === 0 && (
          <div className="launch-dialog__step">
            <div className="launch-dialog__field">
              <Label htmlFor="name">Token Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Moon Coin" />
            </div>

            <div className="launch-dialog__field">
              <Label htmlFor="symbol">Token Symbol</Label>
              <Input
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="e.g. MOON"
                maxLength={5}
              />
              <p className="launch-dialog__hint">Maximum 5 characters recommended for token symbols.</p>
            </div>

            <div className="launch-dialog__fee-notice">
              <p className="launch-dialog__fee-title">Factory Fee: {factoryFee} ETH</p>
              <p className="launch-dialog__fee-description">
                This fee is required to create a new token and is paid to the contract owner.
              </p>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="launch-dialog__step">
            <div className="launch-dialog__pfp-selector">
              <h3 className="launch-dialog__section-title">Select Token Image</h3>
              <p className="launch-dialog__section-description">
                Choose a profile picture for your token from our collection.
              </p>

              <div className="launch-dialog__pfp-preview">
                <Image
                  src={pfpUrls[selectedPfpIndex] || "/placeholder.svg"}
                  alt="Token PFP"
                  fill
                  className="launch-dialog__pfp-image"
                />

                <Button
                  variant="outline"
                  size="icon"
                  className="launch-dialog__pfp-nav launch-dialog__pfp-nav--prev"
                  onClick={handlePrevPfp}
                >
                  <ChevronLeft className="launch-dialog__pfp-nav-icon" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="launch-dialog__pfp-nav launch-dialog__pfp-nav--next"
                  onClick={handleNextPfp}
                >
                  <ChevronRight className="launch-dialog__pfp-nav-icon" />
                </Button>
              </div>

              <div className="launch-dialog__pfp-counter">
                <span className="launch-dialog__pfp-current">{selectedPfpIndex + 1}</span> of {pfpUrls.length}
              </div>
            </div>

            <div className="launch-dialog__summary">
              <h3 className="launch-dialog__section-title">Token Summary</h3>
              <div className="launch-dialog__summary-grid">
                <div className="launch-dialog__summary-label">Name:</div>
                <div className="launch-dialog__summary-value">{name}</div>
                <div className="launch-dialog__summary-label">Symbol:</div>
                <div className="launch-dialog__summary-value">${symbol}</div>
                <div className="launch-dialog__summary-label">Fee:</div>
                <div className="launch-dialog__summary-value">{factoryFee} ETH</div>
              </div>
            </div>
          </div>
        )}

        <DialogFooter className="launch-dialog__footer">
          {currentStep > 0 && (
            <Button variant="outline" onClick={handlePrevStep} className="launch-dialog__back-button">
              Back
            </Button>
          )}

          {currentStep === 0 && (
            <Button onClick={handleNextStep} className="launch-dialog__next-button">
              Next
            </Button>
          )}

          {currentStep === 1 && (
            <Button onClick={handleLaunch} className="launch-dialog__launch-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="launch-dialog__spinner" />
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
