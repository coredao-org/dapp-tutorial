// node_modules/thirdweb/dist/esm/rpc/actions/eth_sendRawTransaction.js
async function eth_sendRawTransaction(request, signedTransaction) {
  return await request({
    method: "eth_sendRawTransaction",
    params: [signedTransaction]
  });
}

export {
  eth_sendRawTransaction
};
//# sourceMappingURL=chunk-MWAIX6LF.js.map
