import {
  Ps
} from "./chunk-EHYTL2NA.js";
import {
  DEFAULT_PROJECT_ID
} from "./chunk-XB34LHR5.js";
import {
  getDefaultAppMetadata
} from "./chunk-G26WKBGM.js";
import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-store.js
var walletConnectSessions;
async function getSessions() {
  if (!walletConnectSessions) {
    return [];
  }
  const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
  return JSON.parse(stringifiedSessions ?? "[]");
}
function initializeSessionStore(options) {
  if (!walletConnectSessions) {
    walletConnectSessions = new ClientScopedStorage({
      storage: null,
      // TODO: inject storage
      clientId: options.clientId
    });
  }
}
async function saveSession(session) {
  if (!walletConnectSessions) {
    return;
  }
  const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
  const sessions = JSON.parse(stringifiedSessions ?? "[]");
  sessions.push(session);
  await walletConnectSessions.saveWalletConnectSessions(stringify(sessions));
}
async function removeSession(session) {
  if (!walletConnectSessions) {
    return;
  }
  const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
  const sessions = JSON.parse(stringifiedSessions ?? "[]");
  const newSessions = sessions.filter((s) => s.topic !== session.topic);
  await walletConnectSessions.saveWalletConnectSessions(stringify(newSessions));
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/index.js
var walletConnectClientCache = /* @__PURE__ */ new WeakMap();
async function createWalletConnectClient(options) {
  var _a, _b, _c, _d;
  const { wallet, requestHandlers, chains, onConnect, onDisconnect, client: thirdwebClient } = options;
  if (walletConnectClientCache.has(thirdwebClient)) {
    return walletConnectClientCache.get(thirdwebClient);
  }
  initializeSessionStore({ clientId: options.client.clientId });
  const defaults = getDefaultAppMetadata();
  const walletConnectClient = await Ps.init({
    projectId: options.projectId ?? DEFAULT_PROJECT_ID,
    metadata: {
      name: ((_a = options.appMetadata) == null ? void 0 : _a.name) ?? defaults.name,
      url: ((_b = options.appMetadata) == null ? void 0 : _b.url) ?? defaults.url,
      description: ((_c = options.appMetadata) == null ? void 0 : _c.description) ?? defaults.description,
      icons: [((_d = options.appMetadata) == null ? void 0 : _d.logoUrl) ?? defaults.logoUrl]
    }
  });
  walletConnectClient.on("session_proposal", async (event) => {
    const { onSessionProposal } = await import("./session-proposal-FKZO7EJB.js");
    await onSessionProposal({
      wallet,
      walletConnectClient,
      event,
      chains,
      onConnect
    }).catch((error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        throw error;
      }
    });
  });
  walletConnectClient.on("session_request", async (event) => {
    const { fulfillRequest } = await import("./session-request-E5B34J42.js");
    await fulfillRequest({
      wallet,
      walletConnectClient,
      event,
      handlers: requestHandlers,
      thirdwebClient
    }).catch((error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        throw error;
      }
    });
  });
  walletConnectClient.on("session_event", async (_event) => {
  });
  walletConnectClient.on("session_ping", (_event) => {
  });
  walletConnectClient.on("session_delete", async (event) => {
    await disconnectWalletConnectSession({
      session: { topic: event.topic },
      walletConnectClient
    }).catch((error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        throw error;
      }
    });
  });
  const _disconnect = walletConnectClient.disconnect;
  walletConnectClient.disconnect = async (args) => {
    const result = await _disconnect(args).catch(() => {
    });
    if (onDisconnect) {
      disconnectHook({ topic: args.topic, onDisconnect });
    }
    return result;
  };
  walletConnectClientCache.set(options.client, walletConnectClient);
  return walletConnectClient;
}
function createWalletConnectSession(options) {
  const { uri, walletConnectClient } = options;
  walletConnectClient.core.pairing.pair({ uri });
}
async function getActiveWalletConnectSessions() {
  return getSessions();
}
async function disconnectWalletConnectSession(options) {
  removeSession(options.session);
  try {
    await options.walletConnectClient.disconnect({
      topic: options.session.topic,
      reason: {
        code: 6e3,
        message: "Disconnected"
      }
    });
  } catch {
  }
}
async function disconnectHook(options) {
  const { topic, onDisconnect } = options;
  const sessions = await getSessions();
  onDisconnect(sessions.find((s) => s.topic === topic) ?? {
    topic
  });
}

export {
  getSessions,
  saveSession,
  createWalletConnectClient,
  createWalletConnectSession,
  getActiveWalletConnectSessions,
  disconnectWalletConnectSession
};
//# sourceMappingURL=chunk-YG7T4W43.js.map
