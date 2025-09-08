import {
  isERC1155,
  isERC721
} from "./chunk-QLCPWJYR.js";
import {
  EcosystemWalletConnectUI_default
} from "./chunk-EGJT3UEX.js";
import {
  createWalletConnectClient,
  createWalletConnectSession,
  disconnectWalletConnectSession,
  getActiveWalletConnectSessions
} from "./chunk-YG7T4W43.js";
import {
  AccentFailIcon,
  AnyWalletConnectUI,
  PoweredByThirdweb,
  QRCode,
  SmartConnectUI,
  TOS,
  WalletSelector,
  getDefaultWallets,
  wait
} from "./chunk-7ZNEOXS2.js";
import {
  InputSelectionUI,
  LoadingScreen,
  ScreenSetupContext,
  compactModalMaxHeight,
  modalCloseFadeOutDuration,
  modalMaxWidthCompact,
  modalMaxWidthWide,
  onModalUnmount,
  reservedScreens,
  useActiveAccount,
  useSetupScreen,
  wideModalMaxHeight,
  wideModalScreenThreshold
} from "./chunk-KWA5PGSC.js";
import {
  WalletLogoSpinner
} from "./chunk-MGEBXLXC.js";
import {
  getProfiles
} from "./chunk-65EUCVOP.js";
import {
  Fuse,
  createWallet,
  isMobile,
  useDebouncedValue,
  useShowMore
} from "./chunk-HO57TQQM.js";
import {
  Input,
  Label,
  Spinner,
  WalletButtonEl,
  WalletUIStatesProvider,
  useIsWalletModalOpen,
  useSetIsWalletModalOpen,
  useSetSelectionData
} from "./chunk-AARWH2GQ.js";
import {
  ArrowRightIcon,
  Button,
  ButtonLink,
  CheckCircledIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
  Container,
  CopyIcon,
  Cross1Icon,
  Cross2Icon,
  CrossCircledIcon,
  CustomThemeProvider,
  EmailIcon,
  ExitIcon,
  ExternalLinkIcon,
  FingerPrintIcon,
  IconButton,
  IdCardIcon,
  Img,
  Line,
  Link,
  MagnifyingGlassIcon,
  MinusIcon,
  ModalHeader,
  ModalTitle,
  OutlineWalletIcon,
  PaperPlaneIcon,
  PhoneIcon,
  PinBottomIcon,
  PlusIcon,
  RadiobuttonIcon,
  ReloadIcon,
  ShuffleIcon,
  Skeleton,
  Spacer,
  StyledButton,
  StyledDiv,
  StyledP,
  StyledUl,
  Text,
  TextAlignJustifyIcon,
  TriangleDownIcon,
  UNIVERSAL_RESOLVER_ADDRESS,
  WalletImage,
  fadeInAnimation,
  fontSize,
  genericTokenIcon,
  getLastAuthProvider,
  getSocialIcon,
  getWalletBalance,
  hasSponsoredTransactionsEnabled,
  iconSize,
  keyframes,
  media,
  namehash,
  newStyled,
  noScrollBar,
  packetToBytes,
  parseTheme,
  radius,
  resolve,
  setLastAuthProvider,
  shadow,
  spacing,
  useActiveWallet,
  useConnectedWalletDetails,
  useConnectionManager,
  useConnectionManagerCtx,
  useCustomTheme,
  useEnsAvatar,
  useEnsName,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useSocialProfiles,
  useWalletBalance,
  useWalletInfo
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  getCurrencyMetadata
} from "./chunk-GGVPULQZ.js";
import {
  deleteConnectParamsFromStorage
} from "./chunk-YGRUPXVB.js";
import {
  formatExplorerAddressUrl,
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
import {
  getInstalledWalletProviders,
  injectedProvider
} from "./chunk-PWFRCBEK.js";
import {
  smartWallet
} from "./chunk-2HYPHUAF.js";
import {
  isContractDeployed
} from "./chunk-Q3TN3POE.js";
import {
  isInAppWallet
} from "./chunk-O6KA6WKL.js";
import {
  ethereum
} from "./chunk-ZLJ6VYSG.js";
import {
  decimals
} from "./chunk-4RRAU5V7.js";
import {
  COINBASE
} from "./chunk-BZXRHH4X.js";
import {
  socialAuthOptions
} from "./chunk-EIBOABXT.js";
import {
  track
} from "./chunk-N24CESYN.js";
import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  webLocalStorage
} from "./chunk-VIBS7Y3M.js";
import {
  resolveArweaveScheme
} from "./chunk-6FLJU7W7.js";
import {
  require_react_dom
} from "./chunk-SJKAB62J.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  estimateGasCost,
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer,
  getPayBuyHistoryEndpoint,
  getPayBuyWithFiatQuoteEndpoint,
  getPayBuyWithFiatStatusEndpoint,
  getPaySupportedDestinations,
  getPaySupportedSources
} from "./chunk-PHVX3XOV.js";
import {
  sendAndConfirmTransaction
} from "./chunk-ADIC4TC2.js";
import {
  eth_getBalance
} from "./chunk-4PEUWIWY.js";
import {
  once,
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import {
  sendTransaction
} from "./chunk-JTR2PIFP.js";
import {
  getGasPrice
} from "./chunk-JZC47WAY.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import {
  encode
} from "./chunk-7QDK5KLB.js";
import {
  toTokens,
  toUnits,
  toWei
} from "./chunk-UY2SRO54.js";
import {
  NATIVE_TOKEN_ADDRESS
} from "./chunk-673YCYST.js";
import {
  waitForReceipt
} from "./chunk-JBQP4JIV.js";
import {
  createStore,
  getTransactionStore
} from "./chunk-3DBHE3NE.js";
import {
  resolveScheme
} from "./chunk-ZNEQLT5Q.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  prepareTransaction
} from "./chunk-CNLOA7AS.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import {
  encodeAbiParameters
} from "./chunk-U7TO6S3N.js";
import {
  getAddress,
  isAddress,
  shortenAddress,
  shortenHex
} from "./chunk-EIVAOYE5.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  cacheChains,
  convertApiChainToChain,
  defineChain,
  getCachedChain,
  getChainDecimals,
  getChainMetadata,
  getChainNativeCurrencyName,
  getChainSymbol
} from "./chunk-TFBEDS4S.js";
import {
  withCache
} from "./chunk-GOA7IGSB.js";
import {
  getThirdwebDomains
} from "./chunk-QHKZ43P6.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";
import {
  toHex
} from "./chunk-BBNNHC5G.js";
import {
  hexToNumber
} from "./chunk-SPELR2RL.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/BuyScreen.js
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var import_react60 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/isSwapRequiredPostOnramp.js
function isSwapRequiredPostOnramp(buyWithFiatQuote) {
  const sameChain = buyWithFiatQuote.toToken.chainId === buyWithFiatQuote.onRampToken.token.chainId;
  const sameToken = getAddress(buyWithFiatQuote.toToken.tokenAddress) === getAddress(buyWithFiatQuote.onRampToken.token.tokenAddress);
  return !(sameChain && sameToken);
}

// node_modules/thirdweb/dist/esm/utils/formatNumber.js
function formatNumber(value, decimalPlaces) {
  if (value === 0)
    return 0;
  const precision = 10 ** decimalPlaces;
  const threshold = 1 / 10 ** decimalPlaces;
  const fn = value < threshold ? "ceil" : "round";
  return Math[fn]((value + Number.EPSILON) * precision) / precision;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoQuote.js
function useBuyWithCryptoQuote(params, queryParams) {
  return useQuery({
    ...queryParams,
    queryKey: ["buyWithCryptoQuote", params],
    queryFn: () => {
      if (!params) {
        throw new Error("Swap params are required");
      }
      return getBuyWithCryptoQuote(params);
    },
    enabled: !!params,
    retry(failureCount, error) {
      if (failureCount > 3) {
        return false;
      }
      try {
        const serverError = error.error;
        if (serverError.code === "MINIMUM_PURCHASE_AMOUNT") {
          return false;
        }
        if (serverError.statusCode === 404 || serverError.statusCode >= 500) {
          return false;
        }
      } catch {
        return true;
      }
      return true;
    }
  });
}

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getQuote.js
async function getBuyWithFiatQuote(params) {
  try {
    const clientFetch = getClientFetch(params.client);
    const response = await clientFetch(getPayBuyWithFiatQuoteEndpoint(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: stringify({
        toAddress: params.toAddress,
        fromCurrencySymbol: params.fromCurrencySymbol,
        toChainId: params.toChainId.toString(),
        toTokenAddress: params.toTokenAddress,
        fromAmount: params.fromAmount,
        toAmount: params.toAmount,
        maxSlippageBPS: params.maxSlippageBPS,
        isTestMode: params.isTestMode,
        purchaseData: params.purchaseData,
        fromAddress: params.fromAddress,
        toGasAmountWei: params.toGasAmountWei,
        preferredProvider: params.preferredProvider
      })
    });
    if (!response.ok) {
      const errorObj = await response.json();
      if (errorObj && "error" in errorObj) {
        throw errorObj;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()).result;
  } catch (error) {
    console.error("Error getting buy with fiat quote", error);
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatQuote.js
function useBuyWithFiatQuote(params, queryOptions) {
  return useQuery({
    ...queryOptions,
    queryKey: ["useBuyWithFiatQuote", params],
    queryFn: async () => {
      if (!params) {
        throw new Error("No params provided");
      }
      return getBuyWithFiatQuote(params);
    },
    enabled: !!params,
    retry(failureCount, error) {
      if (failureCount > 3) {
        return false;
      }
      try {
        const serverError = error.error;
        if (serverError.code === "MINIMUM_PURCHASE_AMOUNT") {
          return false;
        }
        if (serverError.statusCode === 404 || serverError.statusCode >= 500) {
          return false;
        }
      } catch {
        return true;
      }
      return true;
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/providers/invalidateWalletBalance.js
function invalidateWalletBalance(queryClient, chainId) {
  return queryClient.invalidateQueries({
    // invalidate any walletBalance queries for this chainId
    // TODO: add wallet address in here if we can get it somehow
    queryKey: chainId ? ["walletBalance", chainId] : ["walletBalance"]
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainName.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useChainQuery.js
var import_react = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/utils/promise/p-limit.js
var Node2 = class {
  constructor(value) {
    Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "next", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.value = value;
  }
};
var Queue = class {
  constructor() {
    Object.defineProperty(this, "head", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tail", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "size", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.clear();
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node2(value);
    if (this.head) {
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    var _a;
    const current = this.head;
    if (!current) {
      return;
    }
    this.head = (_a = this.head) == null ? void 0 : _a.next;
    this.size--;
    return current.value;
  }
  clear() {
    this.head = void 0;
    this.tail = void 0;
    this.size = 0;
  }
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
var AsyncResource = {
  bind(fn, _type, thisArg) {
    return fn.bind(thisArg);
  }
};
function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
  const queue = new Queue();
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      const fn = queue.dequeue();
      if (fn) {
        fn();
      }
    }
  };
  const run = async (function_, resolve2, arguments_) => {
    activeCount++;
    const result = (async () => function_(...arguments_))();
    resolve2(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (function_, resolve2, arguments_) => {
    queue.enqueue(AsyncResource.bind(run.bind(void 0, function_, resolve2, arguments_)));
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        const fn = queue.dequeue();
        if (fn) {
          fn();
        }
      }
    })();
  };
  const generator = (function_, ...arguments_) => new Promise((resolve2) => {
    enqueue(function_, resolve2, arguments_);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value() {
        queue.clear();
      }
    }
  });
  return generator;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useChainQuery.js
function useChainName(chain) {
  var _a;
  const isEnabled = !!chain && !chain.name;
  const chainQuery = useQuery({
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    enabled: isEnabled,
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    }
  });
  return {
    name: (chain == null ? void 0 : chain.name) ?? ((_a = chainQuery.data) == null ? void 0 : _a.name),
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function useChainIconUrl(chain) {
  var _a, _b, _c, _d;
  const isEnabled = !!chain && !((_a = chain.icon) == null ? void 0 : _a.url);
  const chainQuery = useQuery({
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    // only if we have a chain and no chain icon url!
    enabled: isEnabled,
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    }
  });
  return {
    url: ((_b = chain == null ? void 0 : chain.icon) == null ? void 0 : _b.url) ?? ((_d = (_c = chainQuery.data) == null ? void 0 : _c.icon) == null ? void 0 : _d.url),
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function useChainFaucets(chain) {
  var _a, _b;
  const isEnabled = !!chain && "testnet" in chain && !((_a = chain.faucets) == null ? void 0 : _a.length) && chain.id !== 1337;
  const chainQuery = useQuery({
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    enabled: isEnabled,
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    }
  });
  return {
    faucets: (chain == null ? void 0 : chain.faucets) ?? ((_b = chainQuery.data) == null ? void 0 : _b.faucets) ?? [],
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function useChainSymbol(chain) {
  var _a, _b, _c, _d;
  const isEnabled = !!chain && !((_a = chain.nativeCurrency) == null ? void 0 : _a.symbol);
  const chainQuery = useQuery({
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    // only if we have a chain and no chain icon url!
    enabled: isEnabled,
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    }
  });
  return {
    symbol: ((_b = chain == null ? void 0 : chain.nativeCurrency) == null ? void 0 : _b.symbol) ?? ((_d = (_c = chainQuery.data) == null ? void 0 : _c.nativeCurrency) == null ? void 0 : _d.symbol),
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function useChainExplorers(chain) {
  var _a, _b;
  const isEnabled = !!chain && !((_a = chain.blockExplorers) == null ? void 0 : _a.length);
  const chainQuery = useQuery({
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    enabled: isEnabled,
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    }
  });
  return {
    explorers: (chain == null ? void 0 : chain.blockExplorers) ?? ((_b = chainQuery.data) == null ? void 0 : _b.blockExplorers) ?? [],
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function getQueryOptions(chain) {
  return {
    queryKey: ["chain", chain],
    enabled: !!chain,
    staleTime: 1e3 * 60 * 60
    // 1 hour
  };
}
function useChainMetadata(chain) {
  return useQuery({
    ...getQueryOptions(chain),
    queryFn: async () => {
      if (!chain) {
        throw new Error("chainId is required");
      }
      return getChainMetadata(chain);
    }
  });
}
function useChainsQuery(chains, maxConcurrency) {
  const queryList = (0, import_react.useMemo)(() => {
    const limit = pLimit(maxConcurrency);
    return chains.map((chain) => {
      return {
        ...getQueryOptions(chain),
        queryFn: () => limit(() => getChainMetadata(chain))
      };
    });
  }, [chains, maxConcurrency]);
  return useQueries({
    queries: queryList
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainName.js
var ChainName = (props) => {
  const { name } = useChainName(props.chain);
  if (name) {
    return (0, import_jsx_runtime.jsx)(Text, { size: props.size, children: props.short ? shorterChainName(name) : name });
  }
  return (0, import_jsx_runtime.jsx)(Skeleton, { width: "50px", height: fontSize[props.size] });
};
function shorterChainName(name) {
  const split = name.split(" ");
  const wordsToRemove = /* @__PURE__ */ new Set(["mainnet", "testnet", "chain"]);
  return split.filter((s) => {
    return !wordsToRemove.has(s.toLowerCase());
  }).join(" ");
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Drawer.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/DynamicHeight.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
function DynamicHeight(props) {
  const { height, elementRef } = useHeightObserver();
  return (0, import_jsx_runtime2.jsx)("div", { style: {
    height: height ? `${height}px` : "auto",
    transition: "height 210ms cubic-bezier(0.175, 0.885, 0.32, 1.1)",
    overflow: "hidden",
    boxSizing: "border-box"
  }, children: (0, import_jsx_runtime2.jsx)("div", { ref: elementRef, style: {
    maxHeight: props.maxHeight
  }, children: props.children }) });
}
function useHeightObserver() {
  const elementRef = (0, import_react2.useRef)(null);
  const [height, setHeight] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      setHeight(element.scrollHeight);
    });
    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return { height, elementRef };
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var React25 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-context/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function createContext2(rootComponentName, defaultContext) {
  const Context = React2.createContext(defaultContext);
  const Provider2 = (props) => {
    const { children, ...context } = props;
    const value = React2.useMemo(() => context, Object.values(context));
    return (0, import_jsx_runtime3.jsx)(Context.Provider, { value, children });
  };
  Provider2.displayName = rootComponentName + "Provider";
  function useContext22(consumerName) {
    const context = React2.useContext(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider2, useContext22];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React2.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const value = React2.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime3.jsx)(Context.Provider, { value, children });
    };
    Provider2.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const context = React2.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React2.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React2.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React2.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? React3.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React4["useId".toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React4.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId)
      setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React6 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React5 = __toESM(require_react(), 1);
function useCallbackRef(callback) {
  const callbackRef = React5.useRef(callback);
  React5.useEffect(() => {
    callbackRef.current = callback;
  });
  return React5.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = React6.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop)
          handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = React6.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React6.useRef(value);
  const handleChange = useCallbackRef(onChange);
  React6.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React10 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React8 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var Slot = React7.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React7.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React7.Children.count(newElement) > 1)
          return React7.Children.only(null);
        return React7.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return (0, import_jsx_runtime4.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React7.isValidElement(newElement) ? React7.cloneElement(newElement, void 0, newChildren) : null });
  }
  return (0, import_jsx_runtime4.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = React7.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (React7.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return React7.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return React7.Children.count(children) > 1 ? React7.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children });
};
function isSlottable(child) {
  return React7.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node3 = React8.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime5.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node3.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node3 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target)
    ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React9 = __toESM(require_react(), 1);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React9.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React10.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React10.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React10.useContext(DismissableLayerContext);
    const [node, setNode] = React10.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = React10.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch)
        return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch)
        return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer)
        return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React10.useEffect(() => {
      if (!node)
        return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React10.useEffect(() => {
      return () => {
        if (!node)
          return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React10.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return (0, import_jsx_runtime6.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React10.forwardRef((props, forwardedRef) => {
  const context = React10.useContext(DismissableLayerContext);
  const ref = React10.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React10.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return (0, import_jsx_runtime6.jsx)(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React10.useRef(false);
  const handleClickRef = React10.useRef(() => {
  });
  React10.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React10.useRef(false);
  React10.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler)
    target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React11.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React11.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React11.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React11.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React11.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0)
            focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container)
        mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React11.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React11.useCallback(
    (event) => {
      if (!loop && !trapped)
        return;
      if (focusScope.paused)
        return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2)
            event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop)
              focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop)
              focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return (0, import_jsx_runtime7.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container }))
      return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _a;
      stack = arrayRemove(stack, focusScope);
      (_a = stack[0]) == null ? void 0 : _a.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React12 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React12.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React12.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? import_react_dom.default.createPortal((0, import_jsx_runtime8.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React22 = __toESM(require_react(), 1);
var React13 = __toESM(require_react(), 1);
function useStateMachine(initialState, machine) {
  return React13.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React22.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React22.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React22.useState();
  const stylesRef = React22.useRef({});
  const prevPresentRef = React22.useRef(present);
  const prevAnimationNameRef = React22.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React22.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React22.useCallback((node2) => {
      if (node2)
        stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef2(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React14 = __toESM(require_react(), 1);
var count2 = 0;
function useFocusGuards() {
  React14.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count2++;
    return () => {
      if (count2 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count2--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React24 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React19 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react3 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react3.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React15 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React15.useLayoutEffect : React15.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/node_modules/tslib/tslib.es6.mjs
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function __rest2(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React16 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react4 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign2({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React17 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React18 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest2(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React18.createElement(Target, __assign2({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React19.forwardRef(function(props, parentRef) {
  var ref = React19.useRef(null);
  var _a = React19.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container2 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React19.createElement(
    React19.Fragment,
    null,
    enabled && React19.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React19.cloneElement(React19.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React19.createElement(Container2, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React23 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React21 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React20 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React20.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React21.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React21.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React21.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React23.useRef([]);
  var touchStartRef = React23.useRef([0, 0]);
  var activeAxis = React23.useRef();
  var id = React23.useState(idCounter++)[0];
  var Style2 = React23.useState(styleSingleton)[0];
  var lastProps = React23.useRef(props);
  React23.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React23.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React23.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React23.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React23.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React23.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React23.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React23.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React23.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React23.createElement(
    React23.Fragment,
    null,
    inert ? React23.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React23.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React24.forwardRef(function(props, ref) {
  return React24.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React25.useRef(null);
  const contentRef = React25.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_jsx_runtime9.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React25.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return (0, import_jsx_runtime9.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME2, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME2, __scopeDialog);
  return (0, import_jsx_runtime9.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React25.Children.map(children, (child) => (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime9.jsx)(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React25.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime9.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      (0, import_jsx_runtime9.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: (0, import_jsx_runtime9.jsx)(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = React25.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? (0, import_jsx_runtime9.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime9.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React25.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = React25.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React25.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return (0, import_jsx_runtime9.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick)
            event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React25.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React25.useRef(false);
    const hasPointerDownOutsideRef = React25.useRef(false);
    return (0, import_jsx_runtime9.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current)
              (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = React25.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      (0, import_jsx_runtime9.jsx)(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: (0, import_jsx_runtime9.jsx)(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        (0, import_jsx_runtime9.jsx)(TitleWarning, { titleId: context.titleId }),
        (0, import_jsx_runtime9.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return (0, import_jsx_runtime9.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return (0, import_jsx_runtime9.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return (0, import_jsx_runtime9.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React25.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle)
        console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React25.useEffect(() => {
    var _a;
    const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription)
        console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal2 = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Close = DialogClose;

// node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/Overlay.js
var Overlay2 = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    backgroundColor: theme.colors.modalOverlayBg,
    zIndex: 9999,
    position: "fixed",
    inset: 0,
    animation: `${fadeInAnimation} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    backdropFilter: "blur(10px)"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js
var Modal = (props) => {
  const [open, setOpen] = (0, import_react7.useState)(props.open);
  const contentRef = (0, import_react7.useRef)(null);
  const overlayRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    var _a;
    if (!props.open) {
      if (contentRef.current) {
        const animationConfig = {
          duration: modalCloseFadeOutDuration,
          fill: "forwards",
          easing: "ease"
        };
        contentRef.current.animate([{ opacity: 0 }], {
          ...animationConfig
        }).onfinish = () => {
          setOpen(false);
        };
        (_a = overlayRef.current) == null ? void 0 : _a.animate([{ opacity: 0 }], {
          ...animationConfig,
          duration: modalCloseFadeOutDuration + 100
        });
      } else {
        setOpen(props.open);
      }
    } else {
      setOpen(props.open);
    }
  }, [props.open]);
  return (0, import_jsx_runtime10.jsxs)(Root, { open, onOpenChange: props.setOpen, children: [props.trigger && (0, import_jsx_runtime10.jsx)(Trigger, { asChild: true, children: props.trigger }), (0, import_jsx_runtime10.jsxs)(Portal2, { children: [!props.hide && (0, import_jsx_runtime10.jsx)(Overlay, { asChild: true, children: (0, import_jsx_runtime10.jsx)(Overlay2, { ref: overlayRef }) }), (0, import_jsx_runtime10.jsx)(FocusScope, { trapped: !props.hide, children: (0, import_jsx_runtime10.jsx)(Content, { asChild: true, "aria-describedby": void 0, children: (0, import_jsx_runtime10.jsxs)(DialogContent2, { ref: contentRef, style: props.hide ? { width: 0, height: 0, overflow: "hidden", opacity: 0 } : {
    height: props.size === "compact" ? "auto" : wideModalMaxHeight,
    maxWidth: props.size === "compact" ? modalMaxWidthCompact : modalMaxWidthWide
  }, children: [(0, import_jsx_runtime10.jsx)(Title, { style: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0
  }, children: "Connect Modal" }), props.size === "compact" ? (0, import_jsx_runtime10.jsx)(DynamicHeight, { maxHeight: compactModalMaxHeight, children: props.children }) : props.children, !props.hideCloseIcon && (0, import_jsx_runtime10.jsx)(CrossContainer, { children: (0, import_jsx_runtime10.jsx)(Close, { asChild: true, children: (0, import_jsx_runtime10.jsx)(IconButton, { autoFocus: true, type: "button", "aria-label": "Close", children: (0, import_jsx_runtime10.jsx)(Cross2Icon, { width: iconSize.md, height: iconSize.md, style: {
    color: "inherit"
  } }) }) }) })] }) }) })] })] });
};
var CrossContainer = StyledDiv({
  position: "absolute",
  top: spacing.lg,
  right: spacing.lg,
  transform: "translateX(6px)"
});
var modalAnimationDesktop = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
var modalAnimationMobile = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50%);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
var DialogContent2 = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    zIndex: 1e4,
    background: theme.colors.modalBg,
    "--bg": theme.colors.modalBg,
    color: theme.colors.primaryText,
    borderRadius: radius.lg,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100vw - 40px)",
    boxSizing: "border-box",
    animation: `${modalAnimationDesktop} 300ms ease`,
    boxShadow: shadow.lg,
    lineHeight: "normal",
    border: `1px solid ${theme.colors.borderColor}`,
    outline: "none",
    overflow: "hidden",
    fontFamily: theme.fontFamily,
    "& *": {
      boxSizing: "border-box"
    },
    [media.mobile]: {
      top: "auto",
      bottom: 0,
      left: 0,
      right: 0,
      transform: "none",
      width: "100vw",
      animation: `${modalAnimationMobile} 0.35s cubic-bezier(0.15, 1.15, 0.6, 1)`,
      borderRadius: radius.xl,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      maxWidth: "none !important"
    },
    "& *::selection": {
      backgroundColor: theme.colors.selectedTextBg,
      color: theme.colors.selectedTextColor
    },
    ...noScrollBar
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/Drawer.js
var Drawer = (0, import_react9.forwardRef)(function Drawer_(props, ref) {
  return (0, import_jsx_runtime11.jsx)(DrawerContainer, { ref, children: (0, import_jsx_runtime11.jsx)(DynamicHeight, { children: (0, import_jsx_runtime11.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime11.jsx)(CrossContainer, { children: (0, import_jsx_runtime11.jsx)(IconButton, { type: "button", "aria-label": "Close", onClick: props.close, children: (0, import_jsx_runtime11.jsx)(Cross2Icon, { width: iconSize.md, height: iconSize.md, style: {
    color: "inherit"
  } }) }) }), props.children] }) }) });
});
var DrawerContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    zIndex: 1e4,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    background: theme.colors.modalBg,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    animation: `${drawerOpenAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)`,
    borderTop: `1px solid ${theme.colors.borderColor}`
  };
});
var drawerOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
var DrawerOverlay = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    backgroundColor: theme.colors.modalOverlayBg,
    zIndex: 9999,
    position: "absolute",
    inset: 0,
    animation: `${fadeInAnimation} 400ms cubic-bezier(0.16, 1, 0.3, 1)`
  };
});
function useDrawer() {
  const [isOpen, _setIsOpen] = (0, import_react9.useState)(false);
  const drawerRef = (0, import_react9.useRef)(null);
  const drawerOverlayRef = (0, import_react9.useRef)(null);
  const closeDrawerAnimation = (0, import_react9.useCallback)(() => {
    return new Promise((resolve2) => {
      var _a;
      if (drawerRef.current) {
        const animOptions = {
          easing: "cubic-bezier(0.175, 0.885, 0.32, 1.1)",
          fill: "forwards",
          duration: 300
        };
        const closeAnimation = drawerRef.current.animate([{ transform: "translateY(100%)", opacity: 0 }], animOptions);
        (_a = drawerOverlayRef.current) == null ? void 0 : _a.animate([{ opacity: 0 }], animOptions);
        closeAnimation.onfinish = () => resolve2();
      } else {
        resolve2();
      }
    });
  }, []);
  const setIsOpen = (0, import_react9.useCallback)(async (value) => {
    if (value) {
      _setIsOpen(true);
    } else {
      await closeDrawerAnimation();
      _setIsOpen(false);
    }
  }, [closeDrawerAnimation]);
  (0, import_react9.useLayoutEffect)(() => {
    if (!isOpen) {
      return;
    }
    const handleClick = (event) => {
      if (drawerRef.current && event.target instanceof Node && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    requestAnimationFrame(() => {
      document.addEventListener("click", handleClick);
    });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen, setIsOpen]);
  return {
    drawerRef,
    drawerOverlayRef,
    setIsOpen,
    isOpen
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/SwitchNetwork.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);
function SwitchNetworkButton(props) {
  const [isSwitching, setIsSwitching] = (0, import_react10.useState)(false);
  return (0, import_jsx_runtime12.jsx)(Button, { ...props, gap: "xs", onClick: async () => {
    setIsSwitching(true);
    try {
      await props.switchChain();
    } catch {
    }
    setIsSwitching(false);
  }, children: isSwitching ? (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: ["Switching", (0, import_jsx_runtime12.jsx)(Spinner, { size: "sm", color: "accentButtonText" })] }) : "Switch Network" });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/token/TokenSymbol.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/nativeToken.js
var NATIVE_TOKEN = { nativeToken: true };
function isNativeToken(token) {
  var _a;
  return "nativeToken" in token || ((_a = token.address) == null ? void 0 : _a.toLowerCase()) === NATIVE_TOKEN_ADDRESS.toLowerCase();
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/token/TokenSymbol.js
function TokenSymbol(props) {
  if (!isNativeToken(props.token)) {
    return (0, import_jsx_runtime13.jsx)(Text, { size: props.size, color: props.color || "primaryText", inline: props.inline, children: props.token.symbol });
  }
  return (0, import_jsx_runtime13.jsx)(NativeTokenSymbol, { chain: props.chain, size: props.size, color: props.color, inline: props.inline });
}
function NativeTokenSymbol(props) {
  const chainSymbolQuery = useChainSymbol(props.chain);
  if (chainSymbolQuery.isLoading) {
    return (0, import_jsx_runtime13.jsx)(Skeleton, { width: "70px", height: fontSize[props.size] });
  }
  return (0, import_jsx_runtime13.jsx)(Text, { size: props.size, color: props.color || "primaryText", inline: props.inline, children: chainSymbolQuery.symbol ?? "ETH" });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var import_react51 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/auth/useSiweAuth.js
function useSiweAuth(activeWallet, activeAccount, authOptions) {
  const requiresAuth = !!authOptions;
  const queryClient = useQueryClient();
  const isLoggedInQuery = useQuery({
    queryKey: ["siwe_auth", "isLoggedIn", activeAccount == null ? void 0 : activeAccount.address],
    enabled: requiresAuth && !!(activeAccount == null ? void 0 : activeAccount.address),
    queryFn: () => {
      if (!authOptions || !(activeAccount == null ? void 0 : activeAccount.address)) {
        return false;
      }
      return authOptions.isLoggedIn(activeAccount.address);
    },
    gcTime: 0,
    placeholderData: false,
    refetchOnWindowFocus: false
  });
  const loginMutation = useMutation({
    mutationKey: ["siwe_auth", "login", activeAccount == null ? void 0 : activeAccount.address],
    mutationFn: async () => {
      if (!authOptions) {
        throw new Error("No auth options provided");
      }
      if (!activeWallet) {
        throw new Error("No active wallet");
      }
      const chain = activeWallet.getChain();
      if (!chain) {
        throw new Error("No active chain");
      }
      if (!activeAccount) {
        throw new Error("No active account");
      }
      const [payload, { signLoginPayload }] = await Promise.all([
        authOptions.getLoginPayload({
          address: activeAccount.address,
          chainId: chain.id
        }),
        // we lazy-load this because it's only needed when logging in
        import("./sign-login-payload-EEOP3RDN.js")
      ]);
      if (payload.chain_id) {
        await activeWallet.switchChain(getCachedChain(Number(payload.chain_id)));
      }
      const signedPayload = await signLoginPayload({
        payload,
        account: activeAccount
      });
      return await authOptions.doLogin(signedPayload);
    },
    onSettled: () => {
      return queryClient.invalidateQueries({
        queryKey: ["siwe_auth", "isLoggedIn"]
      });
    }
  });
  const logoutMutation = useMutation({
    mutationKey: ["siwe_auth", "logout", activeAccount == null ? void 0 : activeAccount.address],
    mutationFn: async () => {
      if (!authOptions) {
        throw new Error("No auth options provided");
      }
      return await authOptions.doLogout();
    },
    onSettled: () => {
      return queryClient.invalidateQueries({
        queryKey: ["siwe_auth", "isLoggedIn"]
      });
    }
  });
  return {
    // is auth even enabled
    requiresAuth,
    // login
    doLogin: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    // logout
    doLogout: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
    // checking if logged in
    isLoggedIn: isLoggedInQuery.data,
    isLoading: isLoggedInQuery.isFetching
  };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWalletConnectionStatus.js
var import_react11 = __toESM(require_react(), 1);
function useActiveWalletConnectionStatus() {
  const manager = useConnectionManagerCtx("useActiveWalletConnectionStatus");
  const store = manager.activeWalletConnectionStatusStore;
  return (0, import_react11.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/core/utils/defaultTokens.js
var wrappedEthIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzYyN0VFQSIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDR2OC44N2w3LjQ5NyAzLjM1eiIvPjxwYXRoIGQ9Ik0xNi40OTggNEw5IDE2LjIybDcuNDk4LTMuMzV6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDIxLjk2OHY2LjAyN0wyNCAxNy42MTZ6Ii8+PHBhdGggZD0iTTE2LjQ5OCAyNy45OTV2LTYuMDI4TDkgMTcuNjE2eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0xNi40OTggMjAuNTczbDcuNDk3LTQuMzUzLTcuNDk3LTMuMzQ4eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjYwMiIgZD0iTTkgMTYuMjJsNy40OTggNC4zNTN2LTcuNzAxeiIvPjwvZz48L2c+PC9zdmc+";
var tetherUsdIcon = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzkuNDMgMjk1LjI3Ij48dGl0bGU+dGV0aGVyLXVzZHQtbG9nbzwvdGl0bGU+PHBhdGggZD0iTTYyLjE1LDEuNDVsLTYxLjg5LDEzMGEyLjUyLDIuNTIsMCwwLDAsLjU0LDIuOTRMMTY3Ljk1LDI5NC41NmEyLjU1LDIuNTUsMCwwLDAsMy41MywwTDMzOC42MywxMzQuNGEyLjUyLDIuNTIsMCwwLDAsLjU0LTIuOTRsLTYxLjg5LTEzMEEyLjUsMi41LDAsMCwwLDI3NSwwSDY0LjQ1YTIuNSwyLjUsMCwwLDAtMi4zLDEuNDVoMFoiIHN0eWxlPSJmaWxsOiM1MGFmOTU7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTkxLjE5LDE0NC44djBjLTEuMi4wOS03LjQsMC40Ni0yMS4yMywwLjQ2LTExLDAtMTguODEtLjMzLTIxLjU1LTAuNDZ2MGMtNDIuNTEtMS44Ny03NC4yNC05LjI3LTc0LjI0LTE4LjEzczMxLjczLTE2LjI1LDc0LjI0LTE4LjE1djI4LjkxYzIuNzgsMC4yLDEwLjc0LjY3LDIxLjc0LDAuNjcsMTMuMiwwLDE5LjgxLS41NSwyMS0wLjY2di0yOC45YzQyLjQyLDEuODksNzQuMDgsOS4yOSw3NC4wOCwxOC4xM3MtMzEuNjUsMTYuMjQtNzQuMDgsMTguMTJoMFptMC0zOS4yNVY3OS42OGg1OS4yVjQwLjIzSDg5LjIxVjc5LjY4SDE0OC40djI1Ljg2Yy00OC4xMSwyLjIxLTg0LjI5LDExLjc0LTg0LjI5LDIzLjE2czM2LjE4LDIwLjk0LDg0LjI5LDIzLjE2djgyLjloNDIuNzhWMTUxLjgzYzQ4LTIuMjEsODQuMTItMTEuNzMsODQuMTItMjMuMTRzLTM2LjA5LTIwLjkzLTg0LjEyLTIzLjE1aDBabTAsMGgwWiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjwvc3ZnPg==";
var usdcIcon = "data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9Ijg2OTc3Njg0LTEyZGItNDg1MC04ZjMwLTIzM2E3YzI2N2QxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIj4KICA8cGF0aCBkPSJNMTAwMCAyMDAwYzU1NC4xNyAwIDEwMDAtNDQ1LjgzIDEwMDAtMTAwMFMxNTU0LjE3IDAgMTAwMCAwIDAgNDQ1LjgzIDAgMTAwMHM0NDUuODMgMTAwMCAxMDAwIDEwMDB6IiBmaWxsPSIjMjc3NWNhIi8+CiAgPHBhdGggZD0iTTEyNzUgMTE1OC4zM2MwLTE0NS44My04Ny41LTE5NS44My0yNjIuNS0yMTYuNjYtMTI1LTE2LjY3LTE1MC01MC0xNTAtMTA4LjM0czQxLjY3LTk1LjgzIDEyNS05NS44M2M3NSAwIDExNi42NyAyNSAxMzcuNSA4Ny41IDQuMTcgMTIuNSAxNi42NyAyMC44MyAyOS4xNyAyMC44M2g2Ni42NmMxNi42NyAwIDI5LjE3LTEyLjUgMjkuMTctMjkuMTZ2LTQuMTdjLTE2LjY3LTkxLjY3LTkxLjY3LTE2Mi41LTE4Ny41LTE3MC44M3YtMTAwYzAtMTYuNjctMTIuNS0yOS4xNy0zMy4zMy0zMy4zNGgtNjIuNWMtMTYuNjcgMC0yOS4xNyAxMi41LTMzLjM0IDMzLjM0djk1LjgzYy0xMjUgMTYuNjctMjA0LjE2IDEwMC0yMDQuMTYgMjA0LjE3IDAgMTM3LjUgODMuMzMgMTkxLjY2IDI1OC4zMyAyMTIuNSAxMTYuNjcgMjAuODMgMTU0LjE3IDQ1LjgzIDE1NC4xNyAxMTIuNXMtNTguMzQgMTEyLjUtMTM3LjUgMTEyLjVjLTEwOC4zNCAwLTE0NS44NC00NS44NC0xNTguMzQtMTA4LjM0LTQuMTYtMTYuNjYtMTYuNjYtMjUtMjkuMTYtMjVoLTcwLjg0Yy0xNi42NiAwLTI5LjE2IDEyLjUtMjkuMTYgMjkuMTd2NC4xN2MxNi42NiAxMDQuMTYgODMuMzMgMTc5LjE2IDIyMC44MyAyMDB2MTAwYzAgMTYuNjYgMTIuNSAyOS4xNiAzMy4zMyAzMy4zM2g2Mi41YzE2LjY3IDAgMjkuMTctMTIuNSAzMy4zNC0zMy4zM3YtMTAwYzEyNS0yMC44NCAyMDguMzMtMTA4LjM0IDIwOC4zMy0yMjAuODR6IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTc4Ny41IDE1OTUuODNjLTMyNS0xMTYuNjYtNDkxLjY3LTQ3OS4xNi0zNzAuODMtODAwIDYyLjUtMTc1IDIwMC0zMDguMzMgMzcwLjgzLTM3MC44MyAxNi42Ny04LjMzIDI1LTIwLjgzIDI1LTQxLjY3VjMyNWMwLTE2LjY3LTguMzMtMjkuMTctMjUtMzMuMzMtNC4xNyAwLTEyLjUgMC0xNi42NyA0LjE2LTM5NS44MyAxMjUtNjEyLjUgNTQ1Ljg0LTQ4Ny41IDk0MS42NyA3NSAyMzMuMzMgMjU0LjE3IDQxMi41IDQ4Ny41IDQ4Ny41IDE2LjY3IDguMzMgMzMuMzQgMCAzNy41LTE2LjY3IDQuMTctNC4xNiA0LjE3LTguMzMgNC4xNy0xNi42NnYtNTguMzRjMC0xMi41LTEyLjUtMjkuMTYtMjUtMzcuNXpNMTIyOS4xNyAyOTUuODNjLTE2LjY3LTguMzMtMzMuMzQgMC0zNy41IDE2LjY3LTQuMTcgNC4xNy00LjE3IDguMzMtNC4xNyAxNi42N3Y1OC4zM2MwIDE2LjY3IDEyLjUgMzMuMzMgMjUgNDEuNjcgMzI1IDExNi42NiA0OTEuNjcgNDc5LjE2IDM3MC44MyA4MDAtNjIuNSAxNzUtMjAwIDMwOC4zMy0zNzAuODMgMzcwLjgzLTE2LjY3IDguMzMtMjUgMjAuODMtMjUgNDEuNjdWMTcwMGMwIDE2LjY3IDguMzMgMjkuMTcgMjUgMzMuMzMgNC4xNyAwIDEyLjUgMCAxNi42Ny00LjE2IDM5NS44My0xMjUgNjEyLjUtNTQ1Ljg0IDQ4Ny41LTk0MS42Ny03NS0yMzcuNS0yNTguMzQtNDE2LjY3LTQ4Ny41LTQ5MS42N3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==";
var wrappedBtcIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMjYgMTA5LjI2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVhNTU2NDt9LmNscy0ye2ZpbGw6I2YwOTI0Mjt9LmNscy0ze2ZpbGw6IzI4MjEzODt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPndyYXBwZWQtYml0Y29pbi13YnRjPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGlkPSJQYWdlLTEiPjxnIGlkPSJ3YnRjX2NvbG91ciIgZGF0YS1uYW1lPSJ3YnRjIGNvbG91ciI+PHBhdGggaWQ9IlNoYXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik04OS4wOSwyMi45M2wtMywzYTQyLjQ3LDQyLjQ3LDAsMCwxLDAsNTcuMzJsMywzYTQ2Ljc2LDQ2Ljc2LDAsMCwwLDAtNjMuMzlaIi8+PHBhdGggaWQ9IlNoYXBlLTIiIGRhdGEtbmFtZT0iU2hhcGUiIGNsYXNzPSJjbHMtMSIgZD0iTTI2LDIzLjE5YTQyLjQ3LDQyLjQ3LDAsMCwxLDU3LjMyLDBsMy0zYTQ2Ljc2LDQ2Ljc2LDAsMCwwLTYzLjM5LDBaIi8+PHBhdGggaWQ9IlNoYXBlLTMiIGRhdGEtbmFtZT0iU2hhcGUiIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjE5LDgzLjI4YTQyLjQ3LDQyLjQ3LDAsMCwxLDAtNTcuMjlsLTMtM2E0Ni43Niw0Ni43NiwwLDAsMCwwLDYzLjM5WiIvPjxwYXRoIGlkPSJTaGFwZS00IiBkYXRhLW5hbWU9IlNoYXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik04My4yOCw4Ni4wNWE0Mi40Nyw0Mi40NywwLDAsMS01Ny4zMiwwbC0zLDNhNDYuNzYsNDYuNzYsMCwwLDAsNjMuMzksMFoiLz48cGF0aCBpZD0iU2hhcGUtNSIgZGF0YS1uYW1lPSJTaGFwZSIgY2xhc3M9ImNscy0yIiBkPSJNNzMuNTcsNDQuNjJjLS42LTYuMjYtNi04LjM2LTEyLjgzLTlWMjdINTUuNDZ2OC40NmMtMS4zOSwwLTIuODEsMC00LjIyLDBWMjdINDZ2OC42OEgzNS4yOXY1LjY1czMuOS0uMDcsMy44NCwwYTIuNzMsMi43MywwLDAsMSwzLDIuMzJWNjcuNDFhMS44NSwxLjg1LDAsMCwxLS42NCwxLjI5LDEuODMsMS44MywwLDAsMS0xLjM2LjQ2Yy4wNy4wNi0zLjg0LDAtMy44NCwwbC0xLDYuMzFINDUuOXY4LjgyaDUuMjhWNzUuNkg1NS40djguNjVoNS4yOVY3NS41M2M4LjkyLS41NCwxNS4xNC0yLjc0LDE1LjkyLTExLjA5LjYzLTYuNzItMi41My05LjcyLTcuNTgtMTAuOTNDNzIuMSw1Miw3NCw0OS4yLDczLjU3LDQ0LjYyWk02Ni4xNyw2My40YzAsNi41Ni0xMS4yNCw1LjgxLTE0LjgyLDUuODFWNTcuNTdDNTQuOTMsNTcuNTgsNjYuMTcsNTYuNTUsNjYuMTcsNjMuNFpNNjMuNzIsNDdjMCw2LTkuMzgsNS4yNy0xMi4zNiw1LjI3VjQxLjY5QzU0LjM0LDQxLjY5LDYzLjcyLDQwLjc1LDYzLjcyLDQ3WiIvPjxwYXRoIGlkPSJTaGFwZS02IiBkYXRhLW5hbWU9IlNoYXBlIiBjbGFzcz0iY2xzLTMiIGQ9Ik01NC42MiwxMDkuMjZhNTQuNjMsNTQuNjMsMCwxLDEsNTQuNjQtNTQuNjRBNTQuNjMsNTQuNjMsMCwwLDEsNTQuNjIsMTA5LjI2Wm0wLTEwNUE1MC4zNCw1MC4zNCwwLDEsMCwxMDUsNTQuNjIsNTAuMzQsNTAuMzQsMCwwLDAsNTQuNjIsNC4yNloiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+";
var maticIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzgyNDdFNSIvPgo8cGF0aCBkPSJNNjgxLjQ2OSA0MDIuNDU2QzY2OS4xODkgMzk1LjMxMiA2NTMuMjI0IDM5NS4zMTIgNjM5LjcxNiA0MDIuNDU2TDU0My45MjggNDU3LjIyOEw0NzguODQyIDQ5Mi45NDlMMzgzLjA1NSA1NDcuNzIxQzM3MC43NzQgNTU0Ljg2NSAzNTQuODEgNTU0Ljg2NSAzNDEuMzAxIDU0Ny43MjFMMjY1LjE2MiA1MDQuODU2QzI1Mi44ODIgNDk3LjcxMiAyNDQuMjg2IDQ4NC42MTQgMjQ0LjI4NiA0NzAuMzI1VjM4NS43ODZDMjQ0LjI4NiAzNzEuNDk4IDI1MS42NTQgMzU4LjQgMjY1LjE2MiAzNTEuMjU2TDM0MC4wNzMgMzA5LjU4MUMzNTIuMzUzIDMwMi40MzcgMzY4LjMxOCAzMDIuNDM3IDM4MS44MjcgMzA5LjU4MUw0NTYuNzM3IDM1MS4yNTZDNDY5LjAxOCAzNTguNCA0NzcuNjE0IDM3MS40OTggNDc3LjYxNCAzODUuNzg2VjQ0MC41NThMNTQyLjcgNDAzLjY0NlYzNDguODc0QzU0Mi43IDMzNC41ODYgNTM1LjMzMiAzMjEuNDg4IDUyMS44MjQgMzE0LjM0NEwzODMuMDU1IDIzNS43NThDMzcwLjc3NCAyMjguNjE0IDM1NC44MSAyMjguNjE0IDM0MS4zMDEgMjM1Ljc1OEwyMDAuMDc2IDMxNC4zNDRDMTg2LjU2NyAzMjEuNDg4IDE3OS4xOTkgMzM0LjU4NiAxNzkuMTk5IDM0OC44NzRWNTA3LjIzN0MxNzkuMTk5IDUyMS41MjUgMTg2LjU2NyA1MzQuNjIzIDIwMC4wNzYgNTQxLjc2N0wzNDEuMzAxIDYyMC4zNTNDMzUzLjU4MiA2MjcuNDk4IDM2OS41NDYgNjI3LjQ5OCAzODMuMDU1IDYyMC4zNTNMNDc4Ljg0MiA1NjYuNzcyTDU0My45MjggNTI5Ljg2TDYzOS43MTYgNDc2LjI3OUM2NTEuOTk2IDQ2OS4xMzUgNjY3Ljk2MSA0NjkuMTM1IDY4MS40NjkgNDc2LjI3OUw3NTYuMzggNTE3Ljk1M0M3NjguNjYgNTI1LjA5OCA3NzcuMjU3IDUzOC4xOTUgNzc3LjI1NyA1NTIuNDg0VjYzNy4wMjNDNzc3LjI1NyA2NTEuMzEyIDc2OS44ODggNjY0LjQwOSA3NTYuMzggNjcxLjU1M0w2ODEuNDY5IDcxNC40MTlDNjY5LjE4OSA3MjEuNTYzIDY1My4yMjQgNzIxLjU2MyA2MzkuNzE2IDcxNC40MTlMNTY0LjgwNSA2NzIuNzQ0QzU1Mi41MjUgNjY1LjYgNTQzLjkyOCA2NTIuNTAyIDU0My45MjggNjM4LjIxNFY1ODMuNDQyTDQ3OC44NDIgNjIwLjM1M1Y2NzUuMTI1QzQ3OC44NDIgNjg5LjQxNCA0ODYuMjEgNzAyLjUxMiA0OTkuNzE5IDcwOS42NTZMNjQwLjk0NCA3ODguMjQyQzY1My4yMjQgNzk1LjM4NiA2NjkuMTg5IDc5NS4zODYgNjgyLjY5NyA3ODguMjQyTDgyMy45MjIgNzA5LjY1NkM4MzYuMjAzIDcwMi41MTIgODQ0Ljc5OSA2ODkuNDE0IDg0NC43OTkgNjc1LjEyNVY1MTYuNzYzQzg0NC43OTkgNTAyLjQ3NCA4MzcuNDMxIDQ4OS4zNzcgODIzLjkyMiA0ODIuMjMyTDY4MS40NjkgNDAyLjQ1NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
var binanceCoinIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGM0JBMkYiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIuMTE2IDE0LjQwNEwxNiAxMC41MmwzLjg4NiAzLjg4NiAyLjI2LTIuMjZMMTYgNmwtNi4xNDQgNi4xNDQgMi4yNiAyLjI2ek02IDE2bDIuMjYtMi4yNkwxMC41MiAxNmwtMi4yNiAyLjI2TDYgMTZ6bTYuMTE2IDEuNTk2TDE2IDIxLjQ4bDMuODg2LTMuODg2IDIuMjYgMi4yNTlMMTYgMjZsLTYuMTQ0LTYuMTQ0LS4wMDMtLjAwMyAyLjI2My0yLjI1N3pNMjEuNDggMTZsMi4yNi0yLjI2TDI2IDE2bC0yLjI2IDIuMjZMMjEuNDggMTZ6bS0zLjE4OC0uMDAyaC4wMDJ2LjAwMkwxNiAxOC4yOTRsLTIuMjkxLTIuMjktLjAwNC0uMDA0LjAwNC0uMDAzLjQwMS0uNDAyLjE5NS0uMTk1TDE2IDEzLjcwNmwyLjI5MyAyLjI5M3oiLz48L2c+PC9zdmc+";
var BUSDIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzYuNDEgMzM3LjQyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YwYjkwYjtzdHJva2U6I2YwYjkwYjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTY4LjIuNzFsNDEuNSw0Mi41TDEwNS4yLDE0Ny43MWwtNDEuNS00MS41WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzMS4yLDYzLjcxbDQxLjUsNDIuNUwxMDUuMiwyNzMuNzFsLTQxLjUtNDEuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Mi4yLDEyNi43MWw0MS41LDQyLjUtNDEuNSw0MS41TC43LDE2OS4yMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOTQuMiwxMjYuNzFsNDEuNSw0Mi41TDE2OC4yLDMzNi43MWwtNDEuNS00MS41WiIvPjwvZz48L2c+PC9zdmc+";
var fantomIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojMTNiNWVjO30uY2xzLTN7bWFzazp1cmwoI21hc2spO308L3N0eWxlPjxtYXNrIGlkPSJtYXNrIiB4PSIxMCIgeT0iNiIgd2lkdGg9IjkzLjEiIGhlaWdodD0iMjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxnIGlkPSJhIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMCw2aDkzLjFWMjZIMTBaIi8+PC9nPjwvbWFzaz48L2RlZnM+PHRpdGxlPmZhPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiLz48ZyBjbGFzcz0iY2xzLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3LjIsMTIuOWwzLjYtMi4xVjE1Wm0zLjYsOUwxNiwyNC43bC00LjgtMi44VjE3TDE2LDE5LjgsMjAuOCwxN1pNMTEuMiwxMC44bDMuNiwyLjFMMTEuMiwxNVptNS40LDMuMUwyMC4yLDE2bC0zLjYsMi4xWm0tMS4yLDQuMkwxMS44LDE2bDMuNi0yLjFabTQuOC04LjNMMTYsMTIuMiwxMS44LDkuOCwxNiw3LjNaTTEwLDkuNFYyMi41bDYsMy40LDYtMy40VjkuNEwxNiw2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
var DEFAULT_TOKENS = {
  "1": [
    {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      name: "Tether USD",
      symbol: "USDT",
      icon: tetherUsdIcon
    },
    {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    },
    {
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      icon: wrappedBtcIcon
    },
    {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      name: "Polygon",
      symbol: "WMATIC",
      icon: maticIcon
    }
  ],
  "11155111": [
    {
      address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ],
  "10": [
    {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ],
  "56": [
    {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      name: "Wrapped Binance Chain Token",
      symbol: "WBNB",
      icon: binanceCoinIcon
    },
    {
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      name: "Binance USD",
      symbol: "BUSD",
      icon: BUSDIcon
    }
  ],
  "97": [
    {
      address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      name: "Wrapped Binance Chain Testnet Token",
      symbol: "WBNB",
      icon: binanceCoinIcon
    },
    {
      address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
      name: "Binance USD",
      symbol: "BUSD",
      icon: BUSDIcon
    }
  ],
  "137": [
    {
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    },
    {
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      name: "Wrapped Matic",
      symbol: "WMATIC",
      icon: maticIcon
    },
    {
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      name: "Tether USD",
      symbol: "USDT",
      icon: tetherUsdIcon
    },
    {
      address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      name: "Wrapped BTC",
      symbol: "WBTC",
      icon: wrappedBtcIcon
    }
  ],
  "250": [
    {
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      name: "Wrapped Fantom",
      symbol: "WFTM",
      icon: fantomIcon
    },
    {
      name: "Wrapped Ether",
      address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      name: "USD Coin",
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      symbol: "USDC",
      icon: usdcIcon
    },
    {
      name: "Wrapped Bitcoin",
      address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
      symbol: "WBTC",
      icon: wrappedBtcIcon
    }
  ],
  "420": [
    {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    }
  ],
  "4002": [
    {
      address: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
      name: "Wrapped Fantom",
      symbol: "WFTM",
      icon: fantomIcon
    }
  ],
  "42161": [
    {
      address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ],
  "43113": [
    {
      address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
      name: "Wrapped AVAX",
      symbol: "WAVAX",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo="
    },
    {
      address: "0x5425890298aed601595a70AB815c96711a31Bc65",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ],
  "43114": [
    {
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      name: "Wrapped AVAX",
      symbol: "WAVAX",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo="
    },
    {
      address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
      name: "Tether USD",
      symbol: "USDT",
      icon: tetherUsdIcon
    },
    {
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    },
    {
      address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
      name: "Wrapped BTC",
      symbol: "WBTC",
      icon: wrappedBtcIcon
    }
  ],
  "80001": [
    {
      address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
      name: "Wrapped Matic",
      symbol: "WMATIC",
      icon: maticIcon
    },
    {
      name: "Wrapped Ether",
      address: "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    },
    {
      name: "Tether USD",
      address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803",
      symbol: "USDT",
      icon: tetherUsdIcon
    }
  ],
  "421613": [
    {
      address: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      name: "Wrapped Ether",
      symbol: "WETH",
      icon: wrappedEthIcon
    },
    {
      address: "0xfd064A18f3BF249cf1f87FC203E90D8f650f2d63",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ],
  // Base mainnet
  "8453": [
    {
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ],
  // Base sepolia
  "84532": [
    {
      address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      name: "USD Coin",
      symbol: "USDC",
      icon: usdcIcon
    }
  ]
};
var defaultTokens = DEFAULT_TOKENS;
function getDefaultToken(chain, symbol) {
  const tokens = defaultTokens[chain.id];
  return tokens == null ? void 0 : tokens.find((t) => t.symbol === symbol);
}

// node_modules/thirdweb/dist/esm/react/web/utils/canFitWideModal.js
function canFitWideModal() {
  if (typeof window !== "undefined") {
    return window.innerWidth >= wideModalScreenThreshold;
  }
  return false;
}

// node_modules/thirdweb/dist/esm/react/web/utils/usePreloadWalletProviders.js
function usePreloadWalletProviders({ client, wallets }) {
  useQueries({
    queries: wallets.filter((w) => w.id === COINBASE || w.id === "inApp" || isEcosystemWallet(w.id)).map((w) => ({
      queryKey: ["preload-wallet", w.id],
      queryFn: async () => {
        var _a;
        switch (true) {
          case COINBASE === w.id: {
            const { getCoinbaseWebProvider } = await import("./coinbaseWebSDK-RVHYUQN6.js");
            await getCoinbaseWebProvider(w.getConfig());
            return true;
          }
          case "inApp" === w.id: {
            const [{ InAppWebConnector }, { getOrCreateInAppWalletConnector }] = await Promise.all([
              import("./web-connector-5CMXT4ED.js"),
              import("./in-app-core-HIWEYDMM.js")
            ]);
            await getOrCreateInAppWalletConnector(client, async (client2) => {
              return new InAppWebConnector({
                client: client2
              });
            });
            return true;
          }
          case isEcosystemWallet(w.id): {
            const [{ InAppWebConnector }, { getOrCreateInAppWalletConnector }] = await Promise.all([
              import("./web-connector-5CMXT4ED.js"),
              import("./in-app-core-HIWEYDMM.js")
            ]);
            const ecosystemWallet = w;
            await getOrCreateInAppWalletConnector(client, async (client2) => {
              var _a2;
              return new InAppWebConnector({
                client: client2,
                ecosystem: {
                  id: ecosystemWallet.id,
                  partnerId: (_a2 = ecosystemWallet.getConfig()) == null ? void 0 : _a2.partnerId
                }
              });
            }, {
              id: ecosystemWallet.id,
              partnerId: (_a = ecosystemWallet.getConfig()) == null ? void 0 : _a.partnerId
            });
            return true;
          }
          default: {
            return false;
          }
        }
      }
    }))
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/AutoConnect/AutoConnect.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/get-url-token.js
function getUrlToken() {
  if (!(window == null ? void 0 : window.location)) {
    return {};
  }
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const authResultString = params.get("authResult");
  const walletId = params.get("walletId");
  const authProvider = params.get("authProvider");
  const authCookie = params.get("authCookie");
  if ((authCookie || authResultString) && walletId) {
    const authResult = (() => {
      if (authResultString) {
        params.delete("authResult");
        return JSON.parse(decodeURIComponent(authResultString));
      }
    })();
    params.delete("walletId");
    params.delete("authProvider");
    params.delete("authCookie");
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
    return { walletId, authResult, authProvider, authCookie };
  }
  return {};
}

// node_modules/thirdweb/dist/esm/react/core/utils/isSmartWallet.js
function hasSmartAccount(activeWallet) {
  const config = activeWallet == null ? void 0 : activeWallet.getConfig();
  return activeWallet !== void 0 && (activeWallet.id === "smart" || activeWallet.id === "inApp" && !!config && "smartAccount" in config || isEcosystemWallet(activeWallet) && !!config && "smartAccount" in config);
}

// node_modules/thirdweb/dist/esm/reactive/computedStore.js
function computedStore(computation, dependencies) {
  const listeners = /* @__PURE__ */ new Set();
  let value = computation();
  const notify = () => {
    for (const listener of listeners) {
      listener();
    }
  };
  const setValue = (newValue) => {
    value = newValue;
    notify();
  };
  for (const store of dependencies) {
    store.subscribe(() => {
      setValue(computation());
    });
  }
  return {
    getValue() {
      return value;
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
  };
}

// node_modules/thirdweb/dist/esm/reactive/effect.js
function effect(effectFn, dependencies, runOnMount = true) {
  if (runOnMount) {
    effectFn();
  }
  const unsubscribeList = dependencies.map((store) => {
    return store.subscribe(() => {
      effectFn();
    });
  });
  return () => {
    for (const fn of unsubscribeList) {
      fn();
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/manager/index.js
var CONNECTED_WALLET_IDS = "thirdweb:connected-wallet-ids";
var LAST_ACTIVE_EOA_ID = "thirdweb:active-wallet-id";
var LAST_ACTIVE_CHAIN = "thirdweb:active-chain";
function createConnectionManager(storage) {
  const activeWalletStore = createStore(void 0);
  const activeAccountStore = createStore(void 0);
  const activeWalletChainStore = createStore(void 0);
  const activeWalletConnectionStatusStore = createStore("disconnected");
  const definedChainsStore = createStore(/* @__PURE__ */ new Map());
  effect(() => {
    cacheChains([...definedChainsStore.getValue().values()]);
  }, [definedChainsStore]);
  effect(() => {
    const chainVal = activeWalletChainStore.getValue();
    if (!chainVal) {
      return;
    }
    const definedChain = definedChainsStore.getValue().get(chainVal.id);
    if (!definedChain || definedChain === chainVal) {
      return;
    }
    activeWalletChainStore.setValue(definedChain);
  }, [definedChainsStore, activeWalletChainStore]);
  const walletIdToConnectedWalletMap = createStore(/* @__PURE__ */ new Map());
  const isAutoConnecting = createStore(false);
  const connectedWallets = computedStore(() => {
    return Array.from(walletIdToConnectedWalletMap.getValue().values());
  }, [walletIdToConnectedWalletMap]);
  const addConnectedWallet = (wallet) => {
    const oldValue = walletIdToConnectedWalletMap.getValue();
    if (oldValue.has(wallet.id)) {
      return;
    }
    const newValue = new Map(oldValue);
    newValue.set(wallet.id, wallet);
    walletIdToConnectedWalletMap.setValue(newValue);
  };
  const removeConnectedWallet = (wallet) => {
    const oldValue = walletIdToConnectedWalletMap.getValue();
    const newValue = new Map(oldValue);
    newValue.delete(wallet.id);
    walletIdToConnectedWalletMap.setValue(newValue);
  };
  const onWalletDisconnect = (wallet) => {
    deleteConnectParamsFromStorage(storage, wallet.id);
    removeConnectedWallet(wallet);
    if (activeWalletStore.getValue() === wallet) {
      storage.removeItem(LAST_ACTIVE_EOA_ID);
      activeAccountStore.setValue(void 0);
      activeWalletChainStore.setValue(void 0);
      activeWalletStore.setValue(void 0);
      activeWalletConnectionStatusStore.setValue("disconnected");
    }
  };
  const disconnectWallet = (wallet) => {
    onWalletDisconnect(wallet);
    wallet.disconnect();
  };
  const handleConnection = async (wallet, options) => {
    const account = wallet.getAccount();
    if (!account) {
      throw new Error("Can not set a wallet without an account as active");
    }
    const personalWallet = wallet;
    let activeWallet = personalWallet;
    const isInAppSmartAccount = hasSmartAccount(wallet);
    if ((options == null ? void 0 : options.accountAbstraction) && !isInAppSmartAccount) {
      activeWallet = smartWallet(options.accountAbstraction);
      await activeWallet.connect({
        personalAccount: wallet.getAccount(),
        client: options.client
      });
    }
    addConnectedWallet(personalWallet);
    if (personalWallet.id !== "smart") {
      await storage.setItem(LAST_ACTIVE_EOA_ID, personalWallet.id);
    }
    return activeWallet;
  };
  const connect = async (wallet, options) => {
    var _a;
    const connectedWallet = await handleConnection(wallet, options);
    (_a = options == null ? void 0 : options.onConnect) == null ? void 0 : _a.call(options, connectedWallet);
    handleSetActiveWallet(connectedWallet);
    wallet.subscribe("accountChanged", async () => {
      var _a2;
      const newConnectedWallet = await handleConnection(wallet, options);
      (_a2 = options == null ? void 0 : options.onConnect) == null ? void 0 : _a2.call(options, newConnectedWallet);
      handleSetActiveWallet(newConnectedWallet);
    });
    return connectedWallet;
  };
  const handleSetActiveWallet = (activeWallet) => {
    const account = activeWallet.getAccount();
    if (!account) {
      throw new Error("Can not set a wallet without an account as active");
    }
    addConnectedWallet(activeWallet);
    activeWalletStore.setValue(activeWallet);
    activeAccountStore.setValue(account);
    activeWalletChainStore.setValue(activeWallet.getChain());
    activeWalletConnectionStatusStore.setValue("connected");
    const onAccountsChanged = (newAccount) => {
      activeAccountStore.setValue(newAccount);
    };
    const unsubAccounts = activeWallet.subscribe("accountChanged", onAccountsChanged);
    const unsubChainChanged = activeWallet.subscribe("chainChanged", (chain) => activeWalletChainStore.setValue(chain));
    const unsubDisconnect = activeWallet.subscribe("disconnect", () => {
      handleDisconnect();
    });
    const handleDisconnect = () => {
      onWalletDisconnect(activeWallet);
      unsubAccounts();
      unsubChainChanged();
      unsubDisconnect();
    };
  };
  const setActiveWallet = async (activeWallet) => {
    handleSetActiveWallet(activeWallet);
    if (activeWallet.id !== "smart") {
      await storage.setItem(LAST_ACTIVE_EOA_ID, activeWallet.id);
    }
  };
  effect(() => {
    const _chain = activeWalletChainStore.getValue();
    if (_chain) {
      storage.setItem(LAST_ACTIVE_CHAIN, stringify(_chain));
    } else {
      storage.removeItem(LAST_ACTIVE_CHAIN);
    }
  }, [activeWalletChainStore], false);
  effect(() => {
    const accounts = connectedWallets.getValue();
    const ids = accounts.map((acc) => acc == null ? void 0 : acc.id).filter((c) => !!c);
    storage.setItem(CONNECTED_WALLET_IDS, stringify(ids));
  }, [connectedWallets], false);
  const switchActiveWalletChain = async (chain) => {
    const wallet = activeWalletStore.getValue();
    if (!wallet) {
      throw new Error("no wallet found");
    }
    if (!wallet.switchChain) {
      throw new Error("wallet does not support switching chains");
    }
    if (wallet.id === "smart") {
      const personalWalletId = await getStoredActiveWalletId(storage);
      if (personalWalletId) {
        const personalWallet = connectedWallets.getValue().find((w) => w.id === personalWalletId);
        if (personalWallet) {
          await personalWallet.switchChain(chain);
        }
      }
      await wallet.switchChain(chain);
      handleSetActiveWallet(wallet);
    } else {
      await wallet.switchChain(chain);
    }
    activeWalletChainStore.setValue(wallet.getChain());
  };
  function defineChains(chains) {
    const currentMapVal = definedChainsStore.getValue();
    const allChainsSame = chains.every((c) => {
      const definedChain = currentMapVal.get(c.id);
      return stringify(definedChain) === stringify(c);
    });
    if (allChainsSame) {
      return;
    }
    const newMapVal = new Map(currentMapVal);
    for (const c of chains) {
      newMapVal.set(c.id, c);
    }
    definedChainsStore.setValue(newMapVal);
  }
  return {
    activeWalletStore,
    activeAccountStore,
    connectedWallets,
    addConnectedWallet,
    disconnectWallet,
    setActiveWallet,
    connect,
    handleConnection,
    activeWalletChainStore,
    switchActiveWalletChain,
    activeWalletConnectionStatusStore,
    isAutoConnecting,
    removeConnectedWallet,
    defineChains
  };
}
async function getStoredConnectedWalletIds(storage) {
  try {
    const value = await storage.getItem(CONNECTED_WALLET_IDS);
    if (value) {
      return JSON.parse(value);
    }
    return [];
  } catch {
    return [];
  }
}
async function getStoredActiveWalletId(storage) {
  try {
    const value = await storage.getItem(LAST_ACTIVE_EOA_ID);
    if (value) {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}
async function getLastConnectedChain(storage) {
  try {
    const value = await storage.getItem(LAST_ACTIVE_CHAIN);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  } catch {
    return null;
  }
}

// node_modules/thirdweb/dist/esm/react/core/utils/timeoutPromise.js
function timeoutPromise(promise, option) {
  return new Promise((resolve2, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(option.message));
    }, option.ms);
    promise.then((res) => {
      clearTimeout(timeoutId);
      resolve2(res);
    }, (err) => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnect.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSetActiveWalletConnectionStatus.js
function useSetActiveWalletConnectionStatus() {
  const manager = useConnectionManagerCtx("useSetActiveWalletConnectionStatus");
  return manager.activeWalletConnectionStatusStore.setValue;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnect.js
function useConnect(options) {
  const manager = useConnectionManagerCtx("useConnect");
  const { connect } = manager;
  const setConnectionStatus = useSetActiveWalletConnectionStatus();
  const [isConnecting, setIsConnecting] = (0, import_react12.useState)(false);
  const [error, setError] = (0, import_react12.useState)(null);
  const handleConnection = (0, import_react12.useCallback)(async (walletOrFn) => {
    setError(null);
    setConnectionStatus("connecting");
    if (typeof walletOrFn !== "function") {
      const account = await connect(walletOrFn, options);
      setConnectionStatus("connected");
      return account;
    }
    setIsConnecting(true);
    try {
      const w = await walletOrFn();
      const account = await connect(w, options);
      setConnectionStatus("connected");
      return account;
    } catch (e) {
      console.error(e);
      setError(e);
      setConnectionStatus("disconnected");
    } finally {
      setIsConnecting(false);
    }
    return null;
  }, [connect, options, setConnectionStatus]);
  return { connect: handleConnection, isConnecting, error };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAutoConnect.js
function useAutoConnectCore(storage, props, createWalletFn, getInstalledWallets) {
  const manager = useConnectionManagerCtx("useAutoConnect");
  const setConnectionStatus = useSetActiveWalletConnectionStatus();
  const { connect } = useConnect({
    client: props.client,
    accountAbstraction: props.accountAbstraction
  });
  const { isAutoConnecting } = manager;
  const { wallets, onConnect } = props;
  const timeout = props.timeout ?? 15e3;
  const autoConnect = async () => {
    var _a;
    let autoConnected = false;
    isAutoConnecting.setValue(true);
    let [lastConnectedWalletIds, lastActiveWalletId] = await Promise.all([
      getStoredConnectedWalletIds(storage),
      getStoredActiveWalletId(storage)
    ]);
    const { authResult, walletId, authProvider, authCookie } = getUrlToken();
    const wallet = wallets.find((w) => w.id === walletId);
    if (authCookie && wallet) {
      const clientStorage = new ClientScopedStorage({
        storage,
        clientId: props.client.clientId,
        ecosystem: isEcosystemWallet(wallet) ? {
          id: wallet.id,
          partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
        } : void 0
      });
      await clientStorage.saveAuthCookie(authCookie);
    }
    if (walletId) {
      lastActiveWalletId = walletId;
      lastConnectedWalletIds = (lastConnectedWalletIds == null ? void 0 : lastConnectedWalletIds.includes(walletId)) ? lastConnectedWalletIds : [walletId, ...lastConnectedWalletIds || []];
    }
    if (authProvider) {
      await setLastAuthProvider(authProvider, storage);
    }
    if (!lastConnectedWalletIds) {
      return autoConnected;
    }
    const lastConnectedChain = await getLastConnectedChain(storage) || props.chain;
    async function handleWalletConnection(wallet2) {
      return wallet2.autoConnect({
        client: props.client,
        chain: lastConnectedChain ?? void 0,
        authResult
      });
    }
    const availableWallets = [...wallets, ...(getInstalledWallets == null ? void 0 : getInstalledWallets()) ?? []];
    const activeWallet = lastActiveWalletId && (availableWallets.find((w) => w.id === lastActiveWalletId) || createWalletFn(lastActiveWalletId));
    if (activeWallet) {
      try {
        setConnectionStatus("connecting");
        await timeoutPromise(handleWalletConnection(activeWallet), {
          ms: timeout,
          message: `AutoConnect timeout: ${timeout}ms limit exceeded.`
        });
        const connectedWallet = await connect(activeWallet);
        if (connectedWallet) {
          if (onConnect) {
            try {
              onConnect(connectedWallet);
              autoConnected = true;
            } catch {
            }
          }
        } else {
          setConnectionStatus("disconnected");
        }
      } catch (e) {
        if (e instanceof Error) {
          console.warn("Error auto connecting wallet:", e.message);
        }
        setConnectionStatus("disconnected");
      }
    } else {
      setConnectionStatus("disconnected");
    }
    const otherWallets = wallets.filter((w) => w.id !== lastActiveWalletId && lastConnectedWalletIds.includes(w.id));
    for (const wallet2 of otherWallets) {
      try {
        await handleWalletConnection(wallet2);
        manager.addConnectedWallet(wallet2);
      } catch {
      }
    }
    isAutoConnecting.setValue(false);
    return autoConnected;
  };
  const query = useQuery({
    queryKey: ["autoConnect", props.client.clientId],
    queryFn: autoConnect,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  return query;
}

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useAutoConnect.js
function useAutoConnect(props) {
  const wallets = props.wallets || getDefaultWallets(props);
  return useAutoConnectCore(webLocalStorage, {
    ...props,
    wallets
  }, createWallet, () => {
    const specifiedWalletIds = new Set(wallets.map((x) => x.id));
    const installedWallets = getInstalledWalletProviders().filter((x) => !specifiedWalletIds.has(x.info.rdns)).map((x) => createWallet(x.info.rdns));
    return installedWallets;
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/AutoConnect/AutoConnect.js
function AutoConnect(props) {
  useAutoConnect(props);
  return (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, {});
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Details.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var import_react49 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/analytics/track/pay.js
async function trackPayEvent(args) {
  return track({
    client: args.client,
    ecosystem: args.ecosystem,
    data: {
      source: "pay",
      action: args.event,
      clientId: args.client.clientId,
      chainId: args.chainId,
      walletAddress: args.walletAddress,
      walletType: args.walletType,
      tokenAddress: args.fromToken,
      amountWei: args.fromAmount,
      dstTokenAddress: args.toToken,
      dstChainId: args.chainId
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWalletChain.js
var import_react13 = __toESM(require_react(), 1);
function useActiveWalletChain() {
  const manager = useConnectionManagerCtx("useActiveWalletChain");
  const store = manager.activeWalletChainStore;
  return (0, import_react13.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnectedWallets.js
var import_react14 = __toESM(require_react(), 1);
function useConnectedWallets() {
  const manager = useConnectionManagerCtx("useConnectedWallets");
  const store = manager.connectedWallets;
  return (0, import_react14.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAdminWallet.js
function useAdminWallet() {
  var _a;
  const activeWallet = useActiveWallet();
  const connectedWallets = useConnectedWallets();
  const adminAccount = (_a = activeWallet == null ? void 0 : activeWallet.getAdminAccount) == null ? void 0 : _a.call(activeWallet);
  if (!adminAccount) {
    return activeWallet;
  }
  return connectedWallets.find((wallet) => {
    var _a2, _b, _c;
    return ((_b = (_a2 = wallet.getAccount()) == null ? void 0 : _a2.address) == null ? void 0 : _b.toLowerCase()) === ((_c = adminAccount == null ? void 0 : adminAccount.address) == null ? void 0 : _c.toLowerCase());
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useDisconnect.js
function useDisconnect() {
  const manager = useConnectionManagerCtx("useDisconnect");
  const disconnect = manager.disconnectWallet;
  return { disconnect };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSwitchActiveWalletChain.js
function useSwitchActiveWalletChain() {
  const manager = useConnectionManagerCtx("useSwitchActiveWalletChain");
  return manager.switchActiveWalletChain;
}

// node_modules/thirdweb/dist/esm/react/core/providers/RootElementContext.js
var import_react15 = __toESM(require_react(), 1);
var SetRootElementContext = (0, import_react15.createContext)(() => {
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainIcon.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var fallbackChainIcon = "data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 8.04238e-07C5.1435 8.04238e-07 3.36301 0.737501 2.05025 2.05025C0.7375 3.36301 0 5.1435 0 7C0 7.225 -1.52737e-07 7.445 0.0349998 7.665C0.16385 9.0151 0.68213 10.2988 1.52686 11.3598C2.37158 12.4209 3.50637 13.2137 4.79326 13.642C6.0801 14.0702 7.4637 14.1153 8.7758 13.7719C10.0879 13.4285 11.2719 12.7113 12.184 11.7075C13.0961 10.7038 13.6969 9.4567 13.9135 8.1178C14.1301 6.7789 13.9531 5.406 13.4039 4.16587C12.8548 2.92574 11.9573 1.87184 10.8204 1.13228C9.6835 0.392721 8.3563 -0.000649196 7 8.04238e-07ZM7 1C8.581 1.00137 10.0975 1.62668 11.22 2.74V3.24C9.2438 2.55991 7.0956 2.56872 5.125 3.265C4.96758 3.1116 4.76997 3.00586 4.555 2.96H4.43C4.37 2.75 4.315 2.54 4.27 2.325C4.225 2.11 4.2 1.92 4.175 1.715C5.043 1.24658 6.0137 1.00091 7 1ZM5.5 3.935C7.3158 3.32693 9.2838 3.34984 11.085 4C10.8414 5.2703 10.3094 6.4677 9.53 7.5C9.312 7.4077 9.0707 7.3855 8.8395 7.4366C8.6083 7.4877 8.3988 7.6094 8.24 7.785C8.065 7.685 7.89 7.585 7.74 7.47C6.7307 6.7966 5.8877 5.9023 5.275 4.855C5.374 4.73221 5.4461 4.58996 5.4866 4.43749C5.5271 4.28502 5.5351 4.12575 5.51 3.97L5.5 3.935ZM3.5 2.135C3.5 2.24 3.53 2.35 3.55 2.455C3.595 2.675 3.655 2.89 3.715 3.105C3.52353 3.21838 3.36943 3.38531 3.2717 3.58522C3.17397 3.78513 3.13688 4.00927 3.165 4.23C2.37575 4.7454 1.67078 5.3795 1.075 6.11C1.19455 5.3189 1.47112 4.55966 1.88843 3.87701C2.30575 3.19437 2.85539 2.60208 3.505 2.135H3.5ZM3.5 9.99C3.30481 10.0555 3.13037 10.1714 2.9943 10.3259C2.85822 10.4804 2.76533 10.6681 2.725 10.87H2.405C1.59754 9.9069 1.1146 8.7136 1.025 7.46L1.08 7.365C1.70611 6.3942 2.52463 5.562 3.485 4.92C3.62899 5.0704 3.81094 5.179 4.01162 5.2345C4.2123 5.2899 4.42423 5.2901 4.625 5.235C5.2938 6.3652 6.208 7.3306 7.3 8.06C7.505 8.195 7.715 8.32 7.925 8.44C7.9082 8.6312 7.9391 8.8237 8.015 9C7.1 9.7266 6.0445 10.256 4.915 10.555C4.78401 10.3103 4.57028 10.1201 4.31199 10.0184C4.05369 9.9167 3.76766 9.9102 3.505 10L3.5 9.99ZM7 12.99C5.9831 12.9903 4.98307 12.7304 4.095 12.235L4.235 12.205C4.43397 12.1397 4.61176 12.0222 4.74984 11.8648C4.88792 11.7074 4.98122 11.5158 5.02 11.31C6.2985 10.984 7.4921 10.3872 8.52 9.56C8.7642 9.7027 9.0525 9.75 9.3295 9.6927C9.6064 9.6355 9.8524 9.4778 10.02 9.25C10.7254 9.4334 11.4511 9.5275 12.18 9.53H12.445C11.9626 10.5673 11.1938 11.4451 10.2291 12.0599C9.2643 12.6747 8.144 13.0009 7 13V12.99ZM10.255 8.54C10.2545 8.3304 10.1975 8.1249 10.09 7.945C10.9221 6.8581 11.5012 5.5991 11.785 4.26C12.035 4.37667 12.2817 4.50667 12.525 4.65C13.0749 5.9495 13.1493 7.4012 12.735 8.75C11.9049 8.8142 11.0698 8.7484 10.26 8.555L10.255 8.54Z' fill='%23646D7A'/%3e%3c/svg%3e";
var ChainIcon = (props) => {
  const getSrc = () => {
    const url = props.chainIconUrl;
    if (!url) {
      return fallbackChainIcon;
    }
    try {
      return resolveScheme({
        uri: url,
        client: props.client
      });
    } catch {
      return fallbackChainIcon;
    }
  };
  return (0, import_jsx_runtime15.jsxs)(Container, { style: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
    alignItems: "center"
  }, children: [(0, import_jsx_runtime15.jsx)(Img, { src: getSrc(), width: props.size, height: props.size, fallbackImage: fallbackChainIcon, client: props.client }), props.active && (0, import_jsx_runtime15.jsx)(ActiveDot, {})] });
};
var ActiveDot = StyledDiv({
  width: "28%",
  height: "28%",
  borderRadius: "50%",
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "#00d395",
  boxShadow: "0 0 0 2px var(--bg)"
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/CopyIcon.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/hooks/useCopyClipboard.js
var import_react16 = __toESM(require_react(), 1);
function useClipboard(text) {
  const [hasCopied, setHasCopied] = (0, import_react16.useState)(false);
  const onCopy = (0, import_react16.useCallback)(async () => {
    await navigator.clipboard.writeText(text);
    setHasCopied(true);
  }, [text]);
  (0, import_react16.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, 1500);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [hasCopied]);
  return { onCopy, hasCopied };
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Tooltip.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var React32 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popper/dist/index.mjs
var React30 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode2(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode2(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode2(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React26 = __toESM(require_react(), 1);
var import_react17 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react17.useLayoutEffect : import_react17.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React26.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React26.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React26.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React26.useState(null);
  const [_floating, _setFloating] = React26.useState(null);
  const setReference = React26.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React26.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React26.useRef(null);
  const floatingRef = React26.useRef(null);
  const dataRef = React26.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React26.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React26.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React26.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React26.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React26.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React26.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React27 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var NAME = "Arrow";
var Arrow = React27.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return (0, import_jsx_runtime16.jsx)(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : (0, import_jsx_runtime16.jsx)("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root2 = Arrow;

// node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-context/dist/index.mjs
var React28 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function createContextScope2(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React28.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React28.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime17.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React28.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React28.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React28.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes2(createScope, ...createContextScopeDeps)];
}
function composeContextScopes2(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React28.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React29 = __toESM(require_react(), 1);
function useSize(element) {
  const [size4, setSize] = React29.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope2(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React30.useState(null);
  return (0, import_jsx_runtime18.jsx)(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React30.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React30.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React30.useEffect(() => {
      context.onAnchorChange((virtualRef == null ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : (0, import_jsx_runtime18.jsx)(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME2 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME2);
var PopperContent = React30.forwardRef(
  (props, forwardedRef) => {
    var _a, _b, _c, _d, _e, _f;
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME2, __scopePopper);
    const [content, setContent] = React30.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow4, setArrow] = React30.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = (arrowSize == null ? void 0 : arrowSize.width) ?? 0;
    const arrowHeight = (arrowSize == null ? void 0 : arrowSize.height) ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced == null ? void 0 : handlePlaced();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = (_a = middlewareData.arrow) == null ? void 0 : _a.x;
    const arrowY = (_b = middlewareData.arrow) == null ? void 0 : _b.y;
    const cannotCenterArrow = ((_c = middlewareData.arrow) == null ? void 0 : _c.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React30.useState();
    useLayoutEffect2(() => {
      if (content)
        setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return (0, import_jsx_runtime18.jsx)(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            (_d = middlewareData.transformOrigin) == null ? void 0 : _d.x,
            (_e = middlewareData.transformOrigin) == null ? void 0 : _e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_f = middlewareData.hide) == null ? void 0 : _f.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: (0, import_jsx_runtime18.jsx)(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: (0, import_jsx_runtime18.jsx)(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME2;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React30.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_jsx_runtime18.jsx)(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: (0, import_jsx_runtime18.jsx)(
          Root2,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _a, _b, _c;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
    const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root22 = Popper;
var Anchor = PopperAnchor;
var Content2 = PopperContent;
var Arrow2 = PopperArrow;

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React31 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var NAME2 = "VisuallyHidden";
var VisuallyHidden = React31.forwardRef(
  (props, forwardedRef) => {
    return (0, import_jsx_runtime19.jsx)(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME2;
var Root3 = VisuallyHidden;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const [isOpenDelayed, setIsOpenDelayed] = React32.useState(true);
  const isPointerInTransitRef = React32.useRef(false);
  const skipDelayTimerRef = React32.useRef(0);
  React32.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_jsx_runtime20.jsx)(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayed,
      delayDuration,
      onOpen: React32.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        setIsOpenDelayed(false);
      }, []),
      onClose: React32.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React32.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = React32.useState(null);
  const contentId = useId();
  const openTimerRef = React32.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React32.useRef(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange == null ? void 0 : onOpenChange(open2);
    }
  });
  const stateAttribute = React32.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React32.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React32.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React32.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React32.useEffect(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return (0, import_jsx_runtime20.jsx)(Root22, { ...popperScope, children: (0, import_jsx_runtime20.jsx)(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React32.useCallback(() => {
        if (providerContext.isOpenDelayed)
          handleDelayedOpen();
        else
          handleOpen();
      }, [providerContext.isOpenDelayed, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React32.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME2 = "TooltipTrigger";
var TooltipTrigger = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME2, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME2, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = React32.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React32.useRef(false);
    const hasPointerMoveOpenedRef = React32.useRef(false);
    const handlePointerUp = React32.useCallback(() => isPointerDownRef.current = false, []);
    React32.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return (0, import_jsx_runtime20.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime20.jsx)(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch")
            return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current)
            context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME3 = "TooltipPortal";
var [PortalProvider2, usePortalContext2] = createTooltipContext(PORTAL_NAME3, {
  forceMount: void 0
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME3, __scopeTooltip);
  return (0, import_jsx_runtime20.jsx)(PortalProvider2, { scope: __scopeTooltip, forceMount, children: (0, import_jsx_runtime20.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime20.jsx)(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME3;
var CONTENT_NAME3 = "TooltipContent";
var TooltipContent = React32.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext2(CONTENT_NAME3, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME3, props.__scopeTooltip);
    return (0, import_jsx_runtime20.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? (0, import_jsx_runtime20.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime20.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = React32.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME3, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME3, props.__scopeTooltip);
  const ref = React32.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React32.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React32.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React32.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React32.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React32.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React32.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = (trigger == null ? void 0 : trigger.contains(target)) || (content == null ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return (0, import_jsx_runtime20.jsx)(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var TooltipContentImpl = React32.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME3, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    React32.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React32.useEffect(() => {
      if (context.trigger) {
        const handleScroll2 = (event) => {
          const target = event.target;
          if (target == null ? void 0 : target.contains(context.trigger))
            onClose();
        };
        window.addEventListener("scroll", handleScroll2, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll2, { capture: true });
      }
    }, [context.trigger, onClose]);
    return (0, import_jsx_runtime20.jsx)(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: (0, import_jsx_runtime20.jsxs)(
          Content2,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              (0, import_jsx_runtime20.jsx)(Slottable, { children }),
              (0, import_jsx_runtime20.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: (0, import_jsx_runtime20.jsx)(Root3, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent.displayName = CONTENT_NAME3;
var ARROW_NAME2 = "TooltipArrow";
var TooltipArrow = React32.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME2,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : (0, import_jsx_runtime20.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME2;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon2) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon2.length - 1; i < polygon2.length; j = i++) {
    const xi = polygon2[i].x;
    const yi = polygon2[i].y;
    const xj = polygon2[j].x;
    const yj = polygon2[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x)
      return -1;
    else if (a.x > b.x)
      return 1;
    else if (a.y < b.y)
      return -1;
    else if (a.y > b.y)
      return 1;
    else
      return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider;
var Root32 = Tooltip;
var Trigger2 = TooltipTrigger;
var Portal3 = TooltipPortal;
var Content22 = TooltipContent;
var Arrow22 = TooltipArrow;

// node_modules/thirdweb/dist/esm/react/web/ui/components/Tooltip.js
var ToolTip = (props) => {
  return (0, import_jsx_runtime21.jsx)(Provider, { delayDuration: 200, children: (0, import_jsx_runtime21.jsxs)(Root32, { children: [(0, import_jsx_runtime21.jsx)(Trigger2, { asChild: true, children: props.children }), (0, import_jsx_runtime21.jsx)(Portal3, { children: (0, import_jsx_runtime21.jsxs)(TooltipContent2, { sideOffset: props.sideOffset || 6, align: props.align || "center", side: props.side || "top", children: [props.tip, (0, import_jsx_runtime21.jsx)(TooltipArrow2, {})] }) })] }) });
};
var slideUpAndFade = keyframes`
from {
  opacity: 0;
  transform: translateY(2px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;
var TooltipContent2 = (() => newStyled(Content22)((_) => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tooltipBg,
    color: theme.colors.tooltipText,
    borderRadius: radius.sm,
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: fontSize.sm,
    boxShadow: shadow.sm,
    userSelect: "none",
    willChange: "transform, opacity",
    animation: `${slideUpAndFade} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
    zIndex: 999999999999999,
    maxWidth: "300px",
    lineHeight: 1.5
  };
}))();
var TooltipArrow2 = (() => newStyled(Arrow22)(() => {
  const theme = useCustomTheme();
  return {
    fill: theme.colors.tooltipBg
  };
}))();

// node_modules/thirdweb/dist/esm/react/web/ui/components/CopyIcon.js
var CopyIcon2 = (props) => {
  const { hasCopied, onCopy } = useClipboard(props.text);
  const showCheckIcon = props.hasCopied || hasCopied;
  return (0, import_jsx_runtime22.jsx)("div", { onClick: onCopy, style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onCopy();
    }
  }, children: (0, import_jsx_runtime22.jsx)(ToolTip, { tip: props.tip, side: props.side, align: props.align, children: (0, import_jsx_runtime22.jsx)("div", { children: (0, import_jsx_runtime22.jsx)(Container, { color: showCheckIcon ? "success" : void 0, flex: "row", center: "both", children: showCheckIcon ? (0, import_jsx_runtime22.jsx)(CheckIcon, {}) : (0, import_jsx_runtime22.jsx)(CopyIcon, {}) }) }) }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/components/IconContainer.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var IconContainer = (props) => {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime23.jsx)("div", { style: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyItems: "center",
    flexShrink: 0,
    alignItems: "center",
    padding: props.padding ?? "6px",
    borderRadius: "100%",
    border: `1px solid ${theme.colors.borderColor}`,
    ...props.style
  }, children: props.children });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Blobbie.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react19 = __toESM(require_react(), 1);
var COLOR_OPTIONS = [
  ["#fca5a5", "#b91c1c"],
  ["#fdba74", "#c2410c"],
  ["#fcd34d", "#b45309"],
  ["#fde047", "#a16207"],
  ["#a3e635", "#4d7c0f"],
  ["#86efac", "#15803d"],
  ["#67e8f9", "#0e7490"],
  ["#7dd3fc", "#0369a1"],
  ["#93c5fd", "#1d4ed8"],
  ["#a5b4fc", "#4338ca"],
  ["#c4b5fd", "#6d28d9"],
  ["#d8b4fe", "#7e22ce"],
  ["#f0abfc", "#a21caf"],
  ["#f9a8d4", "#be185d"],
  ["#fda4af", "#be123c"]
];
function Blobbie(props) {
  const id = (0, import_react19.useId)();
  const colors = (0, import_react19.useMemo)(() => COLOR_OPTIONS[Number(hexToNumber(props.address.slice(2, 4))) % COLOR_OPTIONS.length], [props.address]);
  return (0, import_jsx_runtime24.jsx)("div", { id, style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundImage: `radial-gradient(ellipse at left bottom, ${colors[0]}, ${colors[1]})`
  } });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/MenuButton.js
var MenuButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    padding: `${spacing.sm} ${spacing.sm}`,
    borderRadius: radius.md,
    backgroundColor: "transparent",
    // border: `1px solid ${theme.colors.borderColor}`,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
    fontSize: fontSize.md,
    fontWeight: 500,
    color: theme.colors.secondaryText,
    gap: spacing.sm,
    WebkitTapHighlightColor: "transparent",
    lineHeight: 1.3,
    transition: "background-color 200ms ease, transform 200ms ease",
    "&:hover": {
      backgroundColor: theme.colors.tertiaryBg,
      svg: {
        color: theme.colors.accentText
      }
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    svg: {
      color: theme.colors.secondaryText,
      transition: "color 200ms ease"
    },
    "&[data-variant='danger']:hover svg": {
      color: `${theme.colors.danger}!important`
    },
    "&[data-variant='primary']:hover svg": {
      color: `${theme.colors.primaryText}!important`
    }
  };
});
var MenuLink = (() => MenuButton.withComponent("a"))();

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/NetworkSelector.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/locale/getConnectLocale.js
async function getConnectLocale(localeId) {
  switch (localeId) {
    case "es_ES": {
      return (await import("./es-RWVLHLPZ.js")).default;
    }
    case "ja_JP": {
      return (await import("./ja-MCXBRC6G.js")).default;
    }
    case "tl_PH": {
      return (await import("./tl-O6CWFXUB.js")).default;
    }
    case "vi_VN": {
      return (await import("./vi-7VOZ2AS3.js")).default;
    }
    case "de_DE": {
      return (await import("./de-IU2DXG5T.js")).default;
    }
    case "ko_KR": {
      return (await import("./kr-O56ZYU3R.js")).default;
    }
    case "fr_FR": {
      return (await import("./fr-HZ64NS6B.js")).default;
    }
    default: {
      return (await import("./en-BRYFEMZN.js")).default;
    }
  }
}
function useConnectLocale(localeId) {
  return useQuery({
    queryKey: ["connect-locale", localeId],
    queryFn: async () => {
      return getConnectLocale(localeId);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/NetworkSelector.js
function NetworkSelectorContent(props) {
  var _a, _b, _c, _d;
  const locale = props.connectLocale.networkSelector;
  const [searchTerm, setSearchTerm] = (0, import_react20.useState)("");
  const [selectedTab, setSelectedTab] = (0, import_react20.useState)("all");
  const deferredSearchTerm = useDebouncedValue(searchTerm, 300);
  const { onSwitch, onCustomClick } = props.networkSelector || {};
  const othersLabel = locale.categoryLabel.others;
  const popularLabel = locale.categoryLabel.popular;
  const recentLabel = locale.categoryLabel.recentlyUsed;
  const { chainSections, allChains, allChainsToSectionMap } = (0, import_react20.useMemo)(() => {
    var _a2, _b2, _c2, _d2;
    const chainSectionsValue = [];
    const allChainsValue = [];
    const allChainsToSectionMapValue = /* @__PURE__ */ new Map();
    function addChain(c, section) {
      allChainsToSectionMapValue.set(c.id, section);
      allChainsValue.push(c);
    }
    if ((_a2 = props.networkSelector) == null ? void 0 : _a2.sections) {
      for (const s of props.networkSelector.sections) {
        const chainsToAdd = s.chains.filter((c) => !allChainsToSectionMapValue.has(c.id));
        if (chainsToAdd.length > 0) {
          chainSectionsValue.push({
            label: s.label,
            chains: chainsToAdd
          });
          for (const c of chainsToAdd) {
            addChain(c, s.label);
          }
        }
      }
    } else {
      const allChainsMap = new Map(props.chains.map((c) => [c.id, c]));
      if (((_b2 = props.networkSelector) == null ? void 0 : _b2.recentChainIds) && ((_c2 = props.networkSelector) == null ? void 0 : _c2.recentChainIds.length) > 0) {
        const recentChains = props.networkSelector.recentChainIds.map((id) => allChainsMap.get(id)).filter((c) => c !== void 0);
        chainSectionsValue.push({
          label: recentLabel,
          chains: recentChains
        });
        for (const c of recentChains) {
          addChain(c, recentLabel);
        }
      }
      if (((_d2 = props.networkSelector) == null ? void 0 : _d2.popularChainIds) && props.networkSelector.popularChainIds.length > 0) {
        const popularChains = props.networkSelector.popularChainIds.map((id) => allChainsMap.get(id)).filter((c) => c !== void 0);
        const chainsToAdd = popularChains.filter((c) => !allChainsToSectionMapValue.has(c.id));
        if (chainsToAdd.length > 0) {
          chainSectionsValue.push({
            label: popularLabel,
            chains: chainsToAdd
          });
          for (const c of chainsToAdd) {
            addChain(c, popularLabel);
          }
        }
      }
    }
    const otherChainsToAdd = props.chains.filter((c) => !allChainsToSectionMapValue.has(c.id));
    if (otherChainsToAdd.length > 0) {
      chainSectionsValue.push({
        label: othersLabel,
        chains: otherChainsToAdd
      });
      for (const c of otherChainsToAdd) {
        addChain(c, othersLabel);
      }
    }
    return {
      chainSections: chainSectionsValue,
      allChains: allChainsValue,
      allChainsToSectionMap: allChainsToSectionMapValue
    };
  }, [
    (_a = props.networkSelector) == null ? void 0 : _a.sections,
    (_b = props.networkSelector) == null ? void 0 : _b.recentChainIds,
    (_c = props.networkSelector) == null ? void 0 : _c.popularChainIds,
    props.chains,
    recentLabel,
    popularLabel,
    othersLabel
  ]);
  const chainsHaveName = allChains.every((c) => !!c.name);
  const allChainsQuery = useChainsQuery(chainsHaveName ? [] : allChains, 10);
  const isAllChainsQueryLoading = chainsHaveName ? false : allChainsQuery.some((q) => q.isLoading);
  const allChainsMetadata = chainsHaveName ? allChains : !isAllChainsQueryLoading ? allChainsQuery.filter((x) => !!x.data).map((q) => convertApiChainToChain(q.data)) : [];
  const fuse = (0, import_react20.useMemo)(() => {
    return new Fuse(allChainsMetadata, {
      threshold: 0.4,
      keys: [
        {
          name: "name",
          weight: 1
        },
        {
          name: "chainId",
          weight: 1
        }
      ]
    });
  }, [allChainsMetadata]);
  const searchedChainSections = (0, import_react20.useMemo)(() => {
    if (deferredSearchTerm === "") {
      return void 0;
    }
    const filteredChainSectionsValue = [];
    const filteredAllChains = fuse.search(deferredSearchTerm).map((r) => r.item);
    for (const c of filteredAllChains) {
      const label = allChainsToSectionMap.get(c.id);
      if (!label) {
        return;
      }
      const section = filteredChainSectionsValue.find((s) => s.label === label);
      if (section) {
        section.chains.push(c);
      } else {
        filteredChainSectionsValue.push({
          label,
          chains: [c]
        });
      }
    }
    return filteredChainSectionsValue;
  }, [deferredSearchTerm, fuse, allChainsToSectionMap]) || chainSections;
  const filteredChainSections = (0, import_react20.useMemo)(() => {
    if (selectedTab === "all") {
      return searchedChainSections;
    }
    return searchedChainSections.map((section) => ({
      label: section.label,
      chains: section.chains.filter((c) => selectedTab === "mainnet" && !c.testnet || selectedTab === "testnet" && c.testnet)
    }));
  }, [searchedChainSections, selectedTab]);
  const handleSwitch = (0, import_react20.useCallback)((chain) => {
    if (onSwitch) {
      onSwitch(chain);
    }
    props.closeModal();
  }, [onSwitch, props]);
  return (0, import_jsx_runtime25.jsxs)(Container, { children: [(0, import_jsx_runtime25.jsx)(Container, { p: "lg", children: props.onBack ? (0, import_jsx_runtime25.jsx)(ModalHeader, { title: locale.title, onBack: props.onBack }) : (0, import_jsx_runtime25.jsx)(ModalTitle, { children: locale.title }) }), props.showTabs !== false && (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [(0, import_jsx_runtime25.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime25.jsxs)(Container, { flex: "row", gap: "xxs", children: [(0, import_jsx_runtime25.jsx)(TabButton, { onClick: () => setSelectedTab("all"), "data-active": selectedTab === "all", children: locale.allNetworks }), (0, import_jsx_runtime25.jsx)(TabButton, { onClick: () => setSelectedTab("mainnet"), "data-active": selectedTab === "mainnet", children: locale.mainnets }), (0, import_jsx_runtime25.jsx)(TabButton, { onClick: () => setSelectedTab("testnet"), "data-active": selectedTab === "testnet", children: locale.testnets })] }) }), (0, import_jsx_runtime25.jsx)(Spacer, { y: "lg" })] }), props.showTabs === false && (0, import_jsx_runtime25.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime25.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime25.jsxs)("div", { style: {
    display: "flex",
    alignItems: "center",
    position: "relative"
  }, children: [(0, import_jsx_runtime25.jsx)(StyledMagnifyingGlassIcon, { width: iconSize.md, height: iconSize.md }), (0, import_jsx_runtime25.jsx)(Input, { style: {
    padding: `${spacing.sm} ${spacing.md} ${spacing.sm} ${spacing.xxl}`
  }, tabIndex: -1, variant: "outline", value: searchTerm, onChange: (e) => {
    setSearchTerm(e.target.value);
  }, disabled: isAllChainsQueryLoading, placeholder: isAllChainsQueryLoading ? "Loading chains..." : locale.inputPlaceholder }), (deferredSearchTerm !== searchTerm || isAllChainsQueryLoading) && (0, import_jsx_runtime25.jsx)("div", { style: {
    position: "absolute",
    right: spacing.md
  }, children: (0, import_jsx_runtime25.jsx)(Spinner, { size: "md", color: "accentText" }) })] }) }), (0, import_jsx_runtime25.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime25.jsx)(Container, { px: "md", children: (0, import_jsx_runtime25.jsx)(NetworkTabContent, { chainSections: filteredChainSections, onSwitch: handleSwitch, renderChain: (_d = props.networkSelector) == null ? void 0 : _d.renderChain, connectLocale: props.connectLocale, client: props.client, close: props.closeModal }) }), onCustomClick && (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [(0, import_jsx_runtime25.jsx)(Line, {}), (0, import_jsx_runtime25.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime25.jsx)(Button, { fullWidth: true, variant: "link", onClick: () => {
    onCustomClick();
    props.closeModal();
  }, style: {
    display: "flex",
    fontSize: fontSize.sm,
    boxShadow: "none"
  }, children: locale.addCustomNetwork }) })] })] });
}
var NetworkTabContent = (props) => {
  const { chainSections } = props;
  const noChainsToShow = chainSections.every((section) => section.chains.length === 0);
  return (0, import_jsx_runtime25.jsx)(Container, { scrollY: true, animate: "fadein", style: {
    height: "330px",
    paddingBottom: spacing.lg
  }, children: noChainsToShow ? (0, import_jsx_runtime25.jsxs)(Container, { flex: "column", gap: "md", center: "both", color: "secondaryText", children: [(0, import_jsx_runtime25.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime25.jsx)(CrossCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime25.jsx)(Text, { children: " No Results " })] }) : chainSections.map((section, idx) => {
    if (section.chains.length === 0) {
      return null;
    }
    return (0, import_jsx_runtime25.jsxs)(import_react20.Fragment, { children: [idx !== 0 && (0, import_jsx_runtime25.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime25.jsx)(SectionLabel, { children: section.label }), (0, import_jsx_runtime25.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime25.jsx)(NetworkList, { chains: section.chains, onSwitch: props.onSwitch, renderChain: props.renderChain, close: props.close, client: props.client, connectLocale: props.connectLocale })] }, section.label);
  }) });
};
var NetworkList = (0, import_react20.memo)(function NetworkList2(props) {
  const { itemsToShow, lastItemRef } = useShowMore(10, 10);
  const switchChain = useSwitchActiveWalletChain();
  const activeChain = useActiveWalletChain();
  const [switchingChainId, setSwitchingChainId] = (0, import_react20.useState)(-1);
  const [errorSwitchingChainId, setErrorSwitchingChainId] = (0, import_react20.useState)(-1);
  const close = props.close;
  (0, import_react20.useEffect)(() => {
    if (switchingChainId !== -1 && (activeChain == null ? void 0 : activeChain.id) === switchingChainId) {
      if (close) {
        close();
      }
    }
  }, [switchingChainId, close, activeChain == null ? void 0 : activeChain.id]);
  const handleSwitch = async (chain) => {
    setErrorSwitchingChainId(-1);
    setSwitchingChainId(chain.id);
    try {
      await switchChain(chain);
      props.onSwitch(chain);
    } catch (e) {
      setErrorSwitchingChainId(chain.id);
      console.error(e);
    } finally {
      setSwitchingChainId(-1);
    }
  };
  const RenderChain = props.renderChain;
  const chainsToShow = props.chains.slice(0, itemsToShow);
  return (0, import_jsx_runtime25.jsx)(NetworkListUl, { children: chainsToShow.map((chain, i) => {
    if (!chain) {
      return null;
    }
    const confirming = switchingChainId === chain.id;
    const switchingFailed = errorSwitchingChainId === chain.id;
    const isLast = i === chainsToShow.length - 1;
    return (0, import_jsx_runtime25.jsx)("li", { ref: isLast ? lastItemRef : void 0, children: RenderChain ? (0, import_jsx_runtime25.jsx)(RenderChain, { switchChain: () => {
      handleSwitch(chain);
    }, chain, switching: switchingChainId === chain.id, switchFailed: errorSwitchingChainId === chain.id, close: props.close }) : (0, import_jsx_runtime25.jsx)(ChainButton, { chain, confirming, onClick: () => handleSwitch(chain), switchingFailed, client: props.client, connectLocale: props.connectLocale }) }, chain.id);
  }) });
});
var ChainButton = (0, import_react20.memo)(function ChainButton2(props) {
  const locale = props.connectLocale;
  const { chain, confirming, switchingFailed } = props;
  const activeChain = useActiveWalletChain();
  const chainNameQuery = useChainName(chain);
  const chainIconQuery = useChainIconUrl(chain);
  let chainName;
  if (chainNameQuery.name) {
    chainName = (0, import_jsx_runtime25.jsxs)("span", { children: [chainNameQuery.name, " "] });
  } else {
    chainName = (0, import_jsx_runtime25.jsx)(Skeleton, { width: "150px", height: "20px" });
  }
  return (0, import_jsx_runtime25.jsxs)(NetworkButton, { "data-active": (activeChain == null ? void 0 : activeChain.id) === chain.id, onClick: props.onClick, children: [!chainIconQuery.isLoading ? (0, import_jsx_runtime25.jsx)(ChainIcon, { chainIconUrl: chainIconQuery.url, size: iconSize.lg, active: (activeChain == null ? void 0 : activeChain.id) === chain.id, loading: "lazy", client: props.client }) : (0, import_jsx_runtime25.jsx)(Skeleton, { width: `${iconSize.lg}px`, height: `${iconSize.lg}px` }), confirming || switchingFailed ? (0, import_jsx_runtime25.jsxs)("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs
  }, children: [chainName, (0, import_jsx_runtime25.jsxs)(Container, { animate: "fadein", flex: "row", gap: "xxs", center: "y", children: [confirming && (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [(0, import_jsx_runtime25.jsx)(Text, { size: "xs", color: "accentText", children: locale.confirmInWallet }), (0, import_jsx_runtime25.jsx)(Spinner, { size: "xs", color: "accentText" })] }), switchingFailed && (0, import_jsx_runtime25.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime25.jsx)(Text, { size: "xs", color: "danger", children: locale.networkSelector.failedToSwitch }) })] })] }) : chainName] });
});
var TabButton = (() => newStyled.button((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    fontSize: fontSize.sm,
    fontWeight: 500,
    color: theme.colors.secondaryText,
    cursor: "pointer",
    padding: `${spacing.sm} ${spacing.sm}`,
    WebkitTapHighlightColor: "transparent",
    borderRadius: radius.lg,
    transition: "background 0.2s ease, color 0.2s ease",
    "&[data-active='true']": {
      background: theme.colors.secondaryButtonBg,
      color: theme.colors.primaryText
    }
  };
}))();
var SectionLabel = StyledP(() => {
  const theme = useCustomTheme();
  return {
    fontSize: fontSize.sm,
    color: theme.colors.secondaryText,
    margin: 0,
    display: "block",
    padding: `0 ${spacing.xs}`
  };
});
var NetworkListUl = StyledUl({
  padding: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
  boxSizing: "border-box"
});
var NetworkButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    alignItems: "center",
    gap: spacing.md,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: radius.md,
    cursor: "pointer",
    transition: "background 0.2s ease",
    color: theme.colors.primaryText,
    fontWeight: 500,
    fontSize: fontSize.md,
    "&:hover": {
      background: theme.colors.secondaryButtonBg
    },
    [media.mobile]: {
      fontSize: fontSize.sm
    }
  };
});
var StyledMagnifyingGlassIcon = newStyled(MagnifyingGlassIcon)((_) => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText,
    position: "absolute",
    left: spacing.sm
  };
});
function useNetworkSwitcherModal() {
  const activeChain = useActiveWalletChain();
  const setRootEl = (0, import_react20.useContext)(SetRootElementContext);
  const closeModal = (0, import_react20.useCallback)(() => {
    setRootEl(null);
  }, [setRootEl]);
  const openNetworkSwitcher = (0, import_react20.useCallback)(async (props) => {
    if (!activeChain) {
      throw new Error("No active wallet found");
    }
    const locale = await getConnectLocale(props.locale || "en_US");
    setRootEl((0, import_jsx_runtime25.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime25.jsx)(Modal, { size: "compact", open: true, setOpen: (value) => {
      if (!value) {
        closeModal();
      }
    }, style: {
      paddingBottom: props.onCustomClick ? spacing.md : "0px"
    }, children: (0, import_jsx_runtime25.jsx)(NetworkSelectorContent, { client: props.client, closeModal, chains: [activeChain], connectLocale: locale, networkSelector: {
      onCustomClick: props.onCustomClick,
      onSwitch: props.onSwitch,
      renderChain: props.renderChain,
      sections: props.sections
    } }) }) }));
  }, [setRootEl, closeModal, activeChain]);
  return {
    open: openNetworkSwitcher,
    close: closeModal
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/TransactionsScreen.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var import_react33 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/Tabs.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
function Tabs({ selected, onSelect, options, children }) {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime26.jsxs)("div", { children: [(0, import_jsx_runtime26.jsx)(Container, { flex: "row", center: "y", style: { width: "100%", borderRadius: radius.lg }, p: "xxs", bg: "secondaryButtonBg", children: options.map((option) => (0, import_jsx_runtime26.jsx)(Button, { variant: "accent", type: "button", onClick: () => onSelect(option.value), style: {
    flex: 1,
    paddingBlock: spacing.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: radius.md,
    backgroundColor: option.value === selected ? theme.colors.modalBg : "transparent"
  }, children: (0, import_jsx_runtime26.jsx)(Text, { color: option.value === selected ? "primaryText" : "secondaryText", style: { textAlign: "center" }, size: "sm", children: option.label }) }, option.value)) }), (0, import_jsx_runtime26.jsx)(Spacer, { y: "sm" }), children] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/CoinsIcon.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var CoinsIcon = (props) => {
  return (0, import_jsx_runtime27.jsxs)("svg", { width: props.size, height: props.size, role: "presentation", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime27.jsx)("path", { d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime27.jsx)("path", { d: "M18.0901 10.37C19.0354 10.7224 19.8766 11.3075 20.5358 12.0712C21.1951 12.8349 21.6512 13.7524 21.8618 14.7391C22.0725 15.7257 22.031 16.7495 21.7411 17.7158C21.4513 18.6822 20.9224 19.5598 20.2035 20.2676C19.4846 20.9754 18.5988 21.4905 17.6281 21.7652C16.6573 22.04 15.633 22.0655 14.6498 21.8395C13.6666 21.6134 12.7562 21.1431 12.0029 20.472C11.2496 19.8009 10.6777 18.9507 10.3401 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime27.jsx)("path", { d: "M7 6H8V10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime27.jsx)("path", { d: "M16.7101 13.88L17.4101 14.59L14.5901 17.41", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/FundsIcon.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var FundsIcon = ({ size: size4 }) => {
  return (0, import_jsx_runtime28.jsxs)("svg", { width: size4, height: size4, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: [(0, import_jsx_runtime28.jsx)("path", { d: "M14.001 8.00048C14.001 9.18726 13.649 10.3474 12.9897 11.3342C12.3304 12.3209 11.3932 13.09 10.2968 13.5442C9.20032 13.9984 7.99382 14.1172 6.82984 13.8857C5.66587 13.6541 4.59668 13.0826 3.7575 12.2435C2.91832 11.4043 2.34683 10.3351 2.1153 9.17111C1.88377 8.00713 2.0026 6.80064 2.45676 5.70419C2.91092 4.60775 3.68002 3.6706 4.66679 3.01126C5.65357 2.35192 6.8137 2 8.00048 2", stroke: "currentColor", strokeWidth: "1.2001", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime28.jsx)("path", { d: "M14.0005 2L8 8.00048", stroke: "currentColor", strokeWidth: "1.2001", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime28.jsx)("path", { d: "M10.3984 2H13.9987V5.60029", stroke: "currentColor", strokeWidth: "1.2001", strokeLinecap: "round", strokeLinejoin: "round" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/BuyTxHistory.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/BuyTxHistoryButton.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayTokenIcon.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/TokenIcon.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react21 = __toESM(require_react(), 1);
function TokenIcon(props) {
  const chainIconQuery = useChainIconUrl(props.chain);
  const tokenImage = (0, import_react21.useMemo)(() => {
    if (isNativeToken(props.token) || props.token.address === NATIVE_TOKEN_ADDRESS) {
      return chainIconQuery.url;
    }
    return props.token.icon;
  }, [props.token, chainIconQuery.url]);
  return (0, import_jsx_runtime29.jsx)(Img, { src: tokenImage || "", width: iconSize[props.size], height: iconSize[props.size], fallbackImage: genericTokenIcon, client: props.client });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/useSwapSupportedChains.js
async function fetchBuySupportedDestinations(client, isTestMode) {
  return withCache(async () => {
    const fetchWithHeaders = getClientFetch(client);
    const res = await fetchWithHeaders(`${getPaySupportedDestinations()}${isTestMode ? "?isTestMode=true" : ""}`);
    const data = await res.json();
    return data.result.map((item) => ({
      chain: defineChain({
        id: item.chainId
      }),
      tokens: item.tokens
    }));
  }, {
    cacheKey: "destination-tokens",
    cacheTime: 5 * 60 * 1e3
  });
}
function useBuySupportedDestinations(client, isTestMode) {
  return useQuery({
    queryKey: ["destination-tokens", client],
    queryFn: async () => {
      return fetchBuySupportedDestinations(client, isTestMode);
    }
  });
}
function useBuySupportedSources(options) {
  return useQuery({
    queryKey: ["source-tokens", options],
    queryFn: async () => {
      const fetchWithHeaders = getClientFetch(options.client);
      const baseUrl = getPaySupportedSources();
      const url = new URL(baseUrl);
      url.searchParams.append("destinationChainId", options.destinationChainId.toString());
      url.searchParams.append("destinationTokenAddress", options.destinationTokenAddress);
      const res = await fetchWithHeaders(url.toString());
      const data = await res.json();
      return data.result.map((item) => ({
        chain: defineChain({
          id: item.chainId
        }),
        tokens: item.tokens
      }));
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayTokenIcon.js
function PayTokenIcon(props) {
  var _a, _b, _c;
  const supportedDestinationsQuery = useBuySupportedDestinations(props.client);
  const token = props.token;
  const tokenIcon = !isNativeToken(token) ? (_c = (_b = (_a = supportedDestinationsQuery.data) == null ? void 0 : _a.find((c) => c.chain.id === props.chain.id)) == null ? void 0 : _b.tokens.find((t) => getAddress(t.address) === getAddress(token.address))) == null ? void 0 : _c.icon : void 0;
  return (0, import_jsx_runtime30.jsx)(TokenIcon, { token: isNativeToken(token) ? { nativeToken: true } : {
    address: token.address,
    icon: token.icon || tokenIcon
  }, chain: props.chain, client: props.client, size: props.size });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/statusMeta.js
function getBuyWithCryptoStatusMeta(cryptoStatus) {
  if (cryptoStatus.status === "NOT_FOUND") {
    return {
      status: "Unknown",
      color: "secondaryText"
    };
  }
  const subStatus = cryptoStatus.subStatus;
  const status = cryptoStatus.status;
  if (subStatus === "WAITING_BRIDGE") {
    return {
      status: "Bridging",
      color: "accentText",
      loading: true
    };
  }
  if (subStatus === "PARTIAL_SUCCESS") {
    return {
      status: "Incomplete",
      color: "secondaryText"
    };
  }
  if (status === "PENDING") {
    return {
      status: "Pending",
      color: "accentText",
      loading: true
    };
  }
  if (status === "FAILED") {
    return {
      status: "Failed",
      color: "danger"
    };
  }
  if (status === "COMPLETED") {
    return {
      status: "Completed",
      color: "success"
    };
  }
  return {
    status: "Unknown",
    color: "secondaryText"
  };
}
function getBuyWithFiatStatusMeta(fiatStatus) {
  const status = fiatStatus.status;
  switch (status) {
    case "CRYPTO_SWAP_FALLBACK": {
      return {
        status: "Incomplete",
        color: "danger",
        step: 2,
        progressStatus: "partialSuccess"
      };
    }
    case "CRYPTO_SWAP_IN_PROGRESS":
    case "PENDING_ON_RAMP_TRANSFER":
    case "ON_RAMP_TRANSFER_IN_PROGRESS":
    case "PENDING_PAYMENT": {
      return {
        status: "Pending",
        color: "accentText",
        loading: true,
        step: status === "CRYPTO_SWAP_IN_PROGRESS" ? 2 : 1,
        progressStatus: "pending"
      };
    }
    case "ON_RAMP_TRANSFER_COMPLETED":
    case "CRYPTO_SWAP_COMPLETED": {
      return {
        status: "Completed",
        // Is this actually completed though?
        color: "success",
        loading: true,
        step: status === "CRYPTO_SWAP_COMPLETED" ? 2 : 1,
        progressStatus: "completed"
      };
    }
    case "CRYPTO_SWAP_FAILED":
    case "CRYPTO_SWAP_REQUIRED": {
      return {
        status: "Action Required",
        color: "accentText",
        step: 2,
        progressStatus: "actionRequired"
      };
    }
    case "PAYMENT_FAILED":
    case "ON_RAMP_TRANSFER_FAILED": {
      return {
        status: "Failed",
        color: "danger",
        step: 1,
        progressStatus: "failed"
      };
    }
  }
  return {
    status: "Unknown",
    color: "secondaryText",
    step: 1,
    progressStatus: "unknown"
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/BuyTxHistoryButton.js
var BuyTxHistoryButtonHeight = "62px";
function BuyTxHistoryButton(props) {
  const statusMeta = props.txInfo.type === "swap" ? getBuyWithCryptoStatusMeta(props.txInfo.status) : getBuyWithFiatStatusMeta(props.txInfo.status);
  return (0, import_jsx_runtime31.jsxs)(TxButton, { onClick: props.onClick, variant: "secondary", fullWidth: true, style: {
    paddingBlock: spacing.sm
  }, children: [(0, import_jsx_runtime31.jsxs)(Container, { flex: "row", center: "y", gap: "sm", style: {
    flex: 1
  }, children: [(0, import_jsx_runtime31.jsx)(PayTokenIcon, { client: props.client, chain: getCachedChain(props.txInfo.status.quote.toToken.chainId), size: "md", token: {
    address: props.txInfo.status.quote.toToken.tokenAddress
  } }), (0, import_jsx_runtime31.jsxs)("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }, children: [(0, import_jsx_runtime31.jsx)(Container, { flex: "row", gap: "xs", center: "y", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime31.jsxs)(Text, { size: "sm", color: "primaryText", children: ["Buy", " ", formatNumber(Number(props.txInfo.type === "swap" ? props.txInfo.status.quote.toAmount : props.txInfo.status.quote.estimatedToTokenAmount), 6), " ", props.txInfo.status.quote.toToken.symbol] }) }), (0, import_jsx_runtime31.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime31.jsx)(Container, { flex: "row", center: "y", gap: "xxs", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime31.jsx)(ChainName, { chain: getCachedChain(props.txInfo.status.quote.toToken.chainId), size: "xs", client: props.client }) })] })] }), (0, import_jsx_runtime31.jsx)(Container, { flex: "row", gap: "xxs", center: "y", children: (0, import_jsx_runtime31.jsx)(Text, { size: "xs", color: statusMeta.color, children: statusMeta.status }) })] });
}
var TxButton = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    "&:hover": {
      background: theme.colors.secondaryButtonBg
    },
    height: BuyTxHistoryButtonHeight
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/useBuyTransactionsToShow.js
var import_react22 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getStatus.js
async function getBuyWithFiatStatus(params) {
  var _a;
  try {
    const queryParams = new URLSearchParams({
      intentId: params.intentId
    });
    const queryString = queryParams.toString();
    const url = `${getPayBuyWithFiatStatusEndpoint()}?${queryString}`;
    const response = await getClientFetch(params.client)(url);
    if (!response.ok) {
      (_a = response.body) == null ? void 0 : _a.cancel();
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()).result;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(`Fetch failed: ${error}`);
  }
}

// node_modules/thirdweb/dist/esm/pay/getBuyHistory.js
async function getBuyHistory(params) {
  var _a;
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("walletAddress", params.walletAddress);
    queryParams.append("start", params.start.toString());
    queryParams.append("count", params.count.toString());
    const queryString = queryParams.toString();
    const url = `${getPayBuyHistoryEndpoint()}?${queryString}`;
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

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyHistory.js
function useBuyHistory(params, queryParams) {
  return useQuery({
    ...queryParams,
    queryKey: ["getBuyHistory", params],
    queryFn: () => {
      if (!params) {
        throw new Error("params are required");
      }
      return getBuyHistory(params);
    },
    enabled: !!params
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/pendingSwapTx.js
var pendingTransactions = createStore([]);
var addPendingTx = (txInfo) => {
  const currentValue = pendingTransactions.getValue();
  pendingTransactions.setValue([txInfo, ...currentValue]);
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/useBuyTransactionsToShow.js
function useBuyTransactionsToShow(client) {
  const account = useActiveAccount();
  const [pageIndex, setPageIndex] = (0, import_react22.useState)(0);
  const txStatusList = [];
  const PAGE_SIZE = 10;
  const buyHistory = useBuyHistory({
    walletAddress: (account == null ? void 0 : account.address) || "",
    start: pageIndex * PAGE_SIZE,
    count: PAGE_SIZE,
    client
  }, {
    refetchInterval: 10 * 1e3
    // 10 seconds
  });
  const pendingTxStoreValue = (0, import_react22.useSyncExternalStore)(pendingTransactions.subscribe, pendingTransactions.getValue);
  const pendingStatusQueries = useQueries({
    queries: pendingTxStoreValue.map((tx) => {
      return {
        queryKey: ["pending-tx-status", tx],
        queryFn: async () => {
          if (tx.type === "swap") {
            const swapStatus = await getBuyWithCryptoStatus({
              client,
              transactionHash: tx.txHash
            });
            if (swapStatus.status === "NOT_FOUND" || swapStatus.status === "NONE") {
              return null;
            }
            return {
              type: "swap",
              status: swapStatus
            };
          }
          const fiatStatus = await getBuyWithFiatStatus({
            client,
            intentId: tx.intentId
          });
          if (fiatStatus.status === "NOT_FOUND" || fiatStatus.status === "NONE") {
            return null;
          }
          return {
            type: "fiat",
            status: fiatStatus
          };
        },
        refetchInterval: 10 * 1e3
        // 10 seconds
      };
    })
  });
  if (pendingStatusQueries.length > 0 && pageIndex === 0) {
    for (const query of pendingStatusQueries) {
      if (query.data) {
        const txStatusInfo = query.data;
        if (buyHistory.data) {
          if (txStatusInfo.type === "swap") {
            const isPresent = buyHistory.data.page.find((tx) => {
              var _a, _b;
              if ("buyWithCryptoStatus" in tx && tx.buyWithCryptoStatus.status !== "NOT_FOUND") {
                return ((_a = tx.buyWithCryptoStatus.source) == null ? void 0 : _a.transactionHash) === ((_b = txStatusInfo.status.source) == null ? void 0 : _b.transactionHash);
              }
              return false;
            });
            if (!isPresent) {
              txStatusList.push(txStatusInfo);
            }
          }
          if (txStatusInfo.type === "fiat") {
            const isPresent = buyHistory.data.page.find((tx) => {
              if ("buyWithFiatStatus" in tx && tx.buyWithFiatStatus.status !== "NOT_FOUND") {
                return tx.buyWithFiatStatus.intentId === txStatusInfo.status.intentId;
              }
              return false;
            });
            if (!isPresent) {
              txStatusList.push(txStatusInfo);
            }
          }
        } else {
          txStatusList.push(txStatusInfo);
        }
      }
    }
  }
  if (buyHistory.data) {
    for (const tx of buyHistory.data.page) {
      if ("buyWithCryptoStatus" in tx) {
        if (tx.buyWithCryptoStatus.status !== "NOT_FOUND" && tx.buyWithCryptoStatus.status !== "NONE") {
          txStatusList.push({
            type: "swap",
            status: tx.buyWithCryptoStatus
          });
        }
      } else {
        if (tx.buyWithFiatStatus.status !== "NOT_FOUND" && tx.buyWithFiatStatus.status !== "NONE") {
          txStatusList.push({
            type: "fiat",
            status: tx.buyWithFiatStatus
          });
        }
      }
    }
  }
  const hidePagination = !buyHistory.data || buyHistory.data && !buyHistory.data.hasNextPage && pageIndex === 0;
  return {
    pageIndex,
    setPageIndex,
    txInfosToShow: txStatusList,
    hidePagination,
    isLoading: buyHistory.isLoading,
    pagination: buyHistory.data ? {
      hasNextPage: buyHistory.data.hasNextPage
    } : void 0
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/BuyTxHistory.js
function PayTxHistoryList(props) {
  const { pageIndex, setPageIndex, txInfosToShow, hidePagination, isLoading, pagination } = useBuyTransactionsToShow(props.client);
  const noTransactions = txInfosToShow.length === 0;
  return (0, import_jsx_runtime32.jsxs)(Container, { scrollY: true, flex: "column", fullHeight: true, style: {
    width: "100%",
    minHeight: "250px",
    maxHeight: "370px",
    paddingBottom: spacing.lg
  }, children: [(0, import_jsx_runtime32.jsxs)(Container, { flex: "column", gap: "xs", expand: true, children: [noTransactions && !isLoading && (0, import_jsx_runtime32.jsxs)(Container, { flex: "column", gap: "md", center: "both", color: "secondaryText", style: {
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime32.jsx)(CrossCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime32.jsx)(Text, { children: "No Transactions" })] }), noTransactions && isLoading && (0, import_jsx_runtime32.jsx)(Container, { flex: "row", center: "both", style: {
    minHeight: "250px"
  }, children: (0, import_jsx_runtime32.jsx)(Spinner, { size: "xl", color: "accentText" }) }), txInfosToShow.length > 0 && (0, import_jsx_runtime32.jsx)(Container, { animate: "fadein", flex: "column", gap: "xs", children: txInfosToShow.map((txInfo) => {
    var _a;
    return (0, import_jsx_runtime32.jsx)(BuyTxHistoryButton, { txInfo, client: props.client, onClick: () => {
      props.onSelectTx(txInfo);
    } }, txInfo.type === "swap" ? (_a = txInfo.status.source) == null ? void 0 : _a.transactionHash : txInfo.status.intentId);
  }) }), isLoading && txInfosToShow.length > 0 && (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [(0, import_jsx_runtime32.jsx)(Skeleton, { width: "100%", height: BuyTxHistoryButtonHeight }), (0, import_jsx_runtime32.jsx)(Skeleton, { width: "100%", height: BuyTxHistoryButtonHeight }), (0, import_jsx_runtime32.jsx)(Skeleton, { width: "100%", height: BuyTxHistoryButtonHeight })] })] }), pagination && !hidePagination && (0, import_jsx_runtime32.jsx)(Container, { py: "md", children: (0, import_jsx_runtime32.jsxs)("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: spacing.sm
  }, children: [(0, import_jsx_runtime32.jsxs)(Button, { variant: "outline", gap: "xs", disabled: pageIndex === 0, "data-disabled": pageIndex === 0, style: {
    fontSize: fontSize.sm,
    paddingBlock: spacing.sm
  }, onClick: () => {
    setPageIndex((prev) => prev - 1);
  }, children: [(0, import_jsx_runtime32.jsx)(ArrowRightIcon, { width: iconSize.sm, height: iconSize.sm, style: {
    transform: "rotate(180deg)"
  } }), "Prev"] }), (0, import_jsx_runtime32.jsxs)(Button, { variant: "outline", gap: "xs", disabled: !pagination.hasNextPage, "data-disabled": !pagination.hasNextPage, style: {
    fontSize: fontSize.sm,
    paddingBlock: spacing.sm
  }, onClick: () => {
    setPageIndex((prev) => prev + 1);
  }, children: ["Next", (0, import_jsx_runtime32.jsx)(ArrowRightIcon, { width: iconSize.sm, height: iconSize.sm })] })] }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/TxDetailsScreen.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/FiatDetailsScreen.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var import_react31 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatStatus.js
function useBuyWithFiatStatus(params) {
  return useQuery({
    queryKey: ["useBuyWithFiatStatus", params],
    queryFn: async () => {
      if (!params) {
        throw new Error("No params provided");
      }
      return getBuyWithFiatStatus(params);
    },
    enabled: !!params,
    refetchInterval: (query) => {
      const data = query.state.data;
      const status = data == null ? void 0 : data.status;
      if (status === "ON_RAMP_TRANSFER_FAILED" || status === "PAYMENT_FAILED" || status === "CRYPTO_SWAP_COMPLETED" || // onRampToken and toToken being the same means there is no additional swap step
      status === "ON_RAMP_TRANSFER_COMPLETED" && (data == null ? void 0 : data.quote.toToken.chainId) === (data == null ? void 0 : data.quote.onRampToken.chainId) && (data == null ? void 0 : data.quote.toToken.tokenAddress.toLowerCase()) === (data == null ? void 0 : data.quote.onRampToken.tokenAddress.toLowerCase())) {
        return false;
      }
      return 5e3;
    },
    refetchIntervalInBackground: true,
    retry: true
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatTxDetailsTable.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/TokenInfoRow.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react23 = __toESM(require_react(), 1);
function TokenInfoRow(props) {
  const chainObj = (0, import_react23.useMemo)(() => getCachedChain(props.chainId), [props.chainId]);
  const { name } = useChainName(chainObj);
  return (0, import_jsx_runtime33.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime33.jsx)(Text, { size: "sm", children: props.label }), (0, import_jsx_runtime33.jsxs)(Container, { flex: "column", gap: "xxs", style: {
    alignItems: "flex-end"
  }, children: [(0, import_jsx_runtime33.jsxs)(Container, { flex: "row", gap: "xs", center: "y", children: [(0, import_jsx_runtime33.jsx)(PayTokenIcon, { chain: chainObj, size: "sm", token: {
    address: props.tokenAddress
  }, client: props.client }), (0, import_jsx_runtime33.jsxs)(Text, { color: "primaryText", children: [formatNumber(Number(props.tokenAmount), 6), " ", props.tokenSymbol] })] }), (0, import_jsx_runtime33.jsx)(Text, { size: "sm", children: name })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/currencies.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/CADIcon.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var CADIcon = (props) => {
  return (0, import_jsx_runtime34.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 512 512", "aria-hidden": "true", children: [(0, import_jsx_runtime34.jsx)("mask", { id: "a", children: (0, import_jsx_runtime34.jsx)("circle", { cx: "256", cy: "256", r: "256", fill: "#fff" }) }), (0, import_jsx_runtime34.jsxs)("g", { mask: "url(#a)", children: [(0, import_jsx_runtime34.jsx)("path", { fill: "#d80027", d: "M0 0v512h144l112-64 112 64h144V0H368L256 64 144 0Z" }), (0, import_jsx_runtime34.jsx)("path", { fill: "#eee", d: "M144 0h224v512H144Z" }), (0, import_jsx_runtime34.jsx)("path", { fill: "#d80027", d: "m301 289 44-22-22-11v-22l-45 22 23-44h-23l-22-34-22 33h-23l23 45-45-22v22l-22 11 45 22-12 23h45v33h22v-33h45z" })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/EURIcon.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var EURIcon = (props) => {
  return (0, import_jsx_runtime35.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 512 512", "aria-hidden": "true", children: [(0, import_jsx_runtime35.jsx)("mask", { id: "a", children: (0, import_jsx_runtime35.jsx)("circle", { cx: "256", cy: "256", r: "256", fill: "#fff" }) }), (0, import_jsx_runtime35.jsxs)("g", { mask: "url(#a)", children: [(0, import_jsx_runtime35.jsx)("path", { fill: "#0052b4", d: "M0 0h512v512H0z" }), (0, import_jsx_runtime35.jsx)("path", { fill: "#ffda44", d: "m256 100.2 8.3 25.5H291l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 8.3-25.6-21.7-15.7h26.8zm-110.2 45.6 24 12.2 18.9-19-4.2 26.5 23.9 12.2-26.5 4.2-4.2 26.5-12.2-24-26.5 4.3 19-19zM100.2 256l25.5-8.3V221l15.7 21.7 25.6-8.3-15.8 21.7 15.8 21.7-25.6-8.3-15.7 21.7v-26.8zm45.6 110.2 12.2-24-19-18.9 26.5 4.2 12.2-23.9 4.2 26.5 26.5 4.2-24 12.2 4.3 26.5-19-19zM256 411.8l-8.3-25.5H221l21.7-15.7-8.3-25.6 21.7 15.8 21.7-15.8-8.3 25.6 21.7 15.7h-26.8zm110.2-45.6-24-12.2-18.9 19 4.2-26.5-23.9-12.2 26.5-4.2 4.2-26.5 12.2 24 26.5-4.3-19 19zM411.8 256l-25.5 8.3V291l-15.7-21.7-25.6 8.3 15.8-21.7-15.8-21.7 25.6 8.3 15.7-21.7v26.8zm-45.6-110.2-12.2 24 19 18.9-26.5-4.2-12.2 23.9-4.2-26.5-26.5-4.2 24-12.2-4.3-26.5 19 19z" })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/GBPIcon.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var GBPIcon = (props) => {
  return (0, import_jsx_runtime36.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "Layer_1", x: "0px", y: "0px", width: props.size, height: props.size, viewBox: "0 0 512 512", "aria-hidden": "true", children: [(0, import_jsx_runtime36.jsx)("circle", { fill: "#F0F0F0", cx: "256", cy: "256", r: "256" }), (0, import_jsx_runtime36.jsxs)("g", { children: [(0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#0052B4", d: "M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z" })] }), (0, import_jsx_runtime36.jsxs)("g", { children: [(0, import_jsx_runtime36.jsx)("path", { fill: "#D80027", d: "M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#D80027", d: "M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#D80027", d: "M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#D80027", d: "M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z" }), (0, import_jsx_runtime36.jsx)("path", { fill: "#D80027", d: "M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z" })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/JPYIcon.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var JPYIcon = (props) => {
  return (0, import_jsx_runtime37.jsx)("svg", { width: props.size, height: props.size, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: (0, import_jsx_runtime37.jsxs)("g", { fill: "none", "fill-rule": "evenodd", children: [(0, import_jsx_runtime37.jsx)("circle", { cx: "16", cy: "16", fill: "#a81b1b", r: "16" }), (0, import_jsx_runtime37.jsx)("path", { d: "M17.548 18.711v1.878h5.063v2.288h-5.063V25.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 7.5h3.752l4.8 7.534L20.853 7.5H24.5l-6.086 8.923h4.197v2.288z", fill: "#ffffff" })] }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/USDIcon.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var USDIcon = (props) => {
  return (0, import_jsx_runtime38.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: props.size, height: props.size, x: "0px", y: "0px", viewBox: "0 0 512 512", "aria-hidden": "true", children: [(0, import_jsx_runtime38.jsx)("circle", { fill: "#F0F0F0", cx: "256", cy: "256", r: "256" }), (0, import_jsx_runtime38.jsxs)("g", { children: [(0, import_jsx_runtime38.jsx)("path", { fill: "#D80027", d: "M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z" }), (0, import_jsx_runtime38.jsx)("path", { fill: "#D80027", d: "M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z" }), (0, import_jsx_runtime38.jsx)("path", { fill: "#D80027", d: "M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z" }), (0, import_jsx_runtime38.jsx)("path", { fill: "#D80027", d: "M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819   C15.236,346.596,24.993,369.036,37.574,389.565z" })] }), (0, import_jsx_runtime38.jsx)("path", { fill: "#0052B4", d: "M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037  C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941  c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444  C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4  l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z   M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822  l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509  l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/currencies.js
var usdCurrency = {
  shorthand: "USD",
  name: "US Dollar",
  icon: USDIcon
};
var currencies = [
  usdCurrency,
  {
    shorthand: "CAD",
    name: "Canadian Dollar",
    icon: CADIcon
  },
  {
    shorthand: "GBP",
    name: "British Pound",
    icon: GBPIcon
  },
  {
    shorthand: "EUR",
    name: "Euro",
    icon: EURIcon
  },
  {
    shorthand: "JPY",
    name: "Japanese Yen",
    icon: JPYIcon
  }
];
function getCurrencyMeta(shorthand) {
  return currencies.find((currency) => currency.shorthand.toLowerCase() === shorthand.toLowerCase()) ?? {
    // This should never happen
    icon: UnknownCurrencyIcon,
    name: shorthand,
    shorthand
  };
}
var UnknownCurrencyIcon = (props) => {
  return (0, import_jsx_runtime39.jsx)(RadiobuttonIcon, { width: props.size, height: props.size });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatTxDetailsTable.js
function OnRampTxDetailsTable(props) {
  var _a, _b, _c, _d;
  const onRampExplorers = useChainExplorers(getCachedChain(props.token.chainId));
  const onrampTxHash = (_a = props.statusMeta) == null ? void 0 : _a.txHash;
  const currencyMeta = getCurrencyMeta(props.fiat.currencySymbol);
  const lineSpacer = (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime40.jsx)(Line, {}), (0, import_jsx_runtime40.jsx)(Spacer, { y: "md" })] });
  return (0, import_jsx_runtime40.jsxs)("div", { children: [(0, import_jsx_runtime40.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime40.jsx)(Text, { children: "Pay" }), (0, import_jsx_runtime40.jsx)(Container, { flex: "column", gap: "xxs", style: {
    alignItems: "flex-end"
  }, children: (0, import_jsx_runtime40.jsxs)(Container, { flex: "row", gap: "xs", center: "y", children: [(0, import_jsx_runtime40.jsx)(currencyMeta.icon, { size: iconSize.sm }), (0, import_jsx_runtime40.jsxs)(Text, { color: "primaryText", children: [formatNumber(Number(props.fiat.amount), 2), " ", props.fiat.currencySymbol] })] }) })] }), lineSpacer, (0, import_jsx_runtime40.jsx)(TokenInfoRow, { chainId: props.token.chainId, client: props.client, label: "Receive", tokenAmount: props.token.amount, tokenSymbol: props.token.symbol, tokenAddress: props.token.address }), props.statusMeta && (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [lineSpacer, (0, import_jsx_runtime40.jsxs)(Container, { flex: "row", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime40.jsx)(Text, { children: "Status" }), (0, import_jsx_runtime40.jsx)(Container, { flex: "row", gap: "xs", center: "y", children: (0, import_jsx_runtime40.jsx)(Text, { color: props.statusMeta.color, children: props.statusMeta.text }) })] })] }), lineSpacer, onrampTxHash && ((_c = (_b = onRampExplorers.explorers) == null ? void 0 : _b[0]) == null ? void 0 : _c.url) && (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime40.jsxs)(ButtonLink, { fullWidth: true, variant: "outline", href: formatExplorerTxUrl((_d = onRampExplorers.explorers[0]) == null ? void 0 : _d.url, onrampTxHash), target: "_blank", gap: "xs", style: {
    fontSize: fontSize.sm
  }, children: ["View on Explorer", (0, import_jsx_runtime40.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/PostOnRampSwapFlow.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var import_react30 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatSteps.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react25 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/Stepper.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
function StepIcon(props) {
  return (0, import_jsx_runtime41.jsx)(Container, { flex: "row", center: "both", color: props.isDone ? "success" : props.isActive ? "accentText" : "secondaryText", children: (0, import_jsx_runtime41.jsx)(Circle, { children: props.isDone ? (0, import_jsx_runtime41.jsx)(CheckIcon, { width: iconSize.sm, height: iconSize.sm }) : (0, import_jsx_runtime41.jsx)(PulsingDot, { "data-active": props.isActive }) }) });
}
function Step(props) {
  return (0, import_jsx_runtime41.jsxs)(Container, { flex: "row", center: "y", gap: "xs", style: {
    fontSize: fontSize.sm
  }, color: props.isDone ? "success" : props.isActive ? "accentText" : "secondaryText", children: [(0, import_jsx_runtime41.jsx)(StepIcon, { isDone: props.isDone, isActive: props.isActive }), props.label] });
}
var pulseAnimation = keyframes`
0% {
  opacity: 1;
  transform: scale(0.5);
}
100% {
  opacity: 0;
  transform: scale(1.5);
}
`;
var PulsingDot = StyledDiv(() => {
  return {
    background: "currentColor",
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    '&[data-active="true"]': {
      animation: `${pulseAnimation} 1s infinite`
    }
  };
});
var Circle = StyledDiv(() => {
  return {
    border: "1px solid currentColor",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatSteps.js
function fiatQuoteToPartialQuote(quote) {
  const data = {
    fromCurrencyAmount: quote.fromCurrencyWithFees.amount,
    fromCurrencySymbol: quote.fromCurrencyWithFees.currencySymbol,
    onRampTokenAmount: quote.onRampToken.amount,
    toTokenAmount: quote.estimatedToAmountMin,
    onRampToken: {
      chainId: quote.onRampToken.token.chainId,
      tokenAddress: quote.onRampToken.token.tokenAddress,
      name: quote.onRampToken.token.name,
      symbol: quote.onRampToken.token.symbol
    },
    toToken: {
      chainId: quote.toToken.chainId,
      tokenAddress: quote.toToken.tokenAddress,
      name: quote.toToken.name,
      symbol: quote.toToken.symbol
    }
  };
  return data;
}
function FiatSteps(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const statusMeta = props.status ? getBuyWithFiatStatusMeta(props.status) : void 0;
  const { toToken: toTokenMeta, onRampToken: onRampTokenMeta, onRampTokenAmount, fromCurrencySymbol, fromCurrencyAmount, toTokenAmount } = props.partialQuote;
  const currency = getCurrencyMeta(fromCurrencySymbol);
  const isPartialSuccess = (statusMeta == null ? void 0 : statusMeta.progressStatus) === "partialSuccess";
  const toChain = (0, import_react25.useMemo)(() => getCachedChain(toTokenMeta.chainId), [toTokenMeta.chainId]);
  const destinationChain = (0, import_react25.useMemo)(() => {
    var _a2, _b2, _c2;
    if (((_a2 = props.status) == null ? void 0 : _a2.status) !== "NOT_FOUND" && ((_b2 = props.status) == null ? void 0 : _b2.destination)) {
      return getCachedChain((_c2 = props.status) == null ? void 0 : _c2.destination.token.chainId);
    }
    return void 0;
  }, [props.status]);
  const toToken = (0, import_react25.useMemo)(() => {
    if (toTokenMeta.tokenAddress === NATIVE_TOKEN_ADDRESS) {
      return NATIVE_TOKEN;
    }
    const tokenInfo = {
      address: toTokenMeta.tokenAddress,
      name: toTokenMeta.name || "",
      symbol: toTokenMeta.symbol || ""
      // TODO: when icon is available in endpoint
      // icon: toTokenMeta.icon
    };
    return tokenInfo;
  }, [toTokenMeta]);
  const onRampChain = (0, import_react25.useMemo)(() => getCachedChain(onRampTokenMeta.chainId), [onRampTokenMeta.chainId]);
  const onRampToken = (0, import_react25.useMemo)(() => {
    if (onRampTokenMeta.tokenAddress === NATIVE_TOKEN_ADDRESS) {
      return NATIVE_TOKEN;
    }
    const tokenInfo = {
      address: onRampTokenMeta.tokenAddress,
      name: onRampTokenMeta.name || "",
      symbol: onRampTokenMeta.symbol || ""
      // TODO: when icon is available in endpoint
      // icon: onRampTokenMeta.icon,
    };
    return tokenInfo;
  }, [onRampTokenMeta]);
  const onRampName = useChainName(onRampChain);
  const onRampExplorers = useChainExplorers(onRampChain);
  const toChainName = useChainName(toChain);
  const toChainExplorers = useChainExplorers(toChain);
  const destinationName = useChainName(destinationChain);
  const onRampTokenInfo = (0, import_jsx_runtime42.jsx)("div", { children: (0, import_jsx_runtime42.jsxs)(Text, { color: "primaryText", size: "sm", children: [formatNumber(Number(onRampTokenAmount), 6), " ", (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: onRampToken, chain: onRampChain, size: "sm", inline: true })] }) });
  const fiatIcon = (0, import_jsx_runtime42.jsx)(currency.icon, { size: iconSize.sm });
  const onRampTokenIcon = (0, import_jsx_runtime42.jsx)(PayTokenIcon, { token: onRampToken, chain: onRampChain, size: "sm", client: props.client });
  const toTokenIcon = (0, import_jsx_runtime42.jsx)(PayTokenIcon, { token: toToken, chain: toChain, size: "sm", client: props.client });
  const onRampChainInfo = (0, import_jsx_runtime42.jsx)(Text, { size: "xs", children: onRampName.name });
  const partialSuccessToTokenInfo = ((_a = props.status) == null ? void 0 : _a.status) === "CRYPTO_SWAP_FALLBACK" && props.status.destination ? (0, import_jsx_runtime42.jsxs)("div", { children: [(0, import_jsx_runtime42.jsxs)(Text, { color: "secondaryText", size: "sm", inline: true, style: {
    textDecoration: "line-through"
  }, children: [formatNumber(Number(toTokenAmount), 6), " ", (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: toToken, chain: toChain, size: "sm", inline: true, color: "secondaryText" })] }), " ", (0, import_jsx_runtime42.jsxs)(Text, { color: "danger", size: "sm", inline: true, children: [formatNumber(Number(props.status.destination.amount), 6), " ", (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: {
    address: props.status.destination.token.tokenAddress,
    name: props.status.destination.token.name || "",
    symbol: props.status.destination.token.symbol || ""
  }, chain: toChain, size: "sm", inline: true, color: "danger" })] })] }) : null;
  const toTokenInfo = partialSuccessToTokenInfo || (0, import_jsx_runtime42.jsxs)(Text, { color: "primaryText", size: "sm", children: [formatNumber(Number(toTokenAmount), 6), (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: toToken, chain: toChain, size: "sm", inline: true })] });
  const partialSuccessToChainInfo = ((_b = props.status) == null ? void 0 : _b.status) === "CRYPTO_SWAP_FALLBACK" && props.status.destination && props.status.destination.token.chainId !== props.status.quote.toToken.chainId ? (0, import_jsx_runtime42.jsxs)("div", { children: [(0, import_jsx_runtime42.jsx)(Text, { size: "xs", inline: true, style: {
    textDecoration: "line-through"
  }, children: toChainName.name }), " ", (0, import_jsx_runtime42.jsx)(Text, { size: "xs", inline: true, children: destinationName.name })] }) : null;
  const toTokehChainInfo = partialSuccessToChainInfo || (0, import_jsx_runtime42.jsx)(Text, { size: "xs", children: toChainName.name });
  const onRampTxHash = ((_c = props.status) == null ? void 0 : _c.status) !== "NOT_FOUND" ? (_e = (_d = props.status) == null ? void 0 : _d.source) == null ? void 0 : _e.transactionHash : void 0;
  const toTokenTxHash = ((_f = props.status) == null ? void 0 : _f.status) !== "NOT_FOUND" ? (_h = (_g = props.status) == null ? void 0 : _g.destination) == null ? void 0 : _h.transactionHash : void 0;
  const showContinueBtn = !props.status || props.status.status === "CRYPTO_SWAP_REQUIRED" || props.status.status === "CRYPTO_SWAP_FAILED";
  function getStep1State() {
    if (!statusMeta) {
      if (props.step === 2) {
        return "completed";
      }
      return "actionRequired";
    }
    if (statusMeta.step === 2) {
      return "completed";
    }
    return statusMeta.progressStatus;
  }
  function getStep2State() {
    if (!statusMeta) {
      if (props.step === 2) {
        return "actionRequired";
      }
      return void 0;
    }
    if (statusMeta.step === 2) {
      return statusMeta.progressStatus;
    }
    return void 0;
  }
  return (0, import_jsx_runtime42.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime42.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime42.jsx)(PaymentStep, { title: (0, import_jsx_runtime42.jsxs)(Text, { color: "primaryText", size: "md", children: ["Get", " ", (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: onRampToken, chain: onRampChain, size: "md", inline: true }), " ", "with ", props.partialQuote.fromCurrencySymbol] }), step: 1, from: {
    icon: fiatIcon,
    primaryText: (0, import_jsx_runtime42.jsxs)(Text, { color: "primaryText", size: "sm", children: [formatNumber(Number(fromCurrencyAmount), 6), " ", fromCurrencySymbol] })
  }, to: {
    icon: onRampTokenIcon,
    primaryText: onRampTokenInfo,
    secondaryText: onRampChainInfo
  }, state: getStep1State(), explorer: ((_i = onRampExplorers.explorers[0]) == null ? void 0 : _i.url) && onRampTxHash ? {
    label: "View on Explorer",
    url: formatExplorerTxUrl((_j = onRampExplorers.explorers[0]) == null ? void 0 : _j.url, onRampTxHash)
  } : void 0 }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime42.jsx)(PaymentStep, { title: (0, import_jsx_runtime42.jsxs)(Text, { color: "primaryText", size: "md", children: ["Convert", " ", (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: onRampToken, chain: onRampChain, size: "md", inline: true }), " ", "to ", (0, import_jsx_runtime42.jsx)(TokenSymbol, { token: toToken, chain: toChain, size: "md", inline: true })] }), step: 2, from: {
    icon: onRampTokenIcon,
    primaryText: onRampTokenInfo,
    secondaryText: onRampChainInfo
  }, to: {
    icon: toTokenIcon,
    primaryText: toTokenInfo,
    secondaryText: toTokehChainInfo
  }, state: getStep2State(), explorer: ((_k = toChainExplorers.explorers[0]) == null ? void 0 : _k.url) && toTokenTxHash ? {
    label: "View on Explorer",
    url: formatExplorerTxUrl((_l = toChainExplorers.explorers[0]) == null ? void 0 : _l.url, toTokenTxHash)
  } : void 0 }), isPartialSuccess && props.status && props.status.status !== "NOT_FOUND" && props.status.source && props.status.destination && (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [(0, import_jsx_runtime42.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime42.jsxs)(Text, { color: "danger", size: "sm", center: true, children: ["Expected ", (_m = props.status.source) == null ? void 0 : _m.token.symbol, ", Got", " ", (_n = props.status.destination) == null ? void 0 : _n.token.symbol, " instead"] }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "sm" })] }), showContinueBtn && (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [(0, import_jsx_runtime42.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime42.jsx)(Button, { variant: "accent", onClick: props.onContinue, fullWidth: true, children: "Continue" })] })] });
}
function PaymentStep(props) {
  return (0, import_jsx_runtime42.jsxs)(StepContainer, { state: props.state, children: [(0, import_jsx_runtime42.jsxs)(Text, { size: "sm", children: ["Step ", props.step] }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "sm" }), props.title, (0, import_jsx_runtime42.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime42.jsx)(Line, {}), (0, import_jsx_runtime42.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime42.jsx)(PaymentSubStep, { ...props.from }), (0, import_jsx_runtime42.jsxs)(Container, { color: "borderColor", style: {
    paddingLeft: "18px",
    position: "relative",
    marginBlock: "3px"
  }, children: [(0, import_jsx_runtime42.jsx)("div", { style: {
    height: "18px",
    width: "2px",
    backgroundColor: "currentColor",
    transform: "translateX(-50%)"
  } }), (0, import_jsx_runtime42.jsx)(TriangleDownIcon, { width: iconSize.sm, height: iconSize.sm, style: {
    position: "absolute",
    bottom: "0",
    transform: "translate(-50%, 50%)"
  } })] }), (0, import_jsx_runtime42.jsx)(PaymentSubStep, { ...props.to }), props.explorer && (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [(0, import_jsx_runtime42.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime42.jsxs)(ButtonLink, { variant: "outline", fullWidth: true, href: props.explorer.url, style: {
    fontSize: fontSize.xs,
    padding: spacing.xs
  }, gap: "xxs", target: "_blank", children: [props.explorer.label, (0, import_jsx_runtime42.jsx)(ExternalLinkIcon, { width: iconSize.xs, height: iconSize.xs })] })] })] });
}
function PaymentSubStep(props) {
  return (0, import_jsx_runtime42.jsxs)(Container, { flex: "row", gap: "sm", center: "y", style: {
    flexWrap: "nowrap"
  }, children: [(0, import_jsx_runtime42.jsx)(Container, { p: "xs", borderColor: "borderColor", flex: "row", center: "both", style: {
    borderStyle: "solid",
    borderWidth: "1.5px",
    borderRadius: radius.lg
  }, children: props.icon }), (0, import_jsx_runtime42.jsxs)(Container, { flex: "column", gap: "xxs", children: [props.primaryText, props.secondaryText] })] });
}
function StepContainer(props) {
  let color = "borderColor";
  let text;
  if (props.state === "pending") {
    text = "Pending";
    color = "accentText";
  } else if (props.state === "actionRequired") {
    color = "accentText";
  } else if (props.state === "completed") {
    text = "Completed";
    color = "success";
  } else if (props.state === "failed") {
    color = "danger";
    text = "Failed";
  } else if (props.state === "partialSuccess") {
    color = "danger";
    text = "Incomplete";
  }
  return (0, import_jsx_runtime42.jsxs)(Container, { bg: "tertiaryBg", borderColor: color === "success" ? "borderColor" : color, py: "sm", px: "md", style: {
    borderRadius: radius.lg,
    alignItems: "flex-start",
    borderWidth: "1px",
    borderStyle: "solid",
    position: "relative"
  }, children: [props.children, (0, import_jsx_runtime42.jsxs)("div", { style: {
    position: "absolute",
    right: spacing.sm,
    top: spacing.sm,
    display: "flex",
    gap: spacing.xs,
    alignItems: "center"
  }, children: [props.state && text && (0, import_jsx_runtime42.jsx)(Text, { size: "sm", color, children: text }), (props.state === "actionRequired" || props.state === "completed") && (0, import_jsx_runtime42.jsx)(StepIcon, { isActive: props.state === "actionRequired", isDone: props.state === "completed" }), props.state === "pending" && (0, import_jsx_runtime42.jsx)(Spinner, { color: "accentText", size: "sm" }), props.state === "failed" && (0, import_jsx_runtime42.jsx)(Container, { color: "danger", flex: "row", center: "both", children: (0, import_jsx_runtime42.jsx)(Cross1Icon, { width: iconSize.sm, height: iconSize.sm }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/PostOnRampSwap.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var import_react29 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getPostOnRampQuote.js
async function getPostOnRampQuote({ client, buyWithFiatStatus }) {
  if (buyWithFiatStatus.status === "NOT_FOUND") {
    throw new Error("Invalid buyWithFiatStatus");
  }
  return getBuyWithCryptoQuote({
    client,
    intentId: buyWithFiatStatus.intentId,
    // onramp always happens to fromAddress, and then swap is done from - fromAddress to toAddress
    fromAddress: buyWithFiatStatus.fromAddress,
    toAddress: buyWithFiatStatus.toAddress,
    fromChainId: buyWithFiatStatus.quote.onRampToken.chainId,
    fromTokenAddress: buyWithFiatStatus.quote.onRampToken.tokenAddress,
    toChainId: buyWithFiatStatus.quote.toToken.chainId,
    toTokenAddress: buyWithFiatStatus.quote.toToken.tokenAddress,
    toAmount: buyWithFiatStatus.quote.estimatedToTokenAmount
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapFlow.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var import_react28 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/ConfirmationScreen.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/StepBar.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function StepBar(props) {
  return (0, import_jsx_runtime43.jsx)(Container, { bg: "tertiaryBg", flex: "row", style: {
    height: "8px",
    borderRadius: radius.lg
  }, children: (0, import_jsx_runtime43.jsx)(Container, { bg: "accentText", style: {
    width: `${props.currentStep / props.steps * 95}%`,
    borderRadius: radius.lg
  }, children: null }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/formatSeconds.js
function formatSeconds(seconds) {
  if (seconds > 3600) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    return `${hours} Hours ${minutes} Minutes`;
  }
  if (seconds > 60) {
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} Minutes`;
  }
  return `${seconds}s`;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/ConfirmationScreen.js
function SwapConfirmationScreen(props) {
  const isApprovalRequired = props.quote.approval !== void 0;
  const initialStep = isApprovalRequired ? "approval" : "swap";
  const [step, setStep] = (0, import_react26.useState)(initialStep);
  const [status, setStatus] = (0, import_react26.useState)("idle");
  const receiver = props.quote.swapDetails.toAddress;
  const sender = props.quote.swapDetails.fromAddress;
  const isDifferentRecipient = receiver.toLowerCase() !== sender.toLowerCase();
  const ensName = useEnsName({ client: props.client, address: receiver });
  return (0, import_jsx_runtime44.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime44.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }), props.isFiatFlow ? (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [(0, import_jsx_runtime44.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime44.jsx)(StepBar, { steps: 2, currentStep: 2 }), (0, import_jsx_runtime44.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime44.jsxs)(Text, { size: "xs", children: ["Step 2 of 2 - Converting ", props.fromTokenSymbol, " to", " ", props.toTokenSymbol] }), (0, import_jsx_runtime44.jsx)(Spacer, { y: "md" })] }) : (0, import_jsx_runtime44.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime44.jsx)(ConfirmItem, { label: "Pay", children: (0, import_jsx_runtime44.jsx)(RenderTokenInfo, { chain: props.fromChain, amount: String(formatNumber(Number(props.fromAmount), 6)), symbol: props.fromTokenSymbol || "", token: props.fromToken, client: props.client }) }), !isDifferentRecipient && (0, import_jsx_runtime44.jsx)(ConfirmItem, { label: "Receive", children: (0, import_jsx_runtime44.jsx)(RenderTokenInfo, { chain: props.toChain, amount: String(formatNumber(Number(props.toAmount), 6)), symbol: props.toTokenSymbol, token: props.toToken, client: props.client }) }), (0, import_jsx_runtime44.jsx)(ConfirmItem, { label: "Fees", children: (0, import_jsx_runtime44.jsx)(SwapFeesRightAligned, { quote: props.quote }) }), (0, import_jsx_runtime44.jsx)(ConfirmItem, { label: "Time", children: (0, import_jsx_runtime44.jsxs)(Text, { size: "sm", color: "primaryText", children: ["~", formatSeconds(props.quote.swapDetails.estimated.durationSeconds || 0)] }) }), isDifferentRecipient && (0, import_jsx_runtime44.jsx)(ConfirmItem, { label: "Receiver", children: (0, import_jsx_runtime44.jsx)(Text, { color: "primaryText", size: "sm", children: ensName.data || shortenAddress(receiver) }) }), (0, import_jsx_runtime44.jsx)(Spacer, { y: "xl" }), isApprovalRequired && (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [(0, import_jsx_runtime44.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime44.jsxs)(Container, { gap: "sm", flex: "row", style: {
    justifyContent: "space-between"
  }, center: "y", color: "accentText", children: [(0, import_jsx_runtime44.jsx)(Step, { isDone: step === "swap", isActive: step === "approval", label: step === "approval" ? "Approve" : "Approved" }), (0, import_jsx_runtime44.jsx)(ConnectorLine, {}), (0, import_jsx_runtime44.jsx)(Step, { isDone: false, label: "Confirm", isActive: step === "swap" })] }), (0, import_jsx_runtime44.jsx)(Spacer, { y: "lg" })] }), status === "error" && (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [(0, import_jsx_runtime44.jsxs)(Container, { flex: "row", gap: "xs", center: "both", color: "danger", children: [(0, import_jsx_runtime44.jsx)(CrossCircledIcon, { width: iconSize.sm, height: iconSize.sm }), (0, import_jsx_runtime44.jsx)(Text, { color: "danger", size: "sm", children: step === "approval" ? "Failed to Approve" : "Failed to Confirm" })] }), (0, import_jsx_runtime44.jsx)(Spacer, { y: "md" })] }), props.payer.chain.id !== props.fromChain.id ? (0, import_jsx_runtime44.jsx)(SwitchNetworkButton, { fullWidth: true, variant: "accent", switchChain: async () => {
    await props.payer.wallet.switchChain(props.fromChain);
  } }) : (0, import_jsx_runtime44.jsxs)(Button, { variant: "accent", fullWidth: true, disabled: status === "pending", onClick: async () => {
    if (step === "approval" && props.quote.approval) {
      try {
        setStatus("pending");
        trackPayEvent({
          event: "prompt_swap_approval",
          client: props.client,
          walletAddress: props.payer.account.address,
          walletType: props.payer.wallet.id,
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          fromAmount: props.quote.swapDetails.fromAmountWei,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          toAmount: props.quote.swapDetails.toAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          dstChainId: props.quote.swapDetails.toToken.chainId
        });
        const tx = await sendTransaction({
          account: props.payer.account,
          transaction: props.quote.approval
        });
        await waitForReceipt({ ...tx, maxBlocksWaitTime: 50 });
        trackPayEvent({
          event: "swap_approval_success",
          client: props.client,
          walletAddress: props.payer.account.address,
          walletType: props.payer.wallet.id,
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          fromAmount: props.quote.swapDetails.fromAmountWei,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          toAmount: props.quote.swapDetails.toAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          dstChainId: props.quote.swapDetails.toToken.chainId
        });
        setStep("swap");
        setStatus("idle");
      } catch (e) {
        console.error(e);
        setStatus("error");
      }
    }
    if (step === "swap") {
      setStatus("pending");
      try {
        let tx = props.quote.transactionRequest;
        if (props.payer.wallet.id === "inApp" || props.payer.wallet.id === "embedded") {
          tx = {
            ...props.quote.transactionRequest,
            gasPrice: void 0
          };
        }
        trackPayEvent({
          event: "prompt_swap_execution",
          client: props.client,
          walletAddress: props.payer.account.address,
          walletType: props.payer.wallet.id,
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          fromAmount: props.quote.swapDetails.fromAmountWei,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          toAmount: props.quote.swapDetails.toAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          dstChainId: props.quote.swapDetails.toToken.chainId
        });
        const _swapTx = await sendTransaction({
          account: props.payer.account,
          transaction: tx
        });
        await waitForReceipt({ ..._swapTx, maxBlocksWaitTime: 50 });
        trackPayEvent({
          event: "swap_execution_success",
          client: props.client,
          walletAddress: props.payer.account.address,
          walletType: props.payer.wallet.id,
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          fromAmount: props.quote.swapDetails.fromAmountWei,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          toAmount: props.quote.swapDetails.toAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          dstChainId: props.quote.swapDetails.toToken.chainId
        });
        if (!props.isFiatFlow) {
          addPendingTx({
            type: "swap",
            txHash: _swapTx.transactionHash
          });
        }
        props.setSwapTxHash(_swapTx.transactionHash);
      } catch (e) {
        console.error(e);
        setStatus("error");
      }
    }
  }, gap: "xs", children: [step === "approval" && (status === "pending" ? "Approving" : "Approve"), step === "swap" && (status === "pending" ? "Confirming" : "Confirm"), status === "pending" && (0, import_jsx_runtime44.jsx)(Spinner, { size: "sm", color: "accentButtonText" })] })] });
}
var ConnectorLine = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    height: "4px",
    background: theme.colors.borderColor,
    flex: 1
  };
});
function RenderTokenInfo(props) {
  const { name } = useChainName(props.chain);
  return (0, import_jsx_runtime44.jsxs)(Container, { flex: "column", gap: "xxs", style: {
    alignItems: "flex-end"
  }, children: [(0, import_jsx_runtime44.jsxs)(Container, { flex: "row", center: "y", gap: "xs", children: [(0, import_jsx_runtime44.jsxs)(Text, { color: "primaryText", size: "sm", children: [props.amount, " ", props.symbol] }), (0, import_jsx_runtime44.jsx)(PayTokenIcon, { token: props.token, chain: props.chain, size: "xs", client: props.client })] }), name ? (0, import_jsx_runtime44.jsx)(Text, { size: "xs", children: name }) : (0, import_jsx_runtime44.jsx)(Skeleton, { width: "100px", height: fontSize.xs })] });
}
function ConfirmItem(props) {
  return (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [(0, import_jsx_runtime44.jsxs)(Container, { flex: "row", gap: "md", py: "md", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime44.jsx)(Text, { size: "sm", color: "secondaryText", children: props.label }), props.children] }), (0, import_jsx_runtime44.jsx)(Line, {})] });
}
function SwapFeesRightAligned(props) {
  return (0, import_jsx_runtime44.jsx)(Container, { flex: "column", gap: "xs", style: {
    alignItems: "flex-end"
  }, children: props.quote.processingFees.map((fee) => {
    const feeAmount = formatNumber(Number(fee.amount), 6);
    return (0, import_jsx_runtime44.jsxs)(Container, { flex: "row", gap: "xxs", children: [(0, import_jsx_runtime44.jsxs)(Text, { color: "primaryText", size: "sm", children: [feeAmount === 0 ? "~" : "", feeAmount, " ", fee.token.symbol] }), (0, import_jsx_runtime44.jsxs)(Text, { color: "secondaryText", size: "sm", children: ["($", (fee.amountUSDCents / 100).toFixed(2), ")"] })] }, `${fee.token.chainId}_${fee.token.tokenAddress}_${feeAmount}`);
  }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapStatusScreen.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react27 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoStatus.js
function useBuyWithCryptoStatus(params) {
  return useQuery({
    queryKey: ["getBuyWithCryptoStatus", params == null ? void 0 : params.transactionHash],
    queryFn: async () => {
      if (!params) {
        throw new Error("No params");
      }
      return getBuyWithCryptoStatus(params);
    },
    enabled: !!params,
    refetchInterval: (query) => {
      var _a;
      const status = (_a = query.state.data) == null ? void 0 : _a.status;
      if (status === "COMPLETED" || status === "FAILED") {
        return false;
      }
      return 5e3;
    },
    refetchIntervalInBackground: true,
    retry: true
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/SwapDetailsScreen.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
function SwapDetailsScreen(props) {
  var _a, _b;
  const { status: initialStatus, client } = props;
  const statusQuery = useBuyWithCryptoStatus(((_a = initialStatus.source) == null ? void 0 : _a.transactionHash) ? {
    client,
    transactionHash: initialStatus.source.transactionHash
  } : void 0);
  const status = (((_b = statusQuery.data) == null ? void 0 : _b.status) !== "NOT_FOUND" ? statusQuery.data : void 0) || initialStatus;
  return (0, import_jsx_runtime45.jsxs)(Container, { children: [(0, import_jsx_runtime45.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime45.jsx)(ModalHeader, { title: "Transaction Details", onBack: props.onBack }) }), (0, import_jsx_runtime45.jsx)(Line, {}), (0, import_jsx_runtime45.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime45.jsx)(SwapTxDetailsTable, { type: "status", status, client }) })] });
}
function SwapTxDetailsTable(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let uiData;
  let showStatusRow = true;
  let isTransfer = false;
  if (props.type === "status") {
    isTransfer = props.status.swapType === "TRANSFER";
    const status = props.status;
    if (props.hideStatusRow) {
      showStatusRow = false;
    }
    const isPartialSuccess2 = status.status === "COMPLETED" && status.subStatus === "PARTIAL_SUCCESS";
    uiData = {
      fromToken: {
        chainId: status.quote.fromToken.chainId,
        symbol: status.quote.fromToken.symbol || "",
        address: status.quote.fromToken.tokenAddress,
        amount: status.quote.fromAmount
      },
      quotedToToken: {
        chainId: status.quote.toToken.chainId,
        symbol: status.quote.toToken.symbol || "",
        address: status.quote.toToken.tokenAddress,
        amount: status.quote.toAmount
      },
      gotToken: status.destination ? {
        chainId: status.destination.token.chainId,
        symbol: status.destination.token.symbol || "",
        address: status.destination.token.tokenAddress,
        amount: status.destination.amount
      } : void 0,
      statusMeta: getBuyWithCryptoStatusMeta(status),
      estimatedDuration: status.quote.estimated.durationSeconds || 0,
      isPartialSuccess: isPartialSuccess2,
      destinationTxHash: (_a = status.destination) == null ? void 0 : _a.transactionHash,
      sourceTxHash: (_b = status.source) == null ? void 0 : _b.transactionHash,
      fromAddress: status.fromAddress,
      toAddress: status.toAddress
    };
  } else {
    const quote = props.quote;
    uiData = {
      fromToken: {
        chainId: quote.swapDetails.fromToken.chainId,
        symbol: quote.swapDetails.fromToken.symbol || "",
        address: quote.swapDetails.fromToken.tokenAddress,
        amount: quote.swapDetails.fromAmount
      },
      quotedToToken: {
        chainId: quote.swapDetails.toToken.chainId,
        symbol: quote.swapDetails.toToken.symbol || "",
        address: quote.swapDetails.toToken.tokenAddress,
        amount: quote.swapDetails.toAmount
      },
      isPartialSuccess: false,
      estimatedDuration: quote.swapDetails.estimated.durationSeconds || 0,
      fromAddress: quote.swapDetails.fromAddress,
      toAddress: quote.swapDetails.toAddress
    };
  }
  const { client } = props;
  const { fromToken, quotedToToken: toToken, statusMeta, sourceTxHash, destinationTxHash, isPartialSuccess, gotToken, estimatedDuration } = uiData;
  const fromChainId = fromToken.chainId;
  const toChainId = toToken.chainId;
  const fromChainName = useChainName(getCachedChain(fromChainId));
  const fromChainExplorers = useChainExplorers(getCachedChain(fromChainId));
  const toChainName = useChainName(getCachedChain(toChainId));
  const toChainExplorers = useChainExplorers(getCachedChain(toChainId));
  const lineSpacer = (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [(0, import_jsx_runtime45.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime45.jsx)(Line, {}), (0, import_jsx_runtime45.jsx)(Spacer, { y: "md" })] });
  if (isTransfer) {
    return (0, import_jsx_runtime45.jsx)("div", { children: ((_d = (_c = fromChainExplorers.explorers) == null ? void 0 : _c[0]) == null ? void 0 : _d.url) && sourceTxHash && (0, import_jsx_runtime45.jsxs)(ButtonLink, { fullWidth: true, variant: "outline", href: formatExplorerTxUrl((_e = fromChainExplorers.explorers[0]) == null ? void 0 : _e.url, sourceTxHash), target: "_blank", gap: "xs", style: {
      fontSize: fontSize.sm,
      padding: spacing.sm
    }, children: ["View on ", fromChainName.name, " Explorer", (0, import_jsx_runtime45.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] }) });
  }
  return (0, import_jsx_runtime45.jsxs)("div", { children: [isPartialSuccess && gotToken ? (
    // Expected + Got
    (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [(0, import_jsx_runtime45.jsx)(TokenInfoRow, { chainId: toToken.chainId, client, label: isPartialSuccess ? "Expected" : "Received", tokenAmount: toToken.amount, tokenSymbol: toToken.symbol || "", tokenAddress: toToken.address }), lineSpacer, (0, import_jsx_runtime45.jsx)(TokenInfoRow, { chainId: gotToken.chainId, client, label: "Got", tokenAmount: gotToken.amount, tokenSymbol: gotToken.symbol || "", tokenAddress: gotToken.address })] })
  ) : (
    // Receive
    (0, import_jsx_runtime45.jsx)(TokenInfoRow, { chainId: toToken.chainId, client, label: "Receive", tokenAmount: toToken.amount, tokenSymbol: toToken.symbol || "", tokenAddress: toToken.address })
  ), lineSpacer, (0, import_jsx_runtime45.jsx)(TokenInfoRow, { chainId: fromToken.chainId, client, label: "Pay", tokenAmount: fromToken.amount, tokenSymbol: fromToken.symbol || "", tokenAddress: fromToken.address }), lineSpacer, (0, import_jsx_runtime45.jsxs)(Container, { flex: "row", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime45.jsx)(Text, { children: " Time " }), (0, import_jsx_runtime45.jsx)(Container, { flex: "row", gap: "xs", center: "y", children: (0, import_jsx_runtime45.jsxs)(Text, { color: "primaryText", children: ["~", formatSeconds(estimatedDuration || 0)] }) })] }), statusMeta && showStatusRow && (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [lineSpacer, (0, import_jsx_runtime45.jsxs)(Container, { flex: "row", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime45.jsx)(Text, { children: "Status" }), (0, import_jsx_runtime45.jsx)(Container, { flex: "row", gap: "xs", center: "y", children: (0, import_jsx_runtime45.jsx)(Text, { color: statusMeta.color, children: statusMeta.status }) })] })] }), uiData.fromAddress.toLowerCase() !== uiData.toAddress.toLowerCase() && (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [lineSpacer, (0, import_jsx_runtime45.jsxs)(Container, { flex: "row", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime45.jsx)(Text, { children: "Send to" }), (0, import_jsx_runtime45.jsx)(Container, { flex: "row", gap: "xs", center: "y", children: (0, import_jsx_runtime45.jsx)(Text, { color: "primaryText", size: "sm", children: shortenAddress(uiData.toAddress) }) })] })] }), lineSpacer, ((_g = (_f = fromChainExplorers.explorers) == null ? void 0 : _f[0]) == null ? void 0 : _g.url) && sourceTxHash && (0, import_jsx_runtime45.jsxs)(ButtonLink, { fullWidth: true, variant: "outline", href: formatExplorerTxUrl((_h = fromChainExplorers.explorers[0]) == null ? void 0 : _h.url, sourceTxHash), target: "_blank", gap: "xs", style: {
    fontSize: fontSize.sm,
    padding: spacing.sm
  }, children: ["View on ", fromChainName.name, " Explorer", (0, import_jsx_runtime45.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] }), destinationTxHash && sourceTxHash !== destinationTxHash && ((_j = (_i = toChainExplorers == null ? void 0 : toChainExplorers.explorers) == null ? void 0 : _i[0]) == null ? void 0 : _j.url) && (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [(0, import_jsx_runtime45.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime45.jsxs)(ButtonLink, { fullWidth: true, variant: "outline", href: formatExplorerTxUrl((_k = toChainExplorers.explorers[0]) == null ? void 0 : _k.url, destinationTxHash), target: "_blank", gap: "xs", style: {
    fontSize: fontSize.sm,
    padding: spacing.sm
  }, children: ["View on ", toChainName.name, " Explorer", (0, import_jsx_runtime45.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapStatusScreen.js
function SwapStatusScreen(props) {
  var _a, _b, _c, _d, _e, _f;
  const { onSuccess } = props;
  const swapStatus = useBuyWithCryptoStatus({
    client: props.client,
    transactionHash: props.swapTxHash
  });
  let uiStatus = "pending";
  if (((_a = swapStatus.data) == null ? void 0 : _a.status) === "COMPLETED") {
    uiStatus = "success";
  } else if (((_b = swapStatus.data) == null ? void 0 : _b.status) === "FAILED") {
    uiStatus = "failed";
  }
  if (((_c = swapStatus.data) == null ? void 0 : _c.status) === "COMPLETED" && ((_d = swapStatus.data) == null ? void 0 : _d.subStatus) === "PARTIAL_SUCCESS") {
    uiStatus = "partialSuccess";
  }
  const purchaseCbCalled = (0, import_react27.useRef)(false);
  (0, import_react27.useEffect)(() => {
    var _a2;
    if (purchaseCbCalled.current || !onSuccess) {
      return;
    }
    if (((_a2 = swapStatus.data) == null ? void 0 : _a2.status) === "COMPLETED") {
      purchaseCbCalled.current = true;
      onSuccess(swapStatus.data);
    }
  }, [onSuccess, swapStatus]);
  const queryClient = useQueryClient();
  const balanceInvalidated = (0, import_react27.useRef)(false);
  (0, import_react27.useEffect)(() => {
    if ((uiStatus === "success" || uiStatus === "partialSuccess") && !balanceInvalidated.current) {
      balanceInvalidated.current = true;
      invalidateWalletBalance(queryClient);
    }
  }, [queryClient, uiStatus]);
  const swapDetails = swapStatus.data && swapStatus.data.status !== "NOT_FOUND" ? (0, import_jsx_runtime46.jsx)(SwapTxDetailsTable, { status: swapStatus.data, type: "status", hideStatusRow: true, client: props.client }) : props.quote ? (0, import_jsx_runtime46.jsx)(SwapTxDetailsTable, { type: "quote", quote: props.quote, client: props.client }) : null;
  return (0, import_jsx_runtime46.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime46.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime46.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "sm" }), uiStatus === "success" && (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [(0, import_jsx_runtime46.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime46.jsxs)(Container, { color: "success", flex: "column", center: "x", children: [(0, import_jsx_runtime46.jsx)(CheckCircledIcon, { width: iconSize["3xl"], height: iconSize["3xl"] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime46.jsx)(Text, { color: "primaryText", size: "lg", children: "Buy Complete" })] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xl" }), swapDetails, (0, import_jsx_runtime46.jsx)(Spacer, { y: "sm" }), !props.isEmbed && (0, import_jsx_runtime46.jsx)(Button, { variant: "accent", fullWidth: true, onClick: props.onDone, children: props.transactionMode ? "Continue Transaction" : "Done" })] }), uiStatus === "partialSuccess" && ((_e = swapStatus.data) == null ? void 0 : _e.status) !== "NOT_FOUND" && ((_f = swapStatus.data) == null ? void 0 : _f.destination) && (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [(0, import_jsx_runtime46.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime46.jsxs)(Container, { color: "success", flex: "column", center: "x", children: [(0, import_jsx_runtime46.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime46.jsx)(Text, { color: "primaryText", size: "lg", children: "Incomplete" }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime46.jsxs)(Text, { size: "sm", color: "danger", children: ["Expected ", swapStatus.data.quote.toToken.symbol, ", Got", " ", swapStatus.data.destination.token.symbol, " instead"] })] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xl" }), swapDetails] }), uiStatus === "failed" && (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [(0, import_jsx_runtime46.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime46.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime46.jsxs)(Container, { flex: "column", center: "both", children: [(0, import_jsx_runtime46.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime46.jsx)(Text, { color: "primaryText", size: "lg", children: "Transaction Failed" }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime46.jsxs)(Text, { size: "sm", children: ["Your transaction ", `couldn't`, " be processed"] })] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime46.jsx)(Button, { variant: "accent", fullWidth: true, onClick: props.onTryAgain, children: "Try Again" }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xl" }), swapDetails] })] }), uiStatus === "pending" && (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [(0, import_jsx_runtime46.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime46.jsxs)(Container, { flex: "column", animate: "fadein", center: "both", children: [(0, import_jsx_runtime46.jsx)("div", { style: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, children: (0, import_jsx_runtime46.jsx)(Spinner, { size: "3xl", color: "accentText" }) }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime46.jsx)(Text, { color: "primaryText", size: "lg", children: "Buy Pending" })] }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xxl" }), swapDetails] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapFlow.js
function SwapFlow(props) {
  const [swapTxHash, setSwapTxHash] = (0, import_react28.useState)();
  const quote = props.buyWithCryptoQuote;
  const fromChain = (0, import_react28.useMemo)(() => getCachedChain(quote.swapDetails.fromToken.chainId), [quote]);
  const toChain = (0, import_react28.useMemo)(() => getCachedChain(quote.swapDetails.toToken.chainId), [quote]);
  const fromTokenSymbol = quote.swapDetails.fromToken.symbol || "";
  const toTokenSymbol = quote.swapDetails.toToken.symbol || "";
  const fromAmount = quote.swapDetails.fromAmount;
  const toAmount = quote.swapDetails.toAmount;
  const _toToken = quote.swapDetails.toToken;
  const _fromToken = quote.swapDetails.fromToken;
  const toToken = (0, import_react28.useMemo)(() => {
    if (_toToken.tokenAddress === NATIVE_TOKEN_ADDRESS) {
      return NATIVE_TOKEN;
    }
    const tokenInfo = {
      address: _toToken.tokenAddress,
      name: _toToken.name || "",
      symbol: _toToken.symbol || ""
    };
    return tokenInfo;
  }, [_toToken]);
  const fromToken = (0, import_react28.useMemo)(() => {
    if (_fromToken.tokenAddress === NATIVE_TOKEN_ADDRESS) {
      return NATIVE_TOKEN;
    }
    const tokenInfo = {
      address: _fromToken.tokenAddress,
      name: _fromToken.name || "",
      symbol: _fromToken.symbol || ""
    };
    return tokenInfo;
  }, [_fromToken]);
  if (swapTxHash) {
    return (0, import_jsx_runtime47.jsx)(SwapStatusScreen, { title: props.title, onBack: props.onBack, onTryAgain: props.onTryAgain, swapTxHash, client: props.client, onDone: props.onDone, transactionMode: props.transactionMode, isEmbed: props.isEmbed, quote, onSuccess: props.onSuccess });
  }
  return (0, import_jsx_runtime47.jsx)(SwapConfirmationScreen, { title: props.title, setSwapTxHash, toChain, toAmount, toTokenSymbol, fromChain, toToken, fromAmount, fromToken, fromTokenSymbol, client: props.client, onBack: props.onBack, onTryAgain: props.onTryAgain, quote, isFiatFlow: props.isFiatFlow, payer: props.payer });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/PostOnRampSwap.js
function PostOnRampSwap(props) {
  const [lockedOnRampQuote, setLockedOnRampQuote] = (0, import_react29.useState)(void 0);
  const postOnRampQuoteQuery = useQuery({
    queryKey: ["getPostOnRampQuote", props.buyWithFiatStatus],
    queryFn: async () => {
      return await getPostOnRampQuote({
        client: props.client,
        buyWithFiatStatus: props.buyWithFiatStatus
      });
    },
    // stop fetching if a quote is already locked
    enabled: !lockedOnRampQuote,
    refetchOnWindowFocus: false
  });
  (0, import_react29.useEffect)(() => {
    if (postOnRampQuoteQuery.data && !lockedOnRampQuote && !postOnRampQuoteQuery.isRefetching) {
      setLockedOnRampQuote(postOnRampQuoteQuery.data);
    }
  }, [
    postOnRampQuoteQuery.data,
    lockedOnRampQuote,
    postOnRampQuoteQuery.isRefetching
  ]);
  if (postOnRampQuoteQuery.isError) {
    return (0, import_jsx_runtime48.jsxs)(Container, { fullHeight: true, children: [(0, import_jsx_runtime48.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime48.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }) }), (0, import_jsx_runtime48.jsxs)(Container, { style: {
      minHeight: "300px"
    }, flex: "column", center: "both", p: "lg", children: [(0, import_jsx_runtime48.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime48.jsx)(Text, { color: "primaryText", children: "Failed to get a price quote" }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime48.jsx)(Button, { fullWidth: true, variant: "primary", onClick: () => {
      postOnRampQuoteQuery.refetch();
    }, children: "Try Again" })] }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "xxl" })] });
  }
  if (!lockedOnRampQuote) {
    return (0, import_jsx_runtime48.jsxs)(Container, { fullHeight: true, children: [(0, import_jsx_runtime48.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime48.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }) }), (0, import_jsx_runtime48.jsxs)(Container, { style: {
      minHeight: "300px"
    }, flex: "column", center: "both", children: [(0, import_jsx_runtime48.jsx)(Spinner, { size: "xxl", color: "accentText" }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime48.jsx)(Text, { color: "primaryText", children: "Getting price quote" })] }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "xxl" })] });
  }
  return (0, import_jsx_runtime48.jsx)(SwapFlow, { title: props.title, payer: props.payer, buyWithCryptoQuote: lockedOnRampQuote, client: props.client, onBack: props.onBack, isFiatFlow: true, onDone: props.onDone, onTryAgain: () => {
    setLockedOnRampQuote(void 0);
    postOnRampQuoteQuery.refetch();
  }, transactionMode: props.transactionMode, isEmbed: props.isEmbed, onSuccess: props.onSuccess });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/PostOnRampSwapFlow.js
function PostOnRampSwapFlow(props) {
  const [statusForSwap, setStatusForSwap] = (0, import_react30.useState)();
  if (statusForSwap) {
    return (0, import_jsx_runtime49.jsx)(PostOnRampSwap, { title: props.title, buyWithFiatStatus: statusForSwap, client: props.client, onDone: props.onDone, transactionMode: props.transactionMode, isEmbed: props.isEmbed, payer: props.payer, onSuccess: props.onSuccess });
  }
  return (0, import_jsx_runtime49.jsx)(FiatSteps, { title: props.title, client: props.client, onBack: props.onBack, partialQuote: props.quote, step: 2, onContinue: () => {
    props.onSwapFlowStarted();
    setStatusForSwap(props.status);
  }, status: props.status });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/FiatDetailsScreen.js
function FiatDetailsScreen(props) {
  var _a, _b;
  const initialStatus = props.status;
  const [stopPolling, setStopPolling] = (0, import_react31.useState)(false);
  const statusQuery = useBuyWithFiatStatus(stopPolling ? void 0 : {
    client: props.client,
    intentId: initialStatus.intentId
  });
  const status = (((_a = statusQuery.data) == null ? void 0 : _a.status) === "NOT_FOUND" ? void 0 : statusQuery.data) || initialStatus;
  const hasTwoSteps = isSwapRequiredAfterOnRamp(status);
  const statusMeta = getBuyWithFiatStatusMeta(status);
  if (hasTwoSteps) {
    const fiatQuote = status.quote;
    return (0, import_jsx_runtime50.jsx)(PostOnRampSwapFlow, {
      title: props.title,
      client: props.client,
      status,
      onBack: props.onBack,
      transactionMode: props.transactionMode,
      isEmbed: props.isEmbed,
      quote: {
        fromCurrencyAmount: fiatQuote.fromCurrencyWithFees.amount,
        fromCurrencySymbol: fiatQuote.fromCurrencyWithFees.currencySymbol,
        onRampTokenAmount: fiatQuote.estimatedOnRampAmount,
        toTokenAmount: fiatQuote.estimatedToTokenAmount,
        onRampToken: {
          chainId: fiatQuote.onRampToken.chainId,
          tokenAddress: fiatQuote.onRampToken.tokenAddress,
          name: fiatQuote.onRampToken.name,
          symbol: fiatQuote.onRampToken.symbol
        },
        toToken: {
          chainId: fiatQuote.toToken.chainId,
          tokenAddress: fiatQuote.toToken.tokenAddress,
          name: fiatQuote.toToken.name,
          symbol: fiatQuote.toToken.symbol
        }
      },
      onDone: props.onDone,
      onSwapFlowStarted: () => {
        setStopPolling(true);
      },
      payer: props.payer,
      // viewing history - ignore onSuccess
      onSuccess: void 0
    });
  }
  return (0, import_jsx_runtime50.jsxs)(Container, { children: [(0, import_jsx_runtime50.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime50.jsx)(ModalHeader, { title: "Transaction Details", onBack: props.onBack }) }), (0, import_jsx_runtime50.jsx)(Line, {}), (0, import_jsx_runtime50.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime50.jsx)(OnRampTxDetailsTable, { client: props.client, token: status.source ? {
    chainId: status.source.token.chainId,
    address: status.source.token.tokenAddress,
    symbol: status.source.token.symbol || "",
    amount: status.source.amount
  } : {
    address: status.quote.onRampToken.tokenAddress,
    amount: status.quote.estimatedOnRampAmount,
    chainId: status.quote.onRampToken.chainId,
    symbol: status.quote.onRampToken.symbol || ""
  }, fiat: {
    amount: status.quote.fromCurrencyWithFees.amount,
    currencySymbol: status.quote.fromCurrencyWithFees.currencySymbol
  }, statusMeta: {
    color: statusMeta.color,
    text: statusMeta.status,
    txHash: (_b = status.source) == null ? void 0 : _b.transactionHash
  } }) })] });
}
function isSwapRequiredAfterOnRamp(buyWithFiatStatus) {
  if (buyWithFiatStatus.status === "NOT_FOUND") {
    return false;
  }
  const sameChain = buyWithFiatStatus.quote.toToken.chainId === buyWithFiatStatus.quote.onRampToken.chainId;
  const sameToken = buyWithFiatStatus.quote.toToken.tokenAddress === buyWithFiatStatus.quote.onRampToken.tokenAddress;
  return !(sameChain && sameToken);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/TxDetailsScreen.js
function TxDetailsScreen(props) {
  const { statusInfo } = props;
  if (statusInfo.type === "swap") {
    return (0, import_jsx_runtime51.jsx)(SwapDetailsScreen, { client: props.client, status: statusInfo.status, onBack: props.onBack });
  }
  if (statusInfo.type === "fiat") {
    return (0, import_jsx_runtime51.jsx)(FiatDetailsScreen, { title: props.title, client: props.client, status: statusInfo.status, onBack: props.onBack, onDone: props.onDone, transactionMode: props.transactionMode, isEmbed: props.isEmbed, payer: props.payer });
  }
  return null;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletTransactionHistory.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var import_react32 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/contract/useWaitForReceipt.js
function useWaitForReceipt(options) {
  return useQuery({
    queryKey: [
      "waitForReceipt",
      // TODO: here chain can be undfined so we go to a `-1` chain but this feels wrong
      (options == null ? void 0 : options.chain.id) || -1,
      options == null ? void 0 : options.transactionHash
    ],
    queryFn: async () => {
      if (!(options == null ? void 0 : options.transactionHash)) {
        throw new Error("No transaction hash or user op hash provided");
      }
      return waitForReceipt(options);
    },
    enabled: !!(options == null ? void 0 : options.transactionHash),
    retry: false
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletTransactionHistory.js
function WalletTransactionHistory(props) {
  const activeChain = useActiveWalletChain();
  const chainExplorers = useChainExplorers(activeChain);
  const transactionStore = getTransactionStore(props.address);
  const reverseChronologicalTransactions = (0, import_react32.useSyncExternalStore)(transactionStore.subscribe, transactionStore.getValue);
  const transactions = [...reverseChronologicalTransactions].reverse();
  return (0, import_jsx_runtime52.jsx)(Container, { scrollY: true, flex: "column", fullHeight: true, style: {
    minHeight: "250px",
    maxHeight: "370px",
    paddingBottom: spacing.lg
  }, children: (0, import_jsx_runtime52.jsx)(Container, { flex: "column", gap: "xs", expand: true, children: transactions.length === 0 ? (0, import_jsx_runtime52.jsxs)(Container, { flex: "column", gap: "md", center: "both", color: "secondaryText", style: {
    flex: "1",
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime52.jsx)(CrossCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime52.jsx)(Text, { children: "No Transactions" })] }) : (0, import_jsx_runtime52.jsx)(Container, { animate: "fadein", flex: "column", gap: "xs", style: { minHeight: "250px" }, children: transactions.map((tx) => {
    var _a;
    return (0, import_jsx_runtime52.jsx)(TransactionButton, { explorerUrl: (_a = chainExplorers.explorers[0]) == null ? void 0 : _a.url, client: props.client, hash: tx.transactionHash, chainId: tx.chainId }, tx.transactionHash);
  }) }) }) });
}
function TransactionButton(props) {
  const { data: receipt, isLoading, error } = useWaitForReceipt({
    transactionHash: props.hash,
    chain: getCachedChain(props.chainId),
    client: props.client
  });
  const chainIconQuery = useChainIconUrl(getCachedChain(props.chainId));
  const content = (0, import_jsx_runtime52.jsxs)(TxButton2, { variant: "secondary", fullWidth: true, style: {
    paddingBlock: spacing.sm
  }, children: [(0, import_jsx_runtime52.jsxs)(Container, { flex: "row", center: "y", gap: "md", style: {
    flex: 1
  }, children: [(0, import_jsx_runtime52.jsx)(ChainIcon, { chainIconUrl: chainIconQuery.url, size: iconSize.lg, client: props.client }), (0, import_jsx_runtime52.jsxs)("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }, children: [(0, import_jsx_runtime52.jsx)(Container, { flex: "row", gap: "xs", center: "y", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime52.jsx)(Text, { size: "sm", color: "primaryText", children: (receipt == null ? void 0 : receipt.to) ? `Interacted with ${shortenHex(receipt.to, 4)}` : `Hash: ${shortenHex(props.hash, 4)}` }) }), (0, import_jsx_runtime52.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime52.jsx)(Container, { flex: "row", center: "y", gap: "xxs", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime52.jsx)(ChainName, { chain: getCachedChain(props.chainId), size: "xs", client: props.client }) })] })] }), (0, import_jsx_runtime52.jsxs)(Container, { flex: "row", gap: "xxs", center: "y", children: [isLoading && (0, import_jsx_runtime52.jsx)(Spinner, { size: "sm", color: "primaryText" }), !isLoading && receipt && receipt.status === "success" && (0, import_jsx_runtime52.jsx)(Text, { size: "md", color: "success", children: (0, import_jsx_runtime52.jsx)(CheckIcon, { width: iconSize.md, height: iconSize.md }) }), (error || !isLoading && receipt && receipt.status !== "success") && (0, import_jsx_runtime52.jsx)(Text, { size: "md", color: "danger", children: (0, import_jsx_runtime52.jsx)(CrossCircledIcon, { width: iconSize.md, height: iconSize.md }) })] })] });
  if (props.explorerUrl) {
    return (0, import_jsx_runtime52.jsx)("a", { href: formatExplorerTxUrl(props.explorerUrl, props.hash), target: "_blank", rel: "noreferrer", children: content });
  }
  return content;
}
var TxButton2 = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    "&:hover": {
      background: theme.colors.secondaryButtonBg
    },
    height: "62px"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/TransactionsScreen.js
function TransactionsScreen(props) {
  var _a;
  const [activeTab, setActiveTab] = (0, import_react33.useState)("Transactions");
  const [selectedTx, setSelectedTx] = (0, import_react33.useState)(null);
  const activeChain = useActiveWalletChain();
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const chainExplorers = useChainExplorers(activeChain);
  const payer = activeChain && activeAccount && activeWallet ? { chain: activeChain, account: activeAccount, wallet: activeWallet } : void 0;
  if (!payer) {
    return (0, import_jsx_runtime53.jsx)(LoadingScreen, {});
  }
  if (selectedTx) {
    return (0, import_jsx_runtime53.jsx)(TxDetailsScreen, { title: props.title, client: props.client, statusInfo: selectedTx, onBack: () => setSelectedTx(null), onDone: () => setSelectedTx(null), payer, transactionMode: false, isEmbed: false });
  }
  return (0, import_jsx_runtime53.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime53.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime53.jsx)(ModalHeader, { title: props.locale.transactions, onBack: props.onBack }) }), (0, import_jsx_runtime53.jsx)(Line, {}), (0, import_jsx_runtime53.jsxs)(Container, { px: "lg", scrollY: true, style: {
    minHeight: "330px"
  }, children: [(0, import_jsx_runtime53.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime53.jsxs)(Tabs, { options: [
    {
      label: (0, import_jsx_runtime53.jsxs)("span", { className: "flex gap-2", children: [(0, import_jsx_runtime53.jsx)(CoinsIcon, { size: iconSize.sm }), " Transactions"] }),
      value: "Transactions"
    },
    {
      label: (0, import_jsx_runtime53.jsxs)("span", { className: "flex gap-2", children: [(0, import_jsx_runtime53.jsx)(FundsIcon, { size: iconSize.sm }), " Purchases"] }),
      value: "Purchases"
    }
  ], selected: activeTab, onSelect: setActiveTab, children: [activeTab === "Purchases" && (0, import_jsx_runtime53.jsx)(PayTxHistoryList, { client: props.client, onSelectTx: setSelectedTx }), activeTab === "Transactions" && (0, import_jsx_runtime53.jsx)(WalletTransactionHistory, { locale: props.locale, client: props.client, address: payer.account.address })] })] }), (0, import_jsx_runtime53.jsx)(Line, {}), (0, import_jsx_runtime53.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime53.jsxs)(ButtonLink, { fullWidth: true, variant: "outline", href: formatExplorerAddressUrl(((_a = chainExplorers.explorers[0]) == null ? void 0 : _a.url) ?? "", (activeAccount == null ? void 0 : activeAccount.address) ?? ""), target: "_blank", as: "a", gap: "xs", style: {
    textDecoration: "none",
    color: "inherit"
  }, children: ["View on Explorer", (0, import_jsx_runtime53.jsx)(ExternalLinkIcon, { width: iconSize.sm, height: iconSize.sm })] }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/LazyBuyScreen.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var import_react34 = __toESM(require_react(), 1);
var BuyScreen = (0, import_react34.lazy)(() => import("./BuyScreen-N3MCCV33.js"));
function LazyBuyScreen(props) {
  return (0, import_jsx_runtime54.jsx)(import_react34.Suspense, { fallback: (0, import_jsx_runtime54.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime54.jsx)(BuyScreen, { ...props }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Details/WalletManagerScreen.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var import_react39 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSetActiveWallet.js
function useSetActiveWallet() {
  const manager = useConnectionManagerCtx("useSetActiveWallet");
  return manager.setActiveWallet;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletSwitcherConnectionScreen.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModalContent.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var import_react38 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SignatureScreen.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var import_react36 = __toESM(require_react(), 1);
var SignatureScreen = (props) => {
  const { onDone, modalSize, termsOfServiceUrl, privacyPolicyUrl, connectLocale } = props;
  const wallet = useActiveWallet();
  const adminWallet = useAdminWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(wallet, activeAccount, props.auth);
  const [status, setStatus] = (0, import_react36.useState)("idle");
  const { disconnect } = useDisconnect();
  const locale = connectLocale.signatureScreen;
  const signIn = (0, import_react36.useCallback)(async () => {
    try {
      setStatus("signing");
      await siweAuth.doLogin();
      onDone == null ? void 0 : onDone();
    } catch (err) {
      await wait(1e3);
      setStatus("failed");
      console.error("failed to log in", err);
    }
  }, [onDone, siweAuth]);
  if (!wallet) {
    return (0, import_jsx_runtime55.jsx)(LoadingScreen, {});
  }
  if (wallet.id === "inApp" || wallet.id === "embedded" || wallet.id === "smart" && (adminWallet == null ? void 0 : adminWallet.id) === "inApp") {
    return (0, import_jsx_runtime55.jsx)(HeadlessSignIn, { signIn, status, connectLocale, wallet });
  }
  const handleRetry = () => {
    signIn();
  };
  return (0, import_jsx_runtime55.jsxs)(Container, { animate: "fadein", fullHeight: true, flex: "column", children: [(0, import_jsx_runtime55.jsx)(Container, { p: "lg", style: {
    paddingBottom: 0
  }, children: (0, import_jsx_runtime55.jsx)(ModalHeader, { title: locale.instructionScreen.title }) }), (0, import_jsx_runtime55.jsx)(Container, { style: {
    paddingTop: 0,
    paddingBottom: spacing.xl
  }, flex: "column", px: modalSize === "compact" ? "lg" : "xxl", center: "y", expand: true, children: status === "idle" ? (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [(0, import_jsx_runtime55.jsx)(Container, { flex: "row", center: "x", animate: "fadein", py: "3xl", children: (0, import_jsx_runtime55.jsx)(PulsatingContainer, { children: (0, import_jsx_runtime55.jsx)(WalletImage, { id: wallet.id, client: props.client, size: "80" }) }) }), (0, import_jsx_runtime55.jsx)(Text, { center: true, multiline: true, balance: true, children: locale.instructionScreen.instruction }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime55.jsx)(Button, { fullWidth: true, variant: "accent", onClick: signIn, style: {
    alignItems: "center",
    padding: spacing.md
  }, children: connectLocale.signatureScreen.instructionScreen.signInButton }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime55.jsx)(Button, { fullWidth: true, variant: "secondary", onClick: () => {
    disconnect(wallet);
  }, style: {
    alignItems: "center",
    padding: spacing.md
  }, children: connectLocale.signatureScreen.instructionScreen.disconnectWallet })] }) : (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [(0, import_jsx_runtime55.jsx)(Container, { py: "3xl", children: (0, import_jsx_runtime55.jsx)(WalletLogoSpinner, { client: props.client, error: status === "failed", id: wallet.id }) }), (0, import_jsx_runtime55.jsxs)(Container, { flex: "column", gap: "md", animate: "fadein", children: [(0, import_jsx_runtime55.jsx)(Text, { size: "lg", center: true, color: "primaryText", children: status === "failed" ? locale.signingScreen.failedToSignIn : locale.signingScreen.inProgress }), status === "signing" && (0, import_jsx_runtime55.jsx)(Text, { center: true, multiline: true, balance: true, children: connectLocale.signatureScreen.signingScreen.prompt }), status === "failed" && (0, import_jsx_runtime55.jsxs)(Container, { children: [(0, import_jsx_runtime55.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime55.jsxs)(Button, { fullWidth: true, variant: "accent", onClick: handleRetry, style: {
    gap: spacing.xs,
    alignItems: "center",
    padding: spacing.md
  }, children: [(0, import_jsx_runtime55.jsx)(ReloadIcon, { width: iconSize.sm, height: iconSize.sm }), locale.signingScreen.tryAgain] }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime55.jsx)(Button, { fullWidth: true, variant: "secondary", onClick: () => {
    disconnect(wallet);
  }, style: {
    alignItems: "center",
    padding: spacing.md
  }, children: locale.instructionScreen.disconnectWallet })] })] }, status)] }) }), (termsOfServiceUrl || privacyPolicyUrl) && (0, import_jsx_runtime55.jsx)(Container, { p: "md", animate: "fadein", children: (0, import_jsx_runtime55.jsx)(TOS, { termsOfServiceUrl, privacyPolicyUrl, locale: connectLocale.agreement }) })] });
};
function HeadlessSignIn({ signIn, status, connectLocale, wallet }) {
  const locale = connectLocale.signatureScreen;
  const mounted = (0, import_react36.useRef)(false);
  const { disconnect } = useDisconnect();
  (0, import_react36.useEffect)(() => {
    if (mounted.current) {
      return;
    }
    mounted.current = true;
    signIn();
  }, [signIn]);
  return (0, import_jsx_runtime55.jsxs)(Container, { p: "lg", fullHeight: true, flex: "column", animate: "fadein", children: [(0, import_jsx_runtime55.jsx)(ModalHeader, { title: locale.signingScreen.title }), (0, import_jsx_runtime55.jsxs)(Container, { expand: true, flex: "row", center: "both", style: {
    minHeight: "250px"
  }, children: [status === "signing" && (0, import_jsx_runtime55.jsx)(Spinner, { size: "xl", color: "accentText" }), status === "failed" && (0, import_jsx_runtime55.jsxs)(Container, { children: [(0, import_jsx_runtime55.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime55.jsx)(Text, { size: "lg", center: true, color: "danger", children: locale.signingScreen.failedToSignIn }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime55.jsxs)(Button, { fullWidth: true, variant: "accent", onClick: () => {
    signIn();
  }, style: {
    gap: spacing.xs,
    alignItems: "center",
    padding: spacing.md
  }, children: [(0, import_jsx_runtime55.jsx)(ReloadIcon, { width: iconSize.sm, height: iconSize.sm }), locale.signingScreen.tryAgain] }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime55.jsx)(Button, { fullWidth: true, variant: "secondary", onClick: () => {
    disconnect(wallet);
  }, style: {
    alignItems: "center",
    padding: spacing.md
  }, children: locale.instructionScreen.disconnectWallet })] })] })] });
}
var pulseAnimation2 = keyframes`
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
      animation: `${pulseAnimation2} 2s cubic-bezier(0.175, 0.885, 0.32, 1.1) infinite`,
      zIndex: -1,
      borderRadius: radius.xl
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/StartScreen.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/GlobalIcon.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var GlobeIcon = (props) => {
  return (0, import_jsx_runtime56.jsx)("svg", { width: props.size, height: props.size, viewBox: "0 0 129 131", fill: "none", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: (0, import_jsx_runtime56.jsx)("path", { d: "M59.7178 0C62.7511 0 65.788 0 68.8212 0C71.4429 0.423181 74.1011 0.679982 76.6755 1.29848C103.785 7.78725 120.277 24.7723 126.755 51.5485C127.428 54.3335 127.712 57.2089 128.175 60.0446V69.8103C127.803 72.1722 127.472 74.5449 127.057 76.8995C122.582 102.298 103.177 122.722 77.9136 128.56C74.8003 129.28 71.6104 129.67 68.457 130.213H59.3537C57.3838 129.913 55.4065 129.663 53.4475 129.305C27.0442 124.491 6.91125 104.974 1.44197 78.8526C0.841148 75.9808 0.473373 73.0656 0 70.1684C0 66.9132 0 63.6579 0 60.4027C0.371416 58.0408 0.706418 55.6718 1.11425 53.3135C5.52026 28.0493 24.9905 7.50151 50.0902 1.70719C53.2618 0.97657 56.5062 0.560624 59.7178 0ZM96.8813 10.3119C96.8959 10.2865 96.9104 10.2576 96.9286 10.2323C96.8886 10.2504 96.8522 10.2648 96.8121 10.2829C96.8085 10.2287 96.8048 10.178 96.8012 10.1238C96.8303 10.1853 96.8558 10.2504 96.8849 10.3119H96.8813ZM25.1762 115.709C25.2089 115.716 25.2454 115.72 25.2781 115.727C25.249 115.749 25.2235 115.771 25.1944 115.792C25.2053 115.767 25.2162 115.742 25.2271 115.716C25.1252 115.525 25.0196 115.333 24.9176 115.141C22.7328 113.087 21.127 110.421 18.3305 109.014C18.2977 109.032 18.2613 109.05 18.2285 109.065C18.2758 109.058 18.3232 109.054 18.3705 109.047C18.4397 109.365 18.3997 109.795 18.5926 109.984C20.3587 111.687 22.1502 113.362 23.9745 115.004C24.1675 115.177 24.5972 115.083 24.9176 115.116C25.0014 115.311 25.0851 115.51 25.1725 115.706L25.1762 115.709ZM27.594 12.4567L27.2262 12.9197C27.1898 13.1439 27.1571 13.3682 27.1206 13.5924C26.8038 13.5924 26.4871 13.596 26.1703 13.5996C26.0683 13.813 25.9663 14.0264 25.8607 14.2362L25.7661 14.2652L25.8243 14.1856C25.9336 13.9686 26.0428 13.7479 26.1557 13.5309C26.4688 13.5418 26.7856 13.5526 27.0988 13.5671C27.1243 13.332 27.1498 13.0969 27.1753 12.8618C27.2954 12.7352 27.412 12.6122 27.5321 12.4856C27.543 12.511 27.554 12.5399 27.5649 12.5652C27.5758 12.529 27.5831 12.4893 27.594 12.4531V12.4567ZM106.589 111.926C106.738 111.868 106.891 111.806 107.041 111.749C107.616 111.354 108.286 111.043 108.756 110.548C110.281 108.924 111.771 107.26 113.205 105.553C113.919 104.703 114.483 103.726 115.113 102.808C113.981 103.448 112.849 104.084 111.716 104.725C111.669 104.753 111.632 104.811 111.6 104.862C110.088 107.166 108.577 109.474 107.07 111.778L106.556 111.958L106.625 112.06L106.589 111.926ZM79.6906 2.95141C79.6906 2.92971 79.6906 2.90801 79.6906 2.88631C79.6724 2.89716 79.6505 2.91163 79.6323 2.92248C79.8253 2.9478 80.0146 2.97311 80.2076 2.99843C80.0328 2.98397 79.8617 2.96588 79.6869 2.95141H79.6906ZM95.1662 8.90488C95.1116 8.90488 95.0533 8.89764 94.9987 8.90849C94.9732 8.91211 94.955 8.94828 94.9368 8.96998C95.0242 8.93381 95.1116 8.89764 95.199 8.86147C95.301 9.07125 95.3956 9.28827 95.5194 9.49082C95.5376 9.51975 95.6796 9.47273 95.7634 9.45827C95.5668 9.2738 95.3665 9.08934 95.1699 8.90126L95.1662 8.90488ZM86.7729 124.603C85.8772 124.921 84.9778 125.229 84.0893 125.565C83.94 125.623 83.8417 125.811 83.7215 125.941C83.8562 125.988 84.031 126.111 84.1184 126.068C85.0069 125.605 85.8808 125.117 86.7584 124.636C86.8021 124.621 86.8494 124.592 86.8895 124.596C86.9259 124.6 86.9623 124.643 86.9951 124.665C86.9186 124.643 86.8458 124.621 86.7693 124.603H86.7729ZM82.2431 4.35478L82.2941 4.31138V4.32223C82.5672 4.5935 82.793 5.00583 83.1207 5.11072C85.8189 5.99325 88.5317 6.82153 91.2445 7.6498C91.4193 7.70406 91.6341 7.64257 91.8271 7.63172C91.6596 7.46896 91.514 7.25917 91.3173 7.14705C88.4844 5.599 85.4912 4.56456 82.2395 4.35116L82.2431 4.35478ZM29.9609 10.9991C30.2995 11.0135 30.6928 11.1438 30.9732 11.0208C33.8389 9.75847 36.6937 8.46361 39.5376 7.15428C39.9054 6.98429 40.2331 6.70217 40.5244 6.41643C40.7319 6.21388 40.8412 5.91729 40.9941 5.66049C40.6664 5.68943 40.2913 5.62432 40.0219 5.76177C36.6573 7.49066 33.3109 9.2521 29.9609 11.0027C29.9864 11.0461 30.0119 11.0895 30.041 11.1293C30.0701 11.1655 30.1102 11.1944 30.1466 11.2233L29.9609 10.9991ZM8.93219 95.5918C8.89213 95.628 8.84844 95.6677 8.80838 95.7039C8.85208 95.6641 8.89942 95.6243 8.94311 95.5845C8.99773 96.0801 8.91398 96.6443 9.12882 97.0566C11.7397 102.034 14.7984 106.641 19.9509 109.43C19.9436 109.437 19.9363 109.445 19.9327 109.455C19.7579 108.913 19.6413 108.345 19.401 107.828C18.4943 105.875 17.6204 103.903 16.5899 102.015C16.1347 101.18 15.4283 100.417 14.6746 99.82C12.8102 98.3479 10.8512 96.9915 8.93219 95.5918ZM23.0533 112.295C23.097 112.248 23.1407 112.201 23.1844 112.15C23.1443 112.19 23.1006 112.23 23.0606 112.269C23.279 112.472 23.5449 112.646 23.7087 112.888C27.1206 117.861 32.1275 120.35 37.7861 121.818C38.1648 121.916 38.5763 121.887 38.9732 121.919C38.813 121.608 38.6709 121.283 38.4925 120.983C37.7861 119.789 37.1525 118.541 36.3259 117.434C35.8344 116.776 35.1206 116.125 34.3669 115.843C31.1917 114.657 27.9691 113.597 24.7501 112.53C24.2149 112.353 23.6177 112.367 23.0496 112.291L23.0533 112.295ZM69.8298 86.3252C73.0378 86.3252 75.4666 86.2927 77.8917 86.3397C78.9514 86.3614 79.4029 86.025 79.4284 84.9074C79.5049 81.4134 79.6432 77.9195 79.818 74.4291C79.8763 73.25 79.4757 72.9353 78.2777 72.8919C71.4903 72.6605 64.7065 72.353 57.9227 71.9986C56.8048 71.9407 56.2804 72.1107 56.204 73.3477C55.9855 76.8344 55.7015 80.3211 55.341 83.797C55.2135 85.0267 55.665 85.3595 56.8048 85.4282C61.4074 85.7067 66.0028 86.0539 69.8262 86.3216L69.8298 86.3252ZM69.9245 72.2192C72.2076 72.2192 74.9969 72.1505 77.7789 72.2481C79.2937 72.3024 79.9527 71.9371 79.869 70.2697C79.7015 66.9638 79.6796 63.6507 79.7088 60.3412C79.7197 58.8836 79.2536 58.4315 77.7315 58.3881C71.6177 58.2217 65.5076 57.9251 59.4011 57.5779C58.1994 57.5092 57.828 57.8274 57.7224 58.9776C57.3838 62.6307 56.9832 66.2838 56.528 69.9261C56.3897 71.0401 56.8776 71.2571 57.8171 71.3222C61.6842 71.5862 65.5513 71.8937 69.9281 72.2228L69.9245 72.2192ZM55.3956 74.3749C55.4247 74.0892 55.432 73.5394 55.5412 73.0149C55.7415 72.0564 55.2936 71.7852 54.4088 71.6333C47.8471 70.5048 41.2927 69.3401 34.742 68.1429C33.9481 67.9982 33.4748 68.0019 33.3655 68.9459C32.9249 72.6496 32.4115 76.3461 32.0401 80.0571C32 80.473 32.6118 81.2905 33.0269 81.3664C39.7488 82.6396 46.4852 83.8151 53.2181 85.0267C54.2267 85.2076 54.6091 84.8531 54.671 83.8115C54.853 80.7479 55.1334 77.688 55.3956 74.3749ZM54.143 71.2065C55.4757 71.3511 55.7634 70.7073 55.8726 69.5788C56.2222 65.9294 56.6264 62.2835 57.0888 58.6449C57.2272 57.5489 56.7429 57.3645 55.8253 57.2089C49.8644 56.1926 43.9108 55.1437 37.9718 54.0297C37.0178 53.8488 36.6464 54.0731 36.4461 54.9484C35.6122 58.5798 34.7638 62.2075 33.9008 65.8317C33.6823 66.754 33.8753 67.2966 34.9131 67.4955C41.3255 68.7144 47.7342 69.9659 54.1466 71.2101L54.143 71.2065ZM68.519 99.3606C71.5449 99.3606 73.97 99.3172 76.3915 99.3787C77.564 99.4077 78.1612 99.0894 78.2595 97.8198C78.5035 94.702 78.8203 91.5879 79.1808 88.4809C79.3119 87.3524 78.9514 87.0558 77.8262 87.0161C70.8093 86.7629 63.7925 86.4554 56.7793 86.0901C55.6286 86.0286 55.1334 86.2565 55.0897 87.4646C54.9805 90.5896 54.813 93.7146 54.5981 96.836C54.518 97.9753 54.8676 98.4094 56.0656 98.4781C60.417 98.7277 64.7611 99.0857 68.5153 99.3606H68.519ZM80.5244 79.623H80.4261C80.3278 81.3664 80.2659 83.1134 80.1202 84.8531C80.0365 85.8442 80.3023 86.318 81.3947 86.2095C87.7816 85.5621 94.1721 84.9616 100.555 84.2636C101.007 84.2129 101.728 83.4968 101.739 83.0772C101.826 79.3482 101.779 75.6155 101.772 71.8864C101.772 71.1486 101.488 70.852 100.654 70.9388C94.3287 71.5935 88.0001 72.2083 81.6678 72.8015C80.8339 72.8811 80.4989 73.1849 80.5171 74.0277C80.5572 75.894 80.5281 77.7603 80.5281 79.6267L80.5244 79.623ZM80.3788 65.1156C80.437 65.1156 80.4953 65.1156 80.5536 65.1156C80.5536 66.9819 80.5936 68.8518 80.5353 70.7182C80.5062 71.6911 80.7393 72.2011 81.8389 72.089C88.0474 71.4633 94.2559 70.852 100.468 70.2624C101.418 70.172 101.699 69.7271 101.579 68.8374C101.058 65.0794 100.559 61.3178 100.057 57.5598C99.9473 56.7424 99.5795 56.5217 98.7056 56.6158C93.0433 57.2234 87.3738 57.7768 81.7006 58.2868C80.7138 58.3772 80.3096 58.6557 80.3533 59.6938C80.4297 61.4986 80.3751 63.3071 80.3751 65.1119L80.3788 65.1156ZM54.1393 91.8881C54.1393 91.8881 54.1466 91.8881 54.1503 91.8881C54.2413 90.2677 54.2959 88.6401 54.4416 87.0233C54.518 86.1805 54.2304 85.8767 53.3892 85.7357C46.6527 84.5819 39.9199 83.4027 33.198 82.173C32.1675 81.9849 31.7342 82.173 31.7379 83.2581C31.7451 86.5639 31.6687 89.8734 31.7379 93.1793C31.7488 93.6386 32.3496 94.4054 32.7829 94.485C39.3774 95.7365 45.99 96.8939 52.599 98.0802C53.5385 98.2502 53.9026 97.8777 53.9136 96.93C53.9391 95.2482 54.0592 93.5663 54.1393 91.8844V91.8881ZM70.1758 44.2893C66.5199 44.018 63.8508 43.8878 61.2035 43.5912C60.0929 43.4682 59.7106 43.7395 59.5831 44.8391C59.1717 48.3656 58.7019 51.8884 58.1594 55.3969C57.9773 56.5724 58.4033 56.8653 59.4702 56.9087C65.6423 57.1619 71.8144 57.4404 77.9864 57.7406C79.2063 57.8021 79.5631 57.3211 79.4612 56.1492C79.1516 52.6118 78.8822 49.0709 78.6819 45.5263C78.62 44.4412 78.1102 44.264 77.1817 44.2784C74.5162 44.3182 71.8508 44.2929 70.1758 44.2929V44.2893ZM82.6983 99.3715C87.9782 98.7168 93.2582 98.0513 98.5417 97.4147C99.4084 97.3098 100.006 97.0747 100.14 96.0728C100.585 92.7995 101.091 89.5334 101.579 86.2637C101.728 85.2655 101.458 84.9182 100.319 85.0412C94.0665 85.714 87.8107 86.3397 81.544 86.8678C80.2695 86.9763 79.9163 87.4428 79.8471 88.593C79.7088 90.8717 79.5085 93.1504 79.2427 95.4182C78.7912 99.2919 78.762 99.2883 82.6983 99.3715ZM58.9495 44.0035C58.9714 43.4682 58.9714 43.4755 57.6423 43.2368C52.6427 42.3398 47.6396 41.4681 42.6509 40.5168C41.6823 40.3324 41.2308 40.553 40.9213 41.4789C39.7633 44.9584 38.5617 48.4234 37.3309 51.8776C37.0105 52.7782 37.1999 53.2159 38.1539 53.3822C44.1694 54.4311 50.1776 55.5162 56.204 56.5109C56.5499 56.5688 57.3146 56.019 57.3692 55.6754C57.9372 51.9318 58.4033 48.1739 58.9532 44.0035H58.9495ZM83.798 57.7225C88.5499 57.1619 93.3019 56.6122 98.0538 56.0371C98.8767 55.9358 99.8308 55.9539 99.4484 54.5903C98.4289 50.9372 97.4603 47.2696 96.488 43.6057C96.2732 42.7919 95.8071 42.6472 95.0097 42.734C90.2541 43.2476 85.4948 43.7504 80.7283 44.1518C79.6177 44.2459 79.2572 44.5497 79.3738 45.6637C79.6651 48.4777 79.8981 51.2989 80.0693 54.1237C80.2841 57.6647 80.2477 57.6683 83.798 57.7189V57.7225ZM32.6154 68.0344C32.437 67.9259 31.9673 67.5244 31.4283 67.3255C26.538 65.546 21.6222 63.8279 16.7392 62.0231C15.8835 61.7084 15.421 61.571 15.2535 62.6669C14.711 66.2404 14.092 69.7995 13.5895 73.3766C13.5239 73.8396 13.8443 74.7004 14.1939 74.8306C19.5175 76.8344 24.8667 78.7622 30.2376 80.643C30.467 80.7226 31.188 80.2162 31.2244 79.9233C31.7124 76.1617 32.1202 72.3856 32.6154 68.0308V68.0344ZM32.6919 66.8951C32.8485 66.5189 33.0851 66.1174 33.1907 65.687C34.0574 62.0629 34.8439 58.417 35.7797 54.8073C36.0565 53.7403 35.6705 53.5052 34.7893 53.1978C30.2813 51.6389 25.777 50.0547 21.3164 48.3692C20.3223 47.993 19.9181 48.116 19.594 49.0781C18.4324 52.554 17.249 56.0262 16.0364 59.4876C15.6759 60.5148 16.0328 61.0465 17.005 61.3901C21.9026 63.1226 26.7893 64.8768 31.6832 66.6202C31.909 66.6998 32.1493 66.7468 32.6955 66.8915L32.6919 66.8951ZM67.1207 110.645C69.8116 110.645 72.2404 110.598 74.6619 110.667C75.7324 110.696 76.1767 110.298 76.3405 109.282C76.7738 106.605 77.2363 103.936 77.7679 101.278C77.9828 100.207 77.5203 100.098 76.6282 100.062C69.7242 99.7874 62.8239 99.4836 55.9236 99.1364C54.9259 99.0857 54.5035 99.2774 54.5071 100.359C54.5144 102.949 54.467 105.538 54.3287 108.124C54.2595 109.383 54.7292 109.817 55.9527 109.886C59.7652 110.099 63.574 110.396 67.1207 110.642V110.645ZM53.615 104.106C53.6769 104.106 53.7351 104.106 53.797 104.106C53.797 102.844 53.7351 101.578 53.8153 100.319C53.8772 99.3642 53.6113 98.9483 52.5918 98.7783C46.0264 97.6679 39.472 96.5141 32.9249 95.306C31.8871 95.1143 31.7706 95.4471 31.8835 96.2935C32.2658 99.093 32.6518 101.892 32.9759 104.699C33.0924 105.712 33.6059 106.15 34.5672 106.32C40.4698 107.358 46.3651 108.407 52.2604 109.488C53.3637 109.691 53.655 109.257 53.6223 108.258C53.5786 106.877 53.6113 105.491 53.6113 104.106H53.615ZM30.9586 87.8552C30.9805 87.8552 31.0059 87.8552 31.0278 87.8552C31.0278 86.2927 30.9513 84.7229 31.0533 83.164C31.1225 82.0717 30.7583 81.6304 29.6951 81.2688C24.6627 79.5543 19.6596 77.7495 14.6746 75.9085C13.7351 75.5612 13.3309 75.5793 13.3673 76.6716C13.4766 80.0354 13.5166 83.4027 13.7169 86.7629C13.7497 87.3199 14.3359 88.1337 14.8566 88.329C19.8307 90.2026 24.8448 91.964 29.8444 93.7761C30.7474 94.1052 31.0096 93.8267 30.9768 92.908C30.9186 91.2262 30.9622 89.5407 30.9622 87.8552H30.9586ZM40.6009 40.2564C40.1785 40.0719 39.7524 39.8622 39.3118 39.703C35.554 38.343 31.7706 37.0518 28.0492 35.5978C27.0587 35.2108 26.6436 35.417 26.2103 36.2308C24.477 39.4752 22.7547 42.7268 20.9595 45.935C20.3769 46.9803 20.701 47.4396 21.7023 47.7941C26.152 49.3674 30.6054 50.9372 35.0369 52.5684C36.0783 52.9518 36.3915 52.5467 36.6901 51.6497C37.848 48.1594 39.0715 44.6944 40.2695 41.2185C40.3496 40.9906 40.4261 40.7628 40.6045 40.26L40.6009 40.2564ZM117.997 64.3632C117.018 60.4172 116.082 56.5688 115.062 52.742C115.004 52.5214 114.236 52.2791 113.897 52.3767C109.786 53.5776 105.69 54.8218 101.611 56.1275C101.233 56.2505 100.734 56.9124 100.774 57.2704C101.225 61.1478 101.753 65.0179 102.332 68.8772C102.383 69.2063 103.039 69.7633 103.257 69.6982C107.882 68.331 112.488 66.9023 117.083 65.4302C117.422 65.3217 117.63 64.8045 117.994 64.3632H117.997ZM81.0087 110.443C81.016 110.501 81.0269 110.555 81.0342 110.613C85.666 110.034 90.3014 109.484 94.9222 108.848C95.4903 108.768 96.3205 108.367 96.4807 107.918C97.5513 104.978 98.4762 101.983 99.4339 99.0025C99.6523 98.3262 99.4776 98.0296 98.651 98.1164C92.3187 98.7602 85.9828 99.3425 79.6541 100.015C79.2463 100.059 78.6601 100.641 78.5654 101.061C78.1539 102.88 77.8808 104.732 77.5859 106.576C77.3783 107.86 77.2181 109.155 77.036 110.443H81.0051H81.0087ZM102.518 77.131C102.518 77.131 102.529 77.131 102.533 77.131C102.533 78.9973 102.54 80.86 102.529 82.7264C102.525 83.3485 102.423 84.0827 103.414 83.7789C108.148 82.3249 112.878 80.8528 117.582 79.3156C117.946 79.1962 118.354 78.5126 118.351 78.0967C118.311 74.4291 118.172 70.7652 118.081 67.0976C118.059 66.2259 117.852 66.0053 116.89 66.3164C112.524 67.7306 108.133 69.0797 103.72 70.3456C102.682 70.6422 102.402 71.022 102.485 72.0745C102.616 73.7492 102.522 75.4419 102.522 77.1237L102.518 77.131ZM70.8895 43.5767C73.1871 43.5767 75.1243 43.537 77.0579 43.5912C78.1102 43.6201 78.4634 43.2512 78.3105 42.2168C77.8226 38.9471 77.3565 35.6774 76.9414 32.3968C76.8285 31.4962 76.4607 31.2069 75.554 31.1815C71.4429 31.0658 67.3319 30.9103 63.2245 30.6933C62.2559 30.6426 61.7861 30.8849 61.6368 31.8651C61.1562 35.0119 60.661 38.1586 60.0893 41.2945C59.8671 42.5134 60.3187 42.8968 61.4657 42.9583C64.7283 43.1391 67.9837 43.3814 70.8858 43.5731L70.8895 43.5767ZM58.3596 42.857C58.7056 42.3723 59.2372 41.9491 59.3319 41.4428C59.9181 38.2454 60.3587 35.0191 60.9559 31.8217C61.1489 30.7873 60.9122 30.4871 59.8781 30.3207C56.051 29.7058 52.2349 29.0078 48.4297 28.2771C47.5048 28.0999 46.9659 28.2771 46.5617 29.1524C45.1489 32.216 43.696 35.2614 42.2212 38.2996C41.7879 39.1894 41.7916 39.6958 42.9532 39.9092C47.9563 40.8351 52.9486 41.8153 58.356 42.857H58.3596ZM101.029 55.8743C105.457 54.3841 109.691 52.9808 113.894 51.4906C114.156 51.3965 114.414 50.5466 114.276 50.2102C112.779 46.6041 111.224 43.0197 109.611 39.4643C109.484 39.1858 108.745 38.9362 108.395 39.0375C104.863 40.0647 101.342 41.1462 97.8426 42.2819C97.5295 42.3832 97.118 43.027 97.1872 43.3091C98.1375 47.096 99.1535 50.8649 100.191 54.6301C100.29 54.9918 100.628 55.2884 101.025 55.8671L101.029 55.8743ZM82.5089 43.5731C86.4816 43.0993 90.4507 42.6183 94.4234 42.1625C95.4648 42.0432 95.9746 41.7611 95.4502 40.5783C94.0374 37.3846 92.7484 34.1329 91.2918 30.9573C91.0843 30.5016 90.1922 30.0603 89.6532 30.1001C86.0301 30.3713 82.4179 30.8235 78.7948 31.1056C77.6951 31.1888 77.4985 31.5432 77.666 32.5451C78.0993 35.1602 78.4379 37.7897 78.8094 40.4119C79.1055 42.5098 80.3375 43.5635 82.5053 43.5731H82.5089ZM118.245 81.8981C117.735 81.3881 119.017 79.8762 117.357 80.3283C112.692 81.6015 108.082 83.0772 103.479 84.5529C103.006 84.7048 102.442 85.345 102.361 85.8297C101.812 89.1537 101.397 92.4993 100.89 95.8305C100.745 96.7818 101.04 97.0675 101.946 96.7854C106.276 95.4399 110.624 94.1486 114.91 92.6838C115.583 92.4523 116.268 91.4866 116.446 90.7451C117.153 87.8226 117.662 84.8531 118.245 81.8981ZM32.1857 105.224C31.7925 101.784 31.4866 98.7313 31.0533 95.6967C30.9914 95.2699 30.3906 94.749 29.9281 94.579C24.9868 92.7778 20.0128 91.0706 15.0751 89.2622C14.0519 88.886 13.8844 89.1247 14.1102 90.0507C14.8494 93.0853 15.574 96.1271 16.3569 99.1545C16.4661 99.5704 16.8157 100.106 17.1834 100.243C21.9317 102.034 26.7019 103.77 31.4793 105.48C31.716 105.564 32.0911 105.26 32.1821 105.224H32.1857ZM65.8244 119.662C67.8854 119.662 69.9464 119.626 72.0037 119.681C72.9832 119.706 73.6023 119.449 73.8717 118.433C74.3815 116.516 74.9313 114.606 75.5358 112.714C75.8599 111.691 75.6341 111.376 74.5126 111.34C68.2786 111.134 62.0447 110.902 55.8143 110.551C54.4743 110.475 54.2704 110.924 54.3432 112.038C54.4634 113.839 54.5435 115.644 54.5472 117.449C54.5472 118.512 54.955 118.928 56.0292 118.99C59.2955 119.171 62.5544 119.435 65.8244 119.666V119.662ZM40.7174 39.2871C40.914 39.023 41.2672 38.6794 41.4639 38.2671C42.9495 35.171 44.3769 32.0496 45.8881 28.968C46.3068 28.1144 46.2558 27.778 45.2727 27.4525C42.3451 26.4831 39.4757 25.351 36.5481 24.3817C36.0783 24.2262 35.1971 24.3926 34.9131 24.7362C32.579 27.5755 30.3505 30.5052 28.0601 33.3842C27.361 34.2632 27.5977 34.737 28.5772 35.0842C32.3387 36.4116 36.0965 37.7571 39.858 39.0954C40.0292 39.1569 40.2112 39.1749 40.7137 39.2871H40.7174ZM53.757 114.577C53.6732 113.26 54.0774 111.492 53.3783 110.75C52.6209 109.947 50.833 110.103 49.493 109.839C49.3146 109.803 49.1361 109.781 48.9577 109.745C44.3259 108.877 39.6796 108.067 35.066 107.112C33.5658 106.801 33.391 107.199 33.828 108.468C34.4943 110.399 35.1243 112.342 35.7215 114.291C36.0201 115.271 36.6282 115.738 37.6368 115.923C41.6787 116.657 45.6987 117.532 49.7552 118.194C53.8881 118.867 53.9026 118.784 53.757 114.573V114.577ZM10.4215 40.8894C10.163 41.3017 9.90442 41.6128 9.75513 41.9672C8.40055 45.1863 7.09696 48.4234 5.71325 51.6316C5.2508 52.7023 5.49113 53.5305 6.34684 54.1816C8.84116 56.0732 11.3755 57.9215 13.888 59.7878C14.8603 60.5076 15.1297 60.0446 15.4392 59.0825C16.5644 55.5886 17.7369 52.1018 19.026 48.6658C19.4047 47.6566 19.0587 47.3709 18.3123 46.8537C15.8908 45.1682 13.5494 43.3634 11.1825 41.5983C10.9458 41.4211 10.7492 41.1968 10.4215 40.8894ZM97.2272 41.9564C100.996 40.6977 104.605 39.5041 108.188 38.2454C108.37 38.1803 108.534 37.3882 108.373 37.1458C106.229 33.8725 104.047 30.6245 101.804 27.4199C101.604 27.1306 100.861 26.9859 100.468 27.1016C97.8572 27.8503 95.2755 28.7112 92.6719 29.4816C91.9618 29.6914 91.6487 29.8433 92.0128 30.6824C93.4803 34.0425 94.8603 37.4424 96.3023 40.817C96.4589 41.1823 96.8157 41.4645 97.2272 41.96V41.9564ZM14.5872 61.3503C14.4961 61.2635 14.1102 60.8331 13.655 60.4931C11.0879 58.5942 8.4661 56.7604 5.94265 54.8001C5.22531 54.2394 4.90852 53.9718 4.71917 55.0677C4.11106 58.5653 3.46655 62.0592 2.93491 65.5677C2.85116 66.1247 3.10242 66.9927 3.51753 67.3255C6.24124 69.5065 9.04507 71.5899 11.8416 73.6804C12.4752 74.1543 12.7519 73.883 12.8575 73.1343C13.3855 69.3763 13.9536 65.6255 14.5872 61.3431V61.3503ZM26.1703 34.8817C25.868 34.661 25.584 34.4621 25.3073 34.2523C23.2353 32.7006 21.1197 31.2069 19.1206 29.5684C18.4288 29.0005 18.1411 29.1488 17.7369 29.7348C15.5885 32.8598 13.4511 35.9957 11.2808 39.1026C10.7346 39.8839 10.9641 40.477 11.6013 40.9653C13.8953 42.7195 16.2185 44.434 18.5198 46.1773C19.4447 46.8754 19.878 46.5933 20.3842 45.595C22.0446 42.3217 23.8289 39.1135 25.5694 35.8799C25.7406 35.5616 25.9372 35.2614 26.1666 34.878L26.1703 34.8817ZM77.6332 119.492C79.7488 119.308 81.8644 119.156 83.9764 118.935C91.5431 118.147 91.7106 118.02 95.0643 111.21C95.1189 111.101 95.1844 110.996 95.2208 110.884C95.3483 110.494 95.4648 110.099 95.585 109.709C95.1699 109.705 94.7511 109.662 94.3396 109.705C89.6387 110.182 84.9414 110.732 80.2331 111.137C76.6865 111.445 76.6828 111.362 75.7106 114.859C75.5649 115.38 75.4193 115.904 75.2627 116.422C74.6194 118.541 75.4096 119.565 77.6332 119.492ZM97.7625 108.812C102.398 107.17 106.669 105.665 110.926 104.131C111.17 104.045 111.396 103.733 111.509 103.477C112.834 100.446 114.141 97.4039 115.427 94.3584C115.529 94.1161 115.448 93.8014 115.452 93.5193C115.172 93.5772 114.884 93.6169 114.611 93.6965C110.267 94.995 105.919 96.279 101.59 97.6281C101.102 97.78 100.493 98.2177 100.341 98.6626C99.3246 101.621 98.4143 104.616 97.4967 107.607C97.4275 107.828 97.5986 108.121 97.7625 108.819V108.812ZM70.5399 30.5052C72.3205 30.5052 73.8353 30.4726 75.3501 30.516C76.3587 30.545 76.6173 30.1326 76.4061 29.2067C75.7834 26.447 75.2445 23.6692 74.5454 20.9312C74.4361 20.4971 73.6933 19.9618 73.2053 19.9257C70.5508 19.7195 67.8817 19.6869 65.2235 19.5206C64.3788 19.4663 64.0219 19.7448 63.869 20.5405C63.3592 23.199 62.8348 25.8574 62.2668 28.505C62.0228 29.6335 62.4379 30.0024 63.5485 30.0494C65.9664 30.1543 68.3842 30.3605 70.5363 30.5052H70.5399ZM60.4862 29.9011C60.8103 29.525 61.371 29.1633 61.4766 28.7003C62.1029 25.937 62.5981 23.1483 63.1917 20.3814C63.3665 19.5712 63.0897 19.3252 62.3287 19.2023C59.8162 18.7936 57.3219 18.28 54.8057 17.911C54.3323 17.8423 53.564 18.0846 53.32 18.4463C51.5176 21.0867 49.828 23.7994 48.0729 26.4723C47.534 27.2933 47.9636 27.4923 48.681 27.6297C52.4898 28.3567 56.295 29.0946 60.4862 29.9011ZM80.2841 30.3677C80.2877 30.4075 80.295 30.4473 80.2987 30.4835C83.2955 30.1182 86.2923 29.7348 89.2928 29.3984C90.2286 29.2935 90.4361 28.9607 89.93 28.1469C88.2186 25.3908 86.5727 22.5913 84.7848 19.8859C84.4898 19.4374 83.5904 19.148 82.9932 19.1806C80.7648 19.3035 78.5472 19.6508 76.3187 19.7846C75.2736 19.8461 75.1498 20.215 75.3647 21.112C75.9109 23.3871 76.366 25.6838 76.8831 27.9661C77.5167 30.762 76.7993 30.4509 79.9236 30.3822C80.0438 30.3822 80.1639 30.3713 80.2841 30.3677ZM12.5553 81.0915C12.5954 81.0915 12.6318 81.0915 12.6718 81.0915C12.6718 79.4639 12.6136 77.8363 12.6937 76.2123C12.741 75.2972 12.3805 74.8668 11.6377 74.364C8.98681 72.5809 6.42331 70.6712 3.8234 68.8084C3.53938 68.6059 3.25171 68.4033 2.96404 68.2008C2.86209 68.5914 2.65453 68.9857 2.67638 69.3691C2.85845 72.6749 3.05508 75.9772 3.31361 79.2794C3.35367 79.775 3.6122 80.4007 3.98362 80.7009C6.61266 82.8023 9.29268 84.8495 11.9763 86.8822C12.6172 87.3669 12.9413 87.1571 12.8794 86.3216C12.7447 84.5782 12.6573 82.8349 12.5517 81.0915H12.5553ZM28.7774 19.0395C28.457 19.2529 28.1293 19.4121 27.878 19.6508C25.1216 22.2622 22.3796 24.8953 19.6231 27.5031C18.9859 28.1035 19.0332 28.6642 19.6814 29.1488C21.6987 30.6679 23.716 32.1907 25.8025 33.6157C26.0829 33.8074 26.9604 33.6049 27.208 33.3011C29.5931 30.3496 31.8835 27.3259 34.2504 24.3564C34.7711 23.7053 34.6728 23.4594 34.0064 23C32.4188 21.9113 30.9222 20.6961 29.3892 19.5278C29.2035 19.3867 29.0287 19.2348 28.7811 19.0359L28.7774 19.0395ZM126.128 57.5272C125.076 53.9971 123.962 50.25 122.808 46.5173C122.786 46.4414 122.159 46.4016 121.977 46.5426C120.098 48.0364 118.223 49.5411 116.421 51.1217C116.071 51.4291 115.783 52.1308 115.874 52.5648C116.65 56.2758 117.502 59.9687 118.402 63.6543C118.471 63.9328 119.203 64.3488 119.381 64.2547C121.799 62.9454 123.995 61.354 125.499 58.9921C125.717 58.6485 125.83 58.2362 126.132 57.5309L126.128 57.5272ZM122.083 44.745C122.028 44.5388 122.017 44.4086 121.963 44.3074C120.091 40.8062 118.223 37.305 116.311 33.8255C116.253 33.7206 115.634 33.7604 115.43 33.9232C113.835 35.1963 112.259 36.4912 110.737 37.8475C110.449 38.1043 110.194 38.759 110.321 39.0664C111.825 42.6761 113.391 46.2605 115.001 49.8232C115.139 50.127 115.929 50.4959 116.057 50.3947C117.965 48.8575 119.822 47.2552 121.661 45.6312C121.905 45.4178 121.966 45.0018 122.087 44.745H122.083ZM17.4238 101.245C17.4529 101.668 17.3874 101.994 17.5075 102.225C18.8038 104.735 20.1002 107.246 21.4657 109.72C21.706 110.157 22.1939 110.573 22.6637 110.75C26.4434 112.193 30.2449 113.586 34.0465 114.964C34.3487 115.073 34.731 114.968 35.077 114.964C34.9932 114.624 34.924 114.277 34.8221 113.94C34.203 111.929 33.4966 109.944 32.9795 107.907C32.721 106.895 32.2404 106.475 31.2499 106.146C27.0041 104.743 22.8057 103.213 18.589 101.722C18.305 101.621 18.0282 101.491 17.4238 101.241V101.245ZM45.7096 14.9271C45.6878 14.9379 45.4402 14.9922 45.2763 15.1405C42.4288 17.6542 39.5849 20.1716 36.7593 22.7035C36.0492 23.34 36.6464 23.6294 37.1707 23.8175C40.0692 24.8628 42.9641 25.9081 45.8881 26.8738C46.2522 26.9931 46.9987 26.7653 47.2026 26.4578C49.0051 23.756 50.7383 21.0035 52.4534 18.2402C52.5918 18.0159 52.5153 17.3613 52.3842 17.3142C50.2395 16.504 48.0692 15.7553 45.7133 14.9271H45.7096ZM119.254 73.0873C119.214 73.0873 119.177 73.0909 119.137 73.0945C119.137 74.5376 119.174 75.9844 119.123 77.4276C119.093 78.3354 119.447 78.5995 120.135 78.0352C122.079 76.4402 124.024 74.8306 125.848 73.1017C126.354 72.6243 126.671 71.6984 126.664 70.9822C126.635 67.557 126.467 64.1317 126.329 60.7065C126.318 60.4461 126.132 60.1893 126.03 59.9325C125.808 60.1025 125.579 60.2689 125.36 60.4461C123.481 61.9435 121.653 63.5133 119.698 64.9058C118.951 65.4375 118.653 65.8896 118.747 66.7902C118.973 68.8844 119.09 70.9858 119.254 73.0873ZM91.0807 29.3948C94.5945 28.241 97.2891 27.3765 99.9582 26.4289C100.118 26.371 100.235 25.474 100.049 25.2787C97.4603 22.5949 94.8312 19.9474 92.1548 17.3504C91.8599 17.0647 91.1608 16.9706 90.7311 17.0828C89.158 17.4915 87.6287 18.0666 86.0592 18.5006C85.229 18.7285 85.1489 19.0106 85.5932 19.7231C87.3446 22.5262 89.0561 25.3547 90.742 28.194C90.9823 28.6027 91.0115 29.1344 91.0843 29.3948H91.0807ZM115.401 32.5053C115.139 32.093 114.931 31.6626 114.629 31.3081C112.452 28.7401 110.216 26.2191 108.086 23.6113C107.103 22.4105 106.487 22.4503 105.548 23.6836C104.914 24.5155 103.942 25.1376 103.024 25.6983C102.219 26.1902 102.092 26.5121 102.667 27.3367C104.801 30.3894 106.869 33.4891 108.898 36.6142C109.378 37.3556 109.775 37.7282 110.554 37.0844C111.938 35.9378 113.333 34.8021 114.684 33.6193C114.986 33.3553 115.139 32.9249 115.401 32.5089V32.5053ZM63.7197 125.876C64.5317 125.876 65.5003 125.869 66.4689 125.876C70.8021 125.916 70.762 125.902 72.5317 121.858C73.0633 120.639 72.8558 120.364 71.5267 120.339C67.2845 120.266 63.046 120.093 58.8075 119.905C54.0155 119.691 54.5472 118.44 55.1807 123.967C55.29 124.932 55.7306 125.316 56.6628 125.374C58.9605 125.515 61.2581 125.695 63.716 125.873L63.7197 125.876ZM110.263 105.679C109.87 105.679 109.575 105.614 109.32 105.69C105.438 106.819 101.56 107.944 97.6969 109.134C97.1981 109.289 96.6665 109.723 96.397 110.172C95.1444 112.291 93.9719 114.458 92.7848 116.617C92.6501 116.863 92.5882 117.149 92.4935 117.416C92.7848 117.416 93.0943 117.492 93.3601 117.409C96.6373 116.375 99.9145 115.337 103.174 114.248C103.661 114.085 104.157 113.723 104.477 113.322C106.269 111.061 108.006 108.757 109.761 106.464C109.906 106.276 110.023 106.063 110.267 105.679H110.263ZM37.3018 116.834C37.2909 116.935 37.1307 117.301 37.2508 117.492C38.2085 119.019 39.1807 120.541 40.2331 122.003C40.5207 122.4 41.0742 122.748 41.5622 122.842C45.5385 123.609 49.5258 124.328 53.5203 124.99C53.8007 125.037 54.4671 124.498 54.4561 124.256C54.3979 122.939 54.2486 121.616 53.9755 120.324C53.8954 119.945 53.3528 119.449 52.9559 119.384C47.8908 118.519 42.8111 117.72 37.3018 116.834ZM3.87074 82.8421C4.34411 84.5348 4.95221 86.3108 5.32363 88.1337C6.3869 93.3601 10.0319 96.3622 14.3905 98.7855C14.6746 98.9411 15.0278 98.97 15.3519 99.0568C15.3227 98.7711 15.3191 98.4781 15.2572 98.1996C14.5981 95.2626 13.9536 92.3257 13.2399 89.4032C13.1124 88.8824 12.7847 88.2892 12.3623 87.9818C9.78062 86.0974 7.14794 84.2817 4.52982 82.4515C4.36232 82.3321 4.14384 82.2851 3.9472 82.2055C3.929 82.3755 3.90715 82.5455 3.87074 82.8493V82.8421ZM44.7301 14.5147C44.6209 14.3267 44.5881 14.2001 44.508 14.135C43.361 13.256 42.2285 12.3554 41.0342 11.5416C40.8412 11.4078 40.3278 11.585 40.0474 11.755C36.752 13.7696 33.4748 15.8168 30.1903 17.8495C29.4839 18.2872 29.4729 18.7646 30.1138 19.2384C31.6104 20.3488 33.0888 21.4954 34.6582 22.4973C34.975 22.6998 35.8052 22.5045 36.1475 22.2043C38.8348 19.8714 41.4602 17.4698 44.1038 15.0862C44.3187 14.8945 44.5262 14.6956 44.7228 14.5111L44.7301 14.5147ZM75.1935 125.71C77.6551 125.406 80.2477 125.164 82.8075 124.733C83.7689 124.571 84.7848 124.129 85.5495 123.533C86.8239 122.538 87.9382 121.33 89.0816 120.176C89.3911 119.861 89.5622 119.413 89.7989 119.022C89.3255 119.033 88.8522 119.011 88.3824 119.055C84.4134 119.431 80.448 119.966 76.468 120.147C74.5563 120.234 73.442 120.755 72.9286 122.614C72.6337 123.681 72.0802 124.679 71.6396 125.71H75.1899H75.1935ZM126.474 75.4925C126.314 74.9464 126.223 74.6389 126.132 74.3315C125.903 74.5051 125.677 74.6823 125.448 74.8559C123.678 76.1978 121.897 77.5252 120.149 78.8924C119.712 79.236 119.133 79.6701 119.046 80.1439C118.394 83.6198 117.848 87.1173 117.273 90.6077C117.182 91.1538 117.164 91.6783 117.954 91.1972C120.557 89.6166 123.201 87.9384 124.177 84.9218C125.189 81.7968 125.753 78.5271 126.474 75.4961V75.4925ZM95.4248 13.7552C94.6783 14.4207 94.0338 15.1513 93.2436 15.6577C92.3442 16.2328 92.4716 16.58 93.1598 17.2347C95.3009 19.2746 97.4311 21.329 99.4594 23.4775C101.844 26.0057 102.026 26.06 104.619 23.633C104.881 23.3871 105.111 23.1013 105.369 22.8481C106.09 22.1464 106.036 21.5424 105.216 20.9348C102.212 18.7031 99.2263 16.4498 96.2295 14.2109C95.9928 14.0337 95.7124 13.9179 95.4248 13.7552ZM69.9099 19.1625C70.9696 19.1625 71.9382 19.1299 72.9068 19.1733C73.8426 19.2131 74.0865 18.8514 73.7989 17.9906C73.2126 16.2219 72.6992 14.4279 72.0693 12.6773C71.8653 12.1095 71.4393 11.245 71.0242 11.1872C69.4876 10.981 67.9108 11.0352 66.3487 11.0606C66.2176 11.0606 66.0501 11.5561 65.9773 11.8382C65.4821 13.7588 65.0196 15.6866 64.5135 17.6072C64.2841 18.4789 64.5972 18.8044 65.4712 18.8478C66.9823 18.9201 68.4898 19.0612 69.9099 19.1661V19.1625ZM62.7584 18.6633C63.0497 18.327 63.6032 17.9436 63.7816 17.4336C64.1967 16.2472 64.4261 14.9958 64.7392 13.7733C65.4639 10.9593 65.4712 10.9267 62.5508 10.3625C61.7898 10.2142 60.65 10.0406 60.2349 10.4421C58.3778 12.2397 56.7138 14.2398 54.9878 16.1677C54.467 16.75 54.6309 17.1298 55.3701 17.2708C57.686 17.7157 60.0055 18.1461 62.762 18.6633H62.7584ZM76.4134 19.1444C78.3906 18.9238 80.3678 18.6706 82.3487 18.4934C83.5431 18.3885 83.503 17.9544 82.8403 17.1949C81.6569 15.8349 80.3715 14.54 79.3483 13.0716C77.8444 10.9123 75.9254 10.3914 73.453 10.9267C72.5535 11.1221 72.3678 11.3137 72.681 12.1782C73.351 14.0373 73.9955 15.9145 74.4762 17.8315C74.7638 18.9853 75.3574 19.2891 76.4134 19.1408V19.1444ZM17.1725 23.7741C17.4311 24.8266 17.584 25.5861 17.8061 26.3276C18.1375 27.4308 18.5307 27.6297 19.4629 26.6604C21.5931 24.4432 23.7633 22.2441 26.1084 20.262C27.5467 19.0431 28.7192 18.034 27.4556 16.0772C27.3646 15.9362 27.35 15.7264 27.361 15.5492C27.4338 14.3447 27.0223 14.1567 26.1011 14.9271C23.5521 17.0538 20.9413 19.1082 18.4798 21.329C17.7952 21.9475 17.5476 23.0398 17.1725 23.7741ZM8.80838 35.2072C9.11425 36.2597 9.35458 37.2435 9.69323 38.1948C10.0027 39.0628 10.3414 39.193 10.9386 38.2779C12.6718 35.6087 14.3942 32.9177 16.3387 30.4039C17.4165 29.0114 18.2103 27.8684 17.005 26.1938C16.7174 25.7923 16.7647 25.1557 16.6482 24.6313C16.5863 24.3528 16.5025 24.0779 16.4261 23.7994C16.153 23.9766 15.7997 24.096 15.6177 24.3419C13.6441 26.9895 11.6377 29.619 9.77698 32.3426C9.23078 33.1419 9.12154 34.2306 8.80474 35.2072H8.80838ZM56.2877 8.43468C56.102 8.50701 55.8617 8.56488 55.6578 8.68786C52.8467 10.3553 50.0428 12.0263 47.239 13.7045C46.427 14.1928 46.802 14.5256 47.4284 14.7498C49.1361 15.3683 50.8403 16.0121 52.5772 16.5294C52.985 16.6523 53.7024 16.4751 53.9864 16.1677C55.7597 14.2688 57.4602 12.3048 59.1498 10.3336C59.2991 10.1563 59.3027 9.56316 59.219 9.52699C58.2759 9.12913 57.3 8.79999 56.2841 8.43829L56.2877 8.43468ZM84.8394 18.1714C86.5727 17.6434 88.1312 17.1659 89.6897 16.6885C90.5927 16.4136 90.7784 16.0447 89.8972 15.4479C87.4502 13.7877 84.9814 12.1565 82.5927 10.4168C81.3801 9.53422 80.2841 9.51975 78.9259 10.0623C77.9791 10.4421 77.9391 10.6048 78.5945 11.321C80.3824 13.2777 82.0902 15.3068 83.8453 17.2925C84.1366 17.6217 84.508 17.8857 84.8358 18.1714H84.8394ZM27.838 14.7064C28.1584 15.7662 28.3041 16.4787 28.6063 17.1153C28.701 17.3179 29.3273 17.5132 29.5166 17.3974C32.9723 15.3068 36.4133 13.1909 39.818 11.028C41.016 10.2648 39.5995 9.30997 39.8726 8.44914C39.4356 8.40212 38.9113 8.17787 38.5763 8.34064C35.4702 9.81272 32.3678 11.292 29.3382 12.9088C28.6609 13.2705 28.2713 14.1639 27.8343 14.71L27.838 14.7064ZM3.23714 47.9894C3.53573 48.9913 3.81976 50.0293 4.16568 51.0493C4.24579 51.2844 4.5371 51.4508 4.73009 51.6461C4.88303 51.411 5.07602 51.1904 5.17797 50.9336C6.20483 48.4234 7.09332 45.8518 8.26947 43.4176C9.22714 41.4355 10.3013 39.6054 8.65181 37.5003C8.44789 37.2399 8.47338 36.8095 8.3605 36.4659C8.28039 36.2163 8.1493 35.9848 8.04006 35.7425C7.858 35.9631 7.61038 36.1548 7.50843 36.4044C6.32135 39.3015 5.13064 42.1951 3.99818 45.1139C3.65226 46.0037 3.49932 46.9658 3.2335 47.9894H3.23714ZM122.837 89.1862C122.775 88.9837 122.727 88.8426 122.684 88.6979C122.534 88.7847 122.378 88.8607 122.24 88.9583C120.608 90.0941 118.977 91.2298 117.36 92.3836C117.076 92.5861 116.741 92.8248 116.617 93.125C115.368 96.185 114.159 99.263 112.947 102.337C112.885 102.493 112.892 102.674 112.87 102.844C113.074 102.818 113.307 102.844 113.478 102.753C113.854 102.558 114.192 102.305 114.549 102.081C117.404 100.283 118.82 97.3894 120.291 94.5573C121.205 92.7959 121.992 90.973 122.837 89.1826V89.1862ZM53.5421 6.52494C52.8102 6.72749 52.3915 6.81068 51.9946 6.95535C49.1034 8.01873 46.2012 9.05317 43.3391 10.1853C41.5476 10.8942 41.5585 11.1221 43.077 12.3012C45.3564 14.0698 45.3273 14.0301 47.7197 12.4893C49.7479 11.1835 51.8526 9.99719 53.9136 8.73488C54.3432 8.47084 54.7147 8.11277 55.1152 7.79448C54.5362 7.3279 53.9573 6.8577 53.5385 6.5177L53.5421 6.52494ZM102.107 115.854C101.364 115.951 101.098 115.959 100.85 116.027C98.0538 116.787 95.2536 117.532 92.4753 118.349C91.8781 118.527 91.27 118.888 90.8258 119.326C89.5804 120.549 88.4152 121.847 87.2281 123.127C87.0315 123.341 86.8749 123.59 86.7001 123.826C86.9769 123.811 87.2645 123.833 87.534 123.782C92.8576 122.744 97.3219 120.096 101.265 116.49C101.397 116.367 101.553 116.273 102.11 115.861L102.107 115.854ZM83.0806 7.8415C82.7238 8.14532 82.3305 8.47808 81.9336 8.81445C82.1885 9.09657 82.3997 9.43657 82.7056 9.64635C85.1344 11.3174 87.6141 12.9233 90.0174 14.6305C91.7907 15.8928 92.184 15.8964 93.7716 14.352C94.5108 13.6358 94.6273 13.1186 93.564 12.6303C90.3924 11.1618 87.239 9.66443 84.0747 8.18511C83.8053 8.05851 83.5103 7.98618 83.0806 7.83788V7.8415ZM95.5449 12.0118C95.8144 12.4856 95.971 13.1041 96.3715 13.408C99.4302 15.7481 102.536 18.0304 105.639 20.3163C105.85 20.4718 106.152 20.5007 106.411 20.5912C106.48 20.3091 106.691 19.9618 106.596 19.7557C106.039 18.544 105.704 16.9996 104.75 16.2472C102.351 14.3556 99.6596 12.8256 97.0816 11.1618C96.204 10.594 95.443 10.301 95.5486 12.0154L95.5449 12.0118ZM116.148 30.0639C115.947 29.2899 115.966 28.4363 115.554 27.9263C113.063 24.8411 110.482 21.8318 107.911 18.8116C107.82 18.7068 107.463 18.667 107.368 18.7502C107.103 18.9889 107.452 21.9584 107.732 22.2767C110.125 24.9966 112.51 27.7201 114.906 30.4401C115.135 30.7005 115.416 30.9211 115.674 31.1598C115.834 30.7909 115.995 30.4256 116.151 30.0639H116.148ZM62.4525 126.603C62.4525 126.567 62.4525 126.531 62.4525 126.495C60.7593 126.383 59.0661 126.238 57.3728 126.173C56.8376 126.151 56.2914 126.336 55.7524 126.426C56.0583 127.124 56.3023 127.858 56.7028 128.499C56.8339 128.708 57.3728 128.712 57.7297 128.73C60.3915 128.86 63.0606 129.117 65.7151 129.012C66.793 128.969 67.8562 128.162 68.8831 127.623C69.1161 127.5 69.1708 127.052 69.3055 126.752C69.0215 126.701 68.7374 126.611 68.4498 126.611C66.4507 126.6 64.4516 126.603 62.4525 126.603ZM0.666364 60.938C0.972236 62.1678 1.20892 63.2167 1.51115 64.2439C1.58034 64.4754 1.88257 64.6417 2.07556 64.837C2.14474 64.6092 2.23214 64.3849 2.27583 64.1535C2.77834 61.3756 3.0041 58.5147 3.85253 55.8454C4.51889 53.7584 4.02731 52.138 3.1097 50.4272C3.00774 50.2355 2.82567 50.0872 2.68002 49.9208C2.59627 50.1415 2.47246 50.3549 2.43241 50.5864C1.82795 54.0731 1.23805 57.5634 0.662723 60.938H0.666364ZM40.5826 8.26468C40.7793 9.6572 40.8812 10.4529 42.3159 9.8706C45.5676 8.55404 48.8849 7.40385 52.1584 6.14154C52.5044 6.00772 52.7301 5.57369 53.0105 5.2771C52.6355 5.09263 52.2131 4.68754 51.8963 4.75988C48.4734 5.5339 45.0578 6.34409 41.6678 7.24471C41.1762 7.37492 40.823 8.02596 40.5826 8.26468ZM54.2522 128.354C55.0752 128.484 55.5485 128.408 55.2281 127.352C54.9441 126.415 54.6236 125.858 53.4693 125.703C50.1776 125.261 46.9113 124.618 43.6341 124.071C43.2044 123.999 42.7602 124.032 42.3196 124.014C42.6473 124.346 42.9495 124.715 43.31 125.008C46.4925 127.627 50.5162 127.536 54.2522 128.35V128.354ZM122.928 41.8804C122.666 40.9906 122.516 40.0213 122.108 39.1713C120.885 36.6214 119.589 34.104 118.252 31.6083C117.928 31.0043 117.338 30.5413 116.872 30.0097C116.778 30.9428 116.661 31.8724 116.61 32.8055C116.599 33.0008 116.861 33.2034 116.978 33.4132C118.591 36.3067 120.197 39.2039 121.813 42.0938C122.006 42.4374 122.265 42.7412 122.491 43.0668C122.622 42.7051 122.753 42.347 122.924 41.8768L122.928 41.8804ZM95.0934 11.8961C95.1553 11.6899 95.2172 11.4837 95.2828 11.2776C94.7074 10.6555 94.2486 9.75124 93.5349 9.4655C90.5709 8.28276 87.534 7.27364 84.508 6.24643C84.1803 6.13431 83.7543 6.32239 83.3719 6.36941C83.6086 6.71302 83.7689 7.21215 84.0966 7.3713C87.4102 8.96998 90.742 10.5216 94.092 12.0444C94.3506 12.1601 94.7584 11.9539 95.0934 11.8961ZM71.0096 128.915C75.463 128.549 78.6091 127.808 81.1835 126.401C81.4348 126.263 81.6496 126.064 81.879 125.894C81.5695 125.855 81.2527 125.757 80.9468 125.779C77.8699 126.021 74.7893 126.26 71.716 126.56C71.2281 126.607 70.6892 126.857 70.3214 127.178C69.8444 127.594 69.5167 128.177 69.1234 128.687L71.006 128.915H71.0096ZM69.3565 10.3733C71.1698 10.4059 71.2281 10.3155 70.4452 8.62999C70.2449 8.19596 70.0483 7.75831 69.808 7.3496C69.3637 6.59366 68.8904 5.85581 68.4279 5.11072C68.0456 5.93176 67.5941 6.7311 67.2955 7.5847C66.3342 10.3155 66.356 10.3227 69.3565 10.3733ZM52.6318 2.81759C50.4725 3.17566 48.4188 3.39268 46.4343 3.88458C45.0615 4.22457 43.7761 4.92264 42.4689 5.50496C42.2613 5.599 42.1557 5.92453 42.0064 6.14154C42.2358 6.13431 42.4725 6.15963 42.6946 6.11261C45.9937 5.38199 49.2927 4.6586 52.5845 3.8882C52.9377 3.80501 53.229 3.4614 53.5494 3.24077C53.2254 3.09247 52.9049 2.94418 52.6318 2.81759ZM64.9286 10.1274C65.2782 9.80187 65.8025 9.52699 65.9846 9.10381C66.4361 8.0549 66.7383 6.9445 67.077 5.85219C67.1425 5.64602 67.0952 5.40731 67.0988 5.17944C66.8804 5.23731 66.6255 5.23731 66.4507 5.35667C65.5585 5.97878 64.6555 6.59366 63.8144 7.28088C63.0861 7.87767 62.4306 8.5685 61.7461 9.21593C62.711 9.49082 63.676 9.7657 64.925 10.1202L64.9286 10.1274ZM73.0815 10.5867C73.1799 10.4819 73.2818 10.377 73.3801 10.2721C73.6787 10.2504 73.9882 10.2612 74.2795 10.1997C74.7274 10.1057 75.1644 9.96464 75.605 9.84166C75.3246 9.4872 75.0988 9.06764 74.7529 8.79637C73.4784 7.7981 72.1712 6.83961 70.8567 5.88836C70.5799 5.68943 70.2377 5.5773 69.9281 5.42539C70.0228 5.79794 70.0702 6.18856 70.2231 6.53579C70.6091 7.41109 70.955 8.32255 71.4866 9.10742C71.8835 9.69337 72.5426 10.1021 73.0852 10.5904L73.0815 10.5867ZM126.824 54.6662C125.972 51.4074 125.072 47.9351 124.144 44.4665C124.042 44.0867 123.78 43.7467 123.59 43.3887C123.416 43.8263 123.201 44.2567 123.081 44.7088C123.026 44.915 123.139 45.1718 123.204 45.3961C124.162 48.6079 125.12 51.8197 126.092 55.0279C126.154 55.2305 126.358 55.3933 126.493 55.5705C126.565 55.3679 126.638 55.1654 126.82 54.6662H126.824ZM64.6446 5.11072C62.4889 5.92091 60.2386 6.75642 58.0028 7.6281C57.8972 7.66789 57.8863 8.23574 57.9008 8.23936C58.8621 8.43829 60.0565 9.04594 60.752 8.68786C62.2704 7.91022 63.5412 6.64791 64.9031 5.57007C65.0087 5.48688 65.0342 5.30603 65.0961 5.17221C64.9832 5.15774 64.8703 5.13965 64.6482 5.11072H64.6446ZM1.90442 71.749C1.94447 71.749 1.98088 71.749 2.02094 71.749C2.02094 70.4252 2.08648 69.0978 1.99545 67.7776C1.94811 67.094 1.65316 66.4177 1.42012 65.7558C1.35093 65.5604 1.11789 65.423 0.961312 65.2602C0.881203 65.4555 0.717342 65.6545 0.735549 65.8389C1.0305 69.3148 1.33637 72.7907 1.67137 76.2593C1.69322 76.5016 1.94811 76.7223 2.09012 76.9538C2.12654 76.7223 2.19936 76.4836 2.18844 76.2557C2.10469 74.7547 1.99909 73.25 1.90078 71.749H1.90442ZM77.3674 9.71869C77.7352 9.63911 77.9828 9.61741 78.2049 9.53061C78.6382 9.36061 79.0606 9.15806 79.4866 8.96636C79.1225 8.70233 78.7912 8.36957 78.387 8.18872C76.5736 7.38215 74.7384 6.61536 72.9068 5.84496C72.6992 5.75815 72.4625 5.73645 72.2404 5.68581C72.3424 5.85942 72.4006 6.08729 72.5463 6.20303C73.8644 7.25194 75.1899 8.29 76.5299 9.30636C76.7993 9.5089 77.1453 9.61379 77.3674 9.71869ZM42.6218 125.355C42.163 125.005 41.9372 124.889 41.7843 124.712C39.7379 122.31 36.5116 122.578 33.9663 121.312C33.879 121.268 33.7479 121.323 33.635 121.33C33.7151 121.456 33.7661 121.652 33.8826 121.706C36.4971 122.932 39.1152 124.144 41.737 125.345C41.8826 125.413 42.0902 125.352 42.6218 125.352V125.355ZM62.0046 4.78881C59.9108 5.19391 57.726 5.60624 55.5485 6.05112C55.3082 6.09814 55.1079 6.32962 54.8894 6.4743C55.046 6.6443 55.1662 6.89025 55.3628 6.96982C55.7852 7.14705 56.3132 7.45087 56.6737 7.33151C58.549 6.69855 60.3879 5.94985 62.2304 5.23008C62.3833 5.16859 62.4925 4.99859 62.62 4.88285C62.4489 4.85753 62.2777 4.83222 62.0046 4.79243V4.78881ZM75.3319 5.50135C75.026 5.55198 74.9131 5.57007 74.7966 5.59177C74.8986 5.7039 74.9787 5.86304 75.1061 5.92091C76.8503 6.72749 78.5872 7.55215 80.3606 8.29C80.6701 8.42021 81.1653 8.23936 81.5185 8.0766C81.635 8.02235 81.6314 7.35321 81.5695 7.33513C79.443 6.68047 77.3055 6.0692 75.3319 5.50135ZM54.4743 5.47603C56.5936 5.06732 58.4871 4.70562 60.3842 4.3367C60.4971 4.315 60.5991 4.25351 60.7083 4.2101C60.5881 4.15223 60.4643 4.03649 60.3478 4.04011C58.4179 4.145 56.488 4.23904 54.5654 4.40542C54.3178 4.42712 54.0993 4.81775 53.8699 5.03838C54.1211 5.21923 54.3687 5.40007 54.478 5.47603H54.4743ZM77.0287 4.76711C76.854 4.80328 76.5918 4.85392 76.3333 4.90817C76.5991 5.03838 76.854 5.21561 77.138 5.29518C78.5363 5.69666 79.9345 6.09452 81.3474 6.44175C81.686 6.52494 82.0756 6.40196 82.4434 6.37664C82.1667 6.10176 81.9263 5.65326 81.6023 5.58454C80.1239 5.26263 78.62 5.042 77.0324 4.77073L77.0287 4.76711ZM69.4293 1.27316C68.4789 1.19359 67.8271 1.10316 67.1717 1.09955C66.9459 1.09955 66.7201 1.30933 66.4907 1.42507C67.0697 1.89889 67.6487 2.3727 68.224 2.85014C68.5408 2.43781 68.854 2.02548 69.4256 1.27316H69.4293ZM77.2581 3.55544C77.2545 3.58799 77.2509 3.62055 77.2472 3.6531C76.8867 3.6531 76.5226 3.64225 76.1621 3.65671C75.9254 3.66756 75.6887 3.72182 75.452 3.75437C75.6705 3.82309 75.8817 3.92075 76.1038 3.9533C77.3565 4.13777 78.6091 4.31499 79.8653 4.47052C80.0583 4.49584 80.2659 4.39818 80.4662 4.3584C80.2914 4.21372 80.1312 3.98224 79.9345 3.94607C79.0497 3.78331 78.1539 3.67842 77.2618 3.55182L77.2581 3.55544ZM72.7575 1.71804C72.0073 1.59145 71.4794 1.38167 71.006 1.46124C70.5362 1.54081 70.1066 1.89889 69.6878 2.17739C69.5859 2.24611 69.6041 2.48845 69.564 2.64759C70.0192 2.59695 70.4743 2.57525 70.9222 2.48845C71.3337 2.40887 71.7379 2.27866 72.1384 2.14122C72.2768 2.0942 72.3897 1.97123 72.7575 1.71081V1.71804ZM55.5631 3.55906C57.067 3.45778 58.3269 3.37821 59.5904 3.28055C59.7579 3.26609 59.9181 3.16843 60.082 3.10694C59.9327 3.04907 59.7798 2.94418 59.6305 2.94056C58.3669 2.89716 57.1034 2.84291 55.8398 2.86822C55.5376 2.87546 55.239 3.17205 54.9368 3.33481C55.2172 3.43608 55.4975 3.53736 55.5667 3.56267L55.5631 3.55906ZM63.5267 1.05976C63.29 1.12486 63.0169 1.20082 62.7474 1.27678C62.9841 1.43592 63.2026 1.63485 63.4575 1.74698C63.7889 1.89165 64.1421 2.00739 64.4953 2.06165C64.965 2.13399 65.4457 2.13399 65.919 2.16654C65.4966 1.84825 65.1034 1.46847 64.6373 1.22614C64.3351 1.07061 63.9309 1.1104 63.5267 1.05614V1.05976ZM59.9036 1.57336C59.889 1.61677 59.8781 1.65655 59.8635 1.69996C59.7433 1.69272 59.6195 1.65655 59.5067 1.68187C59.1644 1.75421 58.8294 1.85187 58.4871 1.93867C58.793 2.0291 59.0952 2.13399 59.4047 2.20633C59.5758 2.24611 59.7615 2.23164 59.94 2.2425C60.7629 2.2859 61.5859 2.3293 62.4052 2.3727C61.5713 2.10867 60.7338 1.84102 59.8999 1.57698L59.9036 1.57336ZM54.3214 2.25696C54.7183 2.10867 55.2354 1.91335 55.7561 1.72166C55.5594 1.66017 55.3519 1.51911 55.1698 1.54805C54.4161 1.65655 53.6696 1.8157 52.9195 1.95676C53.3237 2.04356 53.7279 2.13037 54.3214 2.26058V2.25696ZM75.2008 2.97311C75.452 2.92248 75.9946 2.81397 76.5372 2.70546C75.9291 2.60419 75.3246 2.48121 74.7165 2.40887C74.4871 2.37994 74.2395 2.43419 74.0137 2.4993C73.8062 2.55717 73.6168 2.67291 73.4165 2.76333C73.6095 2.83205 73.7989 2.94056 73.9992 2.96588C74.2905 3.00205 74.5927 2.97311 75.2008 2.97311ZM127.064 58.5436C127.017 58.4496 126.966 58.3555 126.919 58.2579C126.875 58.3447 126.78 58.4459 126.795 58.5219C126.82 58.6413 126.919 58.7425 126.984 58.851C127.01 58.7498 127.035 58.6485 127.064 58.5436Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/StartScreen.js
function StartScreen(props) {
  const WelcomeScreen = props.welcomeScreen;
  if (WelcomeScreen) {
    if (typeof WelcomeScreen === "function") {
      return (0, import_jsx_runtime57.jsx)(WelcomeScreen, {});
    }
  }
  const title = (typeof WelcomeScreen === "object" ? WelcomeScreen == null ? void 0 : WelcomeScreen.title : void 0) || props.connectLocale.welcomeScreen.defaultTitle;
  const subtitle = (typeof WelcomeScreen === "object" ? WelcomeScreen == null ? void 0 : WelcomeScreen.subtitle : void 0) || props.connectLocale.welcomeScreen.defaultSubtitle;
  const img = typeof WelcomeScreen === "object" ? WelcomeScreen == null ? void 0 : WelcomeScreen.img : void 0;
  const showTOS = props.meta.termsOfServiceUrl || props.meta.privacyPolicyUrl;
  return (0, import_jsx_runtime57.jsxs)(Container, { fullHeight: true, animate: "fadein", flex: "column", children: [(0, import_jsx_runtime57.jsxs)(Container, { expand: true, flex: "column", center: "both", style: {
    minHeight: "300px"
  }, p: "lg", children: [(0, import_jsx_runtime57.jsx)(Container, { flex: "row", center: "x", children: img ? (0, import_jsx_runtime57.jsx)(Img, { src: img.src, width: img.width ? String(img.width) : void 0, height: img.height ? String(img.height) : void 0, client: props.client }) : (0, import_jsx_runtime57.jsx)(GlobalContainer, { children: (0, import_jsx_runtime57.jsx)(GlobeIcon, { size: "150" }) }) }), (0, import_jsx_runtime57.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime57.jsx)(Text, { center: true, color: "primaryText", weight: 600, multiline: true, children: title }), (0, import_jsx_runtime57.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime57.jsx)(Text, { color: "secondaryText", multiline: true, style: {
    textAlign: "center"
  }, children: subtitle }), (0, import_jsx_runtime57.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime57.jsx)(Link, { target: "_blank", center: true, href: "https://blog.thirdweb.com/web3-wallet/", children: props.connectLocale.newToWallets })] }), (0, import_jsx_runtime57.jsx)(Container, { py: "lg", flex: "column", gap: "lg", children: (0, import_jsx_runtime57.jsxs)("div", { children: [showTOS && (0, import_jsx_runtime57.jsx)(TOS, { termsOfServiceUrl: props.meta.termsOfServiceUrl, privacyPolicyUrl: props.meta.privacyPolicyUrl, locale: props.connectLocale.agreement }), props.meta.showThirdwebBranding !== false && (0, import_jsx_runtime57.jsx)(Container, { style: {
    paddingTop: spacing.xl
  }, children: (0, import_jsx_runtime57.jsx)(PoweredByThirdweb, {}) })] }) })] });
}
var floatingAnimation = keyframes`
  from {
    transform: translateY(4px);
  }
  to {
    transform: translateY(-4px);
  }
`;
var GlobalContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.accentText,
    filter: `drop-shadow(0px 6px 10px ${theme.colors.accentText})`,
    animation: `${floatingAnimation} 2s ease infinite alternate`
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModalSkeleton.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
function ConnectModalWideLayout(props) {
  return (0, import_jsx_runtime58.jsxs)("div", { style: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "300px 1fr"
  }, children: [(0, import_jsx_runtime58.jsxs)(LeftContainer, { children: [" ", props.left, " "] }), (0, import_jsx_runtime58.jsx)(Container, { flex: "column", scrollY: true, relative: true, children: props.right })] });
}
function ConnectModalCompactLayout(props) {
  return (0, import_jsx_runtime58.jsx)(Container, { flex: "column", scrollY: true, relative: true, style: {
    maxHeight: compactModalMaxHeight
  }, children: props.children });
}
var LeftContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    ...noScrollBar,
    position: "relative",
    borderRight: `1px solid ${theme.colors.separatorLine}`
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModalContent.js
var AllWalletsUI = (0, import_react38.lazy)(() => import("./AllWalletsUI-27PR6NO2.js"));
var ConnectModalContent = (props) => {
  const { setModalVisibility, onClose, shouldSetActive } = props;
  const { screen, setScreen, initialScreen } = props.screenSetup;
  const setActiveWallet = useSetActiveWallet();
  const setSelectionData = useSetSelectionData();
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const showSignatureScreen = siweAuth.requiresAuth && !siweAuth.isLoggedIn;
  const connectionManager = useConnectionManager();
  const handleConnected = (0, import_react38.useCallback)((wallet) => {
    if (shouldSetActive) {
      setActiveWallet(wallet);
    } else {
      connectionManager.addConnectedWallet(wallet);
    }
    if (props.onConnect) {
      props.onConnect(wallet);
    }
    onModalUnmount(() => {
      setSelectionData({});
      setModalVisibility(true);
    });
    if (showSignatureScreen) {
      setScreen(reservedScreens.signIn);
    } else {
      setScreen(initialScreen);
      onClose == null ? void 0 : onClose();
    }
  }, [
    setModalVisibility,
    onClose,
    props.onConnect,
    setActiveWallet,
    showSignatureScreen,
    setScreen,
    setSelectionData,
    shouldSetActive,
    initialScreen,
    connectionManager
  ]);
  const handleBack = (0, import_react38.useCallback)(() => {
    setSelectionData({});
    setScreen(initialScreen);
  }, [setScreen, initialScreen, setSelectionData]);
  const walletList = (0, import_jsx_runtime59.jsx)(WalletSelector, { title: props.meta.title || props.connectLocale.defaultModalTitle, wallets: props.wallets, selectWallet: (newWallet) => {
    if (newWallet.onConnectRequested) {
      newWallet.onConnectRequested().then(() => setScreen(newWallet)).catch(console.error);
    } else {
      setScreen(newWallet);
    }
  }, onShowAll: () => {
    setScreen(reservedScreens.showAll);
  }, done: handleConnected, goBack: props.wallets.length > 1 ? handleBack : void 0, setModalVisibility, client: props.client, connectLocale: props.connectLocale, hideHeader: props.hideHeader, recommendedWallets: props.recommendedWallets, accountAbstraction: props.accountAbstraction, chain: props.chain, showAllWallets: props.showAllWallets, chains: props.chains, walletConnect: props.walletConnect, meta: props.meta, size: props.size, modalHeader: props.modalHeader, walletIdsToHide: props.walletIdsToHide });
  const showAll = (0, import_jsx_runtime59.jsx)(import_react38.Suspense, { fallback: (0, import_jsx_runtime59.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime59.jsx)(AllWalletsUI, { onBack: handleBack, onSelect: setScreen, client: props.client, connectLocale: props.connectLocale, recommendedWallets: props.recommendedWallets, specifiedWallets: props.wallets, size: props.size }) });
  const getStarted = (0, import_jsx_runtime59.jsx)(StartScreen, { client: props.client, connectLocale: props.connectLocale, meta: props.meta, welcomeScreen: props.welcomeScreen });
  const goBack = props.wallets.length > 1 ? handleBack : void 0;
  const getWalletUI = (wallet) => {
    if (props.accountAbstraction) {
      return (0, import_jsx_runtime59.jsx)(SmartConnectUI, { accountAbstraction: props.accountAbstraction, done: (smartWallet2) => {
        handleConnected(smartWallet2);
      }, personalWallet: wallet, onBack: goBack, setModalVisibility: props.setModalVisibility, meta: props.meta, size: props.size, chain: props.chain, chains: props.chains, client: props.client, walletConnect: props.walletConnect, connectLocale: props.connectLocale }, wallet.id);
    }
    return (0, import_jsx_runtime59.jsx)(AnyWalletConnectUI, { wallet, onBack: goBack, done: () => {
      handleConnected(wallet);
    }, setModalVisibility: props.setModalVisibility, chain: props.chain, chains: props.chains, client: props.client, meta: props.meta, size: props.size, walletConnect: props.walletConnect, connectLocale: props.connectLocale }, wallet.id);
  };
  const signatureScreen = (0, import_jsx_runtime59.jsx)(SignatureScreen, { onDone: onClose, modalSize: props.size, termsOfServiceUrl: props.meta.termsOfServiceUrl, privacyPolicyUrl: props.meta.privacyPolicyUrl, auth: props.auth, client: props.client, connectLocale: props.connectLocale });
  return (0, import_jsx_runtime59.jsx)(ScreenSetupContext.Provider, { value: props.screenSetup, children: props.size === "wide" ? (0, import_jsx_runtime59.jsx)(ConnectModalWideLayout, { left: walletList, right: (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [screen === reservedScreens.signIn && signatureScreen, screen === reservedScreens.main && getStarted, screen === reservedScreens.getStarted && getStarted, screen === reservedScreens.showAll && showAll, typeof screen !== "string" && getWalletUI(screen)] }) }) : (0, import_jsx_runtime59.jsxs)(ConnectModalCompactLayout, { children: [screen === reservedScreens.signIn && signatureScreen, screen === reservedScreens.main && walletList, screen === reservedScreens.getStarted && getStarted, screen === reservedScreens.showAll && showAll, typeof screen !== "string" && getWalletUI(screen)] }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletSwitcherConnectionScreen.js
function WalletSwitcherConnectionScreen(props) {
  const connectedWallets = useConnectedWallets();
  const wallets = props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }).filter((w) => w.id !== "inApp");
  const screenSetup = useSetupScreen({
    size: "compact",
    welcomeScreen: void 0,
    wallets
  });
  return (0, import_jsx_runtime60.jsx)(ConnectModalContent, { accountAbstraction: props.accountAbstraction, auth: void 0, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, hideHeader: props.isEmbed, isOpen: true, meta: {
    showThirdwebBranding: false
  }, onClose: () => {
  }, onConnect: (w) => {
    props.onSelect(w);
    props.onBack();
  }, recommendedWallets: props.recommendedWallets, screenSetup, welcomeScreen: void 0, wallets, setModalVisibility: () => {
  }, shouldSetActive: false, showAllWallets: props.showAllWallets, size: "compact", walletConnect: props.walletConnect, modalHeader: {
    title: "Connect",
    onBack: props.onBack
  }, walletIdsToHide: connectedWallets.map((x) => x.id) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/formatTokenBalance.js
function formatTokenBalance(balanceData, showSymbol = true, decimals2 = 5) {
  return formatNumber(Number(balanceData.displayValue), decimals2) + (showSymbol ? ` ${balanceData.symbol}` : "");
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Details/WalletManagerScreen.js
function WalletManagerScreen(props) {
  var _a;
  const [screen, setScreen] = (0, import_react39.useState)("wallets");
  const connectedWallets = useConnectedWallets();
  const setActive = useSetActiveWallet();
  const hideConnectButton = !props.showAllWallets && ((_a = props.wallets) == null ? void 0 : _a.every((w) => connectedWallets.includes(w)));
  if (screen === "connect") {
    return (0, import_jsx_runtime61.jsx)(WalletSwitcherConnectionScreen, { ...props, isEmbed: false, onSelect: (w) => {
      setActive(w);
      props.onBack();
    } });
  }
  return (0, import_jsx_runtime61.jsxs)(Container, { children: [(0, import_jsx_runtime61.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime61.jsx)(ModalHeader, { title: "Wallets", onBack: props.onBack }) }), (0, import_jsx_runtime61.jsx)(Line, {}), (0, import_jsx_runtime61.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime61.jsx)(Container, { px: "md", style: {
    minHeight: "150px"
  }, children: (0, import_jsx_runtime61.jsx)(Container, { flex: "column", gap: "xs", children: connectedWallets.filter((w) => {
    var _a2;
    return !((_a2 = props.hiddenWallets) == null ? void 0 : _a2.includes(w.id));
  }).map((w) => {
    return (0, import_jsx_runtime61.jsx)(WalletManangerButton, {
      client: props.client,
      // address={address || ""}
      onClick: () => {
        setActive(w);
        props.onBack();
      },
      chain: props.activeChain,
      wallet: w
    }, w.id);
  }) }) }), (0, import_jsx_runtime61.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime61.jsx)(Container, { p: "lg", children: !hideConnectButton && (0, import_jsx_runtime61.jsxs)(Button, { variant: "accent", fullWidth: true, onClick: () => {
    setScreen("connect");
  }, gap: "xs", children: [(0, import_jsx_runtime61.jsx)(PlusIcon, { width: iconSize.sm, height: iconSize.sm }), "Connect Wallet"] }) })] });
}
function WalletManangerButton(props) {
  var _a;
  const theme = useCustomTheme();
  const activeWallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const walletId = props.wallet.id;
  const address = (_a = props.wallet.getAccount()) == null ? void 0 : _a.address;
  const balanceQuery = useWalletBalance({
    address,
    chain: props.chain,
    client: props.client
  });
  return (0, import_jsx_runtime61.jsxs)("div", { style: {
    position: "relative"
  }, children: [(0, import_jsx_runtime61.jsx)(WalletButtonEl, { onClick: props.onClick, style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime61.jsxs)(Container, { flex: "row", gap: "md", center: "y", children: [(0, import_jsx_runtime61.jsx)(WalletImage, { client: props.client, id: walletId, size: iconSize.lg }), (0, import_jsx_runtime61.jsxs)(Container, { flex: "column", gap: "4xs", children: [(0, import_jsx_runtime61.jsx)(Text, { color: "primaryText", children: shortenAddress(address || "") }), balanceQuery.data ? (0, import_jsx_runtime61.jsx)(Text, { size: "xs", color: "secondaryText", weight: 400, children: formatTokenBalance(balanceQuery.data) }) : (0, import_jsx_runtime61.jsx)(Skeleton, { width: "100px", height: fontSize.sm })] })] }) }), (0, import_jsx_runtime61.jsx)("div", { style: {
    position: "absolute",
    zIndex: 1,
    right: spacing.xxs,
    top: "50%",
    transform: "translateY(-50%)"
  }, children: (activeWallet == null ? void 0 : activeWallet.id) === props.wallet.id ? (0, import_jsx_runtime61.jsx)(ToolTip, { tip: "Active Wallet", children: (0, import_jsx_runtime61.jsx)(IconButton, { children: (0, import_jsx_runtime61.jsx)(CheckIcon, { width: iconSize.md, height: iconSize.md }) }) }) : (0, import_jsx_runtime61.jsx)(ToolTip, { tip: "Disconnect", children: (0, import_jsx_runtime61.jsx)(IconButton, { onClick: () => {
    disconnect(props.wallet);
  }, children: (0, import_jsx_runtime61.jsx)(MinusIcon, { width: iconSize.md, height: iconSize.md, style: {
    color: theme.colors.secondaryText
  } }) }) }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkProfileScreen.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var import_react40 = __toESM(require_react(), 1);
var InAppWalletConnectUI = (0, import_react40.lazy)(() => import("./InAppWalletConnectUI-IYEPIHHJ.js"));
function LinkProfileScreen(props) {
  const activeWallet = useAdminWallet();
  const chain = useActiveWalletChain();
  const queryClient = useQueryClient();
  if (!activeWallet) {
    return (0, import_jsx_runtime62.jsx)(LoadingScreen, {});
  }
  if (activeWallet.id === "inApp") {
    return (0, import_jsx_runtime62.jsx)(import_react40.Suspense, { fallback: (0, import_jsx_runtime62.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime62.jsx)(InAppWalletConnectUI, { walletConnect: props.walletConnect, wallet: activeWallet, done: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
      props.onBack();
    }, connectLocale: props.locale, client: props.client, size: "compact", chain, meta: {
      title: props.locale.manageWallet.linkProfile,
      showThirdwebBranding: false
    }, isLinking: true, goBack: props.onBack }) });
  }
  if (isEcosystemWallet(activeWallet)) {
    return (0, import_jsx_runtime62.jsx)(import_react40.Suspense, { fallback: (0, import_jsx_runtime62.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime62.jsx)(EcosystemWalletConnectUI_default, { wallet: activeWallet, done: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
      props.onBack();
    }, connectLocale: props.locale, client: props.client, size: "compact", chain, meta: {
      title: props.locale.manageWallet.linkProfile,
      showThirdwebBranding: false
    }, walletConnect: props.walletConnect, isLinking: true, goBack: props.onBack }) });
  }
  return (0, import_jsx_runtime62.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime62.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime62.jsx)(ModalHeader, { title: props.locale.manageWallet.linkProfile, onBack: props.onBack }) }), (0, import_jsx_runtime62.jsx)(Line, {}), (0, import_jsx_runtime62.jsxs)(Container, { flex: "column", gap: "md", center: "both", px: "xl", color: "secondaryText", style: {
    flex: "1",
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime62.jsx)(CrossCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime62.jsx)(Text, { center: true, children: "This wallet does not support account linking" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkedProfilesScreen.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useProfiles.js
function useProfiles(args) {
  var _a;
  const wallet = useAdminWallet();
  return useQuery({
    queryKey: ["profiles", wallet == null ? void 0 : wallet.id, (_a = wallet == null ? void 0 : wallet.getAccount()) == null ? void 0 : _a.address],
    enabled: !!wallet && (wallet.id === "inApp" || isEcosystemWallet(wallet)),
    queryFn: async () => {
      var _a2;
      const ecosystem = wallet && isEcosystemWallet(wallet) ? { id: wallet.id, partnerId: (_a2 = wallet.getConfig()) == null ? void 0 : _a2.partnerId } : void 0;
      return getProfiles({
        client: args.client,
        ecosystem
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AddUserIcon.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var AddUserIcon = (props) => {
  return (0, import_jsx_runtime63.jsx)("svg", { width: props.size, height: props.size, viewBox: "0 0 24 24", fill: "none", role: "presentation", xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime63.jsx)("path", { d: "M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkedProfilesScreen.js
function getProfileDisplayName(profile) {
  switch (true) {
    case (profile.type === "email" && profile.details.email !== void 0):
      return profile.details.email;
    case (profile.type === "google" && profile.details.email !== void 0):
      return profile.details.email;
    case (profile.type === "phone" && profile.details.phone !== void 0):
      return profile.details.phone;
    case profile.details.address !== void 0:
      return shortenAddress(profile.details.address, 6);
    case (profile.type === "cognito" && profile.details.email !== void 0):
      return profile.details.email;
    default:
      return profile.type.slice(0, 1).toUpperCase() + profile.type.slice(1);
  }
}
function LinkedProfilesScreen(props) {
  const { data: connectedProfiles, isLoading } = useProfiles({
    client: props.client
  });
  if (isLoading) {
    return (0, import_jsx_runtime64.jsx)(LoadingScreen, {});
  }
  return (0, import_jsx_runtime64.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime64.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime64.jsx)(ModalHeader, { title: props.locale.manageWallet.linkedProfiles, onBack: props.onBack }) }), (0, import_jsx_runtime64.jsx)(Line, {}), isLoading ? (0, import_jsx_runtime64.jsx)(LoadingScreen, {}) : (0, import_jsx_runtime64.jsxs)(Container, { scrollY: true, style: {
    height: "300px"
  }, children: [(0, import_jsx_runtime64.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime64.jsxs)(Container, { px: "sm", children: [(0, import_jsx_runtime64.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("link-profile");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime64.jsx)(AddUserIcon, { size: iconSize.lg }), (0, import_jsx_runtime64.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.linkProfile })] }), (0, import_jsx_runtime64.jsx)(Spacer, { y: "xs" }), connectedProfiles == null ? void 0 : connectedProfiles.filter((profile) => profile.type !== "guest").map((profile) => (0, import_jsx_runtime64.jsx)(LinkedProfile, { profile, client: props.client }, `${profile.type}-${getProfileDisplayName(profile)}`))] }), (0, import_jsx_runtime64.jsx)(Spacer, { y: "md" })] })] });
}
function LinkedProfile({ profile, client }) {
  var _a, _b, _c;
  const { data: socialProfiles } = useSocialProfiles({
    client,
    address: profile.details.address
  });
  return (0, import_jsx_runtime64.jsxs)(MenuButton, { style: {
    fontSize: fontSize.sm,
    cursor: "default"
  }, disabled: true, children: [(socialProfiles == null ? void 0 : socialProfiles.some((p) => p.avatar)) ? (0, import_jsx_runtime64.jsx)(Img, { src: (_a = socialProfiles == null ? void 0 : socialProfiles.find((p) => p.avatar)) == null ? void 0 : _a.avatar, width: iconSize.lg, height: iconSize.lg, loading: "eager", client, style: {
    borderRadius: "100%"
  } }) : profile.details.address !== void 0 ? (0, import_jsx_runtime64.jsx)(Container, { style: {
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    overflow: "hidden"
  }, children: (0, import_jsx_runtime64.jsx)(Blobbie, { address: profile.details.address, size: 32 }) }) : profile.type === "passkey" ? (0, import_jsx_runtime64.jsx)(FingerPrintIcon, { size: iconSize.lg }) : profile.type === "email" ? (0, import_jsx_runtime64.jsx)(EmailIcon, { size: iconSize.lg }) : profile.type === "phone" ? (0, import_jsx_runtime64.jsx)(PhoneIcon, { size: iconSize.lg }) : (0, import_jsx_runtime64.jsx)(Img, { src: getSocialIcon(profile.type), width: iconSize.lg, height: iconSize.lg, loading: "eager", client }), (0, import_jsx_runtime64.jsxs)("div", { style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1
  }, children: [(0, import_jsx_runtime64.jsx)(Text, { color: "primaryText", children: ((_b = socialProfiles == null ? void 0 : socialProfiles.find((p) => p.avatar)) == null ? void 0 : _b.name) || getProfileDisplayName(profile) }), ((_c = socialProfiles == null ? void 0 : socialProfiles.find((p) => p.avatar)) == null ? void 0 : _c.name) && profile.details.address && (0, import_jsx_runtime64.jsx)(Text, { color: "secondaryText", size: "sm", children: shortenAddress(profile.details.address, 4) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ManageWalletScreen.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/KeyIcon.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var KeyIcon = (props) => {
  return (0, import_jsx_runtime65.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 24 24", fill: "none", role: "presentation", children: [(0, import_jsx_runtime65.jsx)("path", { d: "M2 5.99999L2 2.99999C2 2.39999 2.4 1.99999 3 1.99999H7L7 4.99999H10V7.99999H12L13.4 9.39999C14.7898 8.91585 16.3028 8.9177 17.6915 9.40524C19.0801 9.89278 20.2622 10.8372 21.0444 12.0839C21.8265 13.3306 22.1624 14.8058 21.9971 16.2683C21.8318 17.7307 21.1751 19.0937 20.1344 20.1344C19.0937 21.1751 17.7307 21.8318 16.2683 21.9971C14.8058 22.1624 13.3306 21.8265 12.0839 21.0444C10.8372 20.2622 9.89279 19.0801 9.40525 17.6915C8.91771 16.3028 8.91585 14.7898 9.4 13.4L2 5.99999Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime65.jsx)("path", { d: "M15.5 15C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15Z", fill: "currentColor", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/MultiUserIcon.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var MultiUserIcon = (props) => {
  return (0, import_jsx_runtime66.jsx)("svg", { width: props.size, height: props.size, viewBox: "0 0 24 24", fill: "none", role: "presentation", xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime66.jsx)("path", { d: "M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/WalletConnectIcon.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var WalletConnectIcon = (props) => {
  return (0, import_jsx_runtime67.jsx)("svg", { width: props.size, height: props.size, viewBox: "0 0 24 24", fill: "none", role: "presentation", xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime67.jsx)("path", { d: "M4.91334 7.73539C8.82714 4.0882 15.1729 4.0882 19.0867 7.73539L19.5577 8.17432C19.7534 8.35664 19.7534 8.65232 19.5577 8.83464L17.9464 10.3362C17.8485 10.4274 17.6899 10.4274 17.5921 10.3362L16.9439 9.73217C14.2134 7.18782 9.7866 7.18782 7.05614 9.73217L6.36193 10.379C6.26407 10.4702 6.10547 10.4702 6.0076 10.379L4.39629 8.87747C4.20056 8.69515 4.20056 8.39947 4.39629 8.21715L4.91334 7.73539ZM22.4191 10.8407L23.8532 12.1771C24.0489 12.3594 24.0489 12.6551 23.8532 12.8374L17.3867 18.8632C17.1911 19.0456 16.8738 19.0456 16.6781 18.8632L12.0886 14.5865C12.0397 14.5409 11.9604 14.5409 11.9115 14.5865L7.32202 18.8632C7.12638 19.0456 6.8091 19.0456 6.61337 18.8632L0.146771 12.8373C-0.0489237 12.655 -0.0489237 12.3593 0.146771 12.177L1.58087 10.8406C1.77657 10.6582 2.09384 10.6582 2.28954 10.8406L6.87907 15.1173C6.928 15.163 7.0073 15.163 7.05623 15.1173L11.6456 10.8406C11.8412 10.6582 12.1585 10.6582 12.3542 10.8406L16.9438 15.1173C16.9927 15.163 17.072 15.163 17.1209 15.1173L21.7105 10.8407C21.9061 10.6583 22.2234 10.6583 22.4191 10.8407Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ManageWalletScreen.js
function ManageWalletScreen(props) {
  var _a;
  const activeWallet = useAdminWallet();
  return (0, import_jsx_runtime68.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime68.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime68.jsx)(ModalHeader, { title: props.locale.manageWallet.title, onBack: props.onBack }) }), (0, import_jsx_runtime68.jsx)(Line, {}), (0, import_jsx_runtime68.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime68.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime68.jsxs)(Container, { style: { position: "relative", height: "250px" }, children: [(0, import_jsx_runtime68.jsx)(SwitchMetamaskAccount, { closeModal: props.closeModal, connectLocale: props.locale }), activeWallet && ((activeWallet == null ? void 0 : activeWallet.id) === "inApp" || isEcosystemWallet(activeWallet)) && (0, import_jsx_runtime68.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("linked-profiles");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime68.jsx)(MultiUserIcon, { size: iconSize.md }), (0, import_jsx_runtime68.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.linkedProfiles })] }), (0, import_jsx_runtime68.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("wallet-connect-receiver");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime68.jsx)(WalletConnectIcon, { size: iconSize.md }), (0, import_jsx_runtime68.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.connectAnApp })] }), activeWallet && isInAppWallet(activeWallet) && !((_a = activeWallet.getConfig()) == null ? void 0 : _a.hidePrivateKeyExport) && (0, import_jsx_runtime68.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("private-key");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime68.jsx)(KeyIcon, { size: iconSize.md }), (0, import_jsx_runtime68.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.exportPrivateKey })] })] }), (0, import_jsx_runtime68.jsx)(Spacer, { y: "lg" })] })] });
}
function SwitchMetamaskAccount(props) {
  const wallet = useActiveWallet();
  const connectLocale = props.connectLocale;
  if ((wallet == null ? void 0 : wallet.id) !== "io.metamask") {
    return null;
  }
  const injectedMetamaskProvider = injectedProvider("io.metamask");
  if (!injectedMetamaskProvider) {
    return null;
  }
  return (0, import_jsx_runtime68.jsxs)(MenuButton, { type: "button", onClick: async () => {
    await injectedMetamaskProvider.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }]
    });
    props.closeModal();
  }, children: [(0, import_jsx_runtime68.jsx)(ShuffleIcon, { width: iconSize.md, height: iconSize.md }), (0, import_jsx_runtime68.jsx)(Text, { color: "primaryText", children: connectLocale.switchAccount })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/PrivateKey.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var import_react41 = __toESM(require_react(), 1);
function PrivateKey(props) {
  var _a;
  const [isLoading, setLoading] = (0, import_react41.useState)(true);
  if (!props.wallet) {
    throw new Error("[PrivateKey] No wallet found");
  }
  const baseDomain = getThirdwebDomains().inAppWallet;
  const ecosystem = isEcosystemWallet(props.wallet) ? { id: props.wallet.id, partnerId: (_a = props.wallet.getConfig()) == null ? void 0 : _a.partnerId } : void 0;
  return (0, import_jsx_runtime69.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime69.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime69.jsx)(ModalHeader, { title: "Export Private Key", onBack: props.onBack }) }), (0, import_jsx_runtime69.jsx)(Line, {}), (0, import_jsx_runtime69.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime69.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime69.jsxs)(Container, { style: { position: "relative", height: "250px" }, children: [isLoading ? (0, import_jsx_runtime69.jsx)(Container, { center: "both", flex: "column", style: { position: "absolute", width: "100%", height: "100%" }, children: (0, import_jsx_runtime69.jsx)(Spinner, { size: "lg", color: "primaryButtonBg" }) }) : (0, import_jsx_runtime69.jsx)(import_jsx_runtime69.Fragment, {}), (0, import_jsx_runtime69.jsx)(Container, { style: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 11
  }, children: (0, import_jsx_runtime69.jsx)("iframe", { title: "Export In-App Wallet", style: {
    width: "100%",
    height: "250px",
    visibility: isLoading ? "hidden" : "unset"
  }, onLoad: () => {
    setLoading(false);
  }, allow: "clipboard-read; clipboard-write", src: `${baseDomain.includes("localhost") ? "http" : "https"}://${baseDomain}/sdk/2022-08-12/embedded-wallet/export-private-key?clientId=${props.client.clientId}&theme=${typeof props.theme === "string" ? props.theme : props.theme.type}${ecosystem ? `&ecosystemId=${ecosystem.id}` : ""}${(ecosystem == null ? void 0 : ecosystem.partnerId) ? `&partnerId=${ecosystem.partnerId}` : ""}` }) })] }), (0, import_jsx_runtime69.jsx)(Spacer, { y: "lg" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ReceiveFunds.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/addresses.js
function shortenString(str, extraShort = true) {
  return `${str.substring(0, extraShort ? 4 : 6)}...${str.substring(str.length - (extraShort ? 3 : 4))}`;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ReceiveFunds.js
function ReceiveFunds(props) {
  const account = useActiveAccount();
  const address = account == null ? void 0 : account.address;
  const { hasCopied, onCopy } = useClipboard(address || "");
  const { connectLocale, client } = props;
  const locale = connectLocale.receiveFundsScreen;
  return (0, import_jsx_runtime70.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime70.jsx)(ModalHeader, { title: locale.title, onBack: props.onBack }), (0, import_jsx_runtime70.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime70.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime70.jsx)(QRCode, { qrCodeUri: address, size: 310, QRIcon: props.walletId && (0, import_jsx_runtime70.jsx)(WalletImage, { id: props.walletId, size: iconSize.xxl, client }) }) }), (0, import_jsx_runtime70.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime70.jsxs)(WalletAddressContainer, { onClick: onCopy, children: [(0, import_jsx_runtime70.jsx)(Text, { color: "primaryText", size: "md", children: shortenString(address || "") }), (0, import_jsx_runtime70.jsx)(CopyIcon2, { text: address || "", tip: "Copy address", hasCopied })] }), (0, import_jsx_runtime70.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime70.jsx)(Text, { multiline: true, center: true, balance: true, children: locale.instruction })] });
}
var WalletAddressContainer = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    padding: spacing.md,
    display: "flex",
    justifyContent: "space-between",
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    transition: "border-color 200ms ease",
    "&:hover": {
      borderColor: theme.colors.accentText
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SendFunds.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/extensions/ens/__generated__/AddressResolver/read/addr.js
var FN_SELECTOR = "0x3b3b57de";
var FN_INPUTS = [
  {
    type: "bytes32",
    name: "name"
  }
];
function encodeAddrParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.name]);
}
function encodeAddr(options) {
  return FN_SELECTOR + encodeAddrParams(options).slice(2);
}

// node_modules/thirdweb/dist/esm/extensions/ens/resolve-address.js
async function resolveAddress(options) {
  const { client, name, resolverAddress, resolverChain } = options;
  if (isAddress(name)) {
    return getAddress(name);
  }
  return withCache(async () => {
    const contract = getContract({
      client,
      chain: resolverChain || ethereum,
      address: resolverAddress || UNIVERSAL_RESOLVER_ADDRESS
    });
    const data = encodeAddr({ name: namehash(name) });
    const result = await resolve({
      contract,
      name: toHex(packetToBytes(name)),
      data
    });
    const resolvedAddress = getAddress(`0x${result[0].slice(-40)}`);
    return resolvedAddress;
  }, {
    cacheKey: `ens:addr:${(resolverChain == null ? void 0 : resolverChain.id) || 1}:${name}`,
    // 1min cache
    cacheTime: 60 * 1e3
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/write/transfer.js
var FN_SELECTOR2 = "0xa9059cbb";
var FN_INPUTS2 = [
  {
    type: "address",
    name: "to"
  },
  {
    type: "uint256",
    name: "value"
  }
];
var FN_OUTPUTS = [
  {
    type: "bool"
  }
];
function transfer(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS],
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.to, resolvedOptions.value];
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

// node_modules/thirdweb/dist/esm/extensions/erc20/write/transfer.js
function transfer2(options) {
  return transfer({
    contract: options.contract,
    asyncParams: async () => {
      let amount;
      if ("amount" in options) {
        const { decimals: decimals2 } = await import("./decimals-OWVEHM45.js");
        const d = await decimals2(options).catch(() => 18);
        amount = toUnits(options.amount.toString(), d);
      } else {
        amount = options.amountWei;
      }
      return {
        to: options.to,
        value: amount,
        overrides: {
          erc20Value: {
            amountWei: amount,
            tokenAddress: options.contract.address
          },
          ...options.overrides
        }
      };
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSendToken.js
function useSendToken(client) {
  const wallet = useActiveWallet();
  return useMutation({
    async mutationFn(option) {
      const { tokenAddress, receiverAddress, amount } = option;
      const activeChain = wallet == null ? void 0 : wallet.getChain();
      const account = wallet == null ? void 0 : wallet.getAccount();
      if (!activeChain) {
        throw new Error("No active chain");
      }
      if (!account) {
        throw new Error("No active account");
      }
      if (!receiverAddress || !receiverAddress.endsWith(".eth") && !isAddress(receiverAddress)) {
        throw new Error("Invalid receiver address");
      }
      if (!amount || Number.isNaN(Number(amount)) || Number(amount) < 0) {
        throw new Error("Invalid amount");
      }
      let to = receiverAddress;
      try {
        to = await resolveAddress({
          client,
          name: receiverAddress
        });
      } catch {
        throw new Error("Failed to resolve address");
      }
      if (!tokenAddress) {
        const sendNativeTokenTx = prepareTransaction({
          chain: activeChain,
          client,
          to,
          value: toWei(amount)
        });
        await sendTransaction({
          transaction: sendNativeTokenTx,
          account
        });
      } else {
        const contract = getContract({
          address: tokenAddress,
          client,
          chain: activeChain
        });
        const tx = transfer2({
          amount,
          contract,
          to
        });
        await sendTransaction({
          transaction: tx,
          account
        });
      }
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/TokenSelector.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react42 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/wallets/utils/getTokenBalance.js
async function getTokenBalance(options) {
  const { account, client, chain, tokenAddress } = options;
  if (tokenAddress) {
    const { getBalance } = await import("./getBalance-X6K77NBX.js");
    return getBalance({
      contract: getContract({ client, chain, address: tokenAddress }),
      address: account.address
    });
  }
  const rpcRequest = getRpcClient({ client, chain });
  const [nativeSymbol, nativeDecimals, nativeName, nativeBalance] = await Promise.all([
    getChainSymbol(chain),
    getChainDecimals(chain),
    getChainNativeCurrencyName(chain),
    eth_getBalance(rpcRequest, { address: account.address })
  ]);
  return {
    value: nativeBalance,
    decimals: nativeDecimals,
    displayValue: toTokens(nativeBalance, nativeDecimals),
    symbol: nativeSymbol,
    name: nativeName
  };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useTokenInfo.js
function useTokenInfo(options) {
  const { chain, tokenAddress, client } = options;
  return useQuery({
    queryKey: ["tokenInfo", (chain == null ? void 0 : chain.id) || -1, { tokenAddress }],
    queryFn: async () => {
      if (tokenAddress) {
        const { getCurrencyMetadata: getCurrencyMetadata2 } = await import("./getCurrencyMetadata-VXZEATQ4.js");
        const result2 = await getCurrencyMetadata2({
          contract: getContract({ client, chain, address: tokenAddress })
        });
        return result2;
      }
      const { getChainDecimals: getChainDecimals2, getChainNativeCurrencyName: getChainNativeCurrencyName2, getChainSymbol: getChainSymbol2 } = await import("./utils-RIDKW7H5.js");
      const [nativeSymbol, nativeDecimals, nativeName] = await Promise.all([
        getChainSymbol2(chain),
        getChainDecimals2(chain),
        getChainNativeCurrencyName2(chain)
      ]);
      const result = {
        decimals: nativeDecimals,
        symbol: nativeSymbol,
        name: nativeName
      };
      return result;
    },
    enabled: !!chain && !!client
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/TokenSelector.js
function TokenSelector(props) {
  const [screen, setScreen] = (0, import_react42.useState)("base");
  const [input, setInput] = (0, import_react42.useState)("");
  const chain = props.chain;
  const chainNameQuery = useChainName(chain);
  const chainIconQuery = useChainIconUrl(chain);
  const tokenQuery = useTokenInfo({
    chain,
    tokenAddress: input,
    client: props.client
  });
  const locale = props.connectLocale.sendFundsScreen;
  let tokenList = props.tokenList;
  if (tokenQuery.data && input) {
    tokenList = [
      {
        ...tokenQuery.data,
        address: input
      },
      ...tokenList
    ];
  }
  const filteredList = input ? tokenList.filter((t) => {
    const inputStr = input.toLowerCase();
    return t.name.toLowerCase().includes(inputStr) || t.symbol.toLowerCase().includes(inputStr) || t.address.includes(input);
  }) : tokenList;
  const { chainSelection } = props;
  if (screen === "select-chain" && chainSelection) {
    return (0, import_jsx_runtime71.jsx)(NetworkSelectorContent, {
      client: props.client,
      connectLocale: props.connectLocale,
      showTabs: false,
      onBack: () => setScreen("base"),
      // pass swap supported chains
      chains: chainSelection.chains,
      closeModal: () => setScreen("base"),
      networkSelector: {
        renderChain(renderChainProps) {
          return (0, import_jsx_runtime71.jsx)(ChainButton, { chain: renderChainProps.chain, confirming: false, switchingFailed: false, onClick: () => {
            chainSelection.select(renderChainProps.chain);
            setScreen("base");
          }, client: props.client, connectLocale: props.connectLocale });
        }
      }
    });
  }
  return (0, import_jsx_runtime71.jsxs)(Container, { animate: "fadein", style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime71.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime71.jsx)(ModalHeader, { onBack: props.onBack, title: props.modalTitle || locale.selectTokenTitle }) }), (0, import_jsx_runtime71.jsx)(Line, {}), (0, import_jsx_runtime71.jsxs)(Container, { scrollY: true, style: {
    maxHeight: "450px"
  }, children: [(0, import_jsx_runtime71.jsx)(Spacer, { y: "md" }), props.chainSelection && (0, import_jsx_runtime71.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime71.jsx)(Text, { size: "sm", children: "Select Network" }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime71.jsxs)(SelectTokenBtn, { fullWidth: true, variant: "secondary", onClick: () => {
    setScreen("select-chain");
  }, children: [(0, import_jsx_runtime71.jsx)(ChainIcon, { chainIconUrl: chainIconQuery.url, size: iconSize.lg, client: props.client }), chainNameQuery.name ? (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", size: "sm", children: chainNameQuery.name }) : (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.md }), (0, import_jsx_runtime71.jsx)(ChevronDownIcon, { width: iconSize.sm, height: iconSize.sm, style: {
    marginLeft: "auto"
  } })] }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime71.jsx)(Text, { size: "sm", children: "Select Token" })] }), (0, import_jsx_runtime71.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime71.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime71.jsx)(Input, { placeholder: locale.searchToken, variant: "outline", value: input, onChange: (e) => {
    setInput(e.target.value);
  } })] }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "md" }), (filteredList.length > 0 || !input) && (0, import_jsx_runtime71.jsxs)(Container, { flex: "column", gap: "xs", px: "lg", scrollY: true, style: {
    paddingTop: 0,
    paddingBottom: spacing.lg
    // maxHeight: props.chainSelection ? "300px" : "400px",
  }, children: [!input && (0, import_jsx_runtime71.jsx)(SelectTokenButton, { onClick: () => {
    props.onTokenSelect(NATIVE_TOKEN);
  }, chain: props.chain, token: NATIVE_TOKEN, client: props.client }), filteredList.map((token) => {
    return (0, import_jsx_runtime71.jsx)(SelectTokenButton, { onClick: () => props.onTokenSelect(token), token, chain: props.chain, client: props.client }, token.address);
  })] }), filteredList.length === 0 && tokenQuery.isLoading && input && (0, import_jsx_runtime71.jsx)(Container, { animate: "fadein", p: "lg", flex: "column", gap: "md", center: "both", style: {
    minHeight: "200px",
    paddingTop: 0
  }, color: "secondaryText", children: (0, import_jsx_runtime71.jsx)(Spinner, { size: "lg", color: "accentText" }) }), filteredList.length === 0 && !tokenQuery.isLoading && input && (0, import_jsx_runtime71.jsxs)(Container, { animate: "fadein", p: "lg", flex: "column", gap: "md", center: "both", style: {
    minHeight: "200px",
    paddingTop: 0
  }, color: "secondaryText", children: [(0, import_jsx_runtime71.jsx)(CrossCircledIcon, { width: iconSize.lg, height: iconSize.lg }), locale.noTokensFound] }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "md" })] })] });
}
function SelectTokenButton(props) {
  var _a;
  const account = useActiveAccount();
  const tokenInfoQuery = useTokenInfo({
    chain: props.chain,
    tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address,
    client: props.client
  });
  const tokenName = isNativeToken(props.token) ? (_a = tokenInfoQuery.data) == null ? void 0 : _a.name : props.token.name;
  return (0, import_jsx_runtime71.jsxs)(SelectTokenBtn, { fullWidth: true, variant: "secondary", onClick: props.onClick, children: [(0, import_jsx_runtime71.jsx)(TokenIcon, { token: props.token, chain: props.chain, size: "lg", client: props.client }), (0, import_jsx_runtime71.jsxs)(Container, { flex: "column", gap: "xxs", children: [tokenName ? (0, import_jsx_runtime71.jsx)(Text, { size: "sm", color: "primaryText", children: tokenName }) : (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.md, width: "150px" }), account && (0, import_jsx_runtime71.jsx)(TokenBalance, { account, chain: props.chain, client: props.client, tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address })] })] });
}
function TokenBalance(props) {
  const tokenBalanceQuery = useQuery({
    queryKey: ["tokenBalance", props],
    queryFn: async () => {
      return getTokenBalance({
        account: props.account,
        chain: props.chain,
        client: props.client,
        tokenAddress: props.tokenAddress
      });
    }
  });
  if (tokenBalanceQuery.data) {
    return (0, import_jsx_runtime71.jsxs)(Text, { size: "xs", children: [" ", formatTokenBalance(tokenBalanceQuery.data)] });
  }
  return (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.xs, width: "100px" });
}
var SelectTokenBtn = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    justifyContent: "flex-start",
    gap: spacing.sm,
    padding: spacing.sm,
    "&:hover": {
      background: theme.colors.secondaryButtonBg,
      transform: "scale(1.01)"
    },
    transition: "background 200ms ease, transform 150ms ease"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SendFunds.js
function SendFunds(props) {
  const [screen, setScreen] = (0, import_react43.useState)("base");
  const activeChain = useActiveWalletChain();
  const chainId = activeChain == null ? void 0 : activeChain.id;
  const { connectLocale, client } = props;
  let defaultToken = NATIVE_TOKEN;
  const supportedTokens = props.supportedTokens || defaultTokens;
  if (
    // if we know chainId
    chainId && // if there is a list of tokens for this chain
    supportedTokens[chainId] && // if the list of tokens is not the default list
    supportedTokens[chainId] !== defaultTokens[chainId]
  ) {
    const tokensForChain = supportedTokens[chainId];
    const firstToken = tokensForChain == null ? void 0 : tokensForChain[0];
    if (firstToken) {
      defaultToken = firstToken;
    }
  }
  const [token, setToken] = (0, import_react43.useState)(defaultToken);
  const [receiverAddress, setReceiverAddress] = (0, import_react43.useState)("");
  const [amount, setAmount] = (0, import_react43.useState)("0");
  const chain = useActiveWalletChain();
  const tokenList = ((chain == null ? void 0 : chain.id) ? supportedTokens[chain.id] : void 0) || [];
  if (screen === "tokenSelector" && chain) {
    return (0, import_jsx_runtime72.jsx)(TokenSelector, { tokenList, onBack: () => {
      setScreen("base");
    }, onTokenSelect: (_token) => {
      setToken(_token);
      setScreen("base");
    }, chain, connectLocale, client });
  }
  return (0, import_jsx_runtime72.jsx)(SendFundsForm, { token, onTokenSelect: () => {
    setScreen("tokenSelector");
  }, receiverAddress, setReceiverAddress, amount, setAmount, onBack: props.onBack, client, connectLocale });
}
function SendFundsForm(props) {
  var _a, _b;
  const locale = props.connectLocale.sendFundsScreen;
  const tokenAddress = props.token && "address" in props.token ? props.token.address : void 0;
  const chain = useActiveWalletChain();
  const activeAccount = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const balanceQuery = useWalletBalance({
    chain,
    tokenAddress,
    address: activeAccount == null ? void 0 : activeAccount.address,
    client: props.client
  });
  const { receiverAddress, setReceiverAddress, amount, setAmount } = props;
  const sendTokenMutation = useSendToken(props.client);
  function getErrorMessage(error) {
    var _a2;
    const message = ((_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.message) || (error == null ? void 0 : error.message);
    if (!message) {
      return locale.transactionFailed;
    }
    if (message.includes("user rejected")) {
      return locale.transactionRejected;
    }
    if (message.includes("insufficient funds")) {
      return locale.insufficientFunds;
    }
    return message;
  }
  if (!activeChain) {
    return null;
  }
  if (sendTokenMutation.isError) {
    return (0, import_jsx_runtime72.jsxs)(Container, { p: "lg", animate: "fadein", children: [(0, import_jsx_runtime72.jsx)(ModalHeader, { title: locale.title, onBack: () => {
      sendTokenMutation.reset();
    } }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime72.jsxs)(Container, { flex: "column", gap: "lg", animate: "fadein", center: "both", style: {
      minHeight: "200px"
    }, color: "danger", children: [(0, import_jsx_runtime72.jsx)(CrossCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime72.jsx)(Text, { center: true, multiline: true, color: "danger", children: getErrorMessage(sendTokenMutation.error) })] })] });
  }
  if (sendTokenMutation.isSuccess) {
    return (0, import_jsx_runtime72.jsxs)(Container, { p: "lg", animate: "fadein", children: [(0, import_jsx_runtime72.jsx)(ModalHeader, { title: locale.title, onBack: () => {
      sendTokenMutation.reset();
    } }), (0, import_jsx_runtime72.jsxs)(Container, { flex: "column", gap: "lg", animate: "fadein", center: "both", style: {
      minHeight: "250px"
    }, color: "success", children: [(0, import_jsx_runtime72.jsx)(CheckCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime72.jsxs)(Text, { color: "success", children: [" ", locale.successMessage, " "] })] })] });
  }
  const tokenName = (props.token && "name" in props.token ? props.token.name : void 0) || ((_a = balanceQuery == null ? void 0 : balanceQuery.data) == null ? void 0 : _a.name);
  const tokenSymbol = (props.token && "symbol" in props.token ? props.token.symbol : void 0) || ((_b = balanceQuery == null ? void 0 : balanceQuery.data) == null ? void 0 : _b.symbol);
  return (0, import_jsx_runtime72.jsxs)(Container, { p: "lg", animate: "fadein", children: [(0, import_jsx_runtime72.jsx)(ModalHeader, { title: locale.title, onBack: props.onBack }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime72.jsxs)("form", { onSubmit: (e) => {
    e.preventDefault();
  }, children: [(0, import_jsx_runtime72.jsx)(Label, { htmlFor: "token", color: "secondaryText", children: locale.token }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime72.jsxs)(Button, { id: "token", variant: "outline", fullWidth: true, style: {
    justifyContent: "flex-start",
    gap: spacing.sm,
    padding: spacing.sm
  }, onClick: props.onTokenSelect, children: [(0, import_jsx_runtime72.jsx)(TokenIcon, { token: props.token, chain: activeChain, size: "lg", client: props.client }), (0, import_jsx_runtime72.jsxs)(Container, { flex: "column", gap: "xs", children: [tokenName ? (0, import_jsx_runtime72.jsx)(Text, { size: "sm", color: "primaryText", children: tokenName }) : (0, import_jsx_runtime72.jsx)(Skeleton, { height: fontSize.xs, width: "150px" }), balanceQuery.data ? (0, import_jsx_runtime72.jsx)(Text, { size: "xs", children: formatTokenBalance(balanceQuery.data) }) : (0, import_jsx_runtime72.jsx)(Skeleton, { height: fontSize.xs, width: "100px" })] })] }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime72.jsx)(Label, { htmlFor: "receiver", color: "secondaryText", children: locale.sendTo }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime72.jsx)(Input, { required: true, id: "receiver", placeholder: "0x... or ENS name", variant: "outline", value: receiverAddress, onChange: (e) => {
    setReceiverAddress(e.target.value);
  } }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime72.jsx)(Label, { htmlFor: "amount", color: "secondaryText", children: locale.amount }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime72.jsxs)(Container, { relative: true, children: [(0, import_jsx_runtime72.jsx)(Input, { required: true, type: "number", id: "amount", variant: "outline", value: amount, onChange: (e) => {
    setAmount(e.target.value);
  } }), (0, import_jsx_runtime72.jsx)(CurrencyBadge, { children: (0, import_jsx_runtime72.jsxs)(Text, { size: "xs", children: [" ", tokenSymbol, " "] }) })] }), (0, import_jsx_runtime72.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime72.jsxs)(Button, { fullWidth: true, variant: "accent", type: "submit", onClick: async () => {
    if (!receiverAddress || !amount) {
      return;
    }
    await sendTokenMutation.mutateAsync({
      receiverAddress,
      amount,
      tokenAddress
    });
  }, style: {
    alignItems: "center",
    gap: spacing.sm,
    padding: spacing.md
  }, children: [sendTokenMutation.isPending && (0, import_jsx_runtime72.jsx)(Spinner, { size: "sm", color: "accentButtonText" }), sendTokenMutation.isPending ? locale.sending : locale.submitButton] })] })] });
}
var CurrencyBadge = StyledDiv({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: spacing.sm
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewAssets.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var import_react47 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/ImageIcon.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var ImageIcon = (props) => {
  return (0, import_jsx_runtime73.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", role: "presentation", children: [(0, import_jsx_runtime73.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), (0, import_jsx_runtime73.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, import_jsx_runtime73.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewNFTs.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var import_react46 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721A/read/balanceOf.js
var FN_SELECTOR3 = "0x70a08231";
var FN_INPUTS3 = [
  {
    type: "address",
    name: "owner"
  }
];
var FN_OUTPUTS2 = [
  {
    type: "uint256"
  }
];
async function balanceOf(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR3, FN_INPUTS3, FN_OUTPUTS2],
    params: [options.owner]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721AQueryable/read/tokensOfOwner.js
var FN_SELECTOR4 = "0x8462151c";
var FN_INPUTS4 = [
  {
    type: "address",
    name: "owner"
  }
];
var FN_OUTPUTS3 = [
  {
    type: "uint256[]"
  }
];
async function tokensOfOwner(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR4, FN_INPUTS4, FN_OUTPUTS3],
    params: [options.owner]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721Enumerable/read/tokenOfOwnerByIndex.js
var FN_SELECTOR5 = "0x2f745c59";
var FN_INPUTS5 = [
  {
    type: "address",
    name: "_owner"
  },
  {
    type: "uint256",
    name: "_index"
  }
];
var FN_OUTPUTS4 = [
  {
    type: "uint256"
  }
];
async function tokenOfOwnerByIndex(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR5, FN_INPUTS5, FN_OUTPUTS4],
    params: [options.owner, options.index]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/read/getOwnedTokenIds.js
async function getOwnedTokenIds(options) {
  const result = await Promise.any([
    // get all the tokens owned by the owner
    tokensOfOwner({ ...options }),
    // get the balance of the owner and then fetch each token ID
    // this is the "fallback" path really
    (async () => {
      const balanceOfResult = await balanceOf(options);
      const promises = [];
      for (let i = 0n; i < balanceOfResult; i++) {
        promises.push(tokenOfOwnerByIndex({ ...options, index: i }));
      }
      return Promise.all(promises);
    })()
  ]).catch(() => null);
  if (result) {
    return result;
  }
  throw new Error(`The contract at ${options.contract.address} on chain ${options.contract.chain.id} does not support the tokenOfOwnerByIndex or tokensOfOwner interface`);
}

// node_modules/thirdweb/dist/esm/extensions/erc721/read/getOwnedNFTs.js
async function getOwnedNFTs(options) {
  const tokenIds = await getOwnedTokenIds(options);
  return Promise.all(tokenIds.map((tokenId) => getNFT({
    contract: options.contract,
    tokenId
  }).then((nft) => ({
    ...nft,
    // add the owner to the NFT since we know it
    owner: options.owner
  }))));
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/read/balanceOfBatch.js
var FN_SELECTOR6 = "0x4e1273f4";
var FN_INPUTS6 = [
  {
    type: "address[]",
    name: "_owners"
  },
  {
    type: "uint256[]",
    name: "tokenIds"
  }
];
var FN_OUTPUTS5 = [
  {
    type: "uint256[]"
  }
];
async function balanceOfBatch(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR6, FN_INPUTS6, FN_OUTPUTS5],
    params: [options.owners, options.tokenIds]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155Enumerable/read/nextTokenIdToMint.js
var FN_SELECTOR7 = "0x3b1475a7";
var FN_INPUTS7 = [];
var FN_OUTPUTS6 = [
  {
    type: "uint256"
  }
];
async function nextTokenIdToMint(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR7, FN_INPUTS7, FN_OUTPUTS6],
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/Zora1155/read/nextTokenId.js
var FN_SELECTOR8 = "0x75794a3c";
var FN_INPUTS8 = [];
var FN_OUTPUTS7 = [
  {
    type: "uint256"
  }
];
async function nextTokenId(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR8, FN_INPUTS8, FN_OUTPUTS7],
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/read/getOwnedTokenIds.js
var DEFAULT_QUERY_ALL_COUNT = 100;
async function getOwnedTokenIds2(options) {
  const maxId = await Promise.allSettled([
    nextTokenIdToMint(options),
    nextTokenId(options)
  ]).then(([_nextToMint, _next]) => {
    if (_nextToMint.status === "fulfilled") {
      return _nextToMint.value;
    }
    if (_next.status === "fulfilled") {
      return _next.value;
    }
    throw Error("Contract doesn't have required extension");
  });
  const owners = [];
  const tokenIds = [];
  for (let i = 0n; i < maxId; i++) {
    owners.push(options.address);
    tokenIds.push(i);
  }
  const balances = await balanceOfBatch({
    ...options,
    owners,
    tokenIds
  });
  let ownedBalances = balances.map((b, i) => {
    return {
      tokenId: BigInt(i),
      balance: b
    };
  }).filter((b) => b.balance > 0);
  if (options.start || options.count) {
    const start = (options == null ? void 0 : options.start) || 0;
    const count3 = (options == null ? void 0 : options.count) || DEFAULT_QUERY_ALL_COUNT;
    ownedBalances = ownedBalances.slice(start, start + count3);
  }
  return ownedBalances;
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/read/getOwnedNFTs.js
async function getOwnedNFTs2(options) {
  const ownedBalances = await getOwnedTokenIds2(options);
  const nfts = await Promise.all(ownedBalances.map((ob) => getNFT2({ ...options, tokenId: ob.tokenId })));
  return nfts.map((nft, index2) => {
    var _a;
    return {
      ...nft,
      owner: options.address,
      quantityOwned: ((_a = ownedBalances[index2]) == null ? void 0 : _a.balance) || 0n
    };
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/MediaRenderer.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var import_react45 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/icons.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var CarbonDocumentUnknown = (props) => {
  return (0, import_jsx_runtime74.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 32 32", role: "presentation", ...props, children: [(0, import_jsx_runtime74.jsx)("circle", { cx: "9", cy: "28.5", r: "1.5", fill: "currentColor" }), (0, import_jsx_runtime74.jsx)("path", { fill: "currentColor", d: "M10 25H8v-4h2a2 2 0 0 0 0-4H8a2.002 2.002 0 0 0-2 2v.5H4V19a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z" }), (0, import_jsx_runtime74.jsx)("path", { fill: "currentColor", d: "m27.7 9.3l-7-7A.908.908 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v8h2V4h8v6a2.006 2.006 0 0 0 2 2h6v16H14v2h12a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7ZM20 10V4.4l5.6 5.6Z" })] });
};
var CarbonDocumentAudio = (props) => {
  return (0, import_jsx_runtime74.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 32 32", role: "presentation", ...props, children: [(0, import_jsx_runtime74.jsx)("path", { fill: "currentColor", d: "M29 31a.999.999 0 0 1-.625-.22L23.65 27H20a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3.65l4.726-3.78A1 1 0 0 1 30 17v13a1 1 0 0 1-1 1Zm-8-6h3a1 1 0 0 1 .625.22L28 27.92v-8.84l-3.376 2.7A1 1 0 0 1 24 22h-3Z" }), (0, import_jsx_runtime74.jsx)("path", { fill: "currentColor", d: "M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z" })] });
};
var CarbonPauseFilled = (props) => {
  return (0, import_jsx_runtime74.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 32 32", role: "presentation", ...props, children: (0, import_jsx_runtime74.jsx)("path", { fill: "currentColor", d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" }) });
};
var CarbonPlayFilledAlt = (props) => {
  return (0, import_jsx_runtime74.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 32 32", role: "presentation", ...props, children: (0, import_jsx_runtime74.jsx)("path", { fill: "currentColor", d: "M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/useResolvedMediaType.js
var import_react44 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/mime/types.js
var AUDIO_MPEG = "audio/mpeg";
var AUDIO_MIDI = "audio/midi";
var AUDIO_OG = "audio/ogg";
var IMG_JPEG = "image/jpeg";
var extensionsToMimeType = {
  // audio
  "*3gpp": "audio/3gpp",
  adp: "audio/adpcm",
  amr: "audio/amr",
  au: "audio/basic",
  snd: "audio/basic",
  mid: AUDIO_MIDI,
  midi: AUDIO_MIDI,
  kar: AUDIO_MIDI,
  rmi: AUDIO_MIDI,
  mxmf: "audio/mobile-xmf",
  "*mp3": "audio/mp3",
  m4a: "audio/mp4",
  mp4a: "audio/mp4",
  mpga: AUDIO_MPEG,
  mp2: AUDIO_MPEG,
  mp2a: AUDIO_MPEG,
  mp3: AUDIO_MPEG,
  m2a: AUDIO_MPEG,
  m3a: AUDIO_MPEG,
  oga: AUDIO_OG,
  ogg: AUDIO_OG,
  spx: AUDIO_OG,
  opus: AUDIO_OG,
  s3m: "audio/s3m",
  sil: "audio/silk",
  wav: "audio/wav",
  "*wav": "audio/wave",
  weba: "audio/webm",
  // images
  xm: "audio/xm",
  exr: "image/aces",
  apng: "image/apng",
  avif: "image/avif",
  bmp: "image/bmp",
  cgm: "image/cgm",
  drle: "image/dicom-rle",
  emf: "image/emf",
  fits: "image/fits",
  g3: "image/g3fax",
  gif: "image/gif",
  heic: "image/heic",
  heics: "image/heic-sequence",
  heif: "image/heif",
  heifs: "image/heif-sequence",
  hej2: "image/hej2k",
  hsj2: "image/hsj2",
  ief: "image/ief",
  jls: "image/jls",
  jp2: "image/jp2",
  jpg2: "image/jp2",
  jpeg: IMG_JPEG,
  jpg: IMG_JPEG,
  jpe: IMG_JPEG,
  jph: "image/jph",
  jhc: "image/jphc",
  jpm: "image/jpm",
  jpx: "image/jpx",
  jpf: "image/jpx",
  jxr: "image/jxr",
  jxra: "image/jxra",
  jxrs: "image/jxrs",
  jxs: "image/jxs",
  jxsc: "image/jxsc",
  jxsi: "image/jxsi",
  jxss: "image/jxss",
  ktx: "image/ktx",
  ktx2: "image/ktx2",
  png: "image/png",
  sgi: "image/sgi",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  t38: "image/t38",
  tif: "image/tiff",
  tiff: "image/tiff",
  tfx: "image/tiff-fx",
  webp: "image/webp",
  wmf: "image/wmf",
  // 3d models
  "3mf": "model/3mf",
  gltf: "model/gltf+json",
  glb: "model/gltf-binary",
  igs: "model/iges",
  iges: "model/iges",
  msh: "model/mesh",
  mesh: "model/mesh",
  silo: "model/mesh",
  mtl: "model/mtl",
  obj: "model/obj",
  stl: "model/stl",
  wrl: "model/vrml",
  vrml: "model/vrml",
  "*x3db": "model/x3d+binary",
  x3dbz: "model/x3d+binary",
  x3db: "model/x3d+fastinfoset",
  "*x3dv": "model/x3d+vrml",
  x3dvz: "model/x3d+vrml",
  x3d: "model/x3d+xml",
  x3dz: "model/x3d+xml",
  x3dv: "model/x3d-vrml",
  // html
  html: "text/html",
  htm: "text/html",
  shtml: "text/html",
  // videos
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3g2": "video/3gpp2",
  h261: "video/h261",
  h263: "video/h263",
  h264: "video/h264",
  m4s: "video/iso.segment",
  jpgv: "video/jpeg",
  "*jpm": "video/jpm",
  jpgm: "video/jpm",
  mj2: "video/mj2",
  mjp2: "video/mj2",
  ts: "video/mp2t",
  mp4: "video/mp4",
  mp4v: "video/mp4",
  mpg4: "video/mp4",
  mpeg: "video/mpeg",
  mpg: "video/mpeg",
  mpe: "video/mpeg",
  m1v: "video/mpeg",
  m2v: "video/mpeg",
  ogv: "video/ogg",
  qt: "video/quicktime",
  mov: "video/quicktime",
  webm: "video/webm",
  mkv: "video/x-matroska"
};

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/mime/mime.js
function getMimeTypeFromUrl(url) {
  const last = url.replace(/^.*[/\\]/, "").toLowerCase();
  const fileExtension = last.replace(/^.*\./, "").toLowerCase();
  const hasPath = last.length < url.length;
  const hasDot = fileExtension.length < last.length - 1;
  return (hasDot || !hasPath) && extensionsToMimeType[fileExtension] || null;
}

// node_modules/thirdweb/dist/esm/react/web/utils/resolveMimeType.js
async function resolveMimeType(url) {
  if (!url) {
    return void 0;
  }
  const mimeType = getMimeTypeFromUrl(url);
  if (mimeType) {
    return mimeType;
  }
  const res = await fetch(url, {
    method: "HEAD"
  });
  if (res.ok && res.headers.has("content-type")) {
    return res.headers.get("content-type") || void 0;
  }
  return void 0;
}

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/useResolvedMediaType.js
function useResolvedMediaType(client, uri, mimeType, gatewayUrl) {
  const resolvedUrl = (0, import_react44.useMemo)(() => {
    if (!uri) {
      return "";
    }
    if (uri.startsWith("ar://")) {
      return resolveArweaveScheme({ uri, gatewayUrl });
    }
    if (gatewayUrl) {
      return uri.replace("ipfs://", gatewayUrl);
    }
    try {
      return resolveScheme({
        client,
        uri
      });
    } catch {
      return uri.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
  }, [uri, gatewayUrl, client]);
  const resolvedMimeType = useQuery({
    queryKey: ["mime-type", resolvedUrl],
    queryFn: () => resolveMimeType(resolvedUrl),
    enabled: !!resolvedUrl && !mimeType,
    initialData: mimeType
  });
  return {
    mediaInfo: { url: resolvedUrl, mimeType: resolvedMimeType.data },
    isFetched: resolvedMimeType.isFetched
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/MediaRenderer.js
var MediaRenderer = (() => import_react45.default.forwardRef(function Media_Renderer({ src, poster, alt, gatewayUrl, requireInteraction = false, width = "300px", height = "300px", style, mimeType, client, controls, className }, ref) {
  var _a;
  const mergedStyle = {
    objectFit: "contain",
    ...style
  };
  const { mediaInfo, isFetched: mediaInfoIsFetched } = useResolvedMediaType(client, src ?? void 0, mimeType, gatewayUrl);
  const { mediaInfo: possiblePosterSrc } = useResolvedMediaType(client, poster ?? void 0, void 0, gatewayUrl);
  if (!mediaInfoIsFetched || !src) {
    return (0, import_jsx_runtime75.jsx)("div", { style });
  }
  if (mediaInfo.mimeType) {
    if (mediaInfo.mimeType.startsWith("text/html")) {
      return (0, import_jsx_runtime75.jsx)(IframePlayer, { style: mergedStyle, src: mediaInfo.url, poster: possiblePosterSrc.url, ref, requireInteraction, className, alt });
    }
    if (mediaInfo.mimeType.startsWith("model")) {
      return (0, import_jsx_runtime75.jsx)(import_react45.Suspense, { fallback: poster ? (0, import_jsx_runtime75.jsx)("img", { style: mergedStyle, src: poster, alt, ref, className }) : null, children: (0, import_jsx_runtime75.jsx)(ModelViewer, { style: mergedStyle, src: mediaInfo.url || "", poster, alt, className }) });
    }
    if (mediaInfo.mimeType.startsWith("video")) {
      return (0, import_jsx_runtime75.jsx)(VideoPlayer, { style: mergedStyle, src: mediaInfo.url, ref, poster: ((_a = possiblePosterSrc.mimeType) == null ? void 0 : _a.startsWith("image/")) ? possiblePosterSrc.url : void 0, requireInteraction, className, controls });
    }
    if (mediaInfo.mimeType.startsWith("audio")) {
      return (0, import_jsx_runtime75.jsx)(AudioPlayer, { style: mergedStyle, src: mediaInfo.url, poster: possiblePosterSrc.url, alt, ref, className, height, width, controls });
    }
    if (mediaInfo.mimeType.startsWith("image/")) {
      return (0, import_jsx_runtime75.jsx)(ImageRenderer, { style: mergedStyle, src: mediaInfo.url, alt, ref, className, height, width });
    }
  }
  return (0, import_jsx_runtime75.jsx)(LinkPlayer, { style: mergedStyle, src: mediaInfo.url, alt, ref, className });
}))();
var ModelViewer = (0, import_react45.lazy)(() => import("./ModelViewer-GZZWO7FG.js"));
var PlayButton = ({ onClick, isPlaying }) => {
  const [isHovering, setIsHovering] = (0, import_react45.useState)(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  const onMouseDown = () => setIsHovering(false);
  const onMouseUp = () => setIsHovering(true);
  return (0, import_jsx_runtime75.jsx)("button", { type: "button", style: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: "translate(-25%, -25%)",
    width: "32px",
    height: "32px",
    zIndex: 3,
    backgroundColor: "#fff",
    color: "rgb(138, 147, 155)",
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    border: "1px solid rgb(229, 232, 235)",
    cursor: "pointer",
    padding: 0,
    ...isHovering ? {
      color: "rgb(53, 56, 64)",
      boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px"
    } : {}
  }, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, children: !isPlaying ? (0, import_jsx_runtime75.jsx)(CarbonPlayFilledAlt, {}) : (0, import_jsx_runtime75.jsx)(CarbonPauseFilled, {}) });
};
var ImageRenderer = (() => import_react45.default.forwardRef(function Image_Renderer(props, ref) {
  const { style, src, alt, className, height, width } = props;
  const [error, setError] = (0, import_react45.useState)(false);
  if (error) {
    return (0, import_jsx_runtime75.jsx)(LinkPlayer, { style, src, alt, ref, className });
  }
  return (0, import_jsx_runtime75.jsx)("img", { style, src: src ?? void 0, alt, ref, className, height, width, onError: () => {
    setError(true);
  } });
}))();
var VideoPlayer = (() => import_react45.default.forwardRef(function Video_Player({ src, alt, poster, requireInteraction, style, width, height, controls, className }, ref) {
  const videoRef = (0, import_react45.useRef)(null);
  const [playing, setPlaying] = (0, import_react45.useState)(!requireInteraction);
  const [muted, setMuted] = (0, import_react45.useState)(true);
  const [error, setError] = (0, import_react45.useState)(false);
  (0, import_react45.useEffect)(() => {
    if (videoRef.current) {
      if (playing) {
        try {
          videoRef.current.play();
        } catch (err) {
          console.error("error playing video", err);
        }
      } else {
        try {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        } catch (err) {
          console.error("error pausing video", err);
        }
      }
    }
  }, [playing]);
  if (error) {
    return (0, import_jsx_runtime75.jsx)(LinkPlayer, { style, src, alt, ref, className });
  }
  return (0, import_jsx_runtime75.jsxs)("div", { style: { position: "relative", ...style }, className, children: [(0, import_jsx_runtime75.jsx)("video", { ref: mergeRefs2([videoRef, ref]), src: src ?? void 0, poster: poster ?? void 0, loop: true, playsInline: true, controlsList: "nodownload", muted, preload: poster ? "metadata" : "auto", onCanPlay: () => {
    var _a;
    if (playing) {
      (_a = videoRef.current) == null ? void 0 : _a.play();
    }
  }, onError: () => {
    setError(true);
  }, width, height, controls, style: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    zIndex: 1,
    transition: "opacity .5s",
    opacity: !poster ? 1 : playing ? 1 : 0
  } }), poster && (0, import_jsx_runtime75.jsx)("img", { src: poster, style: {
    objectFit: "contain",
    pointerEvents: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    transition: "opacity .5s",
    opacity: playing ? 0 : 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, alt }), (0, import_jsx_runtime75.jsx)(PlayButton, { onClick: () => {
    setPlaying((prev) => !prev);
    setMuted(false);
  }, isPlaying: playing })] });
}))();
var AudioPlayer = (() => import_react45.default.forwardRef(function Audio_Player({ src, alt, poster, style, height, width, className, controls }, ref) {
  const audioRef = (0, import_react45.useRef)(null);
  const [playing, setPlaying] = (0, import_react45.useState)(false);
  const [muted, setMuted] = (0, import_react45.useState)(true);
  const [error, setError] = (0, import_react45.useState)(false);
  (0, import_react45.useEffect)(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [playing]);
  if (error) {
    return (0, import_jsx_runtime75.jsx)(LinkPlayer, { style, src, alt, ref, className });
  }
  return (0, import_jsx_runtime75.jsxs)("div", { style: { position: "relative", ...style }, className, children: [poster ? (0, import_jsx_runtime75.jsx)("img", { height, width, src: poster, style: {
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    objectFit: "contain"
  }, alt }) : (0, import_jsx_runtime75.jsx)("div", { style: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    pointerEvents: "none",
    backgroundColor: "#fff",
    color: "rgb(138, 147, 155)"
  }, children: (0, import_jsx_runtime75.jsx)(CarbonDocumentAudio, { style: { height: "64px", width: "64px" } }) }), (0, import_jsx_runtime75.jsx)(PlayButton, { onClick: () => {
    setPlaying((prev) => !prev);
    setMuted(false);
  }, isPlaying: playing }), (0, import_jsx_runtime75.jsx)("audio", { ref: mergeRefs2([audioRef, ref]), src: src ?? void 0, loop: true, playsInline: true, controls, muted, preload: "none", controlsList: "nodownload", style: {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    zIndex: -1,
    visibility: "hidden"
  }, onError: () => {
    setError(true);
  } })] });
}))();
var IframePlayer = (() => import_react45.default.forwardRef(function Iframe_Player({ src, alt, poster, requireInteraction, style, ...restProps }, ref) {
  const [playing, setPlaying] = (0, import_react45.useState)(!requireInteraction);
  return (0, import_jsx_runtime75.jsxs)("div", { style: { position: "relative", ...style }, ...restProps, children: [(0, import_jsx_runtime75.jsx)("iframe", { title: alt || "thirdweb iframe player", src: playing ? src ?? void 0 : void 0, ref, style: {
    objectFit: "contain",
    zIndex: 1,
    height: "100%",
    width: "100%",
    transition: "opacity .5s",
    opacity: !poster ? 1 : playing ? 1 : 0,
    border: "none"
  }, sandbox: "allow-scripts", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" }), poster && (0, import_jsx_runtime75.jsx)("img", { src: poster, style: {
    objectFit: "contain",
    pointerEvents: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    transition: "opacity .5s",
    opacity: playing ? 0 : 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, alt }), (0, import_jsx_runtime75.jsx)(PlayButton, { onClick: () => {
    setPlaying((prev) => !prev);
  }, isPlaying: playing })] });
}))();
var LinkPlayer = (() => import_react45.default.forwardRef(function Link_Player({ src, alt, style, className }, ref) {
  return (0, import_jsx_runtime75.jsx)("div", { style: { position: "relative", ...style }, className, children: (0, import_jsx_runtime75.jsx)("div", { style: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#fff",
    color: "rgb(138, 147, 155)"
  }, children: (0, import_jsx_runtime75.jsxs)("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
    flexWrap: "nowrap"
  }, children: [(0, import_jsx_runtime75.jsx)(CarbonDocumentUnknown, { style: {
    maxWidth: "128px",
    minWidth: "48px",
    width: "50%",
    aspectRatio: "1"
  } }), (0, import_jsx_runtime75.jsx)("a", { rel: "noopener noreferrer", style: {
    textDecoration: "underline",
    color: "rgb(138, 147, 155)"
  }, href: src ?? void 0, target: "_blank", ref, children: alt || "File" })] }) }) });
}))();
function mergeRefs2(refs) {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    }
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewNFTs.js
var fetchNFTs = async (client, chain, nftAddress, owner) => {
  const contract = getContract({
    address: nftAddress,
    chain,
    client
  });
  const erc721 = await isERC721({ contract }).catch(() => {
    throw new Error(`Failed to read contract bytecode for NFT ${nftAddress} on ${chain.name || chain.id}, is this NFT on the correct chain?`);
  });
  if (erc721) {
    const result = await getOwnedNFTs({
      contract,
      owner
    });
    return result.map((nft) => ({
      ...nft,
      quantityOwned: BigInt(1),
      address: contract.address,
      chain
    }));
  }
  const erc1155 = await isERC1155({ contract }).catch(() => false);
  if (erc1155) {
    const result = await getOwnedNFTs2({
      contract,
      address: owner
    });
    return result.map((nft) => ({ ...nft, address: contract.address, chain }));
  }
  throw new Error(`NFT at ${nftAddress} on chain ${chain.id} is not ERC721 or ERC1155, or does not properly identify itself as supporting either interface`);
};
function ViewNFTs(props) {
  return (0, import_jsx_runtime76.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime76.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime76.jsx)(ModalHeader, { title: props.connectLocale.viewFunds.viewNFTs, onBack: props.onBack }) }), (0, import_jsx_runtime76.jsx)(Line, {}), (0, import_jsx_runtime76.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime76.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime76.jsx)(ViewNFTsContent, { ...props })] })] });
}
function ViewNFTsContent(props) {
  const activeAccount = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const nftList = (0, import_react46.useMemo)(() => {
    const nfts = [];
    if (!props.supportedNFTs)
      return [];
    for (const chainId in props.supportedNFTs) {
      if (props.supportedNFTs[chainId]) {
        nfts.push(...props.supportedNFTs[chainId].map((address) => ({
          address,
          chain: getCachedChain(Number.parseInt(chainId))
        })));
      }
    }
    return nfts;
  }, [props.supportedNFTs]);
  const results = useQueries({
    queries: nftList.map((nft) => ({
      queryKey: ["readContract", nft.chain.id, nft.address],
      queryFn: () => {
        if (!activeAccount) {
          throw new Error("No active account");
        }
        return fetchNFTs(props.client, nft.chain, nft.address, activeAccount.address);
      },
      enabled: !!activeAccount
    }))
  });
  if (!(activeChain == null ? void 0 : activeChain.id) || !(activeAccount == null ? void 0 : activeAccount.address)) {
    return null;
  }
  return (0, import_jsx_runtime76.jsxs)(import_jsx_runtime76.Fragment, { children: [(0, import_jsx_runtime76.jsx)(Container, { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
  }, children: results.map((result, index2) => {
    var _a, _b, _c;
    if (result.error) {
      console.error(result.error);
      return null;
    }
    return result.isLoading || !result.data ? (0, import_jsx_runtime76.jsx)(Skeleton, { height: "150px", width: "150px" }, `${(_b = (_a = nftList[index2]) == null ? void 0 : _a.chain) == null ? void 0 : _b.id}:${(_c = nftList[index2]) == null ? void 0 : _c.address}`) : result.data.map((nft) => (0, import_jsx_runtime76.jsx)(NftCard, { ...nft, client: props.client, chain: nft.chain, theme: props.theme }, `${nft.chain.id}:${nft.address}:${nft.id}`));
  }) }), (0, import_jsx_runtime76.jsx)(Spacer, { y: "lg" })] });
}
function NftCard(props) {
  var _a;
  const theme = typeof props.theme === "string" ? props.theme : props.theme.type;
  const themeObject = typeof props.theme === "string" ? void 0 : props.theme;
  const content = (0, import_jsx_runtime76.jsxs)("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center"
  }, children: [(0, import_jsx_runtime76.jsxs)("div", { style: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    width: "150px",
    height: "150px",
    borderRadius: "8px",
    overflow: "hidden",
    background: theme === "light" ? "rgba(0, 0, 0, 0.10)" : "rgba(0, 0, 0, 0.20)"
  }, children: [props.metadata.image && (0, import_jsx_runtime76.jsx)(MediaRenderer, { src: props.metadata.image, style: {
    width: "100%",
    height: "100%"
  }, client: props.client }), props.quantityOwned > 1 && (0, import_jsx_runtime76.jsx)("div", { style: {
    position: "absolute",
    bottom: "4px",
    right: "4px",
    background: ((_a = themeObject == null ? void 0 : themeObject.colors) == null ? void 0 : _a.modalBg) ?? (theme === "light" ? "white" : "black"),
    fontSize: "10px",
    padding: "4px 4px",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%"
  }, children: props.quantityOwned.toString() }), props.chain.icon && (0, import_jsx_runtime76.jsx)("img", { alt: props.chain.name, style: {
    position: "absolute",
    bottom: "4px",
    left: "4px",
    width: "20px",
    height: "20px"
  }, src: props.chain.icon.url })] }), (0, import_jsx_runtime76.jsx)("span", { style: { fontWeight: 600 }, children: props.metadata.name })] });
  if (props.chain.name) {
    return (0, import_jsx_runtime76.jsx)("a", { href: `https://thirdweb.com/${props.chain.id}/${props.address}/nfts/${props.id}`, target: "_blank", rel: "noreferrer", children: content });
  }
  return content;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewTokens.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
function ViewTokens(props) {
  return (0, import_jsx_runtime77.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime77.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime77.jsx)(ModalHeader, { title: props.connectLocale.viewFunds.title, onBack: props.onBack }) }), (0, import_jsx_runtime77.jsx)(Line, {}), (0, import_jsx_runtime77.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime77.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime77.jsx)(ViewTokensContent, { ...props }), (0, import_jsx_runtime77.jsx)(Spacer, { y: "lg" })] })] });
}
function ViewTokensContent(props) {
  const activeChain = useActiveWalletChain();
  if (!activeChain) {
    return null;
  }
  const supportedTokens = props.supportedTokens || defaultTokens;
  const tokenList = ((activeChain == null ? void 0 : activeChain.id) ? supportedTokens[activeChain.id] : void 0) || [];
  return (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [(0, import_jsx_runtime77.jsx)(TokenInfo, { token: NATIVE_TOKEN, chain: activeChain, client: props.client }), tokenList.map((token) => {
    return (0, import_jsx_runtime77.jsx)(TokenInfo, { token, chain: activeChain, client: props.client }, token.address);
  })] });
}
function TokenInfo(props) {
  var _a;
  const account = useActiveAccount();
  const tokenBalanceQuery = useWalletBalance({
    address: account == null ? void 0 : account.address,
    chain: props.chain,
    tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address,
    client: props.client
  });
  const tokenName = isNativeToken(props.token) ? (_a = tokenBalanceQuery.data) == null ? void 0 : _a.name : props.token.name;
  return (0, import_jsx_runtime77.jsxs)(Container, { flex: "row", gap: "sm", p: "sm", children: [(0, import_jsx_runtime77.jsx)(TokenIcon, { token: props.token, chain: props.chain, size: "lg", client: props.client }), (0, import_jsx_runtime77.jsxs)(Container, { flex: "column", gap: "xxs", children: [tokenName ? (0, import_jsx_runtime77.jsx)(Text, { size: "sm", color: "primaryText", children: tokenName }) : (0, import_jsx_runtime77.jsx)(Skeleton, { height: fontSize.md, width: "150px" }), tokenBalanceQuery.data ? (0, import_jsx_runtime77.jsxs)(Text, { size: "xs", children: [" ", formatTokenBalance(tokenBalanceQuery.data)] }) : (0, import_jsx_runtime77.jsx)(Skeleton, { height: fontSize.xs, width: "100px" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewAssets.js
var TokenTab = {
  label: (0, import_jsx_runtime78.jsxs)("span", { className: "flex gap-2", children: [(0, import_jsx_runtime78.jsx)(CoinsIcon, { size: iconSize.sm }), " Tokens"] }),
  value: "Tokens"
};
var NftTab = {
  label: (0, import_jsx_runtime78.jsxs)("span", { className: "flex gap-2", children: [(0, import_jsx_runtime78.jsx)(ImageIcon, { size: iconSize.sm }), " NFTs"] }),
  value: "NFTs"
};
function ViewAssets(props) {
  var _a;
  const { connectLocale } = props;
  const options = (0, import_react47.useMemo)(() => {
    if (!props.assetTabs) {
      return [TokenTab, NftTab];
    }
    if (!props.assetTabs.length) {
      return [];
    }
    const tabs = [];
    for (const item of props.assetTabs) {
      if (item === "token") {
        tabs.push(TokenTab);
      } else if (item === "nft") {
        tabs.push(NftTab);
      }
    }
    return tabs;
  }, [props.assetTabs]);
  const [activeTab, setActiveTab] = (0, import_react47.useState)(((_a = options[0]) == null ? void 0 : _a.value) || "Tokens");
  return (0, import_jsx_runtime78.jsxs)(Container, { animate: "fadein", style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime78.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime78.jsx)(ModalHeader, { title: connectLocale.viewFunds.title, onBack: props.onBack }) }), (0, import_jsx_runtime78.jsx)(Line, {}), (0, import_jsx_runtime78.jsxs)(Container, { px: "lg", scrollY: true, style: {
    minHeight: "330px"
  }, children: [(0, import_jsx_runtime78.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime78.jsx)(Tabs, { options, selected: activeTab, onSelect: setActiveTab, children: (0, import_jsx_runtime78.jsxs)(Container, { scrollY: true, style: {
    maxHeight: "300px"
  }, children: [activeTab === "Tokens" && (0, import_jsx_runtime78.jsx)(ViewTokensContent, { client: props.client, connectLocale, supportedTokens: props.supportedTokens }), activeTab === "NFTs" && (0, import_jsx_runtime78.jsx)(ViewNFTsContent, { supportedNFTs: props.supportedNFTs, client: props.client, theme: props.theme, connectLocale })] }) }), (0, import_jsx_runtime78.jsx)(Spacer, { y: "lg" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectReceiverScreen.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var import_react48 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectDisconnectScreen.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function WalletConnectDisconnectScreen(props) {
  return (0, import_jsx_runtime79.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime79.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime79.jsx)(ModalHeader, { title: "Connect an App", onBack: props.onBack }) }), (0, import_jsx_runtime79.jsx)(Line, {}), (0, import_jsx_runtime79.jsx)(Container, { px: "lg", scrollY: true, style: {
    maxHeight: "500px"
  }, children: (0, import_jsx_runtime79.jsxs)(Container, { py: "lg", style: { position: "relative" }, children: [(0, import_jsx_runtime79.jsx)(Container, { py: "md", children: (0, import_jsx_runtime79.jsx)(WalletLogoSpinner, { client: props.client, error: !!props.error, id: "walletConnect", hideSpinner: true }) }), (0, import_jsx_runtime79.jsx)(Container, { animate: "fadein", style: {
    animationDuration: "200ms"
  }, children: !props.error ? (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [(0, import_jsx_runtime79.jsxs)(Text, { balance: true, center: true, multiline: true, size: "md", children: ["Connected to ", props.session.origin ?? "another app."] }), (0, import_jsx_runtime79.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime79.jsx)(Button, { variant: "accent", fullWidth: true, onClick: () => {
    props.disconnect();
  }, children: "Disconnect" })] }) : (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [(0, import_jsx_runtime79.jsx)(Text, { center: true, balance: true, multiline: true, size: "sm", children: props.error }), (0, import_jsx_runtime79.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime79.jsx)(Container, { flex: "row", center: "x", animate: "fadein", children: (0, import_jsx_runtime79.jsxs)(Button, { fullWidth: true, variant: "accent", onClick: () => props.disconnect(), style: {
    gap: spacing.xs,
    alignItems: "center"
  }, children: [(0, import_jsx_runtime79.jsx)(ReloadIcon, { width: iconSize.sm, height: iconSize.sm }), "Retry"] }) })] }) })] }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectReceiverScreen.js
function WalletConnectReceiverScreen(props) {
  const activeWallet = useActiveWallet();
  const [loading, setLoading] = (0, import_react48.useState)(false);
  const [errorConnecting, setErrorConnecting] = (0, import_react48.useState)(false);
  const queryClient = useQueryClient();
  const { data: walletConnectClient } = useQuery({
    queryKey: ["walletConnectClient"],
    queryFn: async () => {
      if (!activeWallet)
        return;
      try {
        const client = await createWalletConnectClient({
          wallet: activeWallet,
          client: props.client,
          chains: props.chains,
          onConnect: () => {
            setLoading(false);
            queryClient.invalidateQueries({
              queryKey: ["walletConnectSession"]
            });
          },
          onDisconnect: () => {
            setLoading(false);
            queryClient.invalidateQueries({
              queryKey: ["walletConnectSession"]
            });
          },
          onError: (error) => {
            setErrorConnecting(error.message);
            setLoading(false);
          }
        });
        return client;
      } catch {
        setErrorConnecting("Failed to establish WalletConnect connection");
        return;
      }
    },
    retry: false,
    enabled: !!activeWallet
  });
  const { data: session, refetch: refetchSession } = useQuery({
    queryKey: ["walletConnectSession"],
    queryFn: async () => {
      if (!walletConnectClient)
        return null;
      const sessions = await getActiveWalletConnectSessions();
      return sessions[0] || null;
    },
    enabled: !!walletConnectClient
  });
  const { mutateAsync: disconnect } = useMutation({
    mutationFn: async () => {
      if (!walletConnectClient || !session)
        throw new Error("No session");
      await disconnectWalletConnectSession({
        session,
        walletConnectClient
      });
    },
    onSuccess: () => {
      setErrorConnecting(false);
      queryClient.invalidateQueries({
        queryKey: ["walletConnectSession"]
      });
      refetchSession();
    },
    onError: (error) => {
      console.error(error);
      setErrorConnecting(error.message);
    }
  });
  if (session) {
    return (0, import_jsx_runtime80.jsx)(WalletConnectDisconnectScreen, { disconnect, error: errorConnecting, ...props, session });
  }
  return (0, import_jsx_runtime80.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime80.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime80.jsx)(ModalHeader, { title: "Connect an App", onBack: props.onBack }) }), (0, import_jsx_runtime80.jsx)(Line, {}), (0, import_jsx_runtime80.jsx)(Container, { px: "lg", scrollY: true, style: {
    maxHeight: "500px"
  }, children: (0, import_jsx_runtime80.jsxs)(Container, { py: "sm", style: { position: "relative" }, children: [(0, import_jsx_runtime80.jsx)(Container, { py: "md", children: (0, import_jsx_runtime80.jsx)(WalletLogoSpinner, { client: props.client, error: !!errorConnecting, id: "walletConnect", hideSpinner: !loading }) }), (0, import_jsx_runtime80.jsx)(Container, { animate: "fadein", style: {
    animationDuration: "200ms"
  }, children: !errorConnecting ? (0, import_jsx_runtime80.jsxs)(import_jsx_runtime80.Fragment, { children: [(0, import_jsx_runtime80.jsx)(Text, { balance: true, center: true, multiline: true, size: "sm", children: "Copy your connection URI from the external app." }), (0, import_jsx_runtime80.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime80.jsx)(InputSelectionUI, { type: "text", disabled: loading || !!errorConnecting || !walletConnectClient, onSelect: async (value) => {
    setLoading(true);
    if (!walletConnectClient) {
      setErrorConnecting("No WalletConnect client found");
    } else {
      try {
        createWalletConnectSession({
          uri: value,
          walletConnectClient
        });
      } catch {
        setErrorConnecting("Error creating WalletConnect session");
      }
    }
  }, placeholder: "WalletConnect URI", name: "wcUri", emptyErrorMessage: "Please enter a valid URI", submitButtonText: "Connect" })] }) : (0, import_jsx_runtime80.jsxs)(import_jsx_runtime80.Fragment, { children: [(0, import_jsx_runtime80.jsx)(Text, { center: true, balance: true, multiline: true, size: "sm", children: errorConnecting }), (0, import_jsx_runtime80.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime80.jsx)(Container, { flex: "row", center: "x", animate: "fadein", children: (0, import_jsx_runtime80.jsxs)(Button, { fullWidth: true, variant: "accent", onClick: () => setErrorConnecting(false), style: {
    gap: spacing.xs,
    alignItems: "center"
  }, children: [(0, import_jsx_runtime80.jsx)(ReloadIcon, { width: iconSize.sm, height: iconSize.sm }), "Retry"] }) })] }) })] }) }), (0, import_jsx_runtime80.jsxs)(Container, { children: [(0, import_jsx_runtime80.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime80.jsx)(Line, {}), (0, import_jsx_runtime80.jsx)(Container, { flex: "row", center: "x", p: "lg", children: (0, import_jsx_runtime80.jsx)("a", { href: "https://blog.thirdweb.com/p/a62c0ef4-1d8f-424d-95b9-a006e5239849/", children: (0, import_jsx_runtime80.jsx)(Button, { variant: "link", onClick: () => {
  }, children: "Where do I find the URI?" }) }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Details.js
var TW_CONNECTED_WALLET = "tw-connected-wallet";
var LocalhostChainId = 1337;
var ConnectedWalletDetails = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { connectLocale: locale, client } = props;
  const setRootEl = (0, import_react49.useContext)(SetRootElementContext);
  const activeAccount = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const { pfp, name, balanceQuery } = useConnectedWalletDetails(client, walletChain, activeAccount, (_a = props.detailsButton) == null ? void 0 : _a.displayBalanceToken);
  function closeModal() {
    setRootEl(null);
  }
  function openModal() {
    var _a2, _b2;
    setRootEl((0, import_jsx_runtime81.jsx)(DetailsModal, { client, locale, detailsModal: props.detailsModal, theme: props.theme, supportedTokens: props.supportedTokens, supportedNFTs: props.supportedNFTs, closeModal, onDisconnect: props.onDisconnect, chains: props.chains, displayBalanceToken: (_a2 = props.detailsButton) == null ? void 0 : _a2.displayBalanceToken, connectOptions: props.connectOptions, assetTabs: (_b2 = props.detailsModal) == null ? void 0 : _b2.assetTabs }));
  }
  const isNetworkMismatch = props.chain && walletChain && walletChain.id !== props.chain.id;
  if ((_b = props.detailsButton) == null ? void 0 : _b.render) {
    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: ok
      (0, import_jsx_runtime81.jsx)("div", { onClick: openModal, children: (0, import_jsx_runtime81.jsx)(props.detailsButton.render, {}) })
    );
  }
  if (props.chain && isNetworkMismatch) {
    return (0, import_jsx_runtime81.jsx)(SwitchNetworkButton2, { style: (_c = props.switchButton) == null ? void 0 : _c.style, className: (_d = props.switchButton) == null ? void 0 : _d.className, switchNetworkBtnTitle: (_e = props.switchButton) == null ? void 0 : _e.label, targetChain: props.chain, connectLocale: locale });
  }
  const avatarSrc = ((_f = props.detailsButton) == null ? void 0 : _f.connectedAccountAvatarUrl) || pfp;
  const combinedClassName = `${TW_CONNECTED_WALLET} ${((_g = props.detailsButton) == null ? void 0 : _g.className) || ""}`;
  return (0, import_jsx_runtime81.jsxs)(WalletInfoButton, { type: "button", className: combinedClassName, style: (_h = props.detailsButton) == null ? void 0 : _h.style, "data-test": "connected-wallet-details", onClick: openModal, children: [(0, import_jsx_runtime81.jsx)(Container, { style: {
    borderRadius: "100%",
    overflow: "hidden",
    width: "35px",
    height: "35px"
  }, children: avatarSrc ? (0, import_jsx_runtime81.jsx)("img", { alt: "", src: avatarSrc, style: {
    width: "100%",
    height: "100%"
  } }) : activeAccount && (0, import_jsx_runtime81.jsx)(Blobbie, { address: activeAccount.address, size: 35 }) }), (0, import_jsx_runtime81.jsxs)(Container, { flex: "column", gap: "4xs", style: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRadius: `0 ${radius.md} ${radius.md} 0`
  }, children: [(0, import_jsx_runtime81.jsx)(Text, { size: "xs", color: "primaryText", weight: 500, className: `${TW_CONNECTED_WALLET}__address`, children: ((_i = props.detailsButton) == null ? void 0 : _i.connectedAccountName) ?? name }), balanceQuery.data ? (0, import_jsx_runtime81.jsxs)(Text, { className: `${TW_CONNECTED_WALLET}__balance`, size: "xs", color: "secondaryText", weight: 400, children: [formatBalanceOnButton(Number(balanceQuery.data.displayValue)), " ", balanceQuery.data.symbol] }) : (0, import_jsx_runtime81.jsx)(Skeleton, { height: fontSize.xs, width: "70px" })] })] });
};
function DetailsModal(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
  const [screen, setScreen] = (0, import_react49.useState)("main");
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = (0, import_react49.useState)(true);
  const { client, locale } = props;
  const walletChain = useActiveWalletChain();
  const activeAccount = useActiveAccount();
  const { pfp, name, balanceQuery } = useConnectedWalletDetails(client, walletChain, activeAccount, props.displayBalanceToken);
  const theme = parseTheme(props.theme);
  const activeWallet = useActiveWallet();
  const chainIconQuery = useChainIconUrl(walletChain);
  const chainNameQuery = useChainName(walletChain);
  const chainFaucetsQuery = useChainFaucets(walletChain);
  const disableSwitchChain = !(activeWallet == null ? void 0 : activeWallet.switchChain);
  const screenSetup = useSetupScreen({
    size: "compact",
    welcomeScreen: void 0,
    wallets: activeWallet ? [activeWallet] : []
  });
  function closeModal() {
    setIsOpen(false);
    onModalUnmount(() => {
      props.closeModal();
    });
  }
  function handleDisconnect(info) {
    setIsOpen(false);
    props.closeModal();
    props.onDisconnect(info);
  }
  const networkSwitcherButton = (0, import_jsx_runtime81.jsxs)(MenuButton, { type: "button", disabled: disableSwitchChain, onClick: () => {
    setScreen("network-switcher");
  }, "data-variant": "primary", children: [(0, import_jsx_runtime81.jsx)("div", { style: {
    display: "flex",
    alignItems: "center",
    position: "relative"
  }, children: !chainIconQuery.isLoading ? (0, import_jsx_runtime81.jsx)(ChainIcon, { chainIconUrl: chainIconQuery.url, size: iconSize.md, active: true, client }) : (0, import_jsx_runtime81.jsx)(Skeleton, { height: `${iconSize.md}px`, width: `${iconSize.md}px` }) }), chainNameQuery.isLoading ? (0, import_jsx_runtime81.jsx)(Skeleton, { height: "16px", width: "150px" }) : (0, import_jsx_runtime81.jsxs)(Text, { color: "primaryText", size: "md", multiline: true, children: [chainNameQuery.name || `Unknown chain #${walletChain == null ? void 0 : walletChain.id}`, (0, import_jsx_runtime81.jsxs)(Text, { color: "secondaryText", size: "xs", children: [balanceQuery.data ? formatNumber(Number(balanceQuery.data.displayValue), 9) : (0, import_jsx_runtime81.jsx)(Skeleton, { height: "1em", width: "100px" }), " ", (_a = balanceQuery.data) == null ? void 0 : _a.symbol] })] }), (0, import_jsx_runtime81.jsx)(StyledChevronRightIcon, { width: iconSize.sm, height: iconSize.sm, style: {
    flexShrink: 0,
    marginLeft: "auto"
  } })] });
  const avatarSrc = ((_b = props.detailsModal) == null ? void 0 : _b.connectedAccountAvatarUrl) ?? pfp;
  const { hideSendFunds, hideReceiveFunds, hideBuyFunds } = props.detailsModal || {};
  const hideAllButtons = hideSendFunds && hideReceiveFunds && hideBuyFunds;
  const avatarContent = (0, import_jsx_runtime81.jsxs)(Container, { style: {
    position: "relative",
    height: `${iconSize.xl}px`,
    width: `${iconSize.xl}px`
  }, children: [(0, import_jsx_runtime81.jsx)(Container, { style: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    overflow: "hidden"
  }, children: avatarSrc ? (0, import_jsx_runtime81.jsx)("img", { src: avatarSrc, style: {
    width: iconSize.xxl,
    height: iconSize.xxl
  }, alt: "" }) : activeAccount && (0, import_jsx_runtime81.jsx)(Blobbie, { address: activeAccount.address, size: Number(iconSize.xxl) }) }), !((_c = props.detailsModal) == null ? void 0 : _c.hideSwitchWallet) ? (0, import_jsx_runtime81.jsx)(Container, { style: {
    position: "absolute",
    bottom: -2,
    right: -2
  }, children: (0, import_jsx_runtime81.jsx)(IconContainer, { style: {
    background: theme.colors.modalBg
  }, padding: "4px", children: activeWallet && (0, import_jsx_runtime81.jsx)(WalletImage, { style: { borderRadius: 0 }, id: activeWallet.id, client, size: "12" }) }) }) : null] });
  let content = (0, import_jsx_runtime81.jsxs)("div", { children: [(0, import_jsx_runtime81.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime81.jsxs)(Container, { px: "lg", gap: "sm", flex: "row", center: "y", style: {
    paddingTop: spacing.lg,
    paddingBottom: hideAllButtons ? spacing.md : spacing.lg
  }, children: [((_d = props.detailsModal) == null ? void 0 : _d.hideSwitchWallet) ? avatarContent : (0, import_jsx_runtime81.jsx)(ToolTip, { tip: "Switch wallet", children: (0, import_jsx_runtime81.jsx)("div", { style: {
    cursor: "pointer"
  }, onKeyDown: (e) => {
    if (e.key === "w") {
      setScreen("wallet-manager");
    }
  }, onClick: () => {
    setScreen("wallet-manager");
  }, children: avatarContent }) }), (0, import_jsx_runtime81.jsxs)(Container, { flex: "column", gap: "3xs", children: [(0, import_jsx_runtime81.jsxs)("div", { style: {
    display: "flex",
    gap: spacing.xxs,
    alignItems: "center"
  }, children: [(0, import_jsx_runtime81.jsx)(Text, { color: "primaryText", weight: 500, size: "md", children: ((_e = props.detailsModal) == null ? void 0 : _e.connectedAccountName) ?? name }), (0, import_jsx_runtime81.jsx)(IconButton, { children: (0, import_jsx_runtime81.jsx)(CopyIcon2, { text: (activeAccount == null ? void 0 : activeAccount.address) || "", tip: locale.copyAddress }) })] }), (0, import_jsx_runtime81.jsx)(InAppWalletUserInfo, { client, locale })] })] }), !hideAllButtons && (0, import_jsx_runtime81.jsxs)(import_jsx_runtime81.Fragment, { children: [(0, import_jsx_runtime81.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime81.jsxs)(Container, { style: {
    display: "flex",
    gap: spacing.xs
  }, children: [!hideSendFunds && (0, import_jsx_runtime81.jsxs)(Button, { variant: "outline", style: {
    fontSize: fontSize.sm,
    display: "flex",
    gap: spacing.xs,
    alignItems: "center",
    padding: spacing.sm,
    flex: 1
  }, onClick: () => {
    setScreen("send");
  }, children: [(0, import_jsx_runtime81.jsx)(Container, { color: "secondaryText", flex: "row", center: "both", children: (0, import_jsx_runtime81.jsx)(PaperPlaneIcon, { width: iconSize.sm, height: iconSize.sm, style: {
    transform: "translateY(-10%) rotate(-45deg) "
  } }) }), locale.send] }), !hideReceiveFunds && (0, import_jsx_runtime81.jsxs)(Button, { variant: "outline", style: {
    fontSize: fontSize.sm,
    display: "flex",
    gap: spacing.xs,
    alignItems: "center",
    padding: spacing.sm,
    flex: 1
  }, onClick: () => {
    setScreen("receive");
  }, children: [(0, import_jsx_runtime81.jsx)(Container, { color: "secondaryText", flex: "row", center: "both", children: (0, import_jsx_runtime81.jsx)(PinBottomIcon, { width: iconSize.sm, height: iconSize.sm }) }), locale.receive] }), !hideBuyFunds && (0, import_jsx_runtime81.jsxs)(Button, { variant: "outline", style: {
    fontSize: fontSize.sm,
    display: "flex",
    gap: spacing.xs,
    alignItems: "center",
    padding: spacing.sm,
    flex: 1
  }, onClick: () => {
    trackPayEvent({
      event: "details_modal_buy_click",
      client,
      walletAddress: activeAccount == null ? void 0 : activeAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    setScreen("buy");
  }, children: [(0, import_jsx_runtime81.jsx)(Container, { color: "secondaryText", flex: "row", center: "both", children: (0, import_jsx_runtime81.jsx)(PlusIcon, { width: iconSize.sm, height: iconSize.sm }) }), locale.buy] })] }) }), (0, import_jsx_runtime81.jsx)(Spacer, { y: "md" })] }), (0, import_jsx_runtime81.jsxs)(Container, { px: "md", children: [(0, import_jsx_runtime81.jsxs)(Container, { flex: "column", style: {
    gap: "1px"
  }, children: [networkSwitcherButton, (0, import_jsx_runtime81.jsxs)(MenuButton, { onClick: () => {
    setScreen("transactions");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime81.jsx)(TextAlignJustifyIcon, { width: iconSize.md, height: iconSize.md }), (0, import_jsx_runtime81.jsx)(Container, { flex: "row", gap: "xs", center: "y", children: (0, import_jsx_runtime81.jsx)(Text, { color: "primaryText", children: locale.transactions }) })] }), (props.assetTabs === void 0 || props.assetTabs.length) && (0, import_jsx_runtime81.jsxs)(MenuButton, { onClick: () => {
    setScreen("view-assets");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime81.jsx)(CoinsIcon, { size: iconSize.md }), (0, import_jsx_runtime81.jsx)(Text, { color: "primaryText", children: props.supportedNFTs ? locale.viewFunds.viewAssets : locale.viewFunds.title })] }), (0, import_jsx_runtime81.jsxs)(MenuButton, { onClick: () => {
    setScreen("manage-wallet");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime81.jsx)(OutlineWalletIcon, { size: iconSize.md }), (0, import_jsx_runtime81.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.title })] }), (((_f = props.detailsModal) == null ? void 0 : _f.showTestnetFaucet) ?? false) && (chainFaucetsQuery.faucets.length > 0 || (walletChain == null ? void 0 : walletChain.id) === LocalhostChainId) && (0, import_jsx_runtime81.jsxs)(MenuLink, { href: chainFaucetsQuery.faucets ? chainFaucetsQuery.faucets[0] : "#", target: "_blank", as: "a", style: {
    textDecoration: "none",
    color: "inherit"
  }, children: [(0, import_jsx_runtime81.jsx)(Container, { flex: "row", center: "both", color: "secondaryText", children: (0, import_jsx_runtime81.jsx)(FundsIcon, { size: iconSize.md }) }), locale.requestTestnetFunds] }), ((_g = props.detailsModal) == null ? void 0 : _g.footer) && (0, import_jsx_runtime81.jsx)(props.detailsModal.footer, { close: closeModal })] }), (0, import_jsx_runtime81.jsx)(Spacer, { y: "md" })] }), ((_h = props.detailsModal) == null ? void 0 : _h.hideDisconnect) !== true && (0, import_jsx_runtime81.jsxs)(Container, { children: [(0, import_jsx_runtime81.jsx)(Line, {}), (0, import_jsx_runtime81.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime81.jsx)(Container, { px: "md", children: (0, import_jsx_runtime81.jsxs)(MenuButton, { "data-variant": "danger", type: "button", onClick: () => {
    if (activeWallet && activeAccount) {
      disconnect(activeWallet);
      handleDisconnect({
        account: activeAccount,
        wallet: activeWallet
      });
    }
  }, children: [(0, import_jsx_runtime81.jsx)(ExitIcon, { width: iconSize.md, height: iconSize.md }), (0, import_jsx_runtime81.jsx)(Text, { color: "primaryText", children: locale.disconnectWallet })] }) }), (0, import_jsx_runtime81.jsx)(Spacer, { y: "sm" })] })] });
  if (screen === "transactions") {
    content = (0, import_jsx_runtime81.jsx)(TransactionsScreen, { title: locale.buy, onBack: () => setScreen("main"), closeModal, locale, setScreen, client });
  }
  if (screen === "wallet-manager" && activeAccount && walletChain && activeWallet) {
    content = (0, import_jsx_runtime81.jsx)(WalletManagerScreen, { onBack: () => setScreen("main"), accountAbstraction: (_i = props.connectOptions) == null ? void 0 : _i.accountAbstraction, appMetadata: (_j = props.connectOptions) == null ? void 0 : _j.appMetadata, chain: (_k = props.connectOptions) == null ? void 0 : _k.chain, chains: (_l = props.connectOptions) == null ? void 0 : _l.chains, client, hiddenWallets: (_m = props.connectOptions) == null ? void 0 : _m.hiddenWallets, connectLocale: locale, recommendedWallets: (_n = props.connectOptions) == null ? void 0 : _n.recommendedWallets, showAllWallets: !!((_o = props.connectOptions) == null ? void 0 : _o.showAllWallets), walletConnect: (_p = props.connectOptions) == null ? void 0 : _p.walletConnect, wallets: (_q = props.connectOptions) == null ? void 0 : _q.wallets, activeAccount, activeChain: walletChain, activeWallet });
  }
  if (screen === "network-switcher") {
    content = (0, import_jsx_runtime81.jsx)(
      NetworkSelectorContent,
      {
        // add currently connected chain to the list of chains if it's not already in the list
        chains: walletChain && props.chains.find((c) => c.id === walletChain.id) === void 0 ? [walletChain, ...props.chains] : props.chains,
        closeModal,
        networkSelector: (_r = props.detailsModal) == null ? void 0 : _r.networkSelector,
        onBack: () => {
          setScreen("main");
        },
        connectLocale: locale,
        client
      }
    );
  } else if (screen === "view-assets") {
    if (props.supportedNFTs) {
      content = (0, import_jsx_runtime81.jsx)(ViewAssets, { supportedTokens: props.supportedTokens, supportedNFTs: props.supportedNFTs, onBack: () => {
        setScreen("main");
      }, theme: props.theme, setScreen, client, connectLocale: locale, assetTabs: (_s = props.detailsModal) == null ? void 0 : _s.assetTabs });
    } else {
      content = (0, import_jsx_runtime81.jsx)(ViewTokens, { supportedTokens: props.supportedTokens, onBack: () => {
        setScreen("main");
      }, client, connectLocale: locale });
    }
  } else if (screen === "view-nfts") {
    content = (0, import_jsx_runtime81.jsx)(ViewNFTs, { theme: props.theme, supportedNFTs: props.supportedNFTs, onBack: () => {
      setScreen("main");
    }, client, connectLocale: locale });
  } else if (screen === "view-tokens") {
    content = (0, import_jsx_runtime81.jsx)(ViewTokens, { supportedTokens: props.supportedTokens, onBack: () => {
      setScreen("main");
    }, client, connectLocale: locale });
  } else if (screen === "private-key") {
    content = (0, import_jsx_runtime81.jsx)(PrivateKey, { theme: props.theme, onBack: () => {
      setScreen("manage-wallet");
    }, wallet: activeWallet, client });
  } else if (screen === "manage-wallet") {
    content = (0, import_jsx_runtime81.jsx)(ManageWalletScreen, { onBack: () => {
      setScreen("main");
    }, locale, closeModal, client, setScreen });
  } else if (screen === "wallet-connect-receiver") {
    content = (0, import_jsx_runtime81.jsx)(WalletConnectReceiverScreen, { onBack: () => {
      setScreen("manage-wallet");
    }, chains: props.chains, client });
  } else if (screen === "linked-profiles") {
    content = (0, import_jsx_runtime81.jsx)(LinkedProfilesScreen, { onBack: () => setScreen("manage-wallet"), client, locale, setScreen });
  } else if (screen === "link-profile") {
    content = (0, import_jsx_runtime81.jsx)(LinkProfileScreen, { onBack: () => {
      setScreen("linked-profiles");
    }, client, locale, walletConnect: (_t = props.connectOptions) == null ? void 0 : _t.walletConnect });
  } else if (screen === "send") {
    content = (0, import_jsx_runtime81.jsx)(SendFunds, { supportedTokens: props.supportedTokens, onBack: () => {
      setScreen("main");
    }, client, connectLocale: locale });
  } else if (screen === "receive") {
    content = (0, import_jsx_runtime81.jsx)(ReceiveFunds, { walletId: activeWallet == null ? void 0 : activeWallet.id, onBack: () => {
      setScreen("main");
    }, client, connectLocale: locale });
  } else if (screen === "buy") {
    content = (0, import_jsx_runtime81.jsx)(LazyBuyScreen, { title: locale.buy, isEmbed: false, client, onBack: () => setScreen("main"), supportedTokens: props.supportedTokens, connectLocale: locale, payOptions: ((_u = props.detailsModal) == null ? void 0 : _u.payOptions) || {
      mode: "fund_wallet"
    }, hiddenWallets: (_v = props.detailsModal) == null ? void 0 : _v.hiddenWallets, theme: typeof props.theme === "string" ? props.theme : props.theme.type, onDone: closeModal, connectOptions: void 0 });
  }
  return (0, import_jsx_runtime81.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime81.jsx)(WalletUIStatesProvider, { theme: props.theme, isOpen: false, children: (0, import_jsx_runtime81.jsx)(ScreenSetupContext.Provider, { value: screenSetup, children: (0, import_jsx_runtime81.jsx)(Modal, { size: "compact", open: isOpen, setOpen: (_open) => {
    if (!_open) {
      closeModal();
    }
  }, children: content }) }) }) });
}
function formatBalanceOnButton(num) {
  return formatNumber(num, num < 1 ? 5 : 4);
}
var WalletInfoButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    background: theme.colors.connectedButtonBg,
    overflow: "hidden",
    borderRadius: radius.md,
    cursor: "pointer",
    display: "inline-flex",
    gap: spacing.xs,
    padding: spacing.xs,
    alignItems: "center",
    minWidth: "165px",
    height: "50px",
    boxSizing: "border-box",
    border: `1px solid ${theme.colors.borderColor}`,
    WebkitTapHighlightColor: "transparent",
    lineHeight: "normal",
    animation: `${fadeInAnimation} 300ms ease`,
    "&:hover": {
      transition: "background 250ms ease",
      background: theme.colors.connectedButtonBgHover
    }
  };
});
var StyledChevronRightIcon = newStyled(
  ChevronRightIcon
)(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText
  };
});
function ConnectedToSmartWallet(props) {
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const isSmartWallet = hasSmartAccount(activeWallet);
  const chain = useActiveWalletChain();
  const { client, connectLocale: locale } = props;
  const [isSmartWalletDeployed, setIsSmartWalletDeployed] = (0, import_react49.useState)(false);
  (0, import_react49.useEffect)(() => {
    if (activeAccount && isSmartWallet && activeAccount.address && chain) {
      const contract = getContract({
        address: activeAccount.address,
        chain,
        client
      });
      isContractDeployed(contract).then((isDeployed) => {
        setIsSmartWalletDeployed(isDeployed);
      });
    } else {
      setIsSmartWalletDeployed(false);
    }
  }, [activeAccount, chain, client, isSmartWallet]);
  const content = (0, import_jsx_runtime81.jsx)(Container, { flex: "row", gap: "3xs", center: "y", children: (0, import_jsx_runtime81.jsx)(Text, { size: "xs", weight: 400, color: "secondaryText", children: locale.connectedToSmartWallet }) });
  if (chain && activeAccount && isSmartWallet) {
    return (0, import_jsx_runtime81.jsx)(import_jsx_runtime81.Fragment, { children: isSmartWalletDeployed ? (0, import_jsx_runtime81.jsx)(Link, { color: "secondaryText", hoverColor: "primaryText", href: `https://thirdweb.com/${chain.id}/${activeAccount.address}/account`, target: "_blank", size: "sm", children: content }) : (0, import_jsx_runtime81.jsxs)(Text, { size: "sm", children: [" ", content] }) });
  }
  return null;
}
function InAppWalletUserInfo(props) {
  const { client, locale } = props;
  const account = useActiveAccount();
  const activeWallet = useActiveWallet();
  const adminWallet = useAdminWallet();
  const { data: walletInfo } = useWalletInfo(activeWallet == null ? void 0 : activeWallet.id);
  const isSmartWallet = hasSmartAccount(activeWallet);
  const { data: walletName } = useQuery({
    queryKey: [
      "wallet-name",
      { walletId: activeWallet == null ? void 0 : activeWallet.id, walletAddress: account == null ? void 0 : account.address }
    ],
    queryFn: async () => {
      const lastAuthProvider = await getLastAuthProvider(webLocalStorage);
      if (lastAuthProvider === "guest") {
        return "Guest";
      }
      if (lastAuthProvider && ((activeWallet == null ? void 0 : activeWallet.id) === "inApp" || (activeWallet == null ? void 0 : activeWallet.id) === "smart") && socialAuthOptions.includes(lastAuthProvider)) {
        return lastAuthProvider.slice(0, 1).toUpperCase() + lastAuthProvider.slice(1);
      }
      return walletInfo == null ? void 0 : walletInfo.name;
    },
    enabled: !!(activeWallet == null ? void 0 : activeWallet.id) && !!walletInfo
  });
  const userInfoQuery = useQuery({
    queryKey: ["in-app-wallet-user", client, account == null ? void 0 : account.address],
    queryFn: async () => {
      var _a;
      const isInAppWallet2 = adminWallet && (adminWallet.id === "inApp" || adminWallet.id.startsWith("ecosystem."));
      if (!isInAppWallet2) {
        return null;
      }
      let ecosystem;
      if (isEcosystemWallet(adminWallet)) {
        const ecosystemWallet = adminWallet;
        const partnerId = (_a = ecosystemWallet.getConfig()) == null ? void 0 : _a.partnerId;
        ecosystem = {
          id: ecosystemWallet.id,
          partnerId
        };
      }
      const { getUserEmail, getUserPhoneNumber } = await import("./auth-ZNEFTCXD.js");
      const [email, phone] = await Promise.all([
        getUserEmail({
          client,
          ecosystem
        }),
        getUserPhoneNumber({
          client,
          ecosystem
        })
      ]);
      return email || phone || null;
    },
    enabled: !!adminWallet
  });
  if (!userInfoQuery.data && isSmartWallet) {
    return (0, import_jsx_runtime81.jsx)(ConnectedToSmartWallet, { client, connectLocale: locale });
  }
  if (userInfoQuery.data || walletName) {
    return (0, import_jsx_runtime81.jsx)(Text, { size: "xs", weight: 400, children: userInfoQuery.data || walletName });
  }
  return (0, import_jsx_runtime81.jsx)(Skeleton, { width: "50px", height: "10px" });
}
function SwitchNetworkButton2(props) {
  const switchChain = useSwitchActiveWalletChain();
  const [switching, setSwitching] = (0, import_react49.useState)(false);
  const locale = props.connectLocale;
  const switchNetworkBtnTitle = props.switchNetworkBtnTitle ?? locale.switchNetwork;
  return (0, import_jsx_runtime81.jsx)(Button, { className: `tw-connect-wallet--switch-network ${props.className || ""}`, variant: "primary", type: "button", "data-is-loading": switching, "data-test": "switch-network-button", disabled: switching, onClick: async () => {
    setSwitching(true);
    try {
      await switchChain(props.targetChain);
    } catch (e) {
      console.error(e);
    }
    setSwitching(false);
  }, style: {
    minWidth: "140px",
    ...props.style
  }, "aria-label": switching ? locale.switchingNetwork : void 0, children: switching ? (0, import_jsx_runtime81.jsx)(Spinner, { size: "sm", color: "primaryButtonText" }) : switchNetworkBtnTitle });
}
function useWalletDetailsModal() {
  const account = useActiveAccount();
  const setRootEl = (0, import_react49.useContext)(SetRootElementContext);
  function closeModal() {
    setRootEl(null);
  }
  function openModal(props) {
    if (!account) {
      throw new Error("Wallet is not connected.");
    }
    getConnectLocale(props.locale || "en_US").then((locale) => {
      setRootEl((0, import_jsx_runtime81.jsx)(DetailsModal, { client: props.client, locale, detailsModal: {
        footer: props.footer,
        hideDisconnect: props.hideDisconnect,
        hideSwitchWallet: props.hideSwitchWallet,
        networkSelector: props.networkSelector,
        payOptions: props.payOptions,
        showTestnetFaucet: props.showTestnetFaucet,
        connectedAccountName: props.connectedAccountName,
        connectedAccountAvatarUrl: props.connectedAccountAvatarUrl,
        hideBuyFunds: props.hideBuyFunds,
        hideReceiveFunds: props.hideReceiveFunds,
        hideSendFunds: props.hideSendFunds,
        assetTabs: props.assetTabs
      }, displayBalanceToken: props.displayBalanceToken, theme: props.theme || "dark", supportedTokens: props.supportedTokens, supportedNFTs: props.supportedNFTs, closeModal, onDisconnect: (info) => {
        var _a;
        (_a = props.onDisconnect) == null ? void 0 : _a.call(props, info);
        closeModal();
      }, chains: props.chains || [], connectOptions: props.connectOptions }));
    }).catch(() => {
      closeModal();
    });
  }
  return {
    open: openModal
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModal.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var import_react50 = __toESM(require_react(), 1);
var ConnectModal = (props) => {
  const screenSetup = useSetupScreen({
    size: props.size,
    welcomeScreen: props.welcomeScreen,
    wallets: props.wallets
  });
  const setSelectionData = useSetSelectionData();
  const { screen, setScreen, initialScreen } = screenSetup;
  const isWalletModalOpen = useIsWalletModalOpen();
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const [hideModal, setHideModal] = (0, import_react50.useState)(false);
  const closeModal = (0, import_react50.useCallback)(() => {
    var _a;
    (_a = props.onClose) == null ? void 0 : _a.call(props);
    setIsWalletModalOpen(false);
    onModalUnmount(() => {
      setScreen(initialScreen);
      setSelectionData({});
    });
  }, [
    initialScreen,
    setIsWalletModalOpen,
    setScreen,
    setSelectionData,
    props.onClose
  ]);
  const activeAccount = useActiveAccount();
  (0, import_react50.useEffect)(() => {
    if (!isWalletModalOpen) {
      onModalUnmount(() => {
        setHideModal(false);
      });
    }
  }, [isWalletModalOpen]);
  const setModalVisibility = (0, import_react50.useCallback)((value) => setHideModal(!value), []);
  (0, import_react50.useEffect)(() => {
    if (isWalletModalOpen && screen === reservedScreens.signIn && !activeAccount) {
      setScreen(initialScreen);
      setIsWalletModalOpen(false);
    }
  }, [
    initialScreen,
    isWalletModalOpen,
    screen,
    setIsWalletModalOpen,
    setScreen,
    activeAccount
  ]);
  return (0, import_jsx_runtime82.jsx)(Modal, { hide: hideModal, size: props.size, open: isWalletModalOpen, setOpen: (value) => {
    if (hideModal) {
      return;
    }
    if (!value) {
      closeModal();
    }
  }, children: (0, import_jsx_runtime82.jsx)(ConnectModalContent, { shouldSetActive: props.shouldSetActive, screenSetup, setModalVisibility, isOpen: isWalletModalOpen, onClose: closeModal, accountAbstraction: props.accountAbstraction, auth: props.auth, client: props.client, connectLocale: props.connectLocale, size: props.size, welcomeScreen: props.welcomeScreen, meta: props.meta, hideHeader: false, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, wallets: props.wallets, chain: props.chain, showAllWallets: props.showAllWallets, chains: props.chains, walletConnect: props.walletConnect, modalHeader: void 0, walletIdsToHide: void 0 }) });
};
var ConnectModal_default = ConnectModal;

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/LockIcon.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var LockIcon = (props) => {
  return (0, import_jsx_runtime83.jsx)("svg", { width: props.size, height: props.size, viewBox: "0 0 16 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: (0, import_jsx_runtime83.jsx)("path", { d: "M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H3V5C3 3.61667 3.48767 2.43733 4.463 1.462C5.43767 0.487333 6.61667 0 8 0C9.38333 0 10.5627 0.487333 11.538 1.462C12.5127 2.43733 13 3.61667 13 5V7H14C14.55 7 15.021 7.19567 15.413 7.587C15.8043 7.979 16 8.45 16 9V19C16 19.55 15.8043 20.021 15.413 20.413C15.021 20.8043 14.55 21 14 21H2ZM8 16C8.55 16 9.021 15.8043 9.413 15.413C9.80433 15.021 10 14.55 10 14C10 13.45 9.80433 12.979 9.413 12.587C9.021 12.1957 8.55 12 8 12C7.45 12 6.97933 12.1957 6.588 12.587C6.196 12.979 6 13.45 6 14C6 14.55 6.196 15.021 6.588 15.413C6.97933 15.8043 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js
var TW_CONNECT_WALLET = "tw-connect-wallet";
function ConnectButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const wallets = (0, import_react51.useMemo)(() => props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }), [props.wallets, props.appMetadata, props.chains]);
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const connectionManager = useConnectionManager();
  usePreloadWalletProviders({
    wallets,
    client: props.client
  });
  (0, import_react51.useEffect)(() => {
    if (props.chain) {
      connectionManager.defineChains([props.chain]);
    }
  }, [props.chain, connectionManager]);
  (0, import_react51.useEffect)(() => {
    if (props.chains) {
      connectionManager.defineChains(props.chains);
    }
  }, [props.chains, connectionManager]);
  const size4 = (0, import_react51.useMemo)(() => {
    var _a2;
    return !canFitWideModal() || wallets.length === 1 ? "compact" : ((_a2 = props.connectModal) == null ? void 0 : _a2.size) || "compact";
  }, [wallets.length, (_a = props.connectModal) == null ? void 0 : _a.size]);
  const preferredChain = ((_b = props.accountAbstraction) == null ? void 0 : _b.chain) || props.chain || ((_c = props.chains) == null ? void 0 : _c[0]);
  const autoConnectComp = props.autoConnect !== false && (0, import_jsx_runtime84.jsx)(AutoConnect, { chain: preferredChain, appMetadata: props.appMetadata, client: props.client, wallets, timeout: typeof props.autoConnect === "boolean" ? void 0 : (_d = props.autoConnect) == null ? void 0 : _d.timeout, accountAbstraction: props.accountAbstraction, onConnect: props.onConnect });
  if (!localeQuery.data) {
    const combinedClassName = `${((_e = props.connectButton) == null ? void 0 : _e.className) || ""} ${TW_CONNECT_WALLET}`;
    return (0, import_jsx_runtime84.jsxs)(AnimatedButton, { disabled: true, className: combinedClassName, variant: "primary", type: "button", style: {
      minWidth: "165px",
      height: "50px",
      ...(_f = props.connectButton) == null ? void 0 : _f.style
    }, children: [autoConnectComp, (0, import_jsx_runtime84.jsx)(Spinner, { size: "sm", color: "primaryButtonText" })] });
  }
  return (0, import_jsx_runtime84.jsxs)(WalletUIStatesProvider, { theme: props.theme, isOpen: false, children: [(0, import_jsx_runtime84.jsx)(ConnectButtonInner, { ...props, connectLocale: localeQuery.data }), (0, import_jsx_runtime84.jsx)(ConnectModal_default, { shouldSetActive: true, accountAbstraction: props.accountAbstraction, auth: props.auth, chain: preferredChain, chains: props.chains, client: props.client, connectLocale: localeQuery.data, meta: {
    title: (_g = props.connectModal) == null ? void 0 : _g.title,
    titleIconUrl: (_h = props.connectModal) == null ? void 0 : _h.titleIcon,
    showThirdwebBranding: (_i = props.connectModal) == null ? void 0 : _i.showThirdwebBranding,
    termsOfServiceUrl: (_j = props.connectModal) == null ? void 0 : _j.termsOfServiceUrl,
    privacyPolicyUrl: (_k = props.connectModal) == null ? void 0 : _k.privacyPolicyUrl,
    requireApproval: (_l = props.connectModal) == null ? void 0 : _l.requireApproval
  }, welcomeScreen: (_m = props.connectModal) == null ? void 0 : _m.welcomeScreen, size: size4, localeId: props.locale || "en_US", onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, showAllWallets: props.showAllWallets, walletConnect: props.walletConnect, wallets }), autoConnectComp] });
}
function ConnectButtonInner(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const [showSignatureModal, setShowSignatureModal] = (0, import_react51.useState)(false);
  (0, import_react51.useEffect)(() => {
    if (!activeAccount) {
      setShowSignatureModal(false);
    }
  }, [activeAccount]);
  const theme = props.theme || "dark";
  const connectionStatus = useActiveWalletConnectionStatus();
  const locale = props.connectLocale;
  const isLoading = connectionStatus === "connecting";
  const connectButtonLabel = ((_a = props.connectButton) == null ? void 0 : _a.label) || locale.defaultButtonTitle;
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const supportedTokens = (0, import_react51.useMemo)(() => {
    if (!props.supportedTokens) {
      return void 0;
    }
    const tokens = { ...defaultTokens };
    for (const k in props.supportedTokens) {
      const key = Number(k);
      const tokenList = props.supportedTokens[key];
      if (tokenList) {
        tokens[key] = tokenList;
      }
    }
    return tokens;
  }, [props.supportedTokens]);
  if (!activeAccount) {
    const combinedClassName = `${((_b = props.connectButton) == null ? void 0 : _b.className) || ""} ${TW_CONNECT_WALLET}`;
    return (0, import_jsx_runtime84.jsx)(AnimatedButton, { disabled: isLoading, className: combinedClassName, "data-theme": theme, "data-is-loading": isLoading, variant: "primary", type: "button", style: {
      minWidth: "165px",
      height: "50px",
      fontSize: "16px",
      ...(_c = props.connectButton) == null ? void 0 : _c.style
    }, "aria-label": connectionStatus === "connecting" ? locale.connecting : typeof connectButtonLabel === "string" ? connectButtonLabel : locale.defaultButtonTitle, onClick: () => {
      setIsWalletModalOpen(true);
    }, "data-test": "connect-wallet-button", children: isLoading ? (0, import_jsx_runtime84.jsx)(Spinner, { size: "sm", color: "primaryButtonText" }) : connectButtonLabel });
  }
  if (siweAuth.requiresAuth) {
    if (siweAuth.isLoading || siweAuth.isLoggingIn || siweAuth.isLoggingOut) {
      const combinedClassName = `${((_d = props.connectButton) == null ? void 0 : _d.className) || ""} ${TW_CONNECT_WALLET}`;
      return (0, import_jsx_runtime84.jsx)(AnimatedButton, { disabled: true, className: combinedClassName, variant: "primary", type: "button", style: {
        minWidth: "165px",
        height: "50px",
        ...(_e = props.connectButton) == null ? void 0 : _e.style
      }, children: (0, import_jsx_runtime84.jsx)(Spinner, { size: "sm", color: "primaryButtonText" }) });
    }
    if (!siweAuth.isLoggedIn) {
      return (0, import_jsx_runtime84.jsxs)(import_jsx_runtime84.Fragment, { children: [(0, import_jsx_runtime84.jsx)(Button, { variant: "primary", type: "button", onClick: () => {
        setShowSignatureModal(true);
      }, className: (_f = props.signInButton) == null ? void 0 : _f.className, style: {
        minWidth: "165px",
        minHeight: "50px",
        ...(_g = props.signInButton) == null ? void 0 : _g.style
      }, children: siweAuth.isLoggingIn ? (0, import_jsx_runtime84.jsx)(Spinner, { size: "sm", color: "primaryButtonText" }) : (0, import_jsx_runtime84.jsxs)(Container, { flex: "row", center: "y", gap: "sm", children: [(0, import_jsx_runtime84.jsx)(LockIcon, { size: iconSize.sm }), (0, import_jsx_runtime84.jsxs)("span", { children: [" ", ((_h = props.signInButton) == null ? void 0 : _h.label) || locale.signIn, " "] })] }) }), (0, import_jsx_runtime84.jsx)(Modal, { size: "compact", open: showSignatureModal, setOpen: setShowSignatureModal, children: (0, import_jsx_runtime84.jsx)(SignatureScreen, { client: props.client, connectLocale: locale, modalSize: "compact", termsOfServiceUrl: (_i = props.connectModal) == null ? void 0 : _i.termsOfServiceUrl, privacyPolicyUrl: (_j = props.connectModal) == null ? void 0 : _j.privacyPolicyUrl, onDone: () => setShowSignatureModal(false), auth: props.auth }) })] });
    }
  }
  return (0, import_jsx_runtime84.jsx)(ConnectedWalletDetails, { theme, detailsButton: props.detailsButton, detailsModal: props.detailsModal, supportedTokens, supportedNFTs: props.supportedNFTs, onDisconnect: (info) => {
    var _a2;
    if (siweAuth.requiresAuth) {
      siweAuth.doLogout();
    }
    (_a2 = props.onDisconnect) == null ? void 0 : _a2.call(props, info);
  }, chains: (props == null ? void 0 : props.chains) || [], chain: props.chain, switchButton: props.switchButton, client: props.client, connectLocale: locale, connectOptions: {
    accountAbstraction: props.accountAbstraction,
    appMetadata: props.appMetadata,
    chain: props.chain,
    chains: props.chains,
    connectModal: props.connectModal,
    recommendedWallets: props.recommendedWallets,
    showAllWallets: props.showAllWallets,
    walletConnect: props.walletConnect,
    wallets: props.wallets,
    hiddenWallets: (_k = props.detailsModal) == null ? void 0 : _k.hiddenWallets
  } });
}
var AnimatedButton = newStyled(Button)({
  animation: `${fadeInAnimation} 300ms ease`
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/DirectPaymentModeScreen.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
function DirectPaymentModeScreen(props) {
  var _a, _b, _c, _d, _e, _f;
  const { payUiOptions, supportedDestinations, client, onContinue, payerAccount } = props;
  const theme = useCustomTheme();
  const activeWallet = useActiveWallet();
  const metadata = payUiOptions.metadata;
  const paymentInfo = payUiOptions.paymentInfo;
  const { data: chainData } = useChainMetadata(paymentInfo.chain);
  const { data: sellerEns } = useEnsName({
    client,
    address: paymentInfo.sellerAddress
  });
  const totalCostQuery = useQuery({
    queryKey: ["amount", paymentInfo],
    queryFn: async () => {
      let tokenDecimals = 18;
      if (paymentInfo.token && !isNativeToken(paymentInfo.token)) {
        tokenDecimals = await decimals({
          contract: getContract({
            address: paymentInfo.token.address,
            chain: paymentInfo.chain,
            client
          })
        });
      }
      let cost;
      if ("amountWei" in paymentInfo) {
        cost = toTokens(paymentInfo.amountWei, tokenDecimals);
      } else {
        cost = paymentInfo.amount;
      }
      return cost;
    }
  });
  const totalCost = totalCostQuery.data;
  if (!chainData || totalCost === void 0) {
    return (0, import_jsx_runtime85.jsx)(LoadingScreen, {});
  }
  const token = paymentInfo.token ? {
    ...paymentInfo.token,
    icon: ((_a = paymentInfo.token) == null ? void 0 : _a.icon) || ((_c = (_b = supportedDestinations.find((c) => c.chain.id === paymentInfo.chain.id)) == null ? void 0 : _b.tokens.find((t) => {
      var _a2;
      return t.address.toLowerCase() === ((_a2 = paymentInfo.token) == null ? void 0 : _a2.address.toLowerCase());
    })) == null ? void 0 : _c.icon)
  } : {
    address: NATIVE_TOKEN_ADDRESS,
    name: chainData.nativeCurrency.name,
    symbol: chainData.nativeCurrency.symbol,
    icon: (_d = chainData.icon) == null ? void 0 : _d.url
  };
  return (0, import_jsx_runtime85.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime85.jsx)(ModalHeader, { title: (metadata == null ? void 0 : metadata.name) || "Payment Details" }), (0, import_jsx_runtime85.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime85.jsxs)(Container, { children: [(metadata == null ? void 0 : metadata.image) ? (0, import_jsx_runtime85.jsx)(Img, { client, src: metadata == null ? void 0 : metadata.image, style: {
    width: "100%",
    borderRadius: spacing.md,
    backgroundColor: theme.colors.tertiaryBg
  } }) : activeWallet ? (0, import_jsx_runtime85.jsxs)(Container, { flex: "row", center: "both", style: {
    padding: spacing.md,
    marginBottom: spacing.md,
    borderRadius: spacing.md,
    backgroundColor: theme.colors.tertiaryBg
  }, children: [(0, import_jsx_runtime85.jsx)(WalletImage, { size: iconSize.xl, id: activeWallet.id, client }), (0, import_jsx_runtime85.jsx)("div", { style: {
    flexGrow: 1,
    borderBottom: "6px dotted",
    borderColor: theme.colors.secondaryIconColor,
    marginLeft: spacing.md,
    marginRight: spacing.md
  } }), (0, import_jsx_runtime85.jsx)(ChainIcon, { client, size: iconSize.xl, chainIconUrl: (_e = chainData.icon) == null ? void 0 : _e.url })] }) : null, (0, import_jsx_runtime85.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime85.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime85.jsx)(Container, { flex: "column", expand: true, children: (0, import_jsx_runtime85.jsx)(Text, { size: "md", color: "primaryText", weight: 700, children: "Price" }) }), (0, import_jsx_runtime85.jsx)(Container, { expand: true, children: (0, import_jsx_runtime85.jsxs)(Container, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime85.jsx)(TokenIcon, { chain: paymentInfo.chain, client: props.client, size: "sm", token }), (0, import_jsx_runtime85.jsxs)(Text, { color: "primaryText", size: "md", weight: 700, children: [String(formatNumber(Number(totalCost), 6)), " ", token.symbol] })] }) })] }), (0, import_jsx_runtime85.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime85.jsx)(Line, {}), (0, import_jsx_runtime85.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime85.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime85.jsx)(Container, { flex: "column", expand: true, children: (0, import_jsx_runtime85.jsx)(Text, { size: "xs", color: "secondaryText", children: "Network" }) }), (0, import_jsx_runtime85.jsx)(Container, { expand: true, children: (0, import_jsx_runtime85.jsxs)(Container, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime85.jsx)(ChainIcon, { chainIconUrl: (_f = chainData.icon) == null ? void 0 : _f.url, size: "xs", client: props.client }), (0, import_jsx_runtime85.jsx)(Text, { size: "xs", color: "secondaryText", style: { textAlign: "right" }, children: chainData.name })] }) })] }), (0, import_jsx_runtime85.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime85.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime85.jsx)(Container, { flex: "column", expand: true, children: (0, import_jsx_runtime85.jsx)(Text, { size: "xs", color: "secondaryText", children: "Seller" }) }), (0, import_jsx_runtime85.jsx)(Container, { expand: true, children: (0, import_jsx_runtime85.jsx)(Container, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: (0, import_jsx_runtime85.jsx)(Text, { size: "xs", color: "secondaryText", style: { textAlign: "right" }, children: sellerEns || shortenAddress(paymentInfo.sellerAddress) }) }) })] })] }), (0, import_jsx_runtime85.jsx)(Spacer, { y: "xl" }), payerAccount ? (0, import_jsx_runtime85.jsx)(Button, { variant: "accent", fullWidth: true, onClick: () => {
    trackPayEvent({
      event: "choose_payment_method_direct_payment_mode",
      client,
      walletAddress: payerAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    onContinue(totalCost, paymentInfo.chain, token);
  }, children: "Choose Payment Method" }) : (0, import_jsx_runtime85.jsx)("div", { children: (0, import_jsx_runtime85.jsx)(ConnectButton, { ...props.connectOptions, client, theme, connectButton: {
    style: {
      width: "100%"
    }
  } }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/EstimatedTimeAndFees.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function EstimatedTimeAndFees(props) {
  const { estimatedSeconds, quoteIsLoading } = props;
  return (0, import_jsx_runtime86.jsxs)(Container, { bg: "tertiaryBg", flex: "row", borderColor: "borderColor", style: {
    borderRadius: radius.md,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: "1px",
    borderStyle: "solid"
  }, children: [(0, import_jsx_runtime86.jsxs)(Container, { flex: "row", center: "y", gap: "xxs", color: "accentText", p: "sm", children: [(0, import_jsx_runtime86.jsx)(ClockIcon, { width: iconSize.sm, height: iconSize.sm }), quoteIsLoading ? (0, import_jsx_runtime86.jsx)(Skeleton, { height: fontSize.xs, width: "50px", color: "borderColor" }) : (0, import_jsx_runtime86.jsx)(Text, { size: "xs", color: "secondaryText", children: estimatedSeconds !== void 0 ? `~${formatSeconds(estimatedSeconds)}` : "--" })] }), (0, import_jsx_runtime86.jsxs)(Button, { variant: "ghost", onClick: props.onViewFees, gap: "xs", children: [(0, import_jsx_runtime86.jsx)(Container, { color: "accentText", flex: "row", center: "both", children: (0, import_jsx_runtime86.jsx)(ViewFeeIcon, { size: iconSize.sm }) }), (0, import_jsx_runtime86.jsx)(Text, { size: "xs", color: "secondaryText", children: "View Fees" })] })] });
}
var ViewFeeIcon = (props) => {
  return (0, import_jsx_runtime86.jsxs)("svg", { width: props.size, height: props.size, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [(0, import_jsx_runtime86.jsx)("path", { d: "M9.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime86.jsx)("path", { d: "M4.5 7.5L7.5 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayWIthCreditCard.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function PayWithCreditCard(props) {
  return (0, import_jsx_runtime87.jsxs)(Container, { bg: "tertiaryBg", borderColor: "borderColor", flex: "row", style: {
    borderRadius: radius.md,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: "1px",
    borderStyle: "solid",
    borderBottom: "none",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center"
  }, children: [(0, import_jsx_runtime87.jsxs)(CurrencyButton, { variant: "ghost", onClick: props.onSelectCurrency, style: {
    minHeight: "64px",
    justifyContent: "flex-start",
    minWidth: "50%"
  }, gap: "sm", children: [(0, import_jsx_runtime87.jsx)(props.currency.icon, { size: iconSize.md }), (0, import_jsx_runtime87.jsxs)(Container, { flex: "row", center: "y", gap: "xxs", color: "secondaryText", children: [(0, import_jsx_runtime87.jsx)(Text, { color: "primaryText", children: props.currency.shorthand }), (0, import_jsx_runtime87.jsx)(ChevronDownIcon, { width: iconSize.sm, height: iconSize.sm })] })] }), (0, import_jsx_runtime87.jsx)("div", { style: {
    flexGrow: 1,
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: spacing.xxs,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    justifyContent: "center",
    paddingRight: spacing.sm
  }, children: props.isLoading ? (0, import_jsx_runtime87.jsx)(Skeleton, { width: "100px", height: fontSize.lg }) : (0, import_jsx_runtime87.jsx)(Text, { size: "lg", color: props.value ? "primaryText" : "secondaryText", children: props.value ? `${formatNumber(Number(props.value), 6)}` : "--" }) })] });
}
var CurrencyButton = newStyled(Button)(() => {
  return {
    "&[disabled]:hover": {
      borderColor: "transparent"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/TransactionModeScreen.js
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/WalletSelectorButton.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);
function WalletRowWithBalances(props) {
  const theme = useCustomTheme();
  const [showAll, setShowAll] = (0, import_react52.useState)(false);
  const maxDisplayedBalances = 3;
  const displayedBalances = showAll ? props.balances : props.balances.slice(0, maxDisplayedBalances);
  return (0, import_jsx_runtime88.jsxs)(Container, { bg: "tertiaryBg", style: {
    borderRadius: radius.lg,
    border: `1px solid ${theme.colors.borderColor}`
  }, children: [(0, import_jsx_runtime88.jsx)(Container, { style: { padding: spacing.sm }, children: (0, import_jsx_runtime88.jsx)(WalletRow, { ...props }) }), (0, import_jsx_runtime88.jsx)("div", { style: { borderTop: `1px solid ${theme.colors.borderColor}` } }), (0, import_jsx_runtime88.jsx)(Container, { flex: "column", children: props.balances.length > 0 ? (0, import_jsx_runtime88.jsxs)(import_jsx_runtime88.Fragment, { children: [displayedBalances.map((b) => (0, import_jsx_runtime88.jsx)(TokenBalanceRow, { client: props.client, onClick: () => props.onClick(props.wallet, b.token, b.chain), tokenBalance: b, wallet: props.wallet }, `${b.token.address}-${b.chain.id}`)), props.balances.length > maxDisplayedBalances && (0, import_jsx_runtime88.jsx)(StyledButton2, { variant: "secondary", onClick: () => setShowAll(!showAll), style: {
    justifyContent: "start"
  }, children: (0, import_jsx_runtime88.jsx)(Text, { size: "xs", children: showAll ? "Show less" : "Show more" }) })] }) : (0, import_jsx_runtime88.jsx)(Container, { style: { padding: spacing.sm }, children: (0, import_jsx_runtime88.jsx)(Text, { size: "sm", color: "secondaryText", children: "Not enough funds" }) }) })] });
}
function TokenBalanceRow(props) {
  const { tokenBalance, wallet, onClick, client } = props;
  const chainInfo = useChainName(tokenBalance.chain);
  return (0, import_jsx_runtime88.jsxs)(StyledButton2, { onClick: () => onClick(tokenBalance.token, wallet), variant: "secondary", children: [(0, import_jsx_runtime88.jsx)(TokenIcon, { token: tokenBalance.token, chain: tokenBalance.chain, size: "md", client }), (0, import_jsx_runtime88.jsxs)(Container, { flex: "column", gap: "3xs", children: [(0, import_jsx_runtime88.jsx)(Text, { size: "xs", color: "primaryText", children: tokenBalance.token.symbol }), chainInfo && (0, import_jsx_runtime88.jsx)(Text, { size: "xs", children: chainInfo.name })] }), (0, import_jsx_runtime88.jsx)("div", { style: { flex: 1 } }), (0, import_jsx_runtime88.jsx)(Container, { flex: "row", center: "y", gap: "3xs", children: (0, import_jsx_runtime88.jsx)(Text, { size: "xs", color: "secondaryText", children: formatTokenBalance(tokenBalance.balance, true) }) })] });
}
function WalletRow(props) {
  const { client, address } = props;
  const walletId = props.walletId;
  const theme = useCustomTheme();
  const ensNameQuery = useEnsName({
    client,
    address
  });
  const addressOrENS = ensNameQuery.data || shortenAddress(address);
  const ensAvatarQuery = useEnsAvatar({
    client,
    ensName: ensNameQuery.data
  });
  return (0, import_jsx_runtime88.jsxs)(Container, { flex: "row", center: "y", gap: "sm", color: "secondaryText", children: [ensAvatarQuery.data ? (0, import_jsx_runtime88.jsx)(Img, { src: ensAvatarQuery.data, width: props.iconSize ? iconSize[props.iconSize] : iconSize.md, height: props.iconSize ? iconSize[props.iconSize] : iconSize.md, style: {
    borderRadius: "100%",
    overflow: "hidden",
    border: `1px solid ${theme.colors.borderColor}`
  }, client: props.client }) : walletId ? (0, import_jsx_runtime88.jsx)(WalletImage, { id: walletId, size: props.iconSize || iconSize.md, client: props.client }) : (0, import_jsx_runtime88.jsx)(Container, { style: {
    width: iconSize.md,
    height: iconSize.md,
    borderRadius: "100%",
    overflow: "hidden",
    border: `1px solid ${theme.colors.borderColor}`
  }, children: (0, import_jsx_runtime88.jsx)(Blobbie, { address: props.address, size: Number(iconSize.md) }) }), (0, import_jsx_runtime88.jsx)(Text, { size: props.textSize || "sm", color: "primaryText", children: addressOrENS || shortenAddress(props.address) })] });
}
var StyledButton2 = newStyled(Button)((_) => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: spacing.sm,
    gap: spacing.sm,
    "&:hover": {
      background: theme.colors.secondaryButtonBg,
      transform: "scale(1.01)"
    },
    transition: "background 200ms ease, transform 150ms ease"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useBuyTxStates.js
var import_react53 = __toESM(require_react(), 1);
function useTransactionCostAndData(args) {
  const { transaction, account, supportedDestinations } = args;
  const [txQueryKey, setTxQueryKey] = (0, import_react53.useState)();
  (0, import_react53.useEffect)(() => {
    Promise.all([
      resolvePromisedValue(transaction.value),
      resolvePromisedValue(transaction.erc20Value),
      resolvePromisedValue(transaction.to),
      encode(transaction)
    ]).then(([value, erc20Value, to, data]) => {
      var _a;
      setTxQueryKey({
        value: value == null ? void 0 : value.toString(),
        erc20Value: (_a = erc20Value == null ? void 0 : erc20Value.amountWei) == null ? void 0 : _a.toString(),
        erc20Currency: erc20Value == null ? void 0 : erc20Value.tokenAddress,
        to,
        data
      });
    });
  }, [transaction]);
  return useQuery({
    queryKey: [
      "transaction-cost",
      transaction.chain.id,
      account == null ? void 0 : account.address,
      txQueryKey
    ],
    queryFn: async () => {
      var _a, _b, _c;
      if (!account) {
        throw new Error("No account");
      }
      const erc20Value = await resolvePromisedValue(transaction.erc20Value);
      if (erc20Value) {
        const [tokenBalance, tokenMeta, gasCostWei2] = await Promise.all([
          getWalletBalance({
            address: account.address,
            chain: transaction.chain,
            client: transaction.client,
            tokenAddress: erc20Value.tokenAddress
          }),
          getCurrencyMetadata({
            contract: getContract({
              address: erc20Value.tokenAddress,
              chain: transaction.chain,
              client: transaction.client
            })
          }),
          getTransactionGasCost(transaction, account == null ? void 0 : account.address)
        ]);
        const transactionValueWei2 = erc20Value.amountWei;
        const walletBalance2 = tokenBalance;
        const currency = {
          address: erc20Value.tokenAddress,
          name: tokenMeta.name,
          symbol: tokenMeta.symbol,
          icon: (_b = (_a = supportedDestinations.find((c) => c.chain.id === transaction.chain.id)) == null ? void 0 : _a.tokens.find((t) => t.address.toLowerCase() === erc20Value.tokenAddress.toLowerCase())) == null ? void 0 : _b.icon
        };
        return {
          token: currency,
          decimals: tokenMeta.decimals,
          walletBalance: walletBalance2,
          gasCostWei: gasCostWei2,
          transactionValueWei: transactionValueWei2
        };
      }
      const [nativeWalletBalance, chainMetadata, gasCostWei] = await Promise.all([
        getWalletBalance({
          address: account.address,
          chain: transaction.chain,
          client: transaction.client
        }),
        getChainMetadata(transaction.chain),
        getTransactionGasCost(transaction, account == null ? void 0 : account.address)
      ]);
      const walletBalance = nativeWalletBalance;
      const transactionValueWei = await resolvePromisedValue(transaction.value) || 0n;
      return {
        token: {
          address: NATIVE_TOKEN_ADDRESS,
          name: chainMetadata.nativeCurrency.name,
          symbol: chainMetadata.nativeCurrency.symbol,
          icon: (_c = chainMetadata.icon) == null ? void 0 : _c.url
        },
        decimals: 18,
        walletBalance,
        gasCostWei,
        transactionValueWei
      };
    },
    enabled: !!transaction && !!account && !!txQueryKey,
    refetchInterval: () => {
      if (transaction.erc20Value) {
        return void 0;
      }
      return 3e4;
    }
  });
}
async function getTransactionGasCost(tx, from) {
  try {
    const gasCost = await estimateGasCost({
      transaction: tx,
      from
    });
    const bufferCost = gasCost.wei / 10n;
    return gasCost.wei + bufferCost;
  } catch {
    if (from) {
      return await getTransactionGasCost(tx);
    }
    const gasPrice = await getGasPrice({
      client: tx.client,
      chain: tx.chain
    });
    return 2000000n * gasPrice;
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/TransactionModeScreen.js
function TransactionModeScreen(props) {
  var _a;
  const { payUiOptions, client, payerAccount, supportedDestinations, onContinue } = props;
  const { data: chainData } = useChainMetadata(payUiOptions.transaction.chain);
  const metadata = payUiOptions.metadata;
  const { data: transactionCostAndData } = useTransactionCostAndData({
    transaction: payUiOptions.transaction,
    account: payerAccount,
    supportedDestinations
  });
  const theme = useCustomTheme();
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const sponsoredTransactionsEnabled = hasSponsoredTransactionsEnabled(activeWallet);
  const balanceQuery = useWalletBalance({
    address: activeAccount == null ? void 0 : activeAccount.address,
    chain: payUiOptions.transaction.chain,
    tokenAddress: isNativeToken((transactionCostAndData == null ? void 0 : transactionCostAndData.token) || NATIVE_TOKEN) ? void 0 : transactionCostAndData == null ? void 0 : transactionCostAndData.token.address,
    client: props.client
  }, {
    enabled: !!transactionCostAndData
  });
  if (!transactionCostAndData || !chainData) {
    return (0, import_jsx_runtime89.jsx)(LoadingScreen, {});
  }
  return (0, import_jsx_runtime89.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime89.jsx)(ModalHeader, { title: (metadata == null ? void 0 : metadata.name) || "Transaction" }), (0, import_jsx_runtime89.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime89.jsxs)(Container, { children: [(metadata == null ? void 0 : metadata.image) ? (0, import_jsx_runtime89.jsx)(Img, { client, src: metadata == null ? void 0 : metadata.image, style: {
    width: "100%",
    borderRadius: spacing.md,
    border: `1px solid ${theme.colors.borderColor}`,
    backgroundColor: theme.colors.tertiaryBg
  } }) : activeAccount ? (0, import_jsx_runtime89.jsxs)(Container, { flex: "column", gap: "sm", children: [(0, import_jsx_runtime89.jsx)(Text, { size: "sm", color: "danger", style: { textAlign: "center" }, children: "Insufficient funds" }), (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between",
    padding: spacing.sm,
    marginBottom: spacing.sm,
    borderRadius: spacing.md,
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`
  }, children: [(0, import_jsx_runtime89.jsx)(WalletRow, { address: activeAccount == null ? void 0 : activeAccount.address, iconSize: "md", client }), balanceQuery.data ? (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", gap: "3xs", center: "y", children: [(0, import_jsx_runtime89.jsx)(Text, { size: "xs", color: "secondaryText", weight: 500, children: formatTokenBalance(balanceQuery.data, false) }), (0, import_jsx_runtime89.jsx)(TokenSymbol, { token: transactionCostAndData.token, chain: payUiOptions.transaction.chain, size: "xs", color: "secondaryText" })] }) : (0, import_jsx_runtime89.jsx)(Skeleton, { width: "70px", height: fontSize.xs })] })] }) : null, (0, import_jsx_runtime89.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime89.jsx)(Container, { flex: "column", expand: true, children: (0, import_jsx_runtime89.jsx)(Text, { size: "md", color: "primaryText", weight: 700, children: "Price" }) }), (0, import_jsx_runtime89.jsx)(Container, { expand: true, children: (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime89.jsx)(TokenIcon, { chain: payUiOptions.transaction.chain, client: props.client, size: "sm", token: transactionCostAndData.token }), (0, import_jsx_runtime89.jsxs)(Text, { color: "primaryText", size: "md", weight: 700, children: [String(formatNumber(Number(toTokens(transactionCostAndData.transactionValueWei, transactionCostAndData.decimals)), 6)), " ", transactionCostAndData.token.symbol] })] }) })] }), (0, import_jsx_runtime89.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime89.jsx)(Line, {}), (0, import_jsx_runtime89.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime89.jsx)(Container, { flex: "column", expand: true, children: (0, import_jsx_runtime89.jsx)(Text, { size: "xs", color: "secondaryText", children: "Gas Fees" }) }), (0, import_jsx_runtime89.jsx)(Container, { expand: true, children: (0, import_jsx_runtime89.jsx)(Container, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: (0, import_jsx_runtime89.jsx)(Text, { color: sponsoredTransactionsEnabled ? "success" : "primaryText", size: "xs", children: sponsoredTransactionsEnabled ? "Sponsored" : `${String(formatNumber(Number(toTokens(transactionCostAndData.gasCostWei, chainData.nativeCurrency.decimals)), 6))} ${chainData.nativeCurrency.symbol}` }) }) })] }), (0, import_jsx_runtime89.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime89.jsx)(Container, { flex: "column", expand: true, children: (0, import_jsx_runtime89.jsx)(Text, { size: "xs", color: "secondaryText", children: "Network" }) }), (0, import_jsx_runtime89.jsx)(Container, { expand: true, children: (0, import_jsx_runtime89.jsxs)(Container, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime89.jsx)(ChainIcon, { chainIconUrl: (_a = chainData.icon) == null ? void 0 : _a.url, size: "xs", client: props.client }), (0, import_jsx_runtime89.jsx)(Text, { size: "xs", color: "secondaryText", style: { textAlign: "right" }, children: chainData.name })] }) })] })] }), (0, import_jsx_runtime89.jsx)(Spacer, { y: "xl" }), payerAccount ? (0, import_jsx_runtime89.jsx)(Button, { variant: "accent", fullWidth: true, onClick: () => {
    let totalCostWei = transactionCostAndData.transactionValueWei;
    if (transactionCostAndData.token.address === NATIVE_TOKEN_ADDRESS && !sponsoredTransactionsEnabled) {
      totalCostWei += transactionCostAndData.gasCostWei;
    }
    trackPayEvent({
      event: "choose_payment_method_transaction_mode",
      client,
      walletAddress: payerAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    onContinue(toTokens(totalCostWei, transactionCostAndData.decimals), payUiOptions.transaction.chain, transactionCostAndData.token);
  }, children: "Choose Payment Method" }) : (0, import_jsx_runtime89.jsx)("div", { children: (0, import_jsx_runtime89.jsx)(ConnectButton, { ...props.connectOptions, client, theme, connectButton: {
    style: {
      width: "100%"
    }
  } }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/CurrencySelection.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
function CurrencySelection(props) {
  return (0, import_jsx_runtime90.jsxs)(Container, { children: [(0, import_jsx_runtime90.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime90.jsx)(ModalHeader, { title: "Pay with", onBack: props.onBack }) }), (0, import_jsx_runtime90.jsx)(Line, {}), (0, import_jsx_runtime90.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime90.jsx)(Container, { flex: "column", gap: "xs", px: "lg", children: currencies.map((c) => {
    return (0, import_jsx_runtime90.jsxs)(SelectCurrencyButton, { fullWidth: true, variant: "secondary", onClick: () => props.onSelect(c), gap: "sm", children: [(0, import_jsx_runtime90.jsx)(c.icon, { size: iconSize.lg }), (0, import_jsx_runtime90.jsxs)(Container, { flex: "column", gap: "xxs", children: [(0, import_jsx_runtime90.jsx)(Text, { color: "primaryText", children: c.shorthand }), (0, import_jsx_runtime90.jsx)(Text, { size: "sm", children: c.name })] })] }, c.shorthand);
  }) }), (0, import_jsx_runtime90.jsx)(Spacer, { y: "lg" })] });
}
var SelectCurrencyButton = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    justifyContent: "flex-start",
    gap: spacing.sm,
    padding: spacing.sm,
    "&:hover": {
      background: theme.colors.secondaryButtonBg,
      transform: "scale(1.01)"
    },
    transition: "background 200ms ease, transform 150ms ease"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatFlow.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/openOnRamppopup.js
function openOnrampPopup(link, theme) {
  const height = 750;
  const width = 500;
  const top = (window.innerHeight - height) / 2;
  const left = (window.innerWidth - width) / 2;
  return window.open(`${link}&theme=${theme}`, "thirdweb Pay", `width=${width}, height=${height}, top=${top}, left=${left}`);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatStatusScreen.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var import_react54 = __toESM(require_react(), 1);
function OnrampStatusScreen(props) {
  var _a, _b, _c, _d;
  const queryClient = useQueryClient();
  const { openedWindow, onSuccess } = props;
  const statusQuery = useBuyWithFiatStatus({
    intentId: props.intentId,
    client: props.client
  });
  let uiStatus = "loading";
  if (((_a = statusQuery.data) == null ? void 0 : _a.status) === "ON_RAMP_TRANSFER_FAILED" || ((_b = statusQuery.data) == null ? void 0 : _b.status) === "PAYMENT_FAILED") {
    uiStatus = "failed";
  } else if (((_c = statusQuery.data) == null ? void 0 : _c.status) === "CRYPTO_SWAP_FALLBACK") {
    uiStatus = "partialSuccess";
  } else if (((_d = statusQuery.data) == null ? void 0 : _d.status) === "ON_RAMP_TRANSFER_COMPLETED") {
    uiStatus = "completed";
  }
  const purchaseCbCalled = (0, import_react54.useRef)(false);
  (0, import_react54.useEffect)(() => {
    var _a2;
    if (purchaseCbCalled.current || !onSuccess) {
      return;
    }
    if (((_a2 = statusQuery.data) == null ? void 0 : _a2.status) === "ON_RAMP_TRANSFER_COMPLETED") {
      purchaseCbCalled.current = true;
      onSuccess(statusQuery.data);
    }
  }, [onSuccess, statusQuery.data]);
  (0, import_react54.useEffect)(() => {
    var _a2, _b2;
    if (!openedWindow || !statusQuery.data) {
      return;
    }
    if (((_a2 = statusQuery.data) == null ? void 0 : _a2.status) === "CRYPTO_SWAP_REQUIRED" || ((_b2 = statusQuery.data) == null ? void 0 : _b2.status) === "ON_RAMP_TRANSFER_COMPLETED") {
      openedWindow.close();
    }
  }, [statusQuery.data, openedWindow]);
  const invalidatedBalance = (0, import_react54.useRef)(false);
  (0, import_react54.useEffect)(() => {
    var _a2;
    if (!invalidatedBalance.current && ((_a2 = statusQuery.data) == null ? void 0 : _a2.status) === "ON_RAMP_TRANSFER_COMPLETED") {
      invalidatedBalance.current = true;
      invalidateWalletBalance(queryClient);
    }
  }, [statusQuery.data, queryClient]);
  (0, import_react54.useEffect)(() => {
    var _a2;
    if (((_a2 = statusQuery.data) == null ? void 0 : _a2.status) === "CRYPTO_SWAP_REQUIRED") {
      props.onShowSwapFlow(statusQuery.data);
    }
  }, [statusQuery.data, props.onShowSwapFlow]);
  return (0, import_jsx_runtime91.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime91.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }), props.hasTwoSteps && (0, import_jsx_runtime91.jsxs)(import_jsx_runtime91.Fragment, { children: [(0, import_jsx_runtime91.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime91.jsx)(StepBar, { steps: 2, currentStep: 1 }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime91.jsxs)(Text, { size: "xs", children: ["Step 1 of 2 - Buying ", props.quote.onRampToken.token.symbol, " with", " ", props.quote.fromCurrencyWithFees.currencySymbol] })] }), (0, import_jsx_runtime91.jsx)(OnrampStatusScreenUI, { uiStatus, onDone: props.onDone, fiatStatus: statusQuery.data, client: props.client, transactionMode: props.transactionMode, quote: props.quote, isEmbed: props.isEmbed })] });
}
function OnrampStatusScreenUI(props) {
  const { uiStatus } = props;
  const statusMeta = props.fiatStatus ? getBuyWithFiatStatusMeta(props.fiatStatus) : void 0;
  const fiatStatus = props.fiatStatus && props.fiatStatus.status !== "NOT_FOUND" ? props.fiatStatus : void 0;
  const onRampTokenQuote = props.quote.onRampToken;
  const txDetails = (0, import_jsx_runtime91.jsx)(OnRampTxDetailsTable, { client: props.client, token: (fiatStatus == null ? void 0 : fiatStatus.source) ? {
    chainId: fiatStatus.source.token.chainId,
    address: fiatStatus.source.token.tokenAddress,
    symbol: fiatStatus.source.token.symbol || "",
    amount: fiatStatus.source.amount
  } : {
    chainId: onRampTokenQuote.token.chainId,
    address: onRampTokenQuote.token.tokenAddress,
    symbol: onRampTokenQuote.token.symbol,
    amount: onRampTokenQuote.amount
  }, fiat: {
    amount: props.quote.fromCurrencyWithFees.amount,
    currencySymbol: props.quote.fromCurrencyWithFees.currencySymbol
  }, statusMeta: (fiatStatus == null ? void 0 : fiatStatus.source) && statusMeta ? {
    color: statusMeta == null ? void 0 : statusMeta.color,
    text: statusMeta == null ? void 0 : statusMeta.status,
    txHash: fiatStatus.source.transactionHash
  } : void 0 });
  return (0, import_jsx_runtime91.jsxs)(Container, { children: [(0, import_jsx_runtime91.jsx)(Spacer, { y: "xl" }), uiStatus === "loading" && (0, import_jsx_runtime91.jsxs)(import_jsx_runtime91.Fragment, { children: [(0, import_jsx_runtime91.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime91.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime91.jsx)(Spinner, { size: "xxl", color: "accentText" }) }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime91.jsx)(Text, { color: "primaryText", size: "lg", center: true, children: "Buy Pending" }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "sm" }), !isMobile() && (0, import_jsx_runtime91.jsx)(Text, { center: true, children: "Complete the purchase in popup" }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "xxl" }), txDetails] }), uiStatus === "failed" && (0, import_jsx_runtime91.jsxs)(import_jsx_runtime91.Fragment, { children: [(0, import_jsx_runtime91.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime91.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime91.jsx)(AccentFailIcon, { size: iconSize["3xl"] }) }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime91.jsx)(Text, { color: "primaryText", size: "lg", center: true, children: "Transaction Failed" }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "xxl" }), txDetails] }), uiStatus === "completed" && (0, import_jsx_runtime91.jsxs)(import_jsx_runtime91.Fragment, { children: [(0, import_jsx_runtime91.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime91.jsx)(Container, { flex: "row", center: "x", color: "success", children: (0, import_jsx_runtime91.jsx)(CheckCircledIcon, { width: iconSize["3xl"], height: iconSize["3xl"] }) }), (0, import_jsx_runtime91.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime91.jsx)(Text, { color: "primaryText", size: "lg", center: true, children: "Buy Complete" }), props.fiatStatus && props.fiatStatus.status !== "NOT_FOUND" && (0, import_jsx_runtime91.jsxs)(import_jsx_runtime91.Fragment, { children: [(0, import_jsx_runtime91.jsx)(Spacer, { y: "xxl" }), txDetails, (0, import_jsx_runtime91.jsx)(Spacer, { y: "sm" })] }), !props.isEmbed && (0, import_jsx_runtime91.jsx)(Button, { variant: "accent", fullWidth: true, onClick: props.onDone, children: props.transactionMode ? "Continue Transaction" : "Done" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatFlow.js
function FiatFlow(props) {
  const hasTwoSteps = isSwapRequiredPostOnramp(props.quote);
  const [screen, setScreen] = (0, import_react55.useState)(hasTwoSteps ? {
    id: "step-1"
  } : {
    id: "onramp-status"
  });
  const [popupWindow, setPopupWindow] = (0, import_react55.useState)(props.openedWindow);
  const onPostOnrampSuccess = (0, import_react55.useCallback)(() => {
    getBuyWithFiatStatus({
      intentId: props.quote.intentId,
      client: props.client
    }).then((status) => {
      props.onSuccess(status);
    });
  }, [props.onSuccess, props.quote.intentId, props.client]);
  if (screen.id === "step-1") {
    return (0, import_jsx_runtime92.jsx)(FiatSteps, { title: props.title, client: props.client, onBack: props.onBack, partialQuote: fiatQuoteToPartialQuote(props.quote), step: 1, onContinue: () => {
      const popup = openOnrampPopup(props.quote.onRampLink, props.theme);
      trackPayEvent({
        event: "open_onramp_popup",
        client: props.client,
        walletAddress: props.payer.account.address,
        walletType: props.payer.wallet.id
      });
      addPendingTx({
        type: "fiat",
        intentId: props.quote.intentId
      });
      setPopupWindow(popup);
      setScreen({ id: "onramp-status" });
    } });
  }
  if (screen.id === "onramp-status") {
    return (0, import_jsx_runtime92.jsx)(OnrampStatusScreen, { title: props.title, client: props.client, intentId: props.quote.intentId, onBack: props.onBack, hasTwoSteps, openedWindow: popupWindow, quote: props.quote, onDone: props.onDone, onShowSwapFlow: (_status) => {
      setScreen({ id: "postonramp-swap", data: _status });
    }, transactionMode: props.transactionMode, isEmbed: props.isEmbed, onSuccess: props.onSuccess });
  }
  if (screen.id === "postonramp-swap") {
    return (0, import_jsx_runtime92.jsx)(PostOnRampSwapFlow, { title: props.title, status: screen.data, quote: fiatQuoteToPartialQuote(props.quote), client: props.client, onBack: props.onBack, onDone: props.onDone, onSwapFlowStarted: () => {
    }, transactionMode: props.transactionMode, isEmbed: props.isEmbed, payer: props.payer, onSuccess: onPostOnrampSuccess });
  }
  return null;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useEnabledPaymentMethods.js
function useEnabledPaymentMethods(options) {
  const { payOptions, supportedDestinations, toChain, toToken } = options;
  function getEnabledPayMethodsForSelectedToken() {
    const chain = supportedDestinations.find((c) => c.chain.id === toChain.id);
    if (!chain) {
      return {
        fiat: false,
        swap: false
      };
    }
    const toTokenAddress = isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address;
    const tokenInfo = chain.tokens.find((t) => t.address.toLowerCase() === toTokenAddress.toLowerCase());
    if (!tokenInfo) {
      return {
        fiat: true,
        swap: true
      };
    }
    return {
      fiat: tokenInfo.buyWithFiatEnabled,
      swap: tokenInfo.buyWithCryptoEnabled
    };
  }
  const { fiat, swap } = getEnabledPayMethodsForSelectedToken();
  const buyWithFiatEnabled = payOptions.buyWithFiat !== false && fiat;
  const buyWithCryptoEnabled = payOptions.buyWithCrypto !== false && swap;
  return {
    buyWithFiatEnabled,
    buyWithCryptoEnabled
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useUISelectionStates.js
var import_react56 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon.js
var polygon = defineChain({
  id: 137,
  name: "Polygon",
  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
  blockExplorers: [
    {
      name: "PolygonScan",
      url: "https://polygonscan.com",
      apiUrl: "https://api.polygonscan.com/api"
    }
  ]
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useUISelectionStates.js
function useToTokenSelectionStates(options) {
  var _a, _b, _c, _d;
  const { payOptions, supportedDestinations } = options;
  const prefillBuy = payOptions == null ? void 0 : payOptions.prefillBuy;
  const activeChain = useActiveWalletChain();
  const initialTokenAmount = (prefillBuy == null ? void 0 : prefillBuy.amount) || "";
  const [tokenAmount, setTokenAmount] = (0, import_react56.useState)(initialTokenAmount);
  const deferredTokenAmount = useDebouncedValue(tokenAmount, 300);
  const [toChain, setToChain] = (0, import_react56.useState)(
    // use prefill chain if available
    (prefillBuy == null ? void 0 : prefillBuy.chain) || payOptions.mode === "transaction" && ((_a = payOptions.transaction) == null ? void 0 : _a.chain) || payOptions.mode === "direct_payment" && ((_b = payOptions.paymentInfo) == null ? void 0 : _b.chain) || // use active chain if its supported as destination
    ((_c = supportedDestinations.find((x) => x.chain.id === (activeChain == null ? void 0 : activeChain.id))) == null ? void 0 : _c.chain) || // default to the first chain in supportedDestinations, or polygon if nothing is found at all
    ((_d = supportedDestinations[0]) == null ? void 0 : _d.chain) || polygon
  );
  const [toToken, setToToken] = (0, import_react56.useState)((prefillBuy == null ? void 0 : prefillBuy.token) || payOptions.mode === "direct_payment" && payOptions.paymentInfo.token || NATIVE_TOKEN);
  return {
    toChain,
    setToChain,
    toToken,
    setToToken,
    tokenAmount,
    setTokenAmount,
    deferredTokenAmount
  };
}
function useFromTokenSelectionStates(options) {
  var _a, _b, _c, _d, _e, _f;
  const { payOptions, supportedSources } = options;
  const firstSupportedSource = (supportedSources == null ? void 0 : supportedSources.length) ? supportedSources[0] : void 0;
  const [fromChain_, setFromChain] = (0, import_react56.useState)();
  const fromChainDevSpecified = payOptions.buyWithCrypto !== false && ((_b = (_a = payOptions.buyWithCrypto) == null ? void 0 : _a.prefillSource) == null ? void 0 : _b.chain) || payOptions.mode === "transaction" && ((_c = payOptions.transaction) == null ? void 0 : _c.chain) || payOptions.mode === "direct_payment" && ((_d = payOptions.paymentInfo) == null ? void 0 : _d.chain);
  const fromChainFromApi = (firstSupportedSource == null ? void 0 : firstSupportedSource.chain) ? firstSupportedSource.chain : void 0;
  const fromChain = fromChain_ || fromChainDevSpecified || fromChainFromApi || polygon;
  const [fromToken_, setFromToken] = (0, import_react56.useState)();
  const fromTokenDevSpecified = payOptions.buyWithCrypto !== false && ((_f = (_e = payOptions.buyWithCrypto) == null ? void 0 : _e.prefillSource) == null ? void 0 : _f.token) || payOptions.mode === "direct_payment" && payOptions.paymentInfo.token;
  const fromTokenFromApi = NATIVE_TOKEN;
  const fromToken = fromToken_ || fromTokenDevSpecified || fromTokenFromApi || NATIVE_TOKEN;
  return {
    fromChain,
    setFromChain,
    fromToken,
    setFromToken
  };
}
function useFiatCurrencySelectionStates(options) {
  var _a, _b;
  const { payOptions } = options;
  const devSpecifiedDefaultCurrency = payOptions.buyWithFiat !== false ? (_b = (_a = payOptions.buyWithFiat) == null ? void 0 : _a.prefillSource) == null ? void 0 : _b.currency : void 0;
  const defaultSelectedCurrencyShorthand = devSpecifiedDefaultCurrency || getDefaultCurrencyBasedOnLocation();
  const [selectedCurrency, setSelectedCurrency] = (0, import_react56.useState)(currencies.find((x) => x.shorthand === defaultSelectedCurrencyShorthand) || usdCurrency);
  return {
    selectedCurrency,
    setSelectedCurrency
  };
}
function getDefaultCurrencyBasedOnLocation() {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
    if (timeZone.includes("london")) {
      return "GBP";
    }
    if (timeZone.includes("europe")) {
      return "EUR";
    }
    if (timeZone.includes("japan")) {
      return "JPY";
    }
    if (timeZone.includes("canada")) {
      return "CAD";
    }
    return "USD";
  } catch {
    return "USD";
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/BuyTokenInput.js
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/utils.js
function getBuyTokenAmountFontSize(value) {
  return value.length > 10 ? "26px" : value.length > 6 ? "34px" : "50px";
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/BuyTokenInput.js
function BuyTokenInput(props) {
  const { name } = useChainName(props.chain);
  const getWidth = () => {
    let chars = props.value.replace(".", "").length;
    const hasDot = props.value.includes(".");
    if (hasDot) {
      chars += 0.3;
    }
    return `calc(${`${Math.max(1, chars)}ch`} + 6px)`;
  };
  return (0, import_jsx_runtime93.jsxs)(Container, { children: [(0, import_jsx_runtime93.jsx)("div", { onClick: (e) => {
    var _a;
    (_a = e.currentTarget.querySelector("input")) == null ? void 0 : _a.focus();
  }, children: (0, import_jsx_runtime93.jsxs)(Container, { flex: "row", center: "both", gap: "xs", style: {
    flexWrap: "nowrap"
  }, children: [(0, import_jsx_runtime93.jsx)(Input, { variant: "outline", pattern: "^[0-9]*[.,]?[0-9]*$", inputMode: "decimal", tabIndex: -1, placeholder: "0", type: "text", "data-placeholder": props.value === "", value: props.value || "0", disabled: props.freezeAmount, onClick: (e) => {
    if (props.value === "") {
      e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
    }
  }, onChange: (e) => {
    let value = e.target.value;
    if (value.startsWith(".")) {
      value = `0${value}`;
    }
    const numValue = Number(value);
    if (Number.isNaN(numValue)) {
      return;
    }
    if (value.startsWith("0") && !value.startsWith("0.")) {
      props.onChange(value.slice(1));
    } else {
      props.onChange(value);
    }
  }, style: {
    border: "none",
    fontSize: getBuyTokenAmountFontSize(props.value),
    boxShadow: "none",
    borderRadius: "0",
    padding: "0",
    paddingBlock: "2px",
    fontWeight: 600,
    textAlign: "right",
    width: getWidth(),
    maxWidth: "calc(100% - 100px)"
  } }), (0, import_jsx_runtime93.jsx)(TokenSymbol, { token: props.token, chain: props.chain, size: "lg", color: "secondaryText" })] }) }), !props.hideTokenSelector && (0, import_jsx_runtime93.jsxs)(import_jsx_runtime93.Fragment, { children: [(0, import_jsx_runtime93.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime93.jsx)(Container, { flex: "row", center: "x", children: (0, import_jsx_runtime93.jsxs)(TokenButton, { variant: "secondary", fullWidth: true, style: {
    fontSize: fontSize.sm
  }, gap: "xxs", onClick: props.onSelectToken, disabled: props.freezeChainAndToken, children: [(0, import_jsx_runtime93.jsxs)(Container, { flex: "row", center: "y", gap: "sm", children: [(0, import_jsx_runtime93.jsx)(TokenIcon, { token: props.token, chain: props.chain, size: "md", client: props.client }), (0, import_jsx_runtime93.jsxs)(Container, { flex: "column", style: {
    gap: "4px"
  }, children: [(0, import_jsx_runtime93.jsx)(TokenSymbol, { token: props.token, chain: props.chain, size: "sm" }), name ? (0, import_jsx_runtime93.jsx)(Text, { size: "xs", color: "secondaryText", children: name }) : (0, import_jsx_runtime93.jsx)(Skeleton, { width: "90px", height: fontSize.xs })] })] }), (0, import_jsx_runtime93.jsx)(ChevronDownIcon, { width: iconSize.sm, height: iconSize.sm, style: {
    marginLeft: "auto"
  } })] }) })] })] });
}
var TokenButton = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    justifyContent: "flex-start",
    transition: "background 0.3s",
    padding: spacing.sm
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/Fees.js
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
function SwapFees(props) {
  return (0, import_jsx_runtime94.jsx)(Container, { flex: "column", gap: "xs", style: {
    alignItems: "flex-start"
  }, children: props.quote.processingFees.map((fee) => {
    const feeAmount = formatNumber(Number(fee.amount), 6);
    return (0, import_jsx_runtime94.jsxs)(Container, { flex: "row", gap: "xxs", children: [(0, import_jsx_runtime94.jsxs)(Text, { color: "primaryText", size: "sm", children: [feeAmount === 0 ? "~" : "", feeAmount, " ", fee.token.symbol] }), (0, import_jsx_runtime94.jsxs)(Text, { color: "secondaryText", size: "sm", children: ["($", (fee.amountUSDCents / 100).toFixed(2), ")"] })] }, `${fee.token.chainId}_${fee.token.tokenAddress}_${feeAmount}`);
  }) });
}
function FiatFees(props) {
  return (0, import_jsx_runtime94.jsxs)(Container, { flex: "column", gap: "xs", children: [(0, import_jsx_runtime94.jsxs)("div", { style: {
    display: "flex",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime94.jsx)(Text, { inline: true, color: "secondaryText", children: "Amount" }), (0, import_jsx_runtime94.jsxs)(Text, { color: "primaryText", inline: true, children: [formatNumber(Number(props.quote.fromCurrency.amount), 2), " ", props.quote.fromCurrency.currencySymbol] })] }), props.quote.processingFees.map((fee, i) => {
    const feeAmount = formatNumber(Number(fee.amount), 6);
    return (0, import_jsx_runtime94.jsxs)("div", { style: {
      display: "flex",
      justifyContent: "space-between"
    }, children: [(0, import_jsx_runtime94.jsx)(Text, { inline: true, color: "secondaryText", children: fee.feeType === "NETWORK" ? "Network Fee" : "Processing Fee" }), (0, import_jsx_runtime94.jsxs)(Text, { color: "primaryText", inline: true, children: [feeAmount === 0 ? "~" : "", " ", feeAmount, " ", fee.currencySymbol] })] }, i);
  }), (0, import_jsx_runtime94.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime94.jsx)(Line, {}), (0, import_jsx_runtime94.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime94.jsxs)("div", { style: {
    display: "flex",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime94.jsx)(Text, { inline: true, color: "secondaryText", children: "Total" }), (0, import_jsx_runtime94.jsxs)(Text, { color: "primaryText", inline: true, children: [formatNumber(Number(props.quote.fromCurrencyWithFees.amount), 6), " ", props.quote.fromCurrencyWithFees.currencySymbol] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/PayWithCrypto.js
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
function PayWithCryptoQuoteInfo(props) {
  const theme = useCustomTheme();
  const { name } = useChainName(props.chain);
  const balanceQuery = useWalletBalance({
    address: props.payerAccount.address,
    chain: props.chain,
    tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address,
    client: props.client
  });
  return (0, import_jsx_runtime95.jsxs)(Container, { bg: "tertiaryBg", style: {
    borderRadius: radius.lg,
    border: `1px solid ${theme.colors.borderColor}`,
    ...props.swapRequired ? {
      borderBottom: "none",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    } : {}
  }, children: [(0, import_jsx_runtime95.jsxs)(Container, { flex: "row", gap: "sm", style: {
    justifyContent: "space-between",
    padding: spacing.sm,
    borderBottom: `1px solid ${theme.colors.borderColor}`
  }, children: [(0, import_jsx_runtime95.jsx)(WalletRow, { client: props.client, address: props.payerAccount.address }), balanceQuery.data ? (0, import_jsx_runtime95.jsxs)(Container, { flex: "row", gap: "3xs", center: "y", children: [(0, import_jsx_runtime95.jsx)(Text, { size: "xs", color: "secondaryText", weight: 500, children: formatTokenBalance(balanceQuery.data, false) }), (0, import_jsx_runtime95.jsx)(TokenSymbol, { token: props.token, chain: props.chain, size: "xs", color: "secondaryText" })] }) : (0, import_jsx_runtime95.jsx)(Skeleton, { width: "70px", height: fontSize.xs })] }), (0, import_jsx_runtime95.jsxs)(Container, { flex: "row", gap: "sm", style: {
    paddingInline: spacing.sm,
    paddingBlock: spacing.sm,
    minWidth: "50%",
    justifyContent: "flex-start",
    minHeight: "64px"
  }, children: [(0, import_jsx_runtime95.jsx)(PayTokenIcon, { token: props.token, chain: props.chain, size: "md", client: props.client }), (0, import_jsx_runtime95.jsxs)(Container, { flex: "column", gap: "3xs", children: [props.isLoading ? (0, import_jsx_runtime95.jsx)(Skeleton, { width: "120px", height: fontSize.md, color: "borderColor" }) : (0, import_jsx_runtime95.jsxs)(Container, { flex: "row", gap: "xxs", center: "y", color: "primaryText", children: [(0, import_jsx_runtime95.jsx)(Text, { size: "md", color: props.value ? "primaryText" : "secondaryText", children: formatNumber(Number(props.value), 6) || "" }), (0, import_jsx_runtime95.jsx)(TokenSymbol, { token: props.token, chain: props.chain, size: "sm" })] }), name ? (0, import_jsx_runtime95.jsx)(Text, { size: "xs", children: name }) : (0, import_jsx_runtime95.jsx)(Skeleton, { width: "90px", height: fontSize.xs })] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/PaymentSelectionScreen.js
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
function PaymentSelectionScreen(props) {
  var _a, _b;
  const theme = useCustomTheme();
  const connectedWallets = useConnectedWallets();
  const hideConnectButton = !props.showAllWallets && ((_a = props.wallets) == null ? void 0 : _a.every((w) => connectedWallets.includes(w)));
  const chainInfo = useChainMetadata(props.toChain);
  const activeAccount = useActiveAccount();
  const walletsAndBalances = useQuery({
    queryKey: [
      "wallets-and-balances",
      connectedWallets.map((w) => {
        var _a2;
        return (_a2 = w.getAccount()) == null ? void 0 : _a2.address;
      }),
      props.sourceSupportedTokens,
      props.toChain.id,
      props.toToken,
      props.tokenAmount,
      props.mode,
      activeAccount == null ? void 0 : activeAccount.address
    ],
    queryFn: async () => {
      const walletBalanceMap = /* @__PURE__ */ new Map();
      const balancePromises = connectedWallets.flatMap((wallet) => {
        var _a2, _b2, _c, _d, _e;
        const account = wallet.getAccount();
        if (!account)
          return [];
        walletBalanceMap.set(wallet, []);
        const toToken = isNativeToken(props.toToken) ? {
          address: NATIVE_TOKEN_ADDRESS,
          name: ((_a2 = chainInfo.data) == null ? void 0 : _a2.nativeCurrency.name) || "",
          symbol: ((_b2 = chainInfo.data) == null ? void 0 : _b2.nativeCurrency.symbol) || "",
          icon: (_d = (_c = chainInfo.data) == null ? void 0 : _c.icon) == null ? void 0 : _d.url
        } : props.toToken;
        const tokens = {
          ...props.sourceSupportedTokens,
          [props.toChain.id]: [
            toToken,
            ...((_e = props.sourceSupportedTokens) == null ? void 0 : _e[props.toChain.id]) || []
          ]
        };
        return Object.entries(tokens).flatMap(([chainId, tokens2]) => {
          return tokens2.map(async (token) => {
            try {
              const chain = getCachedChain(Number(chainId));
              const balance = await getWalletBalance({
                address: account.address,
                chain,
                tokenAddress: isNativeToken(token) ? void 0 : token.address,
                client: props.client
              });
              const shouldInclude = token.address === toToken.address && chain.id === props.toChain.id ? props.mode === "fund_wallet" && account.address === (activeAccount == null ? void 0 : activeAccount.address) ? false : Number(balance.displayValue) > Number(props.tokenAmount) : balance.value > 0n;
              if (shouldInclude) {
                const existingBalances = walletBalanceMap.get(wallet) || [];
                existingBalances.push({ balance, chain, token });
                existingBalances.sort((a, b) => {
                  if (a.chain.id === props.toChain.id && a.token.address === toToken.address)
                    return -1;
                  if (b.chain.id === props.toChain.id && b.token.address === toToken.address)
                    return 1;
                  if (a.chain.id === props.toChain.id)
                    return -1;
                  if (b.chain.id === props.toChain.id)
                    return 1;
                  return a.chain.id > b.chain.id ? 1 : -1;
                });
              }
            } catch (error) {
              console.error(`Failed to fetch balance for wallet ${wallet.id} on chain ${chainId} for token ${token.symbol}:`, error);
            }
          });
        });
      });
      await Promise.all(balancePromises);
      return walletBalanceMap;
    },
    enabled: !!props.sourceSupportedTokens && !!chainInfo.data
  });
  if (walletsAndBalances.isLoading || !walletsAndBalances.data) {
    return (0, import_jsx_runtime96.jsx)(LoadingScreen, {});
  }
  return (0, import_jsx_runtime96.jsxs)(Container, { children: [(0, import_jsx_runtime96.jsxs)(Container, { flex: "column", gap: "xs", children: [Array.from(((_b = walletsAndBalances.data) == null ? void 0 : _b.entries()) || []).filter(([w]) => {
    var _a2;
    return !((_a2 = props.hiddenWallets) == null ? void 0 : _a2.includes(w.id));
  }).map(([w, balances]) => {
    var _a2;
    const address = (_a2 = w.getAccount()) == null ? void 0 : _a2.address;
    if (!address)
      return null;
    return (0, import_jsx_runtime96.jsx)(WalletRowWithBalances, { wallet: w, balances, client: props.client, address, onClick: props.onSelect }, w.id);
  }), !hideConnectButton && (0, import_jsx_runtime96.jsx)(Button, { variant: "secondary", fullWidth: true, onClick: props.onConnect, gap: "xs", bg: "tertiaryBg", style: {
    borderRadius: radius.lg,
    border: `1px solid ${theme.colors.borderColor}`,
    padding: spacing.sm
  }, children: (0, import_jsx_runtime96.jsxs)(Container, { flex: "row", gap: "sm", center: "y", expand: true, color: "secondaryIconColor", children: [(0, import_jsx_runtime96.jsx)(OutlineWalletIcon, { size: iconSize.md }), (0, import_jsx_runtime96.jsx)(Text, { size: "sm", color: "primaryText", children: "Pay with another wallet" })] }) }), props.payWithFiatEnabled && (0, import_jsx_runtime96.jsx)(Button, { variant: "secondary", fullWidth: true, gap: "xs", bg: "tertiaryBg", onClick: props.onSelectFiat, style: {
    borderRadius: radius.lg,
    border: `1px solid ${theme.colors.borderColor}`,
    padding: spacing.sm
  }, children: (0, import_jsx_runtime96.jsxs)(Container, { flex: "row", gap: "sm", center: "y", expand: true, color: "secondaryIconColor", children: [(0, import_jsx_runtime96.jsx)(IdCardIcon, { style: {
    width: iconSize.md,
    height: iconSize.md
  } }), (0, import_jsx_runtime96.jsx)(Text, { size: "sm", color: "primaryText", children: "Pay with credit card" })] }) })] }), (0, import_jsx_runtime96.jsx)(Spacer, { y: "sm" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferFlow.js
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var import_react58 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferConfirmationScreen.js
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var import_react57 = __toESM(require_react(), 1);
function TransferConfirmationScreen(props) {
  const { title, onBack, receiverAddress, client, payer, onDone, chain, token, tokenAmount, transactionMode, setTransactionHash, payOptions } = props;
  const [step, setStep] = (0, import_react57.useState)("transfer");
  const [status, setStatus] = (0, import_react57.useState)({ id: "idle" });
  const { symbol } = useChainSymbol(chain);
  return (0, import_jsx_runtime97.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime97.jsx)(ModalHeader, { title, onBack }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "xl" }), transactionMode && (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(StepBar, { steps: 2, currentStep: step === "transfer" ? 1 : 2 }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime97.jsx)(Text, { size: "sm", children: step === "transfer" ? "Step 1 of 2 - Transfer funds" : "Step 2 of 2 - Finalize transaction" }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "xl" })] }), (0, import_jsx_runtime97.jsxs)(Container, { flex: "row", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime97.jsx)(Text, { size: "sm", children: "From" }), (0, import_jsx_runtime97.jsx)(WalletRow, { address: payer.account.address, client })] }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime97.jsx)(Line, {}), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime97.jsxs)(Container, { flex: "row", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime97.jsx)(Text, { size: "sm", children: "To" }), (0, import_jsx_runtime97.jsx)(WalletRow, { address: receiverAddress, client })] }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime97.jsx)(Line, {}), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime97.jsx)(TokenInfoRow, { chainId: chain.id, client, label: "Amount", tokenAmount, tokenSymbol: isNativeToken(token) ? symbol || "" : token.symbol, tokenAddress: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "lg" }), transactionMode && (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime97.jsxs)(Container, { gap: "sm", flex: "row", style: {
    justifyContent: "space-between"
  }, center: "y", color: "accentText", children: [(0, import_jsx_runtime97.jsx)(Step, { isDone: step === "execute", isActive: step === "transfer", label: step === "transfer" ? "Transfer" : "Done" }), (0, import_jsx_runtime97.jsx)(ConnectorLine, {}), (0, import_jsx_runtime97.jsx)(Step, { isDone: false, label: "Finalize", isActive: step === "execute" })] }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "lg" })] }), status.id === "error" && (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Container, { flex: "row", gap: "xs", center: "both", color: "danger", children: (0, import_jsx_runtime97.jsx)(Text, { color: "danger", size: "sm", style: { textAlign: "center" }, children: step === "transfer" ? `${status.error || "Failed to Transfer"}` : "Failed to Execute" }) }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" })] }), !transactionMode && step === "execute" && status.id === "done" && (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsxs)(Container, { flex: "row", gap: "xs", center: "both", color: "success", children: [(0, import_jsx_runtime97.jsx)(CheckCircledIcon, { width: iconSize.sm, height: iconSize.sm }), (0, import_jsx_runtime97.jsx)(Text, { color: "success", size: "sm", children: "Payment completed" })] }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" })] }), payer.chain.id !== chain.id ? (0, import_jsx_runtime97.jsx)(SwitchNetworkButton, { fullWidth: true, variant: "accent", switchChain: async () => {
    await props.payer.wallet.switchChain(chain);
  } }) : (0, import_jsx_runtime97.jsxs)(Button, { variant: "accent", fullWidth: true, disabled: status.id === "pending", onClick: async () => {
    var _a;
    if (step === "execute") {
      onDone();
      return;
    }
    try {
      setStatus({ id: "pending" });
      if (transactionMode) {
        const transaction = isNativeToken(token) ? prepareTransaction({
          client,
          chain,
          to: receiverAddress,
          value: toWei(tokenAmount)
        }) : transfer2({
          contract: getContract({
            address: token.address,
            chain,
            client
          }),
          to: receiverAddress,
          amount: tokenAmount
        });
        await sendAndConfirmTransaction({
          account: props.payer.account,
          transaction
        });
        setStep("execute");
        setStatus({ id: "idle" });
      } else {
        const transferResponse = await getBuyWithCryptoTransfer({
          client,
          fromAddress: payer.account.address,
          toAddress: receiverAddress,
          chainId: chain.id,
          tokenAddress: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address,
          amount: tokenAmount,
          purchaseData: payOptions == null ? void 0 : payOptions.purchaseData
        });
        if (transferResponse.approval) {
          setStep("approve");
          await sendAndConfirmTransaction({
            account: props.payer.account,
            transaction: transferResponse.approval
          });
        }
        setStep("transfer");
        const transaction = transferResponse.transactionRequest;
        const tx = await sendTransaction({
          account: props.payer.account,
          transaction
        });
        setTransactionHash(tx.transactionHash);
        setStatus({ id: "idle" });
      }
    } catch (e) {
      console.error(e);
      setStatus({
        id: "error",
        error: "error" in e ? (_a = e.error) == null ? void 0 : _a.message : e == null ? void 0 : e.message
      });
    }
  }, gap: "xs", children: [step === "execute" && (status.id === "done" ? "Done" : "Continue"), step === "transfer" && (status.id === "pending" ? "Confirming" : "Confirm"), step === "approve" && (status.id === "pending" ? "Approving" : "Approve"), status.id === "pending" && (0, import_jsx_runtime97.jsx)(Spinner, { size: "sm", color: "accentButtonText" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferFlow.js
function TransferFlow(props) {
  const [transferTxHash, setTransferTxHash] = (0, import_react58.useState)();
  if (transferTxHash) {
    return (0, import_jsx_runtime98.jsx)(SwapStatusScreen, { title: props.title, onBack: props.onBack, onTryAgain: props.onTryAgain, swapTxHash: transferTxHash, client: props.client, onDone: props.onDone, transactionMode: false, isEmbed: props.isEmbed, quote: void 0, onSuccess: props.onSuccess });
  }
  return (0, import_jsx_runtime98.jsx)(TransferConfirmationScreen, { ...props, setTransactionHash: setTransferTxHash });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/usePayerSetup.js
var import_react59 = __toESM(require_react(), 1);
function usePayerSetup() {
  const wallet = useActiveWallet();
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const [_payer, setPayer] = (0, import_react59.useState)();
  (0, import_react59.useEffect)(() => {
    const wallet2 = _payer == null ? void 0 : _payer.wallet;
    function update() {
      if (!wallet2) {
        setPayer(void 0);
        return;
      }
      const account2 = wallet2.getAccount();
      const chain = wallet2.getChain();
      if (account2 && chain) {
        setPayer({
          account: account2,
          chain,
          wallet: wallet2
        });
      } else {
        setPayer(void 0);
      }
    }
    if (wallet2) {
      const unsubChainChanged = wallet2.subscribe("chainChanged", update);
      const unsubAccountChanged = wallet2.subscribe("accountChanged", update);
      return () => {
        unsubChainChanged();
        unsubAccountChanged();
      };
    }
    return void 0;
  }, [_payer]);
  const initialPayer = account && activeChain && wallet ? { account, chain: activeChain, wallet } : void 0;
  const payer = _payer || initialPayer;
  return {
    payer,
    setPayer
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/BuyScreen.js
function BuyScreen2(props) {
  const isTestMode = props.payOptions.buyWithCrypto ? props.payOptions.buyWithCrypto.testMode : void 0;
  const supportedDestinationsQuery = useBuySupportedDestinations(props.client, isTestMode);
  if (!supportedDestinationsQuery.data) {
    return (0, import_jsx_runtime99.jsx)(LoadingScreen, {});
  }
  return (0, import_jsx_runtime99.jsx)(BuyScreenContent, { ...props, supportedDestinations: supportedDestinationsQuery.data });
}
function BuyScreenContent(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  const { client, supportedDestinations, connectLocale, payOptions } = props;
  const activeAccount = useActiveAccount();
  const { payer, setPayer } = usePayerSetup();
  const [screen, setScreen] = (0, import_react60.useState)({
    id: "main"
  });
  const { tokenAmount, setTokenAmount, toChain, setToChain, deferredTokenAmount, toToken, setToToken } = useToTokenSelectionStates({
    payOptions,
    supportedDestinations
  });
  const [hasEditedAmount, setHasEditedAmount] = (0, import_react60.useState)(false);
  const onDone = (0, import_react60.useCallback)(() => {
    setScreen({ id: "main" });
    props.onDone();
  }, [props.onDone]);
  const supportedSourcesQuery = useBuySupportedSources({
    client: props.client,
    destinationChainId: toChain.id,
    destinationTokenAddress: isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address
  });
  const destinationSupportedTokens = (0, import_react60.useMemo)(() => {
    return createSupportedTokens(supportedDestinations, payOptions, props.supportedTokens);
  }, [props.supportedTokens, supportedDestinations, payOptions]);
  const sourceSupportedTokens = (0, import_react60.useMemo)(() => {
    if (!supportedSourcesQuery.data) {
      return void 0;
    }
    const supportedSources = supportedSourcesQuery.data;
    return createSupportedTokens(supportedSources, payOptions, props.supportedTokens);
  }, [props.supportedTokens, supportedSourcesQuery.data, payOptions]);
  const { fromChain, setFromChain, fromToken, setFromToken } = useFromTokenSelectionStates({
    payOptions,
    supportedSources: supportedSourcesQuery.data || []
  });
  const { selectedCurrency, setSelectedCurrency } = useFiatCurrencySelectionStates({
    payOptions
  });
  const enabledPaymentMethods = useEnabledPaymentMethods({
    payOptions: props.payOptions,
    supportedDestinations: props.supportedDestinations,
    toChain,
    toToken
  });
  const payDisabled = enabledPaymentMethods.buyWithCryptoEnabled === false && enabledPaymentMethods.buyWithFiatEnabled === false;
  const queryClient = useQueryClient();
  const onSwapSuccess = (0, import_react60.useCallback)((_status) => {
    var _a2, _b2;
    (_b2 = (_a2 = props.payOptions).onPurchaseSuccess) == null ? void 0 : _b2.call(_a2, {
      type: "crypto",
      status: _status
    });
    invalidateWalletBalance(queryClient);
  }, [props.payOptions.onPurchaseSuccess, queryClient]);
  const onFiatSuccess = (0, import_react60.useCallback)((_status) => {
    var _a2, _b2;
    (_b2 = (_a2 = props.payOptions).onPurchaseSuccess) == null ? void 0 : _b2.call(_a2, {
      type: "fiat",
      status: _status
    });
    invalidateWalletBalance(queryClient);
  }, [props.payOptions.onPurchaseSuccess, queryClient]);
  if (screen.id === "connect-payer-wallet") {
    return (0, import_jsx_runtime99.jsx)(WalletSwitcherConnectionScreen, { accountAbstraction: (_a = props.connectOptions) == null ? void 0 : _a.accountAbstraction, appMetadata: (_b = props.connectOptions) == null ? void 0 : _b.appMetadata, chain: (_c = props.connectOptions) == null ? void 0 : _c.chain, chains: (_d = props.connectOptions) == null ? void 0 : _d.chains, client: props.client, connectLocale: props.connectLocale, isEmbed: props.isEmbed, onBack: () => setScreen(screen.backScreen), onSelect: (w) => {
      const account = w.getAccount();
      const chain = w.getChain();
      if (w && account && chain) {
        setPayer({
          account,
          chain,
          wallet: w
        });
      }
    }, hiddenWallets: props.hiddenWallets, recommendedWallets: (_e = props.connectOptions) == null ? void 0 : _e.recommendedWallets, showAllWallets: ((_f = props.connectOptions) == null ? void 0 : _f.showAllWallets) === void 0 ? true : (_g = props.connectOptions) == null ? void 0 : _g.showAllWallets, walletConnect: (_h = props.connectOptions) == null ? void 0 : _h.walletConnect, wallets: (_j = (_i = props.connectOptions) == null ? void 0 : _i.wallets) == null ? void 0 : _j.filter((w) => w.id !== "inApp") });
  }
  if (screen.id === "swap-flow" && payer) {
    return (0, import_jsx_runtime99.jsx)(SwapFlow, { title: props.title, transactionMode: payOptions.mode === "transaction", isEmbed: props.isEmbed, client, onBack: () => {
      setScreen({
        id: "buy-with-crypto"
      });
    }, buyWithCryptoQuote: screen.quote, payer, isFiatFlow: false, onDone, onTryAgain: () => {
      setScreen({
        id: "buy-with-crypto"
      });
    }, onSuccess: onSwapSuccess });
  }
  if (screen.id === "fiat-flow" && payer) {
    return (0, import_jsx_runtime99.jsx)(FiatFlow, { title: props.title, transactionMode: payOptions.mode === "transaction", quote: screen.quote, onBack: () => {
      setScreen({
        id: "buy-with-fiat"
      });
    }, client, testMode: props.payOptions.buyWithFiat !== false && ((_k = props.payOptions.buyWithFiat) == null ? void 0 : _k.testMode) === true, theme: typeof props.theme === "string" ? props.theme : props.theme.type, openedWindow: screen.openedWindow, onDone, isEmbed: props.isEmbed, payer, onSuccess: onFiatSuccess });
  }
  if (screen.id === "transfer-flow" && payer && activeAccount) {
    const goBack = () => setScreen({ id: "buy-with-crypto" });
    const defaultRecipientAddress = (_m = (_l = props.payOptions) == null ? void 0 : _l.paymentInfo) == null ? void 0 : _m.sellerAddress;
    const receiverAddress = defaultRecipientAddress || activeAccount.address;
    return (0, import_jsx_runtime99.jsx)(TransferFlow, { title: props.title, onBack: goBack, payer, client: props.client, chain: toChain, token: toToken, tokenAmount, receiverAddress, transactionMode: props.payOptions.mode === "transaction", payOptions, isEmbed: props.isEmbed, onDone, onTryAgain: () => {
      setScreen({
        id: "buy-with-crypto"
      });
    }, onSuccess: onSwapSuccess });
  }
  if (screen.id === "select-currency") {
    const goBack = () => setScreen(screen.backScreen);
    return (0, import_jsx_runtime99.jsx)(CurrencySelection, { onSelect: (currency) => {
      goBack();
      setSelectedCurrency(currency);
    }, onBack: goBack });
  }
  if (screen.id === "select-to-token") {
    const chains = supportedDestinations.map((x) => x.chain);
    const goBack = () => setScreen(screen.backScreen);
    const allowEdits = (_n = payOptions == null ? void 0 : payOptions.prefillBuy) == null ? void 0 : _n.allowEdits;
    if ((allowEdits == null ? void 0 : allowEdits.token) === false) {
      return (0, import_jsx_runtime99.jsx)(ChainSelectionScreen, { chains, client: props.client, connectLocale: props.connectLocale, setChain: setToChain, goBack });
    }
    return (0, import_jsx_runtime99.jsx)(TokenSelector, { onBack: goBack, tokenList: (((toChain == null ? void 0 : toChain.id) ? destinationSupportedTokens[toChain.id] : void 0) || []).filter((x) => x.address !== NATIVE_TOKEN_ADDRESS), onTokenSelect: (tokenInfo) => {
      setToToken(tokenInfo);
      goBack();
    }, chain: toChain, chainSelection: (
      // hide chain selection if it's disabled
      (allowEdits == null ? void 0 : allowEdits.chain) !== false ? {
        chains,
        select: (c) => {
          setToChain(c);
        }
      } : void 0
    ), connectLocale, client, modalTitle: props.title });
  }
  if (screen.id === "select-from-token" && supportedSourcesQuery.data && sourceSupportedTokens) {
    const chains = supportedSourcesQuery.data.map((x) => x.chain);
    const goBack = () => setScreen(screen.backScreen);
    if (payOptions.buyWithCrypto !== false && ((_q = (_p = (_o = payOptions.buyWithCrypto) == null ? void 0 : _o.prefillSource) == null ? void 0 : _p.allowEdits) == null ? void 0 : _q.token) === false) {
      return (0, import_jsx_runtime99.jsx)(ChainSelectionScreen, { chains, client: props.client, connectLocale: props.connectLocale, setChain: setFromChain, goBack });
    }
    return (0, import_jsx_runtime99.jsx)(TokenSelector, { onBack: goBack, tokenList: (((fromChain == null ? void 0 : fromChain.id) ? sourceSupportedTokens[fromChain.id] : void 0) || []).filter((x) => x.address !== NATIVE_TOKEN_ADDRESS), onTokenSelect: (tokenInfo) => {
      setFromToken(tokenInfo);
      goBack();
    }, chain: fromChain, chainSelection: (
      // hide chain selection if it's disabled
      payOptions.buyWithCrypto !== false && ((_t = (_s = (_r = payOptions.buyWithCrypto) == null ? void 0 : _r.prefillSource) == null ? void 0 : _s.allowEdits) == null ? void 0 : _t.chain) !== false ? {
        chains: supportedSourcesQuery.data.map((x) => x.chain),
        select: (c) => setFromChain(c)
      } : void 0
    ), connectLocale, client, modalTitle: "Pay with" });
  }
  return (0, import_jsx_runtime99.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime99.jsxs)("div", { children: [screen.id === "main" && (0, import_jsx_runtime99.jsx)(MainScreen, { title: props.title, payerAccount: payer == null ? void 0 : payer.account, client, onSelectBuyToken: () => setScreen({ id: "select-to-token", backScreen: screen }), payOptions, setTokenAmount, setToChain, setToToken, setFromChain, setFromToken, toChain, toToken, tokenAmount, connectOptions: props.connectOptions, setScreen, supportedDestinations, onBack: props.onBack, theme: props.theme, hasEditedAmount, setHasEditedAmount, enabledPaymentMethods }), (screen.id === "select-payment-method" || screen.id === "buy-with-crypto" || screen.id === "buy-with-fiat") && payer && (0, import_jsx_runtime99.jsxs)(TokenSelectedLayout, { title: props.title, selectedChain: toChain, selectedToken: toToken, tokenAmount, client, onBack: () => {
    if (enabledPaymentMethods.buyWithCryptoEnabled && screen.id === "buy-with-fiat") {
      setScreen({ id: "select-payment-method" });
    } else if (screen.id === "buy-with-crypto") {
      setScreen({ id: "select-payment-method" });
    } else {
      setScreen({ id: "main" });
    }
  }, children: [screen.id === "select-payment-method" && (0, import_jsx_runtime99.jsx)(PaymentSelectionScreen, { client, mode: payOptions.mode, sourceSupportedTokens, hiddenWallets: props.hiddenWallets, payWithFiatEnabled: props.payOptions.buyWithFiat !== false, toChain, toToken, tokenAmount, onSelect: (w, token, chain) => {
    const account = w.getAccount();
    if (account) {
      setPayer({
        account,
        chain,
        wallet: w
      });
      setFromToken(token);
      setFromChain(chain);
      setScreen({ id: "buy-with-crypto" });
    }
  }, onSelectFiat: () => {
    setScreen({ id: "buy-with-fiat" });
  }, showAllWallets: !!((_u = props.connectOptions) == null ? void 0 : _u.showAllWallets), wallets: (_v = props.connectOptions) == null ? void 0 : _v.wallets, onBack: () => {
  }, onConnect: () => {
    setScreen({
      id: "connect-payer-wallet",
      backScreen: {
        id: "select-payment-method"
      }
    });
  } }), screen.id === "buy-with-crypto" && activeAccount && (0, import_jsx_runtime99.jsx)(SwapScreenContent, {
    setScreen,
    tokenAmount: deferredTokenAmount,
    toChain,
    toToken,
    fromChain,
    fromToken,
    showFromTokenSelector: () => {
      setScreen({
        id: "select-from-token",
        backScreen: screen
      });
    },
    payer,
    client,
    isEmbed: props.isEmbed,
    onDone,
    payOptions,
    connectLocale,
    connectOptions: props.connectOptions,
    setPayer,
    // pass it even though we are passing payer, because payer might be different
    activeAccount,
    setTokenAmount,
    setHasEditedAmount,
    disableTokenSelection: payDisabled === true || payOptions.buyWithCrypto !== false && ((_y = (_x = (_w = payOptions.buyWithCrypto) == null ? void 0 : _w.prefillSource) == null ? void 0 : _x.allowEdits) == null ? void 0 : _y.chain) === false && ((_B = (_A = (_z = payOptions.buyWithCrypto) == null ? void 0 : _z.prefillSource) == null ? void 0 : _A.allowEdits) == null ? void 0 : _B.token) === false
  }), screen.id === "buy-with-fiat" && (0, import_jsx_runtime99.jsx)(FiatScreenContent, { setScreen, tokenAmount: deferredTokenAmount, toChain, toToken, selectedCurrency, client, isEmbed: props.isEmbed, onDone, payOptions, theme: props.theme, showCurrencySelector: () => {
    setScreen({
      id: "select-currency",
      backScreen: screen
    });
  }, payer, setTokenAmount, setHasEditedAmount })] })] }) });
}
function SelectedTokenInfo(props) {
  return (0, import_jsx_runtime99.jsx)("div", { children: (0, import_jsx_runtime99.jsxs)(Container, { flex: "row", gap: "sm", center: "y", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime99.jsxs)(Container, { flex: "row", gap: "xs", center: "y", children: [(0, import_jsx_runtime99.jsx)(Text, { color: "primaryText", "data-testid": "tokenAmount", size: "xl", children: formatNumber(Number(props.tokenAmount), 6) }), (0, import_jsx_runtime99.jsxs)(Container, { flex: "row", gap: "xxs", center: "y", children: [(0, import_jsx_runtime99.jsx)(TokenSymbol, { token: props.selectedToken, chain: props.selectedChain, size: "md", color: "secondaryText" }), (0, import_jsx_runtime99.jsx)(PayTokenIcon, { chain: props.selectedChain, client: props.client, size: "sm", token: props.selectedToken })] })] }), (0, import_jsx_runtime99.jsx)(ChainName, { chain: props.selectedChain, client: props.client, size: "sm", short: true })] }) });
}
function MainScreen(props) {
  var _a, _b, _c, _d, _e, _f;
  const { setTokenAmount, setToChain, setToToken, setFromChain, setFromToken, payerAccount, client, tokenAmount, payOptions, toToken, toChain, supportedDestinations, enabledPaymentMethods } = props;
  const { buyWithCryptoEnabled, buyWithFiatEnabled } = enabledPaymentMethods;
  const disableContinue = !tokenAmount;
  switch (payOptions.mode) {
    case "transaction": {
      return (0, import_jsx_runtime99.jsx)(TransactionModeScreen, { supportedDestinations, payUiOptions: payOptions, payerAccount, connectOptions: props.connectOptions, client, onContinue: (tokenAmount2, toChain2, toToken2) => {
        setTokenAmount(tokenAmount2);
        setToChain(toChain2);
        setFromChain(toChain2);
        setFromToken(toToken2);
        setToToken(toToken2);
        if (buyWithFiatEnabled && !buyWithCryptoEnabled) {
          props.setScreen({ id: "buy-with-fiat" });
        } else {
          props.setScreen({ id: "select-payment-method" });
        }
      } });
    }
    case "direct_payment": {
      return (0, import_jsx_runtime99.jsx)(DirectPaymentModeScreen, { client, payUiOptions: payOptions, payerAccount, connectOptions: props.connectOptions, supportedDestinations, onContinue: (tokenAmount2, toChain2, toToken2) => {
        setTokenAmount(tokenAmount2);
        setToChain(toChain2);
        setFromChain(toChain2);
        setFromToken(toToken2);
        setToToken(toToken2);
        if (buyWithFiatEnabled && !buyWithCryptoEnabled) {
          props.setScreen({ id: "buy-with-fiat" });
        } else {
          props.setScreen({ id: "select-payment-method" });
        }
      } });
    }
    default: {
      return (0, import_jsx_runtime99.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime99.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime99.jsx)(BuyTokenInput, { value: tokenAmount, onChange: async (value) => {
        props.setHasEditedAmount(true);
        setTokenAmount(value);
      }, freezeAmount: ((_b = (_a = payOptions.prefillBuy) == null ? void 0 : _a.allowEdits) == null ? void 0 : _b.amount) === false, freezeChainAndToken: ((_d = (_c = payOptions.prefillBuy) == null ? void 0 : _c.allowEdits) == null ? void 0 : _d.chain) === false && ((_f = (_e = payOptions.prefillBuy) == null ? void 0 : _e.allowEdits) == null ? void 0 : _f.token) === false, token: toToken, chain: toChain, onSelectToken: props.onSelectBuyToken, client: props.client }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime99.jsx)(Container, { flex: "column", gap: "sm", children: !payerAccount ? (0, import_jsx_runtime99.jsx)("div", { children: (0, import_jsx_runtime99.jsx)(ConnectButton, { ...props.connectOptions, client: props.client, theme: props.theme, connectButton: {
        style: {
          width: "100%"
        }
      } }) }) : (0, import_jsx_runtime99.jsx)(Button, { variant: "accent", fullWidth: true, disabled: disableContinue, "data-disabled": disableContinue, onClick: () => {
        if (buyWithFiatEnabled && !buyWithCryptoEnabled) {
          props.setScreen({ id: "buy-with-fiat" });
        } else {
          props.setScreen({ id: "select-payment-method" });
        }
      }, children: "Continue" }) })] });
    }
  }
}
function TokenSelectedLayout(props) {
  return (0, import_jsx_runtime99.jsxs)(Container, { children: [(0, import_jsx_runtime99.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime99.jsx)(ModalHeader, { title: props.title, onBack: props.onBack }) }), (0, import_jsx_runtime99.jsxs)(Container, { px: "lg", style: {
    paddingBottom: spacing.lg
  }, children: [(0, import_jsx_runtime99.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime99.jsx)(SelectedTokenInfo, { selectedToken: props.selectedToken, selectedChain: props.selectedChain, tokenAmount: props.tokenAmount, client: props.client }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime99.jsx)(Line, {}), (0, import_jsx_runtime99.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime99.jsx)(Text, { size: "sm", children: " Pay with " }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "sm" }), props.children] })] });
}
function SwapScreenContent(props) {
  var _a, _b, _c, _d, _e, _f;
  const { setScreen, payer, client, toChain, tokenAmount, toToken, fromChain, fromToken, payOptions, disableTokenSelection } = props;
  const defaultRecipientAddress = (_b = (_a = props.payOptions) == null ? void 0 : _a.paymentInfo) == null ? void 0 : _b.sellerAddress;
  const receiverAddress = defaultRecipientAddress || props.activeAccount.address;
  const { drawerRef, drawerOverlayRef, isOpen, setIsOpen } = useDrawer();
  const [drawerScreen, setDrawerScreen] = (0, import_react60.useState)("fees");
  const fromTokenBalanceQuery = useWalletBalance({
    address: payer.account.address,
    chain: fromChain,
    tokenAddress: isNativeToken(fromToken) ? void 0 : fromToken.address,
    client
  });
  const fromTokenId = isNativeToken(fromToken) ? NATIVE_TOKEN_ADDRESS : fromToken.address.toLowerCase();
  const toTokenId = isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address.toLowerCase();
  const swapRequired = !!tokenAmount && !(fromChain.id === toChain.id && fromTokenId === toTokenId);
  const quoteParams = swapRequired ? {
    // wallets
    fromAddress: payer.account.address,
    toAddress: receiverAddress,
    // from
    fromChainId: fromChain.id,
    fromTokenAddress: isNativeToken(fromToken) ? NATIVE_TOKEN_ADDRESS : fromToken.address,
    // to
    toChainId: toChain.id,
    toTokenAddress: isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address,
    toAmount: tokenAmount,
    client,
    purchaseData: payOptions.purchaseData
  } : void 0;
  const quoteQuery = useBuyWithCryptoQuote(quoteParams, {
    // refetch every 30 seconds
    staleTime: 30 * 1e3,
    refetchInterval: 30 * 1e3,
    gcTime: 30 * 1e3
  });
  const sourceTokenAmount = swapRequired ? (_c = quoteQuery.data) == null ? void 0 : _c.swapDetails.fromAmount : tokenAmount;
  const isNotEnoughBalance = !!sourceTokenAmount && !!fromTokenBalanceQuery.data && Number(fromTokenBalanceQuery.data.displayValue) < Number(sourceTokenAmount);
  const disableContinue = swapRequired && !quoteQuery.data || isNotEnoughBalance;
  const switchChainRequired = ((_d = props.payer.wallet.getChain()) == null ? void 0 : _d.id) !== fromChain.id;
  function getErrorMessage(err) {
    const defaultMessage = "Unable to get price quote";
    try {
      if (err.error.code === "MINIMUM_PURCHASE_AMOUNT") {
        const obj = err.error;
        const minAmountToken = obj.data.minimumAmountEth;
        return {
          minAmount: formatNumber(Number(minAmountToken), 6)
        };
      }
    } catch {
    }
    return {
      msg: [defaultMessage]
    };
  }
  const errorMsg = !quoteQuery.isLoading && quoteQuery.error ? getErrorMessage(quoteQuery.error) : void 0;
  function showSwapFlow() {
    if ((props.payOptions.mode === "direct_payment" || props.payOptions.mode === "fund_wallet") && !isNotEnoughBalance && !swapRequired) {
      setScreen({
        id: "transfer-flow"
      });
    } else if (props.payOptions.mode === "transaction" && !isNotEnoughBalance && !swapRequired) {
      if (payer.account.address !== receiverAddress) {
        setScreen({
          id: "transfer-flow"
        });
      } else {
        props.onDone();
      }
      return;
    }
    if (!quoteQuery.data) {
      return;
    }
    setScreen({
      id: "swap-flow",
      quote: quoteQuery.data
    });
  }
  function showFees() {
    if (!quoteQuery.data) {
      return;
    }
    setIsOpen(true);
    setDrawerScreen("fees");
  }
  return (0, import_jsx_runtime99.jsxs)(Container, { flex: "column", gap: "md", animate: "fadein", children: [isOpen && (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: [(0, import_jsx_runtime99.jsx)(DrawerOverlay, { ref: drawerOverlayRef }), (0, import_jsx_runtime99.jsx)(Drawer, { ref: drawerRef, close: () => setIsOpen(false), children: drawerScreen === "fees" && quoteQuery.data && (0, import_jsx_runtime99.jsxs)("div", { children: [(0, import_jsx_runtime99.jsx)(Text, { size: "lg", color: "primaryText", children: "Fees" }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime99.jsx)(SwapFees, { quote: quoteQuery.data })] }) })] }), (0, import_jsx_runtime99.jsxs)("div", { children: [(0, import_jsx_runtime99.jsx)(PayWithCryptoQuoteInfo, { value: sourceTokenAmount || "", chain: fromChain, token: fromToken, isLoading: quoteQuery.isLoading && !sourceTokenAmount, client, freezeChainAndTokenSelection: disableTokenSelection, payerAccount: props.payer.account, swapRequired }), swapRequired && (0, import_jsx_runtime99.jsx)(EstimatedTimeAndFees, { quoteIsLoading: quoteQuery.isLoading, estimatedSeconds: (_e = quoteQuery.data) == null ? void 0 : _e.swapDetails.estimated.durationSeconds, onViewFees: showFees }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "md" })] }), errorMsg && (0, import_jsx_runtime99.jsxs)("div", { children: [errorMsg.minAmount && (0, import_jsx_runtime99.jsxs)(Text, { color: "danger", size: "sm", center: true, multiline: true, children: ["Minimum amount is ", errorMsg.minAmount, " ", (0, import_jsx_runtime99.jsx)(TokenSymbol, { token: toToken, chain: toChain, size: "sm", inline: true, color: "danger" })] }), (_f = errorMsg.msg) == null ? void 0 : _f.map((msg) => (0, import_jsx_runtime99.jsx)(Text, { color: "danger", size: "sm", center: true, multiline: true, children: msg }, msg))] }), !errorMsg && isNotEnoughBalance && (0, import_jsx_runtime99.jsxs)("div", { children: [(0, import_jsx_runtime99.jsx)(Text, { color: "danger", size: "sm", center: true, multiline: true, children: "Not enough funds." }), (0, import_jsx_runtime99.jsx)(Text, { color: "danger", size: "sm", center: true, multiline: true, children: "Try a different wallet or token." })] }), (errorMsg == null ? void 0 : errorMsg.minAmount) ? (0, import_jsx_runtime99.jsx)(Button, { variant: "accent", fullWidth: true, onClick: () => {
    props.setTokenAmount(String(errorMsg.minAmount));
    props.setHasEditedAmount(true);
  }, children: "Set Minimum" }) : switchChainRequired && !quoteQuery.isLoading && !isNotEnoughBalance && !quoteQuery.error ? (0, import_jsx_runtime99.jsx)(SwitchNetworkButton, { variant: "accent", fullWidth: true, switchChain: async () => {
    await props.payer.wallet.switchChain(fromChain);
  } }) : (0, import_jsx_runtime99.jsx)(Button, { variant: disableContinue ? "outline" : "accent", fullWidth: true, "data-disabled": disableContinue, disabled: disableContinue, onClick: async () => {
    if (!disableContinue) {
      showSwapFlow();
    }
  }, gap: "xs", children: quoteQuery.isLoading ? (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: ["Getting price quote", (0, import_jsx_runtime99.jsx)(Spinner, { size: "sm", color: "accentText" })] }) : "Continue" })] });
}
function FiatScreenContent(props) {
  var _a, _b, _c, _d, _e;
  const { toToken, tokenAmount, payer, client, setScreen, toChain, showCurrencySelector, selectedCurrency } = props;
  const defaultRecipientAddress = (_b = (_a = props.payOptions) == null ? void 0 : _a.paymentInfo) == null ? void 0 : _b.sellerAddress;
  const receiverAddress = defaultRecipientAddress || props.payer.account.address;
  const { drawerRef, drawerOverlayRef, isOpen, setIsOpen } = useDrawer();
  const [drawerScreen, setDrawerScreen] = (0, import_react60.useState)("fees");
  const buyWithFiatOptions = props.payOptions.buyWithFiat;
  const fiatQuoteQuery = useBuyWithFiatQuote(buyWithFiatOptions !== false && tokenAmount ? {
    fromCurrencySymbol: selectedCurrency.shorthand,
    toChainId: toChain.id,
    toAddress: receiverAddress,
    toTokenAddress: isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address,
    toAmount: tokenAmount,
    client,
    isTestMode: buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.testMode,
    purchaseData: props.payOptions.purchaseData,
    fromAddress: payer.account.address,
    preferredProvider: buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.preferredProvider
  } : void 0);
  function handleSubmit() {
    if (!fiatQuoteQuery.data) {
      return;
    }
    const hasTwoSteps = isSwapRequiredPostOnramp(fiatQuoteQuery.data);
    let openedWindow = null;
    if (!hasTwoSteps) {
      openedWindow = openOnrampPopup(fiatQuoteQuery.data.onRampLink, typeof props.theme === "string" ? props.theme : props.theme.type);
      addPendingTx({
        type: "fiat",
        intentId: fiatQuoteQuery.data.intentId
      });
    }
    setScreen({
      id: "fiat-flow",
      quote: fiatQuoteQuery.data,
      openedWindow
    });
  }
  function showFees() {
    if (!fiatQuoteQuery.data) {
      return;
    }
    setDrawerScreen("fees");
    setIsOpen(true);
  }
  function getErrorMessage(err) {
    const defaultMessage = "Unable to get price quote";
    try {
      if (err.error.code === "MINIMUM_PURCHASE_AMOUNT") {
        const obj = err.error;
        const minAmountToken = obj.data.minimumAmountEth;
        return {
          minAmount: formatNumber(Number(minAmountToken), 6)
        };
      }
    } catch {
    }
    return {
      msg: [defaultMessage]
    };
  }
  const disableSubmit = !fiatQuoteQuery.data;
  const errorMsg = !fiatQuoteQuery.isLoading && fiatQuoteQuery.error ? getErrorMessage(fiatQuoteQuery.error) : void 0;
  return (0, import_jsx_runtime99.jsxs)(Container, { flex: "column", gap: "md", animate: "fadein", children: [isOpen && (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: [(0, import_jsx_runtime99.jsx)(DrawerOverlay, { ref: drawerOverlayRef }), (0, import_jsx_runtime99.jsx)(Drawer, { ref: drawerRef, close: () => setIsOpen(false), children: drawerScreen === "fees" && fiatQuoteQuery.data && (0, import_jsx_runtime99.jsxs)("div", { children: [(0, import_jsx_runtime99.jsx)(Text, { size: "lg", color: "primaryText", children: "Fees" }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime99.jsx)(FiatFees, { quote: fiatQuoteQuery.data })] }) })] }), (0, import_jsx_runtime99.jsxs)("div", { children: [(0, import_jsx_runtime99.jsx)(PayWithCreditCard, { isLoading: fiatQuoteQuery.isLoading, value: (_c = fiatQuoteQuery.data) == null ? void 0 : _c.fromCurrencyWithFees.amount, client, currency: selectedCurrency, onSelectCurrency: showCurrencySelector }), (0, import_jsx_runtime99.jsx)(EstimatedTimeAndFees, { quoteIsLoading: fiatQuoteQuery.isLoading, estimatedSeconds: (_d = fiatQuoteQuery.data) == null ? void 0 : _d.estimatedDurationSeconds, onViewFees: showFees }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "md" })] }), errorMsg && (0, import_jsx_runtime99.jsxs)("div", { children: [errorMsg.minAmount && (0, import_jsx_runtime99.jsxs)(Text, { color: "danger", size: "sm", center: true, multiline: true, children: ["Minimum amount is ", errorMsg.minAmount, " ", (0, import_jsx_runtime99.jsx)(TokenSymbol, { token: toToken, chain: toChain, size: "sm", inline: true, color: "danger" })] }), (_e = errorMsg.msg) == null ? void 0 : _e.map((msg) => (0, import_jsx_runtime99.jsx)(Text, { color: "danger", size: "sm", center: true, multiline: true, children: msg }, msg))] }), (errorMsg == null ? void 0 : errorMsg.minAmount) ? (0, import_jsx_runtime99.jsx)(Button, { variant: "accent", fullWidth: true, onClick: () => {
    props.setTokenAmount(String(errorMsg.minAmount));
    props.setHasEditedAmount(true);
  }, children: "Set Minimum" }) : (0, import_jsx_runtime99.jsx)(Button, { variant: disableSubmit ? "outline" : "accent", "data-disabled": disableSubmit, disabled: disableSubmit, fullWidth: true, onClick: handleSubmit, gap: "xs", children: fiatQuoteQuery.isLoading ? (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: ["Getting price quote", (0, import_jsx_runtime99.jsx)(Spinner, { size: "sm", color: "accentText" })] }) : "Continue" })] });
}
function createSupportedTokens(data, payOptions, supportedTokensOverrides) {
  const tokens = {};
  const isBuyWithFiatDisabled = payOptions.buyWithFiat === false;
  const isBuyWithCryptoDisabled = payOptions.buyWithCrypto === false;
  for (const x of data) {
    tokens[x.chain.id] = x.tokens.filter((t) => {
      if (t.buyWithCryptoEnabled === void 0 && t.buyWithFiatEnabled === void 0) {
        return true;
      }
      if (t.buyWithCryptoEnabled && t.buyWithFiatEnabled) {
        return true;
      }
      if (!t.buyWithCryptoEnabled && isBuyWithFiatDisabled) {
        return false;
      }
      if (!t.buyWithFiatEnabled && isBuyWithCryptoDisabled) {
        return false;
      }
      return true;
    });
  }
  if (supportedTokensOverrides) {
    for (const k in supportedTokensOverrides) {
      const key = Number(k);
      const tokenList = supportedTokensOverrides[key];
      if (tokenList) {
        tokens[key] = tokenList;
      }
    }
  }
  return tokens;
}
function ChainSelectionScreen(props) {
  return (0, import_jsx_runtime99.jsx)(NetworkSelectorContent, { client: props.client, connectLocale: props.connectLocale, showTabs: false, onBack: props.goBack, chains: props.chains, closeModal: props.goBack, networkSelector: {
    renderChain(renderChainProps) {
      return (0, import_jsx_runtime99.jsx)(ChainButton, { chain: renderChainProps.chain, confirming: false, switchingFailed: false, onClick: () => {
        props.setChain(renderChainProps.chain);
        props.goBack();
      }, client: props.client, connectLocale: props.connectLocale });
    }
  } });
}

export {
  useSiweAuth,
  useActiveWalletConnectionStatus,
  defaultTokens,
  getDefaultToken,
  canFitWideModal,
  usePreloadWalletProviders,
  createConnectionManager,
  useSetActiveWalletConnectionStatus,
  useConnect,
  useAutoConnect,
  AutoConnect,
  DynamicHeight,
  Modal,
  trackPayEvent,
  useChainExplorers,
  useChainMetadata,
  useActiveWalletChain,
  useConnectedWallets,
  useAdminWallet,
  useDisconnect,
  useSwitchActiveWalletChain,
  SetRootElementContext,
  Blobbie,
  getConnectLocale,
  useConnectLocale,
  useNetworkSwitcherModal,
  fetchBuySupportedDestinations,
  useBuyHistory,
  useBuyWithFiatStatus,
  getPostOnRampQuote,
  useBuyWithCryptoStatus,
  invalidateWalletBalance,
  useWaitForReceipt,
  useBuyWithCryptoQuote,
  useBuyWithFiatQuote,
  getTokenBalance,
  useSetActiveWallet,
  ConnectModalContent,
  BuyScreen2 as BuyScreen,
  LazyBuyScreen,
  useProfiles,
  MediaRenderer,
  useWalletDetailsModal,
  ConnectModal_default,
  ConnectButton
};
//# sourceMappingURL=chunk-FHZU65JA.js.map
