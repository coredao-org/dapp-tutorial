"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { NetworkModal } from "@/components/network-modal"
import { TokenSelector } from "@/components/token-selector"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/hooks/use-toast"
import { ethers } from "ethers"

export default function FaucetPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true)
  const [showNetworkModal, setShowNetworkModal] = useState(false)

  const handleWalletConnect = async () => {
    try {
      // Placeholder wallet connection logic
      // In production, integrate with Wagmi or Ethers.js
      if (!(window as any).ethereum) {
        toast({
          title: "Wallet not found",
          description: "Please install MetaMask or another Web3 wallet",
          variant: "destructive",
        })
        return
      }

      const provider = new ethers.BrowserProvider((window as any).ethereum)
      const accounts = await provider.send("eth_requestAccounts", [])
      const network = await provider.getNetwork()
      const signee = await provider.getSigner();

      setProvider(provider)
      // setAccount(accounts[0])
      setSigner(signee)
      // setChainId(Number(network.chainId))
      // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setWalletAddress(accounts[0])

      // setWalletAddress("0x1234567890123456789012345678901234567890") // Placeholder
      setIsConnected(true)

      // Simulate network check
      const isOnCoreTestnet = Number(network.chainId) == 1114 // Higher chance of correct network for demo
      setIsCorrectNetwork(isOnCoreTestnet)
      if (!isOnCoreTestnet) {
        setShowNetworkModal(true)
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const handleWalletDisconnect = () => {
    setWalletAddress("")
    setIsConnected(false)
    setIsCorrectNetwork(true)
  }

  const handleNetworkSwitch = async () => {
    try {
      // Placeholder network switching logic
      // In production: call wallet_switchEthereumChain or wallet_addEthereumChain
      // await window.ethereum.request({
      //   method: 'wallet_switchEthereumChain',
      //   params: [{ chainId: '0x45a' }], // Core Testnet
      // })

      setIsCorrectNetwork(true)
      setShowNetworkModal(false)
    } catch (error) {
      console.error("Failed to switch network:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar
        isConnected={isConnected}
        walletAddress={walletAddress}
        onConnect={handleWalletConnect}
        onDisconnect={handleWalletDisconnect}
        isCorrectNetwork={isCorrectNetwork}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Core Testnet Faucet</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect your wallet and mint test tokens directly to your address on Core Testnet. Perfect for development
            and testing.
          </p>
        </div>

        {!isConnected ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Connect Your Wallet</h3>
              <p className="text-slate-600 mb-6">
                Connect your wallet to start minting test tokens directly to your address
              </p>
              <button
                onClick={handleWalletConnect}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        ) : !isCorrectNetwork ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Wrong Network</h3>
              <p className="text-slate-600 mb-6">Please switch to Core Testnet to use the faucet</p>
              <button
                onClick={() => setShowNetworkModal(true)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Switch Network
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <TokenSelector walletAddress={walletAddress} signer={signer} />
          </div>
        )}

        {/* Information section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">How it works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Connect Wallet</h4>
                <p className="text-sm text-slate-600">Connect your wallet to Core Testnet</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Select & Mint</h4>
                <p className="text-sm text-slate-600">Choose token and amount to mint</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Receive Tokens</h4>
                <p className="text-sm text-slate-600">Tokens minted directly to your wallet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">More Tokens Coming Soon</h3>
            <p className="text-slate-600">
              We're constantly adding new test tokens to support your development needs. Stay tuned for more ERC20 test
              tokens on Core Testnet.
            </p>
          </div>
        </div>
      </main>

      <NetworkModal
        isOpen={showNetworkModal}
        onClose={() => setShowNetworkModal(false)}
        onSwitch={handleNetworkSwitch}
      />

      <Toaster />
    </div>
  )
}
