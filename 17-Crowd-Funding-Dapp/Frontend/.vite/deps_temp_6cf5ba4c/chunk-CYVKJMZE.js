// node_modules/thirdweb/dist/esm/wallets/in-app/core/constants/settings.js
var IN_APP_WALLET_PATH = "/sdk/2022-08-12/embedded-wallet";
var WALLET_USER_ID_LOCAL_STORAGE_NAME = (cliekeytId) => `thirdwebEwsWalletUserId-${cliekeytId}`;
var AUTH_TOKEN_LOCAL_STORAGE_PREFIX = "walletToken";
var AUTH_TOKEN_LOCAL_STORAGE_NAME = (key) => {
  return `${AUTH_TOKEN_LOCAL_STORAGE_PREFIX}-${key}`;
};
var PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME = (key) => {
  return `passkey-credential-id-${key}`;
};
var DEVICE_SHARE_LOCAL_STORAGE_PREFIX = "a";
var DEVICE_SHARE_LOCAL_STORAGE_NAME = (key, userId) => `${DEVICE_SHARE_LOCAL_STORAGE_PREFIX}-${key}-${userId}`;
var WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME = (key) => `walletConnectSessions-${key}`;
var GUEST_SESSION_LOCAL_STORAGE_NAME = (key) => `thirdweb_guest_session_id_${key}`;

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/client-scoped-storage.js
var data = /* @__PURE__ */ new Map();
var ClientScopedStorage = class {
  /**
   * @internal
   */
  constructor({ storage, clientId, ecosystem }) {
    Object.defineProperty(this, "key", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "storage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.storage = storage;
    this.key = getLocalStorageKey(clientId, ecosystem == null ? void 0 : ecosystem.id);
    this.ecosystem = ecosystem;
  }
  async getItem(key) {
    if (this.storage) {
      return this.storage.getItem(key);
    }
    return data.get(key) ?? null;
  }
  async setItem(key, value) {
    if (this.storage) {
      return this.storage.setItem(key, value);
    }
    data.set(key, value);
  }
  async removeItem(key) {
    const item = await this.getItem(key);
    if (this.storage && item) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }
  /**
   * @internal
   */
  async getWalletConnectSessions() {
    return this.getItem(WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async saveWalletConnectSessions(stringifiedSessions) {
    await this.setItem(WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME(this.key), stringifiedSessions);
  }
  /**
   * @internal
   */
  async savePasskeyCredentialId(id) {
    await this.setItem(PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME(this.key), id);
  }
  /**
   * @internal
   */
  async getPasskeyCredentialId() {
    return this.getItem(PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async saveAuthCookie(cookie) {
    await this.setItem(AUTH_TOKEN_LOCAL_STORAGE_NAME(this.key), cookie);
  }
  /**
   * @internal
   */
  async getAuthCookie() {
    return this.getItem(AUTH_TOKEN_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async removeAuthCookie() {
    return this.removeItem(AUTH_TOKEN_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async saveDeviceShare(share, userId) {
    await this.saveWalletUserId(userId);
    await this.setItem(DEVICE_SHARE_LOCAL_STORAGE_NAME(this.key, userId), share);
  }
  /**
   * @internal
   */
  async getDeviceShare() {
    const userId = await this.getWalletUserId();
    if (userId) {
      return this.getItem(DEVICE_SHARE_LOCAL_STORAGE_NAME(this.key, userId));
    }
    return null;
  }
  /**
   * @internal
   */
  async removeDeviceShare() {
    const userId = await this.getWalletUserId();
    if (userId) {
      return this.removeItem(DEVICE_SHARE_LOCAL_STORAGE_NAME(this.key, userId));
    }
    return false;
  }
  /**
   * @internal
   */
  async getWalletUserId() {
    return this.getItem(WALLET_USER_ID_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async saveWalletUserId(userId) {
    await this.setItem(WALLET_USER_ID_LOCAL_STORAGE_NAME(this.key), userId);
  }
  /**
   * @internal
   */
  async removeWalletUserId() {
    return this.removeItem(WALLET_USER_ID_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async getGuestSessionId() {
    return this.getItem(GUEST_SESSION_LOCAL_STORAGE_NAME(this.key));
  }
  /**
   * @internal
   */
  async saveGuestSessionId(sessionId) {
    await this.setItem(GUEST_SESSION_LOCAL_STORAGE_NAME(this.key), sessionId);
  }
};
var getLocalStorageKey = (clientId, ecosystemId) => {
  return `${clientId}${ecosystemId ? `-${ecosystemId}` : ""}`;
};

export {
  IN_APP_WALLET_PATH,
  ClientScopedStorage
};
//# sourceMappingURL=chunk-CYVKJMZE.js.map
