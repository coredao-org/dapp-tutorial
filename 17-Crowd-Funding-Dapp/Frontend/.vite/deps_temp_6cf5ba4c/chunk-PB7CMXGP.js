import {
  eth_getCode
} from "./chunk-NPXNISXJ.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";

// node_modules/thirdweb/dist/esm/contract/actions/get-bytecode.js
var BYTECODE_CACHE = /* @__PURE__ */ new WeakMap();
function getBytecode(contract) {
  if (BYTECODE_CACHE.has(contract)) {
    return BYTECODE_CACHE.get(contract);
  }
  const prom = (async () => {
    const rpcRequest = getRpcClient(contract);
    const result = await eth_getCode(rpcRequest, {
      address: contract.address,
      blockTag: "latest"
    });
    if (result === "0x") {
      BYTECODE_CACHE.delete(contract);
    }
    return result;
  })();
  BYTECODE_CACHE.set(contract, prom);
  return prom;
}

export {
  getBytecode
};
//# sourceMappingURL=chunk-PB7CMXGP.js.map
