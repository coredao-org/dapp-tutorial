"use client";
import { Button } from "@/components/ui/button";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { client } from "../client";
import { useSendTransaction } from "thirdweb/react";
import { toast } from 'react-hot-toast';


const ApproveButton = ({
  addressOne,
  setAddressOne,
  amountOne,
  setAmountOne, 
}: {addressOne: string, setAddressOne: (address: string) => void, amountOne: string, setAmountOne: (amount: string) => void}) => {

        
  const chain = defineChain(1115);
  
    const contract = getContract({
        client,
        address: addressOne,
        chain: chain,
      });
    
      const { mutate: sendTransaction } = useSendTransaction();

    const Approve = async (address: string, amount: bigint) => {
        const approve = prepareContractCall({
          contract,
          method: "function approve(address to, uint256 amount)",
          params: [address, amount],
        });
        return new Promise((resolve, reject) => {
          sendTransaction(approve, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
    };

    return (
      <>
        <Button
          className="w-full"
          onClick={async () => {
            const loadingToast = toast.loading('Approving Tokens...', {
              position: 'top-left',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              },
            });

            try {
              const amount = BigInt(Number(amountOne) * 10 ** 18);
              const routerAddress = "0xb7e2979167e46A03Cf44171c349945D7041B6C2D";

              await Approve(routerAddress, amount);
              setAmountOne("");
              
              toast.dismiss(loadingToast);
              toast.success('Tokens Approved Successfully! ✅', {
                position: 'top-left',
                duration: 4000,
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              });
            } catch (error: any) {
              toast.dismiss(loadingToast);
              toast.error(`Approval Failed: ${error.message}`, {
                position: 'top-left',
                duration: 5000,
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
              });
              console.log("Error during approval:", error);
            }
          }}
        >
          Approve Tokens
        </Button>
      </>
    );
};

export default ApproveButton;
