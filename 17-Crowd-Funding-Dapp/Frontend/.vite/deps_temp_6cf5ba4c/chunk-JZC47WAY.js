import {
  eth_getBlockByNumber
} from "./chunk-CXAZLQ2Z.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import {
  isZkSyncChain
} from "./chunk-7ZCK2FX5.js";
import {
  encode
} from "./chunk-7QDK5KLB.js";
import {
  toUnits
} from "./chunk-UY2SRO54.js";
import {
  download
} from "./chunk-5CO5G7XZ.js";
import {
  getAddress
} from "./chunk-EIVAOYE5.js";
import {
  decodeErrorResult,
  formatAbi,
  formatTransactionRequest,
  parseAbi
} from "./chunk-GINVHONX.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  IS_DEV,
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";
import {
  hexToBigInt,
  isHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_gasPrice.js
async function eth_gasPrice(request) {
  const result = await request({
    method: "eth_gasPrice"
  });
  return hexToBigInt(result);
}

// node_modules/thirdweb/dist/esm/rpc/actions/eth_maxPriorityFeePerGas.js
async function eth_maxPriorityFeePerGas(request) {
  const result = await request({
    method: "eth_maxPriorityFeePerGas"
  });
  return hexToBigInt(result);
}

// node_modules/thirdweb/dist/esm/gas/op-gas-fee-reducer.js
function roundUpGas(value) {
  if (value === 0n || (value & value - 1n) === 0n) {
    return value;
  }
  let highestBit = 1n;
  while (value > 0n) {
    value >>= 1n;
    highestBit <<= 1n;
  }
  return highestBit;
}

// node_modules/thirdweb/dist/esm/contract/actions/resolve-abi.js
var ABI_RESOLUTION_CACHE = /* @__PURE__ */ new WeakMap();
function resolveContractAbi(contract, contractApiBaseUrl = "https://contract.thirdweb.com/abi") {
  if (ABI_RESOLUTION_CACHE.has(contract)) {
    return ABI_RESOLUTION_CACHE.get(contract);
  }
  const prom = (async () => {
    if (contract.abi) {
      return contract.abi;
    }
    try {
      return await resolveAbiFromContractApi(contract, contractApiBaseUrl);
    } catch {
      return await resolveCompositeAbi(contract);
    }
  })();
  ABI_RESOLUTION_CACHE.set(contract, prom);
  return prom;
}
async function resolveAbiFromContractApi(contract, contractApiBaseUrl = "https://contract.thirdweb.com/abi") {
  const response = await getClientFetch(contract.client)(`${contractApiBaseUrl}/${contract.chain.id}/${contract.address}`);
  const json = await response.json();
  if (!json || json.error) {
    throw new Error(`Failed to resolve ABI from contract API. ${json.error || ""}`);
  }
  return json;
}
async function resolveAbiFromBytecode(contract) {
  const [{ resolveImplementation }, { extractIPFSUri }] = await Promise.all([
    import("./resolveImplementation-EUNLHKQW.js"),
    import("./extractIPFS-GFMPIVLN.js")
  ]);
  const { bytecode } = await resolveImplementation(contract);
  if (bytecode === "0x") {
    const { id, name } = contract.chain;
    throw new Error(`Failed to load contract bytecode. Make sure the contract [${contract.address}] exists on the chain [${name || "Unknown Chain"} (chain id: ${id})]`);
  }
  const ipfsUri = extractIPFSUri(bytecode);
  if (!ipfsUri) {
    return [];
  }
  try {
    const res = await download({ uri: ipfsUri, client: contract.client });
    const json = await res.json();
    return json.output.abi;
  } catch {
    return [];
  }
}
var PLUGINS_ABI = {
  inputs: [],
  name: "getAllPlugins",
  outputs: [
    {
      components: [
        {
          internalType: "bytes4",
          name: "functionSelector",
          type: "bytes4"
        },
        {
          internalType: "string",
          name: "functionSignature",
          type: "string"
        },
        {
          internalType: "address",
          name: "pluginAddress",
          type: "address"
        }
      ],
      internalType: "struct IPluginMap.Plugin[]",
      name: "registered",
      type: "tuple[]"
    }
  ],
  stateMutability: "view",
  type: "function"
};
var BASE_ROUTER_ABI = {
  inputs: [],
  name: "getAllExtensions",
  outputs: [
    {
      components: [
        {
          components: [
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string"
            },
            {
              internalType: "address",
              name: "implementation",
              type: "address"
            }
          ],
          internalType: "struct IExtension.ExtensionMetadata",
          name: "metadata",
          type: "tuple"
        },
        {
          components: [
            {
              internalType: "bytes4",
              name: "functionSelector",
              type: "bytes4"
            },
            {
              internalType: "string",
              name: "functionSignature",
              type: "string"
            }
          ],
          internalType: "struct IExtension.ExtensionFunction[]",
          name: "functions",
          type: "tuple[]"
        }
      ],
      internalType: "struct IExtension.Extension[]",
      name: "allExtensions",
      type: "tuple[]"
    }
  ],
  stateMutability: "view",
  type: "function"
};
var DIAMOND_ABI = {
  inputs: [],
  name: "facets",
  outputs: [
    {
      components: [
        {
          internalType: "address",
          name: "facetAddress",
          type: "address"
        },
        {
          internalType: "bytes4[]",
          name: "functionSelectors",
          type: "bytes4[]"
        }
      ],
      type: "tuple[]"
    }
  ],
  stateMutability: "view",
  type: "function"
};
async function resolveCompositeAbi(contract, rootAbi, resolveSubAbi) {
  const [rootAbi_, pluginPatternAddresses, baseRouterAddresses, modularExtensionAddresses, diamondFacetAddresses] = await Promise.all([
    rootAbi ? rootAbi : resolveAbiFromBytecode(contract),
    // check these all at the same time
    resolvePluginPatternAddresses(contract),
    resolveBaseRouterAddresses(contract),
    resolveModularModuleAddresses(contract),
    resolveDiamondFacetAddresses(contract)
  ]);
  const mergedPlugins = [
    .../* @__PURE__ */ new Set([
      ...pluginPatternAddresses,
      ...baseRouterAddresses,
      ...modularExtensionAddresses,
      ...diamondFacetAddresses
    ])
  ];
  if (!mergedPlugins.length) {
    return rootAbi_;
  }
  const pluginAbis = await getAbisForPlugins({
    contract,
    plugins: mergedPlugins,
    resolveSubAbi
  });
  return joinAbis({ rootAbi: rootAbi_, pluginAbis });
}
async function resolvePluginPatternAddresses(contract) {
  try {
    const { readContract } = await import("./read-contract-EXVZZYXE.js");
    const pluginMap = await readContract({
      contract,
      method: PLUGINS_ABI
    });
    if (!pluginMap.length) {
      return [];
    }
    return [...new Set(pluginMap.map((item) => item.pluginAddress))];
  } catch {
  }
  return [];
}
async function resolveBaseRouterAddresses(contract) {
  try {
    const { readContract } = await import("./read-contract-EXVZZYXE.js");
    const pluginMap = await readContract({
      contract,
      method: BASE_ROUTER_ABI
    });
    if (!pluginMap.length) {
      return [];
    }
    return [...new Set(pluginMap.map((item) => item.metadata.implementation))];
  } catch {
  }
  return [];
}
async function resolveModularModuleAddresses(contract) {
  try {
    const { getInstalledModules } = await import("./getInstalledModules-WVGJ43EF.js");
    const modules = await getInstalledModules({ contract });
    if (!modules.length) {
      return [];
    }
    return [...new Set(modules.map((item) => item.implementation))];
  } catch {
  }
  return [];
}
async function resolveDiamondFacetAddresses(contract) {
  try {
    const { readContract } = await import("./read-contract-EXVZZYXE.js");
    const facets = await readContract({ contract, method: DIAMOND_ABI });
    if (!facets.length) {
      return [];
    }
    return facets.map((item) => item.facetAddress);
  } catch {
  }
  return [];
}
async function getAbisForPlugins(options) {
  return Promise.all(options.plugins.map((pluginAddress) => {
    const newContract = {
      ...options.contract,
      address: pluginAddress
    };
    if (options.resolveSubAbi) {
      return options.resolveSubAbi(newContract);
    }
    return resolveAbiFromBytecode(newContract);
  }));
}
function joinAbis(options) {
  let mergedPlugins = options.pluginAbis.flat().filter((item) => item.type !== "constructor");
  if (options.rootAbi) {
    mergedPlugins = [...options.rootAbi, ...mergedPlugins].filter((item) => item.type !== "fallback" && item.type !== "receive").filter(Boolean);
  }
  const humanReadableAbi = [...new Set(formatAbi(mergedPlugins))];
  return parseAbi(humanReadableAbi);
}

