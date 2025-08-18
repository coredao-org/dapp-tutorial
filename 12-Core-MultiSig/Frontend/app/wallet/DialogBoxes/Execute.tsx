import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import { Button } from '@/components/ui/button'
  import { ethers } from 'ethers';

const ExecuteTxn = ({factory, tempAddress} : {factory: ethers.Contract, tempAddress: string}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    async function executeTxn(addressSig: string, amount: bigint) {

        console.log("Executing proposal....")
      
        // Call the executeTransaction function
        const transaction = await factory.executeTransaction(addressSig, amount);
        await transaction.wait();
     }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogTrigger asChild>
      <Button className="bg-red-700 hover:bg-red-600">Execute Proposal</Button>
    </DialogTrigger>
    <DialogContent className="bg-blue-900 text-white">
      <DialogHeader>
        <DialogTitle>Execute Transaction</DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        <div>
          <Label htmlFor="value">Proposal Index</Label>
          <Input id="value" type="number" step="1" className="bg-blue-800 border-blue-700 text-white" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
        
      </form>
      <Button type="submit" className="bg-neon-green text-blue-900 hover:bg-neon-green/90" onClick={async() => {
        try {
          
          const success = await executeTxn(tempAddress, BigInt(value));

          alert(`Proposal Execute!`);

        } catch(e) {
          console.log(e);
          alert("No Proposal!")
        }
      }}>Execute</Button>
    </DialogContent>
  </Dialog>
  )
}

export default ExecuteTxn
