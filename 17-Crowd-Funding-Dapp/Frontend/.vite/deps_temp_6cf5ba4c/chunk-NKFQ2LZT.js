import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/allowance.js
var FN_SELECTOR = "0xdd62ed3e";
var FN_INPUTS = [
  {
    type: "address",
    name: "owner"
  },
  {
    type: "address",
    name: "spender"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
async function allowance(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.owner, options.spender]
  });
}

export {
  allowance
};
//# sourceMappingURL=chunk-NKFQ2LZT.js.map
