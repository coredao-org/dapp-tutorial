// node_modules/thirdweb/dist/esm/utils/domains.js
var DEFAULT_RPC_URL = "rpc.thirdweb.com";
var DEFAULT_SOCIAL_URL = "social.thirdweb.com";
var DEFAULT_IN_APP_WALLET_URL = "embedded-wallet.thirdweb.com";
var DEFAULT_PAY_URL = "pay.thirdweb.com";
var DEFAULT_STORAGE_URL = "storage.thirdweb.com";
var DEFAULT_BUNDLER_URL = "bundler.thirdweb.com";
var DEFAULT_ANALYTICS_URL = "c.thirdweb.com";
var domains = {
  rpc: DEFAULT_RPC_URL,
  inAppWallet: DEFAULT_IN_APP_WALLET_URL,
  social: DEFAULT_SOCIAL_URL,
  pay: DEFAULT_PAY_URL,
  storage: DEFAULT_STORAGE_URL,
  bundler: DEFAULT_BUNDLER_URL,
  analytics: DEFAULT_ANALYTICS_URL
};
var getThirdwebDomains = () => {
  return domains;
};
var getThirdwebBaseUrl = (service) => {
  const origin = domains[service];
  if (origin.startsWith("localhost")) {
    return `http://${origin}`;
  }
  return `https://${origin}`;
};

export {
  DEFAULT_RPC_URL,
  getThirdwebDomains,
  getThirdwebBaseUrl
};
//# sourceMappingURL=chunk-QHKZ43P6.js.map
