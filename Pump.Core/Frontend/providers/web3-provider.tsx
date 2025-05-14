"use client"

import { createContext, useEffect, useState, type ReactNode } from "react"
import { BrowserProvider, Contract, type JsonRpcSigner } from "ethers"
import { useToast } from "@/hooks/use-toast"
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants/constansts"

// // This would be your actual contract ABI
// const CONTRACT_ABI = [
//   // Add your contract ABI here
//   // Example:
//   // {
//   //   "inputs": [
//   //     {
//   //       "internalType": "string",
//   //       "name": "name",
//   //       "type": "string"
//   //     },
//   //     {
//   //       "internalType": "string",
//   //       "name": "symbol",
//   //       "type": "string"
//   //     }
//   //   ],
//   //   "name": "create",
//   //   "outputs": [],
//   //   "stateMutability": "payable",
//   //   "type": "function"
//   // },
//   // ...
// ]

// // This would be your actual contract address
// const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"

// Core Testnet 2 Chain ID
const CORE_TESTNET_2_CHAIN_ID = "0x45a" // 1114 in decimal
const CORE_TESTNET_2_DETAILS = {
  chainId: CORE_TESTNET_2_CHAIN_ID,
  chainName: "Core Testnet 2",
  nativeCurrency: {
    name: "Core Testnet 2",
    symbol: "tCORE2",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.test2.btcs.network"],
  blockExplorerUrls: ["https://scan.test2.btcs.network"],
}

interface Web3ContextType {
  account: string | null
  balance: bigint | null
  provider: BrowserProvider | null
  signer: JsonRpcSigner | null
  contract: Contract | null
  isConnecting: boolean
  isCorrectNetwork: boolean
  connect: () => Promise<void>
  disconnect: () => void
  switchToCorrectNetwork: () => Promise<void>
  addCoreTestnet2: () => Promise<void>
}

export const Web3Context = createContext<Web3ContextType>({
  account: null,
  balance: null,
  provider: null,
  signer: null,
  contract: null,
  isConnecting: false,
  isCorrectNetwork: false,
  connect: async () => {},
  disconnect: () => {},
  switchToCorrectNetwork: async () => {},
  addCoreTestnet2: async () => {},
})

export function Web3Provider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<bigint | null>(null)
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null)
  const [contract, setContract] = useState<Contract | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false)
  const [chainId, setChainId] = useState<string | null>(null)
  const { toast } = useToast()

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window !== "undefined" && window.ethereum !== undefined
  }

  // Check if the current network is Core Testnet 2
  const checkNetwork = async () => {
    if (!provider) return false

    try {
      const network = await provider.getNetwork()
      const currentChainId = "0x" + network.chainId.toString(16)
      setChainId(currentChainId)

      const isCorrect = currentChainId === CORE_TESTNET_2_CHAIN_ID
      setIsCorrectNetwork(isCorrect)
      return isCorrect
    } catch (error) {
      console.error("Error checking network:", error)
      setIsCorrectNetwork(false)
      return false
    }
  }

  // Switch to Core Testnet 2
  const switchToCorrectNetwork = async () => {
    if (!window.ethereum) throw new Error("No crypto wallet found")

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CORE_TESTNET_2_CHAIN_ID }],
      })

      // Check network after switching
      const provider = new BrowserProvider(window.ethereum)
      setProvider(provider)
      await checkNetwork()

      return true
    } catch (error: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (error.code === 4902) {
        return addCoreTestnet2()
      }
      throw error
    }
  }

  // Add Core Testnet 2 to MetaMask
  const addCoreTestnet2 = async () => {
    if (!window.ethereum) throw new Error("No crypto wallet found")

    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [CORE_TESTNET_2_DETAILS],
      })

      // Check network after adding
      const provider = new BrowserProvider(window.ethereum)
      setProvider(provider)
      await checkNetwork()

      return true
    } catch (error) {
      console.error("Error adding network:", error)
      throw error
    }
  }

  // Initialize provider and listen for account changes
  useEffect(() => {
    if (isMetaMaskInstalled()) {
      const ethereum = window.ethereum

      // Create provider
      const provider = new BrowserProvider(ethereum)
      setProvider(provider)

      // Check if already connected
      const checkConnection = async () => {
        try {
          const accounts = await provider.listAccounts()
          if (accounts.length > 0) {
            const account = accounts[0].address
            const signer = await provider.getSigner()
            const balance = await provider.getBalance(account)

            setAccount(account)
            setBalance(balance)
            setSigner(signer)

            // Check if on correct network
            await checkNetwork()

            // Initialize contract
            // Even if CONTRACT_ABI is empty, create a minimal contract to prevent loading issues
            const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI.length ? CONTRACT_ABI : [], signer)
            setContract(contract)
          }
        } catch (error) {
          console.error("Error checking connection:", error)
        }
      }

      checkConnection()

      // Listen for account changes
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected
          disconnect()
        } else {
          // Account changed
          const newAccount = accounts[0]
          setAccount(newAccount)

          // Update balance and signer
          provider.getBalance(newAccount).then(setBalance)
          provider.getSigner().then(setSigner)

          // Check network again
          checkNetwork()
        }
      }

      // Listen for chain changes
      const handleChainChanged = () => {
        // Instead of reloading the page, update the chain ID and check if it's the correct network
        checkNetwork().then((isCorrect) => {
          if (isCorrect) {
            toast({
              title: "Network Changed",
              description: "Successfully connected to Core Testnet 2.",
            })
          }
        })
      }

      ethereum.on("accountsChanged", handleAccountsChanged)
      ethereum.on("chainChanged", handleChainChanged)

      return () => {
        ethereum.removeListener("accountsChanged", handleAccountsChanged)
        ethereum.removeListener("chainChanged", handleChainChanged)
      }
    }
  }, [])

  // Update contract when signer changes
  useEffect(() => {
    if (signer && CONTRACT_ABI && CONTRACT_ADDRESS) {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
      setContract(contract)
    }
  }, [signer])

  // Connect wallet
  const connect = async () => {
    if (!isMetaMaskInstalled()) {
      toast({
        title: "MetaMask not installed",
        description: "Please install MetaMask to use this application.",
        variant: "destructive",
      })
      return
    }

    try {
      setIsConnecting(true)

      // Request accounts
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
      const account = accounts[0]

      // Get provider and signer
      const provider = new BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const balance = await provider.getBalance(account)

      setAccount(account)
      setProvider(provider)
      setSigner(signer)
      setBalance(balance)

      // Check if on correct network
      const isCorrect = await checkNetwork()

      // Initialize contract
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI.length ? CONTRACT_ABI : [], signer)
      setContract(contract)

      toast({
        title: "Wallet connected",
        description: "Your wallet has been successfully connected.",
      })

      // If not on correct network, show a toast but don't force switch
      if (!isCorrect) {
        toast({
          title: "Wrong Network",
          description: "Please switch to Core Testnet 2 for full functionality.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      toast({
        title: "Connection failed",
        description: "There was an error connecting your wallet.",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  // Disconnect wallet
  const disconnect = () => {
    setAccount(null)
    setBalance(null)
    setSigner(null)
    setContract(null)
    setIsCorrectNetwork(false)

    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected.",
    })
  }

  return (
    <Web3Context.Provider
      value={{
        account,
        balance,
        provider,
        signer,
        contract,
        isConnecting,
        isCorrectNetwork,
        connect,
        disconnect,
        switchToCorrectNetwork,
        addCoreTestnet2,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
