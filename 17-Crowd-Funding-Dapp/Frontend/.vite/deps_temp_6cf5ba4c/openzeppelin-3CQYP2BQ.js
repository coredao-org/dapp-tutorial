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
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
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

// node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/openzeppelin.js
async function prepareOpenZeppelinTransaction({ account, serializableTransaction, transaction, gasless }) {
  const forrwaderContract = getContract({
    address: gasless.relayerForwarderAddress,
    chain: transaction.chain,
    client: transaction.client
  });
  const nonce = await readContract({
    contract: forrwaderContract,
    method: "function getNonce(address) view returns (uint256)",
    params: [account.address]
  });
  const [signature, message] = await (async () => {
    if (!serializableTransaction.to) {
      throw new Error("OpenZeppelin transactions must have a 'to' address");
    }
    if (!serializableTransaction.gas) {
      throw new Error("OpenZeppelin transactions must have a 'gas' value");
    }
    if (!serializableTransaction.data) {
      throw new Error("OpenZeppelin transactions must have a 'data' value");
    }
    if (gasless.experimentalChainlessSupport) {
      const message3 = {
        from: account.address,
        to: serializableTransaction.to,
        value: 0n,
        gas: serializableTransaction.gas,
        nonce,
        data: serializableTransaction.data,
        chainid: BigInt(transaction.chain.id)
      };
      return [
        await account.signTypedData({
          domain: {
            name: "GSNv2 Forwarder",
            version: "0.0.1",
            verifyingContract: forrwaderContract.address
          },
          message: message3,
          primaryType: "ForwardRequest",
          types: { ForwardRequest: ChainAwareForwardRequest }
        }),
        message3
      ];
    }
    const message2 = {
      from: account.address,
      to: serializableTransaction.to,
      value: 0n,
      gas: serializableTransaction.gas,
      nonce,
      data: serializableTransaction.data
    };
    return [
      await account.signTypedData({
        domain: {
          name: gasless.domainName ?? "GSNv2 Forwarder",
          version: gasless.domainVersion ?? "0.0.1",
          chainId: transaction.chain.id,
          verifyingContract: forrwaderContract.address
        },
        message: message2,
        primaryType: "ForwardRequest",
        types: { ForwardRequest }
      }),
      message2
    ];
  })();
  const messageType = "forward";
  return { message, signature, messageType };
}
var ForwardRequest = [
  { name: "from", type: "address" },
  { name: "to", type: "address" },
  { name: "value", type: "uint256" },
  { name: "gas", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "data", type: "bytes" }
];
var ChainAwareForwardRequest = [
  { name: "from", type: "address" },
  { name: "to", type: "address" },
  { name: "value", type: "uint256" },
  { name: "gas", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "data", type: "bytes" },
  { name: "chainid", type: "uint256" }
];
async function relayOpenZeppelinTransaction(options) {
  var _a;
  const { message, messageType, signature } = await prepareOpenZeppelinTransaction(options);
  const response = await fetch(options.gasless.relayerUrl, {
    method: "POST",
    body: stringify({
      request: message,
      type: messageType,
      signature,
      forwarderAddress: options.gasless.relayerForwarderAddress
    })
  });
  if (!response.ok) {
    (_a = response.body) == null ? void 0 : _a.cancel();
    throw new Error(`Failed to send transaction: ${await response.text()}`);
  }
  const json = await response.json();
  if (!json.result) {
    throw new Error(`Relay transaction failed: ${json.message}`);
  }
  const transactionHash = JSON.parse(json.result).txHash;
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
  prepareOpenZeppelinTransaction,
  relayOpenZeppelinTransaction
};
//# sourceMappingURL=openzeppelin-3CQYP2BQ.js.map
