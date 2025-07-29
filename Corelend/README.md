# 💸 CoreLend – Multi-Token Lending & Borrowing Protocol

A powerful, gas-efficient, and modular decentralized finance (DeFi) protocol enabling users to borrow against collateral and repay loans seamlessly using multiple supported tokens on **Core Testnet**.

> 🧠 **GitHub Repository:** [https://github.com/coredao-org/dapp-tutorial](https://github.com/coredao-org/dapp-tutorial)

---

## ✨ Features

* 🏦 **Lend & Borrow**: Supply collateral and borrow from a selection of supported tokens.
* 🔄 **Repay System**: Easily repay borrowed tokens with calculated interest.
* 🔍 **Loan Viewer**: See real-time loan data per token pair.
* 🧠 **ERC-20 Support**: Currently supports USDT, USDC, and DAI.
* ⚙️ **Smart Contract Factory Pattern**: Optimized to manage lending pools and loan data per user.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
cd CoreLend
```

---

## 📦 Setup & Installation

### 2. Environment Setup

Create a `.env` file in the root directory and add your private key:

```env
PRIVATE_KEY=your_private_key_here
```

### 3. Install Smart Contract Dependencies

```bash
npm install
```

---

## 🚀 Deployment on Core Testnet

You can deploy the lending contract to **Core Testnet** using Hardhat.

### ⚙️ Compile Contracts

```bash
npx hardhat compile
```

### 🚀 Deploy to Core Testnet

Update your `hardhat.config.ts` with Core Testnet RPC and run:

```bash
npx hardhat run scripts/deploy.ts --network coreTestnet
```

> Make sure your `.env` contains a funded private key for the Core Testnet.

---

## 🧪 Test Tokens (Faucet)

To interact with the protocol using tUSDT, tDAI, or tUSDC test tokens, visit:

> 🧴 **Token Faucet**: [https://token-faucet-sandy.vercel.app](https://token-faucet-sandy.vercel.app)

You’ll receive tokens compatible with CoreLend’s supported assets.

---

## 💻 Frontend

Navigate into the frontend directory and run:

```bash
cd frontend
npm install
npm run dev
```

> The dApp will be live at `http://localhost:3000`

---

## 🗂️ Project Structure

```
├── contracts/           # Lending smart contracts (CoreLend.sol)
├── frontend/            # Frontend application (Next.js + Ethers.js)
├── scripts/             # Hardhat deployment scripts
│   └── deploy.ts        # Deploys the CoreLend contract
├── hardhat.config.ts    # Network configuration
├── .env                 # Private key for deployment
└── README.md
```

---

## 🧠 Tech Stack

* **Solidity** – Smart contract language
* **Hardhat** – Smart contract dev environment
* **Next.js** – React-based frontend framework
* **Tailwind CSS** – Styling
* **Ethers.js** – Web3 provider
* **Core Blockchain** – Testnet deployment

---

## 🤝 Contributions

Got an idea to improve the protocol? Feel free to:

* Fork the repo
* Submit issues
* Propose pull requests

We welcome community contributions!

---

## 📬 Contact

For feedback, questions, or collaboration:

📧 **[davidkenechukwu591@gmail.com](mailto:davidkenechukwu591@gmail.com)**