# 11-Todo: A Decentralized Todo List on Core Testnet 2

## Overview

**11-Todo** is a decentralized application (dApp) deployed on **Core Testnet 2**, designed to manage a todo list directly on the blockchain. It combines a Solidity smart contract (`Task.sol`) for backend logic with a responsive React frontend for user interaction.

Users can create todos, toggle their completion status, and view both completed and all todos, with all data stored immutably on the blockchain.

## Technologies Used

* **Solidity** (^0.8.13) — Smart contract language
* **Foundry** — Smart contract development and deployment toolkit
* **React** — Frontend framework
* **Viem** — Blockchain interaction library for dApps
* **Ethers.js** — Utility library for decoding and blockchain interactions
* **MetaMask** — Wallet for user authentication and transactions
* **Core Testnet 2** — Blockchain test network
* **Node.js & npm** — Environment for managing frontend dependencies

## Architecture

### Smart Contract: `Task.sol`

* **Functions**:

  * `createTask(string _name)`: Adds a new todo
  * `toggleTask(uint index)`: Marks a todo as completed/uncompleted
  * `getAllTasks()`: Retrieves all todos with status and timestamp

**Deployed Address**: `0xf4Cc3E6A0EFE70c007243591B9d500760361Bad2` (Core Testnet 2)

### React Frontend: `core_frontal`

* Connects to MetaMask
* Displays all and completed todos
* Allows creation and toggling of todos
* Built using `ethers.js`, `viem`, and standard React hooks

---

## Getting Started

### Prerequisites

* [Node.js (v14.15.5+)](https://nodejs.org/)
* npm (v7.5.3+)
* [Foundry](https://book.getfoundry.sh/) (includes `forge` and `cast`)
* [MetaMask](https://metamask.io/) (configured for Core Testnet 2)
* Core Testnet 2 RPC URL (e.g., via [ChainList](https://chainlist.org))
* Testnet ETH (via Core faucet)
* Git

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dapp-tutorial.git
cd dapp-tutorial/11-todo
```

---

## Backend Setup (Foundry)

### 1. Navigate to Contracts Folder

```bash
cd contracts
```

### 2. Set Environment Variables

Create a `.env` file:

```ini
PRIVATE_KEY=<your-wallet-private-key>
RPC_URL=<your-core-testnet2-rpc-url>
```

### 3. Install Dependencies

```bash
forge install
```

### 4. Compile Contract

```bash
forge build
```

### 5. Deploy Contract

```bash
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Task.sol:Tasks
```

Copy the deployed contract address and update `core_frontal/src/getContractInstance.js` accordingly:

```js
address: getAddress("<new-contract-address>")
```

---

## Frontend Setup (React)

### 1. Navigate to Frontend

```bash
cd ../frontend
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser with MetaMask connected to Core Testnet 2.

---

## Usage Guide

### Smart Contract

* **Create Todo**: `createTask(string _name)`
* **Toggle Todo**: `toggleTask(uint index)`
* **Get All Todos**: `getAllTasks()`

Using Cast:

```bash
cast call 0xf4Cc3E6A0EFE70c007243591B9d500760361Bad2 \
"getAllTasks()(bytes32[],bool[],uint256[])" \
--rpc-url $RPC_URL
```

### Frontend (core\_frontal)

* **Connect Wallet**: Use MetaMask on Core Testnet 2
* **Create Todo**: Input text and click **"Create Todo"**
* **View Todos**: Click **"Get Todos"**
* **View Completed Todos**: Click **"Get Completed Todos"**
* **Toggle Todo**: Click **"Complete"** (disabled if already completed)
* **Clear Display**: Click **"Clear message"** to reset list

---

## Project Structure

```
11-Todo/
├── contracts/                # Foundry contracts
│   ├── src/Task.sol          # Main contract
│   ├── test/                 # Tests (optional)
│   ├── lib/, cache/, out/    # Foundry generated
│   └── foundry.toml          # Config file
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── abi.json
│   │   ├── App.js
│   │   ├── Main.js
│   │   ├── TodoList.jsx
│   │   ├── Todo.jsx
│   │   ├── getContractInstance.js
│   │   ├── index.js
│   │   ├── App.css
│   │   └── reportWebVitals.js
│   ├── public/
│   ├── package.json
│   └── package-lock.json
├── README.md
```

---

## Troubleshooting

| Issue                         | Solution                                                                   |
| ----------------------------- | -------------------------------------------------------------------------- |
| **Contract deployment fails** | Ensure `PRIVATE_KEY`, `RPC_URL`, and testnet ETH are correctly set.        |
| **MetaMask not connecting**   | Confirm network is set to **Core Testnet 2** and refresh the page.         |
| **Frontend errors**           | Run `npm install` and ensure `getContractInstance.js` has correct address. |
| **Foundry issues**            | Re-run `forge install` or consult Foundry Book for setup assistance.       |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgements

* [Core DAO](https://coredao.org/) for providing the testnet infrastructure
* [Foundry Book](https://book.getfoundry.sh/) for smart contract tooling
* [MetaMask](https://metamask.io/) for dApp user interaction
