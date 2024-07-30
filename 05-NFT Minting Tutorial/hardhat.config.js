require("@nomicfoundation/hardhat-toolbox");
const { PrivateKey } = require("./secret.json");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "core_testnet",

  networks: {
    hardhat: {},
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: [PrivateKey],
      chainId: 1115,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
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
