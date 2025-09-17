// node_modules/thirdweb/dist/esm/utils/storage/webStorage.js
var webLocalStorage = {
  async getItem(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  },
  async setItem(key, value) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    }
  },
  async removeItem(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  }
};

export {
  webLocalStorage
};
//# sourceMappingURL=chunk-VIBS7Y3M.js.map
