import {
  withCache
} from "./chunk-GOA7IGSB.js";
import {
  DEFAULT_RPC_URL,
  getThirdwebDomains
} from "./chunk-QHKZ43P6.js";
import {
  isThirdwebUrl
} from "./chunk-3GSJ2FQJ.js";

// node_modules/thirdweb/dist/esm/chains/utils.js
var CUSTOM_CHAIN_MAP = /* @__PURE__ */ new Map();
function defineChain(options) {
  const RPC_URL = getThirdwebDomains().rpc;
  if (typeof options === "number") {
    return {
      id: options,
      rpc: `https://${options}.${RPC_URL}`
    };
  }
  if (isViemChain(options)) {
    return convertViemChain(options);
  }
  if (isLegacyChain(options)) {
    return convertLegacyChain(options);
  }
  let rpc = options.rpc;
  if (!rpc) {
    rpc = `https://${options.id}.${RPC_URL}`;
  }
  const chain = { ...options, rpc };
  CUSTOM_CHAIN_MAP.set(options.id, chain);
  return chain;
}
function cacheChains(chains) {
  for (const chain of chains) {
    CUSTOM_CHAIN_MAP.set(chain.id, chain);
  }
}
function getCachedChain(id) {
  if (CUSTOM_CHAIN_MAP.has(id)) {
    return CUSTOM_CHAIN_MAP.get(id);
  }
  const RPC_URL = getThirdwebDomains().rpc;
  const chain = {
    id,
    rpc: `https://${id}.${RPC_URL}`
  };
  return chain;
}
function getCachedChainIfExists(id) {
  return CUSTOM_CHAIN_MAP.get(id);
}
function isLegacyChain(chain) {
  return "rpc" in chain && Array.isArray(chain.rpc) && "slug" in chain;
}
function convertLegacyChain(legacyChain) {
  var _a;
  const RPC_URL = getThirdwebDomains().rpc;
  return {
    id: legacyChain.chainId,
    name: legacyChain.name,
    rpc: legacyChain.rpc[0] ?? `https://${legacyChain.chainId}.${RPC_URL}`,
    blockExplorers: (_a = legacyChain == null ? void 0 : legacyChain.explorers) == null ? void 0 : _a.map((explorer) => ({
      name: explorer.name,
      url: explorer.url,
      apiUrl: explorer.url
    })),
    nativeCurrency: {
      name: legacyChain.nativeCurrency.name,
      symbol: legacyChain.nativeCurrency.symbol,
      decimals: legacyChain.nativeCurrency.decimals
    },
    faucets: legacyChain.faucets ? [...legacyChain.faucets] : void 0,
    icon: legacyChain.icon,
    testnet: legacyChain.testnet ? true : void 0
  };
}
function isViemChain(chain) {
  return "rpcUrls" in chain && !("rpc" in chain);
}
function convertViemChain(viemChain) {
  const RPC_URL = getThirdwebDomains().rpc;
  return {
    id: viemChain.id,
    name: viemChain.name,
    nativeCurrency: {
      name: viemChain.nativeCurrency.name,
      symbol: viemChain.nativeCurrency.symbol,
      decimals: viemChain.nativeCurrency.decimals
    },
    rpc: viemChain.rpcUrls.default.http[0] ?? `https://${viemChain.id}.${RPC_URL}`,
    blockExplorers: (viemChain == null ? void 0 : viemChain.blockExplorers) ? Object.values(viemChain == null ? void 0 : viemChain.blockExplorers).map((explorer) => {
      return {
        name: explorer.name,
        url: explorer.url,
        apiUrl: explorer.apiUrl
      };
    }) : [],
    testnet: viemChain.testnet ? true : void 0
  };
}
function getRpcUrlForChain(options) {
  const baseRpcUrl = getThirdwebDomains().rpc;
  if (typeof options.chain === "number") {
    return `https://${options.chain}.${baseRpcUrl}/${options.client.clientId}`;
  }
  const { rpc } = options.chain;
  if (isThirdwebUrl(rpc)) {
    const rpcUrl = new URL(options.chain.rpc.replace(DEFAULT_RPC_URL, baseRpcUrl));
    rpcUrl.pathname = `/${options.client.clientId}`;
    return rpcUrl.toString();
  }
  return rpc;
}
async function getChainSymbol(chain) {
  var _a;
  if (!((_a = chain.nativeCurrency) == null ? void 0 : _a.symbol)) {
    return getChainMetadata(chain).then((data) => data.nativeCurrency.symbol).catch(() => {
      return "ETH";
    });
  }
  return chain.nativeCurrency.symbol;
}
async function getChainDecimals(chain) {
  var _a;
  if (!((_a = chain.nativeCurrency) == null ? void 0 : _a.decimals)) {
    return getChainMetadata(chain).then((data) => data.nativeCurrency.decimals).catch(() => {
      return 18;
    });
  }
  return chain.nativeCurrency.decimals;
}
async function getChainNativeCurrencyName(chain) {
  var _a;
  if (!((_a = chain.nativeCurrency) == null ? void 0 : _a.name)) {
    return getChainMetadata(chain).then((data) => data.nativeCurrency.name).catch(() => {
      return "ETH";
    });
  }
  return chain.nativeCurrency.name;
}
function getChainMetadata(chain) {
  const chainId = chain.id;
  return withCache(async () => {
    var _a;
    try {
      const res = await fetch(`https://api.thirdweb.com/v1/chains/${chainId}`);
      if (!res.ok) {
        (_a = res.body) == null ? void 0 : _a.cancel();
        throw new Error(`Failed to fetch chain data for chainId ${chainId}`);
      }
      const response = await res.json();
      if (response.error) {
        throw new Error(`Failed to fetch chain data for chainId ${chainId}`);
      }
      if (!response.data) {
        throw new Error(`Failed to fetch chain data for chainId ${chainId}`);
      }
      const data = response.data;
      return createChainMetadata(chain, data);
    } catch {
      return createChainMetadata(chain);
    }
  }, {
    cacheKey: `chain:${chainId}`,
    cacheTime: 5 * 60 * 1e3
    // 5 minutes
  });
}
function convertApiChainToChain(apiChain) {
  var _a;
  return {
    id: apiChain.chainId,
    name: apiChain.name,
    rpc: apiChain.rpc[0] || "",
    testnet: apiChain.testnet === true ? true : void 0,
    nativeCurrency: apiChain.nativeCurrency,
    blockExplorers: (_a = apiChain.explorers) == null ? void 0 : _a.map((explorer) => {
      return {
        name: explorer.name,
        url: explorer.url,
        apiUrl: explorer.url
      };
    }),
    faucets: apiChain.faucets ? [...apiChain.faucets] : void 0,
    icon: apiChain.icon
  };
}
function createChainMetadata(chain, data) {
  var _a;
  const nativeCurrency = chain.nativeCurrency ? {
    ...data == null ? void 0 : data.nativeCurrency,
    ...chain.nativeCurrency
  } : data == null ? void 0 : data.nativeCurrency;
  return {
    ...data,
    name: chain.name || (data == null ? void 0 : data.name) || "",
    chainId: chain.id || (data == null ? void 0 : data.chainId) || -1,
    rpc: chain.rpc ? [chain.rpc] : (data == null ? void 0 : data.rpc) || [""],
    testnet: chain.testnet || (data == null ? void 0 : data.testnet) || false,
    nativeCurrency: {
      name: (nativeCurrency == null ? void 0 : nativeCurrency.name) || "",
      symbol: (nativeCurrency == null ? void 0 : nativeCurrency.symbol) || "",
      decimals: (nativeCurrency == null ? void 0 : nativeCurrency.decimals) || 18
    },
    icon: chain.icon || (data == null ? void 0 : data.icon),
    chain: (data == null ? void 0 : data.chain) || chain.name || "",
    shortName: (data == null ? void 0 : data.shortName) || chain.name || "",
    slug: (data == null ? void 0 : data.slug) || chain.name || "",
    explorers: ((_a = chain.blockExplorers) == null ? void 0 : _a.map((e) => ({
      name: e.name,
      url: e.url,
      standard: "EIP3091"
    }))) || (data == null ? void 0 : data.explorers),
    stackType: (data == null ? void 0 : data.stackType) || ""
  };
}

export {
  CUSTOM_CHAIN_MAP,
  defineChain,
  cacheChains,
  getCachedChain,
  getCachedChainIfExists,
  convertLegacyChain,
  getRpcUrlForChain,
  getChainSymbol,
  getChainDecimals,
  getChainNativeCurrencyName,
  getChainMetadata,
  convertApiChainToChain
};
//# sourceMappingURL=chunk-TFBEDS4S.js.map
