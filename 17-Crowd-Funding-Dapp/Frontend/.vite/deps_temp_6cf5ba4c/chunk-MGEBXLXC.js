import {
  Button,
  Container,
  Line,
  ModalHeader,
  ReloadIcon,
  Spacer,
  StyledDiv,
  Text,
  WalletImage,
  fadeInAnimation,
  iconSize,
  keyframes,
  radius,
  spacing,
  useCustomTheme
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectingScreen.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletLogoSpinner.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function WalletLogoSpinner(props) {
  const loaderRadius = 20;
  const radiusFactor = 36 - loaderRadius;
  const dashArrayStart = 116 + radiusFactor;
  const dashArrayEnd = 245 + radiusFactor;
  const dashOffset = -1 * (360 + radiusFactor * 1.75);
  return (0, import_jsx_runtime.jsx)(LogoContainer, { "data-error": props.error, children: (0, import_jsx_runtime.jsx)("div", { "data-container": true, style: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, children: (0, import_jsx_runtime.jsxs)("div", { "data-img-container": true, children: [!props.hideSpinner && (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 110 110", style: {
    display: props.error ? "none" : "block"
  }, role: "presentation", children: (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "2", width: "106", height: "106", rx: loaderRadius, strokeDasharray: `${dashArrayStart} ${dashArrayEnd}`, strokeDashoffset: dashOffset, strokeLinecap: "round", fill: "none", strokeWidth: 4 }) }), (0, import_jsx_runtime.jsx)(WalletBg, { children: (0, import_jsx_runtime.jsx)(WalletImage, { id: props.id, size: "68", client: props.client }) })] }) }) });
}
var WalletBg = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    borderRadius: "13px",
    border: `1px solid ${theme.colors.borderColor}`,
    padding: spacing.xs,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
});
var dashRotateAnimation = keyframes`
from {
  stroke-dashoffset: 0px;
}
`;
var shakeErrorAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
var pulseAnimation = keyframes`
0% {
  transform: scale(0.95);
}
100% {
  opacity: 0;
  transform: scale(1.3);
}
`;
var LogoContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    borderRadius: radius.xl,
    "[data-img-container]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    "&[data-error='true'] [data-container]": {
      animation: `${shakeErrorAnimation} 0.25s linear`
    },
    "&[data-error='true'] [data-img-container]::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: theme.colors.danger,
      animation: `${pulseAnimation} 1.5s ease infinite`,
      borderRadius: "20px",
      zIndex: -1
    },
    svg: {
      position: "absolute",
      /* can't use inset because safari doesn't like it */
      left: "-8px",
      top: "-8px",
      width: "calc(100% + 16px)",
      height: "calc(100% + 16px)",
      animation: `${fadeInAnimation} 400ms ease`
    },
    img: {
      zIndex: 100
    },
    rect: {
      animation: `${dashRotateAnimation} 1.2s linear infinite`,
      stroke: theme.colors.accentText
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectingScreen.js
var ConnectingScreen = (props) => {
  const { locale } = props;
  return (0, import_jsx_runtime2.jsxs)(Container, { animate: "fadein", fullHeight: true, flex: "column", children: [(0, import_jsx_runtime2.jsx)(Container, { p: "lg", style: {
    paddingBottom: 0
  }, children: (0, import_jsx_runtime2.jsx)(ModalHeader, { title: props.walletName, onBack: props.onBack }) }), (0, import_jsx_runtime2.jsxs)(Container, { flex: "column", center: "y", expand: true, px: props.size === "compact" ? "lg" : "xxl", relative: true, style: {
    paddingTop: 0
  }, children: [(0, import_jsx_runtime2.jsx)(Container, { py: "3xl", children: (0, import_jsx_runtime2.jsx)(WalletLogoSpinner, { client: props.client, error: props.errorConnecting, id: props.walletId }) }), (0, import_jsx_runtime2.jsxs)(Container, { animate: "fadein", style: {
    animationDuration: "200ms"
  }, children: [(0, import_jsx_runtime2.jsx)(Text, { center: true, color: "primaryText", size: "lg", weight: 600, children: props.errorConnecting ? locale.failed : locale.inProgress }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "md" }), !props.errorConnecting ? (0, import_jsx_runtime2.jsx)(Text, { balance: true, center: true, multiline: true, children: locale.instruction }) : (0, import_jsx_runtime2.jsx)(Container, { flex: "row", center: "x", animate: "fadein", children: (0, import_jsx_runtime2.jsxs)(Button, { fullWidth: true, variant: "accent", onClick: props.onRetry, style: {
    gap: spacing.xs,
    alignItems: "center"
  }, children: [(0, import_jsx_runtime2.jsx)(ReloadIcon, { width: iconSize.sm, height: iconSize.sm }), locale.tryAgain] }) })] })] }), props.onGetStarted ? (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime2.jsx)(Line, {}), (0, import_jsx_runtime2.jsx)(Container, { flex: "row", center: "x", p: "lg", children: (0, import_jsx_runtime2.jsx)(Button, { variant: "link", onClick: props.onGetStarted, children: locale.getStartedLink }) })] }) : (0, import_jsx_runtime2.jsx)(Spacer, { y: props.size === "compact" ? "lg" : "xxl" })] });
};

export {
  WalletLogoSpinner,
  ConnectingScreen
};
//# sourceMappingURL=chunk-MGEBXLXC.js.map
