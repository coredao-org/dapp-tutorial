'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'

// Mock data for transactions
const transactions = [
  { id: '1', recipient: '0x1234...5678', value: '1.5', status: 'Pending', confirmations: 1 },
  { id: '2', recipient: '0xabcd...efgh', value: '0.5', status: 'Executed', confirmations: 3 },
  { id: '3', recipient: '0x9876...5432', value: '2.0', status: 'Rejected', confirmations: 2 },
]

export default function WalletPage({ params }: { params: { address: string } }) {
  const [isOpen, setIsOpen] = useState(false)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case 'Executed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'Rejected':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Wallet: {params.address}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-blue-800 border-blue-700">
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-neon-green">25.5 ETH</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-800 border-blue-700">
          <CardHeader>
            <CardTitle>Owners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3/5</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-800 border-blue-700">
          <CardHeader>
            <CardTitle>Pending Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 space-x-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90">Submit Transaction</Button>
          </DialogTrigger>
          <DialogContent className="bg-blue-900 text-white">
            <DialogHeader>
              <DialogTitle>Submit Transaction</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="recipient">Recipient Address</Label>
                <Input id="recipient" className="bg-blue-800 border-blue-700 text-white" />
              </div>
              <div>
                <Label htmlFor="value">Value (ETH)</Label>
                <Input id="value" type="number" step="0.01" className="bg-blue-800 border-blue-700 text-white" />
              </div>
              <div>
                <Label htmlFor="data">Optional Data</Label>
                <Input id="data" className="bg-blue-800 border-blue-700 text-white" />
              </div>
              <Button type="submit" className="bg-neon-green text-blue-900 hover:bg-neon-green/90">Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
        <Button className="bg-blue-700 hover:bg-blue-600">Confirm Transaction</Button>
        <Button className="bg-red-700 hover:bg-red-600">Revoke Transaction</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Recipient Address</TableHead>
            <TableHead>Value (ETH)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Confirmations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id} className="hover:bg-blue-800/50 transition-colors">
              <TableCell>{tx.id}</TableCell>
              <TableCell>{tx.recipient}</TableCell>
              <TableCell>{tx.value}</TableCell>
              <TableCell className="flex items-center">
                {getStatusIcon(tx.status)}
                <span className="ml-2">{tx.status}</span>
              </TableCell>
              <TableCell>{tx.confirmations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardLayout>
  )
}

