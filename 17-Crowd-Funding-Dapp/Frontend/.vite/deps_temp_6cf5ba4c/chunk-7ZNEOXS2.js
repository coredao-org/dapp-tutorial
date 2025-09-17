import {
  LoadingScreen,
  TextDivider,
  WalletTypeRowButton,
  compactModalMaxHeight,
  openOauthSignInWindow,
  useScreenContext
} from "./chunk-KWA5PGSC.js";
import {
  ConnectingScreen
} from "./chunk-MGEBXLXC.js";
import {
  linkProfile,
  preAuthenticate
} from "./chunk-65EUCVOP.js";
import {
  AllWalletsUI_default,
  createWallet,
  isAndroid,
  isIOS,
  isMobile,
  openWindow,
  sortWallets
} from "./chunk-HO57TQQM.js";
import {
  Spinner,
  WalletButtonEl,
  WalletEntryButton,
  useSetSelectionData
} from "./chunk-AARWH2GQ.js";
import {
  Button,
  ButtonLink,
  CheckIcon,
  ChevronLeftIcon,
  Container,
  CopyIcon,
  ExclamationTriangleIcon,
  ExternalLinkIcon,
  FingerPrintIcon,
  IconButton,
  Img,
  Line,
  Link,
  ModalHeader,
  ModalTitle,
  OutlineWalletIcon,
  ScreenBottomContainer,
  Spacer,
  StyledButton,
  StyledDiv,
  StyledUl,
  Text,
  WalletImage,
  fadeInAnimation,
  fontSize,
  iconSize,
  keyframes,
  noScrollBar,
  radius,
  setLastAuthProvider,
  spacing,
  useConnectionManager,
  useConnectionManagerCtx,
  useCustomTheme,
  useQuery,
  useWalletInfo
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  formatWalletConnectUrl
} from "./chunk-5U5XBS6S.js";
import {
  isEcosystemWallet
} from "./chunk-XC5J5ANL.js";
import {
  getInstalledWalletProviders
} from "./chunk-PWFRCBEK.js";
import {
  COINBASE,
  METAMASK,
  RAINBOW,
  ZERION
} from "./chunk-BZXRHH4X.js";
import {
  hasStoredPasskey
} from "./chunk-XTOEMUZK.js";
import {
  loginWithOauthRedirect
} from "./chunk-J7FYPWA5.js";
import {
  webLocalStorage
} from "./chunk-VIBS7Y3M.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  defineChain
} from "./chunk-TFBEDS4S.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/GuestLogin.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function GuestLogin(props) {
  var _a;
  const ewLocale = props.locale;
  const locale = ewLocale.socialLoginScreen;
  const [authError, setAuthError] = (0, import_react.useState)(void 0);
  const { done, wallet } = props;
  const [status, setStatus] = (0, import_react.useState)("connecting");
  const handleGuestLogin = async () => {
    var _a2, _b;
    const connectOptions = {
      client: props.client,
      ecosystem: isEcosystemWallet(wallet) ? {
        id: wallet.id,
        partnerId: (_a2 = wallet.getConfig()) == null ? void 0 : _a2.partnerId
      } : void 0,
      strategy: "guest"
    };
    try {
      await wallet.connect(connectOptions);
      await setLastAuthProvider("guest", webLocalStorage);
      setStatus("connected");
      done();
    } catch (e) {
      setStatus("error");
      if (e instanceof Error && ((_b = e == null ? void 0 : e.message) == null ? void 0 : _b.includes("PAYMENT_METHOD_REQUIRED"))) {
        setAuthError(ewLocale.maxAccountsExceeded);
      }
      console.error("Error generating guest account", e);
    }
  };
  const guestLogin = (_a = props.state) == null ? void 0 : _a.guestLogin;
  const socialLoginStarted = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (socialLoginStarted.current) {
      return;
    }
    if (guestLogin) {
      socialLoginStarted.current = true;
      setStatus("connecting");
      guestLogin.connectionPromise.then(() => {
        done();
        setStatus("connected");
      }).catch((e) => {
        setAuthError(e.message);
        setStatus("error");
      });
    }
  }, [done, guestLogin]);
  return (0, import_jsx_runtime.jsx)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: (0, import_jsx_runtime.jsxs)(Container, { flex: "column", expand: true, p: "lg", style: {
    paddingBottom: 0
  }, children: [props.goBack && (0, import_jsx_runtime.jsx)(ModalHeader, { title: locale.title, onBack: props.goBack }), props.size === "compact" ? (0, import_jsx_runtime.jsx)(Spacer, { y: "xl" }) : null, (0, import_jsx_runtime.jsxs)(Container, { flex: "column", center: "both", expand: true, style: {
    textAlign: "center",
    minHeight: "250px"
  }, children: [status !== "error" && (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime.jsx)(Text, { color: "primaryText", center: true, multiline: true, style: {
    maxWidth: "250px"
  }, children: "Generating your guest account" }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime.jsx)(Spinner, { size: "lg", color: "accentText" }) }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xxl" })] }), status === "error" && (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", children: [authError ? (0, import_jsx_runtime.jsx)(Text, { center: true, color: "danger", children: authError }) : (0, import_jsx_runtime.jsx)(Text, { color: "danger", children: locale.failed }), (0, import_jsx_runtime.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime.jsx)(Button, { variant: "primary", onClick: handleGuestLogin, children: locale.retry }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xxl" })] })] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/OTPLoginUI.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/FadeIn.js
var FadeIn = StyledDiv({
  animation: `${fadeInAnimation} 0.15s ease-in`
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/OTPInput.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/input-otp/dist/index.mjs
var n = __toESM(require_react(), 1);
var U = __toESM(require_react(), 1);
var S = __toESM(require_react(), 1);
var Bt = Object.defineProperty;
var At = Object.defineProperties;
var kt = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty;
var Et = Object.prototype.propertyIsEnumerable;
var vt = (r, s, e) => s in r ? Bt(r, s, { enumerable: true, configurable: true, writable: true, value: e }) : r[s] = e;
var St = (r, s) => {
  for (var e in s || (s = {}))
    gt.call(s, e) && vt(r, e, s[e]);
  if (Y)
    for (var e of Y(s))
      Et.call(s, e) && vt(r, e, s[e]);
  return r;
};
var bt = (r, s) => At(r, kt(s));
var Pt = (r, s) => {
  var e = {};
  for (var u in r)
    gt.call(r, u) && s.indexOf(u) < 0 && (e[u] = r[u]);
  if (r != null && Y)
    for (var u of Y(r))
      s.indexOf(u) < 0 && Et.call(r, u) && (e[u] = r[u]);
  return e;
};
function ht(r) {
  let s = setTimeout(r, 0), e = setTimeout(r, 10), u = setTimeout(r, 50);
  return [s, e, u];
}
function _t(r) {
  let s = U.useRef();
  return U.useEffect(() => {
    s.current = r;
  }), s.current;
}
var Ot = 18;
var wt = 40;
var Gt = `${wt}px`;
var xt = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Tt({ containerRef: r, inputRef: s, pushPasswordManagerStrategy: e, isFocused: u }) {
  let [P, D] = S.useState(false), [G, H] = S.useState(false), [F, W] = S.useState(false), Z = S.useMemo(() => e === "none" ? false : (e === "increase-width" || e === "experimental-no-flickering") && P && G, [P, G, e]), T = S.useCallback(() => {
    let f = r.current, h = s.current;
    if (!f || !h || F || e === "none")
      return;
    let a = f, B = a.getBoundingClientRect().left + a.offsetWidth, A = a.getBoundingClientRect().top + a.offsetHeight / 2, z = B - Ot, q = A;
    document.querySelectorAll(xt).length === 0 && document.elementFromPoint(z, q) === f || (D(true), W(true));
  }, [r, s, F, e]);
  return S.useEffect(() => {
    let f = r.current;
    if (!f || e === "none")
      return;
    function h() {
      let A = window.innerWidth - f.getBoundingClientRect().right;
      H(A >= wt);
    }
    h();
    let a = setInterval(h, 1e3);
    return () => {
      clearInterval(a);
    };
  }, [r, e]), S.useEffect(() => {
    let f = u || document.activeElement === s.current;
    if (e === "none" || !f)
      return;
    let h = setTimeout(T, 0), a = setTimeout(T, 2e3), B = setTimeout(T, 5e3), A = setTimeout(() => {
      W(true);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(a), clearTimeout(B), clearTimeout(A);
    };
  }, [s, u, e, T]), { hasPWMBadge: P, willPushPWMBadge: Z, PWM_BADGE_SPACE_WIDTH: Gt };
}
var jt = n.createContext({});
var Lt = n.forwardRef((A, B) => {
  var z = A, { value: r, onChange: s, maxLength: e, textAlign: u = "left", pattern: P, placeholder: D, inputMode: G = "numeric", onComplete: H, pushPasswordManagerStrategy: F = "increase-width", pasteTransformer: W, containerClassName: Z, noScriptCSSFallback: T = Nt, render: f, children: h } = z, a = Pt(z, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]);
  var X, lt, ut, dt, ft;
  let [q, nt] = n.useState(typeof a.defaultValue == "string" ? a.defaultValue : ""), i = r != null ? r : q, I = _t(i), x = n.useCallback((t) => {
    s == null || s(t), nt(t);
  }, [s]), m = n.useMemo(() => P ? typeof P == "string" ? new RegExp(P) : P : null, [P]), l = n.useRef(null), K = n.useRef(null), J = n.useRef({ value: i, onChange: x, isIOS: typeof window != "undefined" && ((lt = (X = window == null ? void 0 : window.CSS) == null ? void 0 : X.supports) == null ? void 0 : lt.call(X, "-webkit-touch-callout", "none")) }), V = n.useRef({ prev: [(ut = l.current) == null ? void 0 : ut.selectionStart, (dt = l.current) == null ? void 0 : dt.selectionEnd, (ft = l.current) == null ? void 0 : ft.selectionDirection] });
  n.useImperativeHandle(B, () => l.current, []), n.useEffect(() => {
    let t = l.current, o = K.current;
    if (!t || !o)
      return;
    J.current.value !== t.value && J.current.onChange(t.value), V.current.prev = [t.selectionStart, t.selectionEnd, t.selectionDirection];
    function d() {
      if (document.activeElement !== t) {
        L(null), N(null);
        return;
      }
      let c = t.selectionStart, b = t.selectionEnd, mt = t.selectionDirection, v = t.maxLength, C = t.value, _ = V.current.prev, g = -1, E = -1, w;
      if (C.length !== 0 && c !== null && b !== null) {
        let Dt = c === b, Ht = c === C.length && C.length < v;
        if (Dt && !Ht) {
          let y = c;
          if (y === 0)
            g = 0, E = 1, w = "forward";
          else if (y === v)
            g = y - 1, E = y, w = "backward";
          else if (v > 1 && C.length > 1) {
            let et = 0;
            if (_[0] !== null && _[1] !== null) {
              w = y < _[1] ? "backward" : "forward";
              let Wt = _[0] === _[1] && _[0] < v;
              w === "backward" && !Wt && (et = -1);
            }
            g = et + y, E = et + y + 1;
          }
        }
        g !== -1 && E !== -1 && g !== E && l.current.setSelectionRange(g, E, w);
      }
      let pt = g !== -1 ? g : c, Rt = E !== -1 ? E : b, yt = w != null ? w : mt;
      L(pt), N(Rt), V.current.prev = [pt, Rt, yt];
    }
    if (document.addEventListener("selectionchange", d, { capture: true }), d(), document.activeElement === t && Q(true), !document.getElementById("input-otp-style")) {
      let c = document.createElement("style");
      if (c.id = "input-otp-style", document.head.appendChild(c), c.sheet) {
        let b = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        $(c.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), $(c.sheet, `[data-input-otp]:autofill { ${b} }`), $(c.sheet, `[data-input-otp]:-webkit-autofill { ${b} }`), $(c.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), $(c.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let p = () => {
      o && o.style.setProperty("--root-height", `${t.clientHeight}px`);
    };
    p();
    let R = new ResizeObserver(p);
    return R.observe(t), () => {
      document.removeEventListener("selectionchange", d, { capture: true }), R.disconnect();
    };
  }, []);
  let [ot, rt] = n.useState(false), [j, Q] = n.useState(false), [M, L] = n.useState(null), [k, N] = n.useState(null);
  n.useEffect(() => {
    ht(() => {
      var p, R, c, b;
      (p = l.current) == null || p.dispatchEvent(new Event("input"));
      let t = (R = l.current) == null ? void 0 : R.selectionStart, o = (c = l.current) == null ? void 0 : c.selectionEnd, d = (b = l.current) == null ? void 0 : b.selectionDirection;
      t !== null && o !== null && (L(t), N(o), V.current.prev = [t, o, d]);
    });
  }, [i, j]), n.useEffect(() => {
    I !== void 0 && i !== I && I.length < e && i.length === e && (H == null || H(i));
  }, [e, H, I, i]);
  let O = Tt({ containerRef: K, inputRef: l, pushPasswordManagerStrategy: F, isFocused: j }), st = n.useCallback((t) => {
    let o = t.currentTarget.value.slice(0, e);
    if (o.length > 0 && m && !m.test(o)) {
      t.preventDefault();
      return;
    }
    typeof I == "string" && o.length < I.length && document.dispatchEvent(new Event("selectionchange")), x(o);
  }, [e, x, I, m]), at = n.useCallback(() => {
    var t;
    if (l.current) {
      let o = Math.min(l.current.value.length, e - 1), d = l.current.value.length;
      (t = l.current) == null || t.setSelectionRange(o, d), L(o), N(d);
    }
    Q(true);
  }, [e]), ct = n.useCallback((t) => {
    var g, E;
    let o = l.current;
    if (!W && (!J.current.isIOS || !t.clipboardData || !o))
      return;
    let d = t.clipboardData.getData("text/plain"), p = W ? W(d) : d;
    console.log({ _content: d, content: p }), t.preventDefault();
    let R = (g = l.current) == null ? void 0 : g.selectionStart, c = (E = l.current) == null ? void 0 : E.selectionEnd, v = (R !== c ? i.slice(0, R) + p + i.slice(c) : i.slice(0, R) + p + i.slice(R)).slice(0, e);
    if (v.length > 0 && m && !m.test(v))
      return;
    o.value = v, x(v);
    let C = Math.min(v.length, e - 1), _ = v.length;
    o.setSelectionRange(C, _), L(C), N(_);
  }, [e, x, m, i]), It = n.useMemo(() => ({ position: "relative", cursor: a.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [a.disabled]), it = n.useMemo(() => ({ position: "absolute", inset: 0, width: O.willPushPWMBadge ? `calc(100% + ${O.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: O.willPushPWMBadge ? `inset(0 ${O.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: u, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [O.PWM_BADGE_SPACE_WIDTH, O.willPushPWMBadge, u]), Mt = n.useMemo(() => n.createElement("input", bt(St({ autoComplete: a.autoComplete || "one-time-code" }, a), { "data-input-otp": true, "data-input-otp-placeholder-shown": i.length === 0 || void 0, "data-input-otp-mss": M, "data-input-otp-mse": k, inputMode: G, pattern: m == null ? void 0 : m.source, "aria-placeholder": D, style: it, maxLength: e, value: i, ref: l, onPaste: (t) => {
    var o;
    ct(t), (o = a.onPaste) == null || o.call(a, t);
  }, onChange: st, onMouseOver: (t) => {
    var o;
    rt(true), (o = a.onMouseOver) == null || o.call(a, t);
  }, onMouseLeave: (t) => {
    var o;
    rt(false), (o = a.onMouseLeave) == null || o.call(a, t);
  }, onFocus: (t) => {
    var o;
    at(), (o = a.onFocus) == null || o.call(a, t);
  }, onBlur: (t) => {
    var o;
    Q(false), (o = a.onBlur) == null || o.call(a, t);
  } })), [st, at, ct, G, it, e, k, M, a, m == null ? void 0 : m.source, i]), tt = n.useMemo(() => ({ slots: Array.from({ length: e }).map((t, o) => {
    var c;
    let d = j && M !== null && k !== null && (M === k && o === M || o >= M && o < k), p = i[o] !== void 0 ? i[o] : null, R = i[0] !== void 0 ? null : (c = D == null ? void 0 : D[o]) != null ? c : null;
    return { char: p, placeholderChar: R, isActive: d, hasFakeCaret: d && p === null };
  }), isFocused: j, isHovering: !a.disabled && ot }), [j, ot, e, k, M, a.disabled, i]), Ct = n.useMemo(() => f ? f(tt) : n.createElement(jt.Provider, { value: tt }, h), [h, tt, f]);
  return n.createElement(n.Fragment, null, T !== null && n.createElement("noscript", null, n.createElement("style", null, T)), n.createElement("div", { ref: K, "data-input-otp-container": true, style: It, className: Z }, Ct, n.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Mt)));
});
Lt.displayName = "Input";
function $(r, s) {
  try {
    r.insertRule(s);
  } catch (e) {
    console.error("input-otp could not insert CSS rule:", s);
  }
}
var Nt = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;

// node_modules/thirdweb/dist/esm/react/web/ui/components/OTPInput.js
function OTPInput(props) {
  return (0, import_jsx_runtime2.jsx)(OTPInputContainer, { children: (0, import_jsx_runtime2.jsx)(Lt, { onComplete: () => {
    props.onEnter();
  }, maxLength: 6, value: props.value, render: ({ slots }) => (0, import_jsx_runtime2.jsx)(Container, { flex: "row", gap: "xs", center: "both", children: slots.map((slot, idx) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is the only valid key here
    (0, import_jsx_runtime2.jsx)(Slot, { ...slot, isInvalid: props.isInvalid }, idx)
  )) }), onChange: (newValue) => {
    props.setValue(newValue);
  } }) });
}
var OTPInputContainer = StyledDiv({
  "& input": {
    maxWidth: "100%"
  }
});
function Slot(props) {
  return (0, import_jsx_runtime2.jsxs)(OTPInputBox, { "data-active": props.isActive, "data-error": props.isInvalid, children: [props.char !== null && (0, import_jsx_runtime2.jsx)("div", { children: props.char }), props.hasFakeCaret && (0, import_jsx_runtime2.jsx)(FakeCaret, {})] });
}
var caretBlink = keyframes`
  0%, 100% {
    opacity: 0;
  },
  50% {
    opacity: 1;
  }
  `;
var FakeCaret = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: `${caretBlink} 1s infinite`,
    "&::before": {
      content: "''",
      display: "block",
      width: "1.5px",
      height: "1em",
      backgroundColor: theme.colors.primaryText
    }
  };
});
var OTPInputBox = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    position: "relative",
    width: "40px",
    height: "40px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: fontSize.md,
    padding: spacing.xs,
    boxSizing: "border-box",
    transition: "color 200ms ease",
    border: `2px solid ${theme.colors.borderColor}`,
    "&[data-active='true']": {
      borderColor: theme.colors.accentText
    },
    color: theme.colors.primaryText,
    borderRadius: radius.lg,
    "&[data-error='true']": {
      borderColor: theme.colors.danger
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/OTPLoginUI.js
function OTPLoginUI(props) {
  var _a;
  const { wallet, done, goBack, userInfo } = props;
  const isWideModal = props.size === "wide";
  const locale = props.locale;
  const [otpInput, setOtpInput] = (0, import_react3.useState)("");
  const [verifyStatus, setVerifyStatus] = (0, import_react3.useState)("idle");
  const [error, setError] = (0, import_react3.useState)();
  const [accountStatus, setAccountStatus] = (0, import_react3.useState)("sending");
  const ecosystem = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  const [screen] = (0, import_react3.useState)("base");
  const sendEmailOrSms = (0, import_react3.useCallback)(async () => {
    setOtpInput("");
    setVerifyStatus("idle");
    setAccountStatus("sending");
    try {
      if ("email" in userInfo) {
        await preAuthenticate({
          ecosystem,
          email: userInfo.email,
          strategy: "email",
          client: props.client
        });
        setAccountStatus("sent");
      } else if ("phone" in userInfo) {
        await preAuthenticate({
          ecosystem,
          phoneNumber: userInfo.phone,
          strategy: "phone",
          client: props.client
        });
        setAccountStatus("sent");
      } else {
        throw new Error("Invalid userInfo");
      }
    } catch (e) {
      console.error(e);
      setVerifyStatus("idle");
      setAccountStatus("error");
    }
  }, [props.client, userInfo, ecosystem]);
  async function connect(otp) {
    if ("email" in userInfo) {
      await wallet.connect({
        chain: props.chain,
        strategy: "email",
        email: userInfo.email,
        verificationCode: otp,
        client: props.client
      });
      await setLastAuthProvider("email", webLocalStorage);
    } else if ("phone" in userInfo) {
      await wallet.connect({
        chain: props.chain,
        strategy: "phone",
        phoneNumber: userInfo.phone,
        verificationCode: otp,
        client: props.client
      });
      await setLastAuthProvider("phone", webLocalStorage);
    } else {
      throw new Error("Invalid userInfo");
    }
  }
  async function link(otp) {
    if ("email" in userInfo) {
      await linkProfile({
        client: props.client,
        strategy: "email",
        email: userInfo.email,
        verificationCode: otp,
        ecosystem
      });
    } else if ("phone" in userInfo) {
      await linkProfile({
        client: props.client,
        strategy: "phone",
        phoneNumber: userInfo.phone,
        verificationCode: otp,
        ecosystem
      });
    }
  }
  const verify = async (otp) => {
    var _a2;
    if (otp.length !== 6) {
      return;
    }
    setVerifyStatus("verifying");
    try {
      if (props.isLinking) {
        await link(otp);
      } else {
        await connect(otp);
      }
      done();
      setVerifyStatus("valid");
    } catch (e) {
      if (e instanceof Error && ((_a2 = e == null ? void 0 : e.message) == null ? void 0 : _a2.includes("PAYMENT_METHOD_REQUIRED"))) {
        setVerifyStatus("payment_required");
      } else if (e instanceof Error && (e.message.toLowerCase().includes("link") || e.message.toLowerCase().includes("profile"))) {
        setVerifyStatus("linking_error");
        setError(e.message);
      } else {
        setVerifyStatus("invalid");
      }
      console.error("Authentication Error", e);
    }
  };
  const emailSentOnMount = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    if (!emailSentOnMount.current) {
      emailSentOnMount.current = true;
      sendEmailOrSms();
    }
  }, [sendEmailOrSms]);
  if (screen === "base") {
    return (0, import_jsx_runtime3.jsxs)(Container, { fullHeight: true, flex: "column", animate: "fadein", children: [(0, import_jsx_runtime3.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime3.jsx)(ModalHeader, { title: locale.signIn, onBack: goBack }) }), (0, import_jsx_runtime3.jsx)(Container, { expand: true, flex: "column", center: "y", children: (0, import_jsx_runtime3.jsxs)("form", { onSubmit: (e) => {
      e.preventDefault();
    }, children: [(0, import_jsx_runtime3.jsxs)(Container, { flex: "column", center: "x", px: "lg", children: [!isWideModal && (0, import_jsx_runtime3.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime3.jsx)(Text, { children: locale.emailLoginScreen.enterCodeSendTo }), (0, import_jsx_runtime3.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime3.jsx)(Text, { color: "primaryText", children: "email" in userInfo ? userInfo.email : userInfo.phone }), (0, import_jsx_runtime3.jsx)(Spacer, { y: "xl" })] }), (0, import_jsx_runtime3.jsx)(OTPInput, { isInvalid: verifyStatus === "invalid", digits: 6, value: otpInput, setValue: (value) => {
      setOtpInput(value);
      setVerifyStatus("idle");
    }, onEnter: () => {
      verify(otpInput);
    } }), verifyStatus === "invalid" && (0, import_jsx_runtime3.jsxs)(FadeIn, { children: [(0, import_jsx_runtime3.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime3.jsx)(Text, { size: "sm", color: "danger", center: true, children: locale.emailLoginScreen.invalidCode })] }), verifyStatus === "linking_error" && (0, import_jsx_runtime3.jsxs)(FadeIn, { children: [(0, import_jsx_runtime3.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime3.jsx)(Text, { size: "sm", color: "danger", center: true, children: error || "Failed to verify code" })] }), verifyStatus === "payment_required" && (0, import_jsx_runtime3.jsxs)(FadeIn, { children: [(0, import_jsx_runtime3.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime3.jsx)(Text, { size: "sm", color: "danger", center: true, children: locale.maxAccountsExceeded })] }), (0, import_jsx_runtime3.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime3.jsx)(Container, { px: isWideModal ? "xxl" : "lg", children: verifyStatus === "verifying" ? (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: (0, import_jsx_runtime3.jsx)(Container, { flex: "row", center: "x", animate: "fadein", children: (0, import_jsx_runtime3.jsx)(Spinner, { size: "lg", color: "accentText" }) }) }) : (0, import_jsx_runtime3.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime3.jsx)(Button, { onClick: () => verify(otpInput), variant: "accent", type: "submit", style: {
      width: "100%"
    }, children: locale.emailLoginScreen.verify }) }, "btn-container") }), (0, import_jsx_runtime3.jsx)(Spacer, { y: "xl" }), !isWideModal && (0, import_jsx_runtime3.jsx)(Line, {}), (0, import_jsx_runtime3.jsxs)(Container, { p: isWideModal ? void 0 : "lg", children: [accountStatus === "error" && (0, import_jsx_runtime3.jsx)(Text, { size: "sm", center: true, color: "danger", children: locale.emailLoginScreen.failedToSendCode }), accountStatus === "sending" && (0, import_jsx_runtime3.jsxs)(Container, { flex: "row", center: "both", gap: "xs", style: {
      textAlign: "center"
    }, children: [(0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: locale.emailLoginScreen.sendingCode }), (0, import_jsx_runtime3.jsx)(Spinner, { size: "xs", color: "secondaryText" })] }), accountStatus === "sent" && (0, import_jsx_runtime3.jsx)(LinkButton, { onClick: sendEmailOrSms, type: "button", children: locale.emailLoginScreen.resendCode })] })] }) })] });
  }
  return null;
}
var LinkButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    color: theme.colors.accentText,
    fontSize: fontSize.sm,
    cursor: "pointer",
    textAlign: "center",
    fontWeight: 500,
    width: "100%",
    "&:hover": {
      color: theme.colors.primaryText
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/PassKeyLogin.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ErrorState.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AccentFailIcon.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var AccentFailIcon = (props) => {
  return (0, import_jsx_runtime4.jsxs)("svg", { width: props.size, height: props.size, viewBox: "0 0 109 109", fill: "none", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: [(0, import_jsx_runtime4.jsxs)("g", { clipPath: "url(#clip0_4036_4155)", children: [(0, import_jsx_runtime4.jsx)("path", { d: "M54.5 109C84.5995 109 109 84.5995 109 54.5C109 24.4005 84.5995 0 54.5 0C24.4005 0 0 24.4005 0 54.5C0 84.5995 24.4005 109 54.5 109Z", fill: "#4BABFF" }), (0, import_jsx_runtime4.jsx)("path", { d: "M55 96C77.6437 96 96 77.6437 96 55C96 32.3563 77.6437 14 55 14C32.3563 14 14 32.3563 14 55C14 77.6437 32.3563 96 55 96Z", fill: "#1C85FF" }), (0, import_jsx_runtime4.jsx)("path", { d: "M73.2352 69.389C73.7459 69.8997 74.0329 70.5924 74.0329 71.3147C74.0329 72.037 73.7459 72.7298 73.2352 73.2405C72.7244 73.7513 72.0317 74.0382 71.3094 74.0382C70.5871 74.0382 69.8944 73.7513 69.3836 73.2405L54.9992 58.8515L40.6102 73.236C40.0994 73.7467 39.4067 74.0337 38.6844 74.0337C37.9621 74.0337 37.2694 73.7467 36.7586 73.236C36.2479 72.7252 35.9609 72.0325 35.9609 71.3102C35.9609 70.5879 36.2479 69.8952 36.7586 69.3844L51.1476 55L36.7632 40.611C36.2524 40.1002 35.9655 39.4075 35.9655 38.6852C35.9655 37.9629 36.2524 37.2702 36.7632 36.7594C37.2739 36.2487 37.9666 35.9617 38.6889 35.9617C39.4112 35.9617 40.104 36.2487 40.6147 36.7594L54.9992 51.1484L69.3881 36.7572C69.8989 36.2464 70.5916 35.9595 71.3139 35.9595C72.0362 35.9595 72.729 36.2464 73.2397 36.7572C73.7505 37.2679 74.0374 37.9606 74.0374 38.6829C74.0374 39.4052 73.7505 40.098 73.2397 40.6087L58.8507 55L73.2352 69.389Z", fill: "url(#paint0_linear_4036_4155)" })] }), (0, import_jsx_runtime4.jsxs)("defs", { children: [(0, import_jsx_runtime4.jsxs)("linearGradient", { id: "paint0_linear_4036_4155", x1: "54.9992", y1: "35.9595", x2: "54.9992", y2: "74.0382", gradientUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime4.jsx)("stop", { stopColor: "white" }), (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: "#90CBFF" })] }), (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_4036_4155", children: (0, import_jsx_runtime4.jsx)("rect", { width: "109", height: "109", fill: "white" }) })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ErrorState.js
function ErrorState(props) {
  return (0, import_jsx_runtime5.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime5.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime5.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime5.jsx)(AccentFailIcon, { size: iconSize["3xl"] }) }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime5.jsx)(Text, { center: true, color: "primaryText", size: "md", children: props.title }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime5.jsx)(Button, { variant: "accent", fullWidth: true, onClick: props.onTryAgain, children: "Try Again" })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingState.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function LoadingState(props) {
  return (0, import_jsx_runtime6.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime6.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime6.jsxs)(Container, { flex: "row", center: "x", style: {
    position: "relative"
  }, children: [(0, import_jsx_runtime6.jsx)(Spinner, { size: "4xl", color: "accentText" }), (0, import_jsx_runtime6.jsx)(Container, { color: "accentText", style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }, children: props.icon })] }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime6.jsx)(Text, { center: true, color: "primaryText", size: "lg", children: props.title }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime6.jsx)(Text, { multiline: true, center: true, children: props.subtitle }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "xxl" })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/PassKeyLogin.js
function PassKeyLogin(props) {
  const { wallet, done, client, chain, size, locale } = props;
  const [screen, setScreen] = (0, import_react4.useState)("loading");
  const triggered = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => {
    if (triggered.current) {
      return;
    }
    triggered.current = true;
    hasStoredPasskey(client, isEcosystemWallet(wallet.id) ? wallet.id : void 0).then((isStored) => {
      if (isStored) {
        setScreen("login");
      } else {
        setScreen("select");
      }
    }).catch(() => {
      setScreen("select");
    });
  }, [client, wallet.id]);
  return (0, import_jsx_runtime7.jsxs)(Container, { animate: "fadein", fullHeight: true, flex: "column", children: [(0, import_jsx_runtime7.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime7.jsx)(ModalHeader, { title: props.isLinking ? locale.passkeys.linkPasskey : locale.passkeys.title, onBack: props.onBack }) }), (0, import_jsx_runtime7.jsx)(Container, { px: size === "wide" ? "xxl" : "lg", expand: true, flex: "column", center: "y", children: (0, import_jsx_runtime7.jsxs)("div", { children: [screen === "loading" && (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [(0, import_jsx_runtime7.jsx)(LoadingScreen, {}), (0, import_jsx_runtime7.jsx)(Spacer, { y: "xxl" })] }), screen === "select" && (0, import_jsx_runtime7.jsx)(SelectLoginMethod, { onSignin: () => {
    setScreen("login");
  }, onSignup: () => {
    setScreen("signup");
  } }), screen === "login" && (0, import_jsx_runtime7.jsx)(LoginScreen, { wallet, client, done, onCreate: () => {
    setScreen("signup");
  }, chain, isLinking: props.isLinking }), screen === "signup" && (0, import_jsx_runtime7.jsx)(SignupScreen, { wallet, client, done, chain, isLinking: props.isLinking })] }) })] });
}
function LoginScreen(props) {
  const { wallet, done, client, chain } = props;
  const [status, setStatus] = (0, import_react4.useState)("loading");
  const [error, setError] = (0, import_react4.useState)();
  async function login() {
    setStatus("loading");
    try {
      if (props.isLinking) {
        await linkProfile({
          client,
          strategy: "passkey",
          type: "sign-in"
        }).catch((e) => {
          setError(e.message);
          throw e;
        });
      } else {
        await wallet.connect({
          client,
          strategy: "passkey",
          type: "sign-in",
          chain
        });
        await setLastAuthProvider("passkey", webLocalStorage);
      }
      done();
    } catch (e) {
      console.error("Failed to login with passkey", e);
      setStatus("error");
    }
  }
  const triggered = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => {
    if (triggered.current) {
      return;
    }
    triggered.current = true;
    login();
  });
  if (status === "loading") {
    return (0, import_jsx_runtime7.jsx)(LoadingState, { title: "Requesting Passkey", subtitle: "A pop-up prompt will appear to sign-in and verify your passkey", icon: (0, import_jsx_runtime7.jsx)(FingerPrintIcon, { size: iconSize.xxl }) });
  }
  if (status === "error") {
    return (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [(0, import_jsx_runtime7.jsx)(ErrorState, { onTryAgain: login, title: error || "Failed to Login" }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime7.jsx)(Button, { variant: "outline", fullWidth: true, onClick: props.onCreate, children: "Create a new Passkey" }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "lg" })] });
  }
  return null;
}
function SignupScreen(props) {
  var _a;
  const { wallet, done, client, chain } = props;
  const [error, setError] = (0, import_react4.useState)();
  const [status, setStatus] = (0, import_react4.useState)("loading");
  const ecosystem = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  async function signup() {
    setStatus("loading");
    try {
      if (props.isLinking) {
        await linkProfile({
          client,
          strategy: "passkey",
          type: "sign-up",
          ecosystem
        });
      } else {
        await wallet.connect({
          client,
          strategy: "passkey",
          type: "sign-up",
          chain
        });
        await setLastAuthProvider("passkey", webLocalStorage);
      }
      done();
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        setError(`Error creating passkey: ${e.message}`);
      }
      setStatus("error");
    }
  }
  const triggered = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => {
    if (triggered.current) {
      return;
    }
    triggered.current = true;
    signup();
  });
  if (status === "loading") {
    return (0, import_jsx_runtime7.jsx)(LoadingState, { title: "Creating Passkey", subtitle: "A pop-up prompt will appear to sign-in and verify your passkey", icon: (0, import_jsx_runtime7.jsx)(FingerPrintIcon, { size: iconSize.xxl }) });
  }
  if (status === "error") {
    return (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [(0, import_jsx_runtime7.jsx)(ErrorState, { onTryAgain: signup, title: error || "Failed to create passkey" }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "lg" })] });
  }
  return null;
}
function SelectLoginMethod(props) {
  return (0, import_jsx_runtime7.jsxs)(Container, { children: [(0, import_jsx_runtime7.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime7.jsx)(Container, { flex: "row", center: "x", color: "accentText", children: (0, import_jsx_runtime7.jsx)(FingerPrintIcon, { size: iconSize["4xl"] }) }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime7.jsx)(Button, { variant: "accent", onClick: props.onSignup, fullWidth: true, children: "Create a Passkey" }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime7.jsx)(Button, { variant: "outline", onClick: props.onSignin, fullWidth: true, children: "I have a Passkey" }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "lg" })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/SocialLogin.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
function SocialLogin(props) {
  var _a, _b;
  const ewLocale = props.locale;
  const locale = ewLocale.socialLoginScreen;
  const themeObj = useCustomTheme();
  const ecosystem = isEcosystemWallet(props.wallet) ? {
    id: props.wallet.id,
    partnerId: (_a = props.wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  const [authError, setAuthError] = (0, import_react5.useState)(void 0);
  const { done, wallet } = props;
  const [status, setStatus] = (0, import_react5.useState)("connecting");
  const handleSocialLogin = async () => {
    var _a2, _b2, _c, _d;
    const walletConfig = wallet.getConfig();
    const authMode = walletConfig && "auth" in walletConfig ? ((_a2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _a2.mode) ?? "popup" : "popup";
    if (walletConfig && "auth" in walletConfig && authMode !== "popup" && !props.isLinking) {
      return loginWithOauthRedirect({
        authOption: props.socialAuth,
        client: props.client,
        ecosystem,
        redirectUrl: (_b2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _b2.redirectUrl,
        mode: (_c = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _c.mode
      });
    }
    try {
      const socialWindow = openOauthSignInWindow({
        authOption: props.socialAuth,
        themeObj,
        client: props.client,
        ecosystem
      });
      if (!socialWindow) {
        throw new Error(`Failed to open ${props.socialAuth} login window`);
      }
      setStatus("connecting");
      if (props.isLinking) {
        await linkProfile({
          client: props.client,
          strategy: props.socialAuth,
          openedWindow: socialWindow,
          closeOpenedWindow: (openedWindow) => {
            openedWindow.close();
          },
          ecosystem
        }).catch((e) => {
          setAuthError(e.message);
          throw e;
        });
      } else {
        await wallet.connect({
          chain: props.chain,
          strategy: props.socialAuth,
          openedWindow: socialWindow,
          closeOpenedWindow: (openedWindow) => {
            openedWindow.close();
          },
          client: props.client
        });
      }
      await setLastAuthProvider(props.socialAuth, webLocalStorage);
      setStatus("connected");
      done();
    } catch (e) {
      setStatus("error");
      if (e instanceof Error && ((_d = e == null ? void 0 : e.message) == null ? void 0 : _d.includes("PAYMENT_METHOD_REQUIRED"))) {
        setAuthError(ewLocale.maxAccountsExceeded);
      }
      console.error(`Error sign in with ${props.socialAuth}`, e);
    }
  };
  const socialLogin = (_b = props.state) == null ? void 0 : _b.socialLogin;
  const socialLoginStarted = (0, import_react5.useRef)(false);
  (0, import_react5.useEffect)(() => {
    if (socialLoginStarted.current) {
      return;
    }
    if (socialLogin) {
      socialLoginStarted.current = true;
      setStatus("connecting");
      socialLogin.connectionPromise.then(() => {
        done();
        setStatus("connected");
      }).catch((e) => {
        setAuthError(e.message);
        setStatus("error");
      });
    }
  }, [done, socialLogin]);
  return (0, import_jsx_runtime8.jsx)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: (0, import_jsx_runtime8.jsxs)(Container, { flex: "column", expand: true, p: "lg", style: {
    paddingBottom: 0
  }, children: [props.goBack && (0, import_jsx_runtime8.jsx)(ModalHeader, { title: props.isLinking ? props.connectLocale.manageWallet.linkProfile : locale.title, onBack: props.goBack }), props.size === "compact" ? (0, import_jsx_runtime8.jsx)(Spacer, { y: "xl" }) : null, (0, import_jsx_runtime8.jsxs)(Container, { flex: "column", center: "both", expand: true, style: {
    textAlign: "center",
    minHeight: "250px"
  }, children: [status !== "error" && (0, import_jsx_runtime8.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime8.jsx)(Text, { color: "primaryText", center: true, multiline: true, style: {
    maxWidth: "250px"
  }, children: locale.instruction }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime8.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime8.jsx)(Spinner, { size: "lg", color: "accentText" }) }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "xxl" })] }), status === "error" && (0, import_jsx_runtime8.jsxs)(Container, { animate: "fadein", children: [authError ? (0, import_jsx_runtime8.jsx)(Text, { center: true, color: "danger", children: authError }) : (0, import_jsx_runtime8.jsx)(Text, { color: "danger", children: locale.failed }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime8.jsx)(Button, { variant: "primary", onClick: handleSocialLogin, children: locale.retry }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "xxl" })] })] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/WalletAuth.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAddConnectedWallet.js
function useAddConnectedWallet() {
  const manager = useConnectionManagerCtx("useAddConnectedWallet");
  return manager.handleConnection;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletSelector.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react15 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/SmartWalletConnectUI.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_react14 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/smartWallet/locale/getSmartWalletLocale.js
async function getSmartWalletLocale(localeId) {
  switch (localeId) {
    case "es_ES":
      return (await import("./es-UEK7RLXG.js")).default;
    case "ja_JP":
      return (await import("./ja-6MH4WP2Z.js")).default;
    case "tl_PH":
      return (await import("./tl-DDFVDALG.js")).default;
    case "vi_VN":
      return (await import("./vi-4HLVRM5V.js")).default;
    case "de_DE":
      return (await import("./de-OKZ4QL64.js")).default;
    case "ko_KR":
      return (await import("./kr-LSVS4UQW.js")).default;
    case "fr_FR":
      return (await import("./fr-HCZLKSNB.js")).default;
    default:
      return (await import("./en-SB77EPNW.js")).default;
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AnyWalletConnectUI.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_react13 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/injected/locale/getInjectedWalletLocale.js
async function getInjectedWalletLocale(locale) {
  switch (locale) {
    case "es_ES":
      return (await import("./es-7RULN4RE.js")).default;
    case "ja_JP":
      return (await import("./ja-HG2757OL.js")).default;
    case "tl_PH":
      return (await import("./tl-AVOH7Y5Z.js")).default;
    case "vi_VN":
      return (await import("./vi-JLTPQX3P.js")).default;
    case "de_DE":
      return (await import("./de-WT7ZYIRL.js")).default;
    case "ko_KR":
      return (await import("./kr-XDCZ7IIG.js")).default;
    case "fr_FR":
      return (await import("./fr-2PO34MSK.js")).default;
    default:
      return (await import("./en-GF35UFXC.js")).default;
  }
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/GetStartedScreen.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AppleIcon.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var AppleIcon = (props) => {
  return (0, import_jsx_runtime9.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 23 28", fill: "none", role: "presentation", children: (0, import_jsx_runtime9.jsx)("path", { d: "M22.4181 21.6041C22.008 22.5506 21.5224 23.422 20.9599 24.223C20.1931 25.3151 19.5652 26.0711 19.0814 26.4908C18.3313 27.1799 17.5277 27.5327 16.6671 27.5528C16.0493 27.5528 15.3043 27.3772 14.437 27.021C13.5669 26.6664 12.7673 26.4908 12.0362 26.4908C11.2694 26.4908 10.447 26.6664 9.56734 27.021C8.68636 27.3772 7.97665 27.5628 7.43403 27.5812C6.60879 27.6164 5.78624 27.2534 4.96519 26.4908C4.44116 26.0343 3.78569 25.2516 3.00047 24.1428C2.15799 22.9587 1.46536 21.5857 0.92274 20.0203C0.341611 18.3295 0.050293 16.6922 0.050293 15.1071C0.050293 13.2914 0.44307 11.7253 1.2298 10.413C1.84809 9.35886 2.67065 8.52734 3.70014 7.91691C4.72963 7.30648 5.84199 6.99541 7.03991 6.97551C7.69538 6.97551 8.55493 7.17804 9.6231 7.57607C10.6882 7.97544 11.3722 8.17797 11.672 8.17797C11.8962 8.17797 12.656 7.94116 13.944 7.46904C15.162 7.0312 16.19 6.84991 17.0321 6.92133C19.3141 7.10529 21.0285 8.00387 22.1687 9.62276C20.1278 10.858 19.1182 12.5881 19.1383 14.8076C19.1567 16.5363 19.7846 17.9749 21.0185 19.1172C21.5777 19.6473 22.2022 20.0571 22.897 20.3481C22.7463 20.7846 22.5872 21.2027 22.4181 21.6041ZM17.1845 1.03178C17.1845 2.38678 16.6889 3.65194 15.7011 4.82296C14.509 6.21507 13.0672 7.0195 11.5036 6.89256C11.4837 6.73 11.4721 6.55892 11.4721 6.37913C11.4721 5.07833 12.039 3.68622 13.0457 2.54798C13.5484 1.97167 14.1876 1.49247 14.9628 1.11021C15.7363 0.733653 16.4679 0.525407 17.156 0.489746C17.1761 0.670889 17.1845 0.85206 17.1845 1.03178Z", fill: "#959CA0" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/ChromeIcon.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var ChromeIcon = (props) => {
  return (0, import_jsx_runtime10.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 190.5 190.5", role: "presentation", children: (0, import_jsx_runtime10.jsxs)("g", { transform: "translate(90.669 -507.469)", children: [(0, import_jsx_runtime10.jsx)("path", { d: "M4.583 650.342c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z", fill: "#fff", clipPath: "none", mask: "none" }), (0, import_jsx_runtime10.jsx)("path", { d: "M-36.664 626.539l-41.24-71.43c-8.362 14.479-12.765 30.904-12.765 47.625s4.401 33.146 12.762 47.625 20.387 26.503 34.868 34.86 30.908 12.755 47.628 12.75l41.24-71.43v-.011c-4.177 7.244-10.188 13.26-17.428 17.443a47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z", fill: "#229342", clipPath: "none", mask: "none" }), (0, import_jsx_runtime10.jsx)("path", { d: "M45.826 626.536l-41.239 71.43c16.72.003 33.146-4.398 47.626-12.757s26.504-20.384 34.863-34.865a95.24 95.24 0 0 0 12.755-47.627c-.003-16.72-4.408-33.145-12.772-47.623H4.58l-.01.007a47.62 47.62 0 0 1 23.819 6.372c7.243 4.179 13.257 10.19 17.439 17.431a47.62 47.62 0 0 1-.001 47.633z", fill: "#fbc116", clipPath: "none", mask: "none" }), (0, import_jsx_runtime10.jsx)("path", { d: "M4.583 640.43c20.824 0 37.705-16.881 37.705-37.706s-16.881-37.705-37.705-37.705-37.705 16.881-37.705 37.705 16.881 37.706 37.705 37.706z", fill: "#1a73e8", clipPath: "none", mask: "none" }), (0, import_jsx_runtime10.jsx)("path", { d: "M4.583 555.097h82.479c-8.358-14.481-20.381-26.507-34.861-34.868a95.23 95.23 0 0 0-47.625-12.76c-16.72.001-33.145 4.404-47.623 12.767a95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633c4.179-7.242 10.193-13.256 17.434-17.436s15.456-6.381 23.818-6.379z", fill: "#e33b2e", clipPath: "none", mask: "none" })] }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/PlayStoreIcon.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var PlayStoreIcon = (props) => {
  return (0, import_jsx_runtime11.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 23 26", fill: "none", role: "presentation", children: [(0, import_jsx_runtime11.jsx)("path", { d: "M10.5832 12.0978L0.0976562 23.2275C0.0980507 23.2298 0.0988382 23.2317 0.0992076 23.2341C0.420793 24.4427 1.52467 25.3326 2.83473 25.3326C3.35844 25.3326 3.85012 25.191 4.27179 24.9424L4.30528 24.9228L16.1087 18.1117L10.5838 12.0977", fill: "#EB3131" }), (0, import_jsx_runtime11.jsx)("path", { d: "M21.1922 10.2046L21.1821 10.1977L16.0862 7.2435L10.345 12.3523L16.1061 18.1127L21.1752 15.1879C22.0639 14.7081 22.6672 13.7712 22.6672 12.6908C22.6672 11.6182 22.072 10.6859 21.1922 10.2046Z", fill: "#F6B60B" }), (0, import_jsx_runtime11.jsx)("path", { d: "M0.0961678 2.10416C0.0331317 2.33661 0 2.58009 0 2.83292V22.5002C0 22.7526 0.0327407 22.9969 0.0965672 23.2285L10.9441 12.3832L0.0965672 2.10444", fill: "#5778C5" }), (0, import_jsx_runtime11.jsx)("path", { d: "M10.6603 12.6667L16.088 7.24061L4.29785 0.404818C3.8693 0.148138 3.36912 0 2.83391 0C1.52384 0 0.418474 0.891502 0.0968301 2.10147C0.0964356 2.10265 0.0964355 2.10347 0.0964355 2.1045L10.6603 12.6669", fill: "#3BAD49" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/components/QRCode.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
var QRCodeRenderer = (0, import_react7.lazy)(() => import("./QRCodeRenderer-ZNSMXL36.js"));
var QRCode = (props) => {
  const size = props.size || 310;
  const placeholder = (0, import_jsx_runtime12.jsxs)(QRPlaceholder, { style: {
    width: `${size}px`,
    height: `${size}px`
  }, children: [(0, import_jsx_runtime12.jsx)("span", { "data-v1": true }), (0, import_jsx_runtime12.jsx)("span", { "data-v2": true }), (0, import_jsx_runtime12.jsx)("span", { "data-v3": true }), (0, import_jsx_runtime12.jsx)("div", {})] });
  return (0, import_jsx_runtime12.jsxs)("div", { style: {
    position: "relative",
    display: "flex",
    justifyContent: "center"
  }, children: [props.qrCodeUri ? (0, import_jsx_runtime12.jsx)(import_react7.Suspense, { fallback: placeholder, children: (0, import_jsx_runtime12.jsx)(QRCodeContainer, { children: (0, import_jsx_runtime12.jsx)(QRCodeRenderer, { uri: props.qrCodeUri, size: size + 20, ecl: "M", clearSize: props.QRIcon ? 70 : void 0 }) }) }) : placeholder, props.QRIcon && (0, import_jsx_runtime12.jsx)(IconContainer, { children: props.QRIcon })] });
};
var IconContainer = StyledDiv({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  zIndex: 1e3
});
var QRCodeContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    animation: `${fadeInAnimation} 600ms ease`,
    "--ck-qr-dot-color": theme.colors.primaryText,
    "--ck-body-background": theme.colors.modalBg,
    "--ck-qr-background": theme.colors.modalBg
  };
});
var PlaceholderKeyframes = keyframes`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`;
var QRPlaceholder = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    "--color": theme.colors.skeletonBg,
    "--bg": theme.colors.modalBg,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    "> div": {
      zIndex: 4,
      position: "relative",
      width: "28%",
      height: "28%",
      borderRadius: "5px",
      background: "var(--bg)",
      boxShadow: "0 0 0 7px var(--bg)"
    },
    "> span": {
      zIndex: 4,
      position: "absolute",
      background: "var(--color)",
      borderRadius: "12px",
      width: "13.25%",
      height: "13.25%",
      boxShadow: "0 0 0 4px var(--bg)",
      "&:before": {
        content: '""',
        position: "absolute",
        inset: "9px",
        borderRadius: "3px",
        boxShadow: "0 0 0 4px var(--bg)"
      },
      "&[data-v1]": {
        top: 0,
        left: 0
      },
      "&[data-v2]": {
        top: 0,
        right: 0
      },
      "&[data-v3]": {
        bottom: 0,
        left: 0
      }
    },
    "&:before": {
      zIndex: 3,
      content: '""',
      position: "absolute",
      inset: 0,
      background: "repeat",
      backgroundSize: "1.888% 1.888%",
      backgroundImage: "radial-gradient(var(--color) 41%, transparent 41%)"
    },
    "&::after": {
      zIndex: 100,
      content: '""',
      position: "absolute",
      inset: 0,
      transform: "scale(1.5) rotate(45deg)",
      background: "linear-gradient(90deg, transparent 50%, var(--color), transparent)",
      backgroundSize: "200% 100%",
      animation: `${PlaceholderKeyframes} 1000ms linear infinite both`
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/GetStartedScreen.js
var GetStartedScreen = ({ wallet, walletInfo, header, footer, onBack, locale, client }) => {
  const [showScreen, setShowScreen] = (0, import_react8.useState)("base");
  const isScanScreen = showScreen === "android-scan" || showScreen === "ios-scan";
  const handleBack = onBack ? () => {
    if (showScreen === "base") {
      onBack();
    } else {
      setShowScreen("base");
    }
  } : void 0;
  return (0, import_jsx_runtime13.jsx)(Container, { fullHeight: true, flex: "column", animate: "fadein", children: (0, import_jsx_runtime13.jsxs)(Container, { expand: true, flex: "column", p: "lg", children: [showScreen === "android-scan" && walletInfo.app.android && (0, import_jsx_runtime13.jsx)(InstallScanScreen, { platformIcon: (0, import_jsx_runtime13.jsx)(PlayStoreIcon, { size: iconSize.md }), url: walletInfo.app.android, platform: "Google Play", walletName: walletInfo.name, walletId: wallet.id, onBack: handleBack, locale: {
    scanToDownload: locale.getStartedScreen.instruction
  }, client }), showScreen === "ios-scan" && walletInfo.app.ios && (0, import_jsx_runtime13.jsx)(InstallScanScreen, { platformIcon: (0, import_jsx_runtime13.jsx)(AppleIcon, { size: iconSize.md }), url: walletInfo.app.ios, platform: "App Store", walletName: walletInfo.name, walletId: wallet.id, onBack: handleBack, locale: {
    scanToDownload: locale.getStartedScreen.instruction
  }, client }), showScreen === "base" && (0, import_jsx_runtime13.jsxs)(Container, { expand: true, flex: "column", children: [header || (0, import_jsx_runtime13.jsx)(ModalHeader, { onBack: handleBack, title: walletInfo.name }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime13.jsx)(Container, { expand: true, animate: "fadein", flex: "column", center: "y", style: {
    minHeight: "250px"
  }, children: (0, import_jsx_runtime13.jsxs)(Container, { flex: "column", gap: "xs", children: [walletInfo.app.chrome && (0, import_jsx_runtime13.jsxs)(ButtonLink2, { onClick: () => {
    openWindow(walletInfo.app.chrome || "");
  }, children: [(0, import_jsx_runtime13.jsx)(ChromeIcon, { size: iconSize.lg }), (0, import_jsx_runtime13.jsx)("span", { children: locale.download.chrome })] }), walletInfo.app.android && (0, import_jsx_runtime13.jsxs)(ButtonLink2, { as: "button", onClick: () => {
    if (isMobile()) {
      openWindow(walletInfo.app.android || "");
    } else {
      setShowScreen("android-scan");
    }
  }, children: [(0, import_jsx_runtime13.jsx)(PlayStoreIcon, { size: iconSize.lg }), (0, import_jsx_runtime13.jsx)("span", { children: locale.download.android })] }), walletInfo.app.ios && (0, import_jsx_runtime13.jsxs)(ButtonLink2, { as: "button", onClick: () => {
    if (isMobile()) {
      openWindow(walletInfo.app.ios || "");
    } else {
      setShowScreen("ios-scan");
    }
  }, children: [(0, import_jsx_runtime13.jsx)(AppleIcon, { size: iconSize.lg }), (0, import_jsx_runtime13.jsx)("span", { children: locale.download.iOS })] })] }) })] }), !isScanScreen && footer] }) });
};
var InstallScanScreen = (props) => {
  return (0, import_jsx_runtime13.jsxs)(Container, { animate: "fadein", expand: true, children: [(0, import_jsx_runtime13.jsx)(ModalHeader, { title: props.walletName, onBack: props.onBack }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime13.jsxs)(Container, { flex: "column", expand: true, center: "both", style: {
    textAlign: "center"
  }, children: [(0, import_jsx_runtime13.jsx)(QRCode, { qrCodeUri: props.url, QRIcon: (0, import_jsx_runtime13.jsx)(WalletImage, { id: props.walletId, size: iconSize.xxl, client: props.client }) }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime13.jsx)(Text, { multiline: true, center: true, balance: true, children: props.locale.scanToDownload }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "xs" })] })] });
};
var ButtonLink2 = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    textDecoration: "none",
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: radius.sm,
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    cursor: "pointer",
    boxSizing: "border-box",
    width: "100%",
    fontWeight: 500,
    color: theme.colors.secondaryButtonText,
    background: theme.colors.secondaryButtonBg,
    transition: "100ms ease",
    "&:hover": {
      background: theme.colors.secondaryButtonHoverBg,
      textDecoration: "none",
      color: theme.colors.primaryText
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/WalletConnectConnection.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/utils/promise/wait.js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ScanScreen.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);
var ScanScreen = (props) => {
  const { connectModalSize, client } = props;
  const [linkCopied, setLinkCopied] = (0, import_react9.useState)(false);
  return (0, import_jsx_runtime14.jsxs)(Container, { fullHeight: true, flex: "column", animate: "fadein", children: [(0, import_jsx_runtime14.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime14.jsx)(ModalHeader, { onBack: props.onBack, title: props.walletName }) }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime14.jsxs)(Container, { expand: true, flex: "column", px: "lg", center: "both", children: [!props.error && (0, import_jsx_runtime14.jsxs)("div", { style: {
    textAlign: "center"
  }, children: [(0, import_jsx_runtime14.jsx)(QRCode, { qrCodeUri: props.qrCodeUri, QRIcon: (0, import_jsx_runtime14.jsx)(WalletImage, { size: iconSize.xxl, id: props.walletId, client }) }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime14.jsxs)(Button, { disabled: props.qrCodeUri === void 0, variant: "link", style: {
    fontSize: "12px",
    opacity: props.qrCodeUri === void 0 ? 0.5 : 1,
    cursor: props.qrCodeUri === void 0 ? "default" : "pointer"
  }, onClick: () => {
    navigator.clipboard.writeText(props.qrCodeUri).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3e3);
    }).catch((err) => {
      console.error("Failed to copy link to clipboard", err);
    });
  }, children: [linkCopied ? (0, import_jsx_runtime14.jsx)(CheckIcon, { width: 14, height: 14 }) : (0, import_jsx_runtime14.jsx)(CopyIcon, { width: 14, height: 14 }), (0, import_jsx_runtime14.jsx)("span", { style: { padding: "0 4px" }, children: "Copy Link" })] }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime14.jsx)(Text, { center: true, multiline: true, balance: true, style: {
    paddingInline: spacing.lg
  }, children: props.qrScanInstruction })] }), props.error && (0, import_jsx_runtime14.jsxs)(Container, { animate: "fadein", style: {
    width: "100%"
  }, children: [(0, import_jsx_runtime14.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime14.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime14.jsx)(AccentFailIcon, { size: iconSize["3xl"] }) }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime14.jsx)(Text, { center: true, size: "lg", color: "primaryText", children: "Connection Failed" }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "3xl" }), (0, import_jsx_runtime14.jsx)(Button, { fullWidth: true, variant: "accent", onClick: props.onRetry, children: "Try again" })] })] }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "lg" }), props.onGetStarted && (0, import_jsx_runtime14.jsx)(ScreenBottomContainer, { style: {
    border: connectModalSize === "compact" ? void 0 : "none"
  }, children: (0, import_jsx_runtime14.jsx)(Button, { variant: "link", onClick: props.onGetStarted, style: {
    fontSize: fontSize.sm,
    textAlign: "center"
  }, children: props.getStartedLink }) })] });
};

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/WalletConnectConnection.js
var WalletConnectConnection = (props) => {
  const { onBack, onGetStarted, wallet, walletInfo, locale, done } = props;
  const [qrCodeUri, setQrCodeUri] = (0, import_react10.useState)();
  const [errorConnecting, setErrorConnecting] = (0, import_react10.useState)(false);
  const connect = (0, import_react10.useCallback)(() => {
    var _a;
    setErrorConnecting(false);
    wallet.connect({
      chain: props.chain,
      client: props.client,
      walletConnect: {
        projectId: (_a = props.walletConnect) == null ? void 0 : _a.projectId,
        showQrModal: false,
        onDisplayUri(uri) {
          const preferNative = walletInfo.mobile.native || walletInfo.mobile.universal;
          try {
            if (isMobile()) {
              if (isAndroid()) {
                if (preferNative) {
                  openWindow(formatWalletConnectUrl(preferNative, uri).redirect);
                }
              } else if (isIOS()) {
                if (preferNative) {
                  openWindow(formatWalletConnectUrl(preferNative, uri).redirect);
                }
              } else {
                const preferUniversal = walletInfo.mobile.universal || walletInfo.mobile.native;
                if (preferUniversal) {
                  openWindow(formatWalletConnectUrl(preferUniversal, uri).redirect);
                }
              }
            } else {
              setQrCodeUri(uri);
            }
          } catch {
            setErrorConnecting(true);
          }
        },
        optionalChains: props.chains
      }
    }).then(() => {
      done();
    }).catch((e) => {
      setErrorConnecting(true);
      console.error(e);
    });
  }, [
    props.walletConnect,
    walletInfo.mobile.native,
    walletInfo.mobile.universal,
    wallet,
    props.chain,
    props.client,
    props.chains,
    done
  ]);
  const scanStarted = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);
  if (isMobile()) {
    return (0, import_jsx_runtime15.jsx)(ConnectingScreen, { locale: {
      getStartedLink: locale.getStartedLink,
      instruction: locale.connectionScreen.instruction,
      tryAgain: locale.connectionScreen.retry,
      inProgress: locale.connectionScreen.inProgress,
      failed: locale.connectionScreen.failed
    }, onBack, walletName: walletInfo.name, walletId: wallet.id, errorConnecting, onRetry: connect, onGetStarted, client: props.client, size: props.size });
  }
  return (0, import_jsx_runtime15.jsx)(ScanScreen, { qrScanInstruction: locale.scanScreen.instruction, onBack, onGetStarted, qrCodeUri, walletName: walletInfo.name, walletId: wallet.id, getStartedLink: locale.getStartedLink, error: errorConnecting, onRetry: connect, client: props.client, connectModalSize: props.size });
};
var WalletConnectStandaloneConnection = (props) => {
  const { onBack, wallet, walletInfo, locale, done, setModalVisibility } = props;
  const [qrCodeUri, setQrCodeUri] = (0, import_react10.useState)();
  const [errorConnecting, setErrorConnecting] = (0, import_react10.useState)(false);
  const connect = (0, import_react10.useCallback)(() => {
    var _a, _b;
    setErrorConnecting(false);
    if (isMobile()) {
      let wcModalClosed = false;
      wait(2e3).then(() => {
        if (!wcModalClosed) {
          setModalVisibility(false);
        }
      });
      wallet.connect({
        chain: props.chain,
        client: props.client,
        projectId: (_a = props.walletConnect) == null ? void 0 : _a.projectId,
        showQrModal: true,
        optionalChains: props.chains
      }).then(() => {
        wcModalClosed = true;
        setModalVisibility(true);
        done();
      }).catch((e) => {
        wcModalClosed = true;
        setModalVisibility(true);
        setErrorConnecting(true);
        console.error(e);
      });
    } else {
      wallet.connect({
        chain: props.chain,
        client: props.client,
        projectId: (_b = props.walletConnect) == null ? void 0 : _b.projectId,
        showQrModal: false,
        onDisplayUri(uri) {
          const platformUris = {
            ios: walletInfo.mobile.native || "",
            android: walletInfo.mobile.universal || "",
            other: walletInfo.mobile.universal || ""
          };
          setQrCodeUri(uri);
          if (isMobile()) {
            if (isAndroid()) {
              openWindow(`${platformUris.android}wc?uri=${encodeURIComponent(uri)}`);
            } else if (isIOS()) {
              openWindow(`${platformUris.ios}wc?uri=${encodeURIComponent(uri)}`);
            } else {
              openWindow(`${platformUris.other}wc?uri=${encodeURIComponent(uri)}`);
            }
          }
        },
        optionalChains: props.chains
      }).then(() => {
        done();
      }).catch((e) => {
        setErrorConnecting(true);
        console.error(e);
      });
    }
  }, [
    props.walletConnect,
    walletInfo.mobile.native,
    walletInfo.mobile.universal,
    wallet,
    props.chain,
    props.client,
    props.chains,
    done,
    setModalVisibility
  ]);
  const scanStarted = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);
  if (isMobile()) {
    return (0, import_jsx_runtime15.jsx)(ConnectingScreen, { locale: {
      getStartedLink: locale.getStartedLink,
      instruction: locale.connectionScreen.instruction,
      tryAgain: locale.connectionScreen.retry,
      inProgress: locale.connectionScreen.inProgress,
      failed: locale.connectionScreen.failed
    }, onBack, walletName: walletInfo.name, walletId: wallet.id, errorConnecting, onRetry: connect, client: props.client, size: props.size });
  }
  return (0, import_jsx_runtime15.jsx)(ScanScreen, { qrScanInstruction: locale.scanScreen.instruction, onBack, qrCodeUri, walletName: walletInfo.name, walletId: wallet.id, getStartedLink: locale.getStartedLink, error: errorConnecting, onRetry: connect, client: props.client, connectModalSize: props.size });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/DeepLinkConnectUI.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var DeepLinkConnectUI = (props) => {
  return (0, import_jsx_runtime16.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime16.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime16.jsx)(ModalHeader, { onBack: props.onBack, title: props.walletInfo.name }) }), (0, import_jsx_runtime16.jsx)(Container, { flex: "row", center: "x", animate: "fadein", py: "3xl", children: (0, import_jsx_runtime16.jsx)(PulsatingContainer, { children: (0, import_jsx_runtime16.jsx)(WalletImage, { id: props.wallet.id, client: props.client, size: "80" }) }) }), (0, import_jsx_runtime16.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime16.jsxs)(ButtonLink, { fullWidth: true, variant: "accent", href: `${props.deepLinkPrefix}${window.location.toString().replace("https://", "")}`, gap: "xs", children: ["Continue in ", props.walletInfo.name, (0, import_jsx_runtime16.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] }) })] });
};
var pulseAnimation = keyframes`
0% {
  transform: scale(0.9);
}
100% {
  opacity: 0;
  transform: scale(1.4);
}
`;
var PulsatingContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    position: "relative",
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      background: theme.colors.accentText,
      animation: `${pulseAnimation} 2s cubic-bezier(0.175, 0.885, 0.32, 1.1) infinite`,
      zIndex: -1,
      borderRadius: radius.xl
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/InjectedConnectUI.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/wait.js
var wait2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/InjectedConnectUI.js
var InjectedConnectUI = (props) => {
  const { wallet, done } = props;
  const [errorConnecting, setErrorConnecting] = (0, import_react12.useState)(false);
  const locale = props.locale;
  const connectToExtension = (0, import_react12.useCallback)(async () => {
    try {
      connectPrompted.current = true;
      setErrorConnecting(false);
      await wait2(1e3);
      await wallet.connect({
        client: props.client,
        chain: props.chain
      });
      done();
    } catch (e) {
      setErrorConnecting(true);
      console.error(e);
    }
  }, [props.client, props.chain, done, wallet]);
  const connectPrompted = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(() => {
    if (connectPrompted.current) {
      return;
    }
    connectToExtension();
  }, [connectToExtension]);
  return (0, import_jsx_runtime17.jsx)(ConnectingScreen, { locale: {
    getStartedLink: locale.getStartedLink,
    instruction: locale.connectionScreen.instruction,
    tryAgain: locale.connectionScreen.retry,
    inProgress: locale.connectionScreen.inProgress,
    failed: locale.connectionScreen.failed
  }, onBack: props.onBack, walletName: props.walletName, onGetStarted: props.onGetStarted, walletId: props.wallet.id, onRetry: () => {
    connectToExtension();
  }, errorConnecting, client: props.client, size: props.size });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AnyWalletConnectUI.js
var CoinbaseSDKWalletConnectUI = (0, import_react13.lazy)(() => import("./CoinbaseSDKConnection-PPK2JHPJ.js"));
var InAppWalletConnectUI = (0, import_react13.lazy)(() => import("./InAppWalletConnectUI-IYEPIHHJ.js"));
var EcosystemWalletConnectUI = (0, import_react13.lazy)(() => import("./EcosystemWalletConnectUI-ANAXYA53.js"));
function AnyWalletConnectUI(props) {
  var _a, _b;
  const [screen, setScreen] = (0, import_react13.useState)("main");
  const { wallet } = props;
  const walletInfo = useWalletInfo(props.wallet.id);
  const localeId = props.connectLocale.id;
  const localeFnQuery = useQuery({
    queryKey: ["injectedWalletLocale", localeId, (_a = walletInfo.data) == null ? void 0 : _a.name],
    queryFn: async () => {
      return getInjectedWalletLocale(localeId);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });
  if (walletInfo.isLoading || !localeFnQuery.data) {
    return (0, import_jsx_runtime18.jsx)(LoadingScreen, {});
  }
  const localeFn = localeFnQuery.data;
  if (!walletInfo.data) {
    const injectedProvider = getInstalledWalletProviders().find((w) => w.info.rdns === wallet.id);
    if (injectedProvider) {
      return (0, import_jsx_runtime18.jsx)(InjectedConnectUI, { wallet: props.wallet, walletName: injectedProvider.info.name, done: props.done, locale: localeFn(injectedProvider.info.name), onBack: props.onBack, chain: props.chain, client: props.client, size: props.size });
    }
    return (0, import_jsx_runtime18.jsxs)(Container, { animate: "fadein", fullHeight: true, flex: "column", children: [(0, import_jsx_runtime18.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime18.jsx)(ModalHeader, { title: "Not Supported", onBack: props.onBack }) }), (0, import_jsx_runtime18.jsxs)(Container, { flex: "column", expand: true, center: "both", p: "lg", style: {
      minHeight: "300px"
    }, children: [(0, import_jsx_runtime18.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime18.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime18.jsx)(Text, { color: "primaryText", center: true, children: "Wallet is not supported" }), (0, import_jsx_runtime18.jsx)(Spacer, { y: "xxl" })] })] });
  }
  const locale = localeFn(walletInfo.data.name);
  const isInstalled = getInstalledWalletProviders().find((w) => w.info.rdns === walletInfo.data.rdns);
  if (screen === "get-started") {
    return (0, import_jsx_runtime18.jsx)(GetStartedScreen, { locale, wallet: props.wallet, walletInfo: walletInfo.data, onBack: () => {
      setScreen("main");
    }, client: props.client });
  }
  if (walletInfo.data.deepLink && !isInstalled && ((_b = wallet.getConfig()) == null ? void 0 : _b.preferDeepLink) && isMobile()) {
    return (0, import_jsx_runtime18.jsx)(DeepLinkConnectUI, { wallet: props.wallet, walletInfo: walletInfo.data, deepLinkPrefix: walletInfo.data.deepLink.mobile, locale, onGetStarted: () => {
      setScreen("get-started");
    }, onBack: props.onBack, client: props.client });
  }
  if (walletInfo.data.rdns && isInstalled) {
    return (0, import_jsx_runtime18.jsx)(InjectedConnectUI, { wallet: props.wallet, walletName: walletInfo.data.name, done: props.done, locale, onGetStarted: () => {
      setScreen("get-started");
    }, onBack: props.onBack, chain: props.chain, client: props.client, size: props.size });
  }
  if (walletInfo.data.mobile.native || walletInfo.data.mobile.universal) {
    return (0, import_jsx_runtime18.jsx)(WalletConnectConnection, { locale, onGetStarted: () => {
      setScreen("get-started");
    }, onBack: props.onBack, done: props.done, wallet: props.wallet, walletInfo: walletInfo.data, chain: props.chain, chains: props.chains, client: props.client, size: props.size, walletConnect: props.walletConnect });
  }
  if (props.wallet.id === "walletConnect") {
    return (0, import_jsx_runtime18.jsx)(WalletConnectStandaloneConnection, { locale, onBack: props.onBack, done: props.done, wallet: props.wallet, walletInfo: walletInfo.data, setModalVisibility: props.setModalVisibility, chain: props.chain, chains: props.chains, client: props.client, size: props.size, walletConnect: props.walletConnect });
  }
  if (props.wallet.id === "inApp" || props.wallet.id === "embedded") {
    return (0, import_jsx_runtime18.jsx)(import_react13.Suspense, { fallback: (0, import_jsx_runtime18.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime18.jsx)(InAppWalletConnectUI, { wallet: props.wallet, done: props.done, goBack: props.onBack, chain: props.chain, client: props.client, size: props.size, walletConnect: props.walletConnect, connectLocale: props.connectLocale, meta: props.meta }) });
  }
  if (isEcosystemWallet(props.wallet.id)) {
    return (0, import_jsx_runtime18.jsx)(import_react13.Suspense, { fallback: (0, import_jsx_runtime18.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime18.jsx)(EcosystemWalletConnectUI, { wallet: props.wallet, done: props.done, goBack: props.onBack, chain: props.chain, client: props.client, size: props.size, meta: props.meta, walletConnect: props.walletConnect, connectLocale: props.connectLocale }) });
  }
  if (props.wallet.id) {
    return (0, import_jsx_runtime18.jsx)(import_react13.Suspense, { fallback: (0, import_jsx_runtime18.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime18.jsx)(CoinbaseSDKWalletConnectUI, { locale, onGetStarted: () => {
      setScreen("get-started");
    }, onBack: props.onBack, done: props.done, wallet: props.wallet, walletInfo: walletInfo.data, chain: props.chain, client: props.client, size: props.size }) });
  }
  return (0, import_jsx_runtime18.jsx)(GetStartedScreen, { locale, wallet: props.wallet, walletInfo: walletInfo.data, onBack: props.onBack, client: props.client });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/SmartWalletConnectUI.js
function SmartConnectUI(props) {
  const personalWalletInfo = useWalletInfo(props.personalWallet.id);
  const [keyConnected, setKeyConnected] = (0, import_react14.useState)(false);
  if (!personalWalletInfo.data) {
    return (0, import_jsx_runtime19.jsx)(LoadingScreen, {});
  }
  if (!keyConnected) {
    return (0, import_jsx_runtime19.jsx)(AnyWalletConnectUI, { wallet: props.personalWallet, done: () => {
      setKeyConnected(true);
    }, onBack: props.onBack, setModalVisibility: props.setModalVisibility, chain: props.chain, chains: props.chains, client: props.client, meta: props.meta, size: props.size, walletConnect: props.walletConnect, connectLocale: props.connectLocale });
  }
  return (0, import_jsx_runtime19.jsx)(SmartWalletConnecting, { done: props.done, personalWallet: props.personalWallet, accountAbstraction: props.accountAbstraction, onBack: props.onBack, personalWalletInfo: personalWalletInfo.data, localeId: props.connectLocale.id, size: props.size, client: props.client });
}
function SmartWalletConnecting(props) {
  var _a;
  const localeQuery = useQuery({
    queryKey: ["getSmartWalletLocale", props.localeId],
    queryFn: () => getSmartWalletLocale(props.localeId)
  });
  const { chain: smartWalletChain } = props.accountAbstraction;
  const { personalWallet } = props;
  const { done } = props;
  const [personalWalletChainId, setPersonalWalletChainId] = (0, import_react14.useState)((_a = personalWallet.getChain()) == null ? void 0 : _a.id);
  (0, import_react14.useEffect)(() => {
    const unsubChainChanged = personalWallet.subscribe("chainChanged", (chain) => setPersonalWalletChainId(chain.id));
    return () => {
      unsubChainChanged();
    };
  }, [personalWallet]);
  const wrongNetwork = personalWalletChainId !== smartWalletChain.id;
  const [smartWalletConnectionStatus, setSmartWalletConnectionStatus] = (0, import_react14.useState)("idle");
  const [personalWalletChainSwitchStatus, setPersonalWalletChainSwitchStatus] = (0, import_react14.useState)("idle");
  const connectionManager = useConnectionManager();
  const handleConnect = (0, import_react14.useCallback)(async () => {
    if (!personalWallet) {
      throw new Error("No personal wallet");
    }
    setSmartWalletConnectionStatus("connecting");
    try {
      const connected = await connectionManager.handleConnection(personalWallet, {
        accountAbstraction: props.accountAbstraction,
        client: props.client
      });
      done(connected);
      setSmartWalletConnectionStatus("idle");
    } catch (e) {
      console.error(e);
      setSmartWalletConnectionStatus("connect-error");
    }
  }, [
    done,
    personalWallet,
    props.client,
    props.accountAbstraction,
    connectionManager
  ]);
  const connectStarted = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    if (!wrongNetwork && !connectStarted.current) {
      handleConnect();
      connectStarted.current = true;
    }
  }, [handleConnect, wrongNetwork]);
  if (!localeQuery.data) {
    return (0, import_jsx_runtime19.jsx)(LoadingScreen, {});
  }
  if (wrongNetwork) {
    return (0, import_jsx_runtime19.jsxs)(Container, { fullHeight: true, animate: "fadein", flex: "column", children: [(0, import_jsx_runtime19.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime19.jsx)(ModalHeader, { title: props.personalWalletInfo.name, onBack: props.onBack }) }), props.size === "compact" && (0, import_jsx_runtime19.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime19.jsx)(Container, { expand: true, flex: "column", center: "both", p: "lg", children: (0, import_jsx_runtime19.jsxs)(Container, { p: props.size === "wide" ? "lg" : void 0, children: [(0, import_jsx_runtime19.jsx)(Container, { flex: "row", center: "x", color: "danger", children: (0, import_jsx_runtime19.jsx)(ExclamationTriangleIcon, { width: iconSize.lg, height: iconSize.lg }) }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(Text, { size: "lg", color: "primaryText", center: true, weight: 500, children: localeQuery.data.wrongNetworkScreen.title }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime19.jsx)(Text, { multiline: true, center: true, children: localeQuery.data.wrongNetworkScreen.subtitle }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime19.jsxs)(Container, { flex: "column", gap: "md", children: [(0, import_jsx_runtime19.jsxs)(Button, { type: "button", fullWidth: true, variant: "accent", style: {
      display: "flex",
      alignItems: "center",
      gap: spacing.sm
    }, onClick: async () => {
      if (!personalWallet.switchChain) {
        setPersonalWalletChainSwitchStatus("switch-error");
        throw new Error("No switchChain method");
      }
      try {
        setPersonalWalletChainSwitchStatus("switching");
        await personalWallet.switchChain(smartWalletChain);
        const newChain = personalWallet.getChain();
        if (newChain) {
          setPersonalWalletChainId(newChain.id);
        }
        setPersonalWalletChainSwitchStatus("idle");
      } catch (e) {
        console.error(e);
        setPersonalWalletChainSwitchStatus("switch-error");
      }
    }, children: [personalWalletChainSwitchStatus === "switching" ? "Switching" : "Switch Network", personalWalletChainSwitchStatus === "switching" && (0, import_jsx_runtime19.jsx)(Spinner, { size: "sm", color: "accentButtonText" })] }), (0, import_jsx_runtime19.jsxs)(Container, { flex: "row", gap: "sm", center: "both", color: "danger", style: {
      textAlign: "center",
      fontSize: fontSize.sm,
      opacity: personalWalletChainSwitchStatus === "switch-error" ? 1 : 0,
      transition: "opacity 200ms ease"
    }, children: [(0, import_jsx_runtime19.jsx)(ExclamationTriangleIcon, { width: iconSize.sm, height: iconSize.sm }), (0, import_jsx_runtime19.jsx)("span", { children: localeQuery.data.wrongNetworkScreen.failedToSwitch })] })] })] }) })] });
  }
  if (smartWalletConnectionStatus === "connect-error") {
    return (0, import_jsx_runtime19.jsx)(Container, { fullHeight: true, animate: "fadein", flex: "column", center: "both", p: "lg", style: {
      minHeight: "300px"
    }, children: (0, import_jsx_runtime19.jsx)(Text, { color: "danger", children: localeQuery.data.failedToConnect }) });
  }
  return (0, import_jsx_runtime19.jsxs)(Container, { fullHeight: true, flex: "column", center: "both", style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "primaryText", multiline: true, center: true, children: localeQuery.data.connecting }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime19.jsx)(Spinner, { color: "accentText", size: "lg" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/TOS.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function TOS(props) {
  const { termsOfServiceUrl, privacyPolicyUrl, locale, requireApproval } = props;
  if (!termsOfServiceUrl && !privacyPolicyUrl && !requireApproval) {
    return null;
  }
  const bothGiven = termsOfServiceUrl && privacyPolicyUrl;
  return (0, import_jsx_runtime20.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime20.jsxs)(Text, { size: "xs", multiline: true, balance: true, inline: true, center: true, style: {
    maxWidth: "250px"
  }, children: [requireApproval && (0, import_jsx_runtime20.jsx)("input", { style: {
    transform: "translateY(3px)",
    marginRight: spacing["3xs"]
  }, type: "checkbox", onChange: props.onApprove, checked: props.isApproved, disabled: !requireApproval }), locale.prefix, " ", termsOfServiceUrl && (0, import_jsx_runtime20.jsxs)(Link, { inline: true, size: "xs", href: termsOfServiceUrl, target: "_blank", style: {
    whiteSpace: "nowrap"
  }, children: [" ", locale.termsOfService, " "] }), bothGiven && `${locale.and} `, privacyPolicyUrl && (0, import_jsx_runtime20.jsx)(Link, { inline: true, size: "xs", href: privacyPolicyUrl, target: "_blank", children: locale.privacyPolicy }), !privacyPolicyUrl && !termsOfServiceUrl && (0, import_jsx_runtime20.jsx)(Text, { inline: true, size: "xs", children: "Terms of Service and Privacy Policy" })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/PoweredByTW.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/ThirdwebTextIcon.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var ThirdwebTextIcon = (props) => {
  return (0, import_jsx_runtime21.jsxs)("svg", { width: props.height * 74 / 11, height: props.height, viewBox: "0 0 74 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: [(0, import_jsx_runtime21.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.1489 0.373291C33.5297 0.373291 33.022 0.874761 33.022 1.51414C33.022 2.14097 33.5297 2.64244 34.1489 2.64244C34.7681 2.64244 35.2758 2.14097 35.2758 1.51414C35.2758 0.874761 34.7681 0.373291 34.1489 0.373291ZM35.1396 3.21913H33.1706V9.97644H35.1396V3.21913ZM21.6787 0.624035H23.5982V3.21914H25.0718V5.02444H23.5982V7.40642C23.5982 7.75745 23.8706 8.03326 24.205 8.03326H25.0594V9.95138H24.205C22.818 9.95138 21.6787 8.81054 21.6787 7.39389V5.0119H20.7871V3.20661H21.6787V0.624035ZM29.7652 3.0687C28.8736 3.0687 28.1677 3.44481 27.8953 4.03403V0.624035H25.9263V9.96392H27.8953V6.17782C27.8953 5.388 28.403 4.83639 29.1213 4.83639C29.8519 4.83639 30.2605 5.31278 30.2605 6.11514V9.97646H32.2295V5.8644C32.2295 4.10925 31.3379 3.0687 29.7652 3.0687ZM37.9507 3.2066V4.13432C38.2479 3.45734 38.9661 3.0687 39.8701 3.05616C40.0063 3.05616 40.1797 3.0687 40.3902 3.09377V4.97429C40.1921 4.93668 39.9692 4.9116 39.7339 4.9116C38.607 4.9116 37.9507 5.55098 37.9507 6.66675V9.96392H35.9817V3.2066H37.9507ZM45.9257 4.09672C45.7275 3.50749 44.9474 3.09378 43.9443 3.09378C43.0032 3.09378 42.2106 3.43227 41.5791 4.10926C40.9599 4.7737 40.6379 5.61367 40.6379 6.59154C40.6379 7.5694 40.9599 8.39683 41.5791 9.08635C42.2106 9.7508 43.0032 10.0893 43.9443 10.0893C44.9474 10.0893 45.7275 9.67558 45.9257 9.08635V9.97646H47.8946V0.624035H45.9257V4.09672ZM45.5294 7.79506C45.195 8.12102 44.7864 8.27146 44.3034 8.27146C43.8329 8.27146 43.4242 8.10848 43.1022 7.79506C42.7679 7.45657 42.6069 7.0554 42.6069 6.59154C42.6069 6.12767 42.7679 5.7265 43.1022 5.40054C43.4366 5.06205 43.8329 4.89907 44.3034 4.89907C44.7988 4.89907 45.2074 5.06205 45.5294 5.40054C45.8761 5.7265 46.0495 6.12767 46.0495 6.59154C46.0495 7.0554 45.8761 7.45657 45.5294 7.79506ZM53.5787 3.2442L55.3619 6.45361L56.5631 3.21913H58.4949L55.7458 10.3651L53.5787 6.47868L51.4115 10.3651L48.6748 3.21913H50.6066L51.7954 6.45361L53.5787 3.2442ZM61.7394 3.05616C60.7239 3.05616 59.8694 3.38212 59.2007 4.03403C58.5444 4.6734 58.2101 5.5259 58.2101 6.57899V6.64167C58.2101 7.69476 58.5444 8.54726 59.2007 9.18664C59.8818 9.81347 60.7487 10.1394 61.8384 10.1394C62.8539 10.1394 63.6836 9.93884 64.3151 9.52513V7.78252C63.6959 8.22131 62.9034 8.43443 61.9499 8.43443C60.9097 8.43443 60.2286 7.92042 60.1914 7.11807H65.0829C65.1077 6.91748 65.12 6.69182 65.12 6.46616C65.12 5.50083 64.7981 4.69848 64.1789 4.04657C63.5597 3.38212 62.73 3.05616 61.7394 3.05616ZM60.1914 5.82679C60.2038 5.51337 60.3648 5.25009 60.662 5.03697C60.9716 4.82385 61.3183 4.71101 61.7394 4.71101C62.5195 4.71101 63.1263 5.22502 63.1263 5.82679H60.1914ZM69.8135 3.09378C70.7546 3.09378 71.5472 3.43227 72.1663 4.10925C72.7979 4.78624 73.1199 5.60113 73.1199 6.579C73.1199 7.55686 72.7979 8.38429 72.1663 9.07381C71.5472 9.73826 70.7546 10.0768 69.8135 10.0768C68.8104 10.0768 68.0302 9.66304 67.8321 9.07381V9.96392H65.8631V0.624035H67.8321V4.09672C68.0302 3.50749 68.8104 3.09378 69.8135 3.09378ZM69.4543 8.27146C69.9249 8.27146 70.3212 8.12102 70.6555 7.79506C70.9899 7.45657 71.1509 7.05539 71.1509 6.59153C71.1509 6.12767 70.9899 5.7265 70.6555 5.40054C70.3336 5.06205 69.9249 4.89907 69.4543 4.89907C68.9714 4.89907 68.5627 5.06205 68.216 5.40054C67.8816 5.7265 67.7083 6.12767 67.7083 6.59153C67.7083 7.05539 67.8816 7.45657 68.216 7.79506C68.5503 8.10848 68.959 8.27146 69.4543 8.27146Z", fill: "currentColor" }), (0, import_jsx_runtime21.jsx)("g", { clipPath: "url(#clip0_5017_2727)", children: (0, import_jsx_runtime21.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.045011 0.900694C-0.126602 0.467742 0.193222 0 0.661257 0H3.56697C3.83999 0 4.08181 0.162357 4.18322 0.413623L6.49609 6.18115C6.55849 6.33578 6.55849 6.50973 6.49609 6.66822L5.04128 10.2903C4.81896 10.8431 4.03111 10.8431 3.80879 10.2903L0.045011 0.900694ZM5.65759 0.881366C5.50158 0.45228 5.8214 0 6.28164 0H8.81292C9.09374 0 9.34336 0.173954 9.43697 0.432951L11.5392 6.20048C11.5899 6.34351 11.5899 6.502 11.5392 6.6489L10.2755 10.1164C10.0649 10.6962 9.23805 10.6962 9.02744 10.1164L5.65759 0.881366ZM11.3404 0C10.8724 0 10.5525 0.467742 10.7241 0.900694L14.4879 10.2903C14.7102 10.8431 15.4981 10.8431 15.7204 10.2903L17.1752 6.66822C17.2376 6.50973 17.2376 6.33578 17.1752 6.18115L14.8623 0.413623C14.7609 0.162357 14.5191 0 14.2461 0H11.3404Z", fill: "currentColor" }) }), (0, import_jsx_runtime21.jsx)("defs", { children: (0, import_jsx_runtime21.jsx)("clipPath", { id: "clip0_5017_2727", children: (0, import_jsx_runtime21.jsx)("rect", { width: "17.219", height: "10.7049", fill: "white" }) }) })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/PoweredByTW.js
function PoweredByThirdweb() {
  return (0, import_jsx_runtime22.jsx)(Link, { color: "secondaryText", hoverColor: "primaryText", target: "_blank", href: "https://thirdweb.com/connect?utm_source=cw_text", children: (0, import_jsx_runtime22.jsxs)(Container, { flex: "row", center: "both", style: {
    color: "currentColor",
    gap: 4
  }, children: [(0, import_jsx_runtime22.jsx)(Text, { size: "sm", weight: 600, style: {
    color: "currentColor"
  }, children: "Powered by" }), (0, import_jsx_runtime22.jsx)(ThirdwebTextIcon, { height: 13 })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletSelector.js
var InAppWalletSelectionUI = (0, import_react15.lazy)(() => import("./InAppWalletSelectionUI-QJ7CQPJG.js"));
var inAppWalletId = "inApp";
function WalletSelector(props) {
  const [personalWallet, setPersonalWallet] = (0, import_react15.useState)(null);
  if (!props.accountAbstraction) {
    return (0, import_jsx_runtime23.jsx)(WalletSelectorInner, { ...props });
  }
  if (personalWallet) {
    return (0, import_jsx_runtime23.jsx)(SmartConnectUI, { accountAbstraction: props.accountAbstraction, done: props.done, personalWallet, setModalVisibility: props.setModalVisibility, onBack: props.goBack, meta: props.meta, size: props.size, chain: props.chain, chains: props.chains, client: props.client, walletConnect: props.walletConnect, connectLocale: props.connectLocale });
  }
  return (0, import_jsx_runtime23.jsx)(WalletSelectorInner, { ...props, done: (w) => {
    setPersonalWallet(w);
  } });
}
var WalletSelectorInner = (props) => {
  const { walletIdsToHide } = props;
  const isCompact = props.size === "compact";
  const [isWalletGroupExpanded, setIsWalletGroupExpanded] = (0, import_react15.useState)(false);
  const [approvedTOS, setApprovedTOS] = (0, import_react15.useState)(false);
  const installedWallets = getInstalledWallets();
  const propsWallets = props.wallets;
  let _wallets = [...propsWallets];
  for (const iW of installedWallets) {
    if (!propsWallets.find((w) => w.id === iW.id)) {
      _wallets.push(iW);
    }
  }
  if (walletIdsToHide) {
    _wallets = _wallets.filter((w) => !(walletIdsToHide == null ? void 0 : walletIdsToHide.includes(w.id)));
  }
  const localWalletConfig = false;
  const nonLocalWalletConfigs = _wallets;
  const socialWallets = nonLocalWalletConfigs.filter((w) => w.id === inAppWalletId);
  const eoaWallets = sortWallets(nonLocalWalletConfigs.filter((w) => w.id !== inAppWalletId), props.recommendedWallets);
  const continueAsGuest = localWalletConfig && (0, import_jsx_runtime23.jsx)(Button, { fullWidth: true, variant: isCompact ? "outline" : "link", style: !isCompact ? {
    textAlign: "left",
    justifyContent: "flex-start"
  } : void 0, onClick: () => {
    props.selectWallet(localWalletConfig);
  }, "data-test": "continue-as-guest-button", children: props.connectLocale.continueAsGuest });
  const enableTWIconLink = (0, import_react15.useRef)(false);
  (0, import_react15.useEffect)(() => {
    setTimeout(() => {
      enableTWIconLink.current = true;
    }, 1e3);
  }, []);
  const twTitle = props.modalHeader ? (0, import_jsx_runtime23.jsx)(ModalHeader, { title: props.modalHeader.title, onBack: props.modalHeader.onBack }) : (0, import_jsx_runtime23.jsxs)(Container, { gap: "xxs", center: "y", flex: "row", children: [!props.meta.titleIconUrl ? null : (0, import_jsx_runtime23.jsx)(Img, { src: props.meta.titleIconUrl, width: iconSize.md, height: iconSize.md, client: props.client }), (0, import_jsx_runtime23.jsxs)(ModalTitle, { children: [" ", props.title, " "] })] });
  const handleSelect = async (wallet) => {
    props.selectWallet(wallet);
  };
  const connectAWallet = (0, import_jsx_runtime23.jsx)(WalletTypeRowButton, { client: props.client, icon: OutlineWalletIcon, onClick: () => {
    setIsWalletGroupExpanded(true);
  }, title: props.connectLocale.connectAWallet });
  const newToWallets = (0, import_jsx_runtime23.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime23.jsx)(Text, { color: "secondaryText", size: "sm", weight: 500, children: props.connectLocale.newToWallets }), (0, import_jsx_runtime23.jsx)(Link, { weight: 500, size: "sm", target: "_blank", href: "https://blog.thirdweb.com/web3-wallet/", children: props.connectLocale.getStarted })] });
  const tos = props.meta.requireApproval || props.meta.termsOfServiceUrl || props.meta.privacyPolicyUrl ? (0, import_jsx_runtime23.jsx)(TOS, { termsOfServiceUrl: props.meta.termsOfServiceUrl, privacyPolicyUrl: props.meta.privacyPolicyUrl, locale: props.connectLocale.agreement, requireApproval: props.meta.requireApproval, isApproved: approvedTOS, onApprove: () => setApprovedTOS(!approvedTOS) }) : void 0;
  let topSection;
  let bottomSection;
  if (!isCompact) {
    topSection = (0, import_jsx_runtime23.jsx)(WalletSelection, { wallets: nonLocalWalletConfigs, selectWallet: handleSelect, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, client: props.client, connectLocale: props.connectLocale, size: props.size, recommendedWallets: props.recommendedWallets, chain: props.chain, showAllWallets: props.showAllWallets, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS });
    if (continueAsGuest) {
      bottomSection = (0, import_jsx_runtime23.jsx)(ScreenBottomContainer, { children: continueAsGuest });
    }
  } else {
    if (socialWallets.length === 0) {
      topSection = (0, import_jsx_runtime23.jsx)(WalletSelection, { wallets: nonLocalWalletConfigs, selectWallet: handleSelect, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, client: props.client, connectLocale: props.connectLocale, size: props.size, recommendedWallets: props.recommendedWallets, chain: props.chain, showAllWallets: props.showAllWallets, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS });
      bottomSection = (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(Line, {}), (0, import_jsx_runtime23.jsxs)(Container, { flex: "column", p: "md", gap: "md", children: [newToWallets, continueAsGuest] }), !continueAsGuest && (0, import_jsx_runtime23.jsx)(Line, {}), tos && (0, import_jsx_runtime23.jsx)(Container, { px: "md", style: {
        paddingBottom: spacing.md,
        paddingTop: continueAsGuest ? 0 : spacing.md
      }, children: tos })] });
    } else {
      if (!isWalletGroupExpanded) {
        topSection = (0, import_jsx_runtime23.jsxs)(Container, { px: "xs", children: [(0, import_jsx_runtime23.jsx)(WalletSelection, { wallets: socialWallets, selectWallet: handleSelect, done: props.done, goBack: props.goBack, client: props.client, connectLocale: props.connectLocale, size: props.size, recommendedWallets: props.recommendedWallets, chain: props.chain, showAllWallets: props.showAllWallets, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS }), eoaWallets.length > 0 && (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(TextDivider, { text: props.connectLocale.or }), (0, import_jsx_runtime23.jsx)(Spacer, { y: "lg" })] })] });
        if (eoaWallets.length === 0) {
          bottomSection = tos || continueAsGuest ? (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime23.jsx)(Line, {}), continueAsGuest && (0, import_jsx_runtime23.jsxs)(Container, { p: "lg", children: [" ", continueAsGuest] }), tos && (0, import_jsx_runtime23.jsxs)(Container, { p: "md", children: [" ", tos, " "] })] }) : (0, import_jsx_runtime23.jsx)(Spacer, { y: "sm" });
        } else {
          if (eoaWallets.length > 1) {
            bottomSection = (0, import_jsx_runtime23.jsxs)(Container, { flex: "column", style: { position: "relative" }, gap: "sm", children: [(0, import_jsx_runtime23.jsx)(GradientDiv, {}), (0, import_jsx_runtime23.jsxs)(Container, { px: "lg", flex: "column", gap: "md", children: [connectAWallet, continueAsGuest] }), tos ? (0, import_jsx_runtime23.jsxs)(Container, { p: "md", children: [" ", tos, " "] }) : (0, import_jsx_runtime23.jsx)(Spacer, { y: "xxs" })] });
          } else {
            bottomSection = (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime23.jsx)(WalletSelection, { wallets: eoaWallets, selectWallet: handleSelect, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, client: props.client, connectLocale: props.connectLocale, size: props.size, recommendedWallets: props.recommendedWallets, chain: props.chain, showAllWallets: props.showAllWallets, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS }) }), continueAsGuest && (0, import_jsx_runtime23.jsx)(Container, { flex: "column", px: "lg", gap: "lg", children: continueAsGuest }), tos ? (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [continueAsGuest ? (0, import_jsx_runtime23.jsx)(Spacer, { y: "md" }) : (0, import_jsx_runtime23.jsx)(Line, {}), (0, import_jsx_runtime23.jsxs)(Container, { p: "md", children: [" ", tos, " "] })] }) : (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: continueAsGuest && (0, import_jsx_runtime23.jsx)(Spacer, { y: "xl" }) })] });
          }
        }
      } else {
        topSection = (0, import_jsx_runtime23.jsx)(WalletSelection, { wallets: eoaWallets, selectWallet: handleSelect, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, client: props.client, connectLocale: props.connectLocale, size: props.size, recommendedWallets: props.recommendedWallets, chain: props.chain, showAllWallets: props.showAllWallets, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS });
        bottomSection = (0, import_jsx_runtime23.jsx)(ScreenBottomContainer, { children: newToWallets });
      }
    }
  }
  const showHeader = !props.hideHeader || props.modalHeader;
  return (0, import_jsx_runtime23.jsxs)(Container, { scrollY: true, flex: "column", animate: "fadein", fullHeight: true, style: {
    maxHeight: props.size === "compact" ? compactModalMaxHeight : void 0
  }, children: [showHeader && (0, import_jsx_runtime23.jsx)(Container, { p: "lg", children: isWalletGroupExpanded ? (0, import_jsx_runtime23.jsx)(ModalHeader, { title: twTitle, onBack: () => {
    setIsWalletGroupExpanded(false);
  } }) : twTitle }), (0, import_jsx_runtime23.jsxs)(Container, { expand: true, scrollY: true, px: "md", style: !showHeader ? {
    paddingTop: spacing.lg
  } : {
    paddingTop: "2px"
  }, children: [!showHeader && isWalletGroupExpanded && (0, import_jsx_runtime23.jsx)(Container, { flex: "row", center: "y", style: {
    padding: spacing.sm,
    paddingTop: 0
  }, children: (0, import_jsx_runtime23.jsxs)(IconButton, { onClick: () => {
    setIsWalletGroupExpanded(false);
  }, style: {
    gap: spacing.xxs,
    transform: `translateX(-${spacing.xs})`,
    paddingBlock: spacing.xxs,
    paddingRight: spacing.xs
  }, children: [(0, import_jsx_runtime23.jsx)(ChevronLeftIcon, { width: iconSize.sm, height: iconSize.sm }), props.connectLocale.goBackButton] }) }), topSection] }), bottomSection, isCompact && props.meta.showThirdwebBranding !== false && (0, import_jsx_runtime23.jsx)(Container, { py: "md", children: (0, import_jsx_runtime23.jsx)(PoweredByThirdweb, {}) })] });
};
var _installedWallets = [];
function getInstalledWallets() {
  if (_installedWallets.length === 0) {
    const providers = getInstalledWalletProviders();
    const walletIds = providers.map((provider) => provider.info.rdns);
    _installedWallets = walletIds.map((w) => createWallet(w));
  }
  return _installedWallets;
}
var WalletSelection = (props) => {
  const wallets = sortWallets(props.wallets, props.recommendedWallets);
  const { screen } = useScreenContext();
  const setSelectionData = useSetSelectionData();
  return (0, import_jsx_runtime23.jsxs)(WalletList, { style: {
    minHeight: "100%",
    maxHeight: "370px"
  }, children: [wallets.map((wallet) => {
    const isActive = screen ? typeof screen === "object" && screen.id === wallet.id : false;
    return (0, import_jsx_runtime23.jsx)("li", { children: wallet.id === "inApp" && props.size === "compact" ? (0, import_jsx_runtime23.jsx)(import_react15.Suspense, { fallback: (0, import_jsx_runtime23.jsx)(LoadingScreen, { height: "195px" }), children: (0, import_jsx_runtime23.jsx)(InAppWalletSelectionUI, { done: () => props.done(wallet), select: () => props.selectWallet(wallet), wallet, goBack: props.goBack, client: props.client, connectLocale: props.connectLocale, size: props.size, recommendedWallets: props.recommendedWallets, chain: props.chain, disabled: props.disabled }) }) : (0, import_jsx_runtime23.jsx)(WalletEntryButton, { walletId: wallet.id, selectWallet: () => {
      if (!props.diableSelectionDataReset) {
        setSelectionData({});
      }
      props.selectWallet(wallet);
    }, connectLocale: props.connectLocale, client: props.client, recommendedWallets: props.recommendedWallets, isActive, badge: void 0 }) }, wallet.id);
  }), props.onShowAll && props.showAllWallets !== false && (0, import_jsx_runtime23.jsx)(ButtonContainer, { children: (0, import_jsx_runtime23.jsxs)(WalletButtonEl, { onClick: props.onShowAll, children: [(0, import_jsx_runtime23.jsxs)(ShowAllWalletsIcon, { children: [(0, import_jsx_runtime23.jsx)("div", { "data-dot": true }), (0, import_jsx_runtime23.jsx)("div", { "data-dot": true }), (0, import_jsx_runtime23.jsx)("div", { "data-dot": true }), (0, import_jsx_runtime23.jsx)("div", { "data-dot": true })] }), (0, import_jsx_runtime23.jsxs)(Container, { flex: "row", gap: "xs", children: [(0, import_jsx_runtime23.jsx)(Text, { color: "primaryText", children: "All Wallets" }), (0, import_jsx_runtime23.jsx)(BadgeText, { children: " 350+ " })] })] }) })] });
};
var BadgeText = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    backgroundColor: theme.colors.secondaryButtonBg,
    paddingBlock: "3px",
    paddingInline: spacing.xxs,
    fontSize: fontSize.xs,
    borderRadius: radius.sm,
    color: theme.colors.secondaryText
  };
});
var ButtonContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "&:hover [data-dot]": {
      background: theme.colors.primaryText
    }
  };
});
var ShowAllWalletsIcon = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    width: `${iconSize.xl}px`,
    height: `${iconSize.xl}px`,
    backgroundColor: theme.colors.tertiaryBg,
    border: `2px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    alignItems: "center",
    padding: spacing.xs,
    "& div": {
      transition: "background 200ms ease",
      background: theme.colors.secondaryText,
      borderRadius: "50%",
      width: "10px",
      height: "10px"
    }
  };
});
var WalletList = StyledUl({
  all: "unset",
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  boxSizing: "border-box",
  overflowY: "auto",
  flex: 1,
  ...noScrollBar,
  // to show the box-shadow of inputs that overflows
  padding: "2px",
  margin: "-2px",
  marginBottom: 0,
  paddingBottom: spacing.lg
});
var GradientDiv = StyledDiv((_) => {
  const theme = useCustomTheme();
  theme.colors.modalBg;
  return {
    height: spacing.lg,
    position: "absolute",
    top: `-${spacing.lg}`,
    left: 0,
    width: "100%",
    background: `linear-gradient(to bottom, transparent 0%, ${theme.colors.modalBg} 80%)`,
    pointerEvents: "none"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/defaultWallets.js
function getDefaultWallets(options) {
  return [
    createWallet("inApp"),
    createWallet(METAMASK),
    createWallet(COINBASE, {
      appMetadata: options == null ? void 0 : options.appMetadata,
      chains: options == null ? void 0 : options.chains
    }),
    createWallet(RAINBOW),
    createWallet("io.rabby"),
    createWallet(ZERION)
  ];
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/WalletAuth.js
function WalletAuth(props) {
  var _a;
  const { wallet, done } = props;
  const addConnectedWallet = useAddConnectedWallet();
  const walletToConnect = (0, import_react16.useRef)(void 0);
  const [status, setStatus] = (0, import_react16.useState)("selecting");
  const [error, setError] = (0, import_react16.useState)();
  const [showAll, setShowAll] = (0, import_react16.useState)(false);
  const ecosystem = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  const back = () => {
    setStatus("selecting");
    walletToConnect.current = void 0;
    props.onBack();
  };
  async function login(walletToLink) {
    setStatus("loading");
    walletToConnect.current = walletToLink;
    try {
      if (props.isLinking) {
        await linkProfile({
          client: props.client,
          strategy: "wallet",
          wallet: walletToLink,
          chain: wallet.getChain() || defineChain(1),
          ecosystem
        }).catch((e) => {
          setError(e.message);
          throw e;
        });
      } else {
        await wallet.connect({
          client: props.client,
          strategy: "wallet",
          wallet: walletToLink,
          chain: walletToLink.getChain() || defineChain(1)
        });
      }
      addConnectedWallet(walletToLink);
      done();
    } catch {
      setStatus("error");
    }
  }
  if (!walletToConnect.current) {
    if (showAll) {
      return (0, import_jsx_runtime24.jsx)(import_react16.Suspense, { fallback: (0, import_jsx_runtime24.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime24.jsx)(AllWalletsUI_default, { onBack: () => setShowAll(false), onSelect: async (newWallet) => {
        login(newWallet);
        setShowAll(false);
      }, client: props.client, connectLocale: props.locale, recommendedWallets: void 0, specifiedWallets: [], size: props.size, disableSelectionDataReset: true }) });
    }
    return (0, import_jsx_runtime24.jsx)(WalletSelector, { title: props.locale.connectAWallet, wallets: getDefaultWallets(), selectWallet: async (newWallet) => {
      login(newWallet);
    }, onShowAll: () => {
      setShowAll(true);
    }, done: () => {
    }, goBack: back, setModalVisibility: () => {
    }, client: props.client, connectLocale: props.locale, hideHeader: false, recommendedWallets: void 0, chain: wallet.getChain(), showAllWallets: true, chains: [], size: props.size, meta: props.meta || {}, walletConnect: props.walletConnect, modalHeader: {
      title: props.isLinking ? props.inAppLocale.linkWallet : props.inAppLocale.signInWithWallet,
      onBack: back
    }, walletIdsToHide: ["inApp"], disableSelectionDataReset: true });
  }
  return (0, import_jsx_runtime24.jsxs)(Container, { animate: "fadein", fullHeight: true, flex: "column", children: [(0, import_jsx_runtime24.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime24.jsx)(ModalHeader, { title: props.isLinking ? props.inAppLocale.linkWallet : props.inAppLocale.signInWithWallet, onBack: back }) }), (0, import_jsx_runtime24.jsx)(Container, { px: props.size === "wide" ? "xxl" : "lg", expand: true, flex: "column", center: "y", children: (0, import_jsx_runtime24.jsx)("div", { children: status === "error" ? (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [(0, import_jsx_runtime24.jsx)(ErrorState, { onTryAgain: () => {
    if (!walletToConnect.current) {
      throw new Error("Failed to connect to unknown wallet");
    }
    login(walletToConnect.current);
  }, title: error || "Failed to Login" }), (0, import_jsx_runtime24.jsx)(Spacer, { y: "lg" })] }) : (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: (0, import_jsx_runtime24.jsx)(LoadingState, { title: "Sign in with your wallet", subtitle: "A pop-up prompt will appear to sign-in and verify your wallet", icon: (0, import_jsx_runtime24.jsx)(WalletImage, { id: walletToConnect.current.id ?? "", size: iconSize.xl, client: props.client }) }) }) }) })] });
}

export {
  getDefaultWallets,
  AccentFailIcon,
  QRCode,
  wait2 as wait,
  GuestLogin,
  OTPLoginUI,
  PassKeyLogin,
  SocialLogin,
  TOS,
  PoweredByThirdweb,
  WalletAuth,
  AnyWalletConnectUI,
  SmartConnectUI,
  WalletSelector
};
//# sourceMappingURL=chunk-7ZNEOXS2.js.map
