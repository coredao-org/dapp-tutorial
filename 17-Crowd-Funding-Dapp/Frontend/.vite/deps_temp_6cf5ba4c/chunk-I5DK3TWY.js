import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  getRpcUrlForChain
} from "./chunk-TFBEDS4S.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";

// node_modules/thirdweb/dist/esm/rpc/fetch-rpc.js
async function fetchRpc(rpcUrl, client, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const response = await getClientFetch(client)(rpcUrl, {
    headers: {
      ...(_c = (_b = (_a = client.config) == null ? void 0 : _a.rpc) == null ? void 0 : _b.fetch) == null ? void 0 : _c.headers,
      "Content-Type": "application/json"
    },
    body: stringify(options.requests),
    method: "POST",
    requestTimeoutMs: options.requestTimeoutMs ?? ((_f = (_e = (_d = client.config) == null ? void 0 : _d.rpc) == null ? void 0 : _e.fetch) == null ? void 0 : _f.requestTimeoutMs),
    keepalive: (_i = (_h = (_g = client.config) == null ? void 0 : _g.rpc) == null ? void 0 : _h.fetch) == null ? void 0 : _i.keepalive
  });
  if (!response.ok) {
    (_j = response.body) == null ? void 0 : _j.cancel();
    throw new Error(`RPC request failed with status ${response.status} - ${response.statusText}`);
  }
  if ((_k = response.headers.get("Content-Type")) == null ? void 0 : _k.startsWith("application/json")) {
    return await response.json();
  }
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Error parsing response", err, text);
    throw err;
  }
}
async function fetchSingleRpc(rpcUrl, client, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const response = await getClientFetch(client)(rpcUrl, {
    headers: {
      ...((_c = (_b = (_a = client.config) == null ? void 0 : _a.rpc) == null ? void 0 : _b.fetch) == null ? void 0 : _c.headers) || {},
      "Content-Type": "application/json"
    },
    body: stringify(options.request),
    method: "POST",
    requestTimeoutMs: options.requestTimeoutMs ?? ((_f = (_e = (_d = client.config) == null ? void 0 : _d.rpc) == null ? void 0 : _e.fetch) == null ? void 0 : _f.requestTimeoutMs),
    keepalive: (_i = (_h = (_g = client.config) == null ? void 0 : _g.rpc) == null ? void 0 : _h.fetch) == null ? void 0 : _i.keepalive
  });
  if (!response.ok) {
    (_j = response.body) == null ? void 0 : _j.cancel();
    throw new Error(`RPC request failed with status ${response.status}`);
  }
  if ((_k = response.headers.get("Content-Type")) == null ? void 0 : _k.startsWith("application/json")) {
    return await response.json();
  }
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Error parsing response", err, text);
    throw err;
  }
}

