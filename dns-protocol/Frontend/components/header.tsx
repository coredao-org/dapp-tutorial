"use client"

import Link from "next/link"
import { useWallet } from "@/hooks/use-wallet"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertCircle, ChevronDown, Wallet } from "lucide-react"
import { usePathname } from "next/navigation"
import { Alert, AlertDescription } from "./ui/alert"
import { useState, useEffect } from "react"
import { NetworkSwitcher } from "./network-switcher"

export function Header() {
  const { address, isConnected, networkStatus, connect, disconnect, switchNetwork } = useWallet()
  const { isCorrectNetwork, currentNetworkName, networkError } = networkStatus
  const pathname = usePathname()
  const [showNetworkError, setShowNetworkError] = useState(!!networkError)

  // Update network error visibility when error changes
  useEffect(() => {
    if (networkError) {
      setShowNetworkError(true)
    }
  }, [networkError])

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4 md:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">CORE DNS</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/dashboard" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/registry"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/registry" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Registry
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <NetworkSwitcher />
            {isConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    <span className="hidden sm:inline">{truncateAddress(address || "")}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">My Domains</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={disconnect}>Disconnect</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={connect} className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      {isConnected && !isCorrectNetwork && (
        <div className="w-full px-4 py-3 bg-red-500/10">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="font-medium text-red-700 dark:text-red-400">
                You are on {currentNetworkName || "an unsupported network"}
              </span>
            </div>
            <Button onClick={switchNetwork} className="bg-red-500 hover:bg-red-600 text-white">
              Switch to CoreTestnet2
            </Button>
          </div>
        </div>
      )}

      {networkError && showNetworkError && (
        <div className="w-full px-4 py-2 bg-destructive/10">
          <Alert variant="destructive" className="max-w-5xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between">
              <span>{networkError}</span>
              <Button variant="ghost" size="sm" onClick={() => setShowNetworkError(false)}>
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  )
}
