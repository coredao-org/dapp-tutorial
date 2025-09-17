"use client";
import {
  ConnectWalletSocialOptions,
  LoadingScreen,
  reservedScreens,
  useInAppWalletLocale,
  useScreenContext
} from "./chunk-KWA5PGSC.js";
import "./chunk-65EUCVOP.js";
import {
  WalletEntryButton,
  useSetSelectionData
} from "./chunk-AARWH2GQ.js";
import "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import "./chunk-XC5J5ANL.js";
import "./chunk-NOA36MVL.js";
import "./chunk-PWFRCBEK.js";
import "./chunk-ZLJ6VYSG.js";
import "./chunk-6WNCTW75.js";
import "./chunk-QLJVAXYD.js";
import "./chunk-CLN3QXW2.js";
import "./chunk-BZXRHH4X.js";
import "./chunk-QIUEWTOP.js";
import "./chunk-J7FYPWA5.js";
import "./chunk-EIBOABXT.js";
import "./chunk-N24CESYN.js";
import "./chunk-VIBS7Y3M.js";
import "./chunk-2MTJELC7.js";
import "./chunk-4PEUWIWY.js";
import "./chunk-UY2SRO54.js";
import "./chunk-ZNEQLT5Q.js";
import "./chunk-PK5NRJAC.js";
import "./chunk-7VZHRFCE.js";
import "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
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
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletSelectionUI.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function InAppWalletSelectionUI(props) {
  const { screen } = useScreenContext();
  const setData = useSetSelectionData();
  const locale = useInAppWalletLocale(props.connectLocale.id);
  if (props.size === "wide" || screen !== reservedScreens.main && props.size === "compact") {
    return (0, import_jsx_runtime.jsx)(WalletEntryButton, { walletId: props.wallet.id, selectWallet: () => {
      setData({});
      props.select();
    }, client: props.client, connectLocale: props.connectLocale, recommendedWallets: props.recommendedWallets, isActive: screen === props.wallet, badge: void 0 });
  }
  if (!locale) {
    return (0, import_jsx_runtime.jsx)(LoadingScreen, { height: "195px" });
  }
  return (0, import_jsx_runtime.jsx)(ConnectWalletSocialOptions, { disabled: props.disabled, locale, wallet: props.wallet, done: props.done, select: props.select, goBack: props.goBack, chain: props.chain, client: props.client, size: props.size });
}
var InAppWalletSelectionUI_default = InAppWalletSelectionUI;
export {
  InAppWalletSelectionUI_default as default
};
//# sourceMappingURL=InAppWalletSelectionUI-QJ7CQPJG.js.map
