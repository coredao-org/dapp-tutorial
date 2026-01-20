"use client";
import { ReactNode, useMemo } from "react";
import {
getDefaultWallets,
RainbowKitProvider,
midnightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function WalletProvider({ children }: { children: ReactNode }) {
const { wallets } = getDefaultWallets({ appName: "Counter dApp", projectId: "YOUR_WALLETCONNECT_PROJECT_ID" });
const transports = { [sepolia.id]: http() };


const config = useMemo(
() =>
createConfig({
chains: [sepolia],
transports,
multiInjectedProviderDiscovery: true,
}),
[]
);


const qc = useMemo(() => new QueryClient(), []);


return (
<QueryClientProvider client={qc}>
<WagmiConfig config={config}>
<RainbowKitProvider theme={midnightTheme()}>{children}</RainbowKitProvider>
</WagmiConfig>
</QueryClientProvider>
);
}