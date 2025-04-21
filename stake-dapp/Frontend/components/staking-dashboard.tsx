"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StakingForm } from "@/components/staking-form"
import { WithdrawForm } from "@/components/withdraw-form"
import { UserStats } from "@/components/user-stats"
import { useWallet } from "@/components/wallet-provider"

export function StakingDashboard() {
  const { isConnected } = useWallet()
  const [activeTab, setActiveTab] = useState("stake")

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-gold">Staking Dashboard</h2>

      {isConnected ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-gold">Manage Your Stake</CardTitle>
              <CardDescription>Stake or withdraw your tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="stake" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="stake">Stake</TabsTrigger>
                  <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                </TabsList>
                <TabsContent value="stake">
                  <StakingForm />
                </TabsContent>
                <TabsContent value="withdraw">
                  <WithdrawForm />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gold">Your Stats</CardTitle>
              <CardDescription>Your staking performance</CardDescription>
            </CardHeader>
            <CardContent>
              <UserStats />
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-gold">Connect Your Wallet</CardTitle>
            <CardDescription>Connect your wallet to start staking</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center py-8 text-muted-foreground">
              Please connect your wallet to view your staking dashboard and manage your stakes.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
