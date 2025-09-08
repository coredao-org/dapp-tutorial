import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import {
  encodeAbiParameters
} from "./chunk-U7TO6S3N.js";
import {
  decodeAbiParameters
} from "./chunk-GINVHONX.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IDropSinglePhase1155/read/claimCondition.js
var FN_SELECTOR = "0xe9703d25";
var FN_INPUTS = [
  {
    type: "uint256",
    name: "tokenId"
  }
];
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
function encodeClaimConditionParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.tokenId]);
}
function encodeClaimCondition(options) {
  return FN_SELECTOR + encodeClaimConditionParams(options).slice(2);
}
function decodeClaimConditionResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function claimCondition(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.tokenId]
  });
}

export {
  FN_SELECTOR,
  isClaimConditionSupported,
  encodeClaimConditionParams,
  encodeClaimCondition,
  decodeClaimConditionResult,
  claimCondition
};
//# sourceMappingURL=chunk-HJ6E36KT.js.map
