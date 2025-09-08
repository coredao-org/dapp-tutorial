import {
  stringify
} from "./chunk-NJUWOGZE.js";

// node_modules/thirdweb/dist/esm/utils/storage/walletStorage.js
var CONNECT_PARAMS_MAP_KEY = "tw:connected-wallet-params";
async function saveConnectParamsToStorage(storage, walletId, params) {
  if (!isStringifiable(params)) {
    throw new Error("given params are not stringifiable");
  }
  const currentValueStr = await storage.getItem(CONNECT_PARAMS_MAP_KEY);
  let value;
  if (currentValueStr) {
    try {
      value = JSON.parse(currentValueStr);
    } catch {
      value = {};
    }
    value[walletId] = params;
  } else {
    value = {
      [walletId]: params
    };
  }
  storage.setItem(CONNECT_PARAMS_MAP_KEY, stringify(value));
}
async function deleteConnectParamsFromStorage(storage, walletId) {
  const currentValueStr = await storage.getItem(CONNECT_PARAMS_MAP_KEY);
  let value;
  if (currentValueStr) {
    try {
      value = JSON.parse(currentValueStr);
    } catch {
      value = {};
    }
    delete value[walletId];
    storage.setItem(CONNECT_PARAMS_MAP_KEY, stringify(value));
  }
}
async function getSavedConnectParamsFromStorage(storage, walletId) {
  const valueStr = await storage.getItem(CONNECT_PARAMS_MAP_KEY);
  if (!valueStr) {
    return null;
  }
  try {
    const value = JSON.parse(valueStr);
    if (value == null ? void 0 : value[walletId]) {
      return value[walletId];
    }
    return null;
  } catch {
    return null;
  }
}
function isStringifiable(value) {
  try {
    stringify(value);
    return true;
  } catch {
    return false;
  }
}

export {
  saveConnectParamsToStorage,
  deleteConnectParamsFromStorage,
  getSavedConnectParamsFromStorage
};
//# sourceMappingURL=chunk-YGRUPXVB.js.map
