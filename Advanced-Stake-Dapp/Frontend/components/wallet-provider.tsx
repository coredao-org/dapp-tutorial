"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { ethers } from "ethers"
import { useToast } from "@/hooks/use-toast"

type WalletContextType = {
  address: string | null
  balance: string
  isConnected: boolean
  isConnecting: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  balance: "0",
  isConnected: false,
  isConnecting: false,
  connect: async () => {},
  disconnect: () => {},
})

export const useWallet = () => useContext(WalletContext)

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState("0")
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const { toast } = useToast()

  const connect = async () => {
    if (typeof window.ethereum === "undefined") {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask to use this dApp",
        variant: "destructive",
      })
      return
    }

    try {
      setIsConnecting(true)
      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send("eth_requestAccounts", [])

      if (accounts.length > 0) {
        const address = accounts[0]
        setAddress(address)
        setIsConnected(true)

        // Get balance
        const balance = await provider.getBalance(address)
        setBalance(ethers.formatEther(balance))

        toast({
          title: "Wallet connected",
          description: `Connected to ${address.substring(0, 6)}...${address.substring(38)}`,
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

  const disconnect = () => {
    setAddress(null)
    setBalance("0")
    setIsConnected(false)
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected",
    })
  }

  // Listen for account changes
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          disconnect()
        } else if (accounts[0] !== address) {
          // User switched accounts
          setAddress(accounts[0])
          toast({
            title: "Account changed",
            description: `Switched to ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`,
          })
        }
      }

      window.ethereum.on("accountsChanged", handleAccountsChanged)

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged)
      }
    }
  }, [address])

  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        isConnected,
        isConnecting,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
