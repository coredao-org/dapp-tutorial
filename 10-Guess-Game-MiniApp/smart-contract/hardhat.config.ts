// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config();





const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CORE_TEST_SCAN_KEY = process.env.CORE_TEST_SCAN_KEY;
const CORE_MAIN_SCAN_KEY = process.env.CORE_MAIN_SCAN_KEY;

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
  defaultNetwork: 'hardhat',

  networks: {
     hardhat: {
     },
     core_testnet: {
        url: 'https://rpc.test2.btcs.network',
        accounts: [PRIVATE_KEY],
        chainId: 1114,
     },
     core_mainnet: {
       url: 'https://rpc.coredao.org',
       accounts: [PRIVATE_KEY],
       chainId: 1116,
    },
  },
  etherscan: {
   apiKey: {
     testnet: CORE_TEST_SCAN_KEY!,
     mainnet: CORE_MAIN_SCAN_KEY!,
   },
   customChains: [
     {
       network: "testnet",
       chainId: 1115,
       urls: {
         apiURL: "https://api.test2.btcs.network/api",
         browserURL: "https://scan.test2.btcs.network/"
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






