"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { ethers } from "ethers"
import { useToast } from "@/components/ui/use-toast"

type WalletContextType = {
  address: string | null
  balance: string | null
  chainId: number | null
  isConnected: boolean
  isConnecting: boolean
  connectWallet: (providerType: "metamask" | "walletconnect") => Promise<void>
  disconnectWallet: () => void
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  balance: null,
  chainId: null,
  isConnected: false,
  isConnecting: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
})

export const useWallet = () => useContext(WalletContext)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const { toast } = useToast()

  const updateWalletInfo = async (provider: ethers.BrowserProvider) => {
    try {
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      const balance = ethers.formatEther(await provider.getBalance(address))
      const { chainId } = await provider.getNetwork()

      setAddress(address)
      setBalance(balance)
      setChainId(Number(chainId))
      setIsConnected(true)
      setProvider(provider)
    } catch (error) {
      console.error("Failed to get wallet info:", error)
      disconnectWallet()
    }
  }

  const connectWallet = async (providerType: "metamask" | "walletconnect") => {
    setIsConnecting(true)

    try {
      if (providerType === "metamask") {
        if (!window.ethereum) {
          toast({
            title: "MetaMask not found",
            description: "Please install MetaMask extension and try again.",
            variant: "destructive",
          })
          setIsConnecting(false)
          return
        }

        const provider = new ethers.BrowserProvider(window.ethereum)
        await window.ethereum.request({ method: "eth_requestAccounts" })
        await updateWalletInfo(provider)

        toast({
          title: "Wallet connected",
          description: "Your wallet has been connected successfully.",
        })
      } else if (providerType === "walletconnect") {
        // WalletConnect implementation would go here
        toast({
          title: "Coming soon",
          description: "WalletConnect integration is coming soon.",
        })
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      toast({
        title: "Connection failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setAddress(null)
    setBalance(null)
    setChainId(null)
    setIsConnected(false)
    setProvider(null)
  }

  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        try {
          const accounts = await provider.listAccounts()
          if (accounts.length > 0) {
            await updateWalletInfo(provider)
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error)
        }
      }
    }

    checkConnection()

    // Setup event listeners for wallet changes
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet()
        } else if (provider) {
          updateWalletInfo(provider)
        }
      })

      window.ethereum.on("chainChanged", () => {
        if (provider) {
          updateWalletInfo(provider)
        }
      })
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners()
      }
    }
  }, [])

  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        chainId,
        isConnected,
        isConnecting,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
