import { defineChain } from "thirdweb";

export const tcore2 = defineChain({
  id: 1114,
  name: "Core Blockchain Testnet 2",
  nativeCurrency: {
    name: "Core Testnet",
    symbol: "tCORE2",
    decimals: 18,
  },
  rpc: `https://1114.rpc.thirdweb.com/${import.meta.env.VITE_THIRDWEB_CLIENT_ID} `,
  blockExplorers: [
    {
      name: "Core Testnet 2 Explorer",
      url: "https://scan.test2.btcs.network",
    },
  ],
});


