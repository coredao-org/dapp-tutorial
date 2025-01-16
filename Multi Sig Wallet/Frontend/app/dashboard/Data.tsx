"use client";

import { useState } from "react";
import { Search, LoaderIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { client } from "../client";
import { useActiveAccount, ConnectButton, useReadContract, useSendTransaction } from "thirdweb/react";
import MultiSigCreationModal from "../create/multisigcreation";
import { defineChain, getContract, prepareContractCall } from "thirdweb";

const Data = ({setWallet}: {setWallet: (amount: any) => void}) => {

    const activeAccount = useActiveAccount();

    const { mutate: sendTransaction } = useSendTransaction();
  
    const chain = defineChain(1115);
    
      const contract = getContract({
          client,
          address: "0x3c7eD317074CB301a421aCa92Ad37941f7F030F8",
          chain: chain,
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
  
    // const { data: Wallets, isLoading } = useReadContract({
    //   contract,
    //   method: "function getAllProposals() returns ((address proposer, address to, uint256 value, string description, uint256 noOfConfirmations, bool status)[] memory)",
    //   params: [],
    // });
    
    const { data, } = useReadContract({
      contract,
      method: "function getDeployersWallets(address deployer) returns ((address walletAddress, uint256 timeCreated, uint256 balance)[] memory)",
      params: [activeAccount?.address as string],
    });
  
    const { data: testing, } = useReadContract({
      contract,
      method: "function getAllDeployedMultiSigs() returns (address[] memory)",
      params: [],
    });


    const { data: another, } = useReadContract({
      contract,
      method: "function getOwners(address) returns (address[] memory)",
      params: ["0xAe16A259c208158698D6a4b213aA9D1129EC370a"],
    });


  return (
    <div className=" mb-8 ">
      <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90" onClick={async () => {
          try {
            // const success = await SubmitTxn("0x35782541426e51F45F347B5d39Ff8Cb25FD095A6", "0x8293Fcda96Ebc985e0B3b38B81Cc50AD41dF7FA7", BigInt(200), "Hi, pay dave" )
            // console.log(success);
            console.log(testing);
            console.log(data)
            setWallet(data);
            console.log(another)
          } catch(e) {
            console.log(e);
          }
        }}>
          <LoaderIcon className="mr-2 h-4 w-4" /> Load data
        </Button>
    </div>
  )
}

export default Data
