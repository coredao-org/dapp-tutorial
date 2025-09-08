import {
  injectedProvider
} from "./chunk-PWFRCBEK.js";
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
  getCachedChain,
  getChainMetadata
} from "./chunk-TFBEDS4S.js";
import {
  numberToHex,
  stringToHex,
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/wallets/injected/index.js
function getInjectedProvider(walletId) {
  const provider = injectedProvider(walletId);
  if (!provider) {
    throw new Error(`No injected provider found for wallet: "${walletId}"`);
  }
  return provider;
}
async function connectEip1193Wallet({ id, provider, emitter, client, chain }) {
  let addresses;
  const retries = 3;
  let attempts = 0;
  while (!(addresses == null ? void 0 : addresses[0]) && attempts < retries) {
    try {
      addresses = await provider.request({
        method: "eth_requestAccounts"
      });
    } catch (e) {
      console.error(e);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    attempts++;
  }
  const addr = addresses == null ? void 0 : addresses[0];
  if (!addr) {
    throw new Error("Failed to connect to wallet, no accounts available");
  }
  const address = getAddress(addr);
  const chainId = await provider.request({ method: "eth_chainId" }).then(normalizeChainId);
  let connectedChain = chain && chain.id === chainId ? chain : getCachedChain(chainId);
  if (chain && chain.id !== chainId) {
    await switchChain(provider, chain);
    connectedChain = chain;
  }
  return onConnect({
    provider,
    address,
    chain: connectedChain,
    emitter,
    client,
    id
  });
}
async function autoConnectEip1193Wallet({ id, provider, emitter, client, chain }) {
  const addresses = await provider.request({
    method: "eth_accounts"
  });
  const addr = addresses[0];
  if (!addr) {
    throw new Error("Failed to connect to wallet, no accounts available");
  }
  const address = getAddress(addr);
  const chainId = await provider.request({ method: "eth_chainId" }).then(normalizeChainId);
  const connectedChain = chain && chain.id === chainId ? chain : getCachedChain(chainId);
  return onConnect({
    provider,
    address,
    chain: connectedChain,
    emitter,
    client,
    id
  });
}
function createAccount({ provider, address, client, id }) {
  const account = {
    address: getAddress(address),
    async sendTransaction(tx) {
      const gasFees = tx.gasPrice ? {
        gasPrice: tx.gasPrice ? numberToHex(tx.gasPrice) : void 0
      } : {
        maxFeePerGas: tx.maxFeePerGas ? numberToHex(tx.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: tx.maxPriorityFeePerGas ? numberToHex(tx.maxPriorityFeePerGas) : void 0
      };
      const params = [
        {
          ...gasFees,
          nonce: tx.nonce ? numberToHex(tx.nonce) : void 0,
          accessList: tx.accessList,
          value: tx.value ? numberToHex(tx.value) : void 0,
          gas: tx.gas ? numberToHex(tx.gas) : void 0,
          from: this.address,
          to: tx.to ? getAddress(tx.to) : void 0,
          data: tx.data,
          ...tx.eip712
        }
      ];
      const transactionHash = await provider.request({
        method: "eth_sendTransaction",
        // @ts-expect-error - overriding types here
        params
      });
      trackTransaction({
        client,
        chainId: tx.chainId,
        walletAddress: getAddress(address),
        walletType: id,
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
      return await provider.request({
        method: "personal_sign",
        params: [messageToSign, account.address]
      });
    },
    async signTypedData(typedData) {
      if (!provider || !account.address) {
        throw new Error("Provider not setup");
      }
      const parsedTypedData = parseTypedData(typedData);
      const { domain, message, primaryType } = parsedTypedData;
      const types = {
        EIP712Domain: getTypesForEIP712Domain({ domain }),
        ...parsedTypedData.types
      };
      validateTypedData({ domain, message, primaryType, types });
      const stringifiedData = serializeTypedData({
        domain: domain ?? {},
        message,
        primaryType,
        types
      });
      return await provider.request({
        method: "eth_signTypedData_v4",
        params: [account.address, stringifiedData]
      });
    },
    async watchAsset(asset) {
      const result = await provider.request({
        method: "wallet_watchAsset",
        params: asset
      }, { retryCount: 0 });
      return result;
    }
  };
  return account;
}
async function onConnect({ provider, address, chain, emitter, client, id }) {
  const account = createAccount({ provider, address, client, id });
  async function disconnect() {
    provider.removeListener("accountsChanged", onAccountsChanged);
    provider.removeListener("chainChanged", onChainChanged);
    provider.removeListener("disconnect", onDisconnect);
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
        client,
        id
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
  if (provider.on) {
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);
    provider.on("disconnect", onDisconnect);
  }
  return [
    account,
    chain,
    onDisconnect,
    (newChain) => switchChain(provider, newChain)
  ];
}
async function switchChain(provider, chain) {
  var _a, _b, _c;
  const hexChainId = numberToHex(chain.id);
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexChainId }]
    });
  } catch (e) {
    if ((e == null ? void 0 : e.code) === 4902 || ((_b = (_a = e == null ? void 0 : e.data) == null ? void 0 : _a.originalError) == null ? void 0 : _b.code) === 4902) {
      const apiChain = await getChainMetadata(chain);
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: hexChainId,
            chainName: apiChain.name,
            nativeCurrency: apiChain.nativeCurrency,
            rpcUrls: getValidPublicRPCUrl(apiChain),
            // no client id on purpose here
            blockExplorerUrls: (_c = apiChain.explorers) == null ? void 0 : _c.map((x) => x.url)
          }
        ]
      });
    } else {
      throw e;
    }
  }
}

export {
  getInjectedProvider,
  connectEip1193Wallet,
  autoConnectEip1193Wallet
};
//# sourceMappingURL=chunk-FXBAO7K3.js.map
