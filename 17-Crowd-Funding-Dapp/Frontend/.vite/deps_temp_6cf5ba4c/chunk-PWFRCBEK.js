import {
  METAMASK
} from "./chunk-BZXRHH4X.js";
import {
  isBrowser
} from "./chunk-QIUEWTOP.js";

// node_modules/mipd/dist/esm/utils.js
function requestProviders(listener) {
  if (typeof window === "undefined")
    return;
  const handler = (event) => listener(event.detail);
  window.addEventListener("eip6963:announceProvider", handler);
  window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
  return () => window.removeEventListener("eip6963:announceProvider", handler);
}

// node_modules/mipd/dist/esm/store.js
function createStore() {
  const listeners = /* @__PURE__ */ new Set();
  let providerDetails = [];
  const request = () => requestProviders((providerDetail) => {
    if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid))
      return;
    providerDetails = [...providerDetails, providerDetail];
    listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));
  });
  let unwatch = request();
  return {
    _listeners() {
      return listeners;
    },
    clear() {
      listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));
      providerDetails = [];
    },
    destroy() {
      this.clear();
      listeners.clear();
      unwatch == null ? void 0 : unwatch();
    },
    findProvider({ rdns }) {
      return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);
    },
    getProviders() {
      return providerDetails;
    },
    reset() {
      this.clear();
      unwatch == null ? void 0 : unwatch();
      unwatch = request();
    },
    subscribe(listener, { emitImmediately } = {}) {
      listeners.add(listener);
      if (emitImmediately)
        listener(providerDetails, { added: providerDetails });
      return () => listeners.delete(listener);
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/injected/mipdStore.js
var mipdStore = (() => isBrowser() ? createStore() : void 0)();
function injectedProvider(walletId) {
  const injectedProviderDetail = getInstalledWalletProviders().find((p) => p.info.rdns === walletId);
  return injectedProviderDetail == null ? void 0 : injectedProviderDetail.provider;
}
function getMIPDStore() {
  if (!mipdStore) {
    return void 0;
  }
  return mipdStore;
}
function getInstalledWalletProviders() {
  var _a;
  const providers = ((_a = getMIPDStore()) == null ? void 0 : _a.getProviders()) || [];
  for (const provider of providers) {
    if (provider.info.rdns === "io.metamask.mobile") {
      provider.info.rdns = METAMASK;
      break;
    }
  }
  return providers;
}

export {
  injectedProvider,
  getInstalledWalletProviders
};
//# sourceMappingURL=chunk-PWFRCBEK.js.map
