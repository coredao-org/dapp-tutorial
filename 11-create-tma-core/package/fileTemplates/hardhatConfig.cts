///@ts-ignore
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY!;
const config: HardhatUserConfig = {
  defaultNetwork: "core_testnet",

  networks: {
    hardhat: {},
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: [privateKey],
      chainId: 1115,
    },
  },
  solidity: {
    version: "0.8.27",
    compilers: [
      {
        version: "0.8.27",
        settings: {
          evmVersion: "paris",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

module.exports = config;
