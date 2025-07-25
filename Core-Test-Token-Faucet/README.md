# 🪙 Lending Token Faucet

This is a simple ERC-20 token faucet built to distribute testnet versions of **DAI**, **USDT**, and **USDC** tokens for lending and borrowing dApps on the **Core Testnet**.

## 📌 Deployed Token Addresses

| Token                  | Contract Address                             |
| ---------------------- | -------------------------------------------- |
| **Lending DAI Token**  | `0x7a8eF80C8136862fc7402E8Cfb9Cd1ea9c3BFB4B` |
| **Lending USDT Token** | `0x367a5a4C14214BfE67d3C00A97F19Cecd2cf9e87` |
| **Lending USDC Token** | `0x2bE22845339D49E9b296AbA5462D78F2e929DB05` |

> ⚠️ These tokens are for **Core Testnet** use only and have no real-world value.

---

## 💡 About the Project

The Lending Token Faucet allows developers and testers to receive testnet tokens instantly. It supports the following use cases:

* Testing DeFi lending/borrowing flows
* Simulating wallet interactions
* Validating contract logic using mock stablecoins

Tokens available for request:

* ✅ Lending DAI
* ✅ Lending USDT
* ✅ Lending USDC

---

## 🔗 Live Faucet Interface

👉 [**https://token-faucet-sandy.vercel.app/**](https://token-faucet-sandy.vercel.app/) — *Frontend placeholder for local testing*

---

## 🔧 How It Works

1. Connect your wallet to the **Core Testnet**
2. Visit the faucet interface
3. Choose the token you want to receive
4. Click **Request Tokens** and confirm the transaction

Each wallet can request tokens based on optional rate limits (e.g., per hour/day) to prevent abuse.

---

## 🛠 Tech Stack

* **Solidity** (`^0.8.x`)
* **OpenZeppelin** ERC20 contracts
* **Hardhat** for smart contract development
* **React + Ethers.js** frontend *(optional)*
* **Core Blockchain Testnet**

---

## 📁 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/token-faucet.git
cd token-faucet
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the contracts

```bash
npx hardhat compile
```

### 4. Deploy to Core Testnet

```bash
npx hardhat run scripts/deploy.js --network coreTestnet
```

---

## 🌐 Core Testnet Configuration

You can manually add Core Testnet to MetaMask using:

```
Network Name: Core Testnet
Chain ID: 1115
Currency Symbol: tCORE
RPC URL: https://rpc.test.btcs.network
Block Explorer: https://scan.test.btcs.network
```

---

## 🤝 Contributing

Feel free to fork the repo, suggest features, and open pull requests. Every contribution helps improve the faucet!

---

## 📢 Disclaimer

This faucet is intended for **testing and development only**. Tokens dispensed have **no real monetary value** and should **not be used on mainnet**.

---

## 👤 Author

**David Kenechukwu**

* GitHub: [@adamsdavee](https://github.com/adamsdavee)
* Live Frontend: [http://localhost:3000/loans](https://token-faucet-sandy.vercel.app/)