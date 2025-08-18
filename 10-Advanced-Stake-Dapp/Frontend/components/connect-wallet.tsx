"use client"

import { useWallet } from "@/components/wallet-provider"
import { Button } from "@/components/ui/button"
import { Wallet, LogOut, Loader2 } from "lucide-react"

export const ConnectWallet = () => {
  const { isConnected, isConnecting, connect, disconnect } = useWallet()

  return isConnected ? (
    <Button
      variant="outline"
      size="sm"
      onClick={disconnect}
      className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Disconnect
    </Button>
  ) : (
    <Button onClick={connect} disabled={isConnecting} className="bg-[#DAA520] hover:bg-[#B8860B] text-white">
      {isConnecting ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </>
      )}
    </Button>
  )
}
