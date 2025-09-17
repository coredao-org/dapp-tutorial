import {
  hexToBigInt
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_estimateGas.js
async function eth_estimateGas(request, transactionRequest) {
  const estimateResult = await request({
    method: "eth_estimateGas",
    params: [transactionRequest]
  });
  return hexToBigInt(estimateResult);
}

export {
  eth_estimateGas
};
//# sourceMappingURL=chunk-IMSXM5CF.js.map
