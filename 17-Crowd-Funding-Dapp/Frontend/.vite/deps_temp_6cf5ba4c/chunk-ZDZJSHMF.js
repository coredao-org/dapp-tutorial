import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IDropERC20/read/getActiveClaimConditionId.js
var FN_SELECTOR = "0xc68907de";
var FN_INPUTS = [];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
function isGetActiveClaimConditionIdSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function getActiveClaimConditionId(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IDropERC20/read/getClaimConditionById.js
var FN_SELECTOR2 = "0x6f8934f4";
var FN_INPUTS2 = [
  {
    type: "uint256",
    name: "_conditionId"
  }
];
var FN_OUTPUTS2 = [
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
function isGetClaimConditionByIdSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2]
  });
}
async function getClaimConditionById(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    params: [options.conditionId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/drops/read/getActiveClaimCondition.js
async function getActiveClaimCondition(options) {
  try {
    const conditionId = await getActiveClaimConditionId(options);
    return getClaimConditionById({ ...options, conditionId });
  } catch {
    throw new Error("Claim condition not found");
  }
}
function isGetActiveClaimConditionSupported(availableSelectors) {
  return isGetActiveClaimConditionIdSupported(availableSelectors) && isGetClaimConditionByIdSupported(availableSelectors);
}

export {
  getActiveClaimCondition,
  isGetActiveClaimConditionSupported
};
//# sourceMappingURL=chunk-ZDZJSHMF.js.map
