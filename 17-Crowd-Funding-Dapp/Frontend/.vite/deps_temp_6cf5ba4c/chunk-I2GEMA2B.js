import {
  track
} from "./chunk-N24CESYN.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";

// node_modules/thirdweb/dist/esm/analytics/track/transaction.js
async function trackTransaction(args) {
  return trackTransactionEvent({
    ...args,
    action: "transaction:sent"
  });
}
function trackTransactionEvent(args) {
  return track({
    client: args.client,
    ecosystem: args.ecosystem,
    data: {
      action: args.action,
      clientId: args.client.clientId,
      chainId: args.chainId,
      transactionHash: args.transactionHash,
      walletAddress: args.walletAddress,
      walletType: args.walletType,
      contractAddress: args.contractAddress,
      functionName: args.functionName,
      gasPrice: args.gasPrice,
      errorCode: stringify(args.error)
    }
  });
}

export {
  trackTransaction
};
//# sourceMappingURL=chunk-I2GEMA2B.js.map
