import {
  authOptions
} from "./chunk-EIBOABXT.js";
import {
  getThirdwebBaseUrl
} from "./chunk-QHKZ43P6.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/getLoginPath.js
var getLoginOptionRoute = (option) => {
  if (!authOptions.includes(option)) {
    throw new Error(`Unknown auth option ${option}`);
  }
  switch (option) {
    case "wallet":
      return "siwe";
    default:
      return option;
  }
};
var getLoginUrl = ({ authOption, client, ecosystem, mode = "popup", redirectUrl }) => {
  if (mode === "popup" && redirectUrl) {
    throw new Error("Redirect URL is not supported for popup mode");
  }
  if (mode === "window" && !redirectUrl) {
    throw new Error("Redirect URL is required for window mode");
  }
  const route = getLoginOptionRoute(authOption);
  let baseUrl = `${getThirdwebBaseUrl("inAppWallet")}/api/2024-05-05/login/${route}?clientId=${client.clientId}`;
  if (ecosystem == null ? void 0 : ecosystem.partnerId) {
    baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}&ecosystemPartnerId=${ecosystem.partnerId}`;
  } else if (ecosystem) {
    baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}`;
  }
  if (mode !== "popup") {
    const formattedRedirectUrl = new URL(redirectUrl || window.location.href);
    formattedRedirectUrl.searchParams.set("walletId", (ecosystem == null ? void 0 : ecosystem.id) || "inApp");
    formattedRedirectUrl.searchParams.set("authProvider", authOption);
    baseUrl = `${baseUrl}&redirectUrl=${encodeURIComponent(formattedRedirectUrl.toString())}`;
  }
  return baseUrl;
};
var getLoginCallbackUrl = ({ authOption, client, ecosystem }) => {
  const route = getLoginOptionRoute(authOption);
  let baseUrl = `${getThirdwebBaseUrl("inAppWallet")}/api/2024-05-05/login/${route}/callback?clientId=${client.clientId}`;
  if (ecosystem == null ? void 0 : ecosystem.partnerId) {
    baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}&ecosystemPartnerId=${ecosystem.partnerId}`;
  } else if (ecosystem) {
    baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}`;
  }
  return baseUrl;
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/constants.js
var DEFAULT_POP_UP_SIZE = "width=350, height=500";

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/oauth.js
var closeWindow = ({ isWindowOpenedByFn, win, closeOpenedWindow }) => {
  if (isWindowOpenedByFn) {
    win == null ? void 0 : win.close();
  } else {
    if (win && closeOpenedWindow) {
      closeOpenedWindow(win);
    } else if (win) {
      win.close();
    }
  }
};
var loginWithOauthRedirect = (options) => {
  const loginUrl = getLoginUrl({
    ...options,
    mode: options.mode || "redirect"
  });
  if (options.mode === "redirect") {
    window.location.href = loginUrl;
  } else {
    window.open(loginUrl);
  }
};
var loginWithOauth = async (options) => {
  let win = options.openedWindow;
  let isWindowOpenedByFn = false;
  if (!win) {
    win = window.open(getLoginUrl({ ...options, mode: "popup" }), `Login to ${options.authOption}`, DEFAULT_POP_UP_SIZE);
    isWindowOpenedByFn = true;
  }
  if (!win) {
    throw new Error("Something went wrong opening pop-up");
  }
  const result = await new Promise((resolve, reject) => {
    const pollTimer = window.setInterval(async () => {
      if (win.closed) {
        clearInterval(pollTimer);
        window.removeEventListener("message", messageListener);
        reject(new Error("User closed login window"));
      }
    }, 1e3);
    const messageListener = async (event) => {
      if (event.origin !== getThirdwebBaseUrl("inAppWallet")) {
        return;
      }
      if (typeof event.data !== "object") {
        reject(new Error("Invalid event data"));
        return;
      }
      switch (event.data.eventType) {
        case "oauthSuccessResult": {
          window.removeEventListener("message", messageListener);
          clearInterval(pollTimer);
          closeWindow({
            isWindowOpenedByFn,
            win,
            closeOpenedWindow: options.closeOpenedWindow
          });
          if (event.data.authResult) {
            resolve(event.data.authResult);
          }
          break;
        }
        case "oauthFailureResult": {
          window.removeEventListener("message", messageListener);
          clearInterval(pollTimer);
          closeWindow({
            isWindowOpenedByFn,
            win,
            closeOpenedWindow: options.closeOpenedWindow
          });
          reject(new Error(event.data.errorString));
          break;
        }
        default: {
        }
      }
    };
    window.addEventListener("message", messageListener);
  });
  return result;
};

export {
  getLoginUrl,
  getLoginCallbackUrl,
  loginWithOauthRedirect,
  loginWithOauth
};
//# sourceMappingURL=chunk-J7FYPWA5.js.map
