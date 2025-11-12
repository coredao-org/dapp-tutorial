require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");

const { PrivateKey } = require('./secret.json');

module.exports = {
   defaultNetwork: 'core_testnet',
   networks: {
      hardhat: {},
      core_testnet: {
         url: 'https://rpc.test.btcs.network',
         accounts: [PrivateKey],
         chainId: 1115,
      }
   },
   solidity: {
      version: '0.8.27',
      settings: {
         optimizer: {
            enabled: true,
            runs: 200,
         },
      },
   },
};
