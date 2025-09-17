// node_modules/thirdweb/dist/esm/utils/ipfs.js
var DEFAULT_GATEWAY = "https://{clientId}.ipfscdn.io/ipfs/{cid}";
function resolveScheme(options) {
  var _a, _b;
  if (options.uri.startsWith("ipfs://")) {
    const gateway = ((_b = (_a = options.client.config) == null ? void 0 : _a.storage) == null ? void 0 : _b.gatewayUrl) ?? DEFAULT_GATEWAY;
    const clientId = options.client.clientId;
    const cid = findIPFSCidFromUri(options.uri);
    let bundleId = void 0;
    if (typeof globalThis !== "undefined" && "Application" in globalThis) {
      bundleId = globalThis.Application.applicationId;
    }
    return `${gateway.replace("{clientId}", clientId).split("/ipfs")[0]}/ipfs/${cid}${bundleId ? `?bundleId=${bundleId}` : ""}`;
  }
  if (options.uri.startsWith("http")) {
    return options.uri;
  }
  throw new Error(`Invalid URI scheme, expected "ipfs://" or "http(s)://"`);
}
function findIPFSCidFromUri(uri) {
  if (!uri.startsWith("ipfs://")) {
    return uri;
  }
  const firstIndex = uri.search(/\/(Qm|baf)/i);
  return uri.slice(firstIndex + 1);
}

export {
  resolveScheme
};
//# sourceMappingURL=chunk-ZNEQLT5Q.js.map
