import {
  getListing
} from "./chunk-M3WBOOWW.js";
import {
  getContractMetadata
} from "./chunk-UZVZQZEM.js";
import {
  AutoConnect,
  Blobbie,
  BuyScreen,
  ConnectButton,
  ConnectModalContent,
  ConnectModal_default,
  DynamicHeight,
  LazyBuyScreen,
  MediaRenderer,
  Modal,
  SetRootElementContext,
  canFitWideModal,
  createConnectionManager,
  defaultTokens,
  fetchBuySupportedDestinations,
  getConnectLocale,
  getDefaultToken,
  getPostOnRampQuote,
  getTokenBalance,
  invalidateWalletBalance,
  trackPayEvent,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
  useAdminWallet,
  useAutoConnect,
  useBuyHistory,
  useBuyWithCryptoQuote,
  useBuyWithCryptoStatus,
  useBuyWithFiatQuote,
  useBuyWithFiatStatus,
  useChainExplorers,
  useChainMetadata,
  useConnect,
  useConnectLocale,
  useConnectedWallets,
  useDisconnect,
  useNetworkSwitcherModal,
  usePreloadWalletProviders,
  useProfiles,
  useSetActiveWallet,
  useSetActiveWalletConnectionStatus,
  useSiweAuth,
  useSwitchActiveWalletChain,
  useWaitForReceipt,
  useWalletDetailsModal
} from "./chunk-FHZU65JA.js";
import {
  isERC1155,
  isERC721
} from "./chunk-QLCPWJYR.js";
import "./chunk-EGJT3UEX.js";
import "./chunk-YG7T4W43.js";
import "./chunk-R554PO5S.js";
import "./chunk-5THTWD2M.js";
import {
  AccentFailIcon,
  getDefaultWallets
} from "./chunk-7ZNEOXS2.js";
import {
  LoadingScreen,
  modalMaxWidthCompact,
  modalMaxWidthWide,
  reservedScreens,
  useActiveAccount,
  useSetupScreen,
  wideModalMaxHeight
} from "./chunk-KWA5PGSC.js";
import "./chunk-MGEBXLXC.js";
import {
  linkProfile
} from "./chunk-65EUCVOP.js";
import "./chunk-HO57TQQM.js";
import {
  Spinner,
  WalletUIStatesProvider
} from "./chunk-AARWH2GQ.js";
import {
  Button,
  ButtonLink,
  CheckCircledIcon,
  ConnectionManagerCtx,
  Container,
  CustomThemeProvider,
  ExternalLinkIcon,
  ModalHeader,
  QueryClient,
  QueryClientProvider,
  Spacer,
  StyledDiv,
  Text,
  darkTheme,
  getLastAuthProvider,
  getWalletBalance,
  hasSponsoredTransactionsEnabled,
  iconSize,
  lightTheme,
  queryOptions,
  radius,
  replaceEqualDeep,
  useActiveWallet,
  useConnectionManager,
  useConnectionManagerCtx,
  useCustomTheme,
  useEnsAvatar,
  useEnsName,
  useMutation,
  useQuery,
  useQueryClient,
  useSocialProfiles,
  useSuspenseQuery,
  useWalletBalance,
  useWalletImage,
  useWalletInfo
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import "./chunk-GGVPULQZ.js";
import "./chunk-6RU56BH7.js";
import "./chunk-EHYTL2NA.js";
import {
  isWalletConnect
} from "./chunk-RC344ZND.js";
import "./chunk-YGRUPXVB.js";
import "./chunk-XB34LHR5.js";
import {
  formatExplorerTxUrl
} from "./chunk-5U5XBS6S.js";
import {
  isEcosystemWallet
} from "./chunk-XC5J5ANL.js";
import {
  getNFT
} from "./chunk-36FW3ZLE.js";
import {
  getNFT as getNFT2
} from "./chunk-7ETS5GH6.js";
import "./chunk-4U2YWK76.js";
import "./chunk-VJFQPB47.js";
import "./chunk-NOA36MVL.js";
import {
  getInjectedProvider
} from "./chunk-FXBAO7K3.js";
import "./chunk-PWFRCBEK.js";
import {
  isSmartWallet
} from "./chunk-F2BEZVSV.js";
import "./chunk-NKFQ2LZT.js";
import "./chunk-2HYPHUAF.js";
import "./chunk-FNI7M3UI.js";
import "./chunk-Q3TN3POE.js";
import {
  isInAppWallet
} from "./chunk-O6KA6WKL.js";
import "./chunk-ZLJ6VYSG.js";
import "./chunk-6WNCTW75.js";
import "./chunk-QLJVAXYD.js";
import "./chunk-CLN3QXW2.js";
import "./chunk-4RRAU5V7.js";
import "./chunk-QVNJVROL.js";
import {
  isCoinbaseSDKWallet
} from "./chunk-R76ND7QY.js";
import "./chunk-G26WKBGM.js";
import "./chunk-7AY3QZZV.js";
import "./chunk-BZXRHH4X.js";
import "./chunk-QIUEWTOP.js";
import "./chunk-2RRVHQYX.js";
import "./chunk-XTOEMUZK.js";
import {
  randomBytesHex
} from "./chunk-S6VQW2VI.js";
import "./chunk-J7FYPWA5.js";
import "./chunk-EIBOABXT.js";
import "./chunk-I2GEMA2B.js";
import "./chunk-SWMZXE3E.js";
import "./chunk-N24CESYN.js";
import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  webLocalStorage
} from "./chunk-VIBS7Y3M.js";
import "./chunk-5EFACFVF.js";
import "./chunk-VJOHABJ4.js";
import "./chunk-6FLJU7W7.js";
import "./chunk-PB7CMXGP.js";
import "./chunk-SJKAB62J.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  getBuyWithCryptoHistory,
  getContractEvents,
  isBaseTransactionOptions,
  simulateTransaction,
  watchContractEvents
} from "./chunk-S4ZGHGPT.js";
import {
  sendBatchTransaction
} from "./chunk-VUXPTMXZ.js";
import {
  estimateGasCost,
  getPayBuyWithFiatHistoryEndpoint
} from "./chunk-PHVX3XOV.js";
import {
  sendAndConfirmTransaction
} from "./chunk-ADIC4TC2.js";
import "./chunk-4PEUWIWY.js";
import "./chunk-DYKFWRMQ.js";
import "./chunk-TTOANXGP.js";
import "./chunk-AWMNEQRO.js";
import {
  once,
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import {
  sendTransaction
} from "./chunk-JTR2PIFP.js";
import "./chunk-MWAIX6LF.js";
import {
  estimateGas,
  getGasPrice
} from "./chunk-JZC47WAY.js";
import {
  eth_getBlockByNumber
} from "./chunk-CXAZLQ2Z.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import "./chunk-7ZCK2FX5.js";
import {
  encode
} from "./chunk-7QDK5KLB.js";
import {
  toUnits
} from "./chunk-UY2SRO54.js";
import {
  NATIVE_TOKEN_ADDRESS,
  isNativeTokenAddress
} from "./chunk-673YCYST.js";
import {
  eth_blockNumber,
  waitForReceipt,
  watchBlockNumber
} from "./chunk-JBQP4JIV.js";
import "./chunk-4OCU6WGG.js";
import "./chunk-3DBHE3NE.js";
import {
  isObjectWithKeys
} from "./chunk-3ZOYRTTJ.js";
import "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import "./chunk-NPXNISXJ.js";
import "./chunk-PK5NRJAC.js";
import "./chunk-4BCIASJM.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import "./chunk-CNLOA7AS.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
import "./chunk-LO5SQBMX.js";
import {
  getAddress
} from "./chunk-EIVAOYE5.js";
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import "./chunk-TFBEDS4S.js";
import "./chunk-GOA7IGSB.js";
import "./chunk-QHKZ43P6.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import {
  numberToHex
} from "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectEmbed.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useIsAutoConnecting.js
var import_react = __toESM(require_react(), 1);
function useIsAutoConnecting() {
  const manager = useConnectionManagerCtx("useIsAutoConnecting");
  const store = manager.isAutoConnecting;
  return (0, import_react.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectEmbed.js
function ConnectEmbed(props) {
  var _a, _b, _c;
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const show = !activeAccount || siweAuth.requiresAuth && !siweAuth.isLoggedIn;
  const connectionManager = useConnectionManager();
  (0, import_react2.useEffect)(() => {
    if (props.chain) {
      connectionManager.defineChains([props.chain]);
    }
  }, [props.chain, connectionManager]);
  (0, import_react2.useEffect)(() => {
    if (props.chains) {
      connectionManager.defineChains(props.chains);
    }
  }, [props.chains, connectionManager]);
  const wallets = (0, import_react2.useMemo)(() => props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }), [props.wallets, props.appMetadata, props.chains]);
  const localeId = props.locale || "en_US";
  const localeQuery = useConnectLocale(localeId);
  usePreloadWalletProviders({
    wallets,
    client: props.client
  });
  const modalSize = (0, import_react2.useMemo)(() => {
    return !canFitWideModal() || wallets.length === 1 ? "compact" : props.modalSize || "compact";
  }, [wallets.length, props.modalSize]);
  const meta = (0, import_react2.useMemo)(() => {
    return {
      privacyPolicyUrl: props.privacyPolicyUrl,
      showThirdwebBranding: props.showThirdwebBranding !== false,
      termsOfServiceUrl: props.termsOfServiceUrl,
      title: void 0,
      titleIconUrl: void 0,
      requireApproval: props.requireApproval
    };
  }, [
    props.privacyPolicyUrl,
    props.showThirdwebBranding,
    props.termsOfServiceUrl,
    props.requireApproval
  ]);
  const preferredChain = ((_a = props.accountAbstraction) == null ? void 0 : _a.chain) || props.chain || ((_b = props.chains) == null ? void 0 : _b[0]);
  const autoConnectComp = props.autoConnect !== false && (0, import_jsx_runtime.jsx)(AutoConnect, { chain: preferredChain, appMetadata: props.appMetadata, client: props.client, wallets, accountAbstraction: props.accountAbstraction, timeout: typeof props.autoConnect === "boolean" ? void 0 : (_c = props.autoConnect) == null ? void 0 : _c.timeout, onConnect: props.onConnect });
  if (show) {
    if (!localeQuery.data) {
      return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [autoConnectComp, (0, import_jsx_runtime.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime.jsx)(EmbedContainer, { modalSize, children: (0, import_jsx_runtime.jsx)(LoadingScreen, {}) }) })] });
    }
    return (0, import_jsx_runtime.jsxs)(WalletUIStatesProvider, { theme: props.theme, isOpen: true, children: [(0, import_jsx_runtime.jsx)(ConnectEmbedContent, { auth: props.auth, accountAbstraction: props.accountAbstraction, chain: preferredChain, chains: props.chains, client: props.client, connectLocale: localeQuery.data, size: modalSize, meta, header: props.header, localeId: props.locale || "en_US", onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, showAllWallets: props.showAllWallets, walletConnect: props.walletConnect, wallets, className: props.className, modalSize, style: props.style, welcomeScreen: props.welcomeScreen }), autoConnectComp] });
  }
  return (0, import_jsx_runtime.jsx)("div", { children: autoConnectComp });
}
var ConnectEmbedContent = (props) => {
  const screenSetup = useSetupScreen({
    size: props.size,
    welcomeScreen: void 0,
    wallets: props.wallets
  });
  const { setScreen, initialScreen, screen } = screenSetup;
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const isAutoConnecting = useIsAutoConnecting();
  let content = null;
  (0, import_react2.useEffect)(() => {
    if (siweAuth.requiresAuth && !siweAuth.isLoggedIn && activeAccount && screen === initialScreen) {
      setScreen(reservedScreens.signIn);
    }
  }, [siweAuth, setScreen, activeAccount, screen, initialScreen]);
  const modalSize = !canFitWideModal() ? "compact" : props.modalSize || "compact";
  if (isAutoConnecting) {
    content = (0, import_jsx_runtime.jsx)(LoadingScreen, {});
  } else {
    content = (0, import_jsx_runtime.jsx)(ConnectModalContent, { shouldSetActive: true, screenSetup, isOpen: true, onClose: () => {
      setScreen(initialScreen);
    }, setModalVisibility: () => {
    }, accountAbstraction: props.accountAbstraction, auth: props.auth, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, meta: {
      ...props.meta,
      title: typeof props.header === "object" ? props.header.title : void 0,
      titleIconUrl: typeof props.header === "object" ? props.header.titleIcon : void 0
    }, size: props.size, welcomeScreen: props.welcomeScreen, hideHeader: !props.header, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, showAllWallets: props.showAllWallets, walletConnect: props.walletConnect, wallets: props.wallets, modalHeader: void 0, walletIdsToHide: void 0 });
  }
  return (0, import_jsx_runtime.jsx)(EmbedContainer, { modalSize, className: props.className, style: props.style, children: modalSize === "wide" ? content : (0, import_jsx_runtime.jsxs)(DynamicHeight, { children: [" ", content, " "] }) });
};
var EmbedContainer = StyledDiv((props) => {
  const { modalSize } = props;
  const theme = useCustomTheme();
  return {
    color: theme.colors.primaryText,
    background: theme.colors.modalBg,
    height: modalSize === "compact" ? "auto" : wideModalMaxHeight,
    width: modalSize === "compact" ? modalMaxWidthCompact : modalMaxWidthWide,
    boxSizing: "border-box",
    position: "relative",
    lineHeight: "normal",
    borderRadius: radius.xl,
    border: `1px solid ${theme.colors.borderColor}`,
    overflow: "hidden",
    fontFamily: theme.fontFamily,
    "& *::selection": {
      backgroundColor: theme.colors.selectedTextBg,
      color: theme.colors.selectedTextColor
    },
    "& *": {
      boxSizing: "border-box"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/index.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/transaction-button-utils.js
var useTransactionButtonMutation = (props, sendTransactionFn) => {
  const { transaction, onTransactionSent, onTransactionConfirmed, onError, onClick } = props;
  return useMutation({
    mutationFn: async () => {
      if (onClick) {
        onClick();
      }
      try {
        const resolvedTx = await transaction();
        const result = await sendTransactionFn(resolvedTx);
        if (onTransactionSent) {
          onTransactionSent(result);
        }
        if (onTransactionConfirmed) {
          const receipt = await waitForReceipt(result);
          if (receipt.status === "reverted") {
            throw new Error(`Execution reverted: ${stringify(receipt, null, 2)}`);
          }
          onTransactionConfirmed(receipt);
        }
      } catch (error) {
        if (onError) {
          onError(error);
        }
      } finally {
      }
    }
  });
};

// node_modules/thirdweb/dist/esm/react/web/hooks/transaction/useSendTransaction.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSendTransaction.js
function useSendTransactionCore(args) {
  const { showPayModal, gasless, wallet, switchChain } = args;
  let _account = wallet == null ? void 0 : wallet.getAccount();
  return useMutation({
    mutationFn: async (tx) => {
      var _a;
      if (wallet && tx.chain.id !== ((_a = wallet.getChain()) == null ? void 0 : _a.id)) {
        await switchChain(tx.chain);
        _account = wallet.getAccount();
      }
      const account = _account;
      if (!account) {
        throw new Error("No active account");
      }
      if (!showPayModal) {
        return sendTransaction({
          transaction: tx,
          account,
          gasless
        });
      }
      return new Promise((resolve, reject) => {
        const sendTx = async () => {
          try {
            const res = await sendTransaction({
              transaction: tx,
              account,
              gasless
            });
            resolve(res);
          } catch (e) {
            reject(e);
          }
        };
        (async () => {
          try {
            const [_nativeValue, _erc20Value, supportedDestinations] = await Promise.all([
              resolvePromisedValue(tx.value),
              resolvePromisedValue(tx.erc20Value),
              fetchBuySupportedDestinations(tx.client).catch(() => null)
            ]);
            if (!supportedDestinations) {
              sendTx();
              return;
            }
            if (!supportedDestinations.map((x) => x.chain.id).includes(tx.chain.id) || _erc20Value && !supportedDestinations.some((x) => x.chain.id === tx.chain.id && x.tokens.find((t) => t.address.toLowerCase() === _erc20Value.tokenAddress.toLowerCase()))) {
              sendTx();
              return;
            }
            const nativeValue = _nativeValue || 0n;
            const erc20Value = (_erc20Value == null ? void 0 : _erc20Value.amountWei) || 0n;
            const [nativeBalance, erc20Balance, gasCost] = await Promise.all([
              getWalletBalance({
                client: tx.client,
                address: account.address,
                chain: tx.chain
              }),
              (_erc20Value == null ? void 0 : _erc20Value.tokenAddress) ? getTokenBalance({
                client: tx.client,
                account,
                chain: tx.chain,
                tokenAddress: _erc20Value.tokenAddress
              }) : void 0,
              getTotalTxCostForBuy(tx, account.address)
            ]);
            const gasSponsored = hasSponsoredTransactionsEnabled(wallet);
            const txGasCost = gasSponsored ? 0n : gasCost;
            const nativeCost = nativeValue + txGasCost;
            const shouldShowModal = erc20Value > 0n && erc20Balance && erc20Balance.value < erc20Value || nativeCost > 0n && nativeBalance.value < nativeCost;
            if (shouldShowModal) {
              showPayModal({
                tx,
                sendTx,
                rejectTx: reject,
                resolveTx: resolve
              });
            } else {
              sendTx();
            }
          } catch (e) {
            console.error("Failed to estimate cost", e);
            sendTx();
          }
        })();
      });
    }
  });
}
async function getTotalTxCostForBuy(tx, from) {
  try {
    const gasCost = await estimateGasCost({
      transaction: tx,
      from
    });
    const bufferCost = gasCost.wei / 10n;
    const txValue = await resolvePromisedValue(tx.value);
    return gasCost.wei + bufferCost + (txValue || 0n);
  } catch {
    if (from) {
      return await getTotalTxCostForBuy(tx);
    }
    const value = await resolvePromisedValue(tx.value);
    const gasPrice = await getGasPrice({
      client: tx.client,
      chain: tx.chain
    });
    const buffer = 2000000n * gasPrice;
    if (!value) {
      return 0n + buffer;
    }
    return value + buffer;
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/TransactionModal.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/ExecutingScreen.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
function ExecutingTxScreen(props) {
  var _a;
  const sendTxCore = useSendTransaction({
    payModal: false
  });
  const [txHash, setTxHash] = (0, import_react3.useState)();
  const chainExplorers = useChainExplorers(props.tx.chain);
  const [status, setStatus] = (0, import_react3.useState)("loading");
  const sendTx = (0, import_react3.useCallback)(async () => {
    setStatus("loading");
    try {
      const txData = await sendTxCore.mutateAsync(props.tx);
      setTxHash(txData.transactionHash);
      props.onTxSent(txData);
      setStatus("sent");
    } catch (e) {
      console.error(e);
      setStatus("failed");
    }
  }, [sendTxCore, props.tx, props.onTxSent]);
  const done = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    if (done.current) {
      return;
    }
    done.current = true;
    sendTx();
  }, [sendTx]);
  return (0, import_jsx_runtime2.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime2.jsx)(ModalHeader, { title: "Transaction", onBack: props.onBack }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime2.jsxs)(Container, { flex: "row", center: "x", children: [status === "loading" && (0, import_jsx_runtime2.jsx)(Spinner, { size: "xxl", color: "accentText" }), status === "failed" && (0, import_jsx_runtime2.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), status === "sent" && (0, import_jsx_runtime2.jsx)(Container, { color: "success", flex: "row", center: "both", children: (0, import_jsx_runtime2.jsx)(CheckCircledIcon, { width: iconSize["3xl"], height: iconSize["3xl"] }) })] }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime2.jsxs)(Text, { color: "primaryText", center: true, size: "lg", children: [status === "loading" && "Sending transaction", status === "failed" && "Transaction failed", status === "sent" && "Transaction sent"] }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime2.jsx)(Text, { color: "danger", center: true, size: "sm", children: status === "failed" && sendTxCore.error ? sendTxCore.error.message : "" }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "xxl" }), status === "failed" && (0, import_jsx_runtime2.jsx)(Button, { variant: "accent", fullWidth: true, onClick: sendTx, children: "Try Again" }), status === "sent" && (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)(Button, { variant: "accent", fullWidth: true, onClick: props.closeModal, children: "Done" }), txHash && (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime2.jsxs)(ButtonLink, { fullWidth: true, variant: "outline", href: formatExplorerTxUrl(((_a = chainExplorers.explorers[0]) == null ? void 0 : _a.url) ?? "", txHash), target: "_blank", as: "a", gap: "xs", style: {
    textDecoration: "none",
    color: "inherit"
  }, children: ["View on Explorer", (0, import_jsx_runtime2.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] })] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/TransactionModal.js
function TransactionModal(props) {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  useQuery({
    queryKey: ["transaction-modal-event"],
    queryFn: () => {
      if (!account || !wallet)
        return;
      trackPayEvent({
        client: props.client,
        walletAddress: account.address,
        walletType: wallet.id,
        dstChainId: props.tx.chain.id,
        event: "open_pay_transaction_modal"
      });
    },
    enabled: !!wallet
  });
  return (0, import_jsx_runtime3.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime3.jsx)(Modal, { open: true, size: "compact", setOpen: (_open) => {
    if (!_open) {
      props.onClose();
    }
  }, children: (0, import_jsx_runtime3.jsx)(TransactionModalContent, { ...props }) }) });
}
function TransactionModalContent(props) {
  const localeQuery = useConnectLocale(props.localeId);
  const [screen, setScreen] = (0, import_react4.useState)("buy");
  if (!localeQuery.data) {
    return (0, import_jsx_runtime3.jsx)(LoadingScreen, {});
  }
  if (screen === "execute-tx") {
    return (0, import_jsx_runtime3.jsx)(ExecutingTxScreen, { tx: props.tx, closeModal: props.onClose, onTxSent: props.onTxSent });
  }
  return (0, import_jsx_runtime3.jsx)(LazyBuyScreen, { title: props.title, isEmbed: false, client: props.client, onBack: props.onBack, supportedTokens: props.supportedTokens, connectLocale: localeQuery.data, theme: typeof props.theme === "string" ? props.theme : props.theme.type, payOptions: props.payOptions, onDone: () => {
    setScreen("execute-tx");
  }, connectOptions: void 0 });
}

// node_modules/thirdweb/dist/esm/react/web/hooks/transaction/useSendTransaction.js
function useSendTransaction(config = {}) {
  const switchChain = useSwitchActiveWalletChain();
  const wallet = useActiveWallet();
  const setRootEl = (0, import_react5.useContext)(SetRootElementContext);
  const payModal = config.payModal;
  let payModalEnabled = true;
  if (payModal === false || config.gasless) {
    payModalEnabled = false;
  }
  const showPayModal = (data) => {
    var _a;
    if (payModal === false)
      return;
    setRootEl((0, import_jsx_runtime4.jsx)(TransactionModal, { title: ((_a = payModal == null ? void 0 : payModal.metadata) == null ? void 0 : _a.name) || "Transaction", tx: data.tx, onComplete: data.sendTx, onClose: () => {
      setRootEl(null);
      data.rejectTx(new Error("User rejected transaction by closing modal"));
    }, onTxSent: data.resolveTx, client: data.tx.client, localeId: (payModal == null ? void 0 : payModal.locale) || "en_US", supportedTokens: payModal == null ? void 0 : payModal.supportedTokens, theme: (payModal == null ? void 0 : payModal.theme) || "dark", payOptions: {
      buyWithCrypto: payModal == null ? void 0 : payModal.buyWithCrypto,
      buyWithFiat: payModal == null ? void 0 : payModal.buyWithFiat,
      purchaseData: payModal == null ? void 0 : payModal.purchaseData,
      mode: "transaction",
      transaction: data.tx,
      metadata: payModal == null ? void 0 : payModal.metadata,
      onPurchaseSuccess: payModal == null ? void 0 : payModal.onPurchaseSuccess
    } }));
  };
  return useSendTransactionCore({
    showPayModal: !payModalEnabled || payModal === false ? void 0 : showPayModal,
    gasless: config.gasless,
    switchChain,
    wallet
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/index.js
function TransactionButton(props) {
  const { children, transaction, onTransactionSent, onTransactionConfirmed, onError, onClick, gasless, payModal, disabled, unstyled, ...buttonProps } = props;
  const account = useActiveAccount();
  const sendTransaction2 = useSendTransaction({ gasless, payModal });
  const { mutate: handleClick, isPending } = useTransactionButtonMutation(props, sendTransaction2.mutateAsync);
  return (0, import_jsx_runtime5.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime5.jsxs)(Button, { gap: "xs", disabled: !account || disabled || isPending, variant: "primary", unstyled, "data-is-loading": isPending, onClick: () => handleClick(), ...buttonProps, style: !unstyled ? {
    opacity: !account || disabled ? 0.5 : 1,
    minWidth: "165px",
    position: "relative",
    ...buttonProps.style
  } : {
    position: "relative",
    ...buttonProps.style
  }, children: [(0, import_jsx_runtime5.jsx)("span", { style: { visibility: isPending ? "hidden" : "visible" }, children }), isPending && (0, import_jsx_runtime5.jsx)("div", { style: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    height: "100%",
    top: 0,
    bottom: 0,
    margin: "auto"
  }, children: (0, import_jsx_runtime5.jsx)(Spinner, { size: "md", color: "primaryButtonText" }) })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/providers/thirdweb-provider.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/providers/thirdweb-provider.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/structuralSharing.js
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    if (Array.isArray(a) && Array.isArray(b)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key && !deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
function structuralSharing(oldData, newData) {
  if (deepEqual(oldData, newData)) {
    return oldData;
  }
  return replaceEqualDeep(oldData, newData);
}

// node_modules/thirdweb/dist/esm/react/core/providers/thirdweb-provider.js
function ThirdwebProviderCore(props) {
  const [el, setEl] = (0, import_react6.useState)(null);
  const [queryClient] = (0, import_react6.useState)(() => new QueryClient({
    defaultOptions: {
      mutations: {
        onSettled: (data, _error, variables) => {
          if (isBaseTransactionOptions(variables)) {
            if (isObjectWithKeys(data, ["transactionHash"]) && isObjectWithKeys(variables, ["client", "chain"])) {
              waitForReceipt({
                transactionHash: data.transactionHash,
                // We know it exists from the if
                client: variables.client,
                chain: variables.chain
              }).catch((e) => {
                console.error("[Transaction Error]", e);
              }).then(() => {
                var _a, _b, _c;
                return Promise.all([
                  queryClient.invalidateQueries({
                    queryKey: (
                      // invalidate any readContract queries for this chainId:contractAddress
                      [
                        "readContract",
                        (_a = variables.__contract) == null ? void 0 : _a.chain.id,
                        (_b = variables.__contract) == null ? void 0 : _b.address
                      ]
                    )
                  }),
                  invalidateWalletBalance(queryClient, (_c = variables.__contract) == null ? void 0 : _c.chain.id)
                ]);
              });
            }
          }
        }
      },
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1e3,
        structuralSharing
      }
    }
  }));
  return (0, import_jsx_runtime6.jsx)(ConnectionManagerCtx.Provider, { value: props.manager, children: (0, import_jsx_runtime6.jsxs)(QueryClientProvider, { client: queryClient, children: [(0, import_jsx_runtime6.jsx)(SetRootElementContext.Provider, { value: setEl, children: props.children }), el] }) });
}

// node_modules/thirdweb/dist/esm/react/web/providers/thirdweb-provider.js
function ThirdwebProvider(props) {
  const connectionManager = (0, import_react7.useMemo)(() => props.connectionManager || createConnectionManager(webLocalStorage), [props.connectionManager]);
  return (0, import_jsx_runtime7.jsx)(ThirdwebProviderCore, { manager: connectionManager, children: props.children });
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/get-capabilities.js
async function getCapabilities({ wallet }) {
  const account = wallet.getAccount();
  if (!account) {
    return {
      message: `Can't get capabilities, no account connected for wallet: ${wallet.id}`
    };
  }
  if (isSmartWallet(wallet)) {
    const { smartWalletGetCapabilities } = await import("./smart-wallet-capabilities-TZBEJHWD.js");
    return smartWalletGetCapabilities({ wallet });
  }
  if (isInAppWallet(wallet)) {
    const { inAppWalletGetCapabilities } = await import("./in-app-wallet-capabilities-4KBZBWHO.js");
    return inAppWalletGetCapabilities({ wallet });
  }
  if (isCoinbaseSDKWallet(wallet)) {
    const { coinbaseSDKWalletGetCapabilities } = await import("./coinbaseWebSDK-RVHYUQN6.js");
    return coinbaseSDKWalletGetCapabilities({ wallet });
  }
  if (isWalletConnect(wallet)) {
    return {
      message: "getCapabilities is not yet supported with Wallet Connect"
    };
  }
  const provider = getInjectedProvider(wallet.id);
  try {
    return await provider.request({
      method: "wallet_getCapabilities",
      params: [account.address]
    });
  } catch (error) {
    if (/unsupport|not support|not available/i.test(error.message)) {
      return {
        message: `${wallet.id} does not support wallet_getCapabilities, reach out to them directly to request EIP-5792 support.`
      };
    }
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useCapabilities.js
function useCapabilities(options) {
  var _a;
  const wallet = useActiveWallet();
  return useQuery({
    queryKey: [
      "getCapabilities",
      ((_a = wallet == null ? void 0 : wallet.getChain()) == null ? void 0 : _a.id) || -1,
      wallet == null ? void 0 : wallet.id
    ],
    queryFn: async () => {
      if (!wallet) {
        return {
          message: "Can't get capabilities, no wallet connected"
        };
      }
      return getCapabilities({ wallet });
    },
    retry: false,
    ...options == null ? void 0 : options.queryOptions
  });
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/send-calls.js
async function sendCalls(options) {
  const { wallet, calls, capabilities, version = "1.0", chain = wallet.getChain() } = options;
  if (!chain) {
    throw new Error(`Cannot send calls, no active chain found for wallet: ${wallet.id}`);
  }
  const account = wallet.getAccount();
  if (!account) {
    throw new Error(`Cannot send calls, no account connected for wallet: ${wallet.id}`);
  }
  if (isSmartWallet(wallet) || isInAppWallet(wallet)) {
    const { inAppWalletSendCalls } = await import("./in-app-wallet-calls-GQSQW7CK.js");
    return inAppWalletSendCalls({ account, calls });
  }
  const preparedCalls = await Promise.all(calls.map(async (call) => {
    const { to, value } = call;
    if (to === void 0 && call.data === void 0) {
      throw new Error("Cannot send call, `to` or `data` must be provided.");
    }
    const [_to, _data, _value] = await Promise.all([
      resolvePromisedValue(to),
      encode(call),
      resolvePromisedValue(value)
    ]);
    return {
      to: _to,
      data: _data,
      value: typeof _value === "bigint" || typeof _value === "number" ? numberToHex(_value) : void 0
    };
  }));
  const injectedWalletCallParams = [
    {
      from: getAddress(account.address),
      calls: preparedCalls,
      capabilities,
      version,
      chainId: numberToHex(chain.id)
    }
  ];
  if (isCoinbaseSDKWallet(wallet)) {
    const { coinbaseSDKWalletSendCalls } = await import("./coinbaseWebSDK-RVHYUQN6.js");
    return coinbaseSDKWalletSendCalls({
      wallet,
      params: injectedWalletCallParams
    });
  }
  if (isWalletConnect(wallet)) {
    throw new Error("sendCalls is not yet supported for Wallet Connect");
  }
  const provider = getInjectedProvider(wallet.id);
  try {
    return await provider.request({
      method: "wallet_sendCalls",
      params: injectedWalletCallParams
      // The viem type definition is slightly different
    });
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      throw new Error(`${wallet.id} does not support wallet_sendCalls, reach out to them directly to request EIP-5792 support.`);
    }
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js
async function getCallsStatus({ wallet, client, bundleId }) {
  const account = wallet.getAccount();
  if (!account) {
    throw new Error(`Failed to get call status, no account found for wallet ${wallet.id}`);
  }
  if (isSmartWallet(wallet) || isInAppWallet(wallet)) {
    const { inAppWalletGetCallsStatus } = await import("./in-app-wallet-calls-GQSQW7CK.js");
    return inAppWalletGetCallsStatus({ wallet, client, bundleId });
  }
  if (isCoinbaseSDKWallet(wallet)) {
    const { coinbaseSDKWalletGetCallsStatus } = await import("./coinbaseWebSDK-RVHYUQN6.js");
    return coinbaseSDKWalletGetCallsStatus({ wallet, bundleId });
  }
  if (isWalletConnect(wallet)) {
    throw new Error("getCallsStatus is not yet supported for Wallet Connect");
  }
  const provider = getInjectedProvider(wallet.id);
  try {
    return await provider.request({
      method: "wallet_getCallsStatus",
      params: [bundleId]
    });
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      throw new Error(`${wallet.id} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
    }
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/wait-for-bundle.js
var DEFAULT_MAX_BLOCKS_WAIT_TIME = 100;
var map = /* @__PURE__ */ new Map();
function waitForBundle(options) {
  const { bundleId, chain, wallet, client } = options;
  const chainId = chain.id;
  const key = `${chainId}:calls_${bundleId}`;
  const maxBlocksWaitTime = options.maxBlocksWaitTime ?? DEFAULT_MAX_BLOCKS_WAIT_TIME;
  if (map.has(key)) {
    return map.get(key);
  }
  const promise = new Promise((resolve, reject) => {
    let blocksWaited = -1;
    const unwatch = watchBlockNumber({
      client,
      chain,
      onNewBlockNumber: async () => {
        blocksWaited++;
        if (blocksWaited >= maxBlocksWaitTime) {
          unwatch();
          reject(new Error(`Bundle not confirmed after ${maxBlocksWaitTime} blocks`));
          return;
        }
        try {
          const result = await getCallsStatus({
            wallet,
            client,
            bundleId
          });
          if (result.status === "CONFIRMED") {
            unwatch();
            resolve(result);
          }
        } catch {
        }
      }
    });
  }).finally(() => {
    map.delete(key);
  });
  map.set(key, promise);
  return promise;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSendCalls.js
function useSendCalls({ client, waitForResult = true }) {
  const activeWallet = useActiveWallet();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (options) => {
      const { wallet = activeWallet } = options;
      const chain = wallet == null ? void 0 : wallet.getChain();
      if (!wallet || !chain) {
        throw new Error("Failed to send transactions, no connected wallet found.");
      }
      const callsPromise = sendCalls({ ...options, wallet });
      if (!waitForResult) {
        return callsPromise;
      }
      const result = await waitForBundle({
        bundleId: await callsPromise,
        wallet,
        client,
        chain
      });
      return result;
    },
    onSettled: async (_result, _error, variables) => {
      var _a, _b;
      const chain = activeWallet == null ? void 0 : activeWallet.getChain();
      if (!_result || !activeWallet || !chain) {
        return;
      }
      if (typeof _result === "string") {
        await waitForBundle({
          bundleId: _result,
          wallet: activeWallet,
          client,
          chain
        }).catch((error) => {
          console.error("Failed to confirm sent bundle and invalidate queries", _result, error);
          return void 0;
        });
      }
      for (const call of variables.calls) {
        queryClient.invalidateQueries({
          queryKey: [
            "readContract",
            (_a = call.__contract) == null ? void 0 : _a.chain.id,
            (_b = call.__contract) == null ? void 0 : _b.address
          ]
        });
      }
      invalidateWalletBalance(queryClient, chain.id);
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useCallsStatus.js
function useCallsStatus(options) {
  var _a;
  const { client, bundleId } = options;
  const wallet = useActiveWallet();
  return useQuery({
    queryKey: [
      "getCapabilities",
      ((_a = wallet == null ? void 0 : wallet.getChain()) == null ? void 0 : _a.id) || -1,
      wallet == null ? void 0 : wallet.id
    ],
    queryFn: async () => {
      if (!wallet) {
        throw new Error("Failed to get calls status, no wallet connected");
      }
      return getCallsStatus({ wallet, client, bundleId });
    },
    retry: false,
    enabled: !!bundleId && wallet !== void 0,
    ...options.queryOptions
  });
}

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useLinkProfile.js
function useLinkProfile() {
  const wallet = useAdminWallet();
  return useMutation({
    mutationKey: ["profiles"],
    mutationFn: async (options) => {
      var _a;
      const ecosystem = wallet && isEcosystemWallet(wallet) ? { id: wallet.id, partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId } : void 0;
      const optionsWithEcosystem = { ...options, ecosystem };
      return linkProfile(optionsWithEcosystem);
    }
  });
}

// node_modules/thirdweb/dist/esm/utils/function-id.js
var functionIdCache = /* @__PURE__ */ new Map();
function getFunctionId(fn) {
  if (functionIdCache.has(fn)) {
    return functionIdCache.get(fn);
  }
  const id = randomBytesHex();
  functionIdCache.set(fn, id);
  return id;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/contract/useReadContract.js
function useReadContract(extensionOrOptions, options) {
  if (typeof extensionOrOptions === "function") {
    if (!options) {
      throw new Error(`Missing second argument for "useReadContract(<extension>, <options>)" hook.`);
    }
    const { queryOptions: queryOptions2, contract, ...params } = options;
    const query = queryOptions({
      queryKey: [
        "readContract",
        contract.chain.id,
        contract.address,
        getFunctionId(extensionOrOptions),
        stringify(params)
      ],
      // @ts-expect-error - TODO: clean up the type issues here
      queryFn: () => extensionOrOptions({ ...params, contract }),
      ...queryOptions2
    });
    return useQuery(query);
  }
  if ("method" in extensionOrOptions) {
    const { queryOptions: queryOptions2, ...tx } = extensionOrOptions;
    const query = queryOptions({
      queryKey: [
        "readContract",
        tx.contract.chain.id,
        tx.contract.address,
        tx.method,
        stringify(tx.params)
      ],
      queryFn: () => readContract(extensionOrOptions),
      ...queryOptions2
    });
    return useQuery(query);
  }
  throw new Error(`Invalid "useReadContract" options. Expected either a read extension or a transaction object.`);
}

// node_modules/thirdweb/dist/esm/react/core/hooks/contract/useContractEvents.js
var import_react8 = __toESM(require_react(), 1);
function useContractEvents(options) {
  const { contract, events, blockRange = 2e3, enabled = true, watch = true } = options;
  const latestBlockNumber = (0, import_react8.useRef)(void 0);
  const queryClient = useQueryClient();
  const eventsKey = (0, import_react8.useMemo)(() => (events == null ? void 0 : events.reduce((acc, curr) => {
    return `${acc}${curr.hash}_`;
  }, "")) || "__all__", [events]);
  const queryKey = (0, import_react8.useMemo)(() => [contract.chain.id, contract.address, "logs", eventsKey], [contract.address, contract.chain, eventsKey]);
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const rpcRequest = getRpcClient(contract);
      const currentBlockNumber = await eth_blockNumber(rpcRequest);
      latestBlockNumber.current = currentBlockNumber;
      const initialEvents = await getContractEvents({
        contract,
        events,
        fromBlock: currentBlockNumber - BigInt(blockRange)
      });
      return initialEvents;
    },
    enabled
  });
  (0, import_react8.useEffect)(() => {
    if (!enabled || !watch) {
      return;
    }
    return watchContractEvents({
      contract,
      onEvents: (newEvents) => {
        if (newEvents.length > 0 && newEvents[0]) {
          latestBlockNumber.current = newEvents[0].blockNumber;
        }
        queryClient.setQueryData(queryKey, (oldEvents = []) => [
          ...oldEvents,
          ...newEvents
        ]);
      },
      events,
      latestBlockNumber: latestBlockNumber.current
    });
  }, [contract, enabled, events, queryClient, queryKey, watch]);
  return query;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSimulateTransaction.js
function useSimulateTransaction() {
  return useMutation({
    mutationFn: (options) => simulateTransaction(options)
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSendBatchTransaction.js
function useSendBatchTransaction() {
  const account = useActiveAccount();
  return useMutation({
    mutationFn: async (transactions) => {
      if (!account) {
        throw new Error("No active account");
      }
      return await sendBatchTransaction({
        transactions,
        account
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSendAndConfirmTransaction.js
function useSendAndConfirmTransaction(config = {}) {
  const account = useActiveAccount();
  const { gasless } = config;
  return useMutation({
    mutationFn: async (transaction) => {
      if (!account) {
        throw new Error("No active account");
      }
      return await sendAndConfirmTransaction({
        transaction,
        account,
        gasless
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useEstimateGas.js
function useEstimateGas() {
  const account = useActiveAccount();
  return useMutation({
    mutationFn: (transaction) => estimateGas({ transaction, account })
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useEstimateGasCost.js
function useEstimateGasCost() {
  const account = useActiveAccount();
  return useMutation({
    mutationFn: (transaction) => estimateGasCost({ transaction, account })
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/rpc/useBlockNumber.js
var import_react9 = __toESM(require_react(), 1);
function useBlockNumber(options) {
  const { client, chain, enabled = true, watch = true } = options;
  const queryClient = useQueryClient();
  const queryKey = (0, import_react9.useMemo)(() => [chain.id, "blockNumber"], [chain]);
  const query = useQuery({
    // TODO: technically client should be part of the queryKey here...
    queryKey,
    queryFn: async () => {
      const rpcRequest = getRpcClient({ client, chain });
      return await eth_blockNumber(rpcRequest);
    },
    enabled
  });
  (0, import_react9.useEffect)(() => {
    if (!enabled || !watch) {
      return;
    }
    return watchBlockNumber({
      client,
      chain,
      onNewBlockNumber: (newBlockNumber) => {
        queryClient.setQueryData(queryKey, newBlockNumber);
      }
    });
  }, [client, chain, enabled, queryClient, queryKey, watch]);
  return query.data;
}

// node_modules/thirdweb/dist/esm/react/core/utils/createQuery.js
var CONTRACT_QUERY_CACHE = /* @__PURE__ */ new WeakMap();
function createContractQuery(readCall) {
  if (CONTRACT_QUERY_CACHE.has(readCall)) {
    return CONTRACT_QUERY_CACHE.get(readCall);
  }
  function useRead(options) {
    const { contract, queryOptions: queryOptions2, ...params } = options;
    return useQuery({
      queryKey: [
        "readContract",
        contract.chain.id,
        contract.address,
        getFunctionId(readCall),
        stringify(params)
      ],
      queryFn: () => readCall(options),
      ...queryOptions2
    });
  }
  CONTRACT_QUERY_CACHE.set(readCall, useRead);
  return useRead;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useInvalidateQueries.js
function useInvalidateContractQuery() {
  const queryClient = useQueryClient();
  return ({ chainId, contractAddress }) => {
    queryClient.invalidateQueries({
      queryKey: ["readContract", chainId, contractAddress]
    });
  };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoHistory.js
function useBuyWithCryptoHistory(params, queryParams) {
  return useQuery({
    ...queryParams,
    queryKey: ["getBuyWithCryptoHistory", params],
    queryFn: () => {
      if (!params) {
        throw new Error("Swap params are required");
      }
      return getBuyWithCryptoHistory(params);
    },
    enabled: !!params
  });
}

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getHistory.js
async function getBuyWithFiatHistory(params) {
  var _a;
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("walletAddress", params.walletAddress);
    queryParams.append("start", params.start.toString());
    queryParams.append("count", params.count.toString());
    const queryString = queryParams.toString();
    const url = `${getPayBuyWithFiatHistoryEndpoint()}?${queryString}`;
    const response = await getClientFetch(params.client)(url);
    if (!response.ok) {
      (_a = response.body) == null ? void 0 : _a.cancel();
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()).result;
    return data;
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatHistory.js
function useBuyWithFiatHistory(params, queryParams) {
  return useQuery({
    ...queryParams,
    queryKey: ["buyWithFiatHistory", params],
    queryFn: () => {
      if (!params) {
        throw new Error("params are required");
      }
      return getBuyWithFiatHistory(params);
    },
    enabled: !!params
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/usePostOnrampQuote.js
function usePostOnRampQuote(params, queryOptions2) {
  return useQuery({
    ...queryOptions2,
    queryKey: ["getPostOnRampQuote", params],
    queryFn: async () => {
      if (!params) {
        throw new Error("No params provided");
      }
      return getPostOnRampQuote(params);
    },
    enabled: !!params
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/PayEmbed.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);
function PayEmbed(props) {
  var _a, _b, _c;
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const [screen, setScreen] = (0, import_react10.useState)("buy");
  const theme = props.theme || "dark";
  const connectionManager = useConnectionManager();
  (0, import_react10.useEffect)(() => {
    var _a2, _b2;
    if ((_a2 = props.connectOptions) == null ? void 0 : _a2.chain) {
      connectionManager.defineChains([(_b2 = props.connectOptions) == null ? void 0 : _b2.chain]);
    }
  }, [(_a = props.connectOptions) == null ? void 0 : _a.chain, connectionManager]);
  (0, import_react10.useEffect)(() => {
    var _a2, _b2;
    if ((_a2 = props.connectOptions) == null ? void 0 : _a2.chains) {
      connectionManager.defineChains((_b2 = props.connectOptions) == null ? void 0 : _b2.chains);
    }
  }, [(_b = props.connectOptions) == null ? void 0 : _b.chains, connectionManager]);
  let content = null;
  const metadata = props.payOptions && "metadata" in props.payOptions ? props.payOptions.metadata : null;
  if (!localeQuery.data) {
    content = (0, import_jsx_runtime8.jsx)("div", { style: {
      minHeight: "350px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: (0, import_jsx_runtime8.jsx)(Spinner, { size: "xl", color: "secondaryText" }) });
  } else {
    content = (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [screen === "buy" && (0, import_jsx_runtime8.jsx)(BuyScreen, { title: (metadata == null ? void 0 : metadata.name) || "Buy", isEmbed: true, supportedTokens: props.supportedTokens, theme, client: props.client, connectLocale: localeQuery.data, hiddenWallets: props.hiddenWallets, payOptions: props.payOptions || {
      mode: "fund_wallet"
    }, onDone: () => {
      var _a2;
      if (((_a2 = props.payOptions) == null ? void 0 : _a2.mode) === "transaction") {
        setScreen("execute-tx");
      }
    }, connectOptions: props.connectOptions, onBack: void 0 }), screen === "execute-tx" && ((_c = props.payOptions) == null ? void 0 : _c.mode) === "transaction" && props.payOptions.transaction && (0, import_jsx_runtime8.jsx)(ExecutingTxScreen, { tx: props.payOptions.transaction, closeModal: () => {
      setScreen("buy");
    }, onBack: () => {
      setScreen("buy");
    }, onTxSent: () => {
    } })] });
  }
  return (0, import_jsx_runtime8.jsx)(CustomThemeProvider, { theme, children: (0, import_jsx_runtime8.jsx)(EmbedContainer, { modalSize: "compact", style: props.style, className: props.className, children: (0, import_jsx_runtime8.jsx)(DynamicHeight, { children: content }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/useConnectModal.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react11 = __toESM(require_react(), 1);
function useConnectModal() {
  const setRootEl = (0, import_react11.useContext)(SetRootElementContext);
  const [isConnecting, setIsConnecting] = (0, import_react11.useState)(false);
  const connect = (0, import_react11.useCallback)((props) => {
    function cleanup() {
      setIsConnecting(false);
      setRootEl(void 0);
    }
    return new Promise((resolve, reject) => {
      setIsConnecting(true);
      getConnectLocale(props.locale || "en_US").then((locale) => {
        setRootEl((0, import_jsx_runtime9.jsx)(Modal2, { ...props, onConnect: (w) => {
          resolve(w);
          cleanup();
        }, onClose: () => {
          reject();
          cleanup();
        }, connectLocale: locale }));
      }).catch(() => {
        reject();
        cleanup();
      });
    });
  }, [setRootEl]);
  return { connect, isConnecting };
}
function Modal2(props) {
  const wallets = (0, import_react11.useMemo)(() => props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }), [props.wallets, props.appMetadata, props.chains]);
  const size = (0, import_react11.useMemo)(() => {
    return !canFitWideModal() || wallets.length === 1 ? "compact" : props.size || "wide";
  }, [props.size, wallets.length]);
  const meta = (0, import_react11.useMemo)(() => {
    return {
      privacyPolicyUrl: props.privacyPolicyUrl,
      showThirdwebBranding: props.showThirdwebBranding,
      termsOfServiceUrl: props.termsOfServiceUrl,
      title: props.title,
      titleIconUrl: props.titleIcon
    };
  }, [
    props.privacyPolicyUrl,
    props.showThirdwebBranding,
    props.termsOfServiceUrl,
    props.title,
    props.titleIcon
  ]);
  return (0, import_jsx_runtime9.jsx)(WalletUIStatesProvider, { theme: props.theme, isOpen: true, children: (0, import_jsx_runtime9.jsx)(ConnectModal_default, {
    onClose: props.onClose,
    shouldSetActive: props.setActive === void 0 ? true : props.setActive,
    accountAbstraction: props.accountAbstraction,
    // TODO: not set up in `useConnectModal` for some reason?
    auth: void 0,
    chain: props.chain,
    client: props.client,
    connectLocale: props.connectLocale,
    meta,
    size,
    welcomeScreen: props.welcomeScreen,
    localeId: props.locale || "en_US",
    onConnect: props.onConnect,
    recommendedWallets: props.recommendedWallets,
    showAllWallets: props.showAllWallets,
    wallets,
    chains: props.chains,
    walletConnect: props.walletConnect
  }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/ClaimButton/index.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function ClaimButton(props) {
  const { children, contractAddress, client, chain, claimParams, payModal } = props;
  const defaultPayModalMetadata = payModal ? payModal.metadata : void 0;
  const contract = getContract({
    address: contractAddress,
    client,
    chain
  });
  const { data: payMetadata } = useReadContract(getPayMetadata, {
    contract,
    tokenId: claimParams.type === "ERC1155" ? claimParams.tokenId : void 0,
    queryOptions: {
      enabled: !defaultPayModalMetadata
    }
  });
  const account = useActiveAccount();
  const { mutateAsync } = useSendAndConfirmTransaction();
  return (0, import_jsx_runtime10.jsx)(TransactionButton, { payModal: {
    metadata: defaultPayModalMetadata || payMetadata,
    ...payModal
  }, transaction: async () => {
    if (!account) {
      throw new Error("No account detected");
    }
    const [claimTx, { getApprovalForTransaction }] = await Promise.all([
      getClaimTransaction({
        contract,
        account,
        claimParams
      }),
      import("./getApprovalForTransaction-RG2PM2ZX.js")
    ]);
    const approveTx = await getApprovalForTransaction({
      transaction: claimTx,
      account
    });
    if (approveTx) {
      await mutateAsync(approveTx);
    }
    return claimTx;
  }, ...props, children });
}
async function getPayMetadata(options) {
  var _a, _b;
  const { contract, tokenId } = options;
  const [contractMetadata, nft] = await Promise.all([
    getContractMetadata(options),
    tokenId ? getNFT2({ contract, tokenId }) : void 0
  ]);
  if (tokenId) {
    return {
      image: (_a = nft == null ? void 0 : nft.metadata) == null ? void 0 : _a.image,
      name: (_b = nft == null ? void 0 : nft.metadata) == null ? void 0 : _b.name
    };
  }
  return {
    image: contractMetadata == null ? void 0 : contractMetadata.image,
    name: contractMetadata == null ? void 0 : contractMetadata.name
  };
}
async function getClaimTransaction({ contract, account, claimParams }) {
  switch (claimParams.type) {
    case "ERC721":
      return await getERC721ClaimTo({ contract, account, claimParams });
    case "ERC1155":
      return await getERC1155ClaimTo({ contract, account, claimParams });
    case "ERC20": {
      return await getERC20ClaimTo({ contract, account, claimParams });
    }
    default:
      throw new Error("Invalid contract type. Must be either NFT Drop (ERC721), Edition Drop (ERC1155) or Token Drop (ERC20)");
  }
}
async function getERC721ClaimTo({ contract, account, claimParams }) {
  const { claimTo } = await import("./claimTo-LNJZHHT3.js");
  return claimTo({
    contract,
    to: claimParams.to || (account == null ? void 0 : account.address) || "",
    quantity: claimParams.quantity,
    from: claimParams.from
  });
}
async function getERC1155ClaimTo({ contract, account, claimParams }) {
  const { claimTo } = await import("./claimTo-3OGSZAGD.js");
  return claimTo({
    contract,
    to: claimParams.to || (account == null ? void 0 : account.address) || "",
    quantity: claimParams.quantity,
    tokenId: claimParams.tokenId,
    from: claimParams.from
  });
}
async function getERC20ClaimTo({ contract, account, claimParams }) {
  const { claimTo } = await import("./claimTo-7N7PJK5O.js");
  if ("quantity" in claimParams) {
    return claimTo({
      contract,
      to: claimParams.to || (account == null ? void 0 : account.address) || "",
      quantity: claimParams.quantity,
      from: claimParams.from
    });
  }
  if ("quantityInWei" in claimParams) {
    return claimTo({
      contract,
      to: claimParams.to || (account == null ? void 0 : account.address) || "",
      quantityInWei: claimParams.quantityInWei,
      from: claimParams.from
    });
  }
  throw new Error("Missing quantity or quantityInWei");
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/BuyDirectListingButton/index.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);
function BuyDirectListingButton(props) {
  const { contractAddress, listingId, children, chain, client, quantity, payModal } = props;
  const defaultPayModalMetadata = payModal ? payModal.metadata : void 0;
  const account = useActiveAccount();
  const contract = getContract({
    address: contractAddress,
    client,
    chain
  });
  const { data: payMetadata } = useReadContract(getPayMetadata2, {
    contract,
    listingId,
    queryOptions: {
      enabled: !defaultPayModalMetadata
    }
  });
  const { mutateAsync } = useSendAndConfirmTransaction();
  const prepareBuyTransaction = (0, import_react12.useCallback)(async () => {
    if (!account) {
      throw new Error("No account detected");
    }
    const [listing, { getApprovalForTransaction }, { buyFromListing }] = await Promise.all([
      getListing({
        contract,
        listingId
      }),
      import("./getApprovalForTransaction-RG2PM2ZX.js"),
      import("./buyFromListing-NAQIOY7I.js")
    ]);
    if (!listing) {
      throw new Error(`Could not retrieve listing with ID: ${listingId}`);
    }
    let _quantity = 1n;
    if (listing.asset.type === "ERC721") {
      if (typeof quantity === "bigint" && (quantity !== 1n || quantity < 0n)) {
        throw new Error("Invalid quantity. This is an ERC721 listing & quantity is always `1n`");
      }
    } else if (listing.asset.type === "ERC1155") {
      if (typeof quantity === "bigint") {
        if (quantity > listing.quantity) {
          throw new Error(`quantity exceeds available amount. Available: ${listing.quantity.toString()}`);
        }
        if (quantity < 0n) {
          throw new Error("Invalid quantity. Should be at least 1n");
        }
        _quantity = quantity;
      }
      _quantity = listing.quantity;
    }
    const buyTx = buyFromListing({
      contract,
      listingId,
      quantity: _quantity,
      recipient: (account == null ? void 0 : account.address) || ""
    });
    const approveTx = await getApprovalForTransaction({
      transaction: buyTx,
      account
    });
    if (approveTx) {
      await mutateAsync(approveTx);
    }
    return buyTx;
  }, [account, contract, quantity, listingId, mutateAsync]);
  return (0, import_jsx_runtime11.jsx)(TransactionButton, { payModal: {
    metadata: defaultPayModalMetadata || payMetadata,
    ...payModal
  }, transaction: () => prepareBuyTransaction(), ...props, children });
}
async function getPayMetadata2(options) {
  var _a, _b, _c, _d;
  const listing = await getListing(options);
  if (!listing) {
    return { name: void 0, image: void 0 };
  }
  return {
    name: (_b = (_a = listing.asset) == null ? void 0 : _a.metadata) == null ? void 0 : _b.name,
    image: (_d = (_c = listing.asset) == null ? void 0 : _c.metadata) == null ? void 0 : _d.image
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/CreateDirectListingButton/index.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react13 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/extensions/marketplace/__generated__/IDirectListings/write/createListing.js
var FN_SELECTOR = "0x746415b5";
var FN_INPUTS = [
  {
    type: "tuple",
    name: "_params",
    components: [
      {
        type: "address",
        name: "assetContract"
      },
      {
        type: "uint256",
        name: "tokenId"
      },
      {
        type: "uint256",
        name: "quantity"
      },
      {
        type: "address",
        name: "currency"
      },
      {
        type: "uint256",
        name: "pricePerToken"
      },
      {
        type: "uint128",
        name: "startTimestamp"
      },
      {
        type: "uint128",
        name: "endTimestamp"
      },
      {
        type: "bool",
        name: "reserved"
      }
    ]
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256",
    name: "listingId"
  }
];
function createListing(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.params];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    },
    accessList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.accessList;
    },
    gas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gas;
    },
    gasPrice: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gasPrice;
    },
    maxFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxFeePerGas;
    },
    maxPriorityFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxPriorityFeePerGas;
    },
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    extraGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.extraGas;
    },
    erc20Value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.erc20Value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/write/createListing.js
function createListing2(options) {
  return createListing({
    contract: options.contract,
    asyncParams: async () => {
      const assetContract = getContract({
        ...options.contract,
        address: options.assetContractAddress
      });
      const rpcClient = getRpcClient(options.contract);
      const [assetIsERC721, assetIsERC1155, lastestBlock] = await Promise.all([
        isERC721({ contract: assetContract }),
        isERC1155({ contract: assetContract }),
        eth_getBlockByNumber(rpcClient, { blockTag: "latest" })
      ]);
      if (!assetIsERC721 && !assetIsERC1155) {
        throw new Error("AssetContract must implement ERC 1155 or ERC 721.");
      }
      let startTimestamp = BigInt(Math.floor((options.startTimestamp ?? /* @__PURE__ */ new Date()).getTime() / 1e3));
      const endTimestamp = BigInt(Math.floor((options.endTimestamp ?? new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1e3)).getTime() / 1e3));
      if (startTimestamp <= lastestBlock.timestamp) {
        startTimestamp = lastestBlock.timestamp + 1n;
      }
      if (startTimestamp >= endTimestamp) {
        throw new Error("Start time must be before end time.");
      }
      let quantity;
      if (assetIsERC721) {
        quantity = 1n;
      } else {
        quantity = options.quantity ?? 1n;
      }
      const currencyAddress = options.currencyContractAddress ?? NATIVE_TOKEN_ADDRESS;
      let pricePerToken;
      if ("pricePerToken" in options) {
        if (isNativeTokenAddress(currencyAddress)) {
          pricePerToken = toUnits(options.pricePerToken, 18);
        } else {
          const currencyContract = getContract({
            ...options.contract,
            address: currencyAddress
          });
          const { decimals } = await import("./decimals-OWVEHM45.js");
          const currencyDecimals = await decimals({
            contract: currencyContract
          });
          pricePerToken = toUnits(options.pricePerToken, currencyDecimals);
        }
      } else {
        pricePerToken = BigInt(options.pricePerTokenWei);
      }
      return {
        params: {
          assetContract: options.assetContractAddress,
          tokenId: options.tokenId,
          currency: options.currencyContractAddress ?? NATIVE_TOKEN_ADDRESS,
          quantity,
          pricePerToken,
          startTimestamp,
          endTimestamp,
          reserved: options.isReservedListing ?? false
        },
        overrides: {
          extraGas: 50000n
          // add extra gas to account for router call
        }
      };
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/CreateDirectListingButton/index.js
function CreateDirectListingButton(props) {
  const { contractAddress, chain, client, children, payModal, assetContractAddress, tokenId } = props;
  const marketplaceContract = getContract({
    address: contractAddress,
    chain,
    client
  });
  const account = useActiveAccount();
  const defaultPayModalMetadata = payModal ? payModal.metadata : void 0;
  const nftContract = getContract({
    address: assetContractAddress,
    chain,
    client
  });
  const { data: payMetadata } = useReadContract(getPayMetadata3, {
    contract: nftContract,
    tokenId,
    queryOptions: {
      enabled: !defaultPayModalMetadata
    }
  });
  const { mutateAsync } = useSendAndConfirmTransaction();
  const prepareTransaction = (0, import_react13.useCallback)(async () => {
    if (!account) {
      throw new Error("No account detected");
    }
    const [is721, is1155] = await Promise.all([
      isERC721({ contract: nftContract }),
      isERC1155({ contract: nftContract })
    ]);
    if (!is1155 && !is721) {
      throw new Error("Asset must either be ERC721 or ERC1155");
    }
    if (is1155) {
      const [{ isApprovedForAll }, { setApprovalForAll }] = await Promise.all([
        import("./isApprovedForAll-JGBKL36G.js"),
        import("./setApprovalForAll-WRU2AIHP.js")
      ]);
      const isApproved = await isApprovedForAll({
        contract: nftContract,
        operator: marketplaceContract.address,
        owner: account.address
      });
      if (!isApproved) {
        const transaction = setApprovalForAll({
          contract: nftContract,
          operator: marketplaceContract.address,
          approved: true
        });
        await mutateAsync(transaction);
      }
    } else {
      const [{ isApprovedForAll }, { setApprovalForAll }, { getApproved }] = await Promise.all([
        import("./isApprovedForAll-CG3FQCVQ.js"),
        import("./setApprovalForAll-YKTONSHG.js"),
        import("./getApproved-UMVYKWJJ.js")
      ]);
      const [isApproved, tokenApproved] = await Promise.all([
        isApprovedForAll({
          contract: nftContract,
          operator: marketplaceContract.address,
          owner: account.address
        }),
        getApproved({ contract: nftContract, tokenId: props.tokenId })
      ]);
      if (!isApproved && tokenApproved.toLowerCase() !== marketplaceContract.address.toLowerCase()) {
        const transaction = setApprovalForAll({
          contract: nftContract,
          operator: marketplaceContract.address,
          approved: true
        });
        await mutateAsync(transaction);
      }
    }
    const listingTx = createListing2({
      contract: marketplaceContract,
      ...props
    });
    return listingTx;
  }, [marketplaceContract, props, account, mutateAsync, nftContract]);
  return (0, import_jsx_runtime12.jsx)(TransactionButton, { transaction: () => prepareTransaction(), payModal: {
    metadata: defaultPayModalMetadata || payMetadata,
    ...payModal
  }, ...props, children });
}
async function getPayMetadata3(options) {
  var _a, _b, _c, _d;
  const [{ getContractMetadata: getContractMetadata2 }, { getNFT: getERC721 }, { getNFT: getERC1155 }] = await Promise.all([
    import("./getContractMetadata-X5DE2MGS.js"),
    import("./getNFT-T7TVIXIV.js"),
    import("./getNFT-CWYYXL36.js")
  ]);
  const [is721, is1155, contractMetadata] = await Promise.all([
    isERC721(options),
    isERC1155(options),
    getContractMetadata2(options)
  ]);
  if (is721) {
    const nft = await getERC721(options);
    return {
      image: (_a = nft == null ? void 0 : nft.metadata) == null ? void 0 : _a.image,
      name: (_b = nft == null ? void 0 : nft.metadata) == null ? void 0 : _b.name
    };
  }
  if (is1155) {
    const nft = await getERC1155(options);
    return {
      image: (_c = nft == null ? void 0 : nft.metadata) == null ? void 0 : _c.image,
      name: (_d = nft == null ? void 0 : nft.metadata) == null ? void 0 : _d.name
    };
  }
  return {
    image: contractMetadata == null ? void 0 : contractMetadata.image,
    name: contractMetadata == null ? void 0 : contractMetadata.name
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/NFT.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_react14 = __toESM(require_react(), 1);
var NFTProviderContext = (0, import_react14.createContext)(void 0);
function NFT(props) {
  return (0, import_jsx_runtime13.jsx)(NFTProviderContext.Provider, { value: props, children: props.children });
}
function useNFTContext() {
  const ctx = (0, import_react14.useContext)(NFTProviderContext);
  if (!ctx) {
    throw new Error("NFTProviderContext not found. Make sure you are using NFT.Media, NFT.Description, etc. inside a <NFT /> component");
  }
  return ctx;
}
NFT.Media = (props) => {
  var _a, _b, _c;
  const { contract, tokenId } = useNFTContext();
  const nftQuery = useSuspenseQuery({
    queryKey: [
      "__nft_info_internal__",
      contract.chain.id,
      contract.address,
      tokenId.toString()
    ],
    queryFn: () => getNFTInfo({ contract, tokenId })
  });
  const animation_url = (_a = nftQuery.data) == null ? void 0 : _a.metadata.animation_url;
  const image = ((_b = nftQuery.data) == null ? void 0 : _b.metadata.image) || ((_c = nftQuery.data) == null ? void 0 : _c.metadata.image_url);
  return (0, import_jsx_runtime13.jsx)(MediaRenderer, { client: contract.client, src: animation_url || image, poster: image, ...props });
};
NFT.Name = (props) => {
  var _a;
  const { contract, tokenId } = useNFTContext();
  const nftQuery = useSuspenseQuery({
    queryKey: [
      "__nft_info_internal__",
      contract.chain.id,
      contract.address,
      tokenId.toString()
    ],
    queryFn: () => getNFTInfo({ contract, tokenId })
  });
  const name = ((_a = nftQuery.data) == null ? void 0 : _a.metadata.name) || "";
  return (0, import_jsx_runtime13.jsx)("span", { ...props, children: name });
};
NFT.Description = (props) => {
  var _a;
  const { contract, tokenId } = useNFTContext();
  const nftQuery = useSuspenseQuery({
    queryKey: [
      "__nft_info_internal__",
      contract.chain.id,
      contract.address,
      tokenId.toString()
    ],
    queryFn: () => getNFTInfo({ contract, tokenId })
  });
  const description = ((_a = nftQuery.data) == null ? void 0 : _a.metadata.description) || "";
  return (0, import_jsx_runtime13.jsx)("span", { ...props, children: description });
};
async function getNFTInfo(options) {
  const nft = await Promise.allSettled([
    getNFT(options),
    getNFT2(options)
  ]).then(([possibleNFT721, possibleNFT1155]) => {
    if (possibleNFT721.status === "fulfilled" && possibleNFT721.value.tokenURI) {
      return possibleNFT721.value;
    }
    if (possibleNFT1155.status === "fulfilled" && possibleNFT1155.value.tokenURI) {
      return possibleNFT1155.value;
    }
    throw new Error("Failed to load NFT metadata");
  });
  return nft;
}

// node_modules/thirdweb/dist/esm/react/web/ui/SiteEmbed.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
function SiteEmbed({ src, client, ecosystem, ...props }) {
  if (!client.clientId) {
    throw new Error("The SiteEmbed client must have a clientId");
  }
  const activeWallet = useActiveWallet();
  const walletId = activeWallet == null ? void 0 : activeWallet.id;
  const { data: { authProvider, authCookie } = {} } = useQuery({
    queryKey: ["site-embed", walletId, src, client.clientId, ecosystem],
    enabled: activeWallet && (isEcosystemWallet(activeWallet) || walletId === "inApp"),
    queryFn: async () => {
      const storage = new ClientScopedStorage({
        storage: webLocalStorage,
        clientId: client.clientId,
        ecosystem
      });
      const authProvider2 = await getLastAuthProvider(webLocalStorage);
      const authCookie2 = await storage.getAuthCookie();
      return { authProvider: authProvider2, authCookie: authCookie2 };
    }
  });
  const url = new URL(src);
  if (walletId) {
    url.searchParams.set("walletId", walletId);
  }
  if (authProvider) {
    url.searchParams.set("authProvider", authProvider);
  }
  if (authCookie) {
    url.searchParams.set("authCookie", authCookie);
  }
  return (0, import_jsx_runtime14.jsx)("iframe", { src: encodeURI(url.toString()), width: "100%", height: "100%", allowFullScreen: true, ...props });
}

// node_modules/thirdweb/dist/esm/react/web/ui/SiteLink.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function SiteLink({ href, client, ecosystem, children, ...props }) {
  if (!client.clientId) {
    throw new Error("The SiteLink client must have a clientId");
  }
  const activeWallet = useActiveWallet();
  const walletId = activeWallet == null ? void 0 : activeWallet.id;
  const { data: { authProvider, authCookie } = {} } = useQuery({
    queryKey: ["site-link", walletId, href, client.clientId, ecosystem],
    enabled: activeWallet && (isEcosystemWallet(activeWallet) || walletId === "inApp"),
    queryFn: async () => {
      const storage = new ClientScopedStorage({
        storage: webLocalStorage,
        clientId: client.clientId,
        ecosystem
      });
      const authProvider2 = await getLastAuthProvider(webLocalStorage);
      const authCookie2 = await storage.getAuthCookie();
      return { authProvider: authProvider2, authCookie: authCookie2 };
    }
  });
  const url = new URL(href);
  if (walletId) {
    url.searchParams.set("walletId", walletId);
  }
  if (authProvider) {
    url.searchParams.set("authProvider", authProvider);
  }
  if (authCookie) {
    url.searchParams.set("authCookie", authCookie);
  }
  return (0, import_jsx_runtime15.jsx)("a", { href: encodeURI(url.toString()), ...props, children });
}
export {
  AutoConnect,
  Blobbie,
  BuyDirectListingButton,
  ClaimButton,
  ConnectButton,
  ConnectEmbed,
  CreateDirectListingButton,
  MediaRenderer,
  NFT,
  PayEmbed,
  SiteEmbed,
  SiteLink,
  ThirdwebProvider,
  TransactionButton,
  createContractQuery,
  darkTheme,
  defaultTokens,
  getDefaultToken,
  lightTheme,
  useActiveAccount,
  useActiveWallet,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
  useAdminWallet,
  useAutoConnect,
  useBlockNumber,
  useBuyHistory,
  useBuyWithCryptoHistory,
  useBuyWithCryptoQuote,
  useBuyWithCryptoStatus,
  useBuyWithFiatHistory,
  useBuyWithFiatQuote,
  useBuyWithFiatStatus,
  useCallsStatus,
  useCapabilities,
  useChainMetadata,
  useConnect,
  useConnectModal,
  useConnectedWallets,
  useConnectionManager,
  useContractEvents,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useEstimateGas,
  useEstimateGasCost,
  useInvalidateContractQuery,
  useIsAutoConnecting,
  useLinkProfile,
  useNetworkSwitcherModal,
  usePostOnRampQuote,
  useProfiles,
  useReadContract,
  useSendAndConfirmTransaction,
  useSendBatchTransaction,
  useSendCalls,
  useSendTransaction,
  useSetActiveWallet,
  useSetActiveWalletConnectionStatus,
  useSimulateTransaction,
  useSiweAuth,
  useSocialProfiles,
  useSwitchActiveWalletChain,
  useWaitForReceipt,
  useWalletBalance,
  useWalletDetailsModal,
  useWalletImage,
  useWalletInfo
};
//# sourceMappingURL=thirdweb_react.js.map
