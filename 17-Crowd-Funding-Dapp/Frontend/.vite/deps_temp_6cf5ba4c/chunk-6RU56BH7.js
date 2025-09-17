import {
  readContract
} from "./chunk-AG4NO6K6.js";
import {
  withCache
} from "./chunk-GOA7IGSB.js";

// node_modules/thirdweb/dist/esm/extensions/common/__generated__/IContractMetadata/read/name.js
var FN_SELECTOR = "0x06fdde03";
var FN_INPUTS = [];
var FN_OUTPUTS = [
  {
    type: "string"
  }
];
async function name(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/common/read/name.js
async function name2(options) {
  return withCache(() => name(options), {
    cacheKey: `${options.contract.chain.id}:${options.contract.address}:name`,
    // can never change, so cache forever
    cacheTime: Number.POSITIVE_INFINITY
  });
}

// node_modules/thirdweb/dist/esm/extensions/common/__generated__/IContractMetadata/read/symbol.js
var FN_SELECTOR2 = "0x95d89b41";
var FN_INPUTS2 = [];
var FN_OUTPUTS2 = [
  {
    type: "string"
  }
];
async function symbol(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/common/read/symbol.js
async function symbol2(options) {
  return withCache(() => symbol(options), {
    cacheKey: `${options.contract.chain.id}:${options.contract.address}:symbol`,
    // can never change, so cache forever
    cacheTime: Number.POSITIVE_INFINITY
  });
}

export {
  name2 as name,
  symbol2 as symbol
};
//# sourceMappingURL=chunk-6RU56BH7.js.map
