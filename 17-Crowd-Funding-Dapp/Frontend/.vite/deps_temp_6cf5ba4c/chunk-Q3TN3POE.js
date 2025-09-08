import {
  getBytecode
} from "./chunk-PB7CMXGP.js";

// node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js
var cache = /* @__PURE__ */ new WeakSet();
async function isContractDeployed(contract) {
  if (cache.has(contract)) {
    return true;
  }
  const bytecode = await getBytecode(contract);
  const isDeployed = bytecode !== "0x";
  if (isDeployed) {
    cache.add(contract);
  }
  return isDeployed;
}

export {
  isContractDeployed
};
//# sourceMappingURL=chunk-Q3TN3POE.js.map
