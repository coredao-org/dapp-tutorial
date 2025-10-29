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
        try {
            console.log("Submitting proposals....")
            console.log("Wallet address (addressSig):", addressSig);
            console.log("Recipient address (addressTo):", addressTo);
            
            // Validate inputs
            if (!addressSig || addressSig === "" || addressSig.trim() === "") {
                console.error("Wallet address is empty or invalid:", addressSig);
                throw new Error("Invalid wallet address: Please add a MultiSig wallet address first");
            }
            
            // Validate wallet address format
            if (!ethers.isAddress(addressSig)) {
                console.error("Wallet address format is invalid:", addressSig);
                throw new Error(`Invalid wallet address format: ${addressSig}`);
            }
            
            if (!addressTo || addressTo === "") {
                throw new Error("Recipient address is required");
            }
            
            if (!ethers.isAddress(addressTo)) {
                throw new Error("Invalid recipient address format");
            }
            
            if (amount <= 0n) {
                throw new Error("Amount must be greater than 0");
            }
            
            if (!description || description === "") {
                throw new Error("Description is required");
            }
          
            // Call the submitTransaction function
            const transaction = await factory.submitTransaction(addressSig, addressTo, amount, description);
            await transaction.wait();
            
            console.log("Transaction submitted successfully!");
            return true;
        } catch (error) {
            console.error("Error submitting transaction:", error);
            throw error;
        }
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
          // Log the tempAddress value for debugging
          console.log("tempAddress received:", tempAddress);
          console.log("tempAddress type:", typeof tempAddress);
          console.log("tempAddress length:", tempAddress?.length);
          
          // Validate wallet address first
          if (!tempAddress || tempAddress.trim() === "") {
            alert("Please add a MultiSig wallet address first using the 'Add MultiSig' button");
            return;
          }
          
          if (!ethers.isAddress(tempAddress)) {
            alert(`Invalid MultiSig wallet address format: ${tempAddress}`);
            return;
          }
          
          // Validate form inputs
          if (!recipient || recipient === "") {
            alert("Please enter a recipient address");
            return;
          }
          
          if (!ethers.isAddress(recipient)) {
            alert("Invalid recipient address format");
            return;
          }
          
          if (!value || value === "" || parseFloat(value) <= 0) {
            alert("Please enter a valid amount");
            return;
          }
          
          if (!description || description === "") {
            alert("Please enter a description");
            return;
          }
          
          // Convert value to wei (assuming Core uses 18 decimals like Ethereum)
          const amountInWei = ethers.parseEther(value);
          
          console.log("Calling submitTxn with:", {
            walletAddress: tempAddress,
            recipient: recipient,
            amount: amountInWei.toString(),
            description: description
          });
          
          const success = await submitTxn(tempAddress, recipient, amountInWei, description);

          if (success) {
            alert(`Proposal submitted successfully!`);
            setIsOpen(false);
            // Reset form
            setRecipient("");
            setValue("");
            setDescription("");
          }

        } catch(e: any) {
          console.error("Error:", e);
          alert(`Error: ${e.message || "Failed to submit transaction"}`);
        }
      }}>Submit</Button>
    </DialogContent>
  </Dialog>
  )
}

export default SubmitTxn
