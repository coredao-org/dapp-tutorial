"use client"

import { createContext, useEffect, useState, type ReactNode } from "react"
import { ethers } from "ethers"
import contractsData from "../constants/config.json"  // adjust the path as needed

interface WalletContextType {
  address: string | null
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => void
  provider: ethers.BrowserProvider | null
  signer: ethers.JsonRpcSigner | null
  // Functions to get contract instances
  getContractOne: () => ethers.Contract | null
  getContractTwo: () => ethers.Contract | null
}

export const WalletContext = createContext<WalletContextType>({
  address: null,
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
  provider: null,
  signer: null,
  getContractOne: () => null,
  getContractTwo: () => null,
})

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  // You can also have local state for contract-related info if needed
  const [contractData, setContractData] = useState(contractsData)

  useEffect(() => {
    // Check if wallet was previously connected
    const checkConnection = async () => {
      if ((window as any).ethereum && localStorage.getItem("walletConnected") === "true") {
        await connect()
      }
    }
    checkConnection()
  }, [])

  const connect = async () => {
    if (!(window as any).ethereum) {
      return alert("Please install MetaMask or another Ethereum wallet");
    }
  
    try {
      // trigger the popup
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  
      const browserProvider = new ethers.BrowserProvider((window as any).ethereum);
      const ethSigner = await browserProvider.getSigner();
      const userAddress = await ethSigner.getAddress();
  
  
      setProvider(browserProvider);
      setSigner(ethSigner);
      setAddress(userAddress);
      setIsConnected(true);
      localStorage.setItem("walletConnected", "true");
  
      // --- CORRECT listener registration ---
      (window as any).ethereum.on("accountsChanged", handleAccountsChanged);
      (window as any).ethereum.on("chainChanged", handleChainChanged);
      // (no "disconnect" here)
    } catch (err) {
      console.error("User rejected connection or other error", err);
    }
  };
  
  const disconnect = () => {
    setAddress(null);
    setIsConnected(false);
    setProvider(null);
    setSigner(null);
    localStorage.removeItem("walletConnected");
  
    if ((window as any).ethereum && (window as any).ethereum.removeListener) {
      // --- CORRECT listener removal ---
      (window as any).ethereum.removeListener("accountsChanged", handleAccountsChanged);
      (window as any).ethereum.removeListener("chainChanged", handleChainChanged);
      // no removeListener for "disconnect"
    }
  };

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnect()
    } else {
      setAddress(accounts[0])
    }
  }

  const handleChainChanged = () => {
    window.location.reload()
  }

  const handleDisconnect = () => {
    disconnect()
  }

  // Helpers for creating contract instances using the signer
  const getContractOne = () => {
    if (signer) {

      return new ethers.Contract(
        contractData.ContractOne.address,
        contractData.ContractOne.abi,
        signer
      )
    }
    return null
  }

  const getContractTwo = () => {
    if (signer) {
      return new ethers.Contract(
        contractData.ContractTwo.address,
        contractData.ContractTwo.abi,
        signer
      )
    }
    return null
  }

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnected,
        connect,
        disconnect,
        provider,
        signer,
        getContractOne,
        getContractTwo,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
