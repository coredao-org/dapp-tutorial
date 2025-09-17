import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IDrop1155/read/getActiveClaimConditionId.js
var FN_SELECTOR = "0x5ab063e8";
var FN_INPUTS = [
  {
    type: "uint256",
    name: "_tokenId"
  }
];
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
    params: [options.tokenId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IDrop1155/read/getClaimConditionById.js
var FN_SELECTOR2 = "0xd45b28d7";
var FN_INPUTS2 = [
  {
    type: "uint256",
    name: "_tokenId"
  },
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
    params: [options.tokenId, options.conditionId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/drops/read/getActiveClaimCondition.js
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
//# sourceMappingURL=chunk-OHYFITXC.js.map
