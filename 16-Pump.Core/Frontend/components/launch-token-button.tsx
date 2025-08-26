"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { LaunchTokenDialog } from "@/components/launch-token-dialog"
import { useWeb3 } from "@/hooks/use-web3"

export function LaunchTokenButton() {
  const { account, isCorrectNetwork } = useWeb3()
  const [dialogOpen, setDialogOpen] = useState(false)

  // If user is not connected, show disabled button
  if (!account) {
    return (
      <Button disabled className="bg-orange-500/50 text-white cursor-not-allowed">
        <PlusCircle className="mr-2 h-4 w-4" />
        Connect Wallet to Launch
      </Button>
    )
  }

  // Always show the launch button, network check happens in the dialog
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
