import {
  resolveScheme
} from "./chunk-ZNEQLT5Q.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";

// node_modules/thirdweb/dist/esm/storage/download.js
async function download(options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let url;
  if (options.uri.startsWith("ar://")) {
    const { resolveArweaveScheme } = await import("./arweave-57OCWZ5C.js");
    url = resolveArweaveScheme(options);
  } else {
    url = resolveScheme(options);
  }
  const res = await getClientFetch(options.client)(url, {
    keepalive: (_c = (_b = (_a = options.client.config) == null ? void 0 : _a.storage) == null ? void 0 : _b.fetch) == null ? void 0 : _c.keepalive,
    headers: (_f = (_e = (_d = options.client.config) == null ? void 0 : _d.storage) == null ? void 0 : _e.fetch) == null ? void 0 : _f.headers,
    requestTimeoutMs: options.requestTimeoutMs ?? ((_i = (_h = (_g = options.client.config) == null ? void 0 : _g.storage) == null ? void 0 : _h.fetch) == null ? void 0 : _i.requestTimeoutMs) ?? 6e4
  });
  if (!res.ok) {
    (_j = res.body) == null ? void 0 : _j.cancel();
    throw new Error(`Failed to download file: ${res.statusText}`);
  }
  return res;
}

export {
  download
};
//# sourceMappingURL=chunk-5CO5G7XZ.js.map
