import {
  fromBoolean,
  fromBytes,
  fromNumber,
  fromString,
  padLeft,
  padRight,
  toBigInt,
  toBoolean,
  toBytes,
  toNumber,
  toString,
  validate
} from "./chunk-Y3WKETHV.js";

// node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js
function isHex(value, options = {}) {
  return validate(value, options);
}

// node_modules/thirdweb/dist/esm/utils/encoding/hex.js
function padHex(hex_, options = {}) {
  const { dir, size = 32 } = options;
  if (size === null) {
    return hex_;
  }
  if (dir === "right") {
    return padRight(hex_, size);
  }
  return padLeft(hex_, size);
}
function hexToString(hex, opts = {}) {
  return toString(hex, opts);
}
function hexToBigInt(hex, opts = {}) {
  return toBigInt(hex, opts);
}
function hexToNumber(hex, opts = {}) {
  return toNumber(hex, opts);
}
function hexToBool(hex, opts = {}) {
  return toBoolean(hex, opts);
}
function hexToUint8Array(hex, opts = {}) {
  return toBytes(hex, opts);
}
function fromHex(hex, toOrOpts) {
  const opts = typeof toOrOpts === "string" ? { to: toOrOpts } : toOrOpts;
  switch (opts.to) {
    case "number":
      return hexToNumber(hex, opts);
    case "bigint":
      return hexToBigInt(hex, opts);
    case "string":
      return hexToString(hex, opts);
    case "boolean":
      return hexToBool(hex, opts);
    default:
      return hexToUint8Array(hex, opts);
  }
}
function boolToHex(value, opts = {}) {
  return fromBoolean(value, opts);
}
function uint8ArrayToHex(value, opts = {}) {
  return fromBytes(value, opts);
}
function numberToHex(value_, opts = {}) {
  return fromNumber(value_, opts);
}
function stringToHex(value_, opts = {}) {
  return fromString(value_, opts);
}
function toHex(value, opts = {}) {
  switch (typeof value) {
    case "number":
    case "bigint":
      return numberToHex(value, opts);
    case "string":
      return stringToHex(value, opts);
    case "boolean":
      return boolToHex(value, opts);
    default:
      return uint8ArrayToHex(value, opts);
  }
}

export {
  isHex,
  padHex,
  hexToString,
  hexToBigInt,
  hexToNumber,
  hexToBool,
  hexToUint8Array,
  fromHex,
  boolToHex,
  uint8ArrayToHex,
  numberToHex,
  stringToHex,
  toHex
};
//# sourceMappingURL=chunk-BBNNHC5G.js.map
