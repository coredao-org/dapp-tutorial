import {
  ZERO_ADDRESS
} from "./chunk-673YCYST.js";
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
import "./chunk-LO5SQBMX.js";
import "./chunk-EIVAOYE5.js";
import {
  keccak256
} from "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import {
  encodeAbiParameters
} from "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-I5DK3TWY.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
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

// node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/biconomy.js
var BATCH_ID = 0n;
async function prepareBiconomyTransaction({ account, serializableTransaction, transaction, gasless }) {
  const forwarderContract = getContract({
    address: gasless.relayerForwarderAddress,
    chain: transaction.chain,
    client: transaction.client
  });
  const nonce = await readContract({
    contract: forwarderContract,
    method: "function getNonce(address,uint256) view returns (uint256)",
    params: [account.address, BATCH_ID]
  });
  const deadline = Math.floor(Date.now() / 1e3) + (gasless.deadlineSeconds ?? 3600);
  const request = {
    from: account.address,
    to: serializableTransaction.to,
    token: ZERO_ADDRESS,
    txGas: serializableTransaction.gas,
    tokenGasPrice: 0n,
    batchId: BATCH_ID,
    batchNonce: nonce,
    deadline,
    data: serializableTransaction.data
  };
  if (!request.to) {
    throw new Error("Cannot send a transaction without a `to` address");
  }
  if (!request.txGas) {
    throw new Error("Cannot send a transaction without a `gas` value");
  }
  if (!request.data) {
    throw new Error("Cannot send a transaction without a `data` value");
  }
  const message = encodeAbiParameters([
    { type: "address" },
    { type: "address" },
    { type: "address" },
    { type: "uint256" },
    { type: "uint256" },
    { type: "uint256" },
    { type: "uint256" },
    { type: "bytes32" }
  ], [
    request.from,
    request.to,
    request.token,
    request.txGas,
    request.tokenGasPrice,
    request.batchId,
    request.batchNonce,
    keccak256(request.data)
  ]);
  const signature = await account.signMessage({ message });
  return [request, signature];
}
async function relayBiconomyTransaction(options) {
  var _a;
  const [request, signature] = await prepareBiconomyTransaction(options);
  const response = await fetch("https://api.biconomy.io/api/v2/meta-tx/native", {
    method: "POST",
    body: stringify({
      apiId: options.gasless.apiId,
      params: [request, signature],
      from: request.from,
      to: request.to,
      gasLimit: request.txGas
    }),
    headers: {
      "x-api-key": options.gasless.apiKey,
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  if (!response.ok) {
    (_a = response.body) == null ? void 0 : _a.cancel();
    throw new Error(`Failed to send transaction: ${await response.text()}`);
  }
  const json = await response.json();
  const transactionHash = json.txHash;
  if (isHex(transactionHash)) {
    return {
      transactionHash,
      chain: options.transaction.chain,
      client: options.transaction.client
    };
  }
  throw new Error(`Failed to send transaction: ${stringify(json)}`);
}
export {
  prepareBiconomyTransaction,
  relayBiconomyTransaction
};
//# sourceMappingURL=biconomy-PIJEZ3DY.js.map
