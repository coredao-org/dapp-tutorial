# CORE DNS-Protocol

A decentralized naming service (DNS) protocol on the CORE blockchain, inspired by Ethereum Name Service (ENS). This project lets users register human-readable `.core` domains, map them to on-chain and off-chain resources, and manage ownership through smart contracts.

## 🚀 Features

- **Domain Registry**: Store and manage ownership, registration, and expiration of `.core` domains.
- **Resolver**: Associate domains with detailed records (wallet address, IPFS hash, email, social media link).
- **Registrar**: Handle domain registration and renewal with a configurable fee and period.
- **Front-end dApp**: Next.js application for users to connect wallets, register domains, view public registry, and manage personal domains.

## 📂 Project Structure

```
dns-protocol/
├── contracts/              # Solidity smart contracts
│   ├── ENS-Registry.sol    # Core registry contract
│   ├── ResolverContract.sol# Enhanced resolver for domain records
│   └── RegistrationContract.sol # Registrar for registration logic
├── scripts/                # Deployment scripts
│   └── deploy.js           # Deploy registry & registrar
├── test/                   # Hardhat tests (sample Lock contract)
│   └── Lock.js
├── Frontend/               # Next.js front-end application
├── hardhat.config.js       # Hardhat configuration (CORE testnet)
├── package.json
└── README.md               # This file
```

## 🔧 Tech Stack

- **Blockchain**: EVM-compatible CORE chain (testnet RPC at `https://rpc.test2.btcs.network`).
- **Smart Contracts**: Solidity 0.8.x, Hardhat, Ethers.js.
- **Front-end**: Next.js, TypeScript, Tailwind CSS, Ethers.js.

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Hardhat CLI](https://hardhat.org/)
- A CORE testnet wallet and a funded account private key

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adamsdavee/dns-protocol.git
cd dns-protocol
```

### 2. Install dependencies (root)

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the root folder with:

```ini
PRIVATE_KEY=your_core_testnet_private_key
RPC_URL=https://rpc.test2.btcs.network
```

### 4. Compile & Deploy Contracts

Compile contracts:

```bash
npx hardhat compile
```

Deploy to CORE testnet:

```bash
npx hardhat run scripts/deploy.js --network core
```

> _Note the deployed addresses printed in console._

### 5. Configure Front-end

1. Navigate to the `Frontend` folder:
   ```bash
   cd Frontend
   ```
2. Install front-end dependencies:
   ```bash
   npm install
   ```
3. Open the config.json file located in the constants folder within the Frontend directory:
   ```bash
   Frontend/constants/config.json
   ```
   Update the contract addresses as follows:

        Contract One Address: Replace with the deployed address of the ENS Registry contract.
        Contract Two Address: Replace with the deployed address of the Registrar contract.
        Ensure that the addresses are correctly formatted as strings. For example:
   ```ini
    {
    "contractOneAddress": "0xYourENSRegistryAddress",
    "contractTwoAddress": "0xYourRegistrarAddress"
    }

   ```


### 6. Run the Front-end

```bash
npm run dev
```

Open your browser at `http://localhost:3000` to interact with the DNS dApp.

## 🧑‍💻 Usage Overview

1. **Public Registry Page**: View all registered `.core` domains and their owners.
2. **Search**: Filter domains by name to see owner details.
3. **Connect Wallet**: Use MetaMask or other EVM wallet to connect.
4. **Register Domain**: Type your desired name (without `.core`), the suffix is added automatically. If available, confirm transaction. If taken, an error displays the current owner.
5. **My Domains**: In your dashboard, view domains owned by your connected wallet.
6. **Resolver Management**: (Optional) Update domain records (wallet, IPFS, email, social) via the resolver interface.

## 📝 Testing

> _The provided tests cover the sample Lock contract._

Run Hardhat tests:

```bash
npx hardhat test
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add awesome feature"`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

_Enjoy building on CORE!_

