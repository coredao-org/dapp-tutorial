import {
  equalBytes
} from "./chunk-SPELR2RL.js";

// node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// node_modules/ox/_esm/core/internal/errors.js
function getVersion() {
  return version;
}

// node_modules/ox/_esm/core/Errors.js
var BaseError = class _BaseError extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      var _a;
      if (options.cause instanceof _BaseError) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if ((_a = options.cause) == null ? void 0 : _a.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath = (() => {
      if (options.cause instanceof _BaseError)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath ? `See: ${docs}` : void 0
      ] : []
    ].filter((x) => typeof x === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return walk(this, fn);
  }
};
function walk(err, fn) {
  if (fn == null ? void 0 : fn(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn);
  return fn ? null : err;
}

// node_modules/ox/_esm/core/Json.js
var bigIntSuffix = "#__bigint";
function parse(string, reviver) {
  return JSON.parse(string, (key, value_) => {
    const value = value_;
    if (typeof value === "string" && value.endsWith(bigIntSuffix))
      return BigInt(value.slice(0, -bigIntSuffix.length));
    return typeof reviver === "function" ? reviver(key, value) : value;
  });
}
parse.parseError = (error) => (
  /* v8 ignore next */
  error
);
function stringify(value, replacer, space) {
  return JSON.stringify(value, (key, value2) => {
    if (typeof replacer === "function")
      return replacer(key, value2);
    if (typeof value2 === "bigint")
      return value2.toString() + bigIntSuffix;
    return value2;
  }, space);
}
stringify.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/internal/bytes.js
function assertSize(bytes, size_) {
  if (size(bytes) > size_)
    throw new SizeOverflowError({
      givenSize: size(bytes),
      maxSize: size_
    });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function pad(bytes, options = {}) {
  const { dir, size: size3 = 32 } = options;
  if (size3 === 0)
    return bytes;
  if (bytes.length > size3)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size3,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size3);
  for (let i = 0; i < size3; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size3 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
function trim(value, options = {}) {
  const { dir = "left" } = options;
  let data = value;
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  return data;
}

// node_modules/ox/_esm/core/internal/hex.js
function assertSize2(hex, size_) {
  if (size2(hex) > size_)
    throw new SizeOverflowError2({
      givenSize: size2(hex),
      maxSize: size_
    });
}
function assertStartOffset2(value, start) {
  if (typeof start === "number" && start > 0 && start > size2(value) - 1)
    throw new SliceOffsetOutOfBoundsError2({
      offset: start,
      position: "start",
      size: size2(value)
    });
}
function assertEndOffset2(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size2(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError2({
      offset: end,
      position: "end",
      size: size2(value)
    });
  }
}
function pad2(hex_, options = {}) {
  const { dir, size: size3 = 32 } = options;
  if (size3 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size3 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex.length / 2),
      targetSize: size3,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size3 * 2, "0")}`;
}
function trim2(value, options = {}) {
  const { dir = "left" } = options;
  let data = value.replace("0x", "");
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (data.length === 1 && dir === "right")
    data = `${data}0`;
  return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
}

// node_modules/ox/_esm/core/Bytes.js
var decoder = new TextDecoder();
var encoder = new TextEncoder();
function assert(value) {
  if (value instanceof Uint8Array)
    return;
  if (!value)
    throw new InvalidBytesTypeError(value);
  if (typeof value !== "object")
    throw new InvalidBytesTypeError(value);
  if (!("BYTES_PER_ELEMENT" in value))
    throw new InvalidBytesTypeError(value);
  if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array")
    throw new InvalidBytesTypeError(value);
}
assert.parseError = (error) => error;
function concat(...values) {
  let length = 0;
  for (const arr of values) {
    length += arr.length;
  }
  const result = new Uint8Array(length);
  for (let i = 0, index = 0; i < values.length; i++) {
    const arr = values[i];
    result.set(arr, index);
    index += arr.length;
  }
  return result;
}
concat.parseError = (error) => error;
function from(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex(value);
  return fromArray(value);
}
from.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
fromArray.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromBoolean(value, options = {}) {
  const { size: size3 } = options;
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof size3 === "number") {
    assertSize(bytes, size3);
    return padLeft(bytes, size3);
  }
  return bytes;
}
fromBoolean.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex(value, options = {}) {
  const { size: size3 } = options;
  let hex = value;
  if (size3) {
    assertSize2(value, size3);
    hex = padRight(value, size3);
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
fromHex.parseError = (error) => error;
function fromNumber2(value, options) {
  const hex = fromNumber(value, options);
  return fromHex(hex);
}
fromNumber2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromString(value, options = {}) {
  const { size: size3 } = options;
  const bytes = encoder.encode(value);
  if (typeof size3 === "number") {
    assertSize(bytes, size3);
    return padRight2(bytes, size3);
  }
  return bytes;
}
fromString.parseError = (error) => (
  /* v8 ignore next */
  error
);
function isEqual(bytesA, bytesB) {
  return equalBytes(bytesA, bytesB);
}
isEqual.parseError = (error) => error;
function padLeft(value, size3) {
  return pad(value, { dir: "left", size: size3 });
}
padLeft.parseError = (error) => error;
function padRight2(value, size3) {
  return pad(value, { dir: "right", size: size3 });
}
padRight2.parseError = (error) => error;
function random(length) {
  return crypto.getRandomValues(new Uint8Array(length));
}
random.parseError = (error) => error;
function size(value) {
  return value.length;
}
size.parseError = (error) => error;
function slice(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset(value, start);
  const value_ = value.slice(start, end);
  if (strict)
    assertEndOffset(value_, start, end);
  return value_;
}
slice.parseError = (error) => error;
function toBigInt2(bytes, options = {}) {
  const { size: size3 } = options;
  if (typeof size3 !== "undefined")
    assertSize(bytes, size3);
  const hex = fromBytes(bytes, options);
  return toBigInt(hex, options);
}
toBigInt2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toBoolean(bytes, options = {}) {
  const { size: size3 } = options;
  let bytes_ = bytes;
  if (typeof size3 !== "undefined") {
    assertSize(bytes_, size3);
    bytes_ = trimLeft(bytes_);
  }
  if (bytes_.length > 1 || bytes_[0] > 1)
    throw new InvalidBytesBooleanError(bytes_);
  return Boolean(bytes_[0]);
}
toBoolean.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex(value, options = {}) {
  return fromBytes(value, options);
}
toHex.parseError = (error) => error;
function toNumber2(bytes, options = {}) {
  const { size: size3 } = options;
  if (typeof size3 !== "undefined")
    assertSize(bytes, size3);
  const hex = fromBytes(bytes, options);
  return toNumber(hex, options);
}
toNumber2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toString(bytes, options = {}) {
  const { size: size3 } = options;
  let bytes_ = bytes;
  if (typeof size3 !== "undefined") {
    assertSize(bytes_, size3);
    bytes_ = trimRight(bytes_);
  }
  return decoder.decode(bytes_);
}
toString.parseError = (error) => (
  /* v8 ignore next */
  error
);
function trimLeft(value) {
  return trim(value, { dir: "left" });
}
trimLeft.parseError = (error) => error;
function trimRight(value) {
  return trim(value, { dir: "right" });
}
trimRight.parseError = (error) => error;
function validate(value) {
  try {
    assert(value);
    return true;
  } catch {
    return false;
  }
}
validate.parseError = (error) => error;
var InvalidBytesBooleanError = class extends BaseError {
  constructor(bytes) {
    super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
      metaMessages: [
        "The bytes array must contain a single byte of either a `0` or `1` value."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesBooleanError"
    });
  }
};
var InvalidBytesTypeError = class extends BaseError {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
      metaMessages: ["Bytes values must be of type `Bytes`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesTypeError"
    });
  }
};
var SizeOverflowError = class extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError = class extends BaseError {
  constructor({ offset, position, size: size3 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size3}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError {
  constructor({ size: size3, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/ox/_esm/core/Hex.js
var encoder2 = new TextEncoder();
var hexes = Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
function assert2(value, options = {}) {
  const { strict = false } = options;
  if (!value)
    throw new InvalidHexTypeError(value);
  if (typeof value !== "string")
    throw new InvalidHexTypeError(value);
  if (strict) {
    if (!/^0x[0-9a-fA-F]*$/.test(value))
      throw new InvalidHexValueError(value);
  }
  if (!value.startsWith("0x"))
    throw new InvalidHexValueError(value);
}
assert2.parseError = (error) => error;
function concat2(...values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
concat2.parseError = (error) => error;
function from2(value) {
  if (value instanceof Uint8Array)
    return fromBytes(value);
  if (Array.isArray(value))
    return fromBytes(new Uint8Array(value));
  return value;
}
from2.parseError = (error) => error;
function fromBoolean2(value, options = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padLeft2(hex, options.size);
  }
  return hex;
}
fromBoolean2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromBytes(value, options = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++)
    string += hexes[value[i]];
  const hex = `0x${string}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padRight(hex, options.size);
  }
  return hex;
}
fromBytes.parseError = (error) => error;
function fromNumber(value, options = {}) {
  const { signed, size: size3 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size3) {
    if (signed)
      maxValue = (1n << BigInt(size3) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size3) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size3,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size3 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue}`;
  if (size3)
    return padLeft2(hex, size3);
  return hex;
}
fromNumber.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromString2(value, options = {}) {
  return fromBytes(encoder2.encode(value), options);
}
fromString2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function isEqual2(hexA, hexB) {
  return equalBytes(fromHex(hexA), fromHex(hexB));
}
isEqual2.parseError = (error) => error;
function padLeft2(value, size3) {
  return pad2(value, { dir: "left", size: size3 });
}
padLeft2.parseError = (error) => error;
function padRight(value, size3) {
  return pad2(value, { dir: "right", size: size3 });
}
padRight.parseError = (error) => error;
function random2(length) {
  return fromBytes(random(length));
}
random2.parseError = (error) => error;
function slice2(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset2(value, start);
  const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
  if (strict)
    assertEndOffset2(value_, start, end);
  return value_;
}
slice2.parseError = (error) => error;
function size2(value) {
  return Math.ceil((value.length - 2) / 2);
}
size2.parseError = (error) => error;
function trimLeft2(value) {
  return trim2(value, { dir: "left" });
}
trimLeft2.parseError = (error) => error;
function trimRight2(value) {
  return trim2(value, { dir: "right" });
}
trimRight2.parseError = (error) => error;
function toBigInt(hex, options = {}) {
  const { signed } = options;
  if (options.size)
    assertSize2(hex, options.size);
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size3 = (hex.length - 2) / 2;
  const max_unsigned = (1n << BigInt(size3) * 8n) - 1n;
  const max_signed = max_unsigned >> 1n;
  if (value <= max_signed)
    return value;
  return value - max_unsigned - 1n;
}
toBigInt.parseError = (error) => error;
function toBoolean2(hex, options = {}) {
  let hex_ = hex;
  if (options.size) {
    assertSize2(hex, options.size);
    hex_ = trimLeft2(hex_);
  }
  if (trimLeft2(hex_) === "0x00")
    return false;
  if (trimLeft2(hex_) === "0x01")
    return true;
  throw new InvalidHexBooleanError(hex_);
}
toBoolean2.parseError = (error) => error;
function toBytes(hex, options = {}) {
  return fromHex(hex, options);
}
toBytes.parseError = (error) => error;
function toNumber(hex, options = {}) {
  const { signed, size: size3 } = options;
  if (!signed && !size3)
    return Number(hex);
  return Number(toBigInt(hex, options));
}
toNumber.parseError = (error) => error;
function toString2(hex, options = {}) {
  const { size: size3 } = options;
  let bytes = fromHex(hex);
  if (size3) {
    assertSize(bytes, size3);
    bytes = trimRight(bytes);
  }
  return new TextDecoder().decode(bytes);
}
toString2.parseError = (error) => error;
function validate2(value, options = {}) {
  const { strict = false } = options;
  try {
    assert2(value, { strict });
    return true;
  } catch {
    return false;
  }
}
validate2.parseError = (error) => error;
var IntegerOutOfRangeError = class extends BaseError {
  constructor({ max, min, signed, size: size3, value }) {
    super(`Number \`${value}\` is not in safe${size3 ? ` ${size3 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var InvalidHexBooleanError = class extends BaseError {
  constructor(hex) {
    super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
      metaMessages: [
        'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexBooleanError"
    });
  }
};
var InvalidHexTypeError = class extends BaseError {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexTypeError"
    });
  }
};
var InvalidHexValueError = class extends BaseError {
  constructor(value) {
    super(`Value \`${value}\` is an invalid hex value.`, {
      metaMessages: [
        'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexValueError"
    });
  }
};
var SizeOverflowError2 = class extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError2 = class extends BaseError {
  constructor({ offset, position, size: size3 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size3}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError2 = class extends BaseError {
  constructor({ size: size3, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

export {
  concat2 as concat,
  fromBoolean2 as fromBoolean,
  fromBytes,
  fromNumber,
  fromString2 as fromString,
  padLeft2 as padLeft,
  padRight,
  toBigInt,
  toBoolean2 as toBoolean,
  toBytes,
  toNumber,
  toString2 as toString,
  validate2 as validate,
  fromBoolean as fromBoolean2,
  fromHex,
  fromNumber2,
  fromString as fromString2,
  toBigInt2,
  toBoolean as toBoolean2,
  toNumber2,
  toString as toString2
};
//# sourceMappingURL=chunk-Y3WKETHV.js.map
