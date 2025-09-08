import {
  eth_sendRawTransaction
} from "./chunk-MWAIX6LF.js";
import {
  toSerializableTransaction
} from "./chunk-JZC47WAY.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import {
  encode
} from "./chunk-7QDK5KLB.js";
import {
  concatHex as concatHex2
} from "./chunk-4BCIASJM.js";
import {
  defineBlock,
  defineChain,
  defineTransaction,
  defineTransactionReceipt,
  formatLog,
  serializeTransaction,
  sha256,
  toRlp
} from "./chunk-LO5SQBMX.js";
import {
  getAddress
} from "./chunk-EIVAOYE5.js";
import {
  BaseError,
  InvalidAddressError,
  InvalidChainIdError,
  concatHex,
  defineTransactionRequest,
  hexToBigInt,
  hexToBytes,
  hexToNumber,
  isAddress,
  maxUint16,
  pad,
  toBytes,
  toHex as toHex2
} from "./chunk-GINVHONX.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import {
  toHex,
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/utils/bigint.js
function toBigInt(value) {
  if (["string", "number"].includes(typeof value) && !Number.isInteger(Number(value))) {
    throw new Error(`Expected value to be an integer to convert to a bigint, got ${value} of type ${typeof value}`);
  }
  if (value instanceof Uint8Array) {
    return BigInt(uint8ArrayToHex(value));
  }
  return BigInt(value);
}
var replaceBigInts = (obj, replacer) => {
  if (typeof obj === "bigint")
    return replacer(obj);
  if (Array.isArray(obj))
    return obj.map((x) => replaceBigInts(x, replacer));
  if (obj && typeof obj === "object")
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, replaceBigInts(v, replacer)]));
  return obj;
};

// node_modules/viem/_esm/zksync/constants/number.js
var gasPerPubdataDefault = 50000n;
var maxBytecodeSize = maxUint16 * 32n;

// node_modules/viem/_esm/zksync/errors/transaction.js
var InvalidEip712TransactionError = class extends BaseError {
  constructor() {
    super([
      "Transaction is not an EIP712 transaction.",
      "",
      "Transaction must:",
      '  - include `type: "eip712"`',
      "  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"
    ].join("\n"), { name: "InvalidEip712TransactionError" });
  }
};

// node_modules/viem/_esm/zksync/utils/isEip712Transaction.js
function isEIP712Transaction(transaction) {
  if (transaction.type === "eip712")
    return true;
  if ("customSignature" in transaction && transaction.customSignature || "paymaster" in transaction && transaction.paymaster || "paymasterInput" in transaction && transaction.paymasterInput || "gasPerPubdata" in transaction && typeof transaction.gasPerPubdata === "bigint" || "factoryDeps" in transaction && transaction.factoryDeps)
    return true;
  return false;
}

