# MultiSig Wallet Factory

Welcome to the MultiSig Wallet Factory project! This blockchain-based application enables users to easily deploy and manage multisignature (multisig) wallets for various use cases, enhancing security and collaborative control over assets. 

## Features

- **Easy Deployment**: Deploy multisig wallets with a user-friendly interface.
- **Customizable Ownership**: Define multiple owners for each wallet, specifying the number of required confirmations for transactions.
- **Secure Transactions**: Ensure that transactions are executed only after the necessary approvals, enhancing security.
- **Wallet Monitoring**: Track and monitor deployed wallets and their activities.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 LTS)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/adamsdavee/MultiSig-Wallet-Factory.git
   cd MultiSig-Wallet-Factory
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Local Blockchain**:

   ```bash
   npx hardhat node
   ```

   This command starts a local Hardhat blockchain instance.

2. **Deploy Contracts**:

   ```bash
   npx hardhat run scripts/deploy-multisig.js --network localhost "For Local Blockchain"
   npx hardhat run scripts/deploy-multisig.js --network core "For Core Blockchain"
   ```

   This command deploys the multisig wallet contracts to the local or core blockchain.

3. **Start the Frontend Application**:

   ```bash
   cd MultiSig-Wallet-Factory/Frontend
   npm start
   ```

   This command starts the React frontend application.

4. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000` to interact with the application.

## Usage

- **Create a Multisig Wallet**:

  - Navigate to the "Create Wallet" section.
  - Enter the addresses of the owners and specify the number of required confirmations.
  - Click "Create" to deploy the wallet.

- **Manage Wallets**:

  - View a list of deployed wallets in the "My Wallets" section.
  - Select a wallet to view details, propose transactions, and monitor activities.

## Project Structure

- **Frontend**: Located in the `Frontend` directory, built with React.
- **Contracts**: Solidity contracts are in the `contracts` directory.
- **Deployment Scripts**: Found in the `scripts` directory, used for deploying contracts.
- **Tests**: Located in the `test` directory, containing test cases for the contracts.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project was inspired by various multisig wallet implementations and aims to provide an easy-to-use platform for deploying and managing multisig wallets.

For more information, visit the [GitHub repository](https://github.com/adamsdavee/MultiSig-Wallet-Factory). 