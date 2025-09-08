import {
  fetchTokenMetadata
} from "./chunk-4U2YWK76.js";
import {
  parseNFT
} from "./chunk-NOA36MVL.js";
import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/read/totalSupply.js
var FN_SELECTOR = "0xbd85b039";
var FN_INPUTS = [
  {
    type: "uint256",
    name: "id"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
async function totalSupply(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.id]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/read/uri.js
var FN_SELECTOR2 = "0x0e89341c";
var FN_INPUTS2 = [
  {
    type: "uint256",
    name: "tokenId"
  }
];
var FN_OUTPUTS2 = [
  {
    type: "string"
  }
];
function isUriSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2]
  });
}
async function uri(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    params: [options.tokenId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/read/getNFT.js
async function getNFT(options) {
  const [tokenUri, supply] = await Promise.all([
    uri({
      contract: options.contract,
      tokenId: options.tokenId
    }),
    totalSupply({
      contract: options.contract,
      id: options.tokenId
      // in cases where the supply is not available -> fall back to 0
    }).catch(() => 0n)
  ]);
  return parseNFT(await fetchTokenMetadata({
    client: options.contract.client,
    tokenId: options.tokenId,
    tokenUri
  }).catch(() => ({
    id: options.tokenId,
    type: "ERC1155",
    uri: tokenUri
  })), {
    tokenId: options.tokenId,
    tokenUri,
    type: "ERC1155",
    owner: null,
    supply
  });
}

export {
  isUriSupported,
  getNFT
};
//# sourceMappingURL=chunk-7ETS5GH6.js.map
