import {
  getDefaultAppMetadata
} from "./chunk-G26WKBGM.js";
import {
  getValidPublicRPCUrl,
  normalizeChainId
} from "./chunk-7AY3QZZV.js";
import {
  COINBASE
} from "./chunk-BZXRHH4X.js";
import {
  showCoinbasePopup
} from "./chunk-2RRVHQYX.js";
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
  isHex
} from "./chunk-GINVHONX.js";
import {
  getCachedChain,
  getChainMetadata
} from "./chunk-TFBEDS4S.js";
import {
  numberToHex,
  stringToHex,
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/wallets/coinbase/coinbaseWebSDK.js
var _provider;
async function getCoinbaseWebProvider(options) {
  var _a, _b;
  if (!_provider) {
    let CoinbaseWalletSDK = (await import("./dist-UZFCJX5W.js")).default;
    if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function") {
      CoinbaseWalletSDK = CoinbaseWalletSDK.default;
    }
    const client = new CoinbaseWalletSDK({
      appName: ((_a = options == null ? void 0 : options.appMetadata) == null ? void 0 : _a.name) || getDefaultAppMetadata().name,
      appChainIds: (options == null ? void 0 : options.chains) ? options.chains.map((c) => c.id) : void 0,
      appLogoUrl: ((_b = options == null ? void 0 : options.appMetadata) == null ? void 0 : _b.logoUrl) || getDefaultAppMetadata().logoUrl
    });
    const provider = client.makeWeb3Provider(options == null ? void 0 : options.walletConfig);
    _provider = provider;
    return provider;
  }
  return _provider;
}
function isCoinbaseSDKWallet(wallet) {
  return wallet.id === COINBASE;
}
async function coinbaseSDKWalletGetCapabilities(args) {
  const { wallet } = args;
  const account = wallet.getAccount();
  if (!account) {
    return {
      message: `Can't get capabilities, no account connected for wallet: ${wallet.id}`
    };
  }
  const config = wallet.getConfig();
  const provider = await getCoinbaseWebProvider(config);
  try {
    return await provider.request({
      method: "wallet_getCapabilities",
      params: [account.address]
    });
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      return {
        message: `${wallet.id} does not support wallet_getCapabilities, reach out to them directly to request EIP-5792 support.`
      };
    }
    throw error;
  }
}
async function coinbaseSDKWalletSendCalls(args) {
  const { wallet, params } = args;
  const config = wallet.getConfig();
  const provider = await getCoinbaseWebProvider(config);
  try {
    return await provider.request({
      method: "wallet_sendCalls",
      params
    });
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      throw new Error(`${wallet.id} does not support wallet_sendCalls, reach out to them directly to request EIP-5792 support.`);
    }
    throw error;
  }
}
async function coinbaseSDKWalletShowCallsStatus(args) {
  const { wallet, bundleId } = args;
  const provider = await getCoinbaseWebProvider(wallet.getConfig());
  try {
    return await provider.request({
      method: "wallet_showCallsStatus",
      params: [bundleId]
    });
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      throw new Error(`${wallet.id} does not support wallet_showCallsStatus, reach out to them directly to request EIP-5792 support.`);
    }
    throw error;
  }
}
async function coinbaseSDKWalletGetCallsStatus(args) {
  const { wallet, bundleId } = args;
  const config = wallet.getConfig();
  const provider = await getCoinbaseWebProvider(config);
  return provider.request({
    method: "wallet_getCallsStatus",
    params: [bundleId]
  });
}
function createAccount({ provider, address, client }) {
  const account = {
    address,
    async sendTransaction(tx) {
      const transactionHash = await provider.request({
        method: "eth_sendTransaction",
        params: [
          {
            accessList: tx.accessList,
            value: tx.value ? numberToHex(tx.value) : void 0,
            gas: tx.gas ? numberToHex(tx.gas) : void 0,
            from: getAddress(address),
            to: tx.to,
            data: tx.data
          }
        ]
      });
      trackTransaction({
        client,
        chainId: tx.chainId,
        walletAddress: getAddress(address),
        walletType: COINBASE,
        transactionHash,
        contractAddress: tx.to ?? void 0,
        gasPrice: tx.gasPrice
      });
      return {
        transactionHash
      };
    },
    async signMessage({ message }) {
      if (!account.address) {
        throw new Error("Provider not setup");
      }
      const messageToSign = (() => {
        if (typeof message === "string") {
          return stringToHex(message);
        }
        if (message.raw instanceof Uint8Array) {
          return uint8ArrayToHex(message.raw);
        }
        return message.raw;
      })();
      const res = await provider.request({
        method: "personal_sign",
        params: [messageToSign, account.address]
      });
      if (!isHex(res)) {
        throw new Error("Invalid signature returned");
      }
      return res;
    },
    async signTypedData(_typedData) {
      if (!account.address) {
        throw new Error("Provider not setup");
      }
      const typedData = parseTypedData(_typedData);
      const { domain, message, primaryType } = typedData;
      const types = {
        EIP712Domain: getTypesForEIP712Domain({ domain }),
        ...typedData.types
      };
      validateTypedData({ domain, message, primaryType, types });
      const stringifiedData = serializeTypedData({
        domain: domain ?? {},
        message,
        primaryType,
        types
      });
      const res = await provider.request({
        method: "eth_signTypedData_v4",
        params: [account.address, stringifiedData]
      });
      if (!isHex(res)) {
        throw new Error("Invalid signed payload returned");
      }
      return res;
    },
    onTransactionRequested: async () => {
      await showCoinbasePopup(provider);
    }
  };
  return account;
}
function onConnect(address, chain, provider, emitter, client) {
  const account = createAccount({ provider, address, client });
  async function disconnect() {
    provider.removeListener("accountsChanged", onAccountsChanged);
    provider.removeListener("chainChanged", onChainChanged);
    provider.removeListener("disconnect", onDisconnect);
    await provider.disconnect();
  }
  async function onDisconnect() {
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
  }
  provider.on("accountsChanged", onAccountsChanged);
  provider.on("chainChanged", onChainChanged);
  provider.on("disconnect", onDisconnect);
  return [
    account,
    chain,
    onDisconnect,
    (newChain) => switchChainCoinbaseWalletSDK(provider, newChain)
  ];
}
async function connectCoinbaseWalletSDK(options, emitter, provider) {
  const accounts = await provider.request({
    method: "eth_requestAccounts"
  });
  if (!accounts[0]) {
    throw new Error("No accounts found");
  }
  const address = getAddress(accounts[0]);
  const connectedChainId = await provider.request({
    method: "eth_chainId"
  });
  const chainId = normalizeChainId(connectedChainId);
  let chain = options.chain && options.chain.id === chainId ? options.chain : getCachedChain(chainId);
  if (connectedChainId && (options == null ? void 0 : options.chain) && connectedChainId !== (options == null ? void 0 : options.chain.id)) {
    await switchChainCoinbaseWalletSDK(provider, options.chain);
    chain = options.chain;
  }
  return onConnect(address, chain, provider, emitter, options.client);
}
async function autoConnectCoinbaseWalletSDK(options, emitter, provider) {
  const addresses = await provider.request({
    method: "eth_accounts"
  });
  const address = addresses[0];
  if (!address) {
    throw new Error("No accounts found");
  }
  const connectedChainId = await provider.request({
    method: "eth_chainId"
  });
  const chainId = normalizeChainId(connectedChainId);
  const chain = options.chain && options.chain.id === chainId ? options.chain : getCachedChain(chainId);
  return onConnect(address, chain, provider, emitter, options.client);
}
async function switchChainCoinbaseWalletSDK(provider, chain) {
  var _a;
  const chainIdHex = numberToHex(chain.id);
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }]
    });
  } catch (error) {
    const apiChain = await getChainMetadata(chain);
    if ((error == null ? void 0 : error.code) === 4902) {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: chainIdHex,
            chainName: apiChain.name,
            nativeCurrency: apiChain.nativeCurrency,
            rpcUrls: getValidPublicRPCUrl(apiChain),
            // no client id on purpose here
            blockExplorerUrls: ((_a = apiChain.explorers) == null ? void 0 : _a.map((x) => x.url)) || []
          }
        ]
      });
    }
  }
}

export {
  getCoinbaseWebProvider,
  isCoinbaseSDKWallet,
  coinbaseSDKWalletGetCapabilities,
  coinbaseSDKWalletSendCalls,
  coinbaseSDKWalletShowCallsStatus,
  coinbaseSDKWalletGetCallsStatus,
  connectCoinbaseWalletSDK,
  autoConnectCoinbaseWalletSDK
};
//# sourceMappingURL=chunk-R76ND7QY.js.map
