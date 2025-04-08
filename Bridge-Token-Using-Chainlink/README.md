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

---

## Foundry (Smart Contracts) Deployment and Verification

### 📍 **Deploying on Core Testnet 2 and Sepolia**

In this section, we’ll explain how to deploy the crosschain bridge contract on both **Core Testnet 2** and **Sepolia** using Foundry. The smart contract uses **LINK tokens** for bridging, and you'll need to mint **tUSDC** (a mintable token) to bridge between these networks.

### **1. Configure the Deployment Script**

You will need to use a **Foundry script** to deploy the contract to the Core Testnet 2 and Sepolia. Here’s a breakdown of the deployment script you need to run:

```bash
forge script script/CrosschainBridge.s.sol --rpc-url https://rpc.test2.btcs.network --private-key <your_private_key> --broadcast
```

- **Core Testnet 2 RPC URL**: `https://rpc.test2.btcs.network`
- **Private Key**: Replace `<your_private_key>` with your private key. Be sure to keep your private key secure and **never expose it in your public repositories**.

This script will deploy the `CrosschainBridge.sol` contract to Core Testnet 2. The same script can be used for Sepolia by updating the RPC URL accordingly:

```bash
forge script script/CrosschainBridge.s.sol --rpc-url https://rpc.sepolia.eth.link --private-key <your_private_key> --broadcast
```

### **2. Smart Contract Details**

The `CrosschainBridge.sol` contract facilitates bridging tokens between **Core Testnet 2** and **Sepolia**. Here’s a high-level overview of its functionality:

- **Bridge Contract**: It locks `tUSDC` tokens on the source chain (either Core Testnet 2 or Sepolia) and mints an equivalent amount on the destination chain.
- **LINK Token**: The contract utilizes **Chainlink’s oracles** and **automation services**, so you need to deposit a small amount of **LINK tokens** into the contract to allow it to use the Chainlink services for the bridging mechanism.

### **3. Minting tUSDC for Bridging**

When you deploy the CrossChainBridge contract. It also deployes tUSDC token and sends the to the deployer 100 tUSDC. To perform a bridge transaction, you will need to mint `tUSDC` tokens (a mintable token contract).

### **4. Deposit LINK Token for Contract Usage**

Since the contract uses Chainlink oracles for bridging, you will need to deposit a small amount of **LINK tokens** into the deployed contract. The LINK tokens are used for interacting with Chainlink’s services to finalize the bridge transactions.

---

### 🔧 **Verification via VS Code**

After deploying the smart contract, it’s important to verify the contract on the respective blockchain explorers. To do this, you’ll use the verification script with the `--verifier custom` flag for verifying the contract manually.

**Here’s the process to verify the contract via VS Code**:

1. **Run the Verification Script**: Use the following script to verify the contract:

   ```bash
   forge verify-contract       --chain-id 1114       --num-of-optimizations 1000000       --watch       --constructor-args $(cast abi-encode "constructor(address,address)" 0xded0EE188Fe8F1706D9049e29C82081A5ebEcb2F 0x6C475841d1D7871940E93579E5DBaE01634e17aA)       --verifier custom       --verifier-url https://api.test2.btcs.network/api       --api-key <your_api_key>       --compiler-version v0.8.24       <YOUR_DEPLOYED_SMART_CONTRACT>       src/CrosschainBridge.sol:CrossChainBridge
   ```

   - Replace `<your_api_key>` with your API key for verification.
   - The contract address should match the address where the contract was deployed.

2. **Watch for Verification Confirmation**: After running the script, keep an eye on the output for verification confirmation. If successful, the contract will be marked as verified on the blockchain explorer.

---

### 📣 **Important Notes:**

- **Use Only Testnet Tokens**: Ensure you are using testnet tokens (like tUSDC) for bridging and deploying on testnets. Never use real tokens or real funds.
- **Contract Usage**: The contract locks tokens on the source chain and mints an equivalent amount on the destination chain. This feature is designed for demonstration purposes and is not suitable for production use.
- **Chainlink Fees**: Make sure to deposit LINK tokens into the contract to use the Chainlink services for bridging.
