import {
  hexToNumber,
  isHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/wallets/utils/chains.js
function getValidPublicRPCUrl(chain) {
  return getValidChainRPCs(chain).map((rpc) => {
    try {
      const url = new URL(rpc);
      if (url.hostname.endsWith(".thirdweb.com")) {
        url.pathname = "";
        url.search = "";
      }
      return url.toString();
    } catch {
      return rpc;
    }
  });
}
function getValidChainRPCs(chain, clientId, mode = "http") {
  const processedRPCs = [];
  for (const rpc of chain.rpc) {
    if (mode === "http" && !rpc.startsWith("http")) {
      continue;
    }
    if (mode === "ws" && !rpc.startsWith("ws")) {
      continue;
    }
    if (rpc.includes("${THIRDWEB_API_KEY}")) {
      if (clientId) {
        processedRPCs.push(rpc.replace("${THIRDWEB_API_KEY}", clientId) + (typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? (
          // @ts-expect-error
          `/?bundleId=${globalThis.APP_BUNDLE_ID}`
        ) : ""));
      } else {
        processedRPCs.push(rpc.replace("${THIRDWEB_API_KEY}", ""));
      }
    } else if (rpc.includes("${")) {
    } else {
      processedRPCs.push(rpc);
    }
  }
  if (processedRPCs.length === 0) {
    throw new Error(`No RPC available for chainId "${chain.chainId}" with mode ${mode}`);
  }
  return processedRPCs;
}

// node_modules/thirdweb/dist/esm/wallets/utils/normalizeChainId.js
function normalizeChainId(chainId) {
  if (typeof chainId === "number") {
    return chainId;
  }
  if (isHex(chainId)) {
    return hexToNumber(chainId);
  }
  if (typeof chainId === "bigint") {
    return Number(chainId);
  }
  return Number.parseInt(chainId, 10);
}

export {
  getValidPublicRPCUrl,
  normalizeChainId
};
//# sourceMappingURL=chunk-7AY3QZZV.js.map
