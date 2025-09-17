// node_modules/proxy-compare/dist/index.modern.js
var e = Symbol();
var t = Symbol();
var s = Object.getPrototypeOf;
var c = /* @__PURE__ */ new WeakMap();
var l = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype);
var y = (e2) => l(e2) && e2[t] || null;
var h = (e2, t2 = true) => {
  c.set(e2, t2);
};

// node_modules/valtio/esm/vanilla.mjs
var isObject = (x) => typeof x === "object" && x !== null;
var proxyStateMap = /* @__PURE__ */ new WeakMap();
var refSet = /* @__PURE__ */ new WeakSet();
var buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  h(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const desc = {
      value,
      enumerable: true,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      h(value, false);
    } else if (value instanceof Promise) {
      delete desc.value;
      desc.get = () => handlePromise(value);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshot(
        target2,
        ensureVersion(),
        handlePromise
      );
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = y(value) || value;
      }
      let nextValue = value;
      if (value instanceof Promise) {
        value.then((v) => {
          value.status = "fulfilled";
          value.value = v;
          notifyUpdate(["resolve", [prop], v]);
        }).catch((e2) => {
          value.status = "rejected";
          value.reason = e2;
          notifyUpdate(["reject", [prop], e2]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxyFunction(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if ("value" in desc) {
      proxyObject[key] = initialObject[key];
      delete desc.value;
      delete desc.writable;
    }
    Object.defineProperty(baseObject, key, desc);
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
var [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return defaultProxyFunction(initialObject);
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[3];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject, handlePromise) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion, createSnapshot] = proxyState;
  return createSnapshot(target, ensureVersion(), handlePromise);
}

// node_modules/@walletconnect/modal-core/dist/index.js
var state$7 = proxy({
  history: ["ConnectWallet"],
  view: "ConnectWallet",
  data: void 0
});
var RouterCtrl = {
  state: state$7,
  subscribe(callback) {
    return subscribe(state$7, () => callback(state$7));
  },
  push(view, data) {
    if (view !== state$7.view) {
      state$7.view = view;
      if (data) {
        state$7.data = data;
      }
      state$7.history.push(view);
    }
  },
  reset(view) {
    state$7.view = view;
    state$7.history = [view];
  },
  replace(view) {
    if (state$7.history.length > 1) {
      state$7.history[state$7.history.length - 1] = view;
      state$7.view = view;
    }
  },
  goBack() {
    if (state$7.history.length > 1) {
      state$7.history.pop();
      const [last] = state$7.history.slice(-1);
      state$7.view = last;
    }
  },
  setData(data) {
    state$7.data = data;
  }
};
var CoreUtil = {
  WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  WCM_VERSION: "WCM_VERSION",
  RECOMMENDED_WALLET_AMOUNT: 9,
  isMobile() {
    if (typeof window !== "undefined") {
      return Boolean(
        window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
      );
    }
    return false;
  },
  isAndroid() {
    return CoreUtil.isMobile() && navigator.userAgent.toLowerCase().includes("android");
  },
  isIos() {
    const ua = navigator.userAgent.toLowerCase();
    return CoreUtil.isMobile() && (ua.includes("iphone") || ua.includes("ipad"));
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  isArray(data) {
    return Array.isArray(data) && data.length > 0;
  },
  isTelegram() {
    return typeof window !== "undefined" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.TelegramWebviewProxyProto));
  },
  formatNativeUrl(appUrl, wcUri, name) {
    if (CoreUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri, name);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    this.setWalletConnectDeepLink(safeAppUrl, name);
    const encodedWcUrl = encodeURIComponent(wcUri);
    return `${safeAppUrl}wc?uri=${encodedWcUrl}`;
  },
  formatUniversalUrl(appUrl, wcUri, name) {
    if (!CoreUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri, name);
    }
    let safeAppUrl = appUrl;
    if (safeAppUrl.startsWith("https://t.me")) {
      const formattedUri = Buffer.from(wcUri).toString("base64").replace(/[=]/g, "");
      if (safeAppUrl.endsWith("/")) {
        safeAppUrl = safeAppUrl.slice(0, -1);
      }
      this.setWalletConnectDeepLink(safeAppUrl, name);
      const url = new URL(safeAppUrl);
      url.searchParams.set("startapp", formattedUri);
      const link = url.toString();
      return link;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    this.setWalletConnectDeepLink(safeAppUrl, name);
    const encodedWcUrl = encodeURIComponent(wcUri);
    return `${safeAppUrl}wc?uri=${encodedWcUrl}`;
  },
  async wait(miliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, miliseconds);
    });
  },
  openHref(href, target) {
    const adjustedTarget = this.isTelegram() ? "_blank" : target;
    window.open(href, adjustedTarget, "noreferrer noopener");
  },
  setWalletConnectDeepLink(href, name) {
    try {
      localStorage.setItem(CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href, name }));
    } catch (e2) {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  setWalletConnectAndroidDeepLink(wcUri) {
    try {
      const [href] = wcUri.split("?");
      localStorage.setItem(
        CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE,
        JSON.stringify({ href, name: "Android" })
      );
    } catch (e2) {
      console.info("Unable to set WalletConnect android deep link");
    }
  },
  removeWalletConnectDeepLink() {
    try {
      localStorage.removeItem(CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE);
    } catch (e2) {
      console.info("Unable to remove WalletConnect deep link");
    }
  },
  setModalVersionInStorage() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(CoreUtil.WCM_VERSION, "2.7.0");
      }
    } catch (e2) {
      console.info("Unable to set Web3Modal version in storage");
    }
  },
  getWalletRouterData() {
    var _a;
    const routerData = (_a = RouterCtrl.state.data) == null ? void 0 : _a.Wallet;
    if (!routerData) {
      throw new Error('Missing "Wallet" view data');
    }
    return routerData;
  }
};
var isEnabled = typeof location !== "undefined" && (location.hostname.includes("localhost") || location.protocol.includes("https"));
var state$6 = proxy({
  enabled: isEnabled,
  userSessionId: "",
  events: [],
  connectedWalletId: void 0
});
var EventsCtrl = {
  state: state$6,
  subscribe(callback) {
    return subscribe(state$6.events, () => callback(snapshot(state$6.events[state$6.events.length - 1])));
  },
  initialize() {
    if (state$6.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) !== "undefined") {
      state$6.userSessionId = crypto.randomUUID();
    }
  },
  setConnectedWalletId(connectedWalletId) {
    state$6.connectedWalletId = connectedWalletId;
  },
  click(data) {
    if (state$6.enabled) {
      const event = {
        type: "CLICK",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  },
  track(data) {
    if (state$6.enabled) {
      const event = {
        type: "TRACK",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  },
  view(data) {
    if (state$6.enabled) {
      const event = {
        type: "VIEW",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  }
};
var state$5 = proxy({
  chains: void 0,
  walletConnectUri: void 0,
  isAuth: false,
  isCustomDesktop: false,
  isCustomMobile: false,
  isDataLoaded: false,
  isUiLoaded: false
});
var OptionsCtrl = {
  state: state$5,
  subscribe(callback) {
    return subscribe(state$5, () => callback(state$5));
  },
  setChains(chains) {
    state$5.chains = chains;
  },
  setWalletConnectUri(walletConnectUri) {
    state$5.walletConnectUri = walletConnectUri;
  },
  setIsCustomDesktop(isCustomDesktop) {
    state$5.isCustomDesktop = isCustomDesktop;
  },
  setIsCustomMobile(isCustomMobile) {
    state$5.isCustomMobile = isCustomMobile;
  },
  setIsDataLoaded(isDataLoaded) {
    state$5.isDataLoaded = isDataLoaded;
  },
  setIsUiLoaded(isUiLoaded) {
    state$5.isUiLoaded = isUiLoaded;
  },
  setIsAuth(isAuth) {
    state$5.isAuth = isAuth;
  }
};
var state$4 = proxy({
  projectId: "",
  mobileWallets: void 0,
  desktopWallets: void 0,
  walletImages: void 0,
  chains: void 0,
  enableAuthMode: false,
  enableExplorer: true,
  explorerExcludedWalletIds: void 0,
  explorerRecommendedWalletIds: void 0,
  termsOfServiceUrl: void 0,
  privacyPolicyUrl: void 0
});
var ConfigCtrl = {
  state: state$4,
  subscribe(callback) {
    return subscribe(state$4, () => callback(state$4));
  },
  setConfig(config) {
    var _a, _b;
    EventsCtrl.initialize();
    OptionsCtrl.setChains(config.chains);
    OptionsCtrl.setIsAuth(Boolean(config.enableAuthMode));
    OptionsCtrl.setIsCustomMobile(Boolean((_a = config.mobileWallets) == null ? void 0 : _a.length));
    OptionsCtrl.setIsCustomDesktop(Boolean((_b = config.desktopWallets) == null ? void 0 : _b.length));
    CoreUtil.setModalVersionInStorage();
    Object.assign(state$4, config);
  }
};
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var W3M_API = "https://explorer-api.walletconnect.com";
var SDK_TYPE = "wcm";
var SDK_VERSION = `js-${"2.7.0"}`;
async function fetchListings(endpoint, params) {
  const allParams = __spreadValues$2({ sdkType: SDK_TYPE, sdkVersion: SDK_VERSION }, params);
  const url = new URL(endpoint, W3M_API);
  url.searchParams.append("projectId", ConfigCtrl.state.projectId);
  Object.entries(allParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, String(value));
    }
  });
  const request = await fetch(url);
  return request.json();
}
var ExplorerUtil = {
  async getDesktopListings(params) {
    return fetchListings("/w3m/v1/getDesktopListings", params);
  },
  async getMobileListings(params) {
    return fetchListings("/w3m/v1/getMobileListings", params);
  },
  async getInjectedListings(params) {
    return fetchListings("/w3m/v1/getInjectedListings", params);
  },
  async getAllListings(params) {
    return fetchListings("/w3m/v1/getAllListings", params);
  },
  getWalletImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getWalletImage/${imageId}?projectId=${ConfigCtrl.state.projectId}&sdkType=${SDK_TYPE}&sdkVersion=${SDK_VERSION}`;
  },
  getAssetImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getAssetImage/${imageId}?projectId=${ConfigCtrl.state.projectId}&sdkType=${SDK_TYPE}&sdkVersion=${SDK_VERSION}`;
  }
};
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var isMobile = CoreUtil.isMobile();
var state$3 = proxy({
  wallets: { listings: [], total: 0, page: 1 },
  search: { listings: [], total: 0, page: 1 },
  recomendedWallets: []
});
var ExplorerCtrl = {
  state: state$3,
  async getRecomendedWallets() {
    const { explorerRecommendedWalletIds, explorerExcludedWalletIds } = ConfigCtrl.state;
    if (explorerRecommendedWalletIds === "NONE" || explorerExcludedWalletIds === "ALL" && !explorerRecommendedWalletIds) {
      return state$3.recomendedWallets;
    }
    if (CoreUtil.isArray(explorerRecommendedWalletIds)) {
      const recommendedIds = explorerRecommendedWalletIds.join(",");
      const params = { recommendedIds };
      const { listings } = await ExplorerUtil.getAllListings(params);
      const listingsArr = Object.values(listings);
      listingsArr.sort((a, b) => {
        const aIndex = explorerRecommendedWalletIds.indexOf(a.id);
        const bIndex = explorerRecommendedWalletIds.indexOf(b.id);
        return aIndex - bIndex;
      });
      state$3.recomendedWallets = listingsArr;
    } else {
      const { chains, isAuth } = OptionsCtrl.state;
      const chainsFilter = chains == null ? void 0 : chains.join(",");
      const isExcluded = CoreUtil.isArray(explorerExcludedWalletIds);
      const params = {
        page: 1,
        sdks: isAuth ? "auth_v1" : void 0,
        entries: CoreUtil.RECOMMENDED_WALLET_AMOUNT,
        chains: chainsFilter,
        version: 2,
        excludedIds: isExcluded ? explorerExcludedWalletIds.join(",") : void 0
      };
      const { listings } = isMobile ? await ExplorerUtil.getMobileListings(params) : await ExplorerUtil.getDesktopListings(params);
      state$3.recomendedWallets = Object.values(listings);
    }
    return state$3.recomendedWallets;
  },
  async getWallets(params) {
    const extendedParams = __spreadValues$1({}, params);
    const { explorerRecommendedWalletIds, explorerExcludedWalletIds } = ConfigCtrl.state;
    const { recomendedWallets } = state$3;
    if (explorerExcludedWalletIds === "ALL") {
      return state$3.wallets;
    }
    if (recomendedWallets.length) {
      extendedParams.excludedIds = recomendedWallets.map((wallet) => wallet.id).join(",");
    } else if (CoreUtil.isArray(explorerRecommendedWalletIds)) {
      extendedParams.excludedIds = explorerRecommendedWalletIds.join(",");
    }
    if (CoreUtil.isArray(explorerExcludedWalletIds)) {
      extendedParams.excludedIds = [extendedParams.excludedIds, explorerExcludedWalletIds].filter(Boolean).join(",");
    }
    if (OptionsCtrl.state.isAuth) {
      extendedParams.sdks = "auth_v1";
    }
    const { page, search } = params;
    const { listings: listingsObj, total } = isMobile ? await ExplorerUtil.getMobileListings(extendedParams) : await ExplorerUtil.getDesktopListings(extendedParams);
    const listings = Object.values(listingsObj);
    const type = search ? "search" : "wallets";
    state$3[type] = {
      listings: [...state$3[type].listings, ...listings],
      total,
      page: page != null ? page : 1
    };
    return { listings, total };
  },
  getWalletImageUrl(imageId) {
    return ExplorerUtil.getWalletImageUrl(imageId);
  },
  getAssetImageUrl(imageId) {
    return ExplorerUtil.getAssetImageUrl(imageId);
  },
  resetSearch() {
    state$3.search = { listings: [], total: 0, page: 1 };
  }
};
var state$2 = proxy({
  open: false
});
var ModalCtrl = {
  state: state$2,
  subscribe(callback) {
    return subscribe(state$2, () => callback(state$2));
  },
  async open(options) {
    return new Promise((resolve) => {
      const { isUiLoaded, isDataLoaded } = OptionsCtrl.state;
      CoreUtil.removeWalletConnectDeepLink();
      OptionsCtrl.setWalletConnectUri(options == null ? void 0 : options.uri);
      OptionsCtrl.setChains(options == null ? void 0 : options.chains);
      RouterCtrl.reset("ConnectWallet");
      if (isUiLoaded && isDataLoaded) {
        state$2.open = true;
        resolve();
      } else {
        const interval = setInterval(() => {
          const opts = OptionsCtrl.state;
          if (opts.isUiLoaded && opts.isDataLoaded) {
            clearInterval(interval);
            state$2.open = true;
            resolve();
          }
        }, 200);
      }
    });
  },
  close() {
    state$2.open = false;
  }
};
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function isDarkMode() {
  return typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
}
var state$1 = proxy({
  themeMode: isDarkMode() ? "dark" : "light"
});
var ThemeCtrl = {
  state: state$1,
  subscribe(callback) {
    return subscribe(state$1, () => callback(state$1));
  },
  setThemeConfig(theme) {
    const { themeMode, themeVariables } = theme;
    if (themeMode) {
      state$1.themeMode = themeMode;
    }
    if (themeVariables) {
      state$1.themeVariables = __spreadValues({}, themeVariables);
    }
  }
};
var state = proxy({
  open: false,
  message: "",
  variant: "success"
});
var ToastCtrl = {
  state,
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  openToast(message, variant) {
    state.open = true;
    state.message = message;
    state.variant = variant;
  },
  closeToast() {
    state.open = false;
  }
};

export {
  RouterCtrl,
  CoreUtil,
  EventsCtrl,
  OptionsCtrl,
  ConfigCtrl,
  ExplorerCtrl,
  ModalCtrl,
  ThemeCtrl,
  ToastCtrl
};
//# sourceMappingURL=chunk-35YKZJSE.js.map
