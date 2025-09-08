import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import {
  decodeAbiParameters
} from "./chunk-GINVHONX.js";

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IDropSinglePhase/read/claimCondition.js
var FN_SELECTOR = "0xd637ed59";
var FN_INPUTS = [];
var FN_OUTPUTS = [
  {
    type: "tuple",
    name: "condition",
    components: [
      {
        type: "uint256",
        name: "startTimestamp"
      },
      {
        type: "uint256",
        name: "maxClaimableSupply"
      },
      {
        type: "uint256",
        name: "supplyClaimed"
      },
      {
        type: "uint256",
        name: "quantityLimitPerWallet"
      },
      {
        type: "bytes32",
        name: "merkleRoot"
      },
      {
        type: "uint256",
        name: "pricePerToken"
      },
      {
        type: "address",
        name: "currency"
      },
      {
        type: "string",
        name: "metadata"
      }
    ]
  }
];
function isClaimConditionSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function decodeClaimConditionResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function claimCondition(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: []
  });
}

export {
  FN_SELECTOR,
  isClaimConditionSupported,
  decodeClaimConditionResult,
  claimCondition
};
//# sourceMappingURL=chunk-253DMNI3.js.map
