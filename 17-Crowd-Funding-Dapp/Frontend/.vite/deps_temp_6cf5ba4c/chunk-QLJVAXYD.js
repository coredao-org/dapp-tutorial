import {
  withCache
} from "./chunk-GOA7IGSB.js";
import {
  getThirdwebBaseUrl
} from "./chunk-QHKZ43P6.js";

// node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-auth-options.js
async function getEcosystemInfo(walletId) {
  return withCache(async () => {
    var _a;
    const res = await fetch(`${getThirdwebBaseUrl("inAppWallet")}/api/2024-05-05/ecosystem-wallet`, {
      headers: {
        "x-ecosystem-id": walletId
      }
    });
    const data = await res.json();
    if (!data || data.code === "UNAUTHORIZED") {
      throw new Error(data.message || `Could not find ecosystem wallet with id ${walletId}, please check your ecosystem wallet configuration.`);
    }
    if ((_a = data.authOptions) == null ? void 0 : _a.includes("siwe")) {
      data.authOptions = data.authOptions.filter((o) => o !== "siwe");
      data.authOptions.push("wallet");
    }
    return data;
  }, {
    cacheKey: `ecosystem-wallet-options-${walletId}`,
    cacheTime: 1e3 * 60 * 5
    // 5 mins
  });
}

export {
  getEcosystemInfo
};
//# sourceMappingURL=chunk-QLJVAXYD.js.map
