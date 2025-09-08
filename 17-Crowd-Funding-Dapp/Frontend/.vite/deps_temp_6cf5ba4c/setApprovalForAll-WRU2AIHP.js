import {
  once,
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import "./chunk-QC3K2OKT.js";
import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import "./chunk-CNLOA7AS.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import {
  encodeAbiParameters
} from "./chunk-U7TO6S3N.js";
import "./chunk-LO5SQBMX.js";
import "./chunk-EIVAOYE5.js";
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-NJUWOGZE.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/write/setApprovalForAll.js
var FN_SELECTOR = "0xa22cb465";
var FN_INPUTS = [
  {
    type: "address",
    name: "_operator"
  },
  {
    type: "bool",
    name: "_approved"
  }
];
var FN_OUTPUTS = [];
function isSetApprovalForAllSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function encodeSetApprovalForAllParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.operator, options.approved]);
}
function encodeSetApprovalForAll(options) {
  return FN_SELECTOR + encodeSetApprovalForAllParams(options).slice(2);
}
function setApprovalForAll(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.operator, resolvedOptions.approved];
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
export {
  FN_SELECTOR,
  encodeSetApprovalForAll,
  encodeSetApprovalForAllParams,
  isSetApprovalForAllSupported,
  setApprovalForAll
};
//# sourceMappingURL=setApprovalForAll-WRU2AIHP.js.map
