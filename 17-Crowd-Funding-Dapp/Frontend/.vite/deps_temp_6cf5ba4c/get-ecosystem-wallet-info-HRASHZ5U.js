import {
  getEcosystemInfo
} from "./chunk-QLJVAXYD.js";
import "./chunk-GOA7IGSB.js";
import "./chunk-QHKZ43P6.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-info.js
async function getEcosystemWalletInfo(walletId) {
  const data = await getEcosystemInfo(walletId);
  return {
    id: walletId,
    name: data.name,
    image_id: data.imageUrl || "",
    homepage: data.homepage || "",
    rdns: null,
    app: {
      browser: null,
      ios: null,
      android: null,
      mac: null,
      windows: null,
      linux: null,
      opera: null,
      chrome: null,
      firefox: null,
      safari: null,
      edge: null
    },
    mobile: {
      native: null,
      universal: null
    },
    desktop: {
      native: null,
      universal: null
    }
  };
}
export {
  getEcosystemWalletInfo
};
//# sourceMappingURL=get-ecosystem-wallet-info-HRASHZ5U.js.map
