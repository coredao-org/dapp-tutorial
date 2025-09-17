import {
  ConnectingScreen
} from "./chunk-MGEBXLXC.js";
import "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import "./chunk-XC5J5ANL.js";
import "./chunk-NOA36MVL.js";
import "./chunk-PWFRCBEK.js";
import "./chunk-ZLJ6VYSG.js";
import "./chunk-BZXRHH4X.js";
import "./chunk-QIUEWTOP.js";
import "./chunk-VIBS7Y3M.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
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

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/CoinbaseSDKConnection.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function ExternalWalletConnectUI(props) {
  const { onBack, done, wallet, walletInfo, onGetStarted, locale } = props;
  const [errorConnecting, setErrorConnecting] = (0, import_react.useState)(false);
  const connect = (0, import_react.useCallback)(() => {
    setErrorConnecting(false);
    wallet.connect({
      client: props.client,
      chain: props.chain
    }).then(() => {
      done();
    }).catch((e) => {
      console.error(e);
      setErrorConnecting(true);
    });
  }, [props.client, wallet, props.chain, done]);
  const scanStarted = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);
  return (0, import_jsx_runtime.jsx)(ConnectingScreen, { locale: {
    getStartedLink: locale.getStartedLink,
    instruction: locale.connectionScreen.instruction,
    tryAgain: locale.connectionScreen.retry,
    inProgress: locale.connectionScreen.inProgress,
    failed: locale.connectionScreen.failed
  }, onBack, walletName: walletInfo.name, walletId: wallet.id, errorConnecting, onRetry: connect, onGetStarted, client: props.client, size: props.size });
}
var CoinbaseSDKConnection_default = ExternalWalletConnectUI;
export {
  CoinbaseSDKConnection_default as default
};
//# sourceMappingURL=CoinbaseSDKConnection-PPK2JHPJ.js.map
