"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { ethers } from "ethers";

// ABIs & Configs
import MultiSigFactory from "../constants/MultiSigFactory.json";
import config from "../constants/config.json";


export default function CreateMultiSigWallet(provider: any, factory: any) {
  const [name, setName] = useState("");
  const [owners, setOwners] = useState([""]);
  const [requiredConfirmations, setRequiredConfirmations] = useState(1);
  const [isCreating, setIsCreating] = useState(false);


  const handleAddOwner = () => setOwners([...owners, ""]);

  const handleOwnerChange = (index: number, value: string) => {
    const newOwners = [...owners];
    newOwners[index] = value;
    setOwners(newOwners);
  };

  const handleRemoveOwner = (index: number) => {
    const newOwners = owners.filter((_, i) => i !== index);
    setOwners(newOwners);
  };


  async function createMultiSig(addresses: string[], amount: bigint) {
    if (typeof (window as any).ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
  
      console.log("Creating multisig....");
  
      const signer = await provider.getSigner();
  
      const network = await provider.getNetwork();
  
      const chainId = network.chainId.toString();
      const address = config[`${network.chainId}` as keyof typeof config].factory.address as string;
  
      const contractFactory = new ethers.Contract(address, MultiSigFactory, signer);
      console.log(contractFactory);
  
      const value = ethers.parseEther("0.01");
  
      // Call the createMultiSig function
      const transaction = await contractFactory.createMultiSig(addresses, amount, { value });
      await transaction.wait();
  
      console.log("Done!");
    }
  }
  



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    setTimeout(() => {
      console.log("Wallet created:", { name, owners, requiredConfirmations });
      setIsCreating(false);
    }, 2000);
  };

  return (
    <div className="max-h-screen overflow-y-auto px-4 py-4">
      <Card className="w-full max-w-2xl bg-blue-800 text-white mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Multi-Signature Wallet
          </CardTitle>
          <CardDescription className="text-center text-gray-300">
            Set up a new multi-signature wallet by providing the required
            information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Wallet Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-blue-700 border-blue-600 text-white"
                required
              />
            </div>
            <div>
              <Label>Owners</Label>
              {owners.map((owner, index) => (
                <div key={index} className="flex items-center mt-2 space-x-2">
                  <Input
                    value={owner}
                    onChange={(e) => handleOwnerChange(index, e.target.value)}
                    placeholder={`Owner ${index + 1} address`}
                    className="bg-blue-700 border-blue-600 text-white flex-grow"
                    required
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveOwner(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddOwner}
                className="mt-4"
              >
                Add Owner
              </Button>
            </div>
            <div>
              <Label htmlFor="requiredConfirmations">
                Required Confirmations
              </Label>
              <Input
                id="requiredConfirmations"
                type="number"
                min={1}
                max={owners.length}
                value={requiredConfirmations}
                onChange={(e) =>
                  setRequiredConfirmations(parseInt(e.target.value))
                }
                className="bg-blue-700 border-blue-600 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-neon-green text-blue-900 hover:bg-neon-green/90"
              disabled={isCreating}
              onClick={async () => {
                try {
                  const success = await createMultiSig(
                    owners,
                    BigInt(requiredConfirmations)
                  );
                  alert(`Sucess: ${success}`)
                } catch (e) {
                  alert(e);
                }
              }}
            >
              {isCreating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Wallet"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
