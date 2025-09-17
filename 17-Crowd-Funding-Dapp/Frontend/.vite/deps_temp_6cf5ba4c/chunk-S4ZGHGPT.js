import {
  getPayBuyWithCryptoHistoryEndpoint
} from "./chunk-PHVX3XOV.js";
import {
  isAbiEvent,
  parseEventLogs,
  prepareEvent
} from "./chunk-DYKFWRMQ.js";
import {
  extractError,
  resolveContractAbi
} from "./chunk-JZC47WAY.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import {
  encode
} from "./chunk-7QDK5KLB.js";
import {
  eth_blockNumber,
  watchBlockNumber
} from "./chunk-JBQP4JIV.js";
import {
  isObjectWithKeys
} from "./chunk-3ZOYRTTJ.js";
import {
  eth_call
} from "./chunk-AG4NO6K6.js";
import {
  formatLog
} from "./chunk-LO5SQBMX.js";
import {
  decodeAbiParameters,
  formatTransactionRequest
} from "./chunk-GINVHONX.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";
import {
  numberToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getLogs.js
async function eth_getLogs(request, params = {}) {
  const topics = params.topics ?? [];
  let logs;
  if (params.blockHash) {
    const param = {
      topics,
      blockHash: params.blockHash
    };
    if (params.address) {
      param.address = params.address;
    }
    logs = await request({
      method: "eth_getLogs",
      params: [param]
    });
  } else {
    const param = { topics };
    if (params.address) {
      param.address = params.address;
    }
    if (params.fromBlock) {
      param.fromBlock = typeof params.fromBlock === "bigint" ? numberToHex(params.fromBlock) : params.fromBlock;
    }
    if (params.toBlock) {
      param.toBlock = typeof params.toBlock === "bigint" ? numberToHex(params.toBlock) : params.toBlock;
    }
    logs = await request({
      method: "eth_getLogs",
      params: [param]
    });
  }
  return logs.map((log) => formatLog(log));
}

// node_modules/thirdweb/dist/esm/transaction/types.js
function isBaseTransactionOptions(value) {
  return isObjectWithKeys(value, ["__contract"]) && isObjectWithKeys(value.__contract, ["address", "chain"]) && typeof value.__contract.address === "string";
}

// node_modules/thirdweb/dist/esm/transaction/actions/simulate.js
async function simulateTransaction(options) {
  var _a;
  const [data, to, accessList, value] = await Promise.all([
    encode(options.transaction),
    resolvePromisedValue(options.transaction.to),
    resolvePromisedValue(options.transaction.accessList),
    resolvePromisedValue(options.transaction.value)
  ]);
  const from = options.from ?? ((_a = options.account) == null ? void 0 : _a.address) ?? void 0;
  const serializedTx = formatTransactionRequest({
    data,
    from,
    to,
    value,
    accessList
  });
  const rpcRequest = getRpcClient(options.transaction);
  try {
    const result = await eth_call(rpcRequest, serializedTx);
    if (!options.transaction.__preparedMethod) {
      return result;
    }
    const prepared = await options.transaction.__preparedMethod();
    const decoded = decodeAbiParameters(prepared[2], result);
    if (Array.isArray(decoded) && decoded.length === 1) {
      return decoded[0];
    }
    return decoded;
  } catch (error) {
    throw await extractError({
      error,
      contract: options.transaction.__contract
    });
  }
}

// node_modules/thirdweb/dist/esm/event/actions/get-events.js
async function getContractEvents(options) {
  var _a;
  const { contract, events, blockRange, ...restParams } = options;
  const rpcRequest = getRpcClient(contract);
  if (restParams.blockHash && (blockRange || restParams.fromBlock || restParams.toBlock)) {
    throw new Error("Cannot specify blockHash and range simultaneously,");
  }
  const latestBlockNumber = await eth_blockNumber(rpcRequest);
  if (blockRange) {
    const { fromBlock, toBlock } = restParams;
    if (fromBlock !== void 0 && toBlock !== void 0 && BigInt(toBlock) - BigInt(fromBlock) !== BigInt(blockRange)) {
      throw new Error("Incompatible blockRange with specified fromBlock and toBlock. Please only define fromBlock or toBlock when specifying blockRange.");
    }
    if (fromBlock !== void 0) {
      restParams.toBlock = BigInt(fromBlock) + BigInt(blockRange) - 1n;
    } else if (toBlock !== void 0) {
      restParams.fromBlock = BigInt(toBlock) - BigInt(blockRange) + 1n;
    } else {
      restParams.toBlock = latestBlockNumber;
      restParams.fromBlock = latestBlockNumber - BigInt(blockRange) + 1n;
    }
  }
  let resolvedEvents = events ?? [];
  if (!(events == null ? void 0 : events.length) && !!contract) {
    if ((_a = contract.abi) == null ? void 0 : _a.length) {
      resolvedEvents = contract.abi.filter(isAbiEvent).map((abiEvent) => prepareEvent({ signature: abiEvent }));
    } else {
      const runtimeAbi = await resolveContractAbi(contract);
      resolvedEvents = runtimeAbi.filter(isAbiEvent).map((abiEvent) => prepareEvent({ signature: abiEvent }));
    }
  }
  const logsParams = events && events.length > 0 ? (
    // if we have events passed in then we use those
    events.map((e) => ({
      ...restParams,
      address: contract == null ? void 0 : contract.address,
      topics: e.topics
    }))
  ) : (
    // otherwise we want "all" events (aka not pass any topics at all)
    [{ ...restParams, address: contract == null ? void 0 : contract.address }]
  );
  const logs = await Promise.all(logsParams.map((ethLogParams) => eth_getLogs(rpcRequest, ethLogParams)));
  const flattenLogs = logs.flat().sort((a, b) => Number((a.blockNumber ?? 0n) - (b.blockNumber ?? 0n)));
  return parseEventLogs({
    logs: flattenLogs,
    events: resolvedEvents
  });
}

// node_modules/thirdweb/dist/esm/utils/retry.js
async function retry(fn, options) {
  const retries = options.retries ?? 1;
  const delay = options.delay ?? 0;
  let lastError = null;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

// node_modules/thirdweb/dist/esm/event/actions/watch-events.js
function watchContractEvents(options) {
  return watchBlockNumber({
    ...options.contract,
    /**
     * This function is called every time a new block is mined.
     * @param blockNumber - The block number of the new block.
     * @returns A promise that resolves when the function is finished.
     * @internal
     */
    onNewBlockNumber: async (blockNumber) => {
      const logs = await retry(async () => getContractEvents({
        ...options,
        // fromBlock is inclusive
        fromBlock: blockNumber,
        // toBlock is inclusive
        toBlock: blockNumber
      }), {
        retries: 3,
        delay: 500
      });
      if (logs.length) {
        options.onEvents(logs);
      }
    },
    latestBlockNumber: options.latestBlockNumber
  });
}

// node_modules/thirdweb/dist/esm/pay/buyWithCrypto/getHistory.js
async function getBuyWithCryptoHistory(params) {
  var _a;
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("walletAddress", params.walletAddress);
    queryParams.append("start", params.start.toString());
    queryParams.append("count", params.count.toString());
    const queryString = queryParams.toString();
    const url = `${getPayBuyWithCryptoHistoryEndpoint()}?${queryString}`;
    const response = await getClientFetch(params.client)(url);
    if (!response.ok) {
      (_a = response.body) == null ? void 0 : _a.cancel();
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()).result;
    return data;
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
}

export {
  eth_getLogs,
  isBaseTransactionOptions,
  simulateTransaction,
  getContractEvents,
  watchContractEvents,
  getBuyWithCryptoHistory
};
//# sourceMappingURL=chunk-S4ZGHGPT.js.map
