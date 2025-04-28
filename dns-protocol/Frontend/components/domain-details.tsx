import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

interface Domain {
  name: string
  owner: string
  registrationDate: string
}

interface DomainDetailsProps {
  domain: Domain
}

export function DomainDetails({ domain }: DomainDetailsProps) {
  // Calculate expiry date (1 year from registration)
  const registrationDate = new Date(domain.registrationDate)
  const expiryDate = new Date(registrationDate)
  expiryDate.setFullYear(expiryDate.getFullYear() + 1)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{domain.name}</h3>
        <Badge className="bg-orange-500 hover:bg-orange-600">Registered</Badge>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <User className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="font-medium">Owner</p>
            <p className="text-sm text-muted-foreground break-all">{domain.owner}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="font-medium">Registration Date</p>
            <p className="text-sm text-muted-foreground">{new Date(domain.registrationDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="font-medium">Expiry Date</p>
            <p className="text-sm text-muted-foreground">{expiryDate.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
