import Image from 'next/image'
import Link from 'next/link'
import { Shield, FileText, Key } from 'lucide-react'
import { client } from "./client";
import { ConnectButton } from "thirdweb/react";

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">MultiSig Wallet</div>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-neon-green transition-colors">Home</Link></li>
            <li><Link href="/dashboard" className="hover:text-neon-green transition-colors">Dashboard</Link></li>
            <li> <ConnectButton client={client} /> </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Secure Your Digital Assets with Multi-Signature Protection
          </h1>
          <p className="text-xl mb-8 animate-fade-in animation-delay-200">
            Collaborate and safeguard your funds with a decentralized multi-sig wallet.
          </p>
          <Button className="bg-neon-green text-blue-900 hover:bg-neon-green/90 transition-colors animate-fade-in animation-delay-400">
            Get Started
          </Button>
          <div className="mt-12">
            <Image
              src="/banner.jpg"
              alt="Secure Digital Vault"
              width={900}
              height={500}
              className="mx-auto rounded-lg shadow-lg animate-fade-in animation-delay-600"
            />
          </div>
        </section>

        <section className="features container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-blue-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Shield className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Create Multi-Sig Wallet</h3>
              <p>Secure your assets with multiple signatures for enhanced protection.</p>
            </div>
            <div className="feature-card bg-blue-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <FileText className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manage Transactions</h3>
              <p>Easily submit, confirm, and track all your wallet transactions.</p>
            </div>
            <div className="feature-card bg-blue-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Key className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect Securely</h3>
              <p>Use your preferred wallet to connect and interact securely.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center">
        <p>&copy; 2025 MultiSig Wallet. All rights reserved.</p>
      </footer>
    </div>
  )
}

