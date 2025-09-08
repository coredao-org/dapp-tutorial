import {
  disconnectWalletConnectSession,
  getSessions,
  saveSession
} from "./chunk-YG7T4W43.js";
import "./chunk-R554PO5S.js";
import "./chunk-5THTWD2M.js";
import "./chunk-EHYTL2NA.js";
import "./chunk-XB34LHR5.js";
import "./chunk-G26WKBGM.js";
import "./chunk-QIUEWTOP.js";
import "./chunk-CYVKJMZE.js";
import "./chunk-JTR2PIFP.js";
import "./chunk-JZC47WAY.js";
import "./chunk-CXAZLQ2Z.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-7ZCK2FX5.js";
import "./chunk-7QDK5KLB.js";
import "./chunk-UY2SRO54.js";
import "./chunk-3DBHE3NE.js";
import "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import "./chunk-CNLOA7AS.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-LO5SQBMX.js";
import "./chunk-EIVAOYE5.js";
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-I5DK3TWY.js";
import "./chunk-NJUWOGZE.js";
import "./chunk-TFBEDS4S.js";
import "./chunk-GOA7IGSB.js";
import "./chunk-QHKZ43P6.js";
import "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-proposal.js
async function onSessionProposal(options) {
  var _a, _b;
  const { wallet, walletConnectClient, event, chains, onConnect } = options;
  const account = wallet.getAccount();
  if (!account) {
    throw new Error("No account connected to provided wallet");
  }
  const origin = (_b = (_a = event.verifyContext) == null ? void 0 : _a.verified) == null ? void 0 : _b.origin;
  if (origin) {
    await disconnectExistingSessions({ origin, walletConnectClient });
  }
  const session = await acceptSessionProposal({
    account,
    walletConnectClient,
    sessionProposal: event,
    chains
  });
  await saveSession(session);
  wallet.subscribe("disconnect", () => {
    disconnectWalletConnectSession({ session, walletConnectClient });
  });
  onConnect == null ? void 0 : onConnect(session);
}
async function disconnectExistingSessions({ walletConnectClient, origin }) {
  const sessions = await getSessions();
  for (const session of sessions) {
    if (session.origin === origin) {
      await disconnectWalletConnectSession({ session, walletConnectClient });
    }
  }
}
async function acceptSessionProposal({ account, walletConnectClient, sessionProposal, chains }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  if (!((_a = sessionProposal.params.requiredNamespaces) == null ? void 0 : _a.eip155) && !((_b = sessionProposal.params.optionalNamespaces) == null ? void 0 : _b.eip155)) {
    throw new Error("No EIP155 namespace found in Wallet Connect session proposal");
  }
  const namespaces = {
    chains: [
      ...Array.from(/* @__PURE__ */ new Set([
        ...((_e = (_d = (_c = sessionProposal.params.requiredNamespaces) == null ? void 0 : _c.eip155) == null ? void 0 : _d.chains) == null ? void 0 : _e.map((chain) => `${chain}:${account.address}`)) ?? [],
        ...((_h = (_g = (_f = sessionProposal.params.optionalNamespaces) == null ? void 0 : _f.eip155) == null ? void 0 : _g.chains) == null ? void 0 : _h.map((chain) => `${chain}:${account.address}`)) ?? [],
        ...(chains == null ? void 0 : chains.map((chain) => `eip155:${chain.id}:${account.address}`)) ?? []
      ]))
    ],
    methods: [
      ...((_j = (_i = sessionProposal.params.requiredNamespaces) == null ? void 0 : _i.eip155) == null ? void 0 : _j.methods) ?? [],
      ...((_l = (_k = sessionProposal.params.optionalNamespaces) == null ? void 0 : _k.eip155) == null ? void 0 : _l.methods) ?? []
    ],
    events: [
      ...((_n = (_m = sessionProposal.params.requiredNamespaces) == null ? void 0 : _m.eip155) == null ? void 0 : _n.events) ?? [],
      ...((_p = (_o = sessionProposal.params.optionalNamespaces) == null ? void 0 : _o.eip155) == null ? void 0 : _p.events) ?? []
    ]
  };
  const approval = await walletConnectClient.approve({
    id: sessionProposal.id,
    namespaces: {
      eip155: {
        accounts: namespaces.chains,
        methods: namespaces.methods,
        events: namespaces.events
      }
    }
  });
  const session = await approval.acknowledged();
  return {
    topic: session.topic,
    origin: ((_r = (_q = sessionProposal.verifyContext) == null ? void 0 : _q.verified) == null ? void 0 : _r.origin) || "Unknown origin"
  };
}
export {
  acceptSessionProposal,
  disconnectExistingSessions,
  onSessionProposal
};
//# sourceMappingURL=session-proposal-FKZO7EJB.js.map
