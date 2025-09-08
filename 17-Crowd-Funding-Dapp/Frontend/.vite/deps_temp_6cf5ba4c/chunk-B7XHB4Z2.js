import {
  isHex
} from "./chunk-BBNNHC5G.js";
import {
  fromBoolean2 as fromBoolean,
  fromHex,
  fromNumber2 as fromNumber,
  fromString2 as fromString
} from "./chunk-Y3WKETHV.js";

// node_modules/thirdweb/dist/esm/utils/encoding/to-bytes.js
function toBytes(value, opts = {}) {
  switch (typeof value) {
    case "number":
    case "bigint":
      return numberToBytes(value, opts);
    case "boolean":
      return boolToBytes(value, opts);
    default:
      if (isHex(value)) {
        return hexToBytes(value, opts);
      }
      return stringToBytes(value, opts);
  }
}
function boolToBytes(value, opts = {}) {
  return fromBoolean(value, opts);
}
function hexToBytes(hex_, opts = {}) {
  return fromHex(hex_, opts);
}
function numberToBytes(value, opts) {
  return fromNumber(value, opts);
}
function stringToBytes(value, opts = {}) {
  return fromString(value, opts);
}

export {
  toBytes,
  boolToBytes,
  hexToBytes,
  numberToBytes,
  stringToBytes
};
//# sourceMappingURL=chunk-B7XHB4Z2.js.map
