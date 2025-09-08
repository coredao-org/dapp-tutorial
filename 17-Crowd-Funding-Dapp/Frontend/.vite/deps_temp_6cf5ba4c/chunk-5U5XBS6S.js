// node_modules/thirdweb/dist/esm/utils/url.js
function isHttpUrl(url) {
  return url.startsWith("http://") || url.startsWith("https://");
}
function formatUniversalUrl(appUrl, wcUri) {
  if (!isHttpUrl(appUrl)) {
    return formatNativeUrl(appUrl, wcUri);
  }
  let safeAppUrl = appUrl;
  if (!safeAppUrl.endsWith("/")) {
    safeAppUrl = `${safeAppUrl}/`;
  }
  const encodedWcUrl = encodeURIComponent(wcUri);
  return {
    redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
    href: safeAppUrl
  };
}
function formatNativeUrl(appUrl, wcUri) {
  if (isHttpUrl(appUrl)) {
    return formatUniversalUrl(appUrl, wcUri);
  }
  let safeAppUrl = appUrl;
  if (!safeAppUrl.includes("://")) {
    safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
    safeAppUrl = `${safeAppUrl}://`;
  }
  if (!safeAppUrl.endsWith("/")) {
    safeAppUrl = `${safeAppUrl}/`;
  }
  const encodedWcUrl = encodeURIComponent(wcUri);
  return {
    redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
    href: safeAppUrl
  };
}
function formatWalletConnectUrl(appUrl, wcUri) {
  return isHttpUrl(appUrl) ? formatUniversalUrl(appUrl, wcUri) : formatNativeUrl(appUrl, wcUri);
}
function formatExplorerTxUrl(explorerUrl, txHash) {
  return `${explorerUrl.endsWith("/") ? explorerUrl : `${explorerUrl}/`}tx/${txHash}`;
}
function formatExplorerAddressUrl(explorerUrl, address) {
  return `${explorerUrl.endsWith("/") ? explorerUrl : `${explorerUrl}/`}address/${address}`;
}

export {
  formatWalletConnectUrl,
  formatExplorerTxUrl,
  formatExplorerAddressUrl
};
//# sourceMappingURL=chunk-5U5XBS6S.js.map
