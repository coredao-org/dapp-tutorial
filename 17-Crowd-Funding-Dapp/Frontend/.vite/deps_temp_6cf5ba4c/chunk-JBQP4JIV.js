import {
  sleep
} from "./chunk-4OCU6WGG.js";
import {
  formatTransactionReceipt
} from "./chunk-LO5SQBMX.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import {
  hexToBigInt
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_blockNumber.js
async function eth_blockNumber(request) {
  const blockNumberHex = await request({
    method: "eth_blockNumber"
  });
  return hexToBigInt(blockNumberHex);
}

// node_modules/thirdweb/dist/esm/rpc/watchBlockNumber.js
var MAX_POLL_DELAY = 5e3;
var DEFAULT_POLL_DELAY = 1e3;
var MIN_POLL_DELAY = 500;
var DEFAULT_OVERPOLL_RATIO = 2;
var SLIDING_WINDOW_SIZE = 10;
function getAverageBlockTime(blockTimes) {
  while (blockTimes.length < SLIDING_WINDOW_SIZE) {
    blockTimes.unshift(DEFAULT_POLL_DELAY);
  }
  const sum = blockTimes.reduce((acc, blockTime) => acc + blockTime, 0);
  return sum / blockTimes.length;
}
function createBlockNumberPoller(client, chain, overPollRatio, onError) {
  let subscribers = [];
  let blockTimesWindow = [];
  let isActive = false;
  let lastBlockNumber;
  let lastBlockAt;
  const rpcRequest = getRpcClient({ client, chain });
  async function poll() {
    if (!isActive) {
      return;
    }
    try {
      const blockNumber = await eth_blockNumber(rpcRequest);
      if (!lastBlockNumber || blockNumber > lastBlockNumber) {
        let newBlockNumbers = [];
        if (lastBlockNumber) {
          for (let i = lastBlockNumber + 1n; i <= blockNumber; i++) {
            newBlockNumbers.push(BigInt(i));
          }
        } else {
          newBlockNumbers = [blockNumber];
        }
        lastBlockNumber = blockNumber;
        const currentTime = (/* @__PURE__ */ new Date()).getTime();
        if (lastBlockAt) {
          const blockTime = (currentTime - lastBlockAt) / newBlockNumbers.length;
          blockTimesWindow.push(blockTime);
          blockTimesWindow = blockTimesWindow.slice(-SLIDING_WINDOW_SIZE);
        }
        lastBlockAt = currentTime;
        for (const b of newBlockNumbers) {
          for (const subscriberCallback of subscribers) {
            subscriberCallback(b);
          }
        }
      }
    } catch (err) {
      if (onError) {
        onError(err);
      } else {
        console.error(`[watchBlockNumber]: Failed to poll for latest block number: ${err}`);
      }
    }
    const currentApproximateBlockTime = getAverageBlockTime(blockTimesWindow);
    const pollDelay = Math.max(MIN_POLL_DELAY, Math.min(MAX_POLL_DELAY, Math.max(MIN_POLL_DELAY, currentApproximateBlockTime)));
    await sleep(pollDelay / (overPollRatio ?? DEFAULT_OVERPOLL_RATIO));
    poll();
  }
  return function subscribe(callBack, initialBlockNumber) {
    subscribers.push(callBack);
    if (!isActive) {
      lastBlockNumber = initialBlockNumber;
      isActive = true;
      poll();
    }
    return function unSubscribe() {
      subscribers = subscribers.filter((fn) => fn !== callBack);
      if (subscribers.length === 0) {
        lastBlockNumber = void 0;
        lastBlockAt = void 0;
        isActive = false;
      }
    };
  };
}
var existingPollers = /* @__PURE__ */ new Map();
function watchBlockNumber(opts) {
  const { client, chain, onNewBlockNumber, overPollRatio, latestBlockNumber, onError } = opts;
  const chainId = chain.id;
  let poller = existingPollers.get(chainId);
  if (!poller) {
    poller = createBlockNumberPoller(client, chain, overPollRatio, onError);
    existingPollers.set(chainId, poller);
  }
  return poller(onNewBlockNumber, latestBlockNumber);
}

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getTransactionReceipt.js
async function eth_getTransactionReceipt(request, params) {
  const receipt = await request({
    method: "eth_getTransactionReceipt",
    params: [params.hash]
  });
  if (!receipt) {
    throw new Error("Transaction receipt not found.");
  }
  return formatTransactionReceipt(receipt);
}

// node_modules/thirdweb/dist/esm/transaction/actions/wait-for-tx-receipt.js
var DEFAULT_MAX_BLOCKS_WAIT_TIME = 100;
var map = /* @__PURE__ */ new Map();
function waitForReceipt(options) {
  const { transactionHash, chain, client } = options;
  const chainId = chain.id;
  const key = `${chainId}:tx_${transactionHash}`;
  const maxBlocksWaitTime = options.maxBlocksWaitTime ?? DEFAULT_MAX_BLOCKS_WAIT_TIME;
  if (map.has(key)) {
    return map.get(key);
  }
  const promise = new Promise((resolve, reject) => {
    if (!transactionHash) {
      reject(new Error("Transaction has no transactionHash to wait for, did you execute it?"));
    }
    const request = getRpcClient({ client, chain });
    let blocksWaited = -1;
    const unwatch = watchBlockNumber({
      client,
      chain,
      onNewBlockNumber: async () => {
        blocksWaited++;
        if (blocksWaited >= maxBlocksWaitTime) {
          unwatch();
          reject(new Error(`Transaction not found after ${maxBlocksWaitTime} blocks`));
          return;
        }
        try {
          const receipt = await eth_getTransactionReceipt(request, {
            hash: transactionHash
          });
          unwatch();
          resolve(receipt);
        } catch {
        }
      }
    });
  }).finally(() => {
    map.delete(key);
  });
  map.set(key, promise);
  return promise;
}

export {
  eth_blockNumber,
  watchBlockNumber,
  eth_getTransactionReceipt,
  waitForReceipt
};
//# sourceMappingURL=chunk-JBQP4JIV.js.map