// node_modules/thirdweb/dist/esm/transaction/extract-error.js
async function extractError(args) {
  const { error, contract } = args;
  if (typeof error === "object") {
    const errorObj = error;
    if (errorObj.data) {
      if (errorObj.data !== "0x" && isHex(errorObj.data)) {
        let abi = contract == null ? void 0 : contract.abi;
        if (contract && !abi) {
          abi = await resolveContractAbi(contract).catch(() => void 0);
        }
        const parsedError = decodeErrorResult({
          data: errorObj.data,
          abi
        });
        return new TransactionError(`${parsedError.errorName}${parsedError.args ? ` - ${parsedError.args}` : ""}`, contract);
      }
      return new TransactionError(`Execution Reverted: ${stringify(errorObj)}`, contract);
    }
  }
  return error;
}
var TransactionError = class extends Error {
  constructor(reason, contract) {
    var _a, _b;
    let message = reason;
    if (IS_DEV && contract) {
      message = [
        reason,
        "",
        `contract: ${contract.address}`,
        `chainId: ${(_a = contract.chain) == null ? void 0 : _a.id}`
      ].join("\n");
    }
    super(message);
    Object.defineProperty(this, "contractAddress", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "chainId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = "TransactionError";
    this.contractAddress = contract == null ? void 0 : contract.address;
    this.chainId = (_b = contract == null ? void 0 : contract.chain) == null ? void 0 : _b.id;
    this.message = message;
  }
};

// node_modules/thirdweb/dist/esm/transaction/actions/estimate-gas.js
var cache = /* @__PURE__ */ new WeakMap();
async function estimateGas(options) {
  var _a;
  const from = options.from ?? ((_a = options.account) == null ? void 0 : _a.address) ?? void 0;
  const txWithFrom = { ...options.transaction, from };
  if (cache.has(txWithFrom)) {
    return cache.get(txWithFrom);
  }
  const { account } = options;
  const promise = (async () => {
    var _a2, _b;
    const predefinedGas = await resolvePromisedValue(options.transaction.gas);
    if (predefinedGas !== void 0) {
      return predefinedGas;
    }
    if (account == null ? void 0 : account.estimateGas) {
      try {
        let gas = await account.estimateGas(options.transaction);
        if ((_a2 = options.transaction.chain.experimental) == null ? void 0 : _a2.increaseZeroByteCount) {
          gas = roundUpGas(gas);
        }
        return gas;
      } catch (error) {
        throw await extractError({
          error,
          contract: options.transaction.__contract
        });
      }
    }
    const { encode: encode2 } = await import("./encode-4DQKNRWC.js");
    const [encodedData, toAddress, value] = await Promise.all([
      encode2(options.transaction),
      resolvePromisedValue(options.transaction.to),
      resolvePromisedValue(options.transaction.value)
    ]);
    const [{ getRpcClient: getRpcClient2 }, { eth_estimateGas }] = await Promise.all([
      import("./rpc-TW3OP7F4.js"),
      import("./eth_estimateGas-FTRTBPEZ.js")
    ]);
    const rpcRequest = getRpcClient2(options.transaction);
    try {
      let gas = await eth_estimateGas(rpcRequest, formatTransactionRequest({
        to: toAddress,
        data: encodedData,
        from,
        value
      }));
      if ((_b = options.transaction.chain.experimental) == null ? void 0 : _b.increaseZeroByteCount) {
        gas = roundUpGas(gas);
      }
      return gas;
    } catch (error) {
      throw await extractError({
        error,
        contract: options.transaction.__contract
      });
    }
  })();
  cache.set(txWithFrom, promise);
  return promise;
}

// node_modules/thirdweb/dist/esm/gas/get-gas-price.js
async function getGasPrice(options) {
  const { client, chain, percentMultiplier } = options;
  const rpcClient = getRpcClient({ client, chain });
  const gasPrice_ = await eth_gasPrice(rpcClient);
  const extraTip = percentMultiplier ? gasPrice_ / BigInt(100) * BigInt(percentMultiplier) : 0n;
  const txGasPrice = gasPrice_ + extraTip;
  return txGasPrice;
}

// node_modules/thirdweb/dist/esm/gas/fee-data.js
var FORCE_GAS_PRICE_CHAIN_IDS = [
  78600,
  // Vanar testnet
  2040,
  // Vanar mainnet
  248,
  // Oasys Mainnet
  9372,
  // Oasys Testnet
  841,
  // Taraxa Mainnet
  842,
  // Taraxa Testnet
  2016,
  // MainnetZ Mainnet
  9768,
  // MainnetZ Testnet
  2442
  // Polygon zkEVM Cardona Testnet
];
async function getGasOverridesForTransaction(transaction) {
  var _a;
  const [maxFeePerGas, maxPriorityFeePerGas, gasPrice] = await Promise.all([
    resolvePromisedValue(transaction.maxFeePerGas),
    resolvePromisedValue(transaction.maxPriorityFeePerGas),
    resolvePromisedValue(transaction.gasPrice)
  ]);
  if (maxFeePerGas !== void 0 && maxPriorityFeePerGas !== void 0) {
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  if (gasPrice) {
    return { gasPrice };
  }
  const defaultGasOverrides = await getDefaultGasOverrides(transaction.client, transaction.chain);
  if ((_a = transaction.chain.experimental) == null ? void 0 : _a.increaseZeroByteCount) {
    if (defaultGasOverrides.gasPrice) {
      return { gasPrice: roundUpGas(defaultGasOverrides.gasPrice) };
    }
    return {
      maxFeePerGas: maxFeePerGas ?? roundUpGas(defaultGasOverrides.maxFeePerGas ?? 0n),
      maxPriorityFeePerGas: maxPriorityFeePerGas ?? roundUpGas(defaultGasOverrides.maxPriorityFeePerGas ?? 0n)
    };
  }
  if (defaultGasOverrides.gasPrice) {
    return defaultGasOverrides;
  }
  return {
    maxFeePerGas: maxFeePerGas ?? defaultGasOverrides.maxFeePerGas,
    maxPriorityFeePerGas: maxPriorityFeePerGas ?? defaultGasOverrides.maxPriorityFeePerGas
  };
}
async function getDefaultGasOverrides(client, chain) {
  if (!FORCE_GAS_PRICE_CHAIN_IDS.includes(chain.id)) {
    const feeData = await getDynamicFeeData(client, chain);
    if (feeData.maxFeePerGas !== null && feeData.maxPriorityFeePerGas !== null) {
      return {
        maxFeePerGas: feeData.maxFeePerGas,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas
      };
    }
  }
  return {
    gasPrice: await getGasPrice({ client, chain, percentMultiplier: 10 })
  };
}
async function getDynamicFeeData(client, chain, percentMultiplier = 10) {
  let maxFeePerGas = null;
  let maxPriorityFeePerGas_ = null;
  const rpcRequest = getRpcClient({ client, chain });
  const [block, maxPriorityFeePerGas] = await Promise.all([
    eth_getBlockByNumber(rpcRequest, { blockTag: "latest" }),
    eth_maxPriorityFeePerGas(rpcRequest).catch(() => null)
  ]);
  const baseBlockFee = (block == null ? void 0 : block.baseFeePerGas) ?? 0n;
  const chainId = chain.id;
  if (chainId === 220 || chainId === 1220) {
    return { maxFeePerGas: null, maxPriorityFeePerGas: null };
  }
  if (chainId === 80002 || chainId === 137) {
    maxPriorityFeePerGas_ = await getPolygonGasPriorityFee(chainId);
  } else if (maxPriorityFeePerGas !== null) {
    maxPriorityFeePerGas_ = maxPriorityFeePerGas;
  }
  if (maxPriorityFeePerGas_ == null) {
    return { maxFeePerGas: null, maxPriorityFeePerGas: null };
  }
  maxPriorityFeePerGas_ = getPreferredPriorityFee(maxPriorityFeePerGas_, percentMultiplier);
  maxFeePerGas = baseBlockFee * 2n + maxPriorityFeePerGas_;
  if (chainId === 42220 || chainId === 44787 || chainId === 62320) {
    maxPriorityFeePerGas_ = maxFeePerGas;
  }
  return {
    maxFeePerGas,
    maxPriorityFeePerGas: maxPriorityFeePerGas_
  };
}
function getPreferredPriorityFee(defaultPriorityFeePerGas, percentMultiplier = 10) {
  const extraTip = defaultPriorityFeePerGas / BigInt(100) * BigInt(percentMultiplier);
  const totalPriorityFee = defaultPriorityFeePerGas + extraTip;
  return totalPriorityFee;
}
function getGasStationUrl(chainId) {
  switch (chainId) {
    case 137:
      return "https://gasstation.polygon.technology/v2";
    case 80002:
      return "https://gasstation-testnet.polygon.technology/v2";
  }
}
var MIN_POLYGON_GAS_PRICE = 31n;
async function getPolygonGasPriorityFee(chainId) {
  const gasStationUrl = getGasStationUrl(chainId);
  try {
    const data = await (await fetch(gasStationUrl)).json();
    const priorityFee = data.fast.maxPriorityFee;
    if (priorityFee > 0) {
      const fixedFee = Number.parseFloat(priorityFee).toFixed(9);
      return toUnits(fixedFee, 9);
    }
  } catch (e) {
    console.error("failed to fetch gas", e);
  }
  return MIN_POLYGON_GAS_PRICE;
}

// node_modules/thirdweb/dist/esm/transaction/actions/to-serializable-transaction.js
async function toSerializableTransaction(options) {
  const isZkSync = await isZkSyncChain(options.transaction.chain);
  if (isZkSync) {
    const { getZkGasFees } = await import("./send-eip712-transaction-GJNL63UQ.js");
    const { gas: gas2, maxFeePerGas, maxPriorityFeePerGas } = await getZkGasFees({
      transaction: options.transaction,
      from: options.from ? getAddress(options.from) : void 0
    });
    options.transaction = {
      ...options.transaction,
      gas: gas2,
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const rpcRequest = getRpcClient(options.transaction);
  const chainId = options.transaction.chain.id;
  const from = options.from;
  let [data, nonce, gas, feeData, to, accessList, value] = await Promise.all([
    encode(options.transaction),
    (async () => {
      const resolvedNonce = await resolvePromisedValue(options.transaction.nonce);
      if (resolvedNonce !== void 0) {
        return resolvedNonce;
      }
      return from ? await import("./eth_getTransactionCount-ITCGR7E4.js").then(({ eth_getTransactionCount }) => eth_getTransactionCount(rpcRequest, {
        address: from,
        blockTag: "pending"
      })) : void 0;
    })(),
    // takes the same options as the sendTransaction function thankfully!
    estimateGas(options),
    getGasOverridesForTransaction(options.transaction),
    resolvePromisedValue(options.transaction.to),
    resolvePromisedValue(options.transaction.accessList),
    resolvePromisedValue(options.transaction.value)
  ]);
  const extraGas = await resolvePromisedValue(options.transaction.extraGas);
  if (extraGas) {
    gas += extraGas;
  }
  return {
    to,
    chainId,
    data,
    gas,
    nonce,
    accessList,
    value,
    ...feeData
  };
}

export {
  eth_gasPrice,
  eth_maxPriorityFeePerGas,
  resolveContractAbi,
  extractError,
  estimateGas,
  getGasPrice,
  getDefaultGasOverrides,
  toSerializableTransaction
};
//# sourceMappingURL=chunk-JZC47WAY.js.map
