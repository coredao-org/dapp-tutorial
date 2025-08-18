import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia, type Chain } from "wagmi/chains";
import { Address } from "viem";

export const coreTestnet2: Chain = {
  id: 1114,
  name: "Core Testnet 2",
  iconUrl: "https://cryptologos.cc/logos/core-dao-core-logo.png?v=040",
  iconBackground: "#fff",
  nativeCurrency: { name: "CORE", symbol: "tCORE2", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.test2.btcs.network"] },
  },
  blockExplorers: {
    default: { name: "Core Explorer", url: "https://scan.test2.btcs.network/" },
  },
  testnet: true,
};

export const walletConfig = getDefaultConfig({
  appName: "Core DAO Token Bridge",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  chains: [sepolia, coreTestnet2],
  ssr: true, // If your dApp uses server-side rendering (SSR)
});
