"use client"

import type React from "react"

import { useState } from "react"
import { useWallet } from "@/components/wallet-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoTooltip } from "@/components/info-tooltip"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Loader2 } from "lucide-react"

export const StakeForm = () => {
  const { balance } = useWallet()
  const { toast } = useToast()
  const [amount, setAmount] = useState("")
  const [isStaking, setIsStaking] = useState(false)
  const [error, setError] = useState("")

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Allow only numbers and decimals
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value)

      // Validate amount
      if (value !== "") {
        const numValue = Number.parseFloat(value)
        const numBalance = Number.parseFloat(balance)

        if (numValue <= 0) {
          setError("Amount must be greater than 0")
        } else if (numValue > numBalance) {
          setError("Insufficient balance")
        } else {
          setError("")
        }
      } else {
        setError("")
      }
    }
  }

  const handleMaxClick = () => {
    // Set to 95% of balance to account for gas fees
    const maxAmount = (Number.parseFloat(balance) * 0.95).toFixed(6)
    setAmount(maxAmount)
    setError("")
  }

  const handleStake = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }

    try {
      setIsStaking(true)

      // Simulate staking delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would call your staking contract here

      toast({
        title: "Tokens staked successfully",
        description: `You have staked ${amount} ETH`,
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
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Stake Your Tokens</CardTitle>
        <CardDescription>Stake your ETH to earn rewards at 12.5% APY</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="amount" className="text-sm font-medium flex items-center">
                Amount to Stake
                <InfoTooltip content="The amount of ETH you want to stake. You can stake any amount above 0." />
              </label>
              <span className="text-sm text-muted-foreground">
                Balance: {Number.parseFloat(balance).toFixed(4)} ETH
              </span>
            </div>
            <div className="relative">
              <Input
                id="amount"
                type="text"
                placeholder="0.0"
                value={amount}
                onChange={handleAmountChange}
                className={`pr-16 ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                aria-invalid={!!error}
                aria-describedby={error ? "amount-error" : undefined}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-8 text-[#DAA520] hover:text-[#B8860B] hover:bg-transparent"
                onClick={handleMaxClick}
              >
                MAX
              </Button>
            </div>
            {error && (
              <p id="amount-error" className="mt-1 text-sm text-red-500">
                {error}
              </p>
            )}
          </div>

          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              Staking Summary
              <InfoTooltip content="A summary of your staking transaction and expected rewards" />
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">You will stake:</span>
                <span>{amount || "0"} ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lockup period:</span>
                <span>30 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated APY:</span>
                <span className="text-[#DAA520]">12.5%</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 mt-2">
                <span className="text-muted-foreground">Estimated rewards (30 days):</span>
                <span className="font-medium">
                  {amount ? ((Number.parseFloat(amount) * 0.125) / 12).toFixed(6) : "0"} ETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleStake}
          disabled={isStaking || !!error || !amount}
          className="w-full bg-[#DAA520] hover:bg-[#B8860B] text-white transition-all duration-200"
        >
          {isStaking ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Staking...
            </>
          ) : (
            <>
              Stake Tokens
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
