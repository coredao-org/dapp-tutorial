"use client"

import { useState, useEffect } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { formatEther } from "ethers"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

type CreatorToken = {
  id: number
  address: string
  name: string
  symbol: string
  sold: bigint
  remaining: bigint
  raised: bigint
  pfpUrl: string
}

export function CreatorDashboard() {
  const { contract, account } = useWeb3()
  const { toast } = useToast()
  const [tokens, setTokens] = useState<CreatorToken[]>([])
  const [loading, setLoading] = useState(true)
  const [depositLoading, setDepositLoading] = useState<string | null>(null)

  // IPFS PFP URLs - in a real app, these would be associated with each token
  const pfpUrls = [
    "https://pump.mypinata.cloud/ipfs/QmZ4ea3wmwzwYwyWnhzs35hyxw4YryWB82TknGY3L5Wbxn",
    "https://pump.mypinata.cloud/ipfs/QmfFEKp9zFzTmcDjHLXi5H6E5dnKn8NjeaT5ZN2yenFfUR",
    "https://pump.mypinata.cloud/ipfs/QmdwMz7LDs42JoUxz1E9fyWjRwi9dLE1R8HEGDc4EdTvty",
    "https://pump.mypinata.cloud/ipfs/QmQEhM1g9THLbi8WFdTSgVhUtXuBua26moQx29qUVFAomh",
    "https://pump.mypinata.cloud/ipfs/QmP3QrGTLWU3ovUSh3hhEZAkkmz4wQUytGFB8T6FYCNbmB",
    "https://pump.mypinata.cloud/ipfs/QmPPhPbe9t5AKkBgBP4uon7aBdwLzukdS5PJoujC4YjJBj",
  ]

  useEffect(() => {
    if (contract && account) {
      fetchCreatorTokens()
    }
  }, [contract, account])

  const fetchCreatorTokens = async () => {
    try {
      setLoading(true)

      // In a real implementation, we would fetch tokens where the creator is the current account
      // For demo purposes, we'll create mock data
      const mockTokens: CreatorToken[] = Array(3)
        .fill(null)
        .map((_, i) => ({
          id: i,
          address: `0x${Array(40)
            .fill(0)
            .map(() => Math.floor(Math.random() * 16).toString(16))
            .join("")}`,
          name: ["CreatorCoin", "MyToken", "AwesomeCoin"][i % 3],
          symbol: ["CRCN", "MYTK", "AWSM"][i % 3],
          sold: BigInt(Math.floor(Math.random() * 800)),
          remaining: BigInt(Math.floor(Math.random() * 200)),
          raised: BigInt(Math.floor(Math.random() * 5 * 1e18)),
          pfpUrl: pfpUrls[i % pfpUrls.length],
        }))

      setTokens(mockTokens)
    } catch (error) {
      console.error("Error fetching creator tokens:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeposit = async (token: CreatorToken) => {
    if (!contract || !account) return

    try {
      setDepositLoading(token.address)

      // In a real implementation, this would call the contract's deposit function
      // await contract.deposit(token.address)

      // Simulate a transaction delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Deposit successful!",
        description: `You have successfully deposited to ${token.name}.`,
      })

      // Refresh the token list
      await fetchCreatorTokens()
    } catch (error) {
      console.error("Error depositing:", error)
      toast({
        title: "Transaction failed",
        description: "There was an error processing your deposit.",
        variant: "destructive",
      })
    } finally {
      setDepositLoading(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    )
  }

  if (tokens.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-zinc-100 p-8">
        <h3 className="text-lg font-medium mb-2">No tokens created yet</h3>
        <p className="text-zinc-500 mb-6">
          You haven't created any tokens yet. Launch your first token to get started!
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => (window.location.href = "/")}>
          Launch a Token
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token) => (
          <Card key={token.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src={token.pfpUrl || "/placeholder.svg"} alt={token.name} fill className="object-cover" />
                </div>
                <div>
                  <CardTitle>{token.name}</CardTitle>
                  <CardDescription>${token.symbol}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Tokens Sold:</span>
                  <span className="font-medium">{token.sold.toString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Tokens Remaining:</span>
                  <span className="font-medium">{token.remaining.toString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">ETH Raised:</span>
                  <span className="font-medium">{Number.parseFloat(formatEther(token.raised)).toFixed(4)} ETH</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleDeposit(token)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={depositLoading === token.address}
              >
                {depositLoading === token.address ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Deposit"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent transactions for your tokens</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-zinc-50 rounded-lg">
                  <div>
                    <div className="font-medium">
                      {["Buy", "Deposit", "Create"][i % 3]} {tokens[i % tokens.length]?.name}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-orange-500">
                      {Number.parseFloat((Math.random() * 0.1).toFixed(4))} ETH
                    </div>
                    <div className="text-xs text-zinc-500">{["Completed", "Pending"][i % 2]}</div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