// node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js
function assertEip712Transaction(transaction) {
  const { chainId, to, from, paymaster, paymasterInput } = transaction;
  if (!isEIP712Transaction(transaction))
    throw new InvalidEip712TransactionError();
  if (!chainId || chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (paymaster && !isAddress(paymaster))
    throw new InvalidAddressError({ address: paymaster });
  if (paymaster && !paymasterInput) {
    throw new BaseError("`paymasterInput` must be provided when `paymaster` is defined");
  }
  if (!paymaster && paymasterInput) {
    throw new BaseError("`paymaster` must be provided when `paymasterInput` is defined");
  }
}

// node_modules/viem/_esm/zksync/serializers.js
function serializeTransaction2(transaction, signature) {
  if (isEIP712Transaction(transaction))
    return serializeTransactionEIP712(transaction);
  return serializeTransaction(transaction, signature);
}
var serializers = {
  transaction: serializeTransaction2
};
function serializeTransactionEIP712(transaction) {
  const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  assertEip712Transaction(transaction);
  const serializedTransaction = [
    nonce ? toHex2(nonce) : "0x",
    maxPriorityFeePerGas ? toHex2(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex2(maxFeePerGas) : "0x",
    gas ? toHex2(gas) : "0x",
    to ?? "0x",
    value ? toHex2(value) : "0x",
    data ?? "0x0",
    toHex2(chainId),
    toHex2(""),
    toHex2(""),
    toHex2(chainId),
    from ?? "0x",
    gasPerPubdata ? toHex2(gasPerPubdata) : toHex2(gasPerPubdataDefault),
    factoryDeps ?? [],
    customSignature ?? "0x",
    // EIP712 signature
    paymaster && paymasterInput ? [paymaster, paymasterInput] : []
  ];
  return concatHex([
    "0x71",
    toRlp(serializedTransaction)
  ]);
}

// node_modules/viem/_esm/zksync/errors/bytecode.js
var BytecodeLengthExceedsMaxSizeError = class extends BaseError {
  constructor({ givenLength, maxBytecodeSize: maxBytecodeSize2 }) {
    super(`Bytecode cannot be longer than ${maxBytecodeSize2} bytes. Given length: ${givenLength}`, { name: "BytecodeLengthExceedsMaxSizeError" });
  }
};
var BytecodeLengthInWordsMustBeOddError = class extends BaseError {
  constructor({ givenLengthInWords }) {
    super(`Bytecode length in 32-byte words must be odd. Given length in words: ${givenLengthInWords}`, { name: "BytecodeLengthInWordsMustBeOddError" });
  }
};
var BytecodeLengthMustBeDivisibleBy32Error = class extends BaseError {
  constructor({ givenLength }) {
    super(`The bytecode length in bytes must be divisible by 32. Given length: ${givenLength}`, { name: "BytecodeLengthMustBeDivisibleBy32Error" });
  }
};

// node_modules/viem/_esm/zksync/utils/hashBytecode.js
function hashBytecode(bytecode) {
  const bytecodeBytes = toBytes(bytecode);
  if (bytecodeBytes.length % 32 !== 0)
    throw new BytecodeLengthMustBeDivisibleBy32Error({
      givenLength: bytecodeBytes.length
    });
  if (bytecodeBytes.length > maxBytecodeSize)
    throw new BytecodeLengthExceedsMaxSizeError({
      givenLength: bytecodeBytes.length,
      maxBytecodeSize
    });
  const hashStr = sha256(bytecodeBytes);
  const hash = toBytes(hashStr);
  const bytecodeLengthInWords = bytecodeBytes.length / 32;
  if (bytecodeLengthInWords % 2 === 0) {
    throw new BytecodeLengthInWordsMustBeOddError({
      givenLengthInWords: bytecodeLengthInWords
    });
  }
  const bytecodeLength = toBytes(bytecodeLengthInWords);
  const bytecodeLengthPadded = pad(bytecodeLength, { size: 2 });
  const codeHashVersion = new Uint8Array([1, 0]);
  hash.set(codeHashVersion, 0);
  hash.set(bytecodeLengthPadded, 2);
  return hash;
}

// node_modules/viem/_esm/zksync/formatters.js
var formatters = {
  block: defineBlock({
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        var _a2;
        if (typeof transaction === "string")
          return transaction;
        const formatted = (_a2 = formatters.transaction) == null ? void 0 : _a2.format(transaction);
        if (formatted.typeHex === "0x71")
          formatted.type = "eip712";
        else if (formatted.typeHex === "0xff")
          formatted.type = "priority";
        return formatted;
      });
      return {
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTimestamp: args.l1BatchTimestamp ? hexToBigInt(args.l1BatchTimestamp) : null,
        transactions
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x71")
        transaction.type = "eip712";
      else if (args.type === "0xff")
        transaction.type = "priority";
      return {
        ...transaction,
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTxIndex: args.l1BatchTxIndex ? hexToBigInt(args.l1BatchTxIndex) : null
      };
    }
  }),
  transactionReceipt: defineTransactionReceipt({
    format(args) {
      return {
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTxIndex: args.l1BatchTxIndex ? hexToBigInt(args.l1BatchTxIndex) : null,
        logs: args.logs.map((log) => {
          return {
            ...formatLog(log),
            l1BatchNumber: log.l1BatchNumber ? hexToBigInt(log.l1BatchNumber) : null,
            transactionLogIndex: hexToNumber(log.transactionLogIndex),
            logType: log.logType
          };
        }),
        l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log) => {
          return {
            blockNumber: hexToBigInt(l2ToL1Log.blockHash),
            blockHash: l2ToL1Log.blockHash,
            l1BatchNumber: hexToBigInt(l2ToL1Log.l1BatchNumber),
            transactionIndex: hexToBigInt(l2ToL1Log.transactionIndex),
            shardId: hexToBigInt(l2ToL1Log.shardId),
            isService: l2ToL1Log.isService,
            sender: l2ToL1Log.sender,
            key: l2ToL1Log.key,
            value: l2ToL1Log.value,
            transactionHash: l2ToL1Log.transactionHash,
            logIndex: hexToBigInt(l2ToL1Log.logIndex)
          };
        })
      };
    }
  }),
  transactionRequest: defineTransactionRequest({
    exclude: [
      "customSignature",
      "factoryDeps",
      "gasPerPubdata",
      "paymaster",
      "paymasterInput"
    ],
    format(args) {
      if (args.gasPerPubdata || args.paymaster && args.paymasterInput || args.factoryDeps || args.customSignature)
        return {
          eip712Meta: {
            ...args.gasPerPubdata ? { gasPerPubdata: toHex2(args.gasPerPubdata) } : { gasPerPubdata: toHex2(gasPerPubdataDefault) },
            ...args.paymaster && args.paymasterInput ? {
              paymasterParams: {
                paymaster: args.paymaster,
                paymasterInput: Array.from(hexToBytes(args.paymasterInput))
              }
            } : {},
            ...args.factoryDeps ? {
              factoryDeps: args.factoryDeps.map((dep) => Array.from(hexToBytes(dep)))
            } : {},
            ...args.customSignature ? {
              customSignature: Array.from(hexToBytes(args.customSignature))
            } : {}
          },
          type: "0x71"
        };
      return {};
    }
  })
};

// node_modules/viem/_esm/zksync/utils/getEip712Domain.js
var getEip712Domain2 = (transaction) => {
  assertEip712Transaction(transaction);
  const message = transactionToMessage(transaction);
  return {
    domain: {
      name: "zkSync",
      version: "2",
      chainId: transaction.chainId
    },
    types: {
      Transaction: [
        { name: "txType", type: "uint256" },
        { name: "from", type: "uint256" },
        { name: "to", type: "uint256" },
        { name: "gasLimit", type: "uint256" },
        { name: "gasPerPubdataByteLimit", type: "uint256" },
        { name: "maxFeePerGas", type: "uint256" },
        { name: "maxPriorityFeePerGas", type: "uint256" },
        { name: "paymaster", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "value", type: "uint256" },
        { name: "data", type: "bytes" },
        { name: "factoryDeps", type: "bytes32[]" },
        { name: "paymasterInput", type: "bytes" }
      ]
    },
    primaryType: "Transaction",
    message
  };
};
function transactionToMessage(transaction) {
  const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  return {
    txType: 113n,
    from: BigInt(from),
    to: to ? BigInt(to) : 0n,
    gasLimit: gas ?? 0n,
    gasPerPubdataByteLimit: gasPerPubdata ?? gasPerPubdataDefault,
    maxFeePerGas: maxFeePerGas ?? 0n,
    maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
    paymaster: paymaster ? BigInt(paymaster) : 0n,
    nonce: nonce ? BigInt(nonce) : 0n,
    value: value ?? 0n,
    data: data ? data : "0x0",
    factoryDeps: (factoryDeps == null ? void 0 : factoryDeps.map((dep) => toHex2(hashBytecode(dep)))) ?? [],
    paymasterInput: paymasterInput ? paymasterInput : "0x"
  };
}

// node_modules/viem/_esm/zksync/chainConfig.js
var chainConfig = {
  formatters,
  serializers,
  custom: {
    getEip712Domain: getEip712Domain2
  }
};

