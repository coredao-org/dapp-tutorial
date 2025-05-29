"use client"

import { useState } from "react"
import { useWallet } from "@/components/wallet-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Loader2, Wallet, LogOut, Copy, ExternalLink } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function WalletConnect() {
  const { address, balance, chainId, isConnected, isConnecting, connectWallet, disconnectWallet } = useWallet()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { toast } = useToast()

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Address copied",
      description: "Wallet address copied to clipboard",
    })
  }

  const openExplorer = (address: string) => {
    // This would need to be updated based on the actual chain
    const explorerUrl =
      chainId === 1 ? `https://etherscan.io/address/${address}` : `https://testnet.etherscan.io/address/${address}`
    window.open(explorerUrl, "_blank")
  }

  if (isConnected && address) {
    return (
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-gold hover:border-gold/80 text-gold hover:text-gold/80 font-medium"
          >
            <Wallet className="mr-2 h-4 w-4" />
            {truncateAddress(address)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="p-2">
            <p className="text-sm font-medium">Connected Wallet</p>
            <p className="text-xs text-muted-foreground mt-1">{address}</p>
            <p className="text-xs mt-2">
              Balance: <span className="font-medium">{Number.parseFloat(balance || "0").toFixed(4)} ETH</span>
            </p>
            <p className="text-xs mt-1">
              Network:{" "}
              <span className="font-medium">
                {chainId === 1 ? "Ethereum" : chainId === 5 ? "Goerli" : `Chain ID: ${chainId}`}
              </span>
            </p>
          </div>
          <DropdownMenuItem onClick={() => copyToClipboard(address)}>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy Address</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => openExplorer(address)}>
            <ExternalLink className="mr-2 h-4 w-4" />
            <span>View on Explorer</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={disconnectWallet}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gold hover:bg-gold/90 text-white" disabled={isConnecting}>
          {isConnecting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connecting
            </>
          ) : (
            <>
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => connectWallet("metamask")}>
          <img src="/placeholder.svg?height=16&width=16" alt="MetaMask" className="mr-2 h-4 w-4" />
          MetaMask
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => connectWallet("walletconnect")}>
          <img src="/placeholder.svg?height=16&width=16" alt="WalletConnect" className="mr-2 h-4 w-4" />
          WalletConnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