// node_modules/thirdweb/dist/esm/rpc/rpc.js
var RPC_CLIENT_MAP = /* @__PURE__ */ new WeakMap();
function getRpcClientMap(client) {
  if (RPC_CLIENT_MAP.has(client)) {
    return RPC_CLIENT_MAP.get(client);
  }
  const rpcClientMap = /* @__PURE__ */ new Map();
  RPC_CLIENT_MAP.set(client, rpcClientMap);
  return rpcClientMap;
}
function rpcRequestKey(request) {
  return `${request.method}:${stringify(request.params)}`;
}
var DEFAULT_MAX_BATCH_SIZE = 100;
var DEFAULT_BATCH_TIMEOUT_MS = 0;
function getRpcClient(options) {
  const rpcClientMap = getRpcClientMap(options.client);
  const rpcUrl = options.chain.rpc;
  if (rpcClientMap.has(rpcUrl)) {
    return rpcClientMap.get(rpcUrl);
  }
  const rpcClient = (() => {
    var _a, _b, _c, _d, _e, _f;
    const rpcUrl2 = getRpcUrlForChain({
      client: options.client,
      chain: options.chain
    });
    const batchSize = (
      // look at the direct options passed
      ((_a = options.config) == null ? void 0 : _a.maxBatchSize) ?? // look at the client options
      ((_c = (_b = options.client.config) == null ? void 0 : _b.rpc) == null ? void 0 : _c.maxBatchSize) ?? // use defaults
      DEFAULT_MAX_BATCH_SIZE
    );
    const batchTimeoutMs = (
      // look at the direct options passed
      ((_d = options.config) == null ? void 0 : _d.batchTimeoutMs) ?? // look at the client options
      ((_f = (_e = options.client.config) == null ? void 0 : _e.rpc) == null ? void 0 : _f.batchTimeoutMs) ?? DEFAULT_BATCH_TIMEOUT_MS
    );
    const inflightRequests = /* @__PURE__ */ new Map();
    let pendingBatch = [];
    let pendingBatchTimeout = null;
    function sendPendingBatch() {
      var _a2;
      if (pendingBatchTimeout) {
        clearTimeout(pendingBatchTimeout);
        pendingBatchTimeout = null;
      }
      const requests = new Array(pendingBatch.length);
      const activeBatch = pendingBatch.slice().map((inflight, index) => {
        inflight.request.id = index;
        inflight.request.jsonrpc = "2.0";
        requests[index] = inflight.request;
        return inflight;
      });
      pendingBatch = [];
      fetchRpc(rpcUrl2, options.client, {
        requests,
        requestTimeoutMs: (_a2 = options.config) == null ? void 0 : _a2.requestTimeoutMs
      }).then((responses) => {
        activeBatch.forEach((inflight, index) => {
          const response = responses[index];
          if (!response) {
            inflight.reject(new Error("No response"));
            return;
          }
          if (response instanceof Error) {
            inflight.reject(response);
            return;
          }
          if (typeof response === "string") {
            inflight.reject(new Error(response));
            return;
          }
          if ("error" in response) {
            inflight.reject(response.error);
          } else if (response.method === "eth_subscription") {
            throw new Error("Subscriptions not supported yet");
          } else {
            inflight.resolve(response.result);
          }
          inflightRequests.delete(inflight.requestKey);
        });
      }).catch((err) => {
        for (const inflight of activeBatch) {
          inflight.reject(err);
          inflightRequests.delete(inflight.requestKey);
        }
      });
    }
    if (batchSize === 1) {
      return async (request) => {
        var _a2;
        request.id = 1;
        request.jsonrpc = "2.0";
        const rpcResponse = await fetchSingleRpc(rpcUrl2, options.client, {
          request,
          requestTimeoutMs: (_a2 = options.config) == null ? void 0 : _a2.requestTimeoutMs
        });
        if (!rpcResponse) {
          throw new Error("No response");
        }
        if ("error" in rpcResponse) {
          throw rpcResponse.error;
        }
        return rpcResponse.result;
      };
    }
    return async (request) => {
      const requestKey = rpcRequestKey(request);
      if (inflightRequests.has(requestKey)) {
        return inflightRequests.get(requestKey);
      }
      let resolve;
      let reject;
      const promise = new Promise((resolve_, reject_) => {
        resolve = resolve_;
        reject = reject_;
      });
      inflightRequests.set(requestKey, promise);
      pendingBatch.push({ request, resolve, reject, requestKey });
      if (batchSize > 1) {
        if (!pendingBatchTimeout) {
          pendingBatchTimeout = setTimeout(sendPendingBatch, batchTimeoutMs);
        }
        if (pendingBatch.length >= batchSize) {
          sendPendingBatch();
        }
      } else {
        sendPendingBatch();
      }
      return promise;
    };
  })();
  rpcClientMap.set(rpcUrl, rpcClient);
  return rpcClient;
}

export {
  getRpcClient
};
//# sourceMappingURL=chunk-I5DK3TWY.js.map
