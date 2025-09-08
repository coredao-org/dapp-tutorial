import {
  ethereum
} from "./chunk-ZLJ6VYSG.js";
import {
  socialAuthOptions
} from "./chunk-EIBOABXT.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js
function isInAppWallet(wallet) {
  return wallet.id === "inApp" || wallet.id === "embedded";
}
async function connectInAppWallet(options, createOptions, connector) {
  var _a, _b, _c, _d;
  if (
    // if auth mode is not specified, the default is popup
    ((_a = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _a.mode) !== "popup" && ((_b = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _b.mode) !== void 0 && connector.authenticateWithRedirect
  ) {
    const strategy = options.strategy;
    if (socialAuthOptions.includes(strategy)) {
      connector.authenticateWithRedirect(strategy, (_c = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _c.mode, (_d = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _d.redirectUrl);
    }
  }
  const authResult = await connector.connect(options);
  const authAccount = authResult.user.account;
  if (createOptions && "smartAccount" in createOptions && (createOptions == null ? void 0 : createOptions.smartAccount)) {
    return convertToSmartAccount({
      client: options.client,
      authAccount,
      smartAccountOptions: createOptions.smartAccount,
      chain: options.chain
    });
  }
  return [authAccount, options.chain || ethereum];
}
async function autoConnectInAppWallet(options, createOptions, connector) {
  if (options.authResult && connector.loginWithAuthToken) {
    await connector.loginWithAuthToken(options.authResult);
  }
  const user = await getAuthenticatedUser(connector);
  if (!user) {
    throw new Error("Failed to authenticate user.");
  }
  const authAccount = user.account;
  if (createOptions && "smartAccount" in createOptions && (createOptions == null ? void 0 : createOptions.smartAccount)) {
    return convertToSmartAccount({
      client: options.client,
      authAccount,
      smartAccountOptions: createOptions.smartAccount,
      chain: options.chain
    });
  }
  return [authAccount, options.chain || ethereum];
}
async function convertToSmartAccount(options) {
  const [{ smartWallet }, { connectSmartWallet }] = await Promise.all([
    import("./smart-wallet-5WA47S2O.js"),
    import("./smart-7AYCEGLU.js")
  ]);
  const sa = smartWallet(options.smartAccountOptions);
  return connectSmartWallet(sa, {
    client: options.client,
    personalAccount: options.authAccount,
    chain: options.chain
  }, options.smartAccountOptions);
}
async function getAuthenticatedUser(connector) {
  const user = await connector.getUser();
  switch (user.status) {
    case "Logged In, Wallet Initialized": {
      return user;
    }
  }
  return void 0;
}

export {
  isInAppWallet,
  connectInAppWallet,
  autoConnectInAppWallet
};
//# sourceMappingURL=chunk-O6KA6WKL.js.map
