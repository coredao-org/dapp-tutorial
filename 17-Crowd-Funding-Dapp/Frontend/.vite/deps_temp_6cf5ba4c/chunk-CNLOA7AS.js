// node_modules/thirdweb/dist/esm/transaction/prepare-transaction.js
function prepareTransaction(options, info) {
  if (info) {
    options.__preparedMethod = info.preparedMethod;
    options.__contract = info.contract;
  }
  return options;
}

export {
  prepareTransaction
};
//# sourceMappingURL=chunk-CNLOA7AS.js.map
