import {
  parseAbiItem,
  toFunctionSelector
} from "./chunk-GINVHONX.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";

// node_modules/thirdweb/dist/esm/utils/abi/prepare-method.js
var prepareMethodCache = new LruMap(4096);
function prepareMethod(method) {
  const key = typeof method === "string" ? method : stringify(method);
  if (prepareMethodCache.has(key)) {
    return prepareMethodCache.get(key);
  }
  const abiFn = typeof method === "string" ? (
    // @ts-expect-error - we're sure it's a string...
    parseAbiItem(method)
  ) : method;
  const sig = toFunctionSelector(abiFn);
  const ret = [sig, abiFn.inputs, abiFn.outputs];
  prepareMethodCache.set(key, ret);
  return ret;
}

// node_modules/thirdweb/dist/esm/transaction/utils.js
function isAbiFunction(item) {
  return !!(item && typeof item === "object" && "type" in item && item.type === "function");
}

export {
  prepareMethod,
  isAbiFunction
};
//# sourceMappingURL=chunk-NPJBMLFY.js.map
