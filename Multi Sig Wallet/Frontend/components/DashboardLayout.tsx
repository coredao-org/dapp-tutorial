import Link from 'next/link'
import { Home, FileText, Users, Settings } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-blue-900 p-6">
        <div className="text-2xl font-bold mb-8">MultiSig Wallet</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center py-2 px-4 hover:bg-blue-800 rounded transition-colors">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/wallet/address" className="flex items-center py-2 px-4 hover:bg-blue-800 rounded transition-colors">
                <FileText className="mr-2 h-4 w-4" />
                Transactions
              </Link>
            </li>
            <li>
              <Link href="/owners" className="flex items-center py-2 px-4 hover:bg-blue-800 rounded transition-colors">
                <Users className="mr-2 h-4 w-4" />
                Owners
              </Link>
            </li>
            {/* <li>
              <Link href="/settings" className="flex items-center py-2 px-4 hover:bg-blue-800 rounded transition-colors">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </li> */}
          </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

