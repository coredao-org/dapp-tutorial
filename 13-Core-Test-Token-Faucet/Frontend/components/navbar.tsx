"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
  isConnected: boolean
  walletAddress: string
  onConnect: () => void
  onDisconnect: () => void
  isCorrectNetwork: boolean
}

export function Navbar({ isConnected, walletAddress, onConnect, onDisconnect, isCorrectNetwork }: NavbarProps) {
  const formatAddress = (address: string) => {
    if (!address || address.length < 10) return address
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress)
    } catch (error) {
      console.error("Failed to copy address:", error)
    }
  }

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Core Faucet</h1>
              <p className="text-xs text-slate-500">Testnet Token Minting</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isConnected && (
              <Badge
                variant={isCorrectNetwork ? "default" : "destructive"}
                className={isCorrectNetwork ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
              >
                {isCorrectNetwork ? "Core Testnet" : "Wrong Network"}
              </Badge>
            )}

            {!isConnected ? (
              <Button onClick={onConnect} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                Connect Wallet
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-mono text-sm">{formatAddress(walletAddress)}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">Connected Wallet</p>
                    <p className="text-xs text-slate-500 font-mono">{walletAddress}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={copyAddress}>Copy Address</DropdownMenuItem>
                  <DropdownMenuItem onClick={onDisconnect} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
