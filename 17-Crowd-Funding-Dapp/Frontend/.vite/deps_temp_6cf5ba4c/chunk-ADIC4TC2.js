import {
  sendTransaction
} from "./chunk-JTR2PIFP.js";
import {
  waitForReceipt
} from "./chunk-JBQP4JIV.js";

// node_modules/thirdweb/dist/esm/transaction/actions/send-and-confirm-transaction.js
async function sendAndConfirmTransaction(options) {
  const submittedTx = await sendTransaction(options);
  return waitForReceipt(submittedTx);
}

export {
  sendAndConfirmTransaction
};
//# sourceMappingURL=chunk-ADIC4TC2.js.map
