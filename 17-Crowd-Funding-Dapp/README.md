CrowdFunding Dapp (React + Vite + thirdweb)

Overview
- React + TypeScript + Vite + Tailwind + thirdweb v5
- Uses Core Testnet 2 (tCORE2, chain id 1114)
- Interacts with a factory contract to create and view campaigns and tiers

Prerequisites
- Node.js 18+
- thirdweb Client ID
- thirdweb Secret Key
- Wallet (MetaMask) with tCORE2 added
  - Chain ID: 1114
  - RPC: https://rpc.test2.btcs.network
  - Explorer: https://scan.test2.btcs.network

Install
1) Install deps
   npm install

2) Env setup (project root .env)
   VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
   Restart dev server after editing .env.

3) Set contract address
   Edit src/contants/contract.tsx
   export const CROWDFUNDING_FACTORY = "0xYourFactoryAddress";

Run
- Dev: npm run dev
- Build: npm run build && npm run preview

Key Files
- src/client.ts: thirdweb client using VITE_THIRDWEB_CLIENT_ID
- src/chains.ts: custom chain for tCORE2 (1114)
- src/contants/contract.tsx: factory contract address
- src/components/CreateCampaign.tsx: create campaign via factory createCampaign
- src/components/Campaign.tsx: campaign card list
- src/Campaign/[campainAddress]/Page.tsx: campaign details + tiers
- src/components/TierCard.tsx: tier display and fund/remove
- src/components/Navbar.tsx: wallet connect + theme toggle

Usage Notes
- Enter goal in tCORE2; it converts to wei (18 decimals) on-chain
- Connect UI forces tCORE2 via chains={[tcore2]}
- Dark mode toggles with a persistent setting (localStorage)

Troubleshooting
- Env not loading: ensure .env is at project root, prefix VITE_, restart dev
- 401 RPC: invalid/missing thirdweb Client ID or RPC issue; verify key and origin
- Wrong network: approve add/switch network prompt in wallet

License
MIT

