// node_modules/thirdweb/dist/esm/utils/type-guards.js
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isObjectWithKeys(value, keys = []) {
  return isObject(value) && keys.every((key) => key in value);
}

export {
  isObjectWithKeys
};
//# sourceMappingURL=chunk-3ZOYRTTJ.js.map
