import {
  allowance
} from "./chunk-NKFQ2LZT.js";
import {
  approve
} from "./chunk-AWMNEQRO.js";
import "./chunk-6XF6HOWC.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import "./chunk-PK5NRJAC.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import "./chunk-CNLOA7AS.js";
import "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
import "./chunk-LO5SQBMX.js";
import {
  getAddress
} from "./chunk-EIVAOYE5.js";
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

// node_modules/thirdweb/dist/esm/extensions/erc20/write/getApprovalForTransaction.js
async function getApprovalForTransaction(options) {
  const { transaction, account } = options;
  if (!account) {
    return null;
  }
  const erc20Value = await resolvePromisedValue(transaction.erc20Value);
  if (erc20Value) {
    const target = await resolvePromisedValue(transaction.to);
    if (!target || !erc20Value.tokenAddress || getAddress(target) === getAddress(erc20Value.tokenAddress)) {
      return null;
    }
    const contract = getContract({
      address: erc20Value.tokenAddress,
      chain: transaction.chain,
      client: transaction.client
    });
    const approvedValue = await allowance({
      contract,
      owner: account.address,
      spender: target
    });
    if (approvedValue > erc20Value.amountWei) {
      return null;
    }
    return approve({
      contract,
      value: erc20Value.amountWei,
      spender: target
    });
  }
  return null;
}
export {
  getApprovalForTransaction
};
//# sourceMappingURL=getApprovalForTransaction-RG2PM2ZX.js.map
