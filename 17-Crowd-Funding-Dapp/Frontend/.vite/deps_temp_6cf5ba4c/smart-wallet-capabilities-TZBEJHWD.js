import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/wallets/smart/lib/smart-wallet-capabilities.js
function smartWalletGetCapabilities(args) {
  const { wallet } = args;
  const chain = wallet.getChain();
  if (chain === void 0) {
    return {
      message: `Can't get capabilities, no active chain found for wallet: ${wallet.id}`
    };
  }
  const account = wallet.getAccount();
  const config = wallet.getConfig() ?? {};
  return {
    [chain.id]: {
      paymasterService: {
        supported: "sponsorGas" in config ? config.sponsorGas : false
      },
      atomicBatch: {
        supported: (account == null ? void 0 : account.sendBatchTransaction) !== void 0
      }
    }
  };
}
export {
  smartWalletGetCapabilities
};
//# sourceMappingURL=smart-wallet-capabilities-TZBEJHWD.js.map
