"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoTooltip } from "@/components/info-tooltip"
import { useEffect, useState } from "react"
import { formatNumber } from "@/lib/utils"

export function GlobalOverview() {
  const [totalStaked, setTotalStaked] = useState("2,456,789")
  const [apy, setApy] = useState("12.5")
  const [totalStakers, setTotalStakers] = useState("1,234")

  // In a real app, this would fetch data from the blockchain
  useEffect(() => {
    // Simulate data fetching
    const interval = setInterval(() => {
      // Slightly change values to simulate real-time updates
      const newStaked = 2456789 + Math.floor(Math.random() * 10000)
      setTotalStaked(formatNumber(newStaked))

      const newApy = 12.5 + (Math.random() * 0.5 - 0.25)
      setApy(newApy.toFixed(2))

      const newStakers = 1234 + Math.floor(Math.random() * 5)
      setTotalStakers(formatNumber(newStakers))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-gold">Global Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              Total Staked
              <InfoTooltip content="The total amount of tokens staked by all users in the protocol" />
            </CardTitle>
            <CardDescription>Across all stakers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gold">{totalStaked} ETH</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              Current APY
              <InfoTooltip content="Annual Percentage Yield - The estimated yearly return on your staked tokens" />
            </CardTitle>
            <CardDescription>Estimated annual return</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gold">{apy}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              Total Stakers
              <InfoTooltip content="The number of unique addresses that have staked tokens" />
            </CardTitle>
            <CardDescription>Active participants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalStakers}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
