"use client"

import { useEffect, useState } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Loader2, Check, Copy } from "lucide-react"
import { formatEther } from "ethers"
import { BuyTokenDialog } from "@/components/buy-token-dialog"
import { NetworkSwitcher } from "@/components/network-switcher"
import Image from "next/image"
import { ethers } from "ethers"

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
  const [copiedTokenId, setCopiedTokenId] = useState<number | null>(null)

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
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [contract, isCorrectNetwork])

  const fetchTokens = async () => {
    try {
      setLoading(true)
      const tokenCount = await contract.totalTokens()
      const fetchedTokens: TokenSale[] = []

      for (let i = 0; i < Number(tokenCount); i++) {
        try {
          const tokenSale = await contract.getTokenSale(i)

          const tokenData: TokenSale = {
            id: i,
            address: tokenSale.token,
            name: tokenSale.name,
            symbol: tokenSale.symbol,
            creator: tokenSale.creator,
            sold: BigInt(tokenSale.sold),
            target: 3000000000000000000n, // 3 ether target
            raised: BigInt(tokenSale.raised),
            pfpUrl: pfpUrls[i % pfpUrls.length],
            isOpen: tokenSale.isOpen,
          }

          fetchedTokens.push(tokenData)
        } catch (error) {
          console.error(`Error fetching token at index ${i}:`, error)
          break
        }
      }

      setTokens(fetchedTokens)
    } catch (error) {
      console.error("Error fetching tokens:", error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }

  useEffect(() => {
    const onLaunched = () => {
      fetchTokens();
    };

    window.addEventListener("tokenLaunched", onLaunched);
    return () => {
      window.removeEventListener("tokenLaunched", onLaunched);
    };
  }, [fetchTokens]);

  const handleBuyClick = (token: TokenSale) => {
    if (!isCorrectNetwork) return
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
                <Image src={token.pfpUrl || "/placeholder.svg"} alt={token.name} fill unoptimized className="object-cover" />
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
                      {ethers.formatEther(token.sold.toString())} / {TOKEN_LIMIT.toString()}
                    </span>
                  </div>
                  <Progress
                    value={Number(token.sold) / Number(TOKEN_LIMIT.toString()) * 100}
                    className="h-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Raised</span>
                    <span className="font-medium">
                      {Number.parseFloat(formatEther(token.raised)).toFixed(4)} tCORE2
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mt-3">
                    <span className="truncate text-zinc-500 max-w-[75%]">{token.address}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        navigator.clipboard.writeText(token.address)
                        setCopiedTokenId(token.id)
                        setTimeout(() => setCopiedTokenId(null), 2000)
                      }}
                      className="text-zinc-600 hover:text-black"
                    >
                      {copiedTokenId === token.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
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

      {selectedToken && (
        <BuyTokenDialog token={selectedToken} open={buyDialogOpen} onOpenChange={setBuyDialogOpen} />
      )}
    </section>
  )
}
