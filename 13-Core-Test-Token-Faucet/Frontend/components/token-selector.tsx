"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, ExternalLink, Wallet } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { tokens, type Token } from "@/lib/tokens"
import { CONTRACT_ABI } from "@/lib/constants"
import {ethers} from "ethers"

interface TokenSelectorProps {
  walletAddress: string
  signer: ethers.JsonRpcSigner | null
}

export function TokenSelector({ walletAddress, signer }: TokenSelectorProps) {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [amount, setAmount] = useState("1000")
  const [isMinting, setIsMinting] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleTokenSelect = (tokenSymbol: string) => {
    const token = tokens.find((t) => t.symbol === tokenSymbol)
    if (token) {
      setSelectedToken(token)
    }
  }

  const handleCopyAddress = async () => {
    if (!selectedToken) return

    try {
      await navigator.clipboard.writeText(selectedToken.address)
      setCopied(true)
      toast({
        title: "Address Copied! 📋",
        description: "Contract address copied to clipboard",
        duration: 2000,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy address to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleMint = async () => {
    if (!selectedToken || !amount || !walletAddress) return

    setIsMinting(true)

    try {
      // Placeholder for smart contract interaction
      // In production: call the mint function on the token contract
      const contract = new ethers.Contract(selectedToken.address, CONTRACT_ABI, signer)
      const tx = await contract.mint(walletAddress, ethers.parseUnits(amount, 18))
      await tx.wait()


      toast({
        title: "Mint Successful! 🎉",
        description: `Successfully minted ${amount} ${selectedToken.symbol} to your wallet`,
        duration: 5000,
      })

      // Reset amount to default
      setAmount("1000")
    } catch (error) {
      toast({
        title: "Mint Failed",
        description: "Transaction failed. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsMinting(false)
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-8)}`
  }

  return (
    <Card className="w-full shadow-xl border border-slate-200 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold text-slate-900 text-center">Mint Test Tokens</CardTitle>
        <p className="text-slate-600 text-center">
          Select a token and amount to mint directly to your connected wallet
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Connected Wallet Display */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-green-900">Connected Wallet</h4>
              <p className="text-sm font-mono text-green-700">{walletAddress}</p>
            </div>
          </div>
        </div>

        {/* Token Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Select Token</label>
          <Select onValueChange={handleTokenSelect}>
            <SelectTrigger className="w-full h-14 text-lg">
              <SelectValue placeholder="Choose a test token to mint..." />
            </SelectTrigger>
            <SelectContent>
              {tokens.map((token) => (
                <SelectItem key={token.symbol} value={token.symbol} className="h-16">
                  <div className="flex items-center space-x-3 py-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: token.color }}
                    >
                      {token.symbol.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{token.name}</div>
                      <div className="text-sm text-slate-500">{token.symbol} • ERC20</div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Selected Token Details */}
        {selectedToken && (
          <div className="bg-slate-50 rounded-lg p-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: selectedToken.color }}
              >
                {selectedToken.symbol.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 text-lg">{selectedToken.name}</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{selectedToken.symbol}</Badge>
                  <Badge variant="outline" className="text-xs">
                    {selectedToken.decimals} decimals
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contract Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Contract Address</label>
              <div className="flex items-center space-x-2 bg-white rounded-lg border p-3">
                <code className="flex-1 text-sm font-mono text-slate-800 break-all">{selectedToken.address}</code>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyAddress}
                    className="h-8 w-8 p-0 hover:bg-slate-100"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-600" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-slate-100"
                    onClick={() => {
                      // Open block explorer - placeholder for now
                      toast({
                        title: "Block Explorer",
                        description: "Would open contract in block explorer",
                      })
                    }}
                  >
                    <ExternalLink className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Amount Input */}
        {selectedToken && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Amount to Mint</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="text-lg font-semibold h-14"
              min="1"
              max={selectedToken.maxMint.toString()}
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>Minimum: 1 {selectedToken.symbol}</span>
              <span>
                Maximum: {selectedToken.maxMint.toLocaleString()} {selectedToken.symbol}
              </span>
            </div>
          </div>
        )}

        {/* Quick Amount Buttons */}
        {selectedToken && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Quick Select</label>
            <div className="grid grid-cols-4 gap-2">
              {[100, 1000, 5000, selectedToken.maxMint].map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant="outline"
                  size="sm"
                  onClick={() => setAmount(quickAmount.toString())}
                  className="text-xs hover:bg-yellow-50 hover:border-yellow-300"
                >
                  {quickAmount >= 1000 ? `${quickAmount / 1000}K` : quickAmount}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Mint Button */}
        {selectedToken && (
          <Button
            onClick={handleMint}
            disabled={
              !selectedToken ||
              !amount ||
              !walletAddress ||
              isMinting ||
              Number.parseInt(amount) > selectedToken.maxMint
            }
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 text-lg transition-all duration-200 disabled:opacity-50 h-14"
          >
            {isMinting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Minting {selectedToken.symbol}...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Wallet className="w-5 h-5" />
                <span>
                  Mint {amount} {selectedToken.symbol}
                </span>
              </div>
            )}
          </Button>
        )}

        {/* Transaction Info */}
        {selectedToken && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs">ℹ</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-blue-900 mb-1">Transaction Details</h4>
                <p className="text-xs text-blue-700">
                  • Tokens will be minted directly to your connected wallet
                  <br />• You'll need to confirm the transaction in your wallet
                  <br />• Gas fees will be paid in tCORE (Core Testnet native token)
                  <br />• Transaction will appear in your wallet after confirmation
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
