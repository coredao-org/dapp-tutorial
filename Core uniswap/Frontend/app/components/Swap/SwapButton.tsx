"use client";
import { Button } from "@/components/ui/button";
import { toast } from 'react-hot-toast';
import { useSendTransaction } from "thirdweb/react";
import { client } from "../../client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const SwapButton = ({addressOne, addressTwo, amountOne, amountTwo, setAmountOne, setAmountTwo}: {addressOne: string, addressTwo: string, amountOne: string, amountTwo: string, setAddressOne: (address: string) => void, setAddressTwo: (address: string) => void, setAmountOne: (amount: string) => void, setAmountTwo: (amount: string) => void}) => {

    const chain = defineChain(1115);
    
    const contract = getContract({
      client,
      address: "0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382",
      chain: chain,
    });
  
    const { mutate: sendTransaction } = useSendTransaction();
  
    const SwapTokens = async (amountIn: bigint, amountOut: bigint, path: string[]) => {
      const swap = prepareContractCall({
        contract,
        method: "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] memory path)",
        params: [amountIn, amountOut, path],
      });
      return new Promise((resolve, reject) => {
        sendTransaction(swap, {
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
                          const loadingToast = toast.loading('Swapping Tokens...', {
                            position: 'top-left',
                            style: {
                              borderRadius: '10px',
                              background: '#333',
                              color: '#fff',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            },
                          });

                          try {
                            const amountIn = BigInt(Number(amountOne) * 1e18);
                            const amountOut = BigInt(Number(amountTwo) * 1e18);

                            await SwapTokens(amountIn, amountOut, [addressOne, addressTwo]);

                            setAmountOne("");
                            setAmountTwo("");
                            
                            toast.dismiss(loadingToast);
                            toast.success('Swap Completed Successfully! 💱', {
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
                            toast.error(`Swap Failed: ${error.message}`, {
                              position: 'top-left',
                              duration: 5000,
                              style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                              },
                            });
                            console.log("Error during swap:", error);
                          }
                        }}
                      >
                        Swap Tokens
                      </Button>
     </>
  );
};

export default SwapButton;
