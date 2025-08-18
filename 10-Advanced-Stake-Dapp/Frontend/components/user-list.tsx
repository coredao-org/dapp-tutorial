"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ArrowUpDown } from "lucide-react"

type Staker = {
  address: string
  amount: number
  since: string
}

export function UserList() {
  const [stakers, setStakers] = useState<Staker[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // In a real app, this would fetch data from the blockchain
  useEffect(() => {
    // Mock data
    const mockStakers: Staker[] = [
      { address: "0x1234...5678", amount: 245.5, since: "2 months ago" },
      { address: "0xabcd...efgh", amount: 120.3, since: "1 month ago" },
      { address: "0x9876...5432", amount: 89.7, since: "3 weeks ago" },
      { address: "0xijkl...mnop", amount: 56.2, since: "2 weeks ago" },
      { address: "0x2468...1357", amount: 34.8, since: "1 week ago" },
      { address: "0xqrst...uvwx", amount: 23.5, since: "3 days ago" },
      { address: "0x1357...2468", amount: 12.1, since: "1 day ago" },
    ]

    setStakers(mockStakers)
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const filteredStakers = stakers.filter((staker) => staker.address.toLowerCase().includes(searchQuery.toLowerCase()))

  const sortedStakers = [...filteredStakers].sort((a, b) => {
    return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gold">Top Stakers</CardTitle>
        <CardDescription>Users with the highest stakes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search address" value={searchQuery} onChange={handleSearch} className="pl-8" />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleSortOrder}
              title={`Sort by amount ${sortOrder === "asc" ? "ascending" : "descending"}`}
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            {sortedStakers.length > 0 ? (
              sortedStakers.map((staker, index) => (
                <div key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-muted">
                  <div className="flex flex-col">
                    <span className="font-medium">{staker.address}</span>
                    <span className="text-xs text-muted-foreground">{staker.since}</span>
                  </div>
                  <span className="font-medium text-gold">{staker.amount.toFixed(2)} ETH</span>
                </div>
              ))
            ) : (
              <p className="text-center py-4 text-muted-foreground">No stakers found</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
