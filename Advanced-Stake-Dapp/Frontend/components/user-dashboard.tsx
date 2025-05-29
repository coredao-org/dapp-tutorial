"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InfoTooltip } from "@/components/info-tooltip"
import { useToast } from "@/hooks/use-toast"
import { Loader2, TrendingUp, Clock, Award, ArrowDownToLine } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useStakingContract } from "@/hooks/use-staking-contract"

export const UserDashboard = () => {
  const { toast } = useToast()
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawError, setWithdrawError] = useState("")
  const {stakedBalance, rewards, withdraw, claimRewards} = useStakingContract()

  // In a real app, these would come from your contract
  // const stakedBalance = "42.5"
  // const rewards = "1.32"
  const stakingStartDate = "2023-12-15"
  const lockupEndDate = "2024-01-14"
  const daysRemaining = 5
  const percentComplete = ((30 - daysRemaining) / 30) * 100

  const handleWithdrawAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Allow only numbers and decimals
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setWithdrawAmount(value)

      // Validate amount
      if (value !== "") {
        const numValue = Number.parseFloat(value)
        const numStaked = Number.parseFloat(stakedBalance)

        if (numValue <= 0) {
          setWithdrawError("Amount must be greater than 0")
        } else if (numValue > numStaked) {
          setWithdrawError("Cannot withdraw more than staked amount")
        } else {
          setWithdrawError("")
        }
      } else {
        setWithdrawError("")
      }
    }
  }

  const handleMaxWithdraw = () => {
    setWithdrawAmount(stakedBalance)
    setWithdrawError("")
  }

  const handleWithdraw = async () => {
    if (!withdrawAmount || Number.parseFloat(withdrawAmount) <= 0) {
      setWithdrawError("Please enter a valid amount")
      return
    }

    try {
      setIsWithdrawing(true)
      const withdrawValue = Number.parseFloat(withdrawAmount)

      // Check if early withdrawal (before lockup period ends)
      const isEarlyWithdrawal = daysRemaining > 0

      if (isEarlyWithdrawal) {
        // Calculate penalty (10% for early withdrawal)
        const penalty = withdrawValue * 0.1
        const amountAfterPenalty = withdrawValue - penalty

        // Simulate withdrawal delay
        // await new Promise((resolve) => setTimeout(resolve, 2000))
        await withdraw(withdrawAmount)

        // In a real app, you would call your staking contract here

        toast({
          title: "Early withdrawal processed",
          description: `You have withdrawn ${amountAfterPenalty.toFixed(2)} ETH (10% penalty applied)`,
        })
      } else {

        toast({
          title: "Withdrawal successful",
          description: `You have withdrawn ${withdrawAmount} ETH`,
        })
      }

      window.dispatchEvent(new CustomEvent("withdraw", {
        detail: { withdrawAmount},
      }));

      // Reset the withdrawal amount after successful withdrawal
      setWithdrawAmount("")
    } catch (error) {
      console.error("Withdrawal error:", error)
      toast({
        title: "Withdrawal failed",
        description: "There was an error while withdrawing your tokens. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsWithdrawing(false)
    }
  }

  const handleClaimRewards = async () => {
    try {
      setIsClaiming(true)

      // Simulate claiming delay
      // await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would call your staking contract here

      claimRewards()

      toast({
        title: "Rewards claimed successfully",
        description: `You have claimed ${rewards} ETH in rewards`,
      })
    } catch (error) {
      console.error("Claiming error:", error)
      toast({
        title: "Claiming failed",
        description: "There was an error while claiming your rewards. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsClaiming(false)
    }
  }

  // Calculate the amount after penalty (if applicable)
  const calculateAmountAfterPenalty = () => {
    if (!withdrawAmount || Number.parseFloat(withdrawAmount) <= 0) return "0"

    const withdrawValue = Number.parseFloat(withdrawAmount)
    const isEarlyWithdrawal = daysRemaining > 0

    if (isEarlyWithdrawal) {
      const penalty = withdrawValue * 0.1
      return (withdrawValue - penalty).toFixed(6)
    }

    return withdrawValue.toFixed(6)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            My Staked Tokens
            <InfoTooltip content="The total amount of tokens you have staked on the platform" />
          </CardTitle>
          <CardDescription>Your active stake</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#DAA520]">{stakedBalance}</span>
            <span className="ml-2 text-muted-foreground">ETH</span>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Lockup Period
                </span>
                <span>{daysRemaining} days remaining</span>
              </div>
              <Progress value={percentComplete} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Staked on</span>
                <p>{stakingStartDate}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Available on</span>
                <p>{lockupEndDate}</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex justify-between mb-2">
                <label htmlFor="withdraw-amount" className="text-sm font-medium flex items-center">
                  Withdrawal Amount
                  <InfoTooltip content="The amount of ETH you want to withdraw from your staked tokens" />
                </label>
                <span className="text-sm text-muted-foreground">Available: {stakedBalance} ETH</span>
              </div>
              <div className="relative">
                <Input
                  id="withdraw-amount"
                  type="text"
                  placeholder="0.0"
                  value={withdrawAmount}
                  onChange={handleWithdrawAmountChange}
                  className={`pr-16 ${withdrawError ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  aria-invalid={!!withdrawError}
                  aria-describedby={withdrawError ? "withdraw-error" : undefined}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-8 text-[#DAA520] hover:text-[#B8860B] hover:bg-transparent"
                  onClick={handleMaxWithdraw}
                >
                  MAX
                </Button>
              </div>
              {withdrawError && (
                <p id="withdraw-error" className="mt-1 text-sm text-red-500">
                  {withdrawError}
                </p>
              )}

              {daysRemaining > 0 && withdrawAmount && !withdrawError && (
                <div className="mt-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Withdrawal amount:</span>
                    <span>{withdrawAmount} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Early withdrawal penalty (10%):</span>
                    <span className="text-amber-600 dark:text-amber-400">
                      {(Number.parseFloat(withdrawAmount) * 0.1).toFixed(6)} ETH
                    </span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>You will receive:</span>
                    <span>{calculateAmountAfterPenalty()} ETH</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            onClick={handleWithdraw}
            disabled={isWithdrawing || !!withdrawError || !withdrawAmount}
            className="w-full bg-[#DAA520] hover:bg-[#B8860B] text-white"
          >
            {isWithdrawing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Withdrawing...
              </>
            ) : daysRemaining > 0 ? (
              <>
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Withdraw Early (10% Penalty)
              </>
            ) : (
              <>
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Withdraw Tokens
              </>
            )}
          </Button>

          {daysRemaining > 0 && (
            <div className="text-sm text-amber-600 dark:text-amber-400 text-center">
              <InfoTooltip content="Early withdrawal incurs a 10% penalty on your withdrawn amount" />
              <span>Lockup period not complete. Early withdrawal will incur a 10% penalty.</span>
            </div>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            My Rewards
            <InfoTooltip content="The rewards you have earned from staking your tokens" />
          </CardTitle>
          <CardDescription>Accumulated earnings</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#DAA520]">{rewards}</span>
            <span className="ml-2 text-muted-foreground">ETH</span>
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex items-center text-sm text-green-600 dark:text-green-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+0.05 ETH earned today</span>
            </div>

            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Reward Statistics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Daily rate</span>
                  <p>0.05 ETH</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Monthly estimate</span>
                  <p>1.5 ETH</p>
                </div>
                <div>
                  <span className="text-muted-foreground">APY</span>
                  <p className="text-[#DAA520]">12.5%</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Next reward</span>
                  <p>In 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleClaimRewards}
            disabled={isClaiming || Number.parseFloat(rewards) <= 0}
            className="w-full bg-[#DAA520] hover:bg-[#B8860B] text-white"
          >
            {isClaiming ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Claiming...
              </>
            ) : (
              <>
                <Award className="mr-2 h-4 w-4" />
                Claim Rewards
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
