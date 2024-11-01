// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config();





// const ACCOUNT_PRIVATE_KEY = process.env.PRIVATE_KEY;

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     hardhat: {
//       forking: {
//         url: "https://rpc.test.btcs.network",
//       }
//     }
//   },
//   lockGasLimit: 200000000000,
//   gasPrice: 10000000000,
// };



module.exports = {
  defaultNetwork: 'testnet',

  networks: {
     hardhat: {
     },
     testnet: {
        url: 'https://rpc.test.btcs.network',
        accounts: [process.env.PRIVATE_KEY!],
        chainId: 1115,
     },
     mainnet: {
       url: 'https://rpc.coredao.org',
       accounts: [process.env.PRIVATE_KEY],
       chainId: 1116,
    },
  },
  etherscan: {
   apiKey: {
     testnet: process.env.CORE_TEST_SCAN_KEY!,
     mainnet: process.env.CORE_MAIN_SCAN_KEY!,
   },
   customChains: [
     {
       network: "testnet",
       chainId: 1115,
       urls: {
         apiURL: "https://api.test.btcs.network/api",
         browserURL: "https://scan.test.btcs.network/"
       }
     },
     {
       network: "mainnet",
       chainId: 1116,
       urls: {
         apiURL: "https://openapi.coredao.org/api",
         browserURL: "https://scan.coredao.org/"
       }
     }
   ]
 },

 solidity: {
  compilers: [
    {
       version: '0.8.20',
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






