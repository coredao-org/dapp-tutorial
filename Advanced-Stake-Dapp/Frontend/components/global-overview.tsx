"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoTooltip } from "@/components/info-tooltip"
import { TrendingUp, Users, Clock } from "lucide-react"

export const GlobalOverview = () => {
  // In a real app, these would come from your contract or API
  const totalStaked = "1,245,678.45"
  const totalStakers = "3,721"
  const apy = "12.5"
  const lockupPeriod = "30 days"

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            Total Value Staked
            <InfoTooltip content="The total amount of tokens staked across all users on the platform" />
          </CardTitle>
          <CardDescription>Platform-wide staking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#DAA520]">{totalStaked}</span>
            <span className="ml-2 text-muted-foreground">ETH</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-green-600 dark:text-green-400">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+5.2% from last week</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            Annual Percentage Yield
            <InfoTooltip content="The annual rate of return on your staked tokens, expressed as a percentage" />
          </CardTitle>
          <CardDescription>Current reward rate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#DAA520]">{apy}%</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Rewards distributed daily</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            Platform Statistics
            <InfoTooltip content="Key metrics about the staking platform" />
          </CardTitle>
          <CardDescription>Active stakers and lockup period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span>Total Stakers</span>
              </div>
              <div className="text-xl font-semibold mt-1">{totalStakers}</div>
            </div>
            <div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Lockup Period</span>
                <InfoTooltip content="The minimum time your tokens must remain staked before withdrawal without penalty" />
              </div>
              <div className="text-xl font-semibold mt-1">{lockupPeriod}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
