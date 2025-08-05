# 🪙 Core Token Test Faucet

This is a simple ERC-20 token faucet built to distribute testnet versions of tokens for various test dApps on the **Core Testnet**.

## 📌 Deployed Token Addresses

| Token                  | Contract Address                             |
| ---------------------- | -------------------------------------------- |
| **Lending DAI Token**  | `0x7a8eF80C8136862fc7402E8Cfb9Cd1ea9c3BFB4B` |
| **Lending USDT Token** | `0x367a5a4C14214BfE67d3C00A97F19Cecd2cf9e87` |
| **Lending USDC Token** | `0x2bE22845339D49E9b296AbA5462D78F2e929DB05` |

> ⚠️ These tokens are for **Core Testnet** use only and have no real-world value.

---

## 💡 About the Project


Tokens available for request:

* ✅ Lending DAI
* ✅ Lending USDT
* ✅ Lending USDC

---

## 🔗 Live Faucet Interface

👉 [**https://token-faucet-sandy.vercel.app/**](https://token-faucet-sandy.vercel.app/)

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
* **Nextjs + Ethers.js** frontend *(optional)*
* **Core Blockchain Testnet**

---

## 📁 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/coredao-org/dapp-tutorial
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
npx hardhat run scripts/deploy.js --network core
```


### 5. Launch the Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### ✅ Requesting Test Tokens

1. Connect your wallet to the **Core Testnet**
2. Visit your localhost link.
3. Click on any token's **Request** button to receive test tokens directly to your wallet

---

## 🌐 Core Testnet Configuration

You can manually add Core Testnet to MetaMask using:

```
Network Name: Core Testnet
Chain ID: 1114
Currency Symbol: tCORE
RPC URL: https://rpc.test2.btcs.network
Block Explorer: https://scan.test2.btcs.network
```

---

## 🤝 Contributing

Feel free to fork the repo, suggest features, and open pull requests and add your test tokens to the faucet. Every contribution helps improve the faucet!

---

## 📢 Disclaimer

This faucet is intended for **testing and development only**. Tokens dispensed have **no real monetary value** and should **not be used on mainnet**.
