# Crosschain Bridge Example

This repository provides an example of a crosschain token bridge between **Core Testnet 2** and **Sepolia**. The project consists of two main components:

1. **Foundry (Smart Contracts)** – Contains the Solidity smart contracts for the crosschain bridge.
2. **Frontend (Next.js dApp)** – A frontend interface to interact with the bridge using Next.js, Viem, and Wagmi.

## Project Structure

```
├── foundry/           # Contains the smart contracts
│   ├── src
|       ├── CrosschainBridge.sol   # Smart contract for crosschain bridging
│       ├── USDC.sol             # Example tUSDC token contract
│       └── ... (other Foundry setup files)
├── frontend/         # Next.js dApp for interacting with the bridge
│   ├── components/   # UI components
│   ├── app/          # Next.js pages
│   ├── lib/          # Utility functions
│   ├── ... (other frontend setup files)
└── README.md
```

## Setup & Installation

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/yourusername/crosschain-bridge-example.git
cd crosschain-bridge-example
```

### 2️⃣ **Smart Contracts (Foundry)**

Install Foundry if you haven’t already:

```sh
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

Compile and test the contracts:

```sh
cd foundry
forge build
forge test
```

### 3️⃣ **Frontend (Next.js)**

Navigate to the frontend directory and install dependencies:

```sh
cd ../frontend
npm install
```

Run the Next.js development server:

```sh
npm run dev
```

## How It Works

1. **User selects a token amount to bridge** from **Core Testnet 2 → Sepolia** (or vice versa).
2. **Approval transaction** is sent using **Viem**.
3. **Bridge transaction** is sent using **Wagmi**.
4. The contract **locks tUSDC on the source chain** and **mints an equivalent amount on the destination chain**.
5. The transaction is **finalized** when the tokens appear on the destination chain.

## ⚠️ Caution: This is an Example Project

> **This project is for educational and demonstration purposes only.**
> Do **NOT** use it in production or with real funds. The smart contracts are experimental and have not been audited.

## 📜 License

This project is open-source under the [MIT License](LICENSE).

## ✉️ Contact

For any questions or contributions, feel free to open an issue or reach out!
