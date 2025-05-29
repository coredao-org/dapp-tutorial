"use client"

import { useWallet } from "@/components/wallet-provider"
import { ConnectWallet } from "@/components/connect-wallet"
import { ModeToggle } from "@/components/mode-toggle"
import { Coins } from "lucide-react"

export const Header = () => {
  const { isConnected, address, balance } = useWallet()

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-6">
      <div className="flex items-center mb-4 sm:mb-0">
        <Coins className="h-8 w-8 text-[#DAA520] mr-2" />
        <h1 className="text-2xl font-bold">Staking dApp</h1>
      </div>

      <div className="flex items-center space-x-4">
        {isConnected && (
          <div className="hidden md:flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <span className="text-sm font-medium mr-2">
              {address?.substring(0, 6)}...{address?.substring(38)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Number.parseFloat(balance).toFixed(4)} ETH
            </span>
          </div>
        )}

        <ConnectWallet />
        <ModeToggle />
      </div>
    </header>
  )
}
