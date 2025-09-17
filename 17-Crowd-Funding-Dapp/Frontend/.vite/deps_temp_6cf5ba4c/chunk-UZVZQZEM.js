import {
  name,
  symbol
} from "./chunk-6RU56BH7.js";
import {
  isBase64JSON,
  parseBase64String
} from "./chunk-VJFQPB47.js";
import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/utils/contract/fetchContractMetadata.js
async function fetchContractMetadata(options) {
  const { client, uri } = options;
  if (isBase64JSON(uri)) {
    try {
      return JSON.parse(parseBase64String(uri));
    } catch (e) {
      console.error("Failed to decode base64 encoded contract metadata", { uri }, e);
      return void 0;
    }
  }
  const { download } = await import("./download-F3MJUB7B.js");
  return await (await download({ client, uri })).json();
}

// node_modules/thirdweb/dist/esm/extensions/common/__generated__/IContractMetadata/read/contractURI.js
var FN_SELECTOR = "0xe8a3d485";
var FN_INPUTS = [];
var FN_OUTPUTS = [
  {
    type: "string"
  }
];
function isContractURISupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function contractURI(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/common/read/getContractMetadata.js
async function getContractMetadata(options) {
  const [resolvedMetadata, resolvedName, resolvedSymbol] = await Promise.all([
    contractURI(options).then((uri) => {
      if (uri) {
        return fetchContractMetadata({
          client: options.contract.client,
          uri
        });
      }
      return null;
    }).catch(() => null),
    name(options).catch(() => null),
    symbol(options).catch(() => null)
  ]);
  return {
    ...resolvedMetadata,
    name: (resolvedMetadata == null ? void 0 : resolvedMetadata.name) ?? resolvedName,
    symbol: (resolvedMetadata == null ? void 0 : resolvedMetadata.symbol) ?? resolvedSymbol
  };
}

export {
  isContractURISupported,
  getContractMetadata
};
//# sourceMappingURL=chunk-UZVZQZEM.js.map
