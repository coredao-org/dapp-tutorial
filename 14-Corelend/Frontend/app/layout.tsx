import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { WalletProvider } from "@/components/wallet-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Core DeFi - Multi-Token Lending & Borrowing",
  description: "Decentralized lending and borrowing protocol on Core testnet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
          <Toaster />
        </WalletProvider>
      </body>
    </html>
  )
}
