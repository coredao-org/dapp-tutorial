require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    defaultNetwork: 'hardhat',

    networks: {
       hardhat: {},
       core_testnet: {
         url: 'https://rpc.test2.btcs.network',
         accounts: [PRIVATE_KEY],
         chainId: 1114,
       },
    },
    solidity: {
       compilers: [
         {
            version: '0.8.9',
            settings: {
               evmVersion: 'london',
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
       ],
    },
    paths: {
       sources: './contracts',
       cache: './cache',
       artifacts: './artifacts',
    },
    mocha: {
       timeout: 20000,
    },
};
