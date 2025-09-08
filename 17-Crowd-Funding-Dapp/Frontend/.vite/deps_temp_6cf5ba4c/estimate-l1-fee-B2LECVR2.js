import {
  toSerializableTransaction
} from "./chunk-JZC47WAY.js";
import "./chunk-CXAZLQ2Z.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-7ZCK2FX5.js";
import "./chunk-7QDK5KLB.js";
import "./chunk-UY2SRO54.js";
import "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
import {
  serializeTransaction
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
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/gas/estimate-l1-fee.js
var OPStackGasPriceOracleAddress = "0x420000000000000000000000000000000000000F";
async function estimateL1Fee(options) {
  const { transaction, gasPriceOracleAddress } = options;
  const oracleContract = getContract({
    client: transaction.client,
    address: gasPriceOracleAddress || OPStackGasPriceOracleAddress,
    chain: transaction.chain
  });
  const { gasPrice, ...serializableTx } = await toSerializableTransaction({
    transaction
  });
  const serialized = serializeTransaction({
    ...serializableTx,
    type: "eip1559"
  });
  return readContract({
    contract: oracleContract,
    method: "function getL1Fee(bytes memory _data) view returns (uint256)",
    params: [serialized]
  });
}
export {
  estimateL1Fee
};
//# sourceMappingURL=estimate-l1-fee-B2LECVR2.js.map
