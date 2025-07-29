import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Percent } from "lucide-react"

export default function HomePage() {
  const stats = [
    {
      title: "Total Value Locked",
      value: "$2.4M",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Average Interest Rate",
      value: "8.2%",
      change: "+0.3%",
      icon: Percent,
      color: "text-blue-600",
    },
    {
      title: "Active Loans",
      value: "1,247",
      change: "+23",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Total Users",
      value: "3,891",
      change: "+156",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <Badge variant="secondary" className="mb-4">
          Built on Core Testnet
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Multi-Token DeFi
          <span className="text-primary block">Lending & Borrowing</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Secure, decentralized lending and borrowing protocol supporting multiple ERC20 tokens with competitive
          interest rates and flexible collateral options.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-12">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Multi-Token Support</CardTitle>
            <CardDescription>Lend and borrow multiple ERC20 tokens including USDT, DAI, and USDC</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Percent className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Competitive Rates</CardTitle>
            <CardDescription>Earn attractive yields on your deposits with dynamic interest rates</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Flexible Collateral</CardTitle>
            <CardDescription>Use various tokens as collateral with 150% collateralization ratio</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
