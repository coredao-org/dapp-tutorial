11-Todo
A decentralized todo list application (dApp) deployed on Core Testnet 2. It uses a Solidity smart contract (Task.sol) built with Foundry to manage todos and a React frontend (core_frontal) for user interaction, allowing users to create, toggle, and view todos on the blockchain.
Project Overview

Smart Contract (Task.sol): Manages a todo list with functions to create todos, toggle completion, and retrieve all todos. Deployed on Core Testnet 2 at 0xf4Cc3E6A0EFE70c007243591B9d500760361Bad2.
React Frontend (core_frontal): A single-page app that connects to the contract via Viem, enabling users to interact with todos using MetaMask on Core Testnet 2.

Technologies

Foundry: Smart contract development and deployment.
Solidity: ^0.8.13 for the Tasks contract.
React: Frontend interface.
Viem: Blockchain interaction library.
Ethers.js: For decoding bytes32 strings.
Node.js/npm: Frontend runtime and package management.
MetaMask: Wallet for Core Testnet 2.
Core Testnet 2: Deployment network.

Getting Started
Prerequisites

Node.js (v14.15.5+): Install from nodejs.org.
npm (v7.5.3+): Included with Node.js.
Foundry: Install via Foundry Book (forge and cast required).
MetaMask: Browser extension set to Core Testnet 2.
Core Testnet 2 RPC: Get from a provider like ChainList.
Testnet ETH: Obtain from a Core Testnet 2 faucet.
Git: For cloning the repository.

Installation

Clone the Repository:
fork the repository 
git clone https://github.com/your-username/dapp-tutorial.git
cd 11-todo


Set Up Environment Variables:

In core_frontal, create .


In contracts, create .env:PRIVATE_KEY=<your-wallet-private-key>
RPC_URL=<your-core-testnet2-rpc-url>



Smart Contract Deployment (Foundry)

Navigate to Contracts Folder:
cd contracts


Install Foundry Dependencies:
forge install


Compile Contract:
forge build


Deploy to Core Testnet 2:

Ensure .env is set with PRIVATE_KEY and RPC_URL.
Deploy Task.sol:forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Task.sol:Tasks


Copy the deployed contract address from the output.
Update core_frontal/src/getContractInstance.js with the new address:address: getAddress("<new-contract-address>"),





Frontend Setup (React)

Navigate to Frontend Folder:
cd ../core_frontal


Install npm Dependencies:
npm install


Start Development Server:
npm start

Open http://localhost:3000 in a browser with MetaMask connected to Core Testnet 2.


Usage

Smart Contract:

Create Todo: Call createTask(string _name) to add a todo.
Toggle Completion: Call toggleTask(uint index) to mark a todo as completed/uncompleted.
Get Todos: Call getAllTasks() to retrieve all todos.
Use cast to interact:cast call 0xf4Cc3E6A0EFE70c007243591B9d500760361Bad2 "getAllTasks()(bytes32[],bool[],uint256[])" --rpc-url $RPC_URL




Frontend:

Connect MetaMask to Core Testnet 2.
Create Todo: Enter a todo name and click "Create Todo".
View Todos: Click "Get Todos" to list all todos (name, completion status, timestamp).
View Completed Todos: Click "Get Completed Todos" to filter completed todos.
Toggle Completion: Click "Complete" on a todo (disabled if completed).
Clear Display: Click "Clear message" to reset the todo list display.



Project Structure
11-Todo/
├── contracts/                # Foundry smart contract files
│   ├── src/Task.sol          # Tasks contract
│   ├── cache/                # Foundry cache
│   ├── out/                  # Compiled artifacts
│   ├── lib/                  # External libraries (if any)
│   ├── test/                 # Test files (if any)
│   └── foundry.toml          # Foundry config
├── core_frontal/             # React frontend
│   ├── src/                  # React source files
│   │   ├── abi.json          # Contract ABI
│   │   ├── App.js            # Main app component
│   │   ├── Main.js           # Core logic
│   │   ├── TodoList.jsx      # Todo list component
│   │   ├── Todo.jsx          # Individual todo component
│   │   ├── getContractInstance.js # Contract instance setup
│   │   ├── index.js          # React entry point
│   │   ├── App.css           # Styles
│   │   └── reportWebVitals.js # Performance monitoring
│   ├── public/               # Static assets
│   ├── node_modules/         # npm dependencies
│   ├── package.json          # Frontend dependencies
│   └── package-lock.json     # Dependency lock file
├── README.md                 # This file

Troubleshooting

Contract Deployment Fails: Verify PRIVATE_KEY, RPC_URL, and testnet balance.
Frontend Connection Issues: Ensure MetaMask is on Core Testnet 2.
Dependency Errors: Run forge install in contracts and npm install in core_frontal again.
