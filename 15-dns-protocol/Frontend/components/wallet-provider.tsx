// WalletProvider.tsx
"use client"

import { createContext, useEffect, useState, useRef, ReactNode } from "react"
import { ethers } from "ethers"
import contractsData from "../constants/config.json"

// CoreTestnet2 parameters
const CORE_TESTNET2 = {
  chainId: "0x45a",           // 1114 decimal
  chainName: "CoreTestnet2",
  nativeCurrency: { name: "tCORE2", symbol: "tCORE2", decimals: 18 },
  rpcUrls: ["https://rpc.test2.btcs.network"],
  blockExplorerUrls: ["https://scan.test2.btcs.network"],
}

interface NetworkStatus {
  isCorrectNetwork: boolean
  currentChainId: string | null
  currentNetworkName: string | null
  isCheckingNetwork: boolean
  isSwitchingNetwork: boolean
  networkError: string | null
}

interface WalletContextType {
  address: string | null
  isConnected: boolean
  networkStatus: NetworkStatus
  connect: () => Promise<void>
  disconnect: () => void
  switchNetwork: () => Promise<void>
  provider: ethers.BrowserProvider | null
  signer: ethers.JsonRpcSigner | null
  getContractOne: () => ethers.Contract | null
  getContractTwo: () => ethers.Contract | null
}

const initialNetworkStatus: NetworkStatus = {
  isCorrectNetwork: false,
  currentChainId: null,
  currentNetworkName: null,
  isCheckingNetwork: false,
  isSwitchingNetwork: false,
  networkError: null,
}

export const WalletContext = createContext<WalletContextType>({
  address: null,
  isConnected: false,
  networkStatus: initialNetworkStatus,
  connect: async () => {},
  disconnect: () => {},
  switchNetwork: async () => {},
  provider: null,
  signer: null,
  getContractOne: () => null,
  getContractTwo: () => null
})

