import {
  linkProfile
} from "./chunk-65EUCVOP.js";
import {
  Input,
  InputContainer,
  Spinner,
  useSetSelectionData
} from "./chunk-AARWH2GQ.js";
import {
  ArrowRightIcon,
  Button,
  Container,
  EmailIcon,
  FingerPrintIcon,
  GuestIcon,
  IconButton,
  Img,
  OutlineWalletIcon,
  PhoneIcon,
  Spacer,
  StyledDiv,
  StyledOption,
  StyledSelect,
  Text,
  fontSize,
  iconSize,
  newStyled,
  radius,
  setLastAuthProvider,
  socialIcons,
  spacing,
  useConnectionManagerCtx,
  useCustomTheme,
  useQuery
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  isEcosystemWallet
} from "./chunk-XC5J5ANL.js";
import {
  getEcosystemInfo
} from "./chunk-QLJVAXYD.js";
import {
  getLoginUrl,
  loginWithOauthRedirect
} from "./chunk-J7FYPWA5.js";
import {
  socialAuthOptions
} from "./chunk-EIBOABXT.js";
import {
  webLocalStorage
} from "./chunk-VIBS7Y3M.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js
var import_react = __toESM(require_react(), 1);
function useActiveAccount() {
  const manager = useConnectionManagerCtx("useActiveAccount");
  const store = manager.activeAccountStore;
  return (0, import_react.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/constants.js
var reservedScreens = {
  main: "main",
  getStarted: "getStarted",
  signIn: "signIn",
  showAll: "showAll"
};
var modalMaxWidthCompact = "360px";
var wideModalWidth = 730;
var modalMaxWidthWide = `${wideModalWidth}px`;
var wideModalScreenThreshold = wideModalWidth + 40;
var wideModalMaxHeight = "570px";
var compactModalMaxHeight = "660px";
var modalCloseFadeOutDuration = 250;
function onModalUnmount(cb) {
  setTimeout(cb, modalCloseFadeOutDuration + 100);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/screen.js
var import_react2 = __toESM(require_react(), 1);
var ScreenSetupContext = (0, import_react2.createContext)(void 0);
function useSetupScreen(props) {
  let initialScreen = reservedScreens.main;
  const socialLogin = props.wallets.find((w) => w.id === "embedded" || w.id === "inApp");
  if (props.wallets.length === 1 && props.wallets[0]) {
    initialScreen = props.wallets[0];
  } else if (props.size === "wide" && !props.welcomeScreen && socialLogin) {
    initialScreen = socialLogin;
  }
  const [screen, setScreen] = (0, import_react2.useState)(initialScreen);
  const prevInitialScreen = (0, import_react2.useRef)(initialScreen);
  const activeAccount = useActiveAccount();
  (0, import_react2.useEffect)(() => {
    if (initialScreen !== prevInitialScreen.current) {
      prevInitialScreen.current = initialScreen;
      setScreen(initialScreen);
    }
  }, [initialScreen]);
  (0, import_react2.useEffect)(() => {
    if (!activeAccount && screen === reservedScreens.signIn) {
      setScreen(reservedScreens.main);
    }
  }, [activeAccount, screen]);
  return {
    screen,
    setScreen,
    initialScreen
  };
}
function useScreenContext() {
  const ctx = (0, import_react2.useContext)(ScreenSetupContext);
  if (!ctx) {
    throw new Error("useScreenContext must be used within a <ScreenSetupContext.Provider />");
  }
  return ctx;
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingScreen.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function LoadingScreen(props) {
  return (0, import_jsx_runtime.jsx)(Container, { style: {
    minHeight: props.height || "350px"
  }, fullHeight: true, flex: "row", center: "both", children: (0, import_jsx_runtime.jsx)(Spinner, { size: "xl", color: "secondaryText" }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectWalletSocialOptions.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletTypeRowButton.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function WalletTypeRowButton(props) {
  return (0, import_jsx_runtime2.jsx)(Button, { fullWidth: true, variant: "outline", style: {
    display: "flex",
    justifyContent: "flex-start",
    padding: spacing.sm
  }, onClick: () => {
    props.onClick();
  }, disabled: props.disabled, children: (0, import_jsx_runtime2.jsxs)(Container, { flex: "row", gap: "sm", center: "y", color: "accentText", children: [(0, import_jsx_runtime2.jsx)(props.icon, { size: iconSize.md }), (0, import_jsx_runtime2.jsx)(Text, { color: "primaryText", children: props.title })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/TextDivider.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var TextDivider = (props) => {
  return (0, import_jsx_runtime3.jsx)(TextDividerEl, { style: {
    paddingBlock: props.py ? spacing[props.py] : 0
  }, children: (0, import_jsx_runtime3.jsxs)("span", { children: [" ", props.text] }) });
};
var TextDividerEl = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    alignItems: "center",
    color: theme.colors.secondaryText,
    fontSize: fontSize.sm,
    "&::before, &::after": {
      content: '""',
      flex: 1,
      borderBottom: `1px solid ${theme.colors.separatorLine}`
    },
    span: {
      margin: "0 16px"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InputSelectionUI.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/CountrySelector.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
function CountrySelector({ countryCode, setCountryCode }) {
  const selectRef = (0, import_react3.useRef)(null);
  const { data: supportedCountries } = useQuery({
    queryKey: ["supported-sms-countries"],
    queryFn: async () => {
      const { supportedSmsCountries } = await import("./supported-sms-countries-MILFNFSC.js");
      return supportedSmsCountries;
    }
  });
  const supportedCountriesForSms = supportedCountries ?? [
    {
      countryIsoCode: "US",
      countryName: "United States",
      phoneNumberCode: 1
    }
  ];
  return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: (0, import_jsx_runtime4.jsxs)(Select, { ref: selectRef, name: "countries", id: "countries", value: countryCode, onChange: (e) => {
    setCountryCode(e.target.value);
  }, style: {
    padding: `${spacing.sm} ${spacing.md}`
  }, children: [(0, import_jsx_runtime4.jsx)(Option, { style: {
    display: "none"
  }, value: countryCode, children: countryCode }), supportedCountriesForSms.map((country) => {
    return (0, import_jsx_runtime4.jsxs)(Option, { value: `${country.countryIsoCode} +${country.phoneNumberCode}`, children: [country.countryName, " +", country.phoneNumberCode] }, country.countryIsoCode);
  })] }) });
}
var Option = StyledOption(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.primaryText,
    background: theme.colors.modalBg,
    transition: "background 0.3s ease",
    "&:hover": {
      background: theme.colors.tertiaryBg
    }
  };
});
var Select = StyledSelect((_) => {
  const theme = useCustomTheme();
  return {
    display: "block",
    padding: spacing.sm,
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    borderRadius: radius.lg,
    color: theme.colors.primaryText,
    WebkitAppearance: "none",
    appearance: "none",
    cursor: "pointer",
    background: "transparent",
    "&::placeholder": {
      color: theme.colors.secondaryText
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    minWidth: "0px",
    maxWidth: "90px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InputSelectionUI.js
function InputSelectionUI(props) {
  const [countryCodeInfo, setCountryCodeInfo] = (0, import_react4.useState)("US +1");
  const [input, setInput] = (0, import_react4.useState)("");
  const [error, setError] = (0, import_react4.useState)();
  const [showError, setShowError] = (0, import_react4.useState)(false);
  const handleSelect = () => {
    setShowError(true);
    if (!input || !!error) {
      return;
    }
    props.onSelect(props.format === "phone" ? `+${countryCodeInfo.split("+")[1]}${input}` : input);
  };
  const renderingError = showError && !!error || !input && !!props.emptyErrorMessage && showError;
  return (0, import_jsx_runtime5.jsxs)("div", { style: {
    width: "100%"
  }, children: [(0, import_jsx_runtime5.jsxs)(InputContainer, { style: {
    position: "relative",
    display: "flex",
    flexDirection: "row"
  }, "data-error": renderingError, children: [props.format === "phone" && (0, import_jsx_runtime5.jsx)(CountrySelector, { countryCode: countryCodeInfo, setCountryCode: setCountryCodeInfo }), (0, import_jsx_runtime5.jsx)(Input, { tabIndex: -1, placeholder: props.placeholder, style: {
    flexGrow: 1,
    padding: `${spacing.sm} ${props.format === "phone" ? 0 : spacing.sm}`
  }, variant: "transparent", type: props.type, name: props.name, value: input, disabled: props.disabled, onChange: (e) => {
    setInput(e.target.value);
    if (props.errorMessage) {
      setError(props.errorMessage(e.target.value));
    } else {
      setError(void 0);
    }
  }, onKeyDown: (e) => {
    if (e.key === "Enter") {
      handleSelect();
    }
  } }), (0, import_jsx_runtime5.jsx)(IconButton, { onClick: handleSelect, disabled: props.disabled, style: {
    padding: spacing.sm,
    borderRadius: `0 ${radius.md} ${radius.md} 0`
  }, children: (0, import_jsx_runtime5.jsx)(ArrowRightIcon, { width: iconSize.md, height: iconSize.md }) })] }), showError && error && (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [(0, import_jsx_runtime5.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime5.jsx)(Text, { color: "danger", size: "sm", children: error })] }), !(showError && error) && !input && props.emptyErrorMessage && showError && (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [(0, import_jsx_runtime5.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime5.jsx)(Text, { color: "danger", size: "sm", children: props.emptyErrorMessage })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/validateEmail.js
function validateEmail(str) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(str.replace(/\+/g, ""));
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/oauthSignIn.js
function getBodyTitle(authOption) {
  switch (authOption) {
    case "google":
      return "Sign In - Google Accounts";
    default:
      return `Sign In - ${authOption.slice(0, 1).toUpperCase()}${authOption.slice(1)}`;
  }
}
function getWidthAndHeight(authOption) {
  switch (authOption) {
    case "facebook":
      return { width: 715, height: 555 };
    default:
      return { width: 350, height: 500 };
  }
}
function getOauthLoginPath(authOption, client, ecosystem) {
  switch (authOption) {
    case "apple":
    case "facebook":
    case "google":
    case "farcaster":
    case "telegram":
    case "github":
    case "twitch":
    case "line":
    case "x":
    case "guest":
    case "coinbase":
    case "discord":
      return getLoginUrl({ authOption, client, ecosystem });
    default:
      throw new Error(`Unsupported auth option: ${authOption}`);
  }
}
function openOauthSignInWindow({ authOption, themeObj, client, ecosystem }) {
  const { height, width } = getWidthAndHeight(authOption);
  const top = (window.innerHeight - height) / 2;
  const left = (window.innerWidth - width) / 2;
  const win = window.open(getOauthLoginPath(authOption, client, ecosystem), void 0, `width=${width}, height=${height}, top=${top}, left=${left}`);
  if (win) {
    const title = getBodyTitle(authOption);
    win.document.title = title;
    win.document.body.innerHTML = spinnerWindowHtml;
    win.document.body.style.background = themeObj.colors.modalBg;
    win.document.body.style.color = themeObj.colors.accentText;
  }
  if (win) {
    window.addEventListener("beforeunload", () => {
      win == null ? void 0 : win.close();
    });
  }
  return win;
}
var spinnerWindowHtml = `
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
        }
  }
</style>
`;

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectWalletSocialOptions.js
var defaultAuthOptions = [
  "email",
  "phone",
  "google",
  "apple",
  "facebook",
  "passkey"
];
var ConnectWalletSocialOptions = (props) => {
  var _a, _b, _c;
  const locale = props.locale;
  const { wallet } = props;
  const setData = useSetSelectionData();
  const themeObj = useCustomTheme();
  const optionalImageMetadata = (0, import_react5.useMemo)(() => {
    var _a2, _b2;
    return props.wallet.id === "inApp" ? (_b2 = (_a2 = props.wallet.getConfig()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b2.image : void 0;
  }, [props.wallet]);
  const loginMethodsLabel = {
    google: locale.signInWithGoogle,
    facebook: locale.signInWithFacebook,
    apple: locale.signInWithApple,
    discord: locale.signInWithDiscord,
    line: "LINE",
    x: "X",
    coinbase: "Coinbase",
    farcaster: "Farcaster",
    telegram: "Telegram",
    github: "GitHub",
    twitch: "Twitch"
  };
  const { data: ecosystemAuthOptions, isLoading } = useQuery({
    queryKey: ["auth-options", wallet.id],
    queryFn: async () => {
      if (isEcosystemWallet(wallet)) {
        const options = await getEcosystemInfo(wallet.id);
        return (options == null ? void 0 : options.authOptions) ?? null;
      }
      return null;
    },
    enabled: isEcosystemWallet(wallet),
    retry: false
  });
  const authOptions = isEcosystemWallet(wallet) ? ecosystemAuthOptions ?? defaultAuthOptions : ((_b = (_a = wallet.getConfig()) == null ? void 0 : _a.auth) == null ? void 0 : _b.options) ?? defaultAuthOptions;
  const emailIndex = authOptions.indexOf("email");
  const isEmailEnabled = emailIndex !== -1;
  const phoneIndex = authOptions.indexOf("phone");
  const isPhoneEnabled = phoneIndex !== -1;
  const socialLogins = authOptions.filter((o) => socialAuthOptions.includes(o));
  const columnCount = (0, import_react5.useMemo)(() => {
    switch (socialLogins.length) {
      case 7:
        return 4;
      case 6:
        return 4;
      default:
        return 5;
    }
  }, [socialLogins.length]);
  const socialLoginColumns = (0, import_react5.useMemo)(() => {
    return Array.from({ length: Math.ceil(socialLogins.length / columnCount) }, (_, i) => socialLogins.slice(i * columnCount, (i + 1) * columnCount));
  }, [socialLogins, columnCount]);
  const [manualInputMode, setManualInputMode] = (0, import_react5.useState)(null);
  const inputMode = (0, import_react5.useMemo)(() => {
    if (manualInputMode) {
      return manualInputMode;
    }
    if (isEmailEnabled && isPhoneEnabled) {
      return emailIndex < phoneIndex ? "email" : "phone";
    }
    if (isEmailEnabled) {
      return "email";
    }
    if (isPhoneEnabled) {
      return "phone";
    }
    return "none";
  }, [isEmailEnabled, isPhoneEnabled, emailIndex, phoneIndex, manualInputMode]);
  if (isEcosystemWallet(wallet) && isLoading) {
    return (0, import_jsx_runtime6.jsx)(LoadingScreen, {});
  }
  const passKeyEnabled = authOptions.includes("passkey");
  const guestEnabled = authOptions.includes("guest");
  const siweEnabled = authOptions.includes("wallet");
  const placeholder = inputMode === "email" ? locale.emailPlaceholder : locale.phonePlaceholder;
  const emptyErrorMessage = inputMode === "email" ? locale.emailRequired : locale.phoneRequired;
  let type = "text";
  if (inputMode === "email") {
    type = "email";
  } else if (inputMode === "phone") {
    type = "tel";
  }
  const hasSocialLogins = socialLogins.length > 0;
  const ecosystemInfo = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_c = wallet.getConfig()) == null ? void 0 : _c.partnerId
  } : void 0;
  const handleGuestLogin = async () => {
    const connectOptions = {
      client: props.client,
      ecosystem: ecosystemInfo,
      strategy: "guest"
    };
    const connectPromise = (async () => {
      const result = await wallet.connect(connectOptions);
      setLastAuthProvider("guest", webLocalStorage);
      return result;
    })();
    setData({
      guestLogin: {
        connectionPromise: connectPromise
      }
    });
    props.select();
  };
  const handleSocialLogin = async (strategy) => {
    var _a2, _b2;
    const walletConfig = wallet.getConfig();
    const authMode = ((_a2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _a2.mode) ?? "popup";
    if (walletConfig && "auth" in walletConfig && authMode !== "popup" && !props.isLinking) {
      return loginWithOauthRedirect({
        authOption: strategy,
        client: props.client,
        ecosystem: ecosystemInfo,
        redirectUrl: (_b2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _b2.redirectUrl,
        mode: authMode
      });
    }
    try {
      const socialLoginWindow = openOauthSignInWindow({
        authOption: strategy,
        themeObj,
        client: props.client,
        ecosystem: ecosystemInfo
      });
      if (!socialLoginWindow) {
        throw new Error("Failed to open login window");
      }
      const connectOptions = {
        chain: props.chain,
        client: props.client,
        strategy,
        openedWindow: socialLoginWindow,
        closeOpenedWindow: (openedWindow) => {
          openedWindow.close();
        },
        ecosystem: ecosystemInfo
      };
      const connectPromise = (() => {
        if (props.isLinking) {
          if (wallet.id !== "inApp" && !isEcosystemWallet(wallet)) {
            throw new Error("Only in-app wallets support multi-auth");
          }
          return linkProfile(connectOptions);
        }
        const connectPromise2 = wallet.connect(connectOptions);
        setLastAuthProvider(strategy, webLocalStorage);
        return connectPromise2;
      })();
      setData({
        socialLogin: {
          type: strategy,
          connectionPromise: connectPromise
        }
      });
      props.select();
    } catch (e) {
      console.error(`Error signing in with ${strategy}`, e);
    }
  };
  function handlePassKeyLogin() {
    setData({
      passkeyLogin: true
    });
    props.select();
  }
  function handleWalletLogin() {
    setData({
      walletLogin: {
        linking: props.isLinking || false
      }
    });
    props.select();
  }
  const showOnlyIcons = socialLogins.length > 2;
  return (0, import_jsx_runtime6.jsxs)(Container, { flex: "column", gap: "md", style: {
    position: "relative"
  }, children: [optionalImageMetadata && (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [(0, import_jsx_runtime6.jsx)(Img, { client: props.client, src: optionalImageMetadata.src, alt: optionalImageMetadata.alt, width: `${optionalImageMetadata.width}`, height: `${optionalImageMetadata.height}`, style: { margin: "auto" } }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "xxs" })] }), hasSocialLogins && (0, import_jsx_runtime6.jsx)(Container, { flex: "column", gap: socialLogins.length > 4 ? "xs" : "sm", children: socialLoginColumns.map((column) => (0, import_jsx_runtime6.jsx)(SocialButtonRow, { children: column.map((loginMethod) => {
    const imgIconSize = (() => {
      if (!showOnlyIcons) {
        return iconSize.md;
      }
      if (socialLogins.length > 4) {
        return iconSize.md;
      }
      return iconSize.lg;
    })();
    return (0, import_jsx_runtime6.jsxs)(SocialButton, { "aria-label": `Login with ${loginMethod}`, "data-variant": showOnlyIcons ? "icon" : "full", variant: "outline", disabled: props.disabled, onClick: () => {
      handleSocialLogin(loginMethod);
    }, style: {
      flexGrow: socialLogins.length < 7 ? 1 : 0
    }, children: [(0, import_jsx_runtime6.jsx)(Img, { src: socialIcons[loginMethod], width: imgIconSize, height: imgIconSize, client: props.client }), !showOnlyIcons && `${socialLogins.length === 1 ? "Continue with " : ""}${loginMethodsLabel[loginMethod]}`] }, loginMethod);
  }) }, column[0])) }), props.size === "wide" && hasSocialLogins && (isEmailEnabled || isPhoneEnabled) && (0, import_jsx_runtime6.jsx)(TextDivider, { text: locale.or }), isEmailEnabled && (inputMode === "email" ? (0, import_jsx_runtime6.jsx)(InputSelectionUI, { type, onSelect: (value) => {
    setData({ emailLogin: value });
    props.select();
  }, placeholder, name: "email", errorMessage: (input) => {
    const isValidEmail = validateEmail(input.toLowerCase());
    if (!isValidEmail) {
      return locale.invalidEmail;
    }
    return void 0;
  }, disabled: props.disabled, emptyErrorMessage, submitButtonText: locale.submitEmail }) : (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: EmailIcon, onClick: () => {
    setManualInputMode("email");
  }, title: locale.emailPlaceholder, disabled: props.disabled })), isPhoneEnabled && (inputMode === "phone" ? (0, import_jsx_runtime6.jsx)(InputSelectionUI, { format: "phone", type, onSelect: (value) => {
    setData({ phoneLogin: value.replace(/[-\(\) ]/g, "") });
    props.select();
  }, placeholder, name: "phone", errorMessage: (_input) => {
    const input = _input.replace(/[-\(\) ]/g, "");
    const isPhone = /^[0-9]+$/.test(input);
    if (!isPhone && isPhoneEnabled) {
      return locale.invalidPhone;
    }
    return void 0;
  }, disabled: props.disabled, emptyErrorMessage, submitButtonText: locale.submitEmail }) : (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: PhoneIcon, onClick: () => {
    setManualInputMode("phone");
  }, title: locale.phonePlaceholder, disabled: props.disabled })), passKeyEnabled && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: FingerPrintIcon, onClick: () => {
    handlePassKeyLogin();
  }, title: locale.passkey, disabled: props.disabled }), siweEnabled && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: OutlineWalletIcon, onClick: () => {
    handleWalletLogin();
  }, title: locale.signInWithWallet }), guestEnabled && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: GuestIcon, onClick: () => {
    handleGuestLogin();
  }, title: locale.loginAsGuest, disabled: props.disabled }), props.isLinking && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: OutlineWalletIcon, onClick: () => {
    handleWalletLogin();
  }, title: locale.linkWallet })] });
};
var SocialButtonRow = (props) => (0, import_jsx_runtime6.jsx)(Container, { flex: "row", center: "x", gap: props.children.length > 4 ? "xs" : "sm", style: {
  justifyContent: "center",
  display: "flex",
  ...{
    "& > *": {
      flexBasis: `${100 / props.children.length}%`,
      maxWidth: `${100 / props.children.length}%`
    }
  }
}, children: props.children });
var SocialButton = newStyled(Button)({
  "&[data-variant='full']": {
    display: "flex",
    justifyContent: "flex-start",
    padding: spacing.md,
    gap: spacing.sm,
    fontSize: fontSize.md,
    fontWeight: 500,
    transition: "background-color 0.2s ease",
    "&:active": {
      boxShadow: "none"
    }
  },
  "&[data-variant='icon']": {
    padding: spacing.sm
  }
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/useInAppWalletLocale.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/locale/getConnectLocale.js
async function getInAppWalletLocale(localeId) {
  switch (localeId) {
    case "es_ES":
      return (await import("./es-LKAELXTV.js")).default;
    case "ja_JP":
      return (await import("./ja-PZYAXXAL.js")).default;
    case "tl_PH":
      return (await import("./tl-B6Y73PTZ.js")).default;
    case "vi_VN":
      return (await import("./vi-6NOSFFF7.js")).default;
    case "de_DE":
      return (await import("./de-BT7LP6QO.js")).default;
    case "ko_KR":
      return (await import("./kr-QIL3MJCP.js")).default;
    case "fr_FR":
      return (await import("./fr-DKOBC2XB.js")).default;
    default:
      return (await import("./en-YMFAQ6ZL.js")).default;
  }
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/useInAppWalletLocale.js
function useInAppWalletLocale(localeId) {
  const [locale, setLocale] = (0, import_react6.useState)(void 0);
  (0, import_react6.useEffect)(() => {
    getInAppWalletLocale(localeId).then((l) => {
      setLocale(l);
    });
  }, [localeId]);
  return locale;
}

export {
  useActiveAccount,
  reservedScreens,
  modalMaxWidthCompact,
  modalMaxWidthWide,
  wideModalScreenThreshold,
  wideModalMaxHeight,
  compactModalMaxHeight,
  modalCloseFadeOutDuration,
  onModalUnmount,
  ScreenSetupContext,
  useSetupScreen,
  useScreenContext,
  LoadingScreen,
  TextDivider,
  openOauthSignInWindow,
  WalletTypeRowButton,
  InputSelectionUI,
  ConnectWalletSocialOptions,
  useInAppWalletLocale
};
//# sourceMappingURL=chunk-KWA5PGSC.js.map
