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

const SubmitTxn = ({factory, tempAddress} : {factory: ethers.Contract, tempAddress: string}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [recipient, setRecipient] = useState("");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    async function submitTxn(addressSig: string, addressTo: string, amount: bigint, description: string) {

        console.log("Submitting proposals....")
      
        // Call the submitTransaction function
        const transaction = await factory.submitTransaction(addressSig, addressTo, amount, description);
        await transaction.wait();
     }


  return (
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
          
          const success = await submitTxn(tempAddress, recipient, BigInt(value), description);

          alert(`Proposal submitted successfully!`);

        } catch(e) {
          console.log(e);
        }
      }}>Submit</Button>
    </DialogContent>
  </Dialog>
  )
}

export default SubmitTxn
