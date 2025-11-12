"use client";
import { Button } from "@/components/ui/button";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { client } from "../../client";
import { useSendTransaction } from "thirdweb/react";
import { toast } from 'react-hot-toast';


const AddLiquidityButton = ({
  addressOne,
  addressTwo,
  amountOne,
  amountTwo,
  setAmountOne,
  setAmountTwo,
}: {
  addressOne: string;
  addressTwo: string;
  amountOne: string;
  amountTwo: string;
  setAddressOne: (address: string) => void;
  setAddressTwo: (address: string) => void;
  setAmountOne: (amount: string) => void;
  setAmountTwo: (amount: string) => void;
}) => {
  const routerAddress = "0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382";

  const chain = defineChain(1115);

  const contract = getContract({
    client,
    address: routerAddress,
    chain: chain,
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const AddLiquidity = async (
    addressOne: string,
    addressTwo: string,
    amountOne: bigint,
    amountTwo: bigint,
    minTokenA: bigint,
    minTokenB: bigint
  ) => {
    const addLiquidity = prepareContractCall({
      contract,
      method:
        "function addLiquidity(address tokenA, address tokenB, uint256 amountOfTokenADesired, uint256 amountOfTokenBDesired, uint256 minTokenA, uint256 minTokenB)",
      params: [addressOne, addressTwo, amountOne, amountTwo, minTokenA, minTokenB],
    });
    return new Promise((resolve, reject) => {
      sendTransaction(addLiquidity, {
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
          const loadingToast = toast.loading('Adding Liquidity...', {
            position: 'top-left',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
          });

          try {
            const amountA = BigInt(Number(amountOne) * 10 ** 18);
            const amountB = BigInt(Number(amountTwo) * 10 ** 18);

            await AddLiquidity(
              addressOne,
              addressTwo,
              amountA,
              amountB,
              BigInt(0),
              BigInt(0)
            );

            setAmountOne("");
            setAmountTwo("");
            
            toast.dismiss(loadingToast);
            toast.success('Liquidity Added Successfully! 🌊', {
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
            toast.error(`Failed to add liquidity: ${error.message}`, {
              position: 'top-left',
              duration: 5000,
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              },
            });
            console.log("Error during liquidity addition:", error);
          }
        }}
      >
        Add Liquidity
      </Button>
    </>
  );
};

export default AddLiquidityButton;
