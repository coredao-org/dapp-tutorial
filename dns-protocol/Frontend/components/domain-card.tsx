"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Globe } from "lucide-react"
import { useWallet } from "@/hooks/use-wallet"
import { ethers } from "ethers"

interface DomainCardProps {
  domain: string
}

export function DomainCard({ domain }: DomainCardProps) {

  const { address, isConnected, getContractOne } = useWallet()
  const [expiryDate, setExpiryDate] = useState<string>("");

  // Mock data - in a real app, you would fetch this from the blockchain
  // const expiryDate = new Date()
  // expiryDate.setFullYear(expiryDate.getFullYear() + 1)

  useEffect(() => {
    if (!isConnected) {
      return
    }

    const fetchUserDomainDates = async () => {
      try {

        console.log("Hii")

      const ensRegistry = getContractOne()
      if (!ensRegistry) throw new Error("ENS Registry contract is not loaded")
      
      // Call getSpecificRecord from the ENSRegistry contract
      const domainHash = ethers.encodeBytes32String(domain)
      const datee = await ensRegistry.getSpecificRecord(domainHash)


        setExpiryDate(datee.expiration)
      } catch (error) {
        console.error("Error fetching user domains:", error)
      }
    }

    fetchUserDomainDates()
    
  }, [address, isConnected])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="truncate">{domain}</CardTitle>
          <Badge variant="outline" className="ml-2">
            Active
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          Expires: {expiryDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Primary Domain</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Manage
        </Button>
        <Button variant="outline" size="sm">
          Renew
        </Button>
      </CardFooter>
    </Card>
  )
}
