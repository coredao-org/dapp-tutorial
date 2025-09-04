"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🚀 Counter DApp</h1>

      {/* RainbowKit Connect Wallet Button */}
      <ConnectButton />

      {isConnected ? (
        <div className="mt-4 text-center">
          <p className="mb-2">Connected as: {address}</p>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={() => connect()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Connect Wallet
        </button>
      )}

      <footer className="mt-10 text-xs opacity-70">
        Sepolia • EVM • wagmi + RainbowKit
      </footer>
    </main>
  );
}