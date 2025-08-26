"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreatorDashboard } from "@/components/creator-dashboard"
import { OwnerDashboard } from "@/components/owner-dashboard"
import { useWeb3 } from "@/hooks/use-web3"
import { Loader2 } from "lucide-react"

export default function Dashboard() {
  const { account, contract } = useWeb3()
  const [isOwner, setIsOwner] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkOwner = async () => {
      if (contract && account) {
        try {
          // In a real implementation, this would check if the current account is the contract owner
          // const owner = await contract.owner()
          // setIsOwner(owner.toLowerCase() === account.toLowerCase())

          // For demo purposes, we'll randomly set isOwner
          setIsOwner(Math.random() > 0.7)
        } catch (error) {
          console.error("Error checking owner:", error)
          setIsOwner(false)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }

    checkOwner()
  }, [contract, account])

  if (!account) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-zinc-500">Please connect your wallet to view your dashboard.</p>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <Tabs defaultValue="creator">
          <TabsList className="mb-6">
            <TabsTrigger value="creator">Creator Dashboard</TabsTrigger>
            {isOwner && <TabsTrigger value="owner">Owner Dashboard</TabsTrigger>}
          </TabsList>

          <TabsContent value="creator">
            <CreatorDashboard />
          </TabsContent>

          {isOwner && (
            <TabsContent value="owner">
              <OwnerDashboard />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  )
}
