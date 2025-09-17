import {
  getDefaultAccountFactory
} from "./chunk-FNI7M3UI.js";
import {
  isContractDeployed
} from "./chunk-Q3TN3POE.js";
import {
  createWalletEmitter,
  trackConnect
} from "./chunk-CLN3QXW2.js";
import {
  isZkSyncChain
} from "./chunk-7ZCK2FX5.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  getCachedChainIfExists
} from "./chunk-TFBEDS4S.js";

// node_modules/thirdweb/dist/esm/wallets/smart/smart-wallet.js
function smartWallet(createOptions) {
  const emitter = createWalletEmitter();
  let account = void 0;
  let adminAccount = void 0;
  let chain = void 0;
  let lastConnectOptions;
  const _smartWallet = {
    id: "smart",
    subscribe: emitter.subscribe,
    getChain() {
      if (!chain) {
        return void 0;
      }
      chain = getCachedChainIfExists(chain.id) || chain;
      return chain;
    },
    getConfig: () => createOptions,
    getAccount: () => account,
    getAdminAccount: () => adminAccount,
    autoConnect: async (options) => {
      const { connectSmartWallet } = await import("./smart-7AYCEGLU.js");
      const [connectedAccount, connectedChain] = await connectSmartWallet(_smartWallet, options, createOptions);
      lastConnectOptions = options;
      account = connectedAccount;
      chain = connectedChain;
      trackConnect({
        client: options.client,
        walletType: "smart",
        walletAddress: account.address,
        chainId: chain.id
      });
      return account;
    },
    connect: async (options) => {
      const { connectSmartWallet } = await import("./smart-7AYCEGLU.js");
      const [connectedAccount, connectedChain] = await connectSmartWallet(_smartWallet, options, createOptions);
      adminAccount = options.personalAccount;
      lastConnectOptions = options;
      account = connectedAccount;
      chain = connectedChain;
      trackConnect({
        client: options.client,
        walletType: "smart",
        walletAddress: account.address,
        chainId: chain.id
      });
      emitter.emit("accountChanged", account);
      return account;
    },
    disconnect: async () => {
      account = void 0;
      chain = void 0;
      const { disconnectSmartWallet } = await import("./smart-7AYCEGLU.js");
      await disconnectSmartWallet(_smartWallet);
      emitter.emit("disconnect", void 0);
    },
    switchChain: async (newChain) => {
      var _a;
      if (!lastConnectOptions) {
        throw new Error("Cannot switch chain without a previous connection");
      }
      const isZksyncChain = await isZkSyncChain(newChain);
      if (!isZksyncChain) {
        const factory = getContract({
          address: createOptions.factoryAddress || getDefaultAccountFactory((_a = createOptions.overrides) == null ? void 0 : _a.entrypointAddress),
          chain: newChain,
          client: lastConnectOptions.client
        });
        const isDeployed = await isContractDeployed(factory);
        if (!isDeployed) {
          throw new Error(`Factory contract not deployed on chain: ${newChain.id}`);
        }
      }
      const { connectSmartWallet } = await import("./smart-7AYCEGLU.js");
      const [connectedAccount, connectedChain] = await connectSmartWallet(_smartWallet, { ...lastConnectOptions, chain: newChain }, createOptions);
      account = connectedAccount;
      chain = connectedChain;
      emitter.emit("chainChanged", newChain);
    }
  };
  return _smartWallet;
}

export {
  smartWallet
};
//# sourceMappingURL=chunk-2HYPHUAF.js.map
