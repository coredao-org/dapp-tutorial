import { GlobalOverview } from "@/components/global-overview"
import { StakingDashboard } from "@/components/staking-dashboard"
import { UserList } from "@/components/user-list"
import { WalletConnect } from "@/components/wallet-connect"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gold">Staking dApp</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <WalletConnect />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <GlobalOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <StakingDashboard />
          </div>
          <div>
            <UserList />
          </div>
        </div>
      </div>
    </main>
  )
}
