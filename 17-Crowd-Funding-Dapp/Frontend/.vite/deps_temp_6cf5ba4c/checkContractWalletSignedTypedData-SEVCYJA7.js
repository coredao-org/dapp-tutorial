import {
  isValidSignature
} from "./chunk-U55JVTZU.js";
import "./chunk-PK5NRJAC.js";
import "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
import {
  hashTypedData
} from "./chunk-LO5SQBMX.js";
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
import {
  isHex
} from "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/extensions/erc1271/checkContractWalletSignedTypedData.js
var MAGIC_VALUE = "0x1626ba7e";
async function checkContractWalletSignedTypedData(options) {
  if (!isHex(options.signature)) {
    throw new Error("The signature must be a valid hex string.");
  }
  const result = await isValidSignature({
    contract: options.contract,
    hash: hashTypedData(options.data),
    signature: options.signature
  });
  return result === MAGIC_VALUE;
}
export {
  checkContractWalletSignedTypedData
};
//# sourceMappingURL=checkContractWalletSignedTypedData-SEVCYJA7.js.map
