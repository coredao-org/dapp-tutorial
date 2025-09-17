import {
  GuestLogin,
  OTPLoginUI,
  PassKeyLogin,
  PoweredByThirdweb,
  SocialLogin,
  TOS,
  WalletAuth
} from "./chunk-7ZNEOXS2.js";
import {
  ConnectWalletSocialOptions,
  LoadingScreen,
  useInAppWalletLocale,
  useScreenContext
} from "./chunk-KWA5PGSC.js";
import {
  useSelectionData,
  useSetSelectionData
} from "./chunk-AARWH2GQ.js";
import {
  Container,
  Img,
  ModalHeader,
  ModalTitle,
  Skeleton,
  Spacer,
  iconSize,
  radius,
  useWalletInfo
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletConnectUI.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletFormUI.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletHeader.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function EcosystemWalletHeader(props) {
  var _a, _b, _c;
  const walletInfo = useWalletInfo(props.wallet.id);
  return (0, import_jsx_runtime.jsx)(ModalHeader, { onBack: props.onBack, title: walletInfo.isLoading ? (0, import_jsx_runtime.jsx)(Skeleton, { height: "24px", width: "200px" }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!((_a = walletInfo.data) == null ? void 0 : _a.image_id) ? null : (0, import_jsx_runtime.jsx)(Img, { src: (_b = walletInfo.data) == null ? void 0 : _b.image_id, style: {
    borderRadius: radius.sm
  }, width: iconSize.md, height: iconSize.md, client: props.client }), (0, import_jsx_runtime.jsx)(ModalTitle, { children: (_c = walletInfo.data) == null ? void 0 : _c.name })] }), leftAligned: true });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletFormUI.js
function EcosystemWalletFormUIScreen(props) {
  const isCompact = props.size === "compact";
  const { initialScreen, screen } = useScreenContext();
  const [isApproved, setIsApproved] = (0, import_react.useState)(false);
  const onBack = screen === props.wallet && initialScreen === props.wallet ? void 0 : props.goBack;
  return (0, import_jsx_runtime2.jsxs)(Container, { fullHeight: true, flex: "column", p: "lg", animate: "fadein", style: {
    minHeight: "250px"
  }, children: [props.isLinking ? (0, import_jsx_runtime2.jsx)(ModalHeader, { title: props.connectLocale.manageWallet.linkProfile, onBack }) : (0, import_jsx_runtime2.jsx)(EcosystemWalletHeader, { client: props.client, onBack: isCompact ? onBack : void 0, wallet: props.wallet }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime2.jsx)(Container, { expand: true, flex: "column", center: "y", p: isCompact ? void 0 : "lg", children: (0, import_jsx_runtime2.jsx)(ConnectWalletSocialOptions, { disabled: props.meta.requireApproval && !isApproved, ...props }) }), isCompact && (props.meta.showThirdwebBranding !== false || props.meta.termsOfServiceUrl || props.meta.privacyPolicyUrl) && (0, import_jsx_runtime2.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime2.jsxs)(Container, { flex: "column", gap: "lg", children: [(0, import_jsx_runtime2.jsx)(TOS, { termsOfServiceUrl: props.meta.termsOfServiceUrl, privacyPolicyUrl: props.meta.privacyPolicyUrl, locale: props.connectLocale.agreement, requireApproval: props.meta.requireApproval, onApprove: () => {
    setIsApproved(!isApproved);
  }, isApproved }), props.meta.showThirdwebBranding !== false && (0, import_jsx_runtime2.jsx)(PoweredByThirdweb, {})] })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletConnectUI.js
function EcosystemWalletConnectUI(props) {
  const data = useSelectionData();
  const setSelectionData = useSetSelectionData();
  const state = data;
  const localeId = props.connectLocale.id;
  const locale = useInAppWalletLocale(localeId);
  if (!locale) {
    return (0, import_jsx_runtime3.jsx)(LoadingScreen, {});
  }
  const goBackToMain = () => {
    var _a;
    if (props.size === "compact") {
      (_a = props.goBack) == null ? void 0 : _a.call(props);
    }
    setSelectionData({});
  };
  const done = () => {
    props.done();
    setSelectionData({});
  };
  const otpUserInfo = (state == null ? void 0 : state.emailLogin) ? { email: state.emailLogin } : (state == null ? void 0 : state.phoneLogin) ? { phone: state.phoneLogin } : void 0;
  if (otpUserInfo) {
    return (0, import_jsx_runtime3.jsx)(OTPLoginUI, { userInfo: otpUserInfo, locale, done, goBack: goBackToMain, wallet: props.wallet, chain: props.chain, client: props.client, size: props.size, isLinking: props.isLinking });
  }
  if (state == null ? void 0 : state.passkeyLogin) {
    return (0, import_jsx_runtime3.jsx)(PassKeyLogin, { locale: props.connectLocale, wallet: props.wallet, done, onBack: goBackToMain, chain: props.chain, client: props.client, size: props.size, isLinking: props.isLinking });
  }
  if (state == null ? void 0 : state.socialLogin) {
    return (0, import_jsx_runtime3.jsx)(SocialLogin, { socialAuth: state.socialLogin.type, locale, done, goBack: goBackToMain, wallet: props.wallet, state, chain: props.chain, client: props.client, size: props.size, connectLocale: props.connectLocale, isLinking: props.isLinking });
  }
  if (state == null ? void 0 : state.walletLogin) {
    return (0, import_jsx_runtime3.jsx)(WalletAuth, { meta: props.meta, inAppLocale: locale, walletConnect: props.walletConnect, wallet: props.wallet, client: props.client, size: props.size, done, onBack: goBackToMain || (() => setSelectionData({})), locale: props.connectLocale, isLinking: state.walletLogin.linking });
  }
  if (state == null ? void 0 : state.guestLogin) {
    return (0, import_jsx_runtime3.jsx)(GuestLogin, { locale, done, goBack: goBackToMain, wallet: props.wallet, state, client: props.client, size: props.size, connectLocale: props.connectLocale });
  }
  return (0, import_jsx_runtime3.jsx)(EcosystemWalletFormUIScreen, { select: () => {
  }, locale, done, goBack: props.goBack, wallet: props.wallet, chain: props.chain, client: props.client, size: props.size, connectLocale: props.connectLocale, meta: props.meta, isLinking: props.isLinking });
}
var EcosystemWalletConnectUI_default = EcosystemWalletConnectUI;

export {
  EcosystemWalletConnectUI_default
};
//# sourceMappingURL=chunk-EGJT3UEX.js.map
