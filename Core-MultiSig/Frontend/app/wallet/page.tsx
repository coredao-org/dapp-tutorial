'use client'

import { useEffect, useState } from 'react'
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
import { client } from "../client"
import { useActiveAccount, ConnectButton } from "thirdweb/react";
import { ethers } from 'ethers';
import SubmitTxn from './DialogBoxes/Submit'

// ABIs & Configs
import MultiSigFactory from "../constants/MultiSigFactory.json";
import config from "../constants/config.json";
import ConfirmTxn from './DialogBoxes/Confirm'
import RevokeTxn from './DialogBoxes/Revoke'
import ExecuteTxn from './DialogBoxes/Execute'

// Mock data for transactions
const transactions = [
  { id: '1', recipient: '0x1234...5678', value: '1.5', status: 'Pending', confirmations: 1 },
  { id: '2', recipient: '0xabcd...efgh', value: '0.5', status: 'Executed', confirmations: 3 },
  { id: '3', recipient: '0x9876...5432', value: '2.0', status: 'Rejected', confirmations: 2 },
]



export default function WalletPage() {

  const activeAccount = useActiveAccount();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isWallet, setIsWallet] = useState("");
  const [tempAddress, setTempAddress] = useState(""); // Temporary variable for input
  const [factory, setFactory] = useState<ethers.Contract | any>();
  const [provider, setProvider] = useState<ethers.BrowserProvider | undefined>(undefined);
  const [proposals, setProposals] = useState<any[]>([])

  async function loadBlockchainData() {
    if (typeof (window as any).ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider((window as any).ethereum);

      console.log("Loading Blockchain data...");
  
      const signer = await provider.getSigner();
  
      const network = await provider.getNetwork();
  
      const chainId = network.chainId.toString();
      const address = config[`${network.chainId}` as keyof typeof config].factory.address as string;
  
      const contractFactory = new ethers.Contract(address, MultiSigFactory, signer);
      console.log(contractFactory);
      setFactory(contractFactory)
  
      console.log("Data loading done!");
    }
  }



  useEffect(() => {
    loadBlockchainData();
  }, []);

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

        <SubmitTxn factory={factory} tempAddress={tempAddress} />

        <ConfirmTxn factory={factory} tempAddress={tempAddress} />

        <RevokeTxn factory={factory} tempAddress={tempAddress} />

        <ExecuteTxn factory={factory} tempAddress={tempAddress} />
        
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

