/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
   defaultNetwork: 'core_testnet',

   networks: {
      hardhat: {
      },
      core_testnet: {
         url: 'https://rpc.test2.btcs.network',
         accounts: [PRIVATE_KEY],
         chainId: 1114,
      }
   },
   solidity: {
      compilers: [
        {
           version: '0.8.24',
           settings: {
            evmVersion: 'paris',
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