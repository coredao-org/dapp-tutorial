"use client"

import { useEffect, useState } from "react"
import { useWallet } from "@/hooks/use-wallet"
import { DomainCard } from "@/components/domain-card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { ethers } from "ethers"

export default function Dashboard() {
  const { address, isConnected, getContractOne } = useWallet()
  const [domains, setDomains] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      return
    }

    const fetchUserDomains = async () => {
      try {
        setLoading(true)
        // This would be replaced with actual contract call
        // Example: const userDomains = await coreContract.getUserDomains(address)

      const ensRegistry = getContractOne()
      if (!ensRegistry) throw new Error("ENS Registry contract is not loaded")
      
      // Call getSpecificRecord from the ENSRegistry contract
      const domainHashes = await ensRegistry.getDomainsByOwner(address)
      const domainNames = domainHashes.map((hash: any) => ethers.decodeBytes32String(hash));
      // record: { owner, resolver, registration, expiration }
      console.log("heyy")

      console.log(domainHashes);
      console.log(domainNames)

        // Mock data for demonstration
        // const mockDomains = ["mydomain.core", "coredeveloper.core", "blockchain.core"]

        setDomains(domainNames)
      } catch (error) {
        console.error("Error fetching user domains:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserDomains()
  }, [address, isConnected])

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">Connect Your Wallet</h1>
          <p className="text-muted-foreground">Please connect your wallet to view your domains.</p>
          <Button onClick={() => router.push("/")}>Return to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Domains</h1>
          <p className="text-muted-foreground">Manage your .core domains and their settings.</p>
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border p-6">
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : domains.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {domains.map((domain) => (
              <DomainCard key={domain} domain={domain} />
            ))}
          </div>
        ) : (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No domains found</AlertTitle>
            <AlertDescription>
              You don&apos;t own any .core domains yet. Register your first domain now!
            </AlertDescription>
          </Alert>
        )}

        <div className="flex justify-center pt-6">
          <Button onClick={() => router.push("/")}>Register New Domain</Button>
        </div>
      </div>
    </div>
  )
}
