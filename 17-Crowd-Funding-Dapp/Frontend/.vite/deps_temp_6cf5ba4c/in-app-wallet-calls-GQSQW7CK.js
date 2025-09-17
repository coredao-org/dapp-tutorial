import {
  randomBytesHex
} from "./chunk-S6VQW2VI.js";
import {
  sendBatchTransaction
} from "./chunk-VUXPTMXZ.js";
import {
  sendAndConfirmTransaction
} from "./chunk-ADIC4TC2.js";
import "./chunk-JTR2PIFP.js";
import "./chunk-JZC47WAY.js";
import "./chunk-CXAZLQ2Z.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-7ZCK2FX5.js";
import "./chunk-7QDK5KLB.js";
import "./chunk-UY2SRO54.js";
import {
  eth_getTransactionReceipt
} from "./chunk-JBQP4JIV.js";
import "./chunk-4OCU6WGG.js";
import "./chunk-3DBHE3NE.js";
import "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-LO5SQBMX.js";
import "./chunk-EIVAOYE5.js";
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import "./chunk-NJUWOGZE.js";
import "./chunk-TFBEDS4S.js";
import "./chunk-GOA7IGSB.js";
import "./chunk-QHKZ43P6.js";
import "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5972/in-app-wallet-calls.js
var bundlesToTransactions = new LruMap(1e3);
async function inAppWalletSendCalls(args) {
  const { account, calls } = args;
  const hashes = [];
  const bundleId = randomBytesHex(65);
  bundlesToTransactions.set(bundleId, hashes);
  if (account.sendBatchTransaction) {
    const receipt = await sendBatchTransaction({
      account,
      transactions: calls
    });
    hashes.push(receipt.transactionHash);
    bundlesToTransactions.set(bundleId, hashes);
  } else {
    for (const tx of calls) {
      const receipt = await sendAndConfirmTransaction({
        account,
        transaction: tx
      });
      hashes.push(receipt.transactionHash);
      bundlesToTransactions.set(bundleId, hashes);
    }
  }
  return bundleId;
}
async function inAppWalletGetCallsStatus(args) {
  const { wallet, client, bundleId } = args;
  const chain = wallet.getChain();
  if (!chain) {
    throw new Error("Failed to get calls status, no active chain found");
  }
  const bundle = bundlesToTransactions.get(bundleId);
  if (!bundle) {
    throw new Error("Failed to get calls status, unknown bundle id");
  }
  const request = getRpcClient({ client, chain });
  let status = "CONFIRMED";
  const receipts = await Promise.all(bundle.map((hash) => eth_getTransactionReceipt(request, { hash }).then((receipt) => ({
    logs: receipt.logs.map((l) => ({
      address: l.address,
      data: l.data,
      topics: l.topics
    })),
    status: receipt.status,
    blockHash: receipt.blockHash,
    blockNumber: receipt.blockNumber,
    gasUsed: receipt.gasUsed,
    transactionHash: receipt.transactionHash
  })).catch(() => {
    status = "PENDING";
    return null;
  })));
  return {
    status,
    receipts: receipts.filter((r) => r !== null)
    // ts 5.5 please come we need you
  };
}
export {
  inAppWalletGetCallsStatus,
  inAppWalletSendCalls
};
//# sourceMappingURL=in-app-wallet-calls-GQSQW7CK.js.map
