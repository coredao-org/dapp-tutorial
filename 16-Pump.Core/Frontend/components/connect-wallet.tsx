"use client"

import { Button } from "@/components/ui/button"
import { useWeb3 } from "@/hooks/use-web3"
import { Loader2, ExternalLink } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { shortenAddress } from "@/lib/utils"

export function ConnectWallet() {
  const { account, isConnecting, connect, disconnect, isCorrectNetwork } = useWeb3()

  if (isConnecting) {
    return (
      <Button disabled className="bg-orange-500 hover:bg-orange-600 text-white">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    )
  }

  if (account) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
            {shortenAddress(account)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a
              href={
                isCorrectNetwork
                  ? `https://scan.test2.btcs.network/address/${account}`
                  : `https://etherscan.io/address/${account}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
            >
              View on {isCorrectNetwork ? "Block Explorer" : "Etherscan"}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={disconnect} className="text-red-500 cursor-pointer">
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button onClick={connect} className="bg-orange-500 hover:bg-orange-600 text-white">
      Connect Wallet
    </Button>
  )
}
