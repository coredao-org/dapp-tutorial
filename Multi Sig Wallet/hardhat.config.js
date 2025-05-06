require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.27",

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: Thanks hardhat!
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    // sepolia: {
    //   url: SEPOLIA_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    //   chainId: 11155111,
    //   blockConfirmations: 2,
    // },
    core: {
      url: 'https://rpc.test.btcs.network',
      accounts: [PRIVATE_KEY],
      chainId: 1115,
    },
  },
};
