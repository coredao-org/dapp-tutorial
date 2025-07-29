"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useWallet } from "@/components/wallet-provider"
import { useToast } from "@/hooks/use-toast"
import { AlertTriangle, Clock, DollarSign, TrendingUp } from "lucide-react"
import { CONTRACT_ABI, CONTRACT_ADDRESS, CONTRACT_TOKEN } from "../constants/constants"
import { ethers } from "ethers"

// Mock loan data - in real app, this would come from smart contract
const mockLoans = [
  {
    id: "1",
    collateralToken: "USDT",
    collateralAmount: "1500.00",
    borrowToken: "DAI",
    borrowAmount: "1000.00",
    interestAccrued: "45.67",
    totalRepayable: "1045.67",
    timeBorrowed: "2024-01-15",
    healthFactor: 1.85,
    status: "active",
  },
  {
    id: "2",
    collateralToken: "USDC",
    collateralAmount: "750.00",
    borrowToken: "USDT",
    borrowAmount: "500.00",
    interestAccrued: "23.45",
    totalRepayable: "523.45",
    timeBorrowed: "2024-01-20",
    healthFactor: 1.43,
    status: "active",
  },
  {
    id: "3",
    collateralToken: "DAI",
    collateralAmount: "2250.00",
    borrowToken: "USDC",
    borrowAmount: "1500.00",
    interestAccrued: "78.90",
    totalRepayable: "1578.90",
    timeBorrowed: "2024-01-10",
    healthFactor: 1.12,
    status: "at_risk",
  },
]

const tokenMap = {
    USDT: "0x367a5a4C14214BfE67d3C00A97F19Cecd2cf9e87",
    DAI: "0x7a8eF80C8136862fc7402E8Cfb9Cd1ea9c3BFB4B",
    USDC: "0x2bE22845339D49E9b296AbA5462D78F2e929DB05",
  }
  
  interface Loans {
    user: string
    borrowToken: string
    collateralToken: string
    borrowedAmount: number
    collateralAmount: number
    totalRepayable: number
    healthFactor: number
  }

  

