import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5972/in-app-wallet-capabilities.js
function inAppWalletGetCapabilities(args) {
  const { wallet } = args;
  const chain = wallet.getChain();
  if (chain === void 0) {
    return {
      message: `Can't get capabilities, no active chain found for wallet: ${wallet.id}`
    };
  }
  const account = wallet.getAccount();
  const config = wallet.getConfig();
  const sponsorGas = (config == null ? void 0 : config.smartAccount) && "sponsorGas" in config.smartAccount ? config.smartAccount.sponsorGas : false;
  return {
    [chain.id]: {
      paymasterService: {
        supported: sponsorGas
      },
      atomicBatch: {
        supported: (account == null ? void 0 : account.sendBatchTransaction) !== void 0
      }
    }
  };
}
export {
  inAppWalletGetCapabilities
};
//# sourceMappingURL=in-app-wallet-capabilities-4KBZBWHO.js.map
