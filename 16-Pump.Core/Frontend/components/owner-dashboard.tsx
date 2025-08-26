"use client"

import { useState } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function OwnerDashboard() {
  const { contract, account } = useWeb3()
  const { toast } = useToast()
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [isWithdrawing, setIsWithdrawing] = useState(false)

  // Mock factory fee collected - in a real implementation, this would be fetched from the contract
  const feeCollected = "0.25" // ETH

  const handleWithdraw = async () => {
    if (!contract || !account || !withdrawAmount) return

    try {
      setIsWithdrawing(true)

      // Validate the amount
      const amount = Number.parseFloat(withdrawAmount)
      if (isNaN(amount) || amount <= 0 || amount > Number.parseFloat(feeCollected)) {
        toast({
          title: "Invalid amount",
          description: "Please enter a valid amount to withdraw.",
          variant: "destructive",
        })
        setIsWithdrawing(false)
        return
      }

      // In a real implementation, this would call the contract's withdraw function
      // await contract.withdraw(parseEther(withdrawAmount))

      // Simulate a transaction delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Withdrawal successful!",
        description: `You have successfully withdrawn ${withdrawAmount} ETH.`,
      })

      setWithdrawAmount("")
    } catch (error) {
      console.error("Error withdrawing:", error)
      toast({
        title: "Transaction failed",
        description: "There was an error processing your withdrawal.",
        variant: "destructive",
      })
    } finally {
      setIsWithdrawing(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Owner Dashboard</CardTitle>
          <CardDescription>Manage your MemeFactory contract</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-orange-800">Factory Fee Collected</h3>
                <p className="text-sm text-orange-600 mt-1">Total fees collected from token creation</p>
              </div>
              <div className="text-2xl font-bold text-orange-500">{feeCollected} ETH</div>
            </div>
          </div>

          <div className="grid gap-4">
            <Label htmlFor="withdraw-amount">Withdraw Amount</Label>
            <div className="flex gap-2">
              <Input
                id="withdraw-amount"
                type="number"
                placeholder="0.0"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                min="0"
                max={feeCollected}
                step="0.01"
              />
              <Button
                onClick={handleWithdraw}
                className="bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isWithdrawing || !withdrawAmount}
              >
                {isWithdrawing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Withdraw"
                )}
              </Button>
            </div>
            <p className="text-xs text-zinc-500">You can withdraw up to {feeCollected} ETH.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Factory Settings</CardTitle>
          <CardDescription>Configure your MemeFactory contract</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="factory-fee">Factory Fee (ETH)</Label>
            <Input id="factory-fee" type="number" defaultValue="0.01" min="0" step="0.001" disabled />
            <p className="text-xs text-zinc-500">Fee required to create a new token.</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="token-limit">Token Limit</Label>
            <Input id="token-limit" type="number" defaultValue="1000" min="1" disabled />
            <p className="text-xs text-zinc-500">Maximum number of tokens that can be sold per token.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" disabled>
            Update Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
