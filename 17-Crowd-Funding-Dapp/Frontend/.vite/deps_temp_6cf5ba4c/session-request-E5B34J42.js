import {
  handleSendRawTransactionRequest,
  handleSendTransactionRequest,
  handleSignRequest,
  handleSignTransactionRequest,
  handleSignTypedDataRequest,
  parseEip155ChainId
} from "./chunk-5THTWD2M.js";
import "./chunk-JTR2PIFP.js";
import "./chunk-JZC47WAY.js";
import "./chunk-CXAZLQ2Z.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-7ZCK2FX5.js";
import "./chunk-7QDK5KLB.js";
import "./chunk-UY2SRO54.js";
import "./chunk-3DBHE3NE.js";
import "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import "./chunk-CNLOA7AS.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
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

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-request.js
async function fulfillRequest(options) {
  const { wallet, walletConnectClient, thirdwebClient, event: { topic, id, params: { chainId: rawChainId, request } }, handlers } = options;
  const account = wallet.getAccount();
  if (!account) {
    throw new Error("No account connected to provided wallet");
  }
  let result;
  try {
    switch (request.method) {
      case "personal_sign": {
        if (handlers == null ? void 0 : handlers.personal_sign) {
          result = await handlers.personal_sign({
            account,
            params: request.params
          });
        } else {
          result = await handleSignRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_sign": {
        if (handlers == null ? void 0 : handlers.eth_sign) {
          result = await handlers.eth_sign({
            account,
            params: request.params
          });
        } else {
          result = await handleSignRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_signTypedData": {
        if (handlers == null ? void 0 : handlers.eth_signTypedData) {
          result = await handlers.eth_signTypedData({
            account,
            params: request.params
          });
        } else {
          result = await handleSignTypedDataRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_signTypedData_v4": {
        if (handlers == null ? void 0 : handlers.eth_signTypedData_v4) {
          result = await handlers.eth_signTypedData_v4({
            account,
            params: request.params
          });
        } else {
          result = await handleSignTypedDataRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_signTransaction": {
        if (handlers == null ? void 0 : handlers.eth_signTransaction) {
          result = await handlers.eth_signTransaction({
            account,
            params: request.params
          });
        } else {
          result = await handleSignTransactionRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_sendTransaction": {
        const chainId = parseEip155ChainId(rawChainId);
        if (handlers == null ? void 0 : handlers.eth_sendTransaction) {
          result = await handlers.eth_sendTransaction({
            account,
            chainId,
            params: request.params
          });
        } else {
          result = await handleSendTransactionRequest({
            account,
            chainId,
            thirdwebClient,
            params: request.params
          });
        }
        break;
      }
      case "eth_sendRawTransaction": {
        const chainId = parseEip155ChainId(rawChainId);
        if (handlers == null ? void 0 : handlers.eth_sendRawTransaction) {
          result = await handlers.eth_sendRawTransaction({
            account,
            chainId,
            params: request.params
          });
        } else {
          result = await handleSendRawTransactionRequest({
            account,
            chainId,
            params: request.params
          });
        }
        break;
      }
      case "wallet_addEthereumChain": {
        if (handlers == null ? void 0 : handlers.wallet_addEthereumChain) {
          result = await handlers.wallet_addEthereumChain({
            wallet,
            params: request.params
          });
        } else {
          throw new Error("Unsupported request method: wallet_addEthereumChain");
        }
        break;
      }
      case "wallet_switchEthereumChain": {
        if (handlers == null ? void 0 : handlers.wallet_switchEthereumChain) {
          result = await handlers.wallet_switchEthereumChain({
            wallet,
            params: request.params
          });
        } else {
          const { handleSwitchChain } = await import("./switch-chain-UAQT4AB6.js");
          result = await handleSwitchChain({
            wallet,
            params: request.params
          });
        }
        break;
      }
      default: {
        const potentialHandler = handlers == null ? void 0 : handlers[request.method];
        if (potentialHandler) {
          result = await potentialHandler({
            account,
            chainId: parseEip155ChainId(rawChainId),
            params: request.params
          });
        } else {
          throw new Error(`Unsupported request method: ${request.method}`);
        }
      }
    }
  } catch (error) {
    result = {
      code: typeof error === "object" && error !== null && "code" in error ? error.code : 500,
      message: typeof error === "object" && error !== null && "message" in error ? error.message : "Unknown error"
    };
  }
  walletConnectClient.respond({
    topic,
    response: {
      id,
      jsonrpc: "2.0",
      result
    }
  });
}
export {
  fulfillRequest
};
//# sourceMappingURL=session-request-E5B34J42.js.map
