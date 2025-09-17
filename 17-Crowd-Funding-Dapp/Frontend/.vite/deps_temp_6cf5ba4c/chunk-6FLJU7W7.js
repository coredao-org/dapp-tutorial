// node_modules/thirdweb/dist/esm/utils/arweave.js
var DEFAULT_GATEWAY = "https://arweave.net/{fileId}";
function resolveArweaveScheme(options) {
  if (options.uri.startsWith("ar://")) {
    const fileId = options.uri.replace("ar://", "");
    if (options.gatewayUrl) {
      const separator = options.gatewayUrl.endsWith("/") ? "" : "/";
      return `${options.gatewayUrl}${separator}${fileId}`;
    }
    return DEFAULT_GATEWAY.replace("{fileId}", fileId);
  }
  if (options.uri.startsWith("http")) {
    return options.uri;
  }
  throw new Error(`Invalid URI scheme, expected "ar://" or "http(s)://"`);
}

export {
  resolveArweaveScheme
};
//# sourceMappingURL=chunk-6FLJU7W7.js.map
