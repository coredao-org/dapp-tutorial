"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/components/wallet-provider"
import { Coins, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Lend", href: "/lend" },
  { name: "Borrow", href: "/borrow" },
  { name: "My Loans", href: "/loans" },
]

export function Navbar() {
  const pathname = usePathname()
  const { account, isConnected, isCorrectNetwork, connectWallet, switchToCore } = useWallet()

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-yellow-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">Core DeFi</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {isConnected && !isCorrectNetwork && (
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <Button
                  onClick={switchToCore}
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                >
                  Switch to Core
                </Button>
              </div>
            )}

            {isConnected && isCorrectNetwork && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Core Testnet
              </Badge>
            )}

            {isConnected ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{truncateAddress(account!)}</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            ) : (
              <Button onClick={connectWallet} className="bg-primary hover:bg-primary/90 text-black">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
