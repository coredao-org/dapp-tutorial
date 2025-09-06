# Web3-counter

A full-stack Web3 Counter DApp using **Solidity + Hardhat** for smart contracts and **Next.js + wagmi + RainbowKit** for the frontend.

---

## 🚀 Project Summary
This project demonstrates:
- A simple **Counter contract** with increment/decrement
- **Hardhat** for compile, test, local node, deploy
- **Next.js frontend** with wallet connection
- Tailwind CSS styling
- Deployed & tested on **Sepolia Testnet**

---

## ✅ Prerequisites
- Node.js **>= 18** (`node -v`)
- npm (or yarn/pnpm)
- Git (optional)
- Browser wallet (MetaMask)
- (Optional) Alchemy/Infura/QuickNode Sepolia RPC
- Basic terminal knowledge

---
## 📜 Smart Contract

**`contracts/Counter.sol`**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Counter {
    int256 private _value;
    event Increment(address indexed caller, int256 newValue);
    event Decrement(address indexed caller, int256 newValue);

    function current() external view returns (int256) {
        return _value;
    }

    function increment() external {
        _value += 1;
        emit Increment(msg.sender, _value);
    }

    function decrement() external {
        _value -= 1;
        emit Decrement(msg.sender, _value);
    }
}```

## ⚙️ Hardhat Config

*hardhat.config.ts*

```import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
};

export default config;```

##🔑 Environment Variables 
```SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
ETHERSCAN_API_KEY=YOUR_API_KEY
```

## 🚀 Deploy Script
```
const hre = require("hardhat");

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();
  console.log("Counter deployed to:", counter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## Root package.json

```
{
  "name": "17-web3-counter",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "compile": "hardhat compile",
    "test": "hardhat test",
    "clean": "hardhat clean",
    "node": "hardhat node",
    "deploy:local": "hardhat run scripts/deploy.js --network localhost",
    "deploy:sepolia": "hardhat run scripts/deploy.js --network sepolia"
  },
  "devDependencies": {
    "hardhat": "^2.26.3",
    "@nomicfoundation/hardhat-toolbox": "^6.1.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.2",
    "@types/node": "^18.0.0",
    "dotenv": "^17.2.2"
  }
}
```

## 🖥️ Frontend Setup

```npx create-next-app@latest frontend --ts
cd frontend
npm install @rainbow-me/rainbowkit wagmi viem
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**frontend/package.json** 
```
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```


**frontend/styles/globals.css**
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ▶️ Run the Project
**1. Backend (Hardhat)**

### compile contracts
```npm run compile```

### run local node
```npm run node```

### deploy to local node
```npm run deploy:local```

### deploy to Sepolia
```npm run deploy:sepolia```
---

## 2. Frontend (Next.js)

**From frontend/:**

```npm run dev```
---

```Visit 👉 http://localhost:3000```

## 🛠️ Troubleshooting

- npm error Missing script: dev → Add "dev": "next dev" in frontend/package.json

- EJSONPARSE → Check package.json for trailing commas or invalid JSON

- next is not recognized → Run inside frontend/ and ensure Next.js is installed

- Private key invalid (HH8) → Ensure .env private key is 64 hex chars starting with 0x

- Multiple lockfiles warning → Delete extra package-lock.json so only one remains in frontend/ or root

## 📜 License

Do you want me to also **add frontend `page.tsx` + `WalletProvider.tsx` code** inside this README so others can copy-paste and directly run, or just keep it backend + setup instructions?
