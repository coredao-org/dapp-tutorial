import {
  track
} from "./chunk-N24CESYN.js";

// node_modules/thirdweb/dist/esm/analytics/track/connect.js
async function trackConnect(args) {
  const { client, ecosystem, walletType, walletAddress, chainId } = args;
  return track({
    client,
    ecosystem,
    data: {
      source: "connectWallet",
      action: "connect",
      walletType,
      walletAddress,
      chainId
    }
  });
}

// node_modules/thirdweb/dist/esm/utils/tiny-emitter.js
function createEmitter() {
  const subsribers = /* @__PURE__ */ new Map();
  return {
    subscribe(event, cb) {
      var _a;
      if (!subsribers.has(event)) {
        subsribers.set(event, /* @__PURE__ */ new Set([cb]));
      } else {
        (_a = subsribers.get(event)) == null ? void 0 : _a.add(cb);
      }
      return () => {
        const subscribers = subsribers.get(event);
        if (subscribers) {
          subscribers.delete(cb);
        }
      };
    },
    emit(event, data) {
      const subscribers = subsribers.get(event);
      if (subscribers) {
        for (const cb of subscribers) {
          cb(data);
        }
      }
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js
function createWalletEmitter() {
  return createEmitter();
}

export {
  trackConnect,
  createWalletEmitter
};
//# sourceMappingURL=chunk-CLN3QXW2.js.map
