import {
  detectOS,
  detectPlatform
} from "./chunk-P7ZDTV2E.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";

// node_modules/thirdweb/dist/esm/version.js
var version = "5.68.0";

// node_modules/thirdweb/dist/esm/utils/jwt/is-jwt.js
function isJWT(str) {
  return str.split(".").length === 3;
}

// node_modules/thirdweb/dist/esm/utils/process.js
var IS_DEV = (
  // biome-ignore lint/nursery/noProcessEnv: ok in this file
  true
);

// node_modules/thirdweb/dist/esm/utils/fetch.js
var DEFAULT_REQUEST_TIMEOUT = 6e4;
function getClientFetch(client, ecosystem) {
  async function fetchWithHeaders(url, init) {
    const { requestTimeoutMs = DEFAULT_REQUEST_TIMEOUT, ...restInit } = init || {};
    let headers = restInit.headers ? new Headers(restInit.headers) : void 0;
    if (isThirdwebUrl(url)) {
      if (!headers) {
        headers = new Headers();
      }
      const authToken = client.secretKey && isJWT(client.secretKey) ? client.secretKey : void 0;
      const secretKey = client.secretKey && !isJWT(client.secretKey) ? client.secretKey : void 0;
      const clientId = client.clientId;
      if (authToken && !isPayUrl(url) && !isInAppWalletUrl(url) && !isBundlerUrl(url)) {
        headers.set("authorization", `Bearer ${authToken}`);
      } else if (secretKey) {
        headers.set("x-secret-key", secretKey);
      } else if (clientId) {
        headers.set("x-client-id", clientId);
      }
      if (ecosystem) {
        headers.set("x-ecosystem-id", ecosystem.id);
        if (ecosystem.partnerId) {
          headers.set("x-ecosystem-partner-id", ecosystem.partnerId);
        }
      }
      for (const [key, value] of getPlatformHeaders()) {
        headers.set(key, value);
      }
    }
    let controller;
    let abortTimeout;
    if (requestTimeoutMs) {
      controller = new AbortController();
      abortTimeout = setTimeout(() => {
        controller == null ? void 0 : controller.abort("timeout");
      }, requestTimeoutMs);
    }
    return fetch(url, {
      ...restInit,
      headers,
      signal: controller == null ? void 0 : controller.signal
    }).finally(() => {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    });
  }
  return fetchWithHeaders;
}
var THIRDWEB_DOMAINS = [
  ".thirdweb.com",
  ".ipfscdn.io",
  // dev domains
  ".thirdweb.dev",
  ".thirdweb-dev.com"
];
var IS_THIRDWEB_URL_CACHE = new LruMap(4096);
function isThirdwebUrl(url) {
  if (IS_THIRDWEB_URL_CACHE.has(url)) {
    return IS_THIRDWEB_URL_CACHE.get(url);
  }
  try {
    const { hostname } = new URL(url);
    try {
      if (IS_DEV) {
        if (hostname === "localhost") {
          IS_THIRDWEB_URL_CACHE.set(url, true);
          return true;
        }
      }
    } catch {
    }
    const is = THIRDWEB_DOMAINS.some((domain) => hostname.endsWith(domain));
    IS_THIRDWEB_URL_CACHE.set(url, is);
    return is;
  } catch {
    IS_THIRDWEB_URL_CACHE.set(url, false);
    return false;
  }
}
function isPayUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.startsWith("pay.");
  } catch {
    return false;
  }
}
function isInAppWalletUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.startsWith("in-app-wallet.") || hostname.startsWith("embedded-wallet.");
  } catch {
    return false;
  }
}
function isBundlerUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.endsWith(".bundler.thirdweb.com") || hostname.endsWith(".bundler.thirdweb-dev.com");
  } catch {
    return false;
  }
}
var SDK_NAME = "unified-sdk";
var previousPlatform;
function getPlatformHeaders() {
  if (previousPlatform) {
    return previousPlatform;
  }
  let os = null;
  if (typeof navigator !== "undefined") {
    os = detectOS(navigator.userAgent);
  }
  let bundleId = void 0;
  if (typeof globalThis !== "undefined" && "Application" in globalThis) {
    bundleId = globalThis.Application.applicationId;
  }
  previousPlatform = Object.entries({
    "x-sdk-platform": detectPlatform(),
    "x-sdk-version": version,
    "x-sdk-os": os ? parseOs(os) : "unknown",
    "x-sdk-name": SDK_NAME,
    ...bundleId ? { "x-bundle-id": bundleId } : {}
  });
  return previousPlatform;
}
function parseOs(os) {
  const osLowerCased = os.toLowerCase();
  if (osLowerCased.startsWith("win")) {
    return "win";
  }
  switch (os) {
    case "Mac OS":
      return "mac";
    case "iOS":
      return "ios";
    case "Android OS":
      return "android";
    default:
      return osLowerCased.replace(/\s/gi, "_");
  }
}

export {
  isJWT,
  IS_DEV,
  getClientFetch,
  isThirdwebUrl
};
//# sourceMappingURL=chunk-3GSJ2FQJ.js.map
