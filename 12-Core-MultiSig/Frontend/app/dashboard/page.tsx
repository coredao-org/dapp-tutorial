"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { client } from "../client";
import { useActiveAccount, ConnectButton} from "thirdweb/react";
import MultiSigCreationModal from "../create/multisigcreation";
import { ethers } from "ethers";

// ABIs & Configs
import MultiSigFactory from "../constants/MultiSigFactory.json";
import config from "../constants/config.json";


export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [wallet, setWallet] = useState<{ walletAddress: string; timeCreated: bigint; balance: bigint; }[]>([]);

  const [isOpen, setIsOpen] = useState(false)

  const [factory, setFactory] = useState<ethers.Contract | undefined>(undefined);
  const [provider, setProvider] = useState<ethers.BrowserProvider | undefined>(undefined);

  const activeAccount = useActiveAccount();

  async function loadBlockchainData() {
    try {
      if (typeof (window as any).ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        setProvider(provider);
        console.log("Ethereum provider detected");

        const signer = await provider.getSigner();

        const network = await provider.getNetwork();
        console.log("Network:", network);

        const chainId = network.chainId.toString();
        const configData = config[`${network.chainId}` as keyof typeof config];
        
        if (!configData) {
          console.error(`No configuration found for chain ID: ${chainId}`);
          return;
        }

        const address = configData.factory.address as string;
        
        if (!address || address === "") {
          console.error("Factory address is empty or undefined");
          return;
        }

        const contractFactory = new ethers.Contract(address, MultiSigFactory, provider);
        console.log(contractFactory);

        setFactory(contractFactory);

        const smartWallet = await contractFactory.getDeployersWallets(signer.address);
        console.log(`Deployer's wallets: ${smartWallet}`);

        setWallet(smartWallet);

      } else {
        console.error("Ethereum provider not found!")
      }
    } catch (error) {
      console.error("Error loading blockchain data:", error);
    }
  }

useEffect(() => {
  loadBlockchainData();
}, [isOpen]);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-bold">Wallet Dashboard</h1>
        {/* <MultiSigCreationModal /> */}
        {activeAccount?.address ? (
          <MultiSigCreationModal isOpen={isOpen} setIsOpen={setIsOpen} provider={provider} factory={factory} />
        ) : (
          <ConnectButton client={client} />
        )}
      </div>

      <div className="mb-8">
        <p className="text-lg mb-2">Connected Wallet:</p>
        <p className="text-neon-green">
          {activeAccount?.address || "Not Connected"}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Input
            type="text"
            placeholder="Search wallets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mr-4 bg-blue-800 border-blue-700 text-white placeholder-gray-400"
          />
          <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {wallet.map((wallet, index) => (
    <Card
      key={index}
      className="bg-blue-800 border-blue-700 hover:shadow-lg transition-shadow"
    >
      <CardHeader>
        <CardTitle className="text-neon-green break-words text-sm">
          {wallet.walletAddress}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Created on: {wallet.timeCreated}</p>
        <p className="font-semibold">Balance: {wallet.balance}</p>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </DashboardLayout>
  );
}
