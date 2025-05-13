"use client"

import { useEffect, useState } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"
import { formatEther } from "ethers"
import { BuyTokenDialog } from "@/components/buy-token-dialog"
import { NetworkSwitcher } from "@/components/network-switcher"
import Image from "next/image"

type TokenSale = {
  id: number
  address: string
  name: string
  symbol: string
  creator: string
  sold: bigint
  target: bigint
  raised: bigint
  pfpUrl: string
  isOpen: boolean
}

const TOKEN_LIMIT = 1000n // This should match the contract's TOKEN_LIMIT

export function TokenListing() {
  const { contract, account, isCorrectNetwork } = useWeb3()
  const [tokens, setTokens] = useState<TokenSale[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedToken, setSelectedToken] = useState<TokenSale | null>(null)
  const [buyDialogOpen, setBuyDialogOpen] = useState(false)

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
    if (contract && isCorrectNetwork) {
      fetchTokens()
    } else {
      // If no contract is available or wrong network, still set loading to false after a delay
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [contract, isCorrectNetwork])

  const fetchTokens = async () => {
    try {
      setLoading(true)

      // In a real implementation, we would need to know how many tokens exist
      // For this example, we'll assume there are 10 tokens (or fewer)
      const tokenCount = 10
      const fetchedTokens: TokenSale[] = []

      for (let i = 0; i < tokenCount; i++) {
        try {
          // Call the contract's getTokenSale function
          // This is a placeholder for the actual contract call
          // const tokenSale = await contract.getTokenSale(i)

          // For demo purposes, we'll create mock data
          // In a real implementation, replace this with actual contract calls
          const mockToken = {
            id: i,
            address: `0x${Array(40)
              .fill(0)
              .map(() => Math.floor(Math.random() * 16).toString(16))
              .join("")}`,
            name: ["MoonCoin", "RocketToken", "PumpToken", "MemeToken", "DogeCoin"][i % 5],
            symbol: ["MOON", "RCKT", "PUMP", "MEME", "DOGE"][i % 5],
            creator:
              i % 3 === 0
                ? account || ""
                : `0x${Array(40)
                    .fill(0)
                    .map(() => Math.floor(Math.random() * 16).toString(16))
                    .join("")}`,
            sold: BigInt(Math.floor(Math.random() * 1000)),
            target: BigInt(1000),
            raised: BigInt(Math.floor(Math.random() * 10 * 1e18)),
            pfpUrl: pfpUrls[i % pfpUrls.length],
            isOpen: i % 4 !== 0, // Some tokens are closed
          }

          fetchedTokens.push(mockToken)
        } catch (error) {
          // If we get an error, we might have reached the end of the tokens
          console.error(`Error fetching token at index ${i}:`, error)
          break
        }
      }

      setTokens(fetchedTokens)
    } catch (error) {
      console.error("Error fetching tokens:", error)
    } finally {
      // Ensure loading state is set to false after a short delay
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }

  const handleBuyClick = (token: TokenSale) => {
    if (!isCorrectNetwork) {
      return
    }

    setSelectedToken(token)
    setBuyDialogOpen(true)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    )
  }

  if (!isCorrectNetwork && account) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-zinc-100 p-8">
        <h3 className="text-lg font-medium mb-4">Network Switch Required</h3>
        <p className="text-zinc-500 mb-6">Please switch to Core Testnet 2 to view and interact with tokens.</p>
        <NetworkSwitcher />
      </div>
    )
  }

  if (tokens.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No tokens available yet</h3>
        <p className="text-zinc-500 mt-2">Be the first to launch a token!</p>
      </div>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Available Tokens</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token) => (
          <Card key={token.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full bg-zinc-100">
                <Image src={token.pfpUrl || "/placeholder.svg"} alt={token.name} fill className="object-cover" />
                <Badge className={`absolute top-3 right-3 ${token.isOpen ? "bg-green-500" : "bg-red-500"}`}>
                  {token.isOpen ? "Open" : "Closed"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{token.name}</h3>
                  <p className="text-sm text-zinc-500">${token.symbol}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Sold</span>
                    <span className="font-medium">
                      {token.sold.toString()} / {TOKEN_LIMIT.toString()}
                    </span>
                  </div>
                  <Progress value={Number((token.sold * 100n) / TOKEN_LIMIT)} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Raised</span>
                    <span className="font-medium">
                      {Number.parseFloat(formatEther(token.raised)).toFixed(4)} tCORE2
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                onClick={() => handleBuyClick(token)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={!token.isOpen || !isCorrectNetwork || !account}
              >
                {!account
                  ? "Connect Wallet"
                  : !isCorrectNetwork
                    ? "Switch Network"
                    : !token.isOpen
                      ? "Sale Closed"
                      : "Buy Tokens"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedToken && <BuyTokenDialog token={selectedToken} open={buyDialogOpen} onOpenChange={setBuyDialogOpen} />}
    </section>
  )
}
