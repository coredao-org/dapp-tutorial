import {
  getClaimParams
} from "./chunk-O7UPLLUM.js";
import {
  isClaimConditionSupported
} from "./chunk-253DMNI3.js";
import {
  isGetActiveClaimConditionSupported
} from "./chunk-RF65TSG5.js";
import {
  isContractURISupported
} from "./chunk-UZVZQZEM.js";
import "./chunk-6RU56BH7.js";
import "./chunk-VJFQPB47.js";
import "./chunk-VJOHABJ4.js";
import {
  once,
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-673YCYST.js";
import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import "./chunk-CNLOA7AS.js";
import "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
import "./chunk-LO5SQBMX.js";
import "./chunk-EIVAOYE5.js";
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-I5DK3TWY.js";
import "./chunk-NJUWOGZE.js";
import "./chunk-TFBEDS4S.js";
import "./chunk-GOA7IGSB.js";
import "./chunk-QHKZ43P6.js";
import "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IDrop/write/claim.js
var FN_SELECTOR = "0x84bb1e42";
var FN_INPUTS = [
  {
    type: "address",
    name: "receiver"
  },
  {
    type: "uint256",
    name: "quantity"
  },
  {
    type: "address",
    name: "currency"
  },
  {
    type: "uint256",
    name: "pricePerToken"
  },
  {
    type: "tuple",
    name: "allowlistProof",
    components: [
      {
        type: "bytes32[]",
        name: "proof"
      },
      {
        type: "uint256",
        name: "quantityLimitPerWallet"
      },
      {
        type: "uint256",
        name: "pricePerToken"
      },
      {
        type: "address",
        name: "currency"
      }
    ]
  },
  {
    type: "bytes",
    name: "data"
  }
];
var FN_OUTPUTS = [];
function isClaimSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function claim(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [
        resolvedOptions.receiver,
        resolvedOptions.quantity,
        resolvedOptions.currency,
        resolvedOptions.pricePerToken,
        resolvedOptions.allowlistProof,
        resolvedOptions.data
      ];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    },
    accessList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.accessList;
    },
    gas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gas;
    },
    gasPrice: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gasPrice;
    },
    maxFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxFeePerGas;
    },
    maxPriorityFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxPriorityFeePerGas;
    },
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    extraGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.extraGas;
    },
    erc20Value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.erc20Value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/drops/write/claimTo.js
function claimTo(options) {
  return claim({
    contract: options.contract,
    asyncParams: () => getClaimParams({
      type: "erc721",
      contract: options.contract,
      to: options.to,
      quantity: options.quantity,
      from: options.from,
      singlePhaseDrop: options.singlePhaseDrop
    })
  });
}
function isClaimToSupported(availableSelectors) {
  return isClaimSupported(availableSelectors) && // requires contractMetadata for claimer proofs
  isContractURISupported(availableSelectors) && // required to check if the contract supports the getActiveClaimCondition method
  (isGetActiveClaimConditionSupported(availableSelectors) || isClaimConditionSupported(availableSelectors));
}
export {
  claimTo,
  isClaimToSupported
};
//# sourceMappingURL=claimTo-LNJZHHT3.js.map