// Helper to map chainId → name
const getNetworkName = (chainId: string | null): string => {
  if (!chainId) return "Unknown Network"
  const id = chainId.startsWith("0x") ? parseInt(chainId, 16) : parseInt(chainId)
  const names: Record<number,string> = { 1114: "CoreTestnet2", 1: "Ethereum Mainnet", 5: "Goerli" }
  return names[id] || `Chain ${id}`
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string|null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(initialNetworkStatus)
  const [provider, setProvider] = useState<ethers.BrowserProvider|null>(null)
  const [signer, setSigner] = useState<ethers.JsonRpcSigner|null>(null)
  const [contractData, setContractData] = useState(contractsData)

  const chainChangedRef = useRef<((chainId: string) => void)|null>(null)
  const accountsChangedRef = useRef<((accounts: string[]) => void)|null>(null)
  const disconnectRef = useRef<(() => void)|null>(null)
  const pollRef = useRef<NodeJS.Timeout|null>(null)

  // 1. Check network via RPC
  const checkNetwork = async (): Promise<boolean> => {
    if (!window.ethereum) return false
    setNetworkStatus(ns => ({ ...ns, isCheckingNetwork: true }))
    try {
      const chainId: string = await window.ethereum.request({ method: "eth_chainId" })
      const isCorrect = chainId === CORE_TESTNET2.chainId
      setNetworkStatus(ns => ({
        ...ns,
        isCorrectNetwork: isCorrect,
        currentChainId: chainId,
        currentNetworkName: getNetworkName(chainId),
        isCheckingNetwork: false,
        networkError: isCorrect ? null : "Please switch back to CoreTestnet2.",
      }))
      return isCorrect
    } catch {
      setNetworkStatus(ns => ({ ...ns, isCheckingNetwork: false, networkError: "Network check failed" }))
      return false
    }
  }

  // 2. Setup chainChanged listener & polling
  const setupNetworkMonitoring = () => {
    if (!window.ethereum) return
    cleanupNetworkMonitoring()

    const onChainChanged = (chainId: string) => {
      const isCorrect = chainId === CORE_TESTNET2.chainId
      setNetworkStatus(ns => ({
        ...ns,
        isCorrectNetwork: isCorrect,
        currentChainId: chainId,
        currentNetworkName: getNetworkName(chainId),
        isSwitchingNetwork: false,
        networkError: isCorrect ? null : "Please switch back to CoreTestnet2.",
      }))
      // update provider/signer after network flips
      if (isConnected) {
        const bp = new ethers.BrowserProvider((window as any).ethereum)
        setProvider(bp)
        bp.getSigner().then(setSigner).catch(console.error)
      }
      // MetaMask recommends reload on chain change :contentReference[oaicite:6]{index=6}
      window.location.reload()
    }
    chainChangedRef.current = onChainChanged
    window.ethereum.on("chainChanged", onChainChanged)

    pollRef.current = setInterval(checkNetwork, 5000)  // fallback polling
  }

  const cleanupNetworkMonitoring = () => {
    if (window.ethereum && chainChangedRef.current) {
      window.ethereum.removeListener("chainChanged", chainChangedRef.current)
    }
    if (pollRef.current) clearInterval(pollRef.current)
  }

  // 3. switchNetwork with add fallback :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8}
  const switchNetwork = async () => {
    if (!window.ethereum) {
      setNetworkStatus(ns => ({ ...ns, networkError: "Please install MetaMask." }))
      return
    }
    setNetworkStatus(ns => ({ ...ns, isSwitchingNetwork: true, networkError: null }))
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CORE_TESTNET2.chainId }],
      })
    } catch (err: any) {
      // if not added or silent‐fail, force add → switch :contentReference[oaicite:9]{index=9}
      await window.ethereum.request({ method: "wallet_addEthereumChain", params: [CORE_TESTNET2] })
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CORE_TESTNET2.chainId }],
      })
    } finally {
      setTimeout(async () => {
        setNetworkStatus(ns => ({ ...ns, isSwitchingNetwork: false }))
        await checkNetwork()
      }, 500)
    }
  }

  // 4. connect wallet
  const connect = async () => {
    if (!window.ethereum) {
      setNetworkStatus(ns => ({ ...ns, networkError: "Please install MetaMask." }))
      return
    }
    try {
      const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" })
      if (accounts.length === 0) throw new Error("No accounts")
      const bp = new ethers.BrowserProvider(window.ethereum)
      const s = await bp.getSigner()
      setProvider(bp); setSigner(s); setAddress(await s.getAddress()); setIsConnected(true)
      localStorage.setItem("walletConnected", "true")
      await checkNetwork()
      setupNetworkMonitoring()

      // account/disconnect handlers
      const onAccountsChanged = (accs: string[]) => accs.length ? setAddress(accs[0]) : disconnect()
      const onDisconnect = () => disconnect()
      accountsChangedRef.current = onAccountsChanged
      disconnectRef.current = onDisconnect
      window.ethereum.on("accountsChanged", onAccountsChanged)
      window.ethereum.on("disconnect", onDisconnect)
    } catch (err: any) {
      setNetworkStatus(ns => ({ ...ns, networkError: `Connect failed: ${err.message}` }))
    }
  }

  // 5. disconnect
  const disconnect = () => {
    setAddress(null); setIsConnected(false); setNetworkStatus(initialNetworkStatus)
    setProvider(null); setSigner(null); localStorage.removeItem("walletConnected")
    if (window.ethereum) {
      if (accountsChangedRef.current) window.ethereum.removeListener("accountsChanged", accountsChangedRef.current)
      if (disconnectRef.current) window.ethereum.removeListener("disconnect", disconnectRef.current)
    }
    cleanupNetworkMonitoring()
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


  // Auto-reconnect if previously connected
  useEffect(() => {
    if (window.ethereum && localStorage.getItem("walletConnected") === "true") connect()
    return cleanupNetworkMonitoring  // cleanup on unmount :contentReference[oaicite:10]{index=10}
  }, [])

  return (
    <WalletContext.Provider value={{
      address, isConnected, networkStatus,
      connect, disconnect, switchNetwork,
      provider, signer,  getContractOne,
      getContractTwo,
    }}>
      {children}
    </WalletContext.Provider>
  )
}
