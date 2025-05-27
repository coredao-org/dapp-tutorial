"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { InfoTooltip } from "@/components/info-tooltip"

export function UserStats() {
  // In a real app, these would come from the staking contract
  const [stakedAmount, setStakedAmount] = useState(1.5)
  const [rewards, setRewards] = useState(0.125)
  const [timeRemaining, setTimeRemaining] = useState(18) // days
  const totalLockupPeriod = 30 // days

  // Simulate rewards accruing in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setRewards((prev) => {
        const increase = 0.000001 * Math.random()
        return Number.parseFloat((prev + increase).toFixed(6))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const lockupProgress = Math.min(100, ((totalLockupPeriod - timeRemaining) / totalLockupPeriod) * 100)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm flex items-center">
            Your Stake
            <InfoTooltip content="The total amount of tokens you have staked" />
          </span>
          <span className="font-medium">{stakedAmount.toFixed(4)} ETH</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm flex items-center">
            Earned Rewards
            <InfoTooltip content="The rewards you have earned on your staked tokens" />
          </span>
          <span className="font-medium text-gold">{rewards.toFixed(6)} ETH</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm flex items-center">
            Lockup Period
            <InfoTooltip content="The remaining time until you can withdraw your staked tokens" />
          </span>
          <span className="font-medium">{timeRemaining} days left</span>
        </div>
        <Progress value={lockupProgress} className="h-2 [&>div]:bg-gold" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0 days</span>
          <span>{totalLockupPeriod} days</span>
        </div>
      </div>

      <div className="pt-2">
        <div className="rounded-md bg-muted p-3">
          <div className="flex justify-between text-sm">
            <span>Estimated APY:</span>
            <span className="font-medium text-gold">12.5%</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Projected Annual Earnings:</span>
            <span className="font-medium">{(stakedAmount * 0.125).toFixed(4)} ETH</span>
          </div>
        </div>
      </div>
    </div>
  )
}
