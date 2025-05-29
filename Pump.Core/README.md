# 🚀 MemeLaunch – Token Launchpad on Core Blockchain

MemeLaunch is a dynamic, pump.fun-inspired DApp built on the Core Blockchain, enabling users to **easily launch tokens**, **view all launched tokens**, **buy any token**, and **track token balances** in their wallets. It is **modular**, **extensible**, and ready for builders who want to expand functionality like adding a **creator dashboard**, **liquidity tools**, and more.

> 🧠 **GitHub Repository:** [https://github.com/coredao-org/dapp-tutorial](https://github.com/coredao-org/dapp-tutorial)

---

## ✨ Features

* 🧱 **Token Factory:** Instantly deploy custom tokens with ease.
* 🔍 **Token Explorer:** See a list of all launched tokens, including names, prices, and contract details.
* 💰 **Buy Tokens:** Instantly buy any launched token using native Core currency.
* 👛 **Wallet Integration:** View token balances directly in your wallet.
* 🧪 **Test Mode Support:** Quickly test all features using test tokens on Core testnet.
* 🧩 **Extensible Architecture:** Includes space to build out your **Creator Dashboard**, **liquidity manager**, and other tools.
* 🌍 **Core Blockchain Ready:** Fully integrated with Core Blockchain for fast, low-cost transactions.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
cd dapp-tutorial/Pump.Core
````

### 2. Setup Environment

Create a `.env` file in the root directory and add your private key:

```env
PRIVATE_KEY=your_private_key_here
```

> ⚠️ **Warning:** Never expose or commit your `.env` file. Keep your private key safe.

### 3. Install Dependencies

Install smart contract dependencies:

```bash
npm install
```

Then navigate to the frontend directory and install frontend dependencies:

```bash
cd ./Frontend
npm install
```

### 4. Run the DApp Locally

```bash
npm run dev
```

> Open your browser at `http://localhost:3000` to:
>
> * Launch new tokens in seconds
> * Buy and track trending tokens
> * View token balances in your wallet
> * Start customizing the creator dashboard

---

## 🚀 Deploy to Core Testnet

To deploy your contracts on **Core Testnet**, follow these steps:

### 1. Set Up `.env`

Make sure your `.env` file in the root directory includes:

```env
PRIVATE_KEY=your_private_key
CORE_TESTNET_RPC=https://rpc.test2.btcs.network
```

### 2. Update Hardhat Config

Ensure your `hardhat.config.js` includes the Core Testnet configuration:

```js
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    coreTestnet: {
      url: process.env.CORE_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1115
    }
  }
};
```

### 3. Compile & Deploy

Compile contracts:

```bash
npx hardhat compile
```

Deploy:

```bash
npx hardhat run scripts/deploy.js --network coreTestnet
```

> 🧠 After deploying, copy the deployed contract addresses and paste them into your frontend’s environment config or contract interaction hooks.

---

## 🛠️ Creator Dashboard Starter

The project includes a placeholder structure where developers can build their own **Creator Dashboard** to manage token performance, community, and liquidity.

📍 Located in the frontend:

```bash
Frontend/app/dashboard
```

💡 Ideas to Extend:

* Add liquidity to token pools
* Enable burn/mint features
* Show real-time charts for tokens
* Add community governance options

> Fork this repo and start building your own meme economy on Core!

---

## 👛 View Token in Wallet

After buying a token, you can add it manually to your wallet:

1. Copy the token contract address shown in the UI.
2. Open your wallet (e.g. MetaMask).
3. Click **Import Token** and paste the contract address.
4. View your token balance.

---

## 🗂️ Project Structure

```bash
├── contracts/           # Smart contracts (TokenFactory, LaunchToken)
├── scripts/             # Deployment and helper scripts
├── Frontend             # Frontend Next.js app
├── hardhat.config.js    # Hardhat configuration
├── .env                 # Store your private key securely
└── README.md
```

---

## 📘 Tech Stack

* **Next.js** – Frontend framework
* **Tailwind CSS** – Beautiful, responsive UI
* **Hardhat** – Smart contract development and deployment
* **Ethers.js** – Blockchain connection
* **Solidity** – Smart contract language
* **OpenZeppelin** – Secure contract standards
* **Core Blockchain** – High-speed, EVM-compatible blockchain

---

## 🤝 Contribute & Build

Fork this repo to kickstart your **token economy** or **meme coin launchpad**. Add:

* Liquidity tools
* A creator analytics dashboard
* Voting & DAO integrations

> Build your Web3 product on Core and help decentralize meme finance. Start now.

---

## 📞 Contact

Have questions, need help building, or want to collaborate?
📩 **Email:** [davidkenechukwu591@gmail.com](mailto:davidkenechukwu591@gmail.com)
🐦 **Twitter:** [@adamsdavee](https://twitter.com/adamsdavee)

```
