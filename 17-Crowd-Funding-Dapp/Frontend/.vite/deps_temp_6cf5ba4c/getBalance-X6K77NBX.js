import {
  getCurrencyMetadata
} from "./chunk-GGVPULQZ.js";
import "./chunk-6RU56BH7.js";
import "./chunk-QVNJVROL.js";
import {
  toTokens
} from "./chunk-UY2SRO54.js";
import "./chunk-673YCYST.js";
import "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
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

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/balanceOf.js
var FN_SELECTOR = "0x70a08231";
var FN_INPUTS = [
  {
    type: "address",
    name: "_address"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
async function balanceOf(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.address]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/read/getBalance.js
async function getBalance(options) {
  const [balanceWei, currencyMetadata] = await Promise.all([
    balanceOf(options),
    getCurrencyMetadata(options)
  ]);
  return {
    ...currencyMetadata,
    value: balanceWei,
    displayValue: toTokens(balanceWei, currencyMetadata.decimals)
  };
}
export {
  getBalance
};
//# sourceMappingURL=getBalance-X6K77NBX.js.map
