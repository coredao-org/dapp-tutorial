import {
  getSavedConnectParamsFromStorage,
  saveConnectParamsToStorage
} from "./chunk-YGRUPXVB.js";
import {
  DEFAULT_PROJECT_ID,
  NAMESPACE
} from "./chunk-XB34LHR5.js";
import {
  formatWalletConnectUrl
} from "./chunk-5U5XBS6S.js";
import {
  getWalletInfo
} from "./chunk-XC5J5ANL.js";
import {
  getDefaultAppMetadata
} from "./chunk-G26WKBGM.js";
import {
  getValidPublicRPCUrl,
  normalizeChainId
} from "./chunk-7AY3QZZV.js";
import {
  trackTransaction
} from "./chunk-I2GEMA2B.js";
import {
  parseTypedData
} from "./chunk-SWMZXE3E.js";
import {
  getTypesForEIP712Domain,
  serializeTypedData,
  validateTypedData
} from "./chunk-LO5SQBMX.js";
import {
  getAddress
} from "./chunk-EIVAOYE5.js";
import {
  SwitchChainError,
  UserRejectedRequestError
} from "./chunk-GINVHONX.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  getCachedChain,
  getChainMetadata,
  getRpcUrlForChain
} from "./chunk-TFBEDS4S.js";
import {
  numberToHex,
  stringToHex,
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/controller.js
var ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
var defaultShowQrModal = true;
var storageKeys = {
  requestedChains: "tw.wc.requestedChains",
  lastUsedChainId: "tw.wc.lastUsedChainId"
};
function isWalletConnect(wallet) {
  return wallet.id === "walletConnect";
}
async function connectWC(options, emitter, walletId, storage, sessionHandler) {
  var _a, _b;
  const provider = await initProvider(options, walletId, sessionHandler);
  const wcOptions = options.walletConnect;
  let { onDisplayUri } = wcOptions || {};
  if (!onDisplayUri && sessionHandler && walletId !== "walletConnect") {
    const walletInfo = await getWalletInfo(walletId);
    const deeplinkHandler = (uri) => {
      const appUrl = walletInfo.mobile.native || walletInfo.mobile.universal;
      if (!appUrl) {
        throw new Error("No app url found for wallet connect to redirect to.");
      }
      const fullUrl = formatWalletConnectUrl(appUrl, uri).redirect;
      sessionHandler(fullUrl);
    };
    onDisplayUri = deeplinkHandler;
  }
  if (onDisplayUri) {
    provider.events.addListener("display_uri", onDisplayUri);
  }
  let optionalChains = wcOptions == null ? void 0 : wcOptions.optionalChains;
  let chainToRequest = options.chain;
  if (walletId === "global.safe") {
    optionalChains = chainsToRequestForSafe.map(getCachedChain);
    if (chainToRequest && !optionalChains.includes(chainToRequest)) {
      chainToRequest = void 0;
    }
  }
  const { rpcMap, requiredChain, optionalChains: chainsToRequest } = getChainsToRequest({
    client: options.client,
    chain: chainToRequest,
    optionalChains
  });
  if (provider.session) {
    await provider.connect({
      ...(wcOptions == null ? void 0 : wcOptions.pairingTopic) ? { pairingTopic: wcOptions == null ? void 0 : wcOptions.pairingTopic } : {},
      optionalChains: chainsToRequest,
      chains: requiredChain ? [requiredChain.id] : void 0,
      rpcMap
    });
  }
  setRequestedChainsIds(chainsToRequest, storage);
  const addresses = await provider.enable();
  const address = addresses[0];
  if (!address) {
    throw new Error("No accounts found on provider.");
  }
  const providerChainId = normalizeChainId(provider.chainId);
  const chain = options.chain && options.chain.id === providerChainId ? options.chain : getCachedChain(providerChainId);
  if (options) {
    const savedParams = {
      optionalChains: (_a = options.walletConnect) == null ? void 0 : _a.optionalChains,
      chain: options.chain,
      pairingTopic: (_b = options.walletConnect) == null ? void 0 : _b.pairingTopic
    };
    if (storage) {
      saveConnectParamsToStorage(storage, walletId, savedParams);
    }
  }
  if (wcOptions == null ? void 0 : wcOptions.onDisplayUri) {
    provider.events.removeListener("display_uri", wcOptions.onDisplayUri);
  }
  return onConnect(address, chain, provider, emitter, storage, options.client);
}
async function autoConnectWC(options, emitter, walletId, storage, sessionHandler) {
  const savedConnectParams = storage ? await getSavedConnectParamsFromStorage(storage, walletId) : null;
  const provider = await initProvider(savedConnectParams ? {
    chain: savedConnectParams.chain,
    client: options.client,
    walletConnect: {
      pairingTopic: savedConnectParams.pairingTopic,
      optionalChains: savedConnectParams.optionalChains
    }
  } : {
    client: options.client,
    walletConnect: {}
  }, walletId, sessionHandler, true);
  const address = provider.accounts[0];
  if (!address) {
    throw new Error("No accounts found on provider.");
  }
  const providerChainId = normalizeChainId(provider.chainId);
  const chain = options.chain && options.chain.id === providerChainId ? options.chain : getCachedChain(providerChainId);
  return onConnect(address, chain, provider, emitter, storage, options.client);
}
async function initProvider(options, walletId, sessionRequestHandler, isAutoConnect = false) {
  var _a, _b, _c, _d;
  const walletInfo = await getWalletInfo(walletId);
  const wcOptions = options.walletConnect;
  const { EthereumProvider, OPTIONAL_EVENTS, OPTIONAL_METHODS } = await import("./index.es-AMKWX7QZ.js");
  let optionalChains = wcOptions == null ? void 0 : wcOptions.optionalChains;
  let chainToRequest = options.chain;
  if (walletId === "global.safe") {
    optionalChains = chainsToRequestForSafe.map(getCachedChain);
    if (chainToRequest && !optionalChains.includes(chainToRequest)) {
      chainToRequest = void 0;
    }
  }
  const { rpcMap, requiredChain, optionalChains: chainsToRequest } = getChainsToRequest({
    client: options.client,
    chain: chainToRequest,
    optionalChains
  });
  const provider = await EthereumProvider.init({
    showQrModal: (wcOptions == null ? void 0 : wcOptions.showQrModal) === void 0 ? sessionRequestHandler ? false : defaultShowQrModal : wcOptions.showQrModal,
    projectId: (wcOptions == null ? void 0 : wcOptions.projectId) || DEFAULT_PROJECT_ID,
    optionalMethods: OPTIONAL_METHODS,
    optionalEvents: OPTIONAL_EVENTS,
    optionalChains: chainsToRequest,
    chains: requiredChain ? [requiredChain.id] : void 0,
    metadata: {
      name: ((_a = wcOptions == null ? void 0 : wcOptions.appMetadata) == null ? void 0 : _a.name) || getDefaultAppMetadata().name,
      description: ((_b = wcOptions == null ? void 0 : wcOptions.appMetadata) == null ? void 0 : _b.description) || getDefaultAppMetadata().description,
      url: ((_c = wcOptions == null ? void 0 : wcOptions.appMetadata) == null ? void 0 : _c.url) || getDefaultAppMetadata().url,
      icons: [
        ((_d = wcOptions == null ? void 0 : wcOptions.appMetadata) == null ? void 0 : _d.logoUrl) || getDefaultAppMetadata().logoUrl
      ]
    },
    rpcMap,
    qrModalOptions: wcOptions == null ? void 0 : wcOptions.qrModalOptions,
    disableProviderPing: true
  });
  provider.events.setMaxListeners(Number.POSITIVE_INFINITY);
  if (!isAutoConnect) {
    if (provider.session) {
      await provider.disconnect();
    }
  }
  if (walletId !== "walletConnect") {
    async function handleSessionRequest() {
      var _a2, _b2, _c2, _d2;
      const walletLinkToOpen = ((_d2 = (_c2 = (_b2 = (_a2 = provider.session) == null ? void 0 : _a2.peer) == null ? void 0 : _b2.metadata) == null ? void 0 : _c2.redirect) == null ? void 0 : _d2.native) || walletInfo.mobile.native || walletInfo.mobile.universal;
      if (sessionRequestHandler && walletLinkToOpen) {
        await sessionRequestHandler(walletLinkToOpen);
      }
    }
    provider.signer.client.on("session_request_sent", handleSessionRequest);
    provider.events.addListener("disconnect", () => {
      provider.signer.client.off("session_request_sent", handleSessionRequest);
    });
  }
  return provider;
}
function createAccount({ provider, address, client }) {
  const account = {
    address,
    async sendTransaction(tx) {
      const transactionHash = await provider.request({
        method: "eth_sendTransaction",
        params: [
          {
            gas: tx.gas ? numberToHex(tx.gas) : void 0,
            value: tx.value ? numberToHex(tx.value) : void 0,
            from: getAddress(address),
            to: tx.to,
            data: tx.data
          }
        ]
      });
      trackTransaction({
        client,
        walletAddress: getAddress(address),
        walletType: "walletConnect",
        transactionHash,
        chainId: tx.chainId,
        contractAddress: tx.to ?? void 0,
        gasPrice: tx.gasPrice
      });
      return {
        transactionHash
      };
    },
    async signMessage({ message }) {
      const messageToSign = (() => {
        if (typeof message === "string") {
          return stringToHex(message);
        }
        if (message.raw instanceof Uint8Array) {
          return uint8ArrayToHex(message.raw);
        }
        return message.raw;
      })();
      return provider.request({
        method: "personal_sign",
        params: [messageToSign, this.address]
      });
    },
    async signTypedData(_data) {
      const data = parseTypedData(_data);
      const { domain, message, primaryType } = data;
      const types = {
        EIP712Domain: getTypesForEIP712Domain({ domain }),
        ...data.types
      };
      validateTypedData({ domain, message, primaryType, types });
      const typedData = serializeTypedData({
        domain: domain ?? {},
        message,
        primaryType,
        types
      });
      return await provider.request({
        method: "eth_signTypedData_v4",
        params: [this.address, typedData]
      });
    }
  };
  return account;
}
function onConnect(address, chain, provider, emitter, storage, client) {
  const account = createAccount({ provider, address, client });
  async function disconnect() {
    provider.removeListener("accountsChanged", onAccountsChanged);
    provider.removeListener("chainChanged", onChainChanged);
    provider.removeListener("disconnect", onDisconnect);
    await provider.disconnect();
  }
  function onDisconnect() {
    setRequestedChainsIds([], storage);
    storage == null ? void 0 : storage.removeItem(storageKeys.lastUsedChainId);
    disconnect();
    emitter.emit("disconnect", void 0);
  }
  function onAccountsChanged(accounts) {
    if (accounts[0]) {
      const newAccount = createAccount({
        provider,
        address: getAddress(accounts[0]),
        client
      });
      emitter.emit("accountChanged", newAccount);
      emitter.emit("accountsChanged", accounts);
    } else {
      onDisconnect();
    }
  }
  function onChainChanged(newChainId) {
    const newChain = getCachedChain(normalizeChainId(newChainId));
    emitter.emit("chainChanged", newChain);
    storage == null ? void 0 : storage.setItem(storageKeys.lastUsedChainId, String(newChainId));
  }
  provider.on("accountsChanged", onAccountsChanged);
  provider.on("chainChanged", onChainChanged);
  provider.on("disconnect", onDisconnect);
  provider.on("session_delete", onDisconnect);
  return [
    account,
    chain,
    disconnect,
    (newChain) => switchChainWC(provider, newChain, storage)
  ];
}
function getNamespaceMethods(provider) {
  var _a, _b;
  return ((_b = (_a = provider.session) == null ? void 0 : _a.namespaces[NAMESPACE]) == null ? void 0 : _b.methods) || [];
}
function getNamespaceChainsIds(provider) {
  var _a, _b, _c;
  const chainIds = (_c = (_b = (_a = provider.session) == null ? void 0 : _a.namespaces[NAMESPACE]) == null ? void 0 : _b.chains) == null ? void 0 : _c.map((chain) => Number.parseInt(chain.split(":")[1] || ""));
  return chainIds ?? [];
}
async function switchChainWC(provider, chain, storage) {
  var _a, _b;
  const chainId = chain.id;
  try {
    const namespaceChains = getNamespaceChainsIds(provider);
    const namespaceMethods = getNamespaceMethods(provider);
    const isChainApproved = namespaceChains.includes(chainId);
    if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
      const apiChain = await getChainMetadata(chain);
      const blockExplorerUrls = [
        .../* @__PURE__ */ new Set([
          ...((_a = chain.blockExplorers) == null ? void 0 : _a.map((x) => x.url)) || [],
          ...((_b = apiChain.explorers) == null ? void 0 : _b.map((x) => x.url)) || []
        ])
      ];
      await provider.request({
        method: ADD_ETH_CHAIN_METHOD,
        params: [
          {
            chainId: numberToHex(apiChain.chainId),
            chainName: apiChain.name,
            nativeCurrency: apiChain.nativeCurrency,
            rpcUrls: getValidPublicRPCUrl(apiChain),
            // no clientId on purpose
            blockExplorerUrls: blockExplorerUrls.length > 0 ? blockExplorerUrls : void 0
          }
        ]
      });
      const requestedChains = await getRequestedChainsIds(storage);
      requestedChains.push(chainId);
      setRequestedChainsIds(requestedChains, storage);
    }
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: numberToHex(chainId) }]
    });
  } catch (error) {
    const message = typeof error === "string" ? error : error == null ? void 0 : error.message;
    if (/user rejected request/i.test(message)) {
      throw new UserRejectedRequestError(error);
    }
    throw new SwitchChainError(error);
  }
}
function setRequestedChainsIds(chains, storage) {
  storage == null ? void 0 : storage.setItem(storageKeys.requestedChains, stringify(chains));
}
async function getRequestedChainsIds(storage) {
  const data = await storage.getItem(storageKeys.requestedChains);
  return data ? JSON.parse(data) : [];
}
function getChainsToRequest(options) {
  const rpcMap = {};
  if (options.chain) {
    rpcMap[options.chain.id] = getRpcUrlForChain({
      chain: options.chain,
      client: options.client
    });
  }
  const optionalChains = ((options == null ? void 0 : options.optionalChains) || []).slice(0, 10);
  for (const chain of optionalChains) {
    rpcMap[chain.id] = getRpcUrlForChain({
      chain,
      client: options.client
    });
  }
  if (!options.chain && optionalChains.length === 0) {
    rpcMap[1] = getCachedChain(1).rpc;
  }
  return {
    rpcMap,
    requiredChain: options.chain ? options.chain : void 0,
    optionalChains: optionalChains.length > 0 ? optionalChains.map((x) => x.id) : [1]
  };
}
var chainsToRequestForSafe = [
  1,
  // Ethereum Mainnet
  11155111,
  // Sepolia Testnet
  42161,
  // Arbitrum One Mainnet
  43114,
  // Avalanche Mainnet
  8453,
  // Base Mainnet
  1313161554,
  // Aurora Mainnet
  84532,
  // Base Sepolia Testnet
  56,
  // Binance Smart Chain Mainnet
  42220,
  // Celo Mainnet
  100,
  // Gnosis Mainnet
  10,
  // Optimism Mainnet
  137,
  // Polygon Mainnet
  1101,
  // Polygon zkEVM Mainnet
  324,
  // zkSync Era mainnet
  534352
  // Scroll mainnet
];

export {
  isWalletConnect,
  connectWC,
  autoConnectWC
};
//# sourceMappingURL=chunk-RC344ZND.js.map
