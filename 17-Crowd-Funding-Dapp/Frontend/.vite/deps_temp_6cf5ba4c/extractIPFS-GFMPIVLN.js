import {
  hexToBytes
} from "./chunk-B7XHB4Z2.js";
import {
  isHex
} from "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/utils/base58/alphabet.js
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

// node_modules/thirdweb/dist/esm/utils/base58/encode.js
var BASE = ALPHABET.length;
var LEADER = (() => ALPHABET.charAt(0))();
var iFACTOR = (() => Math.log(256) / Math.log(BASE))();
function base58Encode(source) {
  if (!(source instanceof Uint8Array)) {
    throw new TypeError("Expected Uint8Array");
  }
  if (source.length === 0) {
    return "";
  }
  let zeroes = 0;
  let length = 0;
  let pbegin = 0;
  const pend = source.length;
  while (pbegin !== pend && source[pbegin] === 0) {
    pbegin++;
    zeroes++;
  }
  const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
  const b58 = new Uint8Array(size);
  while (pbegin !== pend) {
    let carry = source[pbegin] || 0;
    let i = 0;
    for (let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
      carry += 256 * (b58[it1] || 0) >>> 0;
      b58[it1] = carry % BASE >>> 0;
      carry = carry / BASE >>> 0;
    }
    if (carry !== 0) {
      throw new Error("Non-zero carry");
    }
    length = i;
    pbegin++;
  }
  let it2 = size - length;
  while (it2 !== size && b58[it2] === 0) {
    it2++;
  }
  let str = LEADER.repeat(zeroes);
  for (; it2 < size; ++it2) {
    str += ALPHABET.charAt(b58[it2] || 0);
  }
  return str;
}

