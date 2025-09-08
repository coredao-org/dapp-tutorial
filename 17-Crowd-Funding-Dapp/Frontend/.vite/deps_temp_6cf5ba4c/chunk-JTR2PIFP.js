import {
  toSerializableTransaction
} from "./chunk-JZC47WAY.js";
import {
  addTransactionToStore
} from "./chunk-3DBHE3NE.js";

// node_modules/thirdweb/dist/esm/utils/config.js
var transactionDecorator = null;
function getTransactionDecorator() {
  return transactionDecorator;
}

// node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js
async function sendTransaction(options) {
  let { account, transaction, gasless } = options;
  const decorator = getTransactionDecorator();
  if (decorator) {
    const { account: decoratedAccount, transaction: decoratedTransaction } = await decorator({ account, transaction });
    account = decoratedAccount;
    transaction = decoratedTransaction;
  }
  if (account.onTransactionRequested) {
    await account.onTransactionRequested(transaction);
  }
  if (transaction.eip712) {
    const { sendEip712Transaction } = await import("./send-eip712-transaction-GJNL63UQ.js");
    return sendEip712Transaction({
      account,
      transaction
    });
  }
  const serializableTransaction = await toSerializableTransaction({
    transaction,
    from: account.address
  });
  if (gasless) {
    const { sendGaslessTransaction } = await import("./send-gasless-transaction-VPJQYCQ5.js");
    return sendGaslessTransaction({
      account,
      transaction,
      serializableTransaction,
      gasless
    });
  }
  const result = await account.sendTransaction(serializableTransaction);
  addTransactionToStore({
    address: account.address,
    transactionHash: result.transactionHash,
    chainId: transaction.chain.id
  });
  return { ...result, chain: transaction.chain, client: transaction.client };
}

export {
  sendTransaction
};
//# sourceMappingURL=chunk-JTR2PIFP.js.map
