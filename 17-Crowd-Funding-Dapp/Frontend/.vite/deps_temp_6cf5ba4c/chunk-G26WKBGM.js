import {
  isBrowser
} from "./chunk-QIUEWTOP.js";

// node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js
function getDefaultAppMetadata() {
  if (!isBrowser()) {
    return {
      name: "thirdweb powered dApp",
      url: "https://thirdweb.com",
      description: "thirdweb powered dApp",
      logoUrl: "https://thirdweb.com/favicon.ico"
    };
  }
  const { protocol, hostname, port } = window.location;
  let baseUrl = `${protocol}//${hostname}`;
  if (port && port !== "80" && port !== "443") {
    baseUrl += `:${port}`;
  }
  const logoUrl = `${baseUrl}/favicon.ico`;
  return {
    name: window.document.title || "thirdweb powered dApp",
    url: baseUrl,
    description: window.document.title || "thirdweb powered dApp",
    logoUrl
  };
}

export {
  getDefaultAppMetadata
};
//# sourceMappingURL=chunk-G26WKBGM.js.map
