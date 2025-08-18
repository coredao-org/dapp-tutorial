import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ThirdwebProvider } from 'thirdweb/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MultiSig Wallet',
  description: 'Secure your digital assets with multi-signature protection',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider>
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
    </ThirdwebProvider>
  )
}

