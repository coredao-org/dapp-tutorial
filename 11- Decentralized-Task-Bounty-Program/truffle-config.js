module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://testnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confirmations to wait between deployments
      timeoutBlocks: 200, // # of blocks before a deployment times out
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};