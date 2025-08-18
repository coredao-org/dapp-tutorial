"use client"

import { useWallet } from "@/hooks/use-wallet"
import { Button } from "@/components/ui/button"
import { Loader2, Check, AlertCircle } from "lucide-react"

export function NetworkSwitcher() {
  const { isConnected, networkStatus, switchNetwork } = useWallet()
  const { isCorrectNetwork, currentNetworkName, isSwitchingNetwork } = networkStatus

  // If not connected, don't show anything
  if (!isConnected) {
    return null
  }

  // If on correct network, show a simple success indicator
  if (isCorrectNetwork) {
    return (
      <Button variant="outline" className="flex items-center gap-2 border-orange-500 text-orange-500" disabled>
        <Check className="h-4 w-4" />
        <span>CoreTestnet2</span>
      </Button>
    )
  }

  // If switching network, show loading state
  if (isSwitchingNetwork) {
    return (
      <Button variant="outline" disabled className="flex items-center gap-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Switching...</span>
      </Button>
    )
  }

  // If on wrong network, show a simple switch button
  return (
    <Button variant="destructive" onClick={switchNetwork} className="flex items-center gap-2">
      <AlertCircle className="h-4 w-4" />
      <span>Switch to CoreTestnet2</span>
    </Button>
  )
}
