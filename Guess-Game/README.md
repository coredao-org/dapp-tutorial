# Guess the Number Game on Core Blockchain

Welcome to the "Guess the Number" game! This decentralized application (dApp) allows players to guess a secret number on the Core blockchain. The first player to guess the correct number is rewarded with tokens.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Interacting with the dApp](#interacting-with-the-dapp)
- [Smart Contract Overview](#smart-contract-overview)
- [Frontend Overview](#frontend-overview)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension
- Basic understanding of Ethereum smart contracts and React

## Project Structure

The repository is organized as follows:

- `contracts/`: Contains the Solidity smart contract.
- `scripts/`: Deployment scripts for the smart contract.
- `test/`: Test scripts for the smart contract.
- `frontend/`: React application for the game's frontend.
- `hardhat.config.js`: Configuration file for Hardhat.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/adamsdavee/Guess-Game.git
   cd Guess-Game
   ```

2. **Install Dependencies**

   Navigate to the root directory and install the necessary packages:

   ```bash
   npm install
   ```

   Then, navigate to the `frontend` directory and install its dependencies:

   ```bash
   cd frontend
   npm install
   ```

## Running the Application

1. **Compile the Smart Contract**

   Return to the root directory and compile the contract:

   ```bash
   cd ..
   npx hardhat compile
   ```

2. **Deploy the Smart Contract**

   Deploy the contract to the Core blockchain testnet:

   ```bash
   npx hardhat run scripts/deploy.js --network coreTestnet
   ```

   Ensure you have configured the `coreTestnet` network in your `hardhat.config.js` with the appropriate RPC URL and account details.

3. **Start the Frontend Application**

   Navigate back to the `frontend` directory and start the React application:

   ```bash
   cd frontend
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Interacting with the dApp

1. **Connect Wallet**

   - Open the application in your browser.
   - Click on the "Connect Wallet" button.
   - Approve the connection in your MetaMask extension.

2. **Make a Guess**

   - Enter a number between 1 and 100 in the input field.
   - Click the "Guess" button.
   - The application will inform you if your guess is too high, too low, or correct.
   - Your number of attempts will be displayed.

3. **Reset the Game**

   - Click the "New Game" button to reset the game and start over.

## Smart Contract Overview

The smart contract is written in Solidity and is located in the `contracts` directory. It manages the game's logic, including:

- Storing the secret number.
- Tracking the number of attempts by each player.
- Rewarding the first player who guesses the correct number.

## Frontend Overview

The frontend is built with React and is located in the `frontend` directory. It interacts with the smart contract using the ethers.js library and provides a user-friendly interface for players.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy playing the "Guess the Number" game on the Core blockchain! If you encounter any issues or have suggestions, feel free to open an issue in the repository. 