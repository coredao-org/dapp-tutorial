import {
  allowance
} from "./chunk-NKFQ2LZT.js";
import {
  DEBUG,
  DUMMY_SIGNATURE,
  ENTRYPOINT_ADDRESS_v0_6,
  ENTRYPOINT_ADDRESS_v0_7,
  MANAGED_ACCOUNT_GAS_BUFFER,
  getDefaultAccountFactory,
  getDefaultBundlerUrl,
  getEntryPointVersion
} from "./chunk-FNI7M3UI.js";
import {
  isContractDeployed
} from "./chunk-Q3TN3POE.js";
import {
  parseTypedData
} from "./chunk-SWMZXE3E.js";
import {
  populateEip712Transaction,
  signEip712Transaction
} from "./chunk-5EFACFVF.js";
import {
  parseEventLogs,
  prepareEvent
} from "./chunk-DYKFWRMQ.js";
import {
  approve
} from "./chunk-TTOANXGP.js";
import {
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import {
  getDefaultGasOverrides,
  toSerializableTransaction
} from "./chunk-JZC47WAY.js";
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
  concatHex
} from "./chunk-4BCIASJM.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import {
  hashTypedData
} from "./chunk-LO5SQBMX.js";
import {
  getAddress
} from "./chunk-EIVAOYE5.js";
import {
  hexToBytes
} from "./chunk-B7XHB4Z2.js";
import {
  concat,
  decodeErrorResult,
  maxUint96,
  pad,
  toHex as toHex2
} from "./chunk-GINVHONX.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  getCachedChain
} from "./chunk-TFBEDS4S.js";
import {
  getClientFetch,
  isThirdwebUrl
} from "./chunk-3GSJ2FQJ.js";
import {
  hexToBigInt,
  isHex,
  stringToHex,
  toHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/events/UserOperationRevertReason.js
function userOperationRevertReasonEvent(filters = {}) {
  return prepareEvent({
    signature: "event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",
    filters
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint_v07/events/PostOpRevertReason.js
function postOpRevertReasonEvent(filters = {}) {
  return prepareEvent({
    signature: "event PostOpRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",
    filters
  });
}

// node_modules/thirdweb/dist/esm/wallets/smart/types.js
function formatUserOperationReceipt(userOpReceiptRaw) {
  const { receipt: transactionReceipt } = userOpReceiptRaw;
  const receipt = {
    ...transactionReceipt,
    transactionHash: transactionReceipt.transactionHash,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex,
    status: transactionReceipt.status,
    type: transactionReceipt.type
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  const userOpReceipt = {
    ...userOpReceiptRaw,
    receipt,
    userOpHash: userOpReceiptRaw.userOpHash,
    actualGasCost: BigInt(userOpReceiptRaw.actualGasCost),
    actualGasUsed: BigInt(userOpReceiptRaw.actualGasUsed),
    nonce: BigInt(userOpReceiptRaw.nonce)
  };
  return userOpReceipt;
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js
var generateRandomUint192 = () => {
  const rand1 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand2 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand3 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand4 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand5 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand6 = BigInt(Math.floor(Math.random() * 4294967296));
  return rand1 << BigInt(160) | rand2 << BigInt(128) | rand3 << BigInt(96) | rand4 << BigInt(64) | rand5 << BigInt(32) | rand6;
};
function hexlifyUserOp(userOp) {
  return Object.fromEntries(Object.entries(userOp).map(([key, val]) => [
    key,
    // turn any value that's not hex into hex
    val === void 0 || val === null || isHex(val) ? val : toHex(val)
  ]));
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js
async function bundleUserOp(args) {
  return sendBundlerRequest({
    ...args,
    operation: "eth_sendUserOperation",
    params: [
      hexlifyUserOp(args.userOp),
      args.options.entrypointAddress ?? ENTRYPOINT_ADDRESS_v0_6
    ]
  });
}
async function estimateUserOpGas(args) {
  const res = await sendBundlerRequest({
    ...args,
    operation: "eth_estimateUserOperationGas",
    params: [
      hexlifyUserOp(args.userOp),
      args.options.entrypointAddress ?? ENTRYPOINT_ADDRESS_v0_6
    ]
  });
  return {
    preVerificationGas: hexToBigInt(res.preVerificationGas),
    verificationGas: res.verificationGas !== void 0 ? hexToBigInt(res.verificationGas) : void 0,
    verificationGasLimit: hexToBigInt(res.verificationGasLimit),
    callGasLimit: hexToBigInt(res.callGasLimit) + MANAGED_ACCOUNT_GAS_BUFFER,
    paymasterVerificationGasLimit: res.paymasterVerificationGasLimit !== void 0 ? hexToBigInt(res.paymasterVerificationGasLimit) : void 0,
    paymasterPostOpGasLimit: res.paymasterPostOpGasLimit !== void 0 ? hexToBigInt(res.paymasterPostOpGasLimit) : void 0
  };
}
async function getUserOpGasFees(args) {
  const res = await sendBundlerRequest({
    ...args,
    operation: "thirdweb_getUserOperationGasPrice",
    params: []
  });
  return {
    maxPriorityFeePerGas: hexToBigInt(res.maxPriorityFeePerGas),
    maxFeePerGas: hexToBigInt(res.maxFeePerGas)
  };
}
async function getUserOpReceipt(args) {
  var _a, _b;
  const res = await getUserOpReceiptRaw(args);
  if (!res) {
    return void 0;
  }
  if (res.success === false) {
    const logs = parseEventLogs({
      events: [userOperationRevertReasonEvent(), postOpRevertReasonEvent()],
      logs: res.logs
    });
    const revertReason = (_b = (_a = logs[0]) == null ? void 0 : _a.args) == null ? void 0 : _b.revertReason;
    if (!revertReason) {
      throw new Error(`UserOp failed at txHash: ${res.receipt.transactionHash}`);
    }
    const revertMsg = decodeErrorResult({
      data: revertReason
    });
    throw new Error(`UserOp failed with reason: '${revertMsg.args.join(",")}' at txHash: ${res.receipt.transactionHash}`);
  }
  return res.receipt;
}
async function getUserOpReceiptRaw(args) {
  const res = await sendBundlerRequest({
    options: args,
    operation: "eth_getUserOperationReceipt",
    params: [args.userOpHash]
  });
  if (!res) {
    return void 0;
  }
  return formatUserOperationReceipt(res);
}
async function getZkPaymasterData(args) {
  const res = await sendBundlerRequest({
    options: args.options,
    operation: "zk_paymasterData",
    params: [args.transaction]
  });
  return {
    paymaster: res.paymaster,
    paymasterInput: res.paymasterInput
  };
}
async function broadcastZkTransaction(args) {
  const res = await sendBundlerRequest({
    options: args.options,
    operation: "zk_broadcastTransaction",
    params: [
      {
        ...args.transaction,
        signedTransaction: args.signedTransaction
      }
    ]
  });
  return {
    transactionHash: res.transactionHash
  };
}
async function sendBundlerRequest(args) {
  const { options, operation, params } = args;
  if (DEBUG) {
    console.debug(`>>> sending ${operation} with payload:`, params);
  }
  const bundlerUrl = options.bundlerUrl ?? getDefaultBundlerUrl(options.chain);
  const fetchWithHeaders = getClientFetch(options.client);
  const response = await fetchWithHeaders(bundlerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: stringify({
      jsonrpc: "2.0",
      id: 1,
      method: operation,
      params
    })
  });
  const res = await response.json();
  if (!response.ok || res.error) {
    let error = res.error || response.statusText;
    if (typeof error === "object") {
      error = stringify(error);
    }
    const code = res.code || "UNKNOWN";
    throw new Error(`${operation} error: ${error}
Status: ${response.status}
Code: ${code}`);
  }
  if (DEBUG) {
    console.debug(`<<< ${operation} result:`, res);
  }
  return res.result;
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js
async function predictAddress(args) {
  const { factoryContract, predictAddressOverride: predictAddress2, adminAddress, accountSalt, accountAddress } = args;
  if (predictAddress2) {
    return predictAddress2(factoryContract);
  }
  if (accountAddress) {
    return accountAddress;
  }
  if (!adminAddress) {
    throw new Error("Account address is required to predict the smart wallet address.");
  }
  const saltHex = accountSalt && isHex(accountSalt) ? accountSalt : stringToHex(accountSalt ?? "");
  return readContract({
    contract: factoryContract,
    method: "function getAddress(address, bytes) returns (address)",
    params: [adminAddress, saltHex]
  });
}
function prepareCreateAccount(args) {
  const { adminAddress, factoryContract, createAccountOverride: createAccount, accountSalt } = args;
  if (createAccount) {
    return createAccount(factoryContract);
  }
  const saltHex = accountSalt && isHex(accountSalt) ? accountSalt : stringToHex(accountSalt ?? "");
  return prepareContractCall({
    contract: factoryContract,
    method: "function createAccount(address, bytes) returns (address)",
    params: [adminAddress, saltHex]
  });
}
function prepareExecute(args) {
  const { accountContract, transaction, executeOverride: execute } = args;
  if (execute) {
    return execute(accountContract, transaction);
  }
  return prepareContractCall({
    contract: accountContract,
    method: "function execute(address, uint256, bytes)",
    params: [
      transaction.to || "",
      transaction.value || 0n,
      transaction.data || "0x"
    ],
    // if gas is specified for the inner tx, use that and add 21k for the execute call on the account contract
    // this avoids another estimateGas call when bundling the userOp
    // and also allows for passing custom gas limits for the inner tx
    gas: transaction.gas ? transaction.gas + 21000n : void 0
  });
}
function prepareBatchExecute(args) {
  const { accountContract, transactions, executeBatchOverride: executeBatch } = args;
  if (executeBatch) {
    return executeBatch(accountContract, transactions);
  }
  return prepareContractCall({
    contract: accountContract,
    method: "function executeBatch(address[], uint256[], bytes[])",
    params: [
      transactions.map((tx) => tx.to || ""),
      transactions.map((tx) => tx.value || 0n),
      transactions.map((tx) => tx.data || "0x")
    ]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getNonce.js
var FN_SELECTOR = "0x35567e1a";
var FN_INPUTS = [
  {
    type: "address",
    name: "sender"
  },
  {
    type: "uint192",
    name: "key"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256",
    name: "nonce"
  }
];
async function getNonce(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.sender, options.key]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getUserOpHash.js
var FN_SELECTOR2 = "0xa6193531";
var FN_INPUTS2 = [
  {
    type: "tuple",
    name: "userOp",
    components: [
      {
        type: "address",
        name: "sender"
      },
      {
        type: "uint256",
        name: "nonce"
      },
      {
        type: "bytes",
        name: "initCode"
      },
      {
        type: "bytes",
        name: "callData"
      },
      {
        type: "uint256",
        name: "callGasLimit"
      },
      {
        type: "uint256",
        name: "verificationGasLimit"
      },
      {
        type: "uint256",
        name: "preVerificationGas"
      },
      {
        type: "uint256",
        name: "maxFeePerGas"
      },
      {
        type: "uint256",
        name: "maxPriorityFeePerGas"
      },
      {
        type: "bytes",
        name: "paymasterAndData"
      },
      {
        type: "bytes",
        name: "signature"
      }
    ]
  }
];
var FN_OUTPUTS2 = [
  {
    type: "bytes32"
  }
];
async function getUserOpHash(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    params: [options.userOp]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint_v07/read/getUserOpHash.js
var FN_SELECTOR3 = "0x22cdde4c";
var FN_INPUTS3 = [
  {
    type: "tuple",
    name: "userOp",
    components: [
      {
        type: "address",
        name: "sender"
      },
      {
        type: "uint256",
        name: "nonce"
      },
      {
        type: "bytes",
        name: "initCode"
      },
      {
        type: "bytes",
        name: "callData"
      },
      {
        type: "bytes32",
        name: "accountGasLimits"
      },
      {
        type: "uint256",
        name: "preVerificationGas"
      },
      {
        type: "bytes32",
        name: "gasFees"
      },
      {
        type: "bytes",
        name: "paymasterAndData"
      },
      {
        type: "bytes",
        name: "signature"
      }
    ]
  }
];
var FN_OUTPUTS3 = [
  {
    type: "bytes32"
  }
];
async function getUserOpHash2(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR3, FN_INPUTS3, FN_OUTPUTS3],
    params: [options.userOp]
  });
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/packUserOp.js
function getInitCode(unpackedUserOperation) {
  return unpackedUserOperation.factory ? concat([
    unpackedUserOperation.factory,
    unpackedUserOperation.factoryData || "0x"
  ]) : "0x";
}
function getAccountGasLimits(unpackedUserOperation) {
  return concat([
    pad(toHex2(unpackedUserOperation.verificationGasLimit), {
      size: 16
    }),
    pad(toHex2(unpackedUserOperation.callGasLimit), { size: 16 })
  ]);
}
function getGasLimits(unpackedUserOperation) {
  return concat([
    pad(toHex2(unpackedUserOperation.maxPriorityFeePerGas), {
      size: 16
    }),
    pad(toHex2(unpackedUserOperation.maxFeePerGas), { size: 16 })
  ]);
}
function getPaymasterAndData(unpackedUserOperation) {
  return unpackedUserOperation.paymaster ? concat([
    unpackedUserOperation.paymaster,
    pad(toHex2(unpackedUserOperation.paymasterVerificationGasLimit || BigInt(0)), {
      size: 16
    }),
    pad(toHex2(unpackedUserOperation.paymasterPostOpGasLimit || BigInt(0)), {
      size: 16
    }),
    unpackedUserOperation.paymasterData || "0x"
  ]) : "0x";
}
var getPackedUserOperation = (userOperation) => {
  return {
    sender: userOperation.sender,
    nonce: userOperation.nonce,
    initCode: getInitCode(userOperation),
    callData: userOperation.callData,
    accountGasLimits: getAccountGasLimits(userOperation),
    preVerificationGas: userOperation.preVerificationGas,
    gasFees: getGasLimits(userOperation),
    paymasterAndData: getPaymasterAndData(userOperation),
    signature: userOperation.signature
  };
};

// node_modules/thirdweb/dist/esm/wallets/smart/lib/paymaster.js
async function getPaymasterAndData2(args) {
  var _a;
  const { userOp, paymasterOverride, client, chain, entrypointAddress } = args;
  if (paymasterOverride) {
    return paymasterOverride(userOp);
  }
  const headers = {
    "Content-Type": "application/json"
  };
  const entrypoint = entrypointAddress ?? ENTRYPOINT_ADDRESS_v0_6;
  const paymasterUrl = getDefaultBundlerUrl(chain);
  const fetchWithHeaders = getClientFetch(client);
  const response = await fetchWithHeaders(paymasterUrl, {
    method: "POST",
    headers,
    body: stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "pm_sponsorUserOperation",
      params: [hexlifyUserOp(userOp), entrypoint]
    })
  });
  const res = await response.json();
  if (!response.ok) {
    const error2 = res.error || response.statusText;
    const code = res.code || "UNKNOWN";
    throw new Error(`Paymaster error: ${error2}
Status: ${response.status}
Code: ${code}`);
  }
  if (DEBUG) {
    console.debug("Paymaster result:", res);
  }
  if (res.result) {
    if (typeof res.result === "string") {
      return {
        paymasterAndData: res.result
      };
    }
    return {
      paymasterAndData: res.result.paymasterAndData,
      verificationGasLimit: res.result.verificationGasLimit ? hexToBigInt(res.result.verificationGasLimit) : void 0,
      preVerificationGas: res.result.preVerificationGas ? hexToBigInt(res.result.preVerificationGas) : void 0,
      callGasLimit: res.result.callGasLimit ? hexToBigInt(res.result.callGasLimit) : void 0,
      paymaster: res.result.paymaster,
      paymasterData: res.result.paymasterData,
      paymasterVerificationGasLimit: res.result.paymasterVerificationGasLimit ? hexToBigInt(res.result.paymasterVerificationGasLimit) : void 0,
      paymasterPostOpGasLimit: res.result.paymasterPostOpGasLimit ? hexToBigInt(res.result.paymasterPostOpGasLimit) : void 0
    };
  }
  const error = ((_a = res.error) == null ? void 0 : _a.message) || res.error || response.statusText || "unknown error";
  throw new Error(`Paymaster error from ${paymasterUrl}: ${error}`);
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/userop.js
var isDeployingSet = /* @__PURE__ */ new Set();
var getKey = (accountContract) => {
  return `${accountContract.chain.id}:${accountContract.address}`;
};
var markAccountDeploying = (accountContract) => {
  isDeployingSet.add(getKey(accountContract));
};
var clearAccountDeploying = (accountContract) => {
  isDeployingSet.delete(getKey(accountContract));
};
var isAccountDeploying = (accountContract) => {
  return isDeployingSet.has(getKey(accountContract));
};
async function waitForUserOpReceipt(args) {
  const timeout = args.timeoutMs || 12e4;
  const interval = args.intervalMs || 1e3;
  const endtime = Date.now() + timeout;
  while (Date.now() < endtime) {
    const userOpReceipt = await getUserOpReceipt(args);
    if (userOpReceipt) {
      return userOpReceipt;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error("Timeout waiting for userOp to be mined");
}
async function createUnsignedUserOp(args) {
  var _a;
  const { transaction: executeTx, accountContract, factoryContract, adminAddress, overrides, sponsorGas, waitForDeployment = true } = args;
  const chain = executeTx.chain;
  const client = executeTx.client;
  const bundlerOptions = {
    client,
    chain,
    bundlerUrl: overrides == null ? void 0 : overrides.bundlerUrl,
    entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress
  };
  const entrypointVersion = getEntryPointVersion(((_a = args.overrides) == null ? void 0 : _a.entrypointAddress) || ENTRYPOINT_ADDRESS_v0_6);
  const [isDeployed, callData, callGasLimit, gasFees, nonce] = await Promise.all([
    isContractDeployed(accountContract),
    encode(executeTx),
    resolvePromisedValue(executeTx.gas),
    getGasFees({
      executeTx,
      bundlerOptions,
      chain,
      client
    }),
    getAccountNonce({
      accountContract,
      chain,
      client,
      entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
      getNonceOverride: overrides == null ? void 0 : overrides.getAccountNonce
    })
  ]);
  const { maxFeePerGas, maxPriorityFeePerGas } = gasFees;
  if (entrypointVersion === "v0.7") {
    return populateUserOp_v0_7({
      bundlerOptions,
      factoryContract,
      accountContract,
      adminAddress,
      sponsorGas,
      overrides,
      isDeployed,
      nonce,
      callData,
      callGasLimit,
      maxFeePerGas,
      maxPriorityFeePerGas,
      waitForDeployment
    });
  }
  return populateUserOp_v0_6({
    bundlerOptions,
    factoryContract,
    accountContract,
    adminAddress,
    sponsorGas,
    overrides,
    isDeployed,
    nonce,
    callData,
    callGasLimit,
    maxFeePerGas,
    maxPriorityFeePerGas,
    waitForDeployment
  });
}
async function getGasFees(args) {
  const { executeTx, bundlerOptions, chain, client } = args;
  let { maxFeePerGas, maxPriorityFeePerGas } = executeTx;
  const bundlerUrl = (bundlerOptions == null ? void 0 : bundlerOptions.bundlerUrl) ?? getDefaultBundlerUrl(chain);
  if (isThirdwebUrl(bundlerUrl)) {
    const bundlerGasPrice = await getUserOpGasFees({
      options: bundlerOptions
    });
    maxFeePerGas = bundlerGasPrice.maxFeePerGas;
    maxPriorityFeePerGas = bundlerGasPrice.maxPriorityFeePerGas;
  } else {
    const [resolvedMaxFeePerGas, resolvedMaxPriorityFeePerGas] = await Promise.all([
      resolvePromisedValue(maxFeePerGas),
      resolvePromisedValue(maxPriorityFeePerGas)
    ]);
    if (resolvedMaxFeePerGas && resolvedMaxPriorityFeePerGas) {
      maxFeePerGas = resolvedMaxFeePerGas;
      maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas;
    } else {
      const feeData = await getDefaultGasOverrides(client, chain);
      maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas ?? feeData.maxPriorityFeePerGas ?? 0n;
      maxFeePerGas = resolvedMaxFeePerGas ?? feeData.maxFeePerGas ?? 0n;
    }
  }
  return { maxFeePerGas, maxPriorityFeePerGas };
}
async function populateUserOp_v0_7(args) {
  const { bundlerOptions, isDeployed, factoryContract, accountContract, adminAddress, sponsorGas, overrides, nonce, callData, callGasLimit, maxFeePerGas, maxPriorityFeePerGas, waitForDeployment } = args;
  const { chain, client } = bundlerOptions;
  let factory;
  let factoryData;
  if (isDeployed || isAccountDeploying(accountContract)) {
    factoryData = "0x";
    if (waitForDeployment) {
      await waitForAccountDeployed(accountContract);
    }
  } else {
    factory = factoryContract.address;
    factoryData = await encode(prepareCreateAccount({
      factoryContract,
      adminAddress,
      accountSalt: overrides == null ? void 0 : overrides.accountSalt,
      createAccountOverride: overrides == null ? void 0 : overrides.createAccount
    }));
    markAccountDeploying(accountContract);
  }
  const partialOp = {
    sender: accountContract.address,
    nonce,
    callData,
    maxFeePerGas,
    maxPriorityFeePerGas,
    callGasLimit: callGasLimit ?? 0n,
    verificationGasLimit: 0n,
    preVerificationGas: 0n,
    factory,
    factoryData,
    paymaster: void 0,
    paymasterData: "0x",
    paymasterVerificationGasLimit: 0n,
    paymasterPostOpGasLimit: 0n,
    signature: DUMMY_SIGNATURE
  };
  if (sponsorGas) {
    const paymasterResult = await getPaymasterAndData2({
      userOp: partialOp,
      chain,
      client,
      entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
      paymasterOverride: overrides == null ? void 0 : overrides.paymaster
    });
    if (paymasterResult.paymaster && paymasterResult.paymasterData) {
      partialOp.paymaster = paymasterResult.paymaster;
      partialOp.paymasterData = paymasterResult.paymasterData;
    }
    if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas && paymasterResult.paymasterPostOpGasLimit && paymasterResult.paymasterVerificationGasLimit) {
      partialOp.callGasLimit = paymasterResult.callGasLimit;
      partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
      partialOp.preVerificationGas = paymasterResult.preVerificationGas;
      partialOp.paymasterPostOpGasLimit = paymasterResult.paymasterPostOpGasLimit;
      partialOp.paymasterVerificationGasLimit = paymasterResult.paymasterVerificationGasLimit;
    } else {
      const estimates = await estimateUserOpGas({
        userOp: partialOp,
        options: bundlerOptions
      });
      partialOp.callGasLimit = estimates.callGasLimit;
      partialOp.verificationGasLimit = estimates.verificationGasLimit;
      partialOp.preVerificationGas = estimates.preVerificationGas;
      partialOp.paymasterPostOpGasLimit = paymasterResult.paymasterPostOpGasLimit || 0n;
      partialOp.paymasterVerificationGasLimit = paymasterResult.paymasterVerificationGasLimit || 0n;
      const paymasterResult2 = await getPaymasterAndData2({
        userOp: partialOp,
        chain,
        client,
        entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
        paymasterOverride: overrides == null ? void 0 : overrides.paymaster
      });
      if (paymasterResult2.paymaster && paymasterResult2.paymasterData) {
        partialOp.paymaster = paymasterResult2.paymaster;
        partialOp.paymasterData = paymasterResult2.paymasterData;
      }
    }
  } else {
    const estimates = await estimateUserOpGas({
      userOp: partialOp,
      options: bundlerOptions
    });
    partialOp.callGasLimit = estimates.callGasLimit;
    partialOp.verificationGasLimit = estimates.verificationGasLimit;
    partialOp.preVerificationGas = estimates.preVerificationGas;
    partialOp.paymasterPostOpGasLimit = estimates.paymasterPostOpGasLimit || 0n;
    partialOp.paymasterVerificationGasLimit = estimates.paymasterVerificationGasLimit || 0n;
  }
  return {
    ...partialOp,
    signature: "0x"
  };
}
async function populateUserOp_v0_6(args) {
  const { bundlerOptions, isDeployed, factoryContract, accountContract, adminAddress, sponsorGas, overrides, nonce, callData, callGasLimit, maxFeePerGas, maxPriorityFeePerGas, waitForDeployment } = args;
  const { chain, client } = bundlerOptions;
  let initCode;
  if (isDeployed || isAccountDeploying(accountContract)) {
    initCode = "0x";
    if (waitForDeployment) {
      await waitForAccountDeployed(accountContract);
    }
  } else {
    initCode = await getAccountInitCode({
      factoryContract,
      adminAddress,
      accountSalt: overrides == null ? void 0 : overrides.accountSalt,
      createAccountOverride: overrides == null ? void 0 : overrides.createAccount
    });
    markAccountDeploying(accountContract);
  }
  const partialOp = {
    sender: accountContract.address,
    nonce,
    initCode,
    callData,
    maxFeePerGas,
    maxPriorityFeePerGas,
    callGasLimit: callGasLimit ?? 0n,
    verificationGasLimit: 0n,
    preVerificationGas: 0n,
    paymasterAndData: "0x",
    signature: DUMMY_SIGNATURE
  };
  if (sponsorGas) {
    const paymasterResult = await getPaymasterAndData2({
      userOp: partialOp,
      chain,
      client,
      entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
      paymasterOverride: overrides == null ? void 0 : overrides.paymaster
    });
    const paymasterAndData = "paymasterAndData" in paymasterResult ? paymasterResult.paymasterAndData : "0x";
    if (paymasterAndData && paymasterAndData !== "0x") {
      partialOp.paymasterAndData = paymasterAndData;
    }
    if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas) {
      partialOp.callGasLimit = paymasterResult.callGasLimit;
      partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
      partialOp.preVerificationGas = paymasterResult.preVerificationGas;
    } else {
      const estimates = await estimateUserOpGas({
        userOp: partialOp,
        options: bundlerOptions
      });
      partialOp.callGasLimit = estimates.callGasLimit;
      partialOp.verificationGasLimit = estimates.verificationGasLimit;
      partialOp.preVerificationGas = estimates.preVerificationGas;
      if (paymasterAndData && paymasterAndData !== "0x") {
        const paymasterResult2 = await getPaymasterAndData2({
          userOp: partialOp,
          chain,
          client,
          entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
          paymasterOverride: overrides == null ? void 0 : overrides.paymaster
        });
        const paymasterAndData2 = "paymasterAndData" in paymasterResult2 ? paymasterResult2.paymasterAndData : "0x";
        if (paymasterAndData2 && paymasterAndData2 !== "0x") {
          partialOp.paymasterAndData = paymasterAndData2;
        }
      }
    }
  } else {
    const estimates = await estimateUserOpGas({
      userOp: partialOp,
      options: bundlerOptions
    });
    partialOp.callGasLimit = estimates.callGasLimit;
    partialOp.verificationGasLimit = estimates.verificationGasLimit;
    partialOp.preVerificationGas = estimates.preVerificationGas;
  }
  return {
    ...partialOp,
    signature: "0x"
  };
}
async function signUserOp(args) {
  const { userOp, chain, entrypointAddress, adminAccount } = args;
  const entrypointVersion = getEntryPointVersion(entrypointAddress || ENTRYPOINT_ADDRESS_v0_6);
  let userOpHash;
  if (entrypointVersion === "v0.7") {
    const packedUserOp = getPackedUserOperation(userOp);
    userOpHash = await getUserOpHash2({
      contract: getContract({
        address: entrypointAddress || ENTRYPOINT_ADDRESS_v0_7,
        chain,
        client: args.client
      }),
      userOp: packedUserOp
    });
  } else {
    userOpHash = await getUserOpHash({
      contract: getContract({
        address: entrypointAddress || ENTRYPOINT_ADDRESS_v0_6,
        chain,
        client: args.client
      }),
      userOp
    });
  }
  if (adminAccount.signMessage) {
    const signature = await adminAccount.signMessage({
      message: {
        raw: hexToBytes(userOpHash)
      }
    });
    return {
      ...userOp,
      signature
    };
  }
  throw new Error("signMessage not implemented in signingAccount");
}
async function getAccountInitCode(options) {
  const { factoryContract, adminAddress, accountSalt, createAccountOverride } = options;
  const deployTx = prepareCreateAccount({
    factoryContract,
    adminAddress,
    accountSalt,
    createAccountOverride
  });
  return concat([factoryContract.address, await encode(deployTx)]);
}
async function getAccountNonce(options) {
  const { accountContract, chain, client, entrypointAddress, getNonceOverride } = options;
  if (getNonceOverride) {
    return getNonceOverride(accountContract);
  }
  return getNonce({
    contract: getContract({
      address: entrypointAddress || ENTRYPOINT_ADDRESS_v0_6,
      chain,
      client
    }),
    key: generateRandomUint192(),
    sender: accountContract.address
  });
}
async function waitForAccountDeployed(accountContract) {
  const startTime = Date.now();
  while (isAccountDeploying(accountContract)) {
    if (Date.now() - startTime > 6e4) {
      clearAccountDeploying(accountContract);
      throw new Error("Account deployment is taking too long (over 1 minute). Please try again.");
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

// node_modules/thirdweb/dist/esm/wallets/smart/index.js
function isSmartWallet(wallet) {
  return wallet.id === "smart";
}
var personalAccountToSmartAccountMap = /* @__PURE__ */ new WeakMap();
var smartWalletToPersonalAccountMap = /* @__PURE__ */ new WeakMap();
async function connectSmartWallet(wallet, connectionOptions, creationOptions) {
  var _a, _b, _c, _d, _e;
  const { personalAccount, client, chain: connectChain } = connectionOptions;
  if (!personalAccount) {
    throw new Error("Personal wallet does not have an account");
  }
  const options = creationOptions;
  const chain = connectChain ?? options.chain;
  if (options.factoryAddress && !((_a = options.overrides) == null ? void 0 : _a.entrypointAddress)) {
    const entrypointAddress = await getEntrypointFromFactory(options.factoryAddress, client, chain);
    if (entrypointAddress) {
      options.overrides = {
        ...options.overrides,
        entrypointAddress
      };
    }
  }
  const factoryAddress = options.factoryAddress ?? getDefaultAccountFactory((_b = options.overrides) == null ? void 0 : _b.entrypointAddress);
  const sponsorGas = "gasless" in options ? options.gasless : options.sponsorGas;
  if (await isZkSyncChain(chain)) {
    return [
      createZkSyncAccount({
        creationOptions,
        connectionOptions,
        chain,
        sponsorGas
      }),
      chain
    ];
  }
  const factoryContract = getContract({
    client,
    address: factoryAddress,
    chain
  });
  const accountAddress = await predictAddress({
    factoryContract,
    adminAddress: personalAccount.address,
    predictAddressOverride: (_c = options.overrides) == null ? void 0 : _c.predictAddress,
    accountSalt: (_d = options.overrides) == null ? void 0 : _d.accountSalt,
    accountAddress: (_e = options.overrides) == null ? void 0 : _e.accountAddress
  }).then((address) => address).catch((err) => {
    throw new Error(`Failed to get account address with factory contract ${factoryContract.address} on chain ID ${chain.id}: ${(err == null ? void 0 : err.message) || "unknown error"}`, { cause: err });
  });
  const accountContract = getContract({
    client,
    address: accountAddress,
    chain
  });
  const account = await createSmartAccount({
    ...options,
    chain,
    sponsorGas,
    personalAccount,
    accountContract,
    factoryContract,
    client
  });
  personalAccountToSmartAccountMap.set(personalAccount, wallet);
  smartWalletToPersonalAccountMap.set(wallet, personalAccount);
  return [account, chain];
}
async function disconnectSmartWallet(wallet) {
  const personalAccount = smartWalletToPersonalAccountMap.get(wallet);
  if (personalAccount) {
    personalAccountToSmartAccountMap.delete(personalAccount);
    smartWalletToPersonalAccountMap.delete(wallet);
  }
}
async function createSmartAccount(options) {
  const { accountContract } = options;
  const account = {
    address: getAddress(accountContract.address),
    async sendTransaction(transaction) {
      var _a, _b, _c, _d;
      const erc20Paymaster = (_a = options.overrides) == null ? void 0 : _a.erc20Paymaster;
      let paymasterOverride = void 0;
      if (erc20Paymaster) {
        await approveERC20({
          accountContract,
          erc20Paymaster,
          options
        });
        const paymasterCallback = async () => {
          return {
            paymasterAndData: concatHex([
              erc20Paymaster.address,
              erc20Paymaster == null ? void 0 : erc20Paymaster.token
            ]),
            // for 0.7 compatibility
            paymaster: erc20Paymaster.address,
            paymasterData: "0x"
          };
        };
        paymasterOverride = ((_b = options.overrides) == null ? void 0 : _b.paymaster) || paymasterCallback;
      } else {
        paymasterOverride = (_c = options.overrides) == null ? void 0 : _c.paymaster;
      }
      const executeTx = prepareExecute({
        accountContract,
        transaction,
        executeOverride: (_d = options.overrides) == null ? void 0 : _d.execute
      });
      return _sendUserOp({
        executeTx,
        options: {
          ...options,
          overrides: {
            ...options.overrides,
            paymaster: paymasterOverride
          }
        }
      });
    },
    async sendBatchTransaction(transactions) {
      var _a;
      const executeTx = prepareBatchExecute({
        accountContract,
        transactions,
        executeBatchOverride: (_a = options.overrides) == null ? void 0 : _a.executeBatch
      });
      return _sendUserOp({
        executeTx,
        options
      });
    },
    async signMessage({ message }) {
      const [{ isContractDeployed: isContractDeployed2 }, { readContract: readContract2 }, { encodeAbiParameters: encodeAbiParameters2 }, { hashMessage }, { checkContractWalletSignature }] = await Promise.all([
        import("./is-contract-deployed-AZVYEI5B.js"),
        import("./read-contract-EXVZZYXE.js"),
        import("./encodeAbiParameters-UF4TQP7R.js"),
        import("./hashMessage-NHJEFPJB.js"),
        import("./checkContractWalletSignature-6DFUQS7E.js")
      ]);
      const isDeployed = await isContractDeployed2(accountContract);
      if (!isDeployed) {
        await _deployAccount({
          options,
          account,
          accountContract
        });
        await confirmContractDeployment({
          accountContract
        });
      }
      const originalMsgHash = hashMessage(message);
      let factorySupports712 = false;
      try {
        await readContract2({
          contract: accountContract,
          method: "function getMessageHash(bytes32 _hash) public view returns (bytes32)",
          params: [originalMsgHash]
        });
        factorySupports712 = true;
      } catch {
      }
      let sig;
      if (factorySupports712) {
        const wrappedMessageHash = encodeAbiParameters2([{ type: "bytes32" }], [originalMsgHash]);
        sig = await options.personalAccount.signTypedData({
          domain: {
            name: "Account",
            version: "1",
            chainId: options.chain.id,
            verifyingContract: accountContract.address
          },
          primaryType: "AccountMessage",
          types: { AccountMessage: [{ name: "message", type: "bytes" }] },
          message: { message: wrappedMessageHash }
        });
      } else {
        sig = await options.personalAccount.signMessage({ message });
      }
      const isValid = await checkContractWalletSignature({
        contract: accountContract,
        message,
        signature: sig
      });
      if (isValid) {
        return sig;
      }
      throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.");
    },
    async signTypedData(_typedData) {
      var _a, _b, _c;
      const typedData = parseTypedData(_typedData);
      const [{ isContractDeployed: isContractDeployed2 }, { readContract: readContract2 }, { encodeAbiParameters: encodeAbiParameters2 }, { checkContractWalletSignedTypedData }] = await Promise.all([
        import("./is-contract-deployed-AZVYEI5B.js"),
        import("./read-contract-EXVZZYXE.js"),
        import("./encodeAbiParameters-UF4TQP7R.js"),
        import("./checkContractWalletSignedTypedData-SEVCYJA7.js")
      ]);
      const isSelfVerifyingContract = ((_b = (_a = typedData.domain) == null ? void 0 : _a.verifyingContract) == null ? void 0 : _b.toLowerCase()) === ((_c = accountContract.address) == null ? void 0 : _c.toLowerCase());
      if (isSelfVerifyingContract) {
        return options.personalAccount.signTypedData(typedData);
      }
      const isDeployed = await isContractDeployed2(accountContract);
      if (!isDeployed) {
        await _deployAccount({
          options,
          account,
          accountContract
        });
        await confirmContractDeployment({
          accountContract
        });
      }
      const originalMsgHash = hashTypedData(typedData);
      let factorySupports712 = false;
      try {
        await readContract2({
          contract: accountContract,
          method: "function getMessageHash(bytes32 _hash) public view returns (bytes32)",
          params: [originalMsgHash]
        });
        factorySupports712 = true;
      } catch {
      }
      let sig;
      if (factorySupports712) {
        const wrappedMessageHash = encodeAbiParameters2([{ type: "bytes32" }], [originalMsgHash]);
        sig = await options.personalAccount.signTypedData({
          domain: {
            name: "Account",
            version: "1",
            chainId: options.chain.id,
            verifyingContract: accountContract.address
          },
          primaryType: "AccountMessage",
          types: { AccountMessage: [{ name: "message", type: "bytes" }] },
          message: { message: wrappedMessageHash }
        });
      } else {
        sig = await options.personalAccount.signTypedData(typedData);
      }
      const isValid = await checkContractWalletSignedTypedData({
        contract: accountContract,
        data: typedData,
        signature: sig
      });
      if (isValid) {
        return sig;
      }
      throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.");
    },
    async onTransactionRequested(transaction) {
      var _a, _b;
      return (_b = (_a = options.personalAccount).onTransactionRequested) == null ? void 0 : _b.call(_a, transaction);
    }
  };
  return account;
}
async function approveERC20(args) {
  var _a;
  const { accountContract, erc20Paymaster, options } = args;
  const tokenAddress = erc20Paymaster.token;
  const tokenContract = getContract({
    address: tokenAddress,
    chain: accountContract.chain,
    client: accountContract.client
  });
  const accountAllowance = await allowance({
    contract: tokenContract,
    owner: accountContract.address,
    spender: erc20Paymaster.address
  });
  if (accountAllowance > 0n) {
    return;
  }
  const approveTx = approve({
    contract: tokenContract,
    spender: erc20Paymaster.address,
    amountWei: maxUint96 - 1n
  });
  const transaction = await toSerializableTransaction({
    transaction: approveTx,
    from: accountContract.address
  });
  const executeTx = prepareExecute({
    accountContract,
    transaction,
    executeOverride: (_a = options.overrides) == null ? void 0 : _a.execute
  });
  await _sendUserOp({
    executeTx,
    options: {
      ...options,
      overrides: {
        ...options.overrides,
        erc20Paymaster: void 0
      }
    }
  });
}
function createZkSyncAccount(args) {
  const { creationOptions, connectionOptions, chain } = args;
  const account = {
    address: connectionOptions.personalAccount.address,
    async sendTransaction(transaction) {
      var _a, _b, _c, _d;
      const prepTx = {
        data: transaction.data,
        to: transaction.to ?? void 0,
        value: transaction.value ?? 0n,
        chain: getCachedChain(transaction.chainId),
        client: connectionOptions.client,
        eip712: transaction.eip712
      };
      let serializableTransaction = await populateEip712Transaction({
        account,
        transaction: prepTx
      });
      if (args.sponsorGas && !serializableTransaction.paymaster) {
        const pmData = await getZkPaymasterData({
          options: {
            client: connectionOptions.client,
            chain,
            bundlerUrl: (_a = creationOptions.overrides) == null ? void 0 : _a.bundlerUrl,
            entrypointAddress: (_b = creationOptions.overrides) == null ? void 0 : _b.entrypointAddress
          },
          transaction: serializableTransaction
        });
        serializableTransaction = {
          ...serializableTransaction,
          ...pmData
        };
      }
      const signedTransaction = await signEip712Transaction({
        account,
        chainId: chain.id,
        eip712Transaction: serializableTransaction
      });
      const txHash = await broadcastZkTransaction({
        options: {
          client: connectionOptions.client,
          chain,
          bundlerUrl: (_c = creationOptions.overrides) == null ? void 0 : _c.bundlerUrl,
          entrypointAddress: (_d = creationOptions.overrides) == null ? void 0 : _d.entrypointAddress
        },
        transaction: serializableTransaction,
        signedTransaction
      });
      return {
        transactionHash: txHash.transactionHash,
        client: connectionOptions.client,
        chain
      };
    },
    async signMessage({ message }) {
      return connectionOptions.personalAccount.signMessage({ message });
    },
    async signTypedData(_typedData) {
      const typedData = parseTypedData(_typedData);
      return connectionOptions.personalAccount.signTypedData(typedData);
    },
    async onTransactionRequested(transaction) {
      var _a, _b;
      return (_b = (_a = connectionOptions.personalAccount).onTransactionRequested) == null ? void 0 : _b.call(_a, transaction);
    }
  };
  return account;
}
async function _deployAccount(args) {
  const { options, account, accountContract } = args;
  const [{ sendTransaction }, { prepareTransaction }] = await Promise.all([
    import("./send-transaction-3VCDCFKW.js"),
    import("./prepare-transaction-ENVXVTJF.js")
  ]);
  const dummyTx = prepareTransaction({
    client: options.client,
    chain: options.chain,
    to: accountContract.address,
    value: 0n,
    gas: 50000n
    // force gas to avoid simulation error
  });
  const deployResult = await sendTransaction({
    transaction: dummyTx,
    account
  });
  return deployResult;
}
async function _sendUserOp(args) {
  var _a, _b, _c;
  const { executeTx, options } = args;
  const unsignedUserOp = await createUnsignedUserOp({
    transaction: executeTx,
    factoryContract: options.factoryContract,
    accountContract: options.accountContract,
    adminAddress: options.personalAccount.address,
    sponsorGas: options.sponsorGas,
    overrides: options.overrides
  });
  const signedUserOp = await signUserOp({
    client: options.client,
    chain: options.chain,
    adminAccount: options.personalAccount,
    entrypointAddress: (_a = options.overrides) == null ? void 0 : _a.entrypointAddress,
    userOp: unsignedUserOp
  });
  const bundlerOptions = {
    chain: options.chain,
    client: options.client,
    bundlerUrl: (_b = options.overrides) == null ? void 0 : _b.bundlerUrl,
    entrypointAddress: (_c = options.overrides) == null ? void 0 : _c.entrypointAddress
  };
  const userOpHash = await bundleUserOp({
    options: bundlerOptions,
    userOp: signedUserOp
  });
  const receipt = await waitForUserOpReceipt({
    ...bundlerOptions,
    userOpHash
  });
  clearAccountDeploying(options.accountContract);
  return {
    client: options.client,
    chain: options.chain,
    transactionHash: receipt.transactionHash
  };
}
async function confirmContractDeployment(args) {
  const { accountContract } = args;
  const startTime = Date.now();
  const timeout = 6e4;
  const { isContractDeployed: isContractDeployed2 } = await import("./is-contract-deployed-AZVYEI5B.js");
  let isDeployed = await isContractDeployed2(accountContract);
  while (!isDeployed) {
    if (Date.now() - startTime > timeout) {
      throw new Error("Timeout: Smart account deployment not confirmed after 1 minute");
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    isDeployed = await isContractDeployed2(accountContract);
  }
}
async function getEntrypointFromFactory(factoryAddress, client, chain) {
  const factoryContract = getContract({
    address: factoryAddress,
    client,
    chain
  });
  try {
    const entrypointAddress = await readContract({
      contract: factoryContract,
      method: "function entrypoint() public view returns (address)"
    });
    return entrypointAddress;
  } catch {
    return void 0;
  }
}

export {
  isSmartWallet,
  connectSmartWallet,
  disconnectSmartWallet
};
//# sourceMappingURL=chunk-F2BEZVSV.js.map
