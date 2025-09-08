import "./chunk-SEVZ5PBP.js";

// node_modules/isows/_esm/utils.js
function getNativeWebSocket() {
  if (typeof WebSocket !== "undefined")
    return WebSocket;
  if (typeof global.WebSocket !== "undefined")
    return global.WebSocket;
  if (typeof window.WebSocket !== "undefined")
    return window.WebSocket;
  if (typeof self.WebSocket !== "undefined")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}

// node_modules/isows/_esm/native.js
var WebSocket2 = getNativeWebSocket();
export {
  WebSocket2 as WebSocket
};
//# sourceMappingURL=native-NEGONUYD.js.map
