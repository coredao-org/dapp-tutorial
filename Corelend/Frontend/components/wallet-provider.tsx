"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { ethers } from "ethers"
import { useToast } from "@/hooks/use-toast"

interface WalletContextType {
  account: string | null
  provider: ethers.BrowserProvider | null
  signer: ethers.JsonRpcSigner | null
  chainId: number | null
  isConnected: boolean
  isCorrectNetwork: boolean
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  switchToCore: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

const CORE_TESTNET = {
  chainId: "0x45A", // 1114 in hex
  chainName: "Core Testnet",
  rpcUrls: ["https://rpc.test2.btcs.network"],
  nativeCurrency: {
    name: "tCORE",
    symbol: "tCORE",
    decimals: 18,
  },
  blockExplorerUrls: ["https://scan.test2.btcs.network/"],
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null)
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const { toast } = useToast()

  const isConnected = !!account
  const isCorrectNetwork = chainId === 1114

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast({
          title: "Wallet not found",
          description: "Please install MetaMask or another Web3 wallet",
          variant: "destructive",
        })
        return
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send("eth_requestAccounts", [])
      const network = await provider.getNetwork()
      const signer = await provider.getSigner()

      setProvider(provider)
      setAccount(accounts[0])
      setChainId(Number(network.chainId))
      setSigner(signer)

      if (Number(network.chainId) !== 1114) {
        toast({
          title: "Wrong Network",
          description: "Please switch to Core Testnet",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Wallet Connected",
          description: "Successfully connected to Core Testnet",
        })
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet",
        variant: "destructive",
      })
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    setProvider(null)
    setChainId(null)
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    })
  }

  const switchToCore = async () => {
    try {
      if (!window.ethereum) return

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CORE_TESTNET.chainId }],
      })
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [CORE_TESTNET],
          })
        } catch (addError) {
          console.error("Failed to add Core Testnet:", addError)
          toast({
            title: "Failed to Add Network",
            description: "Could not add Core Testnet to your wallet",
            variant: "destructive",
          })
        }
      } else {
        console.error("Failed to switch to Core Testnet:", switchError)
        toast({
          title: "Failed to Switch Network",
          description: "Could not switch to Core Testnet",
          variant: "destructive",
        })
      }
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet()
        } else {
          setAccount(accounts[0])
        }
      })

      window.ethereum.on("chainChanged", (chainId: string) => {
        setChainId(Number.parseInt(chainId, 16))
        window.location.reload()
      })
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners("accountsChanged")
        window.ethereum.removeAllListeners("chainChanged")
      }
    }
  }, [])

  return (
    <WalletContext.Provider
      value={{
        account,
        provider,
        signer,
        chainId,
        isConnected,
        isCorrectNetwork,
        connectWallet,
        disconnectWallet,
        switchToCore,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

declare global {
  interface Window {
    ethereum?: any
  }
}
