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
import { client } from "../../client"
import { useActiveAccount, ConnectButton, useSendTransaction, useReadContract } from "thirdweb/react";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { Description } from '@radix-ui/react-dialog'

// Mock data for transactions
const transactions = [
  { id: '1', recipient: '0x1234...5678', value: '1.5', status: 'Pending', confirmations: 1 },
  { id: '2', recipient: '0xabcd...efgh', value: '0.5', status: 'Executed', confirmations: 3 },
  { id: '3', recipient: '0x9876...5432', value: '2.0', status: 'Rejected', confirmations: 2 },
]



export default function WalletPage({ params }: { params: { address: string } }) {

  const chain = defineChain(1115);
  
    const contract = getContract({
        client,
        address: "0x3c7eD317074CB301a421aCa92Ad37941f7F030F8",
        chain: chain,
      });
    
      const { mutate: sendTransaction } = useSendTransaction();

    const CreateMultiSig = async (address: string[], amount: bigint) => {
        const approve = prepareContractCall({
          contract,
          method: "function createMultiSig(address[] memory _owners, uint256 _noOfConfirmations)",
          params: [address, amount],
        });
        return new Promise((resolve, reject) => {
          sendTransaction(approve, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
    };

    const { data: testing, } = useReadContract({
      contract,
      method: "function getAllDeployedMultiSigs() returns (address[] memory)",
      params: [],
    });

    const SubmitTxn = async (addressSig: string, addressTo: string, amount: bigint, description: string) => {
      const approve = prepareContractCall({
        contract,
        method:
          "function submitTransaction(address multisigAddress, address _to, uint256 _value, string memory _description)",
        params: [addressSig, addressTo, amount, description],
      });
      return new Promise((resolve, reject) => {
        sendTransaction(approve, {
          onSuccess: () => resolve(true),
          onError: (error) => reject(error),
        });
      });
    };


    const ConfirmTxn = async (addressSig: string, index: bigint) => {
      const approve = prepareContractCall({
        contract,
        method:
          "function confirmTransaction(address multisigAddress, uint256 _proposalIndex)",
        params: [addressSig, index],
      });

      return new Promise((resolve, reject) => {
        sendTransaction(approve, {
          onSuccess: () => resolve(true),
          onError: (error) => reject(error),
        });
      });
    };

  const activeAccount = useActiveAccount();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isWallet, setIsWallet] = useState("");
  const [tempAddress, setTempAddress] = useState(""); // Temporary variable for input
  const [recipient, setRecipient] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    setIsWallet(tempAddress); // Update isWallet only after submitting
    console.log("Wallet Address Added:", tempAddress);
  };

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
      <div className="flex items-center justify-between mb-9">
        <div>
            <h1 className="text-3xl font-bold">
            Wallet: 
          </h1>
          <p>{activeAccount?.address || "Not connected"}</p>
        </div>
      
      {activeAccount?.address ? (
        <>
        <Dialog open={isAdd} onOpenChange={setIsAdd}>
        <DialogTrigger asChild>
          <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90">Add MultiSig</Button>
        </DialogTrigger>
        <DialogContent className="bg-blue-900 text-white">
          <DialogHeader>
            <DialogTitle>Interact with MultiSig</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="address">MultiSig Address</Label>
              <Input
                id="address"
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
                className="bg-blue-800 border-blue-700 text-white"
              />
            </div>
          </form>
          <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90" onClick={() => handleSubmit()}>Add Wallet</Button>
        </DialogContent>
      </Dialog>
      <p>{isWallet}</p>
      </>
      ) : (
        <ConnectButton client={client} />
      )}
    </div>
      
      
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
            <CardTitle>Confirmations</CardTitle>
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
                <Input id="recipient" className="bg-blue-800 border-blue-700 text-white" value={recipient} onChange={(e) => setRecipient(e.target.value)}/>
              </div>
              <div>
                <Label htmlFor="value">Value (Core)</Label>
                <Input id="value" type="number" step="0.01" className="bg-blue-800 border-blue-700 text-white" value={value} onChange={(e) => setValue(e.target.value)}/>
              </div>
              <div>
                <Label htmlFor="data">Description</Label>
                <Input id="data" className="bg-blue-800 border-blue-700 text-white" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              
            </form>
            <Button type="submit" className="bg-neon-green text-blue-900 hover:bg-neon-green/90" onClick={async() => {
              try {
                
                // const success = await SubmitTxn(tempAddress, recipient, BigInt(value), description);
                // console.log(success)
                console.log(tempAddress)
                console.log(description);
                console.log(recipient)
                console.log(testing)
              } catch(e) {
                console.log(e);
              }
            }}>Submitt</Button>
          </DialogContent>
        </Dialog>
        <Button className="bg-blue-700 hover:bg-blue-600"  onClick={async() => {
              try {
                
                await ConfirmTxn(tempAddress, BigInt(200));
                // console.log(success)
                console.log(tempAddress)
                console.log(description);
                console.log(recipient)
                console.log(testing)
              } catch(e) {
                console.log(e);
              }
            }}> Confirm Transaction </Button>
        <Button className="bg-red-700 hover:bg-red-600">Revoke Transaction</Button>
        <Button className="bg-red-700 hover:bg-red-600">Execute Transaction</Button>
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

