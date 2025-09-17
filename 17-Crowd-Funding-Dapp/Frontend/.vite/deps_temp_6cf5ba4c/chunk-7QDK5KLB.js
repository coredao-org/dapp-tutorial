// node_modules/thirdweb/dist/esm/transaction/actions/encode.js
var encodeWeakMap = /* @__PURE__ */ new WeakMap();
async function encode(transaction) {
  if (encodeWeakMap.has(transaction)) {
    return encodeWeakMap.get(transaction);
  }
  const promise = (async () => {
    const [data, extraData, { concatHex }] = await Promise.all([
      getDataFromTx(transaction),
      getExtraCallDataFromTx(transaction),
      import("./concat-hex-2F4R6DIF.js")
    ]);
    if (extraData) {
      return concatHex([data, extraData]);
    }
    return data;
  })();
  encodeWeakMap.set(transaction, promise);
  return promise;
}
async function getDataFromTx(transaction) {
  if (transaction.data === void 0) {
    return "0x";
  }
  if (typeof transaction.data === "function") {
    const data = await transaction.data();
    if (!data) {
      return "0x";
    }
    return data;
  }
  return transaction.data;
}
async function getExtraCallDataFromTx(transaction) {
  if (!transaction.extraCallData) {
    return void 0;
  }
  if (typeof transaction.extraCallData === "function") {
    const extraData = await transaction.extraCallData();
    if (!extraData)
      return void 0;
    if (!extraData.startsWith("0x")) {
      throw Error("Invalid extra calldata - must be a hex string");
    }
    if (extraData === "0x") {
      return void 0;
    }
    return extraData;
  }
  if (!transaction.extraCallData.startsWith("0x")) {
    throw Error("Invalid extra calldata - must be a hex string");
  }
  return transaction.extraCallData;
}

export {
  encode,
  getDataFromTx,
  getExtraCallDataFromTx
};
//# sourceMappingURL=chunk-7QDK5KLB.js.map
