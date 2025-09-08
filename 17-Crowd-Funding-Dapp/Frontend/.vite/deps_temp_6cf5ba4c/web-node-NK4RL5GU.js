import {
  getThirdwebDomains
} from "./chunk-QHKZ43P6.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/storage/upload/web-node.js
async function uploadBatch(client, form, fileNames, options) {
  var _a;
  const headers = {};
  const res = await getClientFetch(client)(`https://${getThirdwebDomains().storage}/ipfs/upload`, {
    method: "POST",
    headers,
    body: form
  });
  if (!res.ok) {
    (_a = res.body) == null ? void 0 : _a.cancel();
    if (res.status === 401) {
      throw new Error("Unauthorized - You don't have permission to use this service.");
    }
    if (res.status === 402) {
      throw new Error("You have reached your storage limit. Please add a valid payment method to continue using the service.");
    }
    if (res.status === 403) {
      throw new Error("Forbidden - You don't have permission to use this service.");
    }
    throw new Error(`Failed to upload files to IPFS - ${res.status} - ${res.statusText}`);
  }
  const body = await res.json();
  const cid = body.IpfsHash;
  if (!cid) {
    throw new Error("Failed to upload files to IPFS - Bad CID");
  }
  if (options == null ? void 0 : options.uploadWithoutDirectory) {
    return [`ipfs://${cid}`];
  }
  return fileNames.map((name) => `ipfs://${cid}/${name}`);
}
export {
  uploadBatch
};
//# sourceMappingURL=web-node-NK4RL5GU.js.map
