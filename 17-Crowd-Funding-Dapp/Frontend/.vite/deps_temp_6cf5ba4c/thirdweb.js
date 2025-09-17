import {
  isValidSignature
} from "./chunk-U55JVTZU.js";
import {
  eth_getStorageAt
} from "./chunk-HL2TAEA2.js";
import {
  eth_getTransactionCount
} from "./chunk-YXQ5KEQC.js";
import {
  eth_getLogs,
  getBuyWithCryptoHistory,
  getContractEvents,
  isBaseTransactionOptions,
  simulateTransaction,
  watchContractEvents
} from "./chunk-S4ZGHGPT.js";
import {
  sendBatchTransaction
} from "./chunk-VUXPTMXZ.js";
import {
  estimateGasCost,
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer
} from "./chunk-PHVX3XOV.js";
import {
  sendAndConfirmTransaction
} from "./chunk-ADIC4TC2.js";
import {
  eth_getBalance
} from "./chunk-4PEUWIWY.js";
import {
  parseEventLogs,
  prepareEvent
} from "./chunk-DYKFWRMQ.js";
import "./chunk-TTOANXGP.js";
import "./chunk-AWMNEQRO.js";
import {
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import {
  sendTransaction
} from "./chunk-JTR2PIFP.js";
import {
  eth_sendRawTransaction
} from "./chunk-MWAIX6LF.js";
import {
  estimateGas,
  eth_gasPrice,
  eth_maxPriorityFeePerGas,
  getGasPrice,
  resolveContractAbi,
  toSerializableTransaction
} from "./chunk-JZC47WAY.js";
import {
  eth_getBlockByNumber
} from "./chunk-CXAZLQ2Z.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-7ZCK2FX5.js";
import {
  encode
} from "./chunk-7QDK5KLB.js";
import {
  fromGwei,
  toEther,
  toTokens,
  toUnits,
  toWei
} from "./chunk-UY2SRO54.js";
import {
  NATIVE_TOKEN_ADDRESS,
  ZERO_ADDRESS
} from "./chunk-673YCYST.js";
import {
  eth_blockNumber,
  eth_getTransactionReceipt,
  waitForReceipt,
  watchBlockNumber
} from "./chunk-JBQP4JIV.js";
import "./chunk-4OCU6WGG.js";
import "./chunk-3DBHE3NE.js";
import "./chunk-3ZOYRTTJ.js";
import "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import {
  eth_getCode
} from "./chunk-NPXNISXJ.js";
import "./chunk-PK5NRJAC.js";
import {
  concatHex
} from "./chunk-4BCIASJM.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  prepareTransaction
} from "./chunk-CNLOA7AS.js";
import {
  eth_call,
  readContract
} from "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import {
  serializeSignature
} from "./chunk-YPFLLHK6.js";
import {
  secp256k1
} from "./chunk-7EY5MWB2.js";
import {
  encodeAbiParameters
} from "./chunk-U7TO6S3N.js";
import {
  formatBlock,
  formatTransaction,
  hashTypedData,
  serializeTransaction
} from "./chunk-LO5SQBMX.js";
import {
  getAddress,
  isAddress
} from "./chunk-EIVAOYE5.js";
import {
  keccak256
} from "./chunk-67BSOYLQ.js";
import {
  boolToBytes,
  hexToBytes,
  numberToBytes,
  stringToBytes,
  toBytes
} from "./chunk-B7XHB4Z2.js";
import {
  sha256
} from "./chunk-O6UZ65WN.js";
import {
  encodeDeployData,
  parseAbiItem,
  sliceHex,
  universalSignatureValidatorAbi,
  universalSignatureValidatorByteCode
} from "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import "./chunk-NJUWOGZE.js";
import {
  defineChain
} from "./chunk-TFBEDS4S.js";
import "./chunk-GOA7IGSB.js";
import {
  getThirdwebBaseUrl
} from "./chunk-QHKZ43P6.js";
import {
  getClientFetch,
  isJWT
} from "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";
import {
  eth_estimateGas
} from "./chunk-IMSXM5CF.js";
import {
  boolToHex,
  fromHex,
  hexToBigInt,
  hexToBool,
  hexToNumber,
  hexToString,
  hexToUint8Array,
  isHex,
  numberToHex,
  padHex,
  stringToHex,
  toHex,
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";
import {
  toBigInt2 as toBigInt,
  toBoolean2 as toBoolean,
  toNumber2 as toNumber,
  toString2 as toString
} from "./chunk-Y3WKETHV.js";
import {
  equalBytes
} from "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/utils/hashing/sha256.js
function sha2562(value, to) {
  const bytes = sha256(isHex(value, { strict: false }) ? hexToUint8Array(value) : value);
  if (to === "bytes") {
    return bytes;
  }
  return uint8ArrayToHex(bytes);
}

// node_modules/thirdweb/dist/esm/utils/client-id.js
var cache = new LruMap(4096);
function computeClientIdFromSecretKey(secretKey) {
  if (cache.has(secretKey)) {
    return cache.get(secretKey);
  }
  const cId = sha2562(stringToBytes(secretKey)).slice(2, 34);
  cache.set(secretKey, cId);
  return cId;
}

// node_modules/thirdweb/dist/esm/client/client.js
function createThirdwebClient(options) {
  const { clientId, secretKey, ...rest } = options;
  let realClientId = clientId;
  if (secretKey) {
    if (isJWT(secretKey)) {
      if (!clientId) {
        throw new Error("clientId must be provided when using a JWT secretKey");
      }
    } else {
      realClientId = computeClientIdFromSecretKey(secretKey);
    }
  }
  if (!realClientId) {
    throw new Error("clientId or secretKey must be provided");
  }
  return {
    ...rest,
    clientId: realClientId,
    secretKey
  };
}

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getBlockByHash.js
async function eth_getBlockByHash(request, params) {
  const includeTransactions = params.includeTransactions ?? false;
  const block = await request({
    method: "eth_getBlockByHash",
    params: [params.blockHash, includeTransactions]
  });
  if (!block) {
    throw new Error("Block not found");
  }
  return formatBlock(block);
}

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getTransactionByHash.js
async function eth_getTransactionByHash(request, params) {
  const receipt = await request({
    method: "eth_getTransactionByHash",
    params: [params.hash]
  });
  if (!receipt) {
    throw new Error("Transaction not found.");
  }
  return formatTransaction(receipt);
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/users/getUser.js
async function getUser({ client, walletAddress, email, phone, id, externalWalletAddress, ecosystem }) {
  if (!client.secretKey) {
    throw new Error("A secret key is required to query for users. If you're making this request from the server, please add a secret key to your client.");
  }
  const url = new URL(`${getThirdwebBaseUrl("inAppWallet")}/api/2023-11-30/embedded-wallet/user-details`);
  if (walletAddress) {
    url.searchParams.set("queryBy", "walletAddress");
    url.searchParams.set("walletAddress", walletAddress);
  } else if (email) {
    url.searchParams.set("queryBy", "email");
    url.searchParams.set("email", email);
  } else if (phone) {
    url.searchParams.set("queryBy", "phone");
    url.searchParams.set("phone", phone);
  } else if (id) {
    url.searchParams.set("queryBy", "id");
    url.searchParams.set("id", id);
  } else if (externalWalletAddress) {
    url.searchParams.set("queryBy", "externalWalletAddress");
    url.searchParams.set("externalWalletAddress", externalWalletAddress);
  } else {
    throw new Error("Please provide a walletAddress, email, phone, id, or externalWalletAddress to query for users.");
  }
  const clientFetch = getClientFetch(client, ecosystem);
  const res = await clientFetch(url.toString());
  if (!res.ok) {
    throw new Error("Failed to get profiles");
  }
  const data = await res.json();
  return data.map((item) => ({
    userId: item.userId,
    walletAddress: item.walletAddress,
    email: item.email,
    phone: item.phone,
    createdAt: item.createdAt,
    profiles: item.linkedAccounts
  }))[0] || null;
}

// node_modules/thirdweb/dist/esm/transaction/resolve-method.js
function resolveMethod(method) {
  return async (contract) => {
    var _a;
    if (typeof method === "string" && method.startsWith("function ")) {
      return parseAbiItem(method);
    }
    const resolvedAbi = ((_a = contract.abi) == null ? void 0 : _a.length) ? contract.abi : await resolveContractAbi(contract);
    const abiFunction = resolvedAbi.find((item) => {
      if (item.type !== "function") {
        return false;
      }
      return item.name === method;
    });
    if (!abiFunction) {
      throw new Error(`could not find function with name "${method}" in abi`);
    }
    return abiFunction;
  };
}

// node_modules/thirdweb/dist/esm/utils/signatures/sign.js
function sign({ hash, privateKey }) {
  const { r, s, recovery } = secp256k1.sign(hash.slice(2), privateKey.slice(2));
  return {
    r: toHex(r, { size: 32 }),
    s: toHex(s, { size: 32 }),
    v: recovery ? 28n : 27n,
    yParity: recovery
  };
}

// node_modules/thirdweb/dist/esm/transaction/serialize-transaction.js
function serializeTransaction2(options) {
  const { transaction } = options;
  const signature = (() => {
    if (options.signature)
      return options.signature;
    if (transaction.v === void 0 && transaction.yParity === void 0) {
      return void 0;
    }
    if (transaction.r === void 0 || transaction.s === void 0) {
      throw new Error("Invalid signature provided with transaction");
    }
    return {
      v: transaction.v,
      r: transaction.r,
      s: transaction.s,
      yParity: transaction.yParity
    };
  })();
  return serializeTransaction(transaction, signature);
}

// node_modules/thirdweb/dist/esm/transaction/actions/sign-transaction.js
function signTransaction({ transaction, privateKey }) {
  if (transaction.type === "eip4844") {
    transaction = { ...transaction, sidecars: false };
  }
  const serializedTransaction = serializeTransaction2({ transaction });
  const signature = sign({
    hash: keccak256(serializedTransaction),
    privateKey
  });
  return serializeTransaction2({
    transaction: { ...transaction, ...signature }
  });
}

// node_modules/thirdweb/dist/esm/utils/encoding/from-bytes.js
function fromBytes(bytes, toOrOpts) {
  const opts = typeof toOrOpts === "string" ? { to: toOrOpts } : toOrOpts;
  switch (opts.to) {
    case "number":
      return bytesToNumber(bytes, opts);
    case "bigint":
      return bytesToBigInt(bytes, opts);
    case "boolean":
      return bytesToBool(bytes, opts);
    case "string":
      return bytesToString(bytes, opts);
    default:
      return uint8ArrayToHex(bytes, opts);
  }
}
function bytesToBigInt(bytes, opts = {}) {
  return toBigInt(bytes, opts);
}
function bytesToBool(bytes_, opts = {}) {
  return toBoolean(bytes_, opts);
}
function bytesToNumber(bytes, opts = {}) {
  return toNumber(bytes, opts);
}
function bytesToString(bytes_, opts = {}) {
  return toString(bytes_, opts);
}

// node_modules/thirdweb/dist/esm/auth/constants.js
var ERC_6492_MAGIC_VALUE = "0x6492649264926492649264926492649264926492649264926492649264926492";

// node_modules/thirdweb/dist/esm/auth/is-erc6492-signature.js
function isErc6492Signature(signature) {
  return sliceHex(signature, -32) === ERC_6492_MAGIC_VALUE;
}

// node_modules/thirdweb/dist/esm/auth/serialize-erc6492-signature.js
function serializeErc6492Signature({ address, data, signature }) {
  return concatHex([
    encodeAbiParameters([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [address, data, signature]),
    ERC_6492_MAGIC_VALUE
  ]);
}

// node_modules/thirdweb/dist/esm/auth/verify-hash.js
async function verifyHash({ hash, signature, address, client, chain, accountFactory }) {
  const signatureHex = (() => {
    if (isHex(signature))
      return signature;
    if (typeof signature === "object" && "r" in signature && "s" in signature)
      return serializeSignature(signature);
    if (signature instanceof Uint8Array)
      return fromBytes(signature, "hex");
    throw new Error(`Invalid signature type for signature ${signature}: ${typeof signature}`);
  })();
  const wrappedSignature = await (async () => {
    if (!accountFactory)
      return signatureHex;
    if (isErc6492Signature(signatureHex))
      return signatureHex;
    return serializeErc6492Signature({
      address: accountFactory.address,
      data: accountFactory.verificationCalldata,
      signature: signatureHex
    });
  })();
  const verificationData = encodeDeployData({
    abi: universalSignatureValidatorAbi,
    args: [address, hash, wrappedSignature],
    bytecode: universalSignatureValidatorByteCode
  });
  const rpcRequest = getRpcClient({
    chain,
    client
  });
  try {
    const result = await eth_call(rpcRequest, {
      data: verificationData
    });
    const hexResult = isHex(result) ? toBytes(result) : result;
    return equalBytes(hexResult, toBytes(true));
  } catch {
    const validEip1271 = await verifyEip1271Signature({
      hash,
      signature: signatureHex,
      contract: getContract({
        chain,
        address,
        client
      })
    }).catch(() => false);
    if (validEip1271) {
      return true;
    }
    return false;
  }
}
var EIP_1271_MAGIC_VALUE = "0x1626ba7e";
async function verifyEip1271Signature({ hash, signature, contract }) {
  const result = await isValidSignature({
    hash,
    signature,
    contract
  });
  return result === EIP_1271_MAGIC_VALUE;
}

// node_modules/thirdweb/dist/esm/auth/verify-typed-data.js
async function verifyTypedData({ address, signature, client, chain, accountFactory, message, domain, primaryType, types }) {
  const messageHash = hashTypedData({
    message,
    domain,
    primaryType,
    types
  });
  return verifyHash({
    hash: messageHash,
    signature,
    address,
    chain,
    client,
    accountFactory
  });
}
export {
  ZERO_ADDRESS as ADDRESS_ZERO,
  NATIVE_TOKEN_ADDRESS,
  ZERO_ADDRESS,
  boolToBytes,
  boolToHex,
  bytesToBigInt,
  bytesToBool,
  bytesToNumber,
  bytesToString,
  concatHex,
  createThirdwebClient,
  defineChain,
  encode,
  estimateGas,
  estimateGasCost,
  eth_blockNumber,
  eth_call,
  eth_estimateGas,
  eth_gasPrice,
  eth_getBalance,
  eth_getBlockByHash,
  eth_getBlockByNumber,
  eth_getCode,
  eth_getLogs,
  eth_getStorageAt,
  eth_getTransactionByHash,
  eth_getTransactionCount,
  eth_getTransactionReceipt,
  eth_maxPriorityFeePerGas,
  eth_sendRawTransaction,
  fromBytes,
  fromGwei,
  fromHex,
  getAddress,
  getBuyWithCryptoHistory,
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer,
  getContract,
  getContractEvents,
  getGasPrice,
  getRpcClient,
  getUser,
  hexToBigInt,
  hexToBool,
  hexToBytes,
  hexToNumber,
  hexToString,
  hexToUint8Array,
  isAddress,
  isBaseTransactionOptions,
  isHex,
  keccak256,
  numberToBytes,
  numberToHex,
  padHex,
  parseEventLogs,
  prepareContractCall,
  prepareEvent,
  prepareTransaction,
  readContract,
  resolveMethod,
  sendAndConfirmTransaction,
  sendBatchTransaction,
  sendTransaction,
  serializeTransaction2 as serializeTransaction,
  sha2562 as sha256,
  signTransaction,
  simulateTransaction,
  stringToBytes,
  stringToHex,
  toBytes,
  toEther,
  toHex,
  toSerializableTransaction,
  toTokens,
  toUnits,
  toWei,
  uint8ArrayToHex,
  verifyTypedData,
  waitForReceipt,
  watchBlockNumber,
  watchContractEvents
};
//# sourceMappingURL=thirdweb.js.map
