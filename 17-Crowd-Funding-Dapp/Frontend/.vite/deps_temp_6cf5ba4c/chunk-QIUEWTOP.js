// node_modules/thirdweb/dist/esm/utils/platform.js
function isReactNative() {
  return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
}
function isNode() {
  return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
}
function isBrowser() {
  return !isReactNative() && !isNode();
}

export {
  isBrowser
};
//# sourceMappingURL=chunk-QIUEWTOP.js.map
