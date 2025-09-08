import {
  Container,
  CustomThemeProvider,
  Skeleton,
  StyledButton,
  StyledCircle,
  StyledDiv,
  StyledInput,
  StyledLabel,
  StyledSvg,
  Text,
  WalletImage,
  fontSize,
  iconSize,
  keyframes,
  radius,
  spacing,
  useCustomTheme,
  useWalletInfo
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  getInstalledWalletProviders
} from "./chunk-PWFRCBEK.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/providers/wallet-ui-states-provider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var WalletModalOpen = (0, import_react.createContext)(false);
var SetWalletModalOpen = (0, import_react.createContext)(() => {
});
var SelectionUIDataCtx = (0, import_react.createContext)({});
var SetSelectionUIDataCtx = (0, import_react.createContext)(() => {
});
var WalletUIStatesProvider = (props) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = (0, import_react.useState)(props.isOpen);
  const [selectionUIData, setSelectionUIData] = (0, import_react.useState)({});
  return (0, import_jsx_runtime.jsx)(WalletModalOpen.Provider, { value: isWalletModalOpen, children: (0, import_jsx_runtime.jsx)(SetWalletModalOpen.Provider, { value: setIsWalletModalOpen, children: (0, import_jsx_runtime.jsx)(SelectionUIDataCtx.Provider, { value: selectionUIData, children: (0, import_jsx_runtime.jsx)(SetSelectionUIDataCtx.Provider, { value: setSelectionUIData, children: (0, import_jsx_runtime.jsx)(CustomThemeProvider, { theme: props.theme, children: props.children }) }) }) }) });
};
var useIsWalletModalOpen = () => {
  return (0, import_react.useContext)(WalletModalOpen);
};
var useSetIsWalletModalOpen = () => {
  const context = (0, import_react.useContext)(SetWalletModalOpen);
  if (context === void 0) {
    throw new Error("useSetWalletModalOpen must be used within a ThirdwebProvider");
  }
  return context;
};
function useSetSelectionData() {
  return (0, import_react.useContext)(SetSelectionUIDataCtx);
}
function useSelectionData() {
  return (0, import_react.useContext)(SelectionUIDataCtx);
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Spinner.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var Spinner = (props) => {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime2.jsx)(Svg, { style: {
    width: `${iconSize[props.size]}px`,
    height: `${iconSize[props.size]}px`
  }, viewBox: "0 0 50 50", children: (0, import_jsx_runtime2.jsx)(Circle, { cx: "25", cy: "25", r: "20", fill: "none", stroke: theme.colors[props.color], strokeWidth: Number(iconSize[props.size]) > 64 ? "2" : "4" }) });
};
var dashAnimation = keyframes`
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
`;
var rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
var Svg = StyledSvg({
  animation: `${rotateAnimation} 2s linear infinite`,
  width: "1em",
  height: "1em"
});
var Circle = StyledCircle({
  strokeLinecap: "round",
  animation: `${dashAnimation} 1.5s ease-in-out infinite`
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/formElements.js
var Label = StyledLabel((props) => {
  const theme = useCustomTheme();
  return {
    fontSize: fontSize.sm,
    color: theme.colors[props.color || "primaryText"],
    display: "block",
    fontWeight: 500
  };
});
var Input = StyledInput((props) => {
  const theme = useCustomTheme();
  return {
    fontSize: fontSize.md,
    fontFamily: "inherit",
    display: "block",
    padding: props.sm ? spacing.sm : fontSize.sm,
    boxSizing: "border-box",
    width: "100%",
    outline: "none",
    border: "none",
    borderRadius: radius.md,
    color: theme.colors.primaryText,
    WebkitAppearance: "none",
    appearance: "none",
    background: "transparent",
    "&::placeholder": {
      color: theme.colors.secondaryText
    },
    boxShadow: `0 0 0 1.5px ${props.variant === "outline" ? theme.colors.borderColor : "transparent"}`,
    "&:-webkit-autofill": {
      WebkitTextFillColor: theme.colors.primaryText,
      WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset !important`,
      boxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset !important`,
      transition: "background-color 5000s ease-in-out 0s"
    },
    "&:-webkit-autofill:focus": {
      WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset, 0 0 0 2px ${props.variant === "outline" ? theme.colors.accentText : "transparent"} !important`,
      boxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset, 0 0 0 2px ${props.variant === "outline" ? theme.colors.accentText : "transparent"} !important`
    },
    "&[data-placeholder='true']": {
      color: theme.colors.secondaryText
    },
    "&:focus": {
      boxShadow: `0 0 0 2px ${theme.colors.accentText}`
    },
    "&[data-focus='false']:focus": {
      boxShadow: "none"
    },
    "&:not([type='password'])": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    "&[data-error='true']": {
      boxShadow: `0 0 0 2px ${theme.colors.danger} !important`
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    "&[type='number']": {
      appearance: "none",
      MozAppearance: "textfield"
    }
  };
});
var InputContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    borderRadius: radius.md,
    boxShadow: `0 0 0px 1px ${theme.colors.borderColor}`,
    "&:focus-within": {
      boxShadow: `0 0 0px 1px ${theme.colors.accentText}`
    },
    "input:focus": {
      boxShadow: "none"
    },
    // show error ring on container instead of input
    "&[data-error='true']": {
      boxShadow: `0 0 0px 1px ${theme.colors.danger}`
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletEntryButton.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function WalletEntryButton(props) {
  var _a, _b, _c;
  const { walletId, selectWallet } = props;
  const isRecommended = (_a = props.recommendedWallets) == null ? void 0 : _a.find((w) => w.id === walletId);
  const walletInfo = useWalletInfo(walletId);
  const walletName = ((_b = getInstalledWalletProviders().find((p) => p.info.rdns === walletId)) == null ? void 0 : _b.info.name) || ((_c = walletInfo.data) == null ? void 0 : _c.name);
  const isInstalled = getInstalledWalletProviders().find((p) => p.info.rdns === walletId);
  return (0, import_jsx_runtime3.jsxs)(WalletButtonEl, { type: "button", onClick: selectWallet, "data-active": props.isActive, children: [(0, import_jsx_runtime3.jsx)(WalletImage, { id: walletId, size: iconSize.xl, client: props.client }), (0, import_jsx_runtime3.jsxs)(Container, { flex: "column", gap: "xxs", expand: true, children: [walletName ? (0, import_jsx_runtime3.jsx)(Text, { color: "primaryText", weight: 600, children: walletName }) : (0, import_jsx_runtime3.jsx)(Skeleton, { width: "100px", height: fontSize.md }), props.badge ? (0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: props.badge }) : isRecommended ? (0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: props.connectLocale.recommended }) : isInstalled ? (0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: props.connectLocale.installed }) : null] })] });
}
var WalletButtonEl = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    cursor: "pointer",
    boxSizing: "border-box",
    width: "100%",
    color: theme.colors.secondaryText,
    position: "relative",
    borderRadius: radius.md,
    padding: `${spacing.xs} ${spacing.xs}`,
    "&:hover": {
      backgroundColor: theme.colors.tertiaryBg,
      transform: "scale(1.01)"
    },
    '&[data-active="true"]': {
      backgroundColor: theme.colors.tertiaryBg
    },
    transition: "background-color 200ms ease, transform 200ms ease"
  };
});

export {
  WalletUIStatesProvider,
  useIsWalletModalOpen,
  useSetIsWalletModalOpen,
  useSetSelectionData,
  useSelectionData,
  Spinner,
  Label,
  Input,
  InputContainer,
  WalletEntryButton,
  WalletButtonEl
};
//# sourceMappingURL=chunk-AARWH2GQ.js.map
