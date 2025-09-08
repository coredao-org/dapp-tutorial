import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
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
import {
  decodeAbiParameters
} from "./chunk-GINVHONX.js";
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

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721A/read/isApprovedForAll.js
var FN_SELECTOR = "0xe985e9c5";
var FN_INPUTS = [
  {
    type: "address",
    name: "owner"
  },
  {
    type: "address",
    name: "operator"
  }
];
var FN_OUTPUTS = [
  {
    type: "bool"
  }
];
function isIsApprovedForAllSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function encodeIsApprovedForAllParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.owner, options.operator]);
}
function encodeIsApprovedForAll(options) {
  return FN_SELECTOR + encodeIsApprovedForAllParams(options).slice(2);
}
function decodeIsApprovedForAllResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function isApprovedForAll(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.owner, options.operator]
  });
}
export {
  FN_SELECTOR,
  decodeIsApprovedForAllResult,
  encodeIsApprovedForAll,
  encodeIsApprovedForAllParams,
  isApprovedForAll,
  isIsApprovedForAllSupported
};
//# sourceMappingURL=isApprovedForAll-CG3FQCVQ.js.map
