"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InfoTooltip } from "@/components/info-tooltip"
import { Search, ArrowUpDown, ExternalLink } from "lucide-react"

// Mock data for stakers
const MOCK_STAKERS = [
  { address: "0x1234...5678", staked: "125.45", since: "30 days ago", rewards: "4.21" },
  { address: "0xabcd...efgh", staked: "78.32", since: "25 days ago", rewards: "2.61" },
  { address: "0x7890...1234", staked: "256.78", since: "45 days ago", rewards: "9.63" },
  { address: "0xijkl...mnop", staked: "42.19", since: "15 days ago", rewards: "1.05" },
  { address: "0x5678...9012", staked: "189.67", since: "60 days ago", rewards: "7.89" },
  { address: "0xqrst...uvwx", staked: "63.41", since: "20 days ago", rewards: "1.58" },
  { address: "0x3456...7890", staked: "95.23", since: "35 days ago", rewards: "3.47" },
  { address: "0xyzab...cdef", staked: "112.87", since: "40 days ago", rewards: "4.71" },
]

type SortField = "staked" | "since" | "rewards"
type SortDirection = "asc" | "desc"

export const StakerDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<SortField>("staked")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const filteredStakers = MOCK_STAKERS.filter((staker) =>
    staker.address.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedStakers = [...filteredStakers].sort((a, b) => {
    let comparison = 0

    if (sortField === "staked") {
      comparison = Number.parseFloat(a.staked) - Number.parseFloat(b.staked)
    } else if (sortField === "rewards") {
      comparison = Number.parseFloat(a.rewards) - Number.parseFloat(b.rewards)
    } else if (sortField === "since") {
      // Extract the number of days
      const daysA = Number.parseInt(a.since.split(" ")[0])
      const daysB = Number.parseInt(b.since.split(" ")[0])
      comparison = daysA - daysB
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          Staker Directory
          <InfoTooltip content="A list of all users who have staked tokens on the platform" />
        </CardTitle>
        <CardDescription>View all stakers and their contributions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by address..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary border-b">
                  <th className="px-4 py-3 text-left font-medium">Address</th>
                  <th className="px-4 py-3 text-left font-medium cursor-pointer" onClick={() => handleSort("staked")}>
                    <div className="flex items-center">
                      Amount Staked
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-medium cursor-pointer" onClick={() => handleSort("since")}>
                    <div className="flex items-center">
                      Staking Since
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-medium cursor-pointer" onClick={() => handleSort("rewards")}>
                    <div className="flex items-center">
                      Rewards Earned
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedStakers.map((staker, index) => (
                  <tr key={index} className="border-b last:border-0 hover:bg-secondary/50">
                    <td className="px-4 py-3 font-medium">{staker.address}</td>
                    <td className="px-4 py-3">{staker.staked} ETH</td>
                    <td className="px-4 py-3">{staker.since}</td>
                    <td className="px-4 py-3 text-[#DAA520]">{staker.rewards} ETH</td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">View on Explorer</span>
                      </Button>
                    </td>
                  </tr>
                ))}

                {filteredStakers.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                      No stakers found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
