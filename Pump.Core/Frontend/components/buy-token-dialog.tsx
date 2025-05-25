"use client"

import type React from "react"

import { useState } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { parseEther } from "ethers"
import { useToast } from "@/hooks/use-toast"
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

interface BuyTokenDialogProps {
  token: TokenSale
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BuyTokenDialog({ token, open, onOpenChange }: BuyTokenDialogProps) {
  const { contract, account, isCorrectNetwork } = useWeb3()
  const { toast } = useToast()
  const [amount, setAmount] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [pricePerToken, setPricePerToken] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1);

  const forMath = 10**18;

  // This would be calculated from the contract in a real implementation
  const calculatePrice = async (amount: number) => {
    // Mock implementation of getCost(sold) * amount
    // In a real app, this would call the contract's getCost function
    console.log("hii")
      const cost = await contract.getCost(token.sold);
      console.log(cost)
      console.log(token.address)
      const amountt = ethers.parseEther(amount.toString())
      console.log(amountt)
      const value = BigInt(cost ) * ( amountt / ethers.parseEther("1"));
      console.log(value)

      setPricePerToken(cost);
      setTotalPrice(Number(value));

      return value;
  }

  const price = calculatePrice(amount)

  const handleAmountChange = (value: number[]) => {
    setAmount(value[0])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 1 && value <= 1000) {
      setAmount(value)
    }
  }

  const handleBuy = async () => {
    if (!contract || !account || !isCorrectNetwork) return

    try {
      setIsLoading(true)

      // Calculate the cost in wei
      const costInWei = parseEther(price.toString())

      // In a real implementation, this would call the contract's buyToken function
      console.log("hii")
      const cost = await contract.getCost(token.sold);
      console.log(cost)
      console.log(token.address)
      const amountt = ethers.parseEther(amount.toString())
      console.log(amountt)
      const value = BigInt(cost ) * ( amountt / ethers.parseEther("1"));
      console.log(value)

      const tx = await contract.buyToken(token.address, amount, { value: value })

      await tx.wait();

      // // Simulate a transaction delay
      // await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Tokens purchased!",
        description: `You have successfully purchased ${amount} ${token.symbol} tokens.`,
      })

      const name = token.name;
      const symbol = token.symbol

      window.dispatchEvent(new CustomEvent("tokenLaunched", {
        detail: { name, symbol},
      }));

      onOpenChange(false)
    } catch (error) {
      console.error("Error buying tokens:", error)
      toast({
        title: "Transaction failed",
        description: "There was an error processing your transaction.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!isCorrectNetwork && account) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Network Switch Required</DialogTitle>
            <DialogDescription>Please switch to Core Testnet 2 to buy tokens.</DialogDescription>
          </DialogHeader>
          <div className="py-4 flex justify-center">
            <NetworkSwitcher />
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image src={token.pfpUrl || "/placeholder.svg"} alt={token.name} fill className="object-cover" />
            </div>
            Buy {token.name} Tokens
          </DialogTitle>
          <DialogDescription>Select the amount of ${token.symbol} tokens you want to purchase.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount
              </label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={handleInputChange}
                min={1}
                max={1000}
                className="w-20 h-8"
              />
            </div>

            <Slider
              value={[amount]}
              min={1}
              max={1000}
              step={1}
              onValueChange={handleAmountChange}
              className="[&>span]:bg-orange-500"
            />

            <div className="flex justify-between text-sm">
              <span>1</span>
              <span>500</span>
              <span>1000</span>
            </div>
          </div>

          <div className="bg-zinc-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-zinc-500">Price per token</span>
              <span className="font-medium">{pricePerToken} tCORE2</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total price</span>
              <span className="text-orange-500">{totalPrice / forMath} tCORE2</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleBuy}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isLoading || !account || !isCorrectNetwork}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              `Buy ${amount} Tokens`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
