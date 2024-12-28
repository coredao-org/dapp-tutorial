"use client";
import { Button } from "@/components/ui/button";
import { getContract, prepareContractCall, defineChain } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { client } from "../../client";
import { useSendTransaction } from "thirdweb/react";
import { toast } from 'react-hot-toast';



const MintButton = ({
  addressOne,
  addressTwo,
  setAddressOne,
  amountOne,
  setAmountOne, 
}: {addressOne: string, addressTwo: string, setAddressOne: (address: string) => void, amountOne: string, setAmountOne: (amount: string) => void}) => {

  const chain = defineChain(1115);
        
    const contract = getContract({
        client,
        address: addressTwo,
        chain: chain,
      });
    
      const { mutate: sendTransaction } = useSendTransaction();

      const Mint = async (address: string, amount: bigint) => {
        const approve = prepareContractCall({
          contract,
          method: "function mint(address to, uint256 amount)",
          params: [address, amount], // type safe params
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
          const loadingToast = toast.loading('Minting Tokens...', {
            position: 'top-left',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });

          try {
            const amount = BigInt(Number(amountOne) * 10 ** 18);
            await Mint(addressOne, amount);
            setAmountOne("");
            
            // Dismiss loading toast and show success toast
            toast.dismiss(loadingToast);
            toast.success('Tokens Minted Successfully! 🎉', {
              position: 'top-left',
              duration: 4000,
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            });
          } catch (error: any) {
            toast.dismiss(loadingToast);
            toast.error('Failed to mint: ' + error.message, {
              position: 'top-left',
              duration: 4000,
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            });
            console.log("Error during mint:", error);
          }
        }}
      >
        Mint Tokens
      </Button>
    </>
  );
};

export default MintButton;
