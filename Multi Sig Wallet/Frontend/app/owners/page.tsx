'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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

// Mock data for owners
const initialOwners = [
  { address: '0x1234...5678', name: 'Alice' },
  { address: '0xabcd...efgh', name: 'Bob' },
  { address: '0x9876...5432', name: 'Charlie' },
]

export default function OwnersPage() {
  const [owners, setOwners] = useState(initialOwners)
  const [isOpen, setIsOpen] = useState(false)
  const [newOwnerAddress, setNewOwnerAddress] = useState('')
  const [newOwnerName, setNewOwnerName] = useState('')

  const handleAddOwner = (e: React.FormEvent) => {
    e.preventDefault()
    if (newOwnerAddress && newOwnerName) {
      setOwners([...owners, { address: newOwnerAddress, name: newOwnerName }])
      setNewOwnerAddress('')
      setNewOwnerName('')
      setIsOpen(false)
    }
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Manage Owners</h1>

      <div className="mb-8">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90">Add New Owner</Button>
          </DialogTrigger>
          <DialogContent className="bg-blue-900 text-white">
            <DialogHeader>
              <DialogTitle>Add New Owner</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddOwner} className="space-y-4">
              <div>
                <Label htmlFor="address">Owner Address</Label>
                <Input
                  id="address"
                  value={newOwnerAddress}
                  onChange={(e) => setNewOwnerAddress(e.target.value)}
                  className="bg-blue-800 border-blue-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="name">Owner Name</Label>
                <Input
                  id="name"
                  value={newOwnerName}
                  onChange={(e) => setNewOwnerName(e.target.value)}
                  className="bg-blue-800 border-blue-700 text-white"
                />
              </div>
              <Button type="submit" className="bg-neon-green text-blue-900 hover:bg-neon-green/90">Add Owner</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Owner Address</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {owners.map((owner, index) => (
            <TableRow key={index} className="hover:bg-blue-800/50 transition-colors">
              <TableCell>{owner.address}</TableCell>
              <TableCell>{owner.name}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm">Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardLayout>
  )
}

