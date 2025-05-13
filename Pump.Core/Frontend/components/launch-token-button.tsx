"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { LaunchTokenDialog } from "@/components/launch-token-dialog"
import { useWeb3 } from "@/hooks/use-web3"
import { NetworkSwitcher } from "@/components/network-switcher"

export function LaunchTokenButton() {
  const { account, isCorrectNetwork } = useWeb3()
  const [dialogOpen, setDialogOpen] = useState(false)

  if (!account) {
    return (
      <Button disabled className="bg-orange-500 hover:bg-orange-600 text-white opacity-50">
        <PlusCircle className="mr-2 h-4 w-4" />
        Connect Wallet to Launch
      </Button>
    )
  }

  if (!isCorrectNetwork) {
    return <NetworkSwitcher />
  }

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white">
        <PlusCircle className="mr-2 h-4 w-4" />
        Launch Token
      </Button>

      <LaunchTokenDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