// node_modules/thirdweb/dist/esm/utils/bytecode/cbor-decode.js
var src;
var srcEnd;
var position = 0;
var EMPTY_ARRAY = [];
var strings = EMPTY_ARRAY;
var stringPosition = 0;
var currentDecoder = {};
var currentStructures;
var srcString;
var srcStringStart = 0;
var srcStringEnd = 0;
var bundledStrings;
var referenceMap;
var currentExtensions = [];
var packedValues;
var dataView;
var defaultOptions = {
  useRecords: false,
  mapsAsObjects: true
};
function readFixedString(length) {
  let result;
  if (length < 16) {
    if (result = shortStringInJS(length))
      return result;
  }
  if (length > 64 && decoder)
    return decoder.decode(src.subarray(position, position += length));
  const end = position + length;
  const units = [];
  result = "";
  while (position < end) {
    const byte1 = src[position++];
    if ((byte1 & 128) === 0) {
      units.push(byte1);
    } else if ((byte1 & 224) === 192) {
      const byte2 = src[position++] & 63;
      units.push((byte1 & 31) << 6 | byte2);
    } else if ((byte1 & 240) === 224) {
      const byte2 = src[position++] & 63;
      const byte3 = src[position++] & 63;
      units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
    } else if ((byte1 & 248) === 240) {
      const byte2 = src[position++] & 63;
      const byte3 = src[position++] & 63;
      const byte4 = src[position++] & 63;
      let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
      if (unit > 65535) {
        unit -= 65536;
        units.push(unit >>> 10 & 1023 | 55296);
        unit = 56320 | unit & 1023;
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= 4096) {
      result += fromCharCode.apply(String, units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += fromCharCode.apply(String, units);
  }
  return result;
}
var Decoder = class _Decoder {
  constructor() {
    Object.assign(this, defaultOptions);
  }
  decodeKey(key) {
    return key;
  }
  decode(source, end = -1) {
    srcEnd = end > -1 ? end : source.length;
    position = 0;
    stringPosition = 0;
    srcStringEnd = 0;
    srcString = null;
    strings = EMPTY_ARRAY;
    bundledStrings = null;
    src = source;
    try {
      dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
    } catch (error) {
      src = null;
      if (source instanceof Uint8Array) {
        throw error;
      }
      throw new Error(`Source must be a Uint8Array or Buffer but was a ${source && typeof source === "object" ? source.constructor.name : typeof source}`);
    }
    if (this instanceof _Decoder) {
      currentDecoder = this;
      packedValues = this.sharedValues && (this.pack ? new Array(this.maxPrivatePackedValues || 16).concat(this.sharedValues) : this.sharedValues);
      if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
    } else {
      currentDecoder = defaultOptions;
      if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
      packedValues = null;
    }
    return checkedRead();
  }
};
function checkedRead() {
  try {
    const result = read();
    if (bundledStrings) {
      if (position >= bundledStrings.postBundlePosition) {
        const error = new Error("Unexpected bundle position");
        error.incomplete = true;
        throw error;
      }
      position = bundledStrings.postBundlePosition;
      bundledStrings = null;
    }
    if (position === srcEnd) {
      currentStructures = null;
      src = null;
      if (referenceMap) {
        referenceMap = null;
      }
    } else if (position > srcEnd) {
      const error = new Error("Unexpected end of CBOR data");
      error.incomplete = true;
      throw error;
    } else {
      throw new Error("Data read, but end of buffer not reached");
    }
    return result;
  } catch (error) {
    clearSource();
    if (error instanceof RangeError || error.message.startsWith("Unexpected end of buffer")) {
      error.incomplete = true;
    }
    throw error;
  }
}
function read() {
  let token = src[position++];
  const majorType = token >> 5;
  token = token & 31;
  if (token > 23) {
    switch (token) {
      case 24:
        token = src[position++];
        break;
      default:
        throw new Error(`Unknown token ${token}`);
    }
  }
  switch (majorType) {
    case 0:
      return token;
    case 1:
      return ~token;
    case 2:
      return readBin(token);
    case 3:
      if (srcStringEnd >= position) {
        return srcString.slice(position - srcStringStart, (position += token) - srcStringStart);
      }
      if (srcStringEnd === 0 && srcEnd < 140 && token < 32) {
        const string = token < 16 ? shortStringInJS(token) : longStringInJS(token);
        if (string !== null) {
          return string;
        }
      }
      return readFixedString(token);
    case 4: {
      const array = new Array(token);
      for (let i = 0; i < token; i++) {
        array[i] = read();
      }
      return array;
    }
    case 5: {
      const object = {};
      for (let i = 0; i < token; i++) {
        object[safeKey(read())] = read();
      }
      return object;
    }
    default:
      if (Number.isNaN(token)) {
        const error = new Error("Unexpected end of CBOR data");
        error.incomplete = true;
        throw error;
      }
      throw new Error(`Unknown CBOR token ${token}`);
  }
}
function safeKey(key) {
  if (typeof key === "string") {
    return key === "__proto__" ? "__proto_" : key;
  }
  if (typeof key !== "object") {
    return key.toString();
  }
  throw new Error(`Invalid property name type ${typeof key}`);
}
var fromCharCode = String.fromCharCode;
function longStringInJS(length) {
  const start = position;
  const bytes = new Array(length);
  for (let i = 0; i < length; i++) {
    const byte = src[position++];
    if ((byte & 128) > 0) {
      position = start;
      return;
    }
    bytes[i] = byte;
  }
  return fromCharCode.apply(String, bytes);
}
function shortStringInJS(length) {
  if (length < 4) {
    if (length < 2) {
      if (length === 0) {
        return "";
      }
      const a3 = src[position++];
      if ((a3 & 128) > 1) {
        position -= 1;
        return;
      }
      return fromCharCode(a3);
    }
    const a2 = src[position++];
    const b2 = src[position++];
    if ((a2 & 128) > 0 || (b2 & 128) > 0) {
      position -= 2;
      return;
    }
    if (length < 3) {
      return fromCharCode(a2, b2);
    }
    const c2 = src[position++];
    if ((c2 & 128) > 0) {
      position -= 3;
      return;
    }
    return fromCharCode(a2, b2, c2);
  }
  const a = src[position++];
  const b = src[position++];
  const c = src[position++];
  const d = src[position++];
  if ((a & 128) > 0 || (b & 128) > 0 || (c & 128) > 0 || (d & 128) > 0) {
    position -= 4;
    return;
  }
  if (length < 6) {
    if (length === 4) {
      return fromCharCode(a, b, c, d);
    }
    const e2 = src[position++];
    if ((e2 & 128) > 0) {
      position -= 5;
      return;
    }
    return fromCharCode(a, b, c, d, e2);
  }
  if (length < 8) {
    const e2 = src[position++];
    const f2 = src[position++];
    if ((e2 & 128) > 0 || (f2 & 128) > 0) {
      position -= 6;
      return;
    }
    if (length < 7) {
      return fromCharCode(a, b, c, d, e2, f2);
    }
    const g2 = src[position++];
    if ((g2 & 128) > 0) {
      position -= 7;
      return;
    }
    return fromCharCode(a, b, c, d, e2, f2, g2);
  }
  const e = src[position++];
  const f = src[position++];
  const g = src[position++];
  const h = src[position++];
  if ((e & 128) > 0 || (f & 128) > 0 || (g & 128) > 0 || (h & 128) > 0) {
    position -= 8;
    return;
  }
  if (length < 10) {
    if (length === 8) {
      return fromCharCode(a, b, c, d, e, f, g, h);
    }
    const i2 = src[position++];
    if ((i2 & 128) > 0) {
      position -= 9;
      return;
    }
    return fromCharCode(a, b, c, d, e, f, g, h, i2);
  }
  if (length < 12) {
    const i2 = src[position++];
    const j2 = src[position++];
    if ((i2 & 128) > 0 || (j2 & 128) > 0) {
      position -= 10;
      return;
    }
    if (length < 11) {
      return fromCharCode(a, b, c, d, e, f, g, h, i2, j2);
    }
    const k2 = src[position++];
    if ((k2 & 128) > 0) {
      position -= 11;
      return;
    }
    return fromCharCode(a, b, c, d, e, f, g, h, i2, j2, k2);
  }
  const i = src[position++];
  const j = src[position++];
  const k = src[position++];
  const l = src[position++];
  if ((i & 128) > 0 || (j & 128) > 0 || (k & 128) > 0 || (l & 128) > 0) {
    position -= 12;
    return;
  }
  if (length < 14) {
    if (length === 12) {
      return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
    }
    const m2 = src[position++];
    if ((m2 & 128) > 0) {
      position -= 13;
      return;
    }
    return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m2);
  }
  const m = src[position++];
  const n = src[position++];
  if ((m & 128) > 0 || (n & 128) > 0) {
    position -= 14;
    return;
  }
  if (length < 15) {
    return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
  }
  const o = src[position++];
  if ((o & 128) > 0) {
    position -= 15;
    return;
  }
  return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
}
function readBin(length) {
  return currentDecoder.copyBuffers ? (
    // specifically use the copying slice (not the node one)
    Uint8Array.prototype.slice.call(src, position, position += length)
  ) : src.subarray(position, position += length);
}
var glbl = { Error, RegExp };
currentExtensions[27] = (data) => {
  return (glbl[data[0]] || Error)(data[1], data[2]);
};
var packedTable = (read_) => {
  if (src[position++] !== 132) {
    const error = new Error("Packed values structure must be followed by a 4 element array");
    if (src.length < position) {
      error.incomplete = true;
    }
    throw error;
  }
  const newPackedValues = read_();
  if (!newPackedValues || !newPackedValues.length) {
    const error = new Error("Packed values structure must be followed by a 4 element array");
    error.incomplete = true;
    throw error;
  }
  packedValues = packedValues ? newPackedValues.concat(packedValues.slice(newPackedValues.length)) : newPackedValues;
  packedValues.prefixes = read_();
  packedValues.suffixes = read_();
  return read_();
};
packedTable.handlesRead = true;
currentExtensions[28] = (read_) => {
  if (!referenceMap) {
    referenceMap = /* @__PURE__ */ new Map();
    referenceMap.id = 0;
  }
  const id = referenceMap.id++;
  const token = src[position];
  let target;
  if (token >> 5 === 4) {
    target = [];
  } else {
    target = {};
  }
  const refEntry = { target };
  referenceMap.set(id, refEntry);
  const targetProperties = read_();
  if (refEntry.used) {
    return Object.assign(target, targetProperties);
  }
  refEntry.target = targetProperties;
  return targetProperties;
};
function clearSource() {
  src = null;
  referenceMap = null;
  currentStructures = null;
}
var mult10 = new Array(147);
for (let i = 0; i < 256; i++) {
  mult10[i] = (() => Number(`1e${Math.floor(45.15 - i * 0.30103)}`))();
}
var defaultDecoder = new Decoder();
var decode = defaultDecoder.decode;

// node_modules/thirdweb/dist/esm/utils/bytecode/prefix.js
function ensureBytecodePrefix(bytecode) {
  if (isHex(bytecode, { strict: false })) {
    return bytecode;
  }
  return `0x${bytecode}`;
}

// node_modules/thirdweb/dist/esm/utils/bytecode/extractIPFS.js
function extractIPFSUri(bytecode) {
  const numericBytecode = hexToBytes(ensureBytecodePrefix(bytecode));
  const cborLength = (
    // @ts-expect-error - TS doesn't like this, but it's fine
    numericBytecode[numericBytecode.length - 2] * 256 + // @ts-expect-error - TS doesn't like this, but it's fine
    numericBytecode[numericBytecode.length - 1]
  );
  const cborStart = numericBytecode.length - 2 - cborLength;
  if (cborStart < 0 || cborStart > numericBytecode.length) {
    return void 0;
  }
  const bytecodeBuffer = numericBytecode.slice(cborStart, -2);
  const cborData = decode(bytecodeBuffer);
  if ("ipfs" in cborData) {
    return `ipfs://${base58Encode(cborData.ipfs)}`;
  }
  return void 0;
}
export {
  extractIPFSUri
};
//# sourceMappingURL=extractIPFS-GFMPIVLN.js.map
