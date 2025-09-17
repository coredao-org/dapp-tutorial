import {
  getEcosystemInfo
} from "./chunk-QLJVAXYD.js";
import {
  createWalletEmitter,
  trackConnect
} from "./chunk-CLN3QXW2.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  getCachedChainIfExists
} from "./chunk-TFBEDS4S.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/in-app-core.js
var connectorCache = /* @__PURE__ */ new Map();
async function getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem) {
  const key = stringify({ clientId: client.clientId, ecosystem });
  if (connectorCache.has(key)) {
    return connectorCache.get(key);
  }
  const connector = await connectorFactory(client);
  connectorCache.set(key, connector);
  return connector;
}
function createInAppWallet(args) {
  const { createOptions: _createOptions, connectorFactory, ecosystem } = args;
  const walletId = ecosystem ? ecosystem.id : "inApp";
  const emitter = createWalletEmitter();
  let createOptions = _createOptions;
  let account = void 0;
  let chain = void 0;
  let client;
  return {
    id: walletId,
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
    autoConnect: async (options) => {
      const { autoConnectInAppWallet } = await import("./wallet-ZUZOMGPE.js");
      const connector = await getOrCreateInAppWalletConnector(options.client, connectorFactory, ecosystem);
      if (ecosystem) {
        const ecosystemOptions = await getEcosystemInfo(ecosystem.id);
        const smartAccountOptions = ecosystemOptions == null ? void 0 : ecosystemOptions.smartAccountOptions;
        if (smartAccountOptions) {
          const preferredChain = options.chain;
          if (!preferredChain) {
            throw new Error("Chain is required for ecosystem smart accounts, pass it via connect() or via UI components");
          }
          createOptions = {
            ...createOptions,
            smartAccount: {
              chain: preferredChain,
              sponsorGas: smartAccountOptions.sponsorGas,
              factoryAddress: smartAccountOptions.accountFactoryAddress
            }
          };
        }
      }
      const [connectedAccount, connectedChain] = await autoConnectInAppWallet(options, createOptions, connector);
      client = options.client;
      account = connectedAccount;
      chain = connectedChain;
      trackConnect({
        client: options.client,
        ecosystem,
        walletType: walletId,
        walletAddress: account.address,
        chainId: chain.id
      });
      return account;
    },
    connect: async (options) => {
      const { connectInAppWallet } = await import("./wallet-ZUZOMGPE.js");
      const connector = await getOrCreateInAppWalletConnector(options.client, connectorFactory, ecosystem);
      if (ecosystem) {
        const ecosystemOptions = await getEcosystemInfo(ecosystem.id);
        const smartAccountOptions = ecosystemOptions == null ? void 0 : ecosystemOptions.smartAccountOptions;
        if (smartAccountOptions) {
          const preferredChain = options.chain;
          if (!preferredChain) {
            throw new Error("Chain is required for ecosystem smart accounts, pass it via connect() or via UI components");
          }
          createOptions = {
            ...createOptions,
            smartAccount: {
              chain: preferredChain,
              sponsorGas: smartAccountOptions.sponsorGas,
              factoryAddress: smartAccountOptions.accountFactoryAddress
            }
          };
        }
      }
      const [connectedAccount, connectedChain] = await connectInAppWallet(options, createOptions, connector);
      client = options.client;
      account = connectedAccount;
      chain = connectedChain;
      trackConnect({
        client: options.client,
        ecosystem,
        walletType: walletId,
        walletAddress: account.address,
        chainId: chain.id
      });
      return account;
    },
    disconnect: async () => {
      if (client) {
        const connector = await getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem);
        const result = await connector.logout();
        if (!result.success) {
          throw new Error("Failed to logout");
        }
      }
      account = void 0;
      chain = void 0;
      emitter.emit("disconnect", void 0);
    },
    switchChain: async (newChain) => {
      if ((createOptions == null ? void 0 : createOptions.smartAccount) && client && account) {
        const { autoConnectInAppWallet } = await import("./wallet-ZUZOMGPE.js");
        const connector = await getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem);
        if (ecosystem) {
          const ecosystemOptions = await getEcosystemInfo(ecosystem.id);
          const smartAccountOptions = ecosystemOptions == null ? void 0 : ecosystemOptions.smartAccountOptions;
          if (smartAccountOptions) {
            createOptions = {
              ...createOptions,
              smartAccount: {
                chain: newChain,
                sponsorGas: smartAccountOptions.sponsorGas,
                factoryAddress: smartAccountOptions.accountFactoryAddress
              }
            };
          }
        }
        const [connectedAccount, connectedChain] = await autoConnectInAppWallet({
          chain: newChain,
          client
        }, createOptions, connector);
        account = connectedAccount;
        chain = connectedChain;
      } else {
        chain = newChain;
      }
      emitter.emit("chainChanged", newChain);
    }
  };
}

export {
  getOrCreateInAppWalletConnector,
  createInAppWallet
};
//# sourceMappingURL=chunk-6WNCTW75.js.map
