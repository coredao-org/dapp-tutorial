import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/decimals.js
var FN_SELECTOR = "0x313ce567";
var FN_INPUTS = [];
var FN_OUTPUTS = [
  {
    type: "uint8"
  }
];
function isDecimalsSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function decimals(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: []
  });
}

export {
  isDecimalsSupported,
  decimals
};
//# sourceMappingURL=chunk-QVNJVROL.js.map