export default function LoansPage() {
  const { isConnected, isCorrectNetwork, provider, signer } = useWallet()
  const { toast } = useToast()
  const [loans, setLoans] = useState<Loans[]>([])

  const fetchLoans = async () => {
    if (!provider || !signer) return

    try {
      console.log("Yup")
      const userAddress = await signer.getAddress()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
      const allLoans = []

      for (const symbol of Object.keys(tokenMap)) {
        console.log("In here")
        const tokenAddress = tokenMap[symbol as keyof typeof tokenMap]
        const loanData = await contract.getLoanDetails(userAddress, tokenAddress)
        console.log(loanData)
        if (loanData.collateralAmount > 0 || loanData.totalBorrowAmount > 0) {
          const collateral = Number(loanData.collateralAmount) / 1e18
          const borrowed = Number(loanData.totaltotalBorrowAmount) / 1e18
          const totalRepayable = borrowed * 1.1
          const healthFactor = collateral / totalRepayable

          allLoans.push({
            user: userAddress,
            borrowToken: symbol,
            collateralToken: symbol,
            borrowedAmount: borrowed,
            collateralAmount: collateral,
            totalRepayable,
            healthFactor,
          })
        }
      }
      setLoans(allLoans)
    } catch (err) {
      console.error("Loan fetch failed", err)
    }
  }

  const handleRepay = async (loanId: any, amount: any) => {
    if (!isConnected || !isCorrectNetwork) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet and switch to Core Testnet",
        variant: "destructive",
      })
      return
    }

    try {
      // TODO: Implement contract interaction
      // const contract = new ethers.Contract(contractAddress, abi, provider.getSigner())
      // await contract.repay(loanId, ethers.parseUnits(amount, 18))

      toast({
        title: "Repayment Successful",
        description: `Successfully repaid loan ${loanId}`,
      })
    } catch (error) {
      console.error("Repayment failed:", error)
      toast({
        title: "Repayment Failed",
        description: "Transaction failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleLiquidate = async (loanId: any) => {
    if (!isConnected || !isCorrectNetwork) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet and switch to Core Testnet",
        variant: "destructive",
      })
      return
    }

    try {
      // TODO: Implement contract interaction
      // const contract = new ethers.Contract(contractAddress, abi, provider.getSigner())
      // await contract.liquidate(loanId)

      toast({
        title: "Liquidation Successful",
        description: `Successfully liquidated loan ${loanId}`,
      })
    } catch (error) {
      console.error("Liquidation failed:", error)
      toast({
        title: "Liquidation Failed",
        description: "Transaction failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getHealthFactorColor = (healthFactor: number) => {
    if (healthFactor >= 1.5) return "text-green-600"
    if (healthFactor >= 1.2) return "text-yellow-600"
    return "text-red-600"
  }

  const getHealthFactorBadge = (healthFactor: number) => {
    if (healthFactor >= 1.5) return <Badge className="bg-green-100 text-green-800">Healthy</Badge>
    if (healthFactor >= 1.2) return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
    return <Badge className="bg-red-100 text-red-800">At Risk</Badge>
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return `${diffDays} days ago`
  }

    useEffect(() => {
      if (isConnected && isCorrectNetwork) fetchLoans()
    }, [isConnected])

  const totalBorrowed = loans.reduce((sum, loan) => sum + loan.borrowedAmount, 0)
  const totalCollateral = loans.reduce((sum, loan) => sum + loan.collateralAmount, 0)
  const totalInterest = loans.reduce((sum, loan) => sum + (loan.totalRepayable - loan.borrowedAmount), 0)

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">My Loans</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Monitor your active loans, track interest accrual, and manage repayments. Keep your health factor above 1.2 to
          avoid liquidation.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Borrowed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBorrowed.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Across {loans.length} active loans</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collateral</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCollateral.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Locked as collateral</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interest</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalInterest.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Accrued interest</p>
          </CardContent>
        </Card>
      </div>

      {/* Loans Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Loans</CardTitle>
          <CardDescription>Manage your borrowing positions and monitor health factors</CardDescription>
        </CardHeader>
        <CardContent>
          {loans.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No active loans found</p>
              <p className="text-sm text-gray-400 mt-2">Visit the Borrow page to create your first loan</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Collateral</TableHead>
                    <TableHead>Borrowed</TableHead>
                    <TableHead>Interest</TableHead>
                    <TableHead>Total Repayable</TableHead>
                    <TableHead>Health Factor</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loans.map((loan, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">
                            {loan.collateralAmount} {loan.collateralToken}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">
                            {loan.borrowedAmount} {loan.borrowToken}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-red-600">
                          +{loan.totalRepayable - loan.borrowedAmount} {loan.borrowToken}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {loan.totalRepayable} {loan.borrowToken}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className={`font-medium ${getHealthFactorColor(loan.healthFactor)}`}>
                            {loan.healthFactor.toFixed(2)}
                          </div>
                          {getHealthFactorBadge(loan.healthFactor)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-500">{loan.borrowedAmount}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleRepay(1, 10)}
                            disabled={!isConnected || !isCorrectNetwork}
                          >
                            Repay
                          </Button>
                          {loan.healthFactor < 1.2 && (
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleLiquidate(1)}
                              disabled={!isConnected || !isCorrectNetwork}
                            >
                              Liquidate
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Risk Warning */}
      <Card className="border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
            <div className="space-y-1">
              <p className="text-red-800 font-medium text-sm">Liquidation Risk Management</p>
              <p className="text-red-700 text-sm">
                Monitor your health factors closely. Loans with health factors below 1.2 are at risk of liquidation.
                Consider adding more collateral or repaying part of your loan to maintain a healthy position.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {(!isConnected || !isCorrectNetwork) && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-yellow-800 font-medium">
                {!isConnected ? "Connect your wallet to view your loans" : "Switch to Core Testnet to continue"}
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
