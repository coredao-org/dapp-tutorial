"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { StakeForm } from "@/components/stake-form"
import { UserDashboard } from "@/components/user-dashboard"
import { GlobalOverview } from "@/components/global-overview"
import { StakerDirectory } from "@/components/staker-directory"
import { useWallet } from "@/components/wallet-provider"
import { ConnectWallet } from "@/components/connect-wallet"

export const StakingDashboard = () => {
  const { isConnected } = useWallet()
  const [activeTab, setActiveTab] = useState<"stake" | "dashboard" | "directory">("stake")

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <GlobalOverview />

      {!isConnected ? (
        <div className="mt-10 flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Connect Your Wallet to Start Staking</h2>
          <ConnectWallet />
        </div>
      ) : (
        <>
          <div className="flex border-b border-gray-200 dark:border-gray-800 mt-8">
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "stake"
                  ? "border-b-2 border-[#DAA520] text-[#DAA520]"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("stake")}
            >
              Stake Tokens
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "dashboard"
                  ? "border-b-2 border-[#DAA520] text-[#DAA520]"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              My Dashboard
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "directory"
                  ? "border-b-2 border-[#DAA520] text-[#DAA520]"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("directory")}
            >
              Staker Directory
            </button>
          </div>

          <div className="mt-6">
            {activeTab === "stake" && <StakeForm />}
            {activeTab === "dashboard" && <UserDashboard />}
            {activeTab === "directory" && <StakerDirectory />}
          </div>
        </>
      )}
    </div>
  )
}
