"use client"

import { useState, useEffect } from "react"
import { ConnectWallet } from "@/components/connect-wallet"
import { useWeb3 } from "@/hooks/use-web3"
import { formatEther } from "ethers"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NetworkSwitcher } from "@/components/network-switcher"

export function Navbar() {
  const { account, balance, isCorrectNetwork } = useWeb3()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                M
              </span>
              <span className="font-bold text-lg hidden md:inline-block">MemeFactory</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-sm font-medium hover:text-orange-500 transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {!isCorrectNetwork && account && <NetworkSwitcher />}

            {account && balance && isCorrectNetwork && (
              <div className="hidden md:flex items-center gap-2 text-sm bg-zinc-100 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium">
                  {balance ? Number.parseFloat(formatEther(balance)).toFixed(4) : "0.0"} tCORE2
                </span>
              </div>
            )}

            <ConnectWallet />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-orange-500 transition-colors">
                    Home
                  </Link>
                  <Link href="/dashboard" className="text-lg font-medium hover:text-orange-500 transition-colors">
                    Dashboard
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
