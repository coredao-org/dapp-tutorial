import {
  getOrCreateInAppWalletConnector
} from "./chunk-6WNCTW75.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/index.js
async function getInAppWalletConnector(client, ecosystem) {
  return getOrCreateInAppWalletConnector(client, async (client2) => {
    const { InAppWebConnector } = await import("./web-connector-5CMXT4ED.js");
    return new InAppWebConnector({
      client: client2,
      ecosystem
    });
  }, ecosystem);
}
async function getAuthenticatedUser(options) {
  const { client, ecosystem } = options;
  const connector = await getInAppWalletConnector(client, ecosystem);
  const user = await connector.getUser();
  switch (user.status) {
    case "Logged In, Wallet Initialized": {
      return user;
    }
  }
  return void 0;
}
async function getUserEmail(options) {
  const user = await getAuthenticatedUser(options);
  if (user && "email" in user.authDetails) {
    return user.authDetails.email;
  }
  return void 0;
}
async function getUserPhoneNumber(options) {
  const user = await getAuthenticatedUser(options);
  if (user && "phoneNumber" in user.authDetails) {
    return user.authDetails.phoneNumber;
  }
  return void 0;
}
async function preAuthenticate(args) {
  const connector = await getInAppWalletConnector(args.client, args.ecosystem);
  return connector.preAuthenticate(args);
}
async function authenticate(args) {
  const connector = await getInAppWalletConnector(args.client, args.ecosystem);
  return connector.authenticate(args);
}
async function authenticateWithRedirect(args) {
  const connector = await getInAppWalletConnector(args.client, args.ecosystem);
  if (!connector.authenticateWithRedirect) {
    throw new Error("authenticateWithRedirect is not supported on this platform");
  }
  return connector.authenticateWithRedirect(args.strategy, args.mode, args.redirectUrl);
}
async function linkProfile(args) {
  const connector = await getInAppWalletConnector(args.client, args.ecosystem);
  return await connector.linkProfile(args);
}
async function getProfiles(args) {
  const connector = await getInAppWalletConnector(args.client, args.ecosystem);
  return connector.getProfiles();
}

export {
  getUserEmail,
  getUserPhoneNumber,
  preAuthenticate,
  authenticate,
  authenticateWithRedirect,
  linkProfile,
  getProfiles
};
//# sourceMappingURL=chunk-65EUCVOP.js.map