// node_modules/viem/_esm/chains/definitions/zksync.js
var zksync = defineChain({
  ...chainConfig,
  id: 324,
  name: "ZKsync Era",
  network: "zksync-era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://era.zksync.network/",
      apiUrl: "https://api-era.zksync.network/api"
    },
    native: {
      name: "ZKsync Explorer",
      url: "https://explorer.zksync.io/",
      apiUrl: "https://block-explorer-api.mainnet.zksync.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    },
    universalSignatureVerifier: {
      address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
      blockCreated: 45659388
    }
  }
});

// node_modules/viem/_esm/chains/definitions/zksyncInMemoryNode.js
var zksyncInMemoryNode = defineChain({
  ...chainConfig,
  id: 260,
  name: "ZKsync InMemory Node",
  network: "zksync-in-memory-node",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:8011"]
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zksyncLocalNode.js
var zksyncLocalNode = defineChain({
  ...chainConfig,
  id: 270,
  name: "ZKsync CLI Local Node",
  network: "zksync-cli-local-node",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:3050"]
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zksyncSepoliaTestnet.js
var zksyncSepoliaTestnet = defineChain({
  ...chainConfig,
  id: 300,
  name: "ZKsync Sepolia Testnet",
  network: "zksync-sepolia-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.era.zksync.dev"],
      webSocket: ["wss://sepolia.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia-era.zksync.network/",
      apiUrl: "https://api-sepolia-era.zksync.network/api"
    },
    native: {
      name: "ZKsync Explorer",
      url: "https://sepolia.explorer.zksync.io/",
      blockExplorerApi: "https://block-explorer-api.sepolia.zksync.dev/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    },
    universalSignatureVerifier: {
      address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
      blockCreated: 3855712
    }
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/transaction/actions/zksync/getEip721Domain.js
var gasPerPubdataDefault2 = 50000n;
var getEip712Domain3 = (transaction) => {
  const message = transactionToMessage2(transaction);
  return {
    domain: {
      name: "zkSync",
      version: "2",
      chainId: transaction.chainId
    },
    types: {
      Transaction: [
        { name: "txType", type: "uint256" },
        { name: "from", type: "uint256" },
        { name: "to", type: "uint256" },
        { name: "gasLimit", type: "uint256" },
        { name: "gasPerPubdataByteLimit", type: "uint256" },
        { name: "maxFeePerGas", type: "uint256" },
        { name: "maxPriorityFeePerGas", type: "uint256" },
        { name: "paymaster", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "value", type: "uint256" },
        { name: "data", type: "bytes" },
        { name: "factoryDeps", type: "bytes32[]" },
        { name: "paymasterInput", type: "bytes" }
      ]
    },
    primaryType: "Transaction",
    message
  };
};
function transactionToMessage2(transaction) {
  const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, paymaster, paymasterInput, gasPerPubdata, data, factoryDeps } = transaction;
  return {
    txType: 113n,
    from: BigInt(from),
    to: to ? BigInt(to) : 0n,
    gasLimit: gas ?? 0n,
    gasPerPubdataByteLimit: gasPerPubdata ?? gasPerPubdataDefault2,
    maxFeePerGas: maxFeePerGas ?? 0n,
    maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
    paymaster: paymaster ? BigInt(paymaster) : 0n,
    nonce: nonce ? BigInt(nonce) : 0n,
    value: value ?? 0n,
    data: data ? data : "0x0",
    factoryDeps: (factoryDeps == null ? void 0 : factoryDeps.map((dep) => toHex(hashBytecode(dep)))) ?? [],
    paymasterInput: paymasterInput ? paymasterInput : "0x"
  };
}

// node_modules/thirdweb/dist/esm/transaction/actions/zksync/send-eip712-transaction.js
async function sendEip712Transaction2(options) {
  const { account, transaction } = options;
  const eip712Transaction = await populateEip712Transaction(options);
  const hash = await signEip712Transaction2({
    account,
    eip712Transaction,
    chainId: transaction.chain.id
  });
  const rpc = getRpcClient(transaction);
  const result = await eth_sendRawTransaction(rpc, hash);
  return {
    transactionHash: result,
    chain: transaction.chain,
    client: transaction.client
  };
}
async function signEip712Transaction2(options) {
  const { account, eip712Transaction, chainId } = options;
  const eip712Domain = getEip712Domain3(eip712Transaction);
  const customSignature = await account.signTypedData({
    // biome-ignore lint/suspicious/noExplicitAny: TODO type properly
    ...eip712Domain
  });
  return serializeTransactionEIP7122({
    ...eip712Transaction,
    chainId,
    customSignature
  });
}
async function populateEip712Transaction(options) {
  const { account, transaction } = options;
  const { gas, maxFeePerGas, maxPriorityFeePerGas, gasPerPubdata } = await getZkGasFees({ transaction, from: getAddress(account.address) });
  const serializableTransaction = await toSerializableTransaction({
    transaction: {
      ...transaction,
      gas,
      maxFeePerGas,
      maxPriorityFeePerGas
    },
    from: account.address
  });
  return {
    ...serializableTransaction,
    ...transaction.eip712,
    gasPerPubdata,
    from: account.address
  };
}
function serializeTransactionEIP7122(transaction) {
  const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  const serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x0",
    toHex(chainId),
    toHex(""),
    toHex(""),
    toHex(chainId),
    from ?? "0x",
    gasPerPubdata ? toHex(gasPerPubdata) : toHex(gasPerPubdataDefault2),
    factoryDeps ?? [],
    customSignature ?? "0x",
    // EIP712 signature
    paymaster && paymasterInput ? [paymaster, paymasterInput] : []
  ];
  return concatHex2(["0x71", toRlp(serializedTransaction)]);
}
async function getZkGasFees(args) {
  const { transaction, from } = args;
  let [gas, maxFeePerGas, maxPriorityFeePerGas, eip712] = await Promise.all([
    resolvePromisedValue(transaction.gas),
    resolvePromisedValue(transaction.maxFeePerGas),
    resolvePromisedValue(transaction.maxPriorityFeePerGas),
    resolvePromisedValue(transaction.eip712)
  ]);
  let gasPerPubdata = eip712 == null ? void 0 : eip712.gasPerPubdata;
  if (!gas || !maxFeePerGas || !maxPriorityFeePerGas) {
    const rpc = getRpcClient(transaction);
    const params = await formatTransaction({ transaction, from });
    const result = await rpc({
      // biome-ignore lint/suspicious/noExplicitAny: TODO add to RPC method types
      method: "zks_estimateFee",
      // biome-ignore lint/suspicious/noExplicitAny: TODO add to RPC method types
      params: [replaceBigInts(params, toHex)]
    });
    gas = toBigInt(result.gas_limit) * 2n;
    const baseFee = toBigInt(result.max_fee_per_gas);
    maxFeePerGas = baseFee * 2n;
    maxPriorityFeePerGas = toBigInt(result.max_priority_fee_per_gas) || 1n;
    gasPerPubdata = toBigInt(result.gas_per_pubdata_limit) * 2n;
    if (gasPerPubdata < 50000n) {
      gasPerPubdata = 50000n;
    }
  }
  return {
    gas,
    maxFeePerGas,
    maxPriorityFeePerGas,
    gasPerPubdata
  };
}
async function formatTransaction(args) {
  var _a;
  const { transaction, from } = args;
  const [data, to, value, eip712] = await Promise.all([
    encode(transaction),
    resolvePromisedValue(transaction.to),
    resolvePromisedValue(transaction.value),
    resolvePromisedValue(transaction.eip712)
  ]);
  const gasPerPubdata = eip712 == null ? void 0 : eip712.gasPerPubdata;
  return {
    from,
    to,
    data,
    value,
    gasPerPubdata,
    eip712Meta: {
      ...eip712,
      gasPerPubdata: gasPerPubdata || 50000n,
      factoryDeps: (_a = eip712 == null ? void 0 : eip712.factoryDeps) == null ? void 0 : _a.map((dep) => Array.from(hexToBytes(dep)))
    },
    type: "0x71"
  };
}

export {
  sendEip712Transaction2 as sendEip712Transaction,
  signEip712Transaction2 as signEip712Transaction,
  populateEip712Transaction,
  getZkGasFees
};
//# sourceMappingURL=chunk-5EFACFVF.js.map
