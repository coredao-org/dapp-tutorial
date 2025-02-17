# Core-MemeLaunch

**Core-MemeLaunch** is a decentralized platform designed to empower users to launch and trade meme tokens effortlessly. Built on the Telos blockchain, it offers a seamless experience for meme enthusiasts and token traders alike.

## Features

- **Token Launching**: Easily create and deploy your own meme tokens.
- **Token Trading**: Trade meme tokens in a decentralized environment.
- **User-Friendly Interface**: Navigate the platform with ease, thanks to its intuitive design.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/adamsdavee/dapp-tutorial.git
   cd '.\dapp-tutorial\Core-MemeLaunch.fun\'
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add your private key:

   ```env
   PRIVATE_KEY=your-private-key
   ```

   > **Note**: Ensure `.env` is added to `.gitignore` to keep your private key secure.

4. **Compile Contracts**:

   ```bash
   npx hardhat compile
   ```

5. **Deploy Contracts**:

   ```bash
   npx hardhat run scripts/deploy-meme-factory.js
   ```

6. **Start the Frontend**:

   Navigate to the `frontend` directory and start the development server:

   ```bash
   cd frontend
   npm install
   npm start
   ```

   Access the application at `http://localhost:3000`.

## Project Structure

```bash
Core-MemeLaunch/
├── contracts/           # Smart contracts
├── frontend/            # React frontend
├── scripts/             # Deployment scripts
├── test/                # Test scripts
├── hardhat.config.js    # Hardhat configuration
├── package.json         # Node.js dependencies
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License.

--- 