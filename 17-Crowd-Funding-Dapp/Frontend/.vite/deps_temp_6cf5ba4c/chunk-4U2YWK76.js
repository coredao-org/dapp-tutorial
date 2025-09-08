import {
  isBase64JSON,
  parseBase64String
} from "./chunk-VJFQPB47.js";
import {
  numberToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/utils/nft/fetchTokenMetadata.js
async function fetchTokenMetadata(options) {
  const { client, tokenId, tokenUri } = options;
  if (isBase64JSON(tokenUri)) {
    try {
      return JSON.parse(parseBase64String(tokenUri));
    } catch (e) {
      console.error("Failed to fetch base64 encoded NFT", { tokenId, tokenUri }, e);
      throw e;
    }
  }
  const { download } = await import("./download-F3MJUB7B.js");
  try {
    if (!tokenUri.includes("{id}")) {
      return await (await download({ client, uri: tokenUri })).json();
    }
  } catch (e) {
    console.error("Failed to fetch non-dynamic NFT", { tokenId, tokenUri }, e);
    throw e;
  }
  try {
    try {
      return await (await download({
        client,
        uri: tokenUri.replace("{id}", numberToHex(tokenId, { size: 32 }).slice(2))
      })).json();
    } catch {
      return await (await download({
        client,
        uri: tokenUri.replace("{id}", tokenId.toString())
      })).json();
    }
  } catch (e) {
    console.error("Failed to fetch dynamic NFT", { tokenId, tokenUri }, e);
    throw e;
  }
}

export {
  fetchTokenMetadata
};
//# sourceMappingURL=chunk-4U2YWK76.js.map
