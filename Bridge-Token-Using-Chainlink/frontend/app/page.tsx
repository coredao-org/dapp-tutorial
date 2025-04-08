"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { parseEther } from "viem";
import CrosschainABI from "@/ABI/CrosschainBridge.json";
import UsdcABI from "@/ABI/USDC.json";
import { walletConfig } from "@/WalletConfig";

interface notificationInterfact {
  message: string;
  type: string;
}

export default function Home() {
  const BridgeToken_CORE = "0xfa2Bf83Eb2b6e16a469abD3a514b6626206b0c9A";
  const BridgeToken_SEPOLIA = "0xa2024ba377ADc11388766d873406fd3C666f6d6A";
  const tUSDC_ADDRESS_CORE = "0xb320c17e33cfb20d143db0f49e531c1762025d0f";
  const tUSDC_ADDRESS_SEPOLIA = "0x58e5Daaa9af5849BB2f9F5C7679b84b9465fab0e";
  const Core_Chain_Selector = "4264732132125536123";
  const Sepolia_Chain_Selector = "16015286601757825753";

  const [amount, setAmount] = useState("0");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] =
    useState<notificationInterfact | null>();

  const { writeContract } = useWriteContract();
  const { address, isConnected, chain } = useAccount();
  const {
    data: balanceData,
    isLoading,
    isError,
  } = useBalance({
    address,
    token: chain?.id == 11155111 ? tUSDC_ADDRESS_SEPOLIA : tUSDC_ADDRESS_CORE,
  });

  const handleBridge = async (amount: string) => {
    console.log("handle bridge");
    if (!chain) return;

    let chainSelector =
      chain.id === 11155111 ? Core_Chain_Selector : Sepolia_Chain_Selector;
    let Contract =
      chain.id === 11155111 ? BridgeToken_SEPOLIA : BridgeToken_CORE;
    let Receiver =
      chain.id === 11155111 ? BridgeToken_CORE : BridgeToken_SEPOLIA;
    let Token =
      chain.id === 11155111 ? tUSDC_ADDRESS_SEPOLIA : tUSDC_ADDRESS_CORE;

    try {
      setLoading(true);

      // Step 1: Approve the contract to spend the token
      const approveTx = await new Promise<`0x${string}`>((resolve, reject) => {
        writeContract(
          {
            abi: UsdcABI,
            address: Token as `0x${string}`,
            functionName: "approve",
            args: [Contract, parseEther(amount)],
          },
          {
            onSuccess: (hash) => resolve(hash),
            onError: (error) => reject(error),
          }
        );
      });

      console.log("Approval transaction sent:", approveTx);

      // Step 2: Wait for confirmation
      const receipt = await waitForTransactionReceipt(walletConfig, {
        hash: approveTx,
      });

      if (receipt.status !== "success") throw new Error("Approval failed");

      // Step 3: Bridge the tokens using bridgeTokens
      const transferTx = await new Promise<`0x${string}`>((resolve, reject) => {
        writeContract(
          {
            abi: CrosschainABI,
            address: Contract as `0x${string}`,
            functionName: "bridgeTokens",
            args: [chainSelector, Receiver, parseEther(amount)],
          },
          {
            onSuccess: (hash) => resolve(hash),
            onError: (error) => reject(error),
          }
        );
      });

      console.log("Transfer transaction sent:", transferTx);

      // Step 4: Wait for confirmation
      const receipt2 = await waitForTransactionReceipt(walletConfig, {
        hash: transferTx,
      });

      if (receipt2.status !== "success") throw new Error("Approval failed");

      setNotification({
        message: "Bridge tUSDC successfully!",
        type: "success",
      });
      setLoading(false);
    } catch (error) {
      console.error("Transaction failed:", error);
      setNotification({
        message: "Error happened while bridging!",
        type: "error",
      });
      setLoading(false);
    }
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {notification && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 w-full max-w-md rounded-md shadow-lg z-50 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white text-center transition-all duration-300 animate-fade-in`}
        >
          {notification.message}
        </div>
      )}

      <div className="w-full flex justify-between">
        <Image
          className="dark:invert"
          src="/core-dao-core-logo.png"
          alt="Core Dao logo"
          width={40}
          height={5}
          priority
        />
        <ConnectButton />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <Card className="w-[350px] m-4">
            <CardHeader>
              <div className="flex justify-center">
                <Image
                  className="dark:invert"
                  src="/core-dao-core-logo.png"
                  alt="Core Dao logo"
                  width={60}
                  height={5}
                  priority
                />
              </div>
              <CardTitle className="text-center">Bridge</CardTitle>
              <CardDescription className="text-center">
                Bridge tUSDC Token from{" "}
                {chain?.id == 11155111
                  ? "Sepolia to Core Testnet 2"
                  : "Core Testnet2 to Sepolia"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Amount to bridge"
                    />
                  </div>
                </div>
              </form>
              <CardDescription className="text-end">
                tUSDC :{" "}
                {isConnected && isLoading
                  ? "Loading..."
                  : isError
                  ? "Error fetching balance"
                  : balanceData?.formatted}
              </CardDescription>
            </CardContent>

            <CardFooter className="w-full flex ">
              <Button
                onClick={() => handleBridge(amount)}
                disabled={loading}
                className="w-full cursor-pointer"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Bridging...
                  </div>
                ) : (
                  " Bridge"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.coredao.org/docs/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn about Core
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/coredao-org/dapp-tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://coredao.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to coredao.org →
        </a>
      </footer>
    </div>
  );
}
