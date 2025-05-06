Here’s a tailored README file for your **Uniswap-on-Core** project:

---

# Uniswap-on-Core

Welcome to **Uniswap-on-Core**, a decentralized exchange (DEX) platform built on the Core blockchain. This platform enables users to swap tokens seamlessly, create liquidity pools, add liquidity, and utilize a faucet to mint tokens for testing purposes. With a simple and intuitive interface, this project aims to bring DeFi functionalities to the Core ecosystem.

## Features

- **Token Swapping**: Swap one token for another effortlessly using liquidity pools.
- **Liquidity Pools**: Create liquidity pools to support token trading and earn rewards as a liquidity provider.
- **Add Liquidity**: Contribute to existing pools to improve liquidity and earn LP tokens.
- **Faucet**: Mint test tokens to interact with the platform on the Core blockchain TestNet.

## Learning Takeaways

This project demonstrates the following concepts:

- Integrating MetaMask with a DEX platform on Core TestNet.
- Developing and deploying smart contracts to facilitate token swaps, liquidity pools, and minting.
- Building a React-based front-end to interact with smart contracts.
- Using Thirdweb framework for seamless communication with the blockchain.
- Understanding core principles of decentralized exchanges and automated market makers (AMMs).

## Software Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/) v2.44.0
- [Node.js](https://nodejs.org/en) v20.11.1
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v10.2.4
- [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) v2.22.7
- [MetaMask Web Wallet Extension](https://metamask.io/download/)

## Setting up the Development Environment

1. Clone the repository:

   ```bash
   git clone https://github.com/adamsdavee/Uniswap-on-Core.git
   cd Uniswap-on-Core
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure MetaMask to use the Core TestNet and ensure you have test tokens for interaction. Refer [here](https://docs.coredao.org/docs/Dev-Guide/core-testnet-wallet-config) for wallet configuration.

4. Create a `.env` file in the root directory to store your private key securely:

   ```
     PrivateKey= your-private-key
   ```

   > **Note**: Add `.env` to `.gitignore` to avoid exposing sensitive information.

## Smart Contracts Overview

### Token Swap Contract

Facilitates token swapping through an AMM mechanism.

- **Functionality**: Swap tokens, calculate rates, and manage reserves.

### Liquidity Pool Contract

Allows users to create and contribute liquidity pools.

- **Functionality**: Track liquidity shares, enable adding/removing liquidity, and distribute fees.

### Faucet Contract

Provides test tokens to users for interacting with the platform.

- **Functionality**: Mint tokens with a fixed supply and limit per user request.

## Front-End Integration

The React-based front end is built to interact seamlessly with the deployed contracts.

### Key Components

1. **Token Swap Interface**:
   - Swap tokens by specifying input amounts.

2. **Liquidity Management**:
   - Create new liquidity pools.
   - Add or remove liquidity from existing pools.
   - Track rewards and shares.

3. **Faucet**:
   - Request test tokens to begin interaction.

### Running the Front-End

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Access the application in your browser at `http://localhost:3000`.

## Deploying the Smart Contracts

1. Compile the contracts:

   ```bash
   npx hardhat compile
   ```

2. Deploy the contracts:

   ```bash
   npx hardhat run scripts/deployTokens.js
   npx hardhat run scripts/deploy_factory_.js
   npx hardhat run scripts/deploy_liquidity.js
   ```

3. Note the contract addresses from the deployment output for front-end integration.

## Testing

Run the Hardhat test suite to verify the functionality of the smart contracts:

```bash
npx hardhat test
```

## Project Structure

```bash
Uniswap-on-Core
│   README.md
│   hardhat.config.js
│   package.json
│
├── contracts
│   └── (Smart contracts for swapping, liquidity pools, and faucet)
├── scripts
│   └── deploy.js
├── test
│   └── (Test files for smart contracts)
└── frontend
    ├── app
    │   ├── components
    │   │   └── (React components for the front-end)
    │   ├── page.tsx
    │   │  
    │   ├── layout.tsx
    │   └── global.module.css
    │       
    ├── package.json
    └── public
```

## Contribution

Contributions are welcome! If you'd like to improve this project, please:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is open-source and available under the MIT License.

---

Feel free to customize this further based on your preferences or the specific details of your project.