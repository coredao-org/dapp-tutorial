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

const ConfirmTxn = ({factory, tempAddress} : {factory: ethers.Contract, tempAddress: string}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    async function confirmTxn(addressSig: string, amount: bigint) {

        console.log("Confirming proposal....")
      
        // Call the submitTransaction function
        const transaction = await factory.confirmTransaction(addressSig, amount);
        await transaction.wait();
     }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogTrigger asChild>
      <Button className="bg-blue-700 hover:bg-blue-600">Confirm Proposal</Button>
    </DialogTrigger>
    <DialogContent className="bg-blue-900 text-white">
      <DialogHeader>
        <DialogTitle>Confirm Transaction</DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        <div>
          <Label htmlFor="value">Proposal Index</Label>
          <Input id="value" type="number" step="0.01" className="bg-blue-800 border-blue-700 text-white" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
        
      </form>
      <Button type="submit" className="bg-neon-green text-blue-900 hover:bg-neon-green/90" onClick={async() => {
        try {
          
          const success = await confirmTxn(tempAddress, BigInt(value));

          alert(`Proposal Confirmed!`);

        } catch(e) {
          console.log(e);
          alert("Already confirmed")
        }
      }}>Confirm</Button>
    </DialogContent>
  </Dialog>
  )
}

export default ConfirmTxn
