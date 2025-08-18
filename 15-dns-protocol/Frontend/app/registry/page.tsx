"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { DomainDetails } from "@/components/domain-details"
import { Search } from "lucide-react"

interface Domain {
  name: string
  owner: string
  registrationDate: string
}

export default function Registry() {
  const [domains, setDomains] = useState<Domain[]>([])
  const [filteredDomains, setFilteredDomains] = useState<Domain[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null)

  useEffect(() => {
    const fetchAllDomains = async () => {
      try {
        setLoading(true)
        // This would be replaced with actual contract call
        // Example: const allDomains = await coreContract.getAllDomains()

        // Simulating API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Mock data for demonstration
        const mockDomains: Domain[] = [
          {
            name: "example.core",
            owner: "0x1234...5678",
            registrationDate: "2023-01-15",
          },
          {
            name: "blockchain.core",
            owner: "0xabcd...ef01",
            registrationDate: "2023-02-20",
          },
          {
            name: "defi.core",
            owner: "0x2468...1357",
            registrationDate: "2023-03-10",
          },
          {
            name: "nft.core",
            owner: "0x9876...5432",
            registrationDate: "2023-04-05",
          },
          {
            name: "metaverse.core",
            owner: "0xfedc...ba98",
            registrationDate: "2023-05-12",
          },
        ]

        setDomains(mockDomains)
        setFilteredDomains(mockDomains)
      } catch (error) {
        console.error("Error fetching domains:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllDomains()
  }, [])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredDomains(domains)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = domains.filter(
      (domain) => domain.name.toLowerCase().includes(query) || domain.owner.toLowerCase().includes(query),
    )

    setFilteredDomains(filtered)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-12">
      <div className="w-full max-w-5xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Public Domain Registry</h1>
          <p className="text-muted-foreground">Browse all registered .core domains and search for availability.</p>
        </div>

        <div className="flex w-full max-w-md mx-auto items-center space-x-2">
          <Input
            placeholder="Search domains..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-10"
          />
          <Button type="submit" onClick={handleSearch} className="h-10">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border">
            <div className="p-4 font-medium">Registered Domains</div>
            <div className="border-t">
              {loading ? (
                <div className="p-4 space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                  ))}
                </div>
              ) : filteredDomains.length > 0 ? (
                <ul className="divide-y">
                  {filteredDomains.map((domain) => (
                    <li
                      key={domain.name}
                      className="p-4 hover:bg-muted cursor-pointer"
                      onClick={() => setSelectedDomain(domain)}
                    >
                      <div className="font-medium">{domain.name}</div>
                      <div className="text-sm text-muted-foreground truncate">Owner: {domain.owner}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center text-muted-foreground">No domains found matching your search.</div>
              )}
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="p-4 font-medium">Domain Details</div>
            <div className="border-t p-4">
              {selectedDomain ? (
                <DomainDetails domain={selectedDomain} />
              ) : (
                <div className="text-center text-muted-foreground p-8">Select a domain to view details</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
