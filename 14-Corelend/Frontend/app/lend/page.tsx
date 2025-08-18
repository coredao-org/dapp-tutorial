"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/components/wallet-provider"
import { useToast } from "@/hooks/use-toast"
import { Coins, TrendingUp, Wallet } from "lucide-react"
import { CONTRACT_ABI, CONTRACT_ADDRESS, CONTRACT_TOKEN } from "../constants/constants"
import { ethers } from "ethers"

const supportedTokens = [
  {
    symbol: "USDT",
    name: "Tether USD",
    logo: "💵",
    apy: "8.5%",
    address: "0x367a5a4C14214BfE67d3C00A97F19Cecd2cf9e87",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    logo: "🟡",
    apy: "7.8%",
    address: "0x7a8eF80C8136862fc7402E8Cfb9Cd1ea9c3BFB4B",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    logo: "🔵",
    apy: "8.2%",
    address: "0x2bE22845339D49E9b296AbA5462D78F2e929DB05",
  },
]

export default function LendPage() {
  const { isConnected, isCorrectNetwork, signer } = useWallet()
  const { toast } = useToast()
  const [depositAmounts, setDepositAmounts] = useState<{ [key: string]: string }>({})
  const [withdrawAmounts, setWithdrawAmounts] = useState<{ [key: string]: string }>({})
  const [balances, setBalances] = useState<{ [key: string]: string }>({})
  const [deposits, setDeposits] = useState<{ [key: string]: string }>({})

  const fetchBalances = async () => {
    if (!signer) return

    const updatedBalances: { [key: string]: string } = {};
    const updatedDeposits: { [key: string]: string } = {};


    for (const token of supportedTokens) {
      const tokenContract = new ethers.Contract(token.address, CONTRACT_TOKEN, signer)
      const mainContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

      const [balance, deposited] = await Promise.all([
        tokenContract.balanceOf(signer),
        mainContract.getLendersBalance(signer, token.address),
      ])

      updatedBalances[token.symbol] = ethers.formatUnits(balance, 18)
      updatedDeposits[token.symbol] = ethers.formatUnits(deposited, 18)
    }

    setBalances(updatedBalances)
    setDeposits(updatedDeposits)
  }

  useEffect(() => {
    if (isConnected && isCorrectNetwork) {
      fetchBalances()
    }
  }, [isConnected, isCorrectNetwork])

  const handleDeposit = async (token: string, amount: string) => {
    if (!isConnected || !isCorrectNetwork) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet and switch to Core Testnet",
        variant: "destructive",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid deposit amount",
        variant: "destructive",
      })
      return
    }

    try {
      // TODO: Implement contract interaction
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
      const token_contract = new ethers.Contract(token, CONTRACT_TOKEN, signer)
   
      const approval_tx = await token_contract.approve(CONTRACT_ADDRESS, ethers.parseUnits(amount, 18))
      await approval_tx.wait();

      const deposit_tx = await contract.deposit(token, ethers.parseUnits(amount, 18))
      await deposit_tx.wait();

      toast({
        title: "Deposit Successful",
        description: `Successfully deposited ${amount} ${token}`,
      })

      setDepositAmounts((prev) => ({ ...prev, [token]: "" }))

      await fetchBalances()

    } catch (error) {
      console.log("Deposit failed:")
      toast({
        title: "Deposit Failed",
        description: "Transaction failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleWithdraw = async (token: string, amount: string) => {
    if (!isConnected || !isCorrectNetwork) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet and switch to Core Testnet",
        variant: "destructive",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid withdrawal amount",
        variant: "destructive",
      })
      return
    }

    try {
      // TODO: Implement contract interaction
      console.log(token)
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

      const withdraw_tx = await contract.withdraw(token, ethers.parseUnits(amount, 18))
      await withdraw_tx.wait();
      toast({
        title: "Withdrawal Successful",
        description: `Successfully withdrew ${amount} ${token}`,
      })

      setWithdrawAmounts((prev) => ({ ...prev, [token]: "" }))

      await fetchBalances()

    } catch (error) {
      console.log("Withdrawal failed:")
      toast({
        title: "Withdrawal Failed",
        description: "Transaction failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Lend Tokens</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Deposit your tokens to earn interest. Your deposits are secured by smart contracts and you can withdraw at any
          time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportedTokens.map((token) => (
          <Card key={token.symbol} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{token.logo}</div>
                  <div>
                    <CardTitle className="text-lg">{token.symbol}</CardTitle>
                    <CardDescription>{token.name}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {token.apy} APY
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Balance Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <Wallet className="h-4 w-4 mr-1" />
                    Wallet Balance
                  </span>
                  <span className="font-medium">
                    {balances[token.symbol]} {token.symbol}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <Coins className="h-4 w-4 mr-1" />
                    Deposited
                  </span>
                  <span className="font-medium">
                    {deposits[token.symbol]} {token.symbol}
                  </span>
                </div>
              </div>

              {/* Deposit Section */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Deposit</h4>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={depositAmounts[token.symbol] || ""}
                    onChange={(e) =>
                      setDepositAmounts((prev) => ({
                        ...prev,
                        [token.symbol]: e.target.value,
                      }))
                    }
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleDeposit(token.address, depositAmounts[token.symbol] || "")}
                    className="bg-primary hover:bg-primary/90 text-black"
                    disabled={!isConnected || !isCorrectNetwork}
                  >
                    Deposit
                  </Button>
                </div>
              </div>

              {/* Withdraw Section */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Withdraw</h4>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={withdrawAmounts[token.symbol] || ""}
                    onChange={(e) =>
                      setWithdrawAmounts((prev) => ({
                        ...prev,
                        [token.symbol]: e.target.value,
                      }))
                    }
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleWithdraw(token.address, withdrawAmounts[token.symbol] || "")}
                    variant="outline"
                    disabled={!isConnected || !isCorrectNetwork}
                  >
                    Withdraw
                  </Button>
                </div>
              </div>

              {/* Earnings Preview */}
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Est. Annual Earnings
                  </span>
                  <span className="font-medium text-green-600">
                    {((Number.parseFloat(deposits[token.symbol]) * Number.parseFloat(token.apy)) / 100).toFixed(2)}{" "}
                    {token.symbol}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {(!isConnected || !isCorrectNetwork) && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-yellow-800 font-medium">
                {!isConnected ? "Connect your wallet to start lending" : "Switch to Core Testnet to continue"}
              </p>
              <p className="text-yellow-600 text-sm">
                Make sure you're connected to the Core Testnet to interact with the protocol.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
