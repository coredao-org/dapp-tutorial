require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const CORE_RPC_URL = process.env.CORE_RPC_URL;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
           evmVersion: 'paris',
           optimizer: {
              enabled: true,
              runs: 200,
           },
        },
     },
      { version: "0.8.19", settings: {
        evmVersion: 'paris',
        optimizer: {
           enabled: true,
           runs: 200,
        },
     }, },
      { version: "0.8.20", settings: {
        evmVersion: 'paris',
        optimizer: {
           enabled: true,
           runs: 200,
        },
     }, },
      { version: "0.7.6" },
      { version: "0.5.16" },
      { version: "0.6.6" },
    ],
  },

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: Thanks hardhat!
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 2,
    },
    core: {
      url: 'https://rpc.test.btcs.network',
      accounts: [PRIVATE_KEY],
      chainId: 1115,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};