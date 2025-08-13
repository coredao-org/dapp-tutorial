require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Helper function to safely get private key
function getPrivateKey() {
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    console.warn('Warning: PRIVATE_KEY not found in environment variables');
    return [];
  }
  if (privateKey.length !== 64) {
    console.warn(`Warning: PRIVATE_KEY length is ${privateKey.length}, expected 64`);
    return [];
  }
  return [privateKey];
}

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY",
      accounts: getPrivateKey(),
      chainId: 11155111
    },
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: getPrivateKey(),
      chainId: 1115
    },
    core_mainnet: {
      url: "https://rpc.coredao.org",
      accounts: getPrivateKey(),
      chainId: 1116
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};