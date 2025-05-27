"use client"

import type React from "react"

import { useState } from "react"
import { useWallet } from "@/components/wallet-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { InfoTooltip } from "@/components/info-tooltip"
import { Loader2 } from "lucide-react"

export function StakingForm() {
  const { address, balance } = useWallet()
  const [amount, setAmount] = useState("")
  const [isStaking, setIsStaking] = useState(false)
  const { toast } = useToast()

  const maxBalance = Number.parseFloat(balance || "0")
  const amountValue = Number.parseFloat(amount || "0")
  const isValidAmount = amountValue > 0 && amountValue <= maxBalance

  const handleSliderChange = (value: number[]) => {
    const percentage = value[0]
    const calculatedAmount = ((maxBalance * percentage) / 100).toFixed(6)
    setAmount(calculatedAmount)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow only numbers and decimals
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value)
    }
  }

  const handleMaxClick = () => {
    setAmount(maxBalance.toString())
  }

  const handleStake = async () => {
    if (!isValidAmount) return

    setIsStaking(true)

    try {
      // In a real app, this would call the staking contract
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate transaction

      toast({
        title: "Staking successful",
        description: `You have successfully staked ${amount} ETH`,
      })

      setAmount("")
    } catch (error) {
      console.error("Staking error:", error)
      toast({
        title: "Staking failed",
        description: "There was an error while staking your tokens. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsStaking(false)
    }
  }

  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="stake-amount" className="flex items-center">
            Amount to Stake
            <InfoTooltip content="The amount of ETH you want to stake. This will be locked in the staking contract." />
          </Label>
          <span className="text-sm text-muted-foreground">Balance: {maxBalance.toFixed(4)} ETH</span>
        </div>

        <div className="flex space-x-2">
          <Input
            id="stake-amount"
            type="text"
            placeholder="0.0"
            value={amount}
            onChange={handleInputChange}
            className={`${!isValidAmount && amount ? "border-red-500 focus-visible:ring-red-500" : ""}`}
          />
          <Button variant="outline" size="sm" onClick={handleMaxClick} className="whitespace-nowrap">
            Max
          </Button>
        </div>

        {!isValidAmount && amount && (
          <p className="text-red-500 text-sm mt-1">
            {amountValue <= 0 ? "Amount must be greater than 0" : "Amount exceeds your balance"}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
        <Slider defaultValue={[0]} max={100} step={1} onValueChange={handleSliderChange} className="[&>span]:bg-gold" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="flex items-center">
            Lockup Period
            <InfoTooltip content="The period your tokens will be locked in the staking contract. You cannot withdraw before this period ends." />
          </Label>
          <span className="text-sm font-medium">30 days</span>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={handleStake}
          disabled={!isValidAmount || isStaking}
          className="w-full bg-gold hover:bg-gold/90 text-white"
        >
          {isStaking ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Staking...
            </>
          ) : (
            "Stake"
          )}
        </Button>
      </div>
    </div>
  )
}
