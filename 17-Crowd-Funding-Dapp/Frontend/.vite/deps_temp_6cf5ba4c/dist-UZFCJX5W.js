import {
  sha256
} from "./chunk-O6UZ65WN.js";
import {
  bytesToHex
} from "./chunk-ME5GAE4N.js";
import {
  __commonJS,
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/@noble/hashes/_assert.js
var require_assert = __commonJS({
  "node_modules/@noble/hashes/_assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBytes = isBytes;
    exports.number = number;
    exports.bool = bool;
    exports.bytes = bytes;
    exports.hash = hash;
    exports.exists = exists;
    exports.output = output;
    function number(n2) {
      if (!Number.isSafeInteger(n2) || n2 < 0)
        throw new Error(`positive integer expected, not ${n2}`);
    }
    function bool(b2) {
      if (typeof b2 !== "boolean")
        throw new Error(`boolean expected, not ${b2}`);
    }
    function isBytes(a3) {
      return a3 instanceof Uint8Array || a3 != null && typeof a3 === "object" && a3.constructor.name === "Uint8Array";
    }
    function bytes(b2, ...lengths) {
      if (!isBytes(b2))
        throw new Error("Uint8Array expected");
      if (lengths.length > 0 && !lengths.includes(b2.length))
        throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b2.length}`);
    }
    function hash(h3) {
      if (typeof h3 !== "function" || typeof h3.create !== "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
      number(h3.outputLen);
      number(h3.blockLen);
    }
    function exists(instance, checkFinished = true) {
      if (instance.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance.finished)
        throw new Error("Hash#digest() has already been called");
    }
    function output(out, instance) {
      bytes(out);
      const min = instance.outputLen;
      if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
    }
    var assert = { number, bool, bytes, hash, exists, output };
    exports.default = assert;
  }
});

// node_modules/@noble/hashes/_u64.js
var require_u64 = __commonJS({
  "node_modules/@noble/hashes/_u64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = void 0;
    exports.fromBig = fromBig;
    exports.split = split;
    exports.add = add;
    var U32_MASK64 = BigInt(2 ** 32 - 1);
    var _32n = BigInt(32);
    function fromBig(n2, le = false) {
      if (le)
        return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
      return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
    }
    function split(lst, le = false) {
      let Ah = new Uint32Array(lst.length);
      let Al = new Uint32Array(lst.length);
      for (let i3 = 0; i3 < lst.length; i3++) {
        const { h: h3, l: l3 } = fromBig(lst[i3], le);
        [Ah[i3], Al[i3]] = [h3, l3];
      }
      return [Ah, Al];
    }
    var toBig = (h3, l3) => BigInt(h3 >>> 0) << _32n | BigInt(l3 >>> 0);
    exports.toBig = toBig;
    var shrSH = (h3, _l, s3) => h3 >>> s3;
    exports.shrSH = shrSH;
    var shrSL = (h3, l3, s3) => h3 << 32 - s3 | l3 >>> s3;
    exports.shrSL = shrSL;
    var rotrSH = (h3, l3, s3) => h3 >>> s3 | l3 << 32 - s3;
    exports.rotrSH = rotrSH;
    var rotrSL = (h3, l3, s3) => h3 << 32 - s3 | l3 >>> s3;
    exports.rotrSL = rotrSL;
    var rotrBH = (h3, l3, s3) => h3 << 64 - s3 | l3 >>> s3 - 32;
    exports.rotrBH = rotrBH;
    var rotrBL = (h3, l3, s3) => h3 >>> s3 - 32 | l3 << 64 - s3;
    exports.rotrBL = rotrBL;
    var rotr32H = (_h, l3) => l3;
    exports.rotr32H = rotr32H;
    var rotr32L = (h3, _l) => h3;
    exports.rotr32L = rotr32L;
    var rotlSH = (h3, l3, s3) => h3 << s3 | l3 >>> 32 - s3;
    exports.rotlSH = rotlSH;
    var rotlSL = (h3, l3, s3) => l3 << s3 | h3 >>> 32 - s3;
    exports.rotlSL = rotlSL;
    var rotlBH = (h3, l3, s3) => l3 << s3 - 32 | h3 >>> 64 - s3;
    exports.rotlBH = rotlBH;
    var rotlBL = (h3, l3, s3) => h3 << s3 - 32 | l3 >>> 64 - s3;
    exports.rotlBL = rotlBL;
    function add(Ah, Al, Bh, Bl) {
      const l3 = (Al >>> 0) + (Bl >>> 0);
      return { h: Ah + Bh + (l3 / 2 ** 32 | 0) | 0, l: l3 | 0 };
    }
    var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    exports.add3L = add3L;
    var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
    exports.add3H = add3H;
    var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    exports.add4L = add4L;
    var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
    exports.add4H = add4H;
    var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    exports.add5L = add5L;
    var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
    exports.add5H = add5H;
    var u64 = {
      fromBig,
      split,
      toBig,
      shrSH,
      shrSL,
      rotrSH,
      rotrSL,
      rotrBH,
      rotrBL,
      rotr32H,
      rotr32L,
      rotlSH,
      rotlSL,
      rotlBH,
      rotlBL,
      add,
      add3L,
      add3H,
      add4L,
      add4H,
      add5H,
      add5L
    };
    exports.default = u64;
  }
});

// node_modules/@noble/hashes/crypto.js
var require_crypto = __commonJS({
  "node_modules/@noble/hashes/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crypto = void 0;
    exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  }
});

// node_modules/@noble/hashes/utils.js
var require_utils = __commonJS({
  "node_modules/@noble/hashes/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.byteSwap = exports.isLE = exports.rotl = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
    exports.isBytes = isBytes;
    exports.byteSwap32 = byteSwap32;
    exports.bytesToHex = bytesToHex2;
    exports.hexToBytes = hexToBytes;
    exports.asyncLoop = asyncLoop;
    exports.utf8ToBytes = utf8ToBytes;
    exports.toBytes = toBytes;
    exports.concatBytes = concatBytes;
    exports.checkOpts = checkOpts;
    exports.wrapConstructor = wrapConstructor;
    exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
    exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
    exports.randomBytes = randomBytes;
    var crypto_1 = require_crypto();
    var _assert_js_1 = require_assert();
    function isBytes(a3) {
      return a3 instanceof Uint8Array || a3 != null && typeof a3 === "object" && a3.constructor.name === "Uint8Array";
    }
    var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.u8 = u8;
    var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    exports.u32 = u32;
    var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.createView = createView;
    var rotr = (word, shift) => word << 32 - shift | word >>> shift;
    exports.rotr = rotr;
    var rotl = (word, shift) => word << shift | word >>> 32 - shift >>> 0;
    exports.rotl = rotl;
    exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    var byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
    exports.byteSwap = byteSwap;
    exports.byteSwapIfBE = exports.isLE ? (n2) => n2 : (n2) => (0, exports.byteSwap)(n2);
    function byteSwap32(arr) {
      for (let i3 = 0; i3 < arr.length; i3++) {
        arr[i3] = (0, exports.byteSwap)(arr[i3]);
      }
    }
    var hexes = Array.from({ length: 256 }, (_2, i3) => i3.toString(16).padStart(2, "0"));
    function bytesToHex2(bytes) {
      (0, _assert_js_1.bytes)(bytes);
      let hex = "";
      for (let i3 = 0; i3 < bytes.length; i3++) {
        hex += hexes[bytes[i3]];
      }
      return hex;
    }
    var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
      }
      return array;
    }
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i3 = 0; i3 < iters; i3++) {
        cb(i3);
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts += diff;
      }
    }
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    function toBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      (0, _assert_js_1.bytes)(data);
      return data;
    }
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i3 = 0; i3 < arrays.length; i3++) {
        const a3 = arrays[i3];
        (0, _assert_js_1.bytes)(a3);
        sum += a3.length;
      }
      const res = new Uint8Array(sum);
      for (let i3 = 0, pad = 0; i3 < arrays.length; i3++) {
        const a3 = arrays[i3];
        res.set(a3, pad);
        pad += a3.length;
      }
      return res;
    }
    var Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
    exports.Hash = Hash;
    var toStr = {}.toString;
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    function wrapConstructor(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
    }
    function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    function wrapXOFConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    function randomBytes(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === "function") {
        return crypto_1.crypto.randomBytes(bytesLength);
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
  }
});

// node_modules/@noble/hashes/sha3.js
var require_sha3 = __commonJS({
  "node_modules/@noble/hashes/sha3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
    exports.keccakP = keccakP;
    var _assert_js_1 = require_assert();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils();
    var SHA3_PI = [];
    var SHA3_ROTL = [];
    var _SHA3_IOTA = [];
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _7n = BigInt(7);
    var _256n = BigInt(256);
    var _0x71n = BigInt(113);
    for (let round = 0, R = _1n, x2 = 1, y3 = 0; round < 24; round++) {
      [x2, y3] = [y3, (2 * x2 + 3 * y3) % 5];
      SHA3_PI.push(2 * (5 * y3 + x2));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t3 = _0n;
      for (let j3 = 0; j3 < 7; j3++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t3 ^= _1n << (_1n << BigInt(j3)) - _1n;
      }
      _SHA3_IOTA.push(t3);
    }
    var [SHA3_IOTA_H, SHA3_IOTA_L] = (0, _u64_js_1.split)(_SHA3_IOTA, true);
    var rotlH = (h3, l3, s3) => s3 > 32 ? (0, _u64_js_1.rotlBH)(h3, l3, s3) : (0, _u64_js_1.rotlSH)(h3, l3, s3);
    var rotlL = (h3, l3, s3) => s3 > 32 ? (0, _u64_js_1.rotlBL)(h3, l3, s3) : (0, _u64_js_1.rotlSL)(h3, l3, s3);
    function keccakP(s3, rounds = 24) {
      const B3 = new Uint32Array(5 * 2);
      for (let round = 24 - rounds; round < 24; round++) {
        for (let x2 = 0; x2 < 10; x2++)
          B3[x2] = s3[x2] ^ s3[x2 + 10] ^ s3[x2 + 20] ^ s3[x2 + 30] ^ s3[x2 + 40];
        for (let x2 = 0; x2 < 10; x2 += 2) {
          const idx1 = (x2 + 8) % 10;
          const idx0 = (x2 + 2) % 10;
          const B0 = B3[idx0];
          const B1 = B3[idx0 + 1];
          const Th = rotlH(B0, B1, 1) ^ B3[idx1];
          const Tl = rotlL(B0, B1, 1) ^ B3[idx1 + 1];
          for (let y3 = 0; y3 < 50; y3 += 10) {
            s3[x2 + y3] ^= Th;
            s3[x2 + y3 + 1] ^= Tl;
          }
        }
        let curH = s3[2];
        let curL = s3[3];
        for (let t3 = 0; t3 < 24; t3++) {
          const shift = SHA3_ROTL[t3];
          const Th = rotlH(curH, curL, shift);
          const Tl = rotlL(curH, curL, shift);
          const PI = SHA3_PI[t3];
          curH = s3[PI];
          curL = s3[PI + 1];
          s3[PI] = Th;
          s3[PI + 1] = Tl;
        }
        for (let y3 = 0; y3 < 50; y3 += 10) {
          for (let x2 = 0; x2 < 10; x2++)
            B3[x2] = s3[y3 + x2];
          for (let x2 = 0; x2 < 10; x2++)
            s3[y3 + x2] ^= ~B3[(x2 + 2) % 10] & B3[(x2 + 4) % 10];
        }
        s3[0] ^= SHA3_IOTA_H[round];
        s3[1] ^= SHA3_IOTA_L[round];
      }
      B3.fill(0);
    }
    var Keccak = class _Keccak extends utils_js_1.Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.number)(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
      }
      keccak() {
        if (!utils_js_1.isLE)
          (0, utils_js_1.byteSwap32)(this.state32);
        keccakP(this.state32, this.rounds);
        if (!utils_js_1.isLE)
          (0, utils_js_1.byteSwap32)(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const { blockLen, state } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i3 = 0; i3 < take; i3++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        (0, _assert_js_1.exists)(this, false);
        (0, _assert_js_1.bytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        (0, _assert_js_1.number)(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        (0, _assert_js_1.output)(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    exports.Keccak = Keccak;
    var gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
    exports.sha3_224 = gen(6, 144, 224 / 8);
    exports.sha3_256 = gen(6, 136, 256 / 8);
    exports.sha3_384 = gen(6, 104, 384 / 8);
    exports.sha3_512 = gen(6, 72, 512 / 8);
    exports.keccak_224 = gen(1, 144, 224 / 8);
    exports.keccak_256 = gen(1, 136, 256 / 8);
    exports.keccak_384 = gen(1, 104, 384 / 8);
    exports.keccak_512 = gen(1, 72, 512 / 8);
    var genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    exports.shake128 = genShake(31, 168, 128 / 8);
    exports.shake256 = genShake(31, 136, 256 / 8);
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.cjs
var require_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.cjs"(exports, module) {
    var { keccak_256 } = require_sha3();
    function zeros(bytes) {
      return Buffer.allocUnsafe(bytes).fill(0);
    }
    function bitLengthFromBigInt(num) {
      return num.toString(2).length;
    }
    function bufferBEFromBigInt(num, length) {
      let hex = num.toString(16);
      if (hex.length % 2 !== 0)
        hex = "0" + hex;
      const byteArray = hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
      while (byteArray.length < length) {
        byteArray.unshift(0);
      }
      return Buffer.from(byteArray);
    }
    function twosFromBigInt(value, width) {
      const isNegative = value < 0n;
      let result;
      if (isNegative) {
        const mask = (1n << BigInt(width)) - 1n;
        result = (~value & mask) + 1n;
      } else {
        result = value;
      }
      result &= (1n << BigInt(width)) - 1n;
      return result;
    }
    function setLength(msg, length, right) {
      const buf = zeros(length);
      msg = toBuffer(msg);
      if (right) {
        if (msg.length < length) {
          msg.copy(buf);
          return buf;
        }
        return msg.slice(0, length);
      } else {
        if (msg.length < length) {
          msg.copy(buf, length - msg.length);
          return buf;
        }
        return msg.slice(-length);
      }
    }
    function setLengthRight(msg, length) {
      return setLength(msg, length, true);
    }
    function toBuffer(v3) {
      if (!Buffer.isBuffer(v3)) {
        if (Array.isArray(v3)) {
          v3 = Buffer.from(v3);
        } else if (typeof v3 === "string") {
          if (isHexString2(v3)) {
            v3 = Buffer.from(padToEven(stripHexPrefix(v3)), "hex");
          } else {
            v3 = Buffer.from(v3);
          }
        } else if (typeof v3 === "number") {
          v3 = intToBuffer(v3);
        } else if (v3 === null || v3 === void 0) {
          v3 = Buffer.allocUnsafe(0);
        } else if (typeof v3 === "bigint") {
          v3 = bufferBEFromBigInt(v3);
        } else if (v3.toArray) {
          v3 = Buffer.from(v3.toArray());
        } else {
          throw new Error("invalid type");
        }
      }
      return v3;
    }
    function bufferToHex(buf) {
      buf = toBuffer(buf);
      return "0x" + buf.toString("hex");
    }
    function keccak(a3, bits) {
      a3 = toBuffer(a3);
      if (!bits)
        bits = 256;
      if (bits !== 256) {
        throw new Error("unsupported");
      }
      return Buffer.from(keccak_256(new Uint8Array(a3)));
    }
    function padToEven(str) {
      return str.length % 2 ? "0" + str : str;
    }
    function isHexString2(str) {
      return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
    }
    function stripHexPrefix(str) {
      if (typeof str === "string" && str.startsWith("0x")) {
        return str.slice(2);
      }
      return str;
    }
    module.exports = {
      zeros,
      setLength,
      setLengthRight,
      isHexString: isHexString2,
      stripHexPrefix,
      toBuffer,
      bufferToHex,
      keccak,
      bitLengthFromBigInt,
      bufferBEFromBigInt,
      twosFromBigInt
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.cjs
var require_abi = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.cjs"(exports, module) {
    var util = require_util();
    function elementaryName(name) {
      if (name.startsWith("int[")) {
        return "int256" + name.slice(3);
      } else if (name === "int") {
        return "int256";
      } else if (name.startsWith("uint[")) {
        return "uint256" + name.slice(4);
      } else if (name === "uint") {
        return "uint256";
      } else if (name.startsWith("fixed[")) {
        return "fixed128x128" + name.slice(5);
      } else if (name === "fixed") {
        return "fixed128x128";
      } else if (name.startsWith("ufixed[")) {
        return "ufixed128x128" + name.slice(6);
      } else if (name === "ufixed") {
        return "ufixed128x128";
      }
      return name;
    }
    function parseTypeN(type) {
      return Number.parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
    }
    function parseTypeNxM(type) {
      var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
      return [Number.parseInt(tmp[1], 10), Number.parseInt(tmp[2], 10)];
    }
    function parseTypeArray(type) {
      var tmp = type.match(/(.*)\[(.*?)\]$/);
      if (tmp) {
        return tmp[2] === "" ? "dynamic" : Number.parseInt(tmp[2], 10);
      }
      return null;
    }
    function parseNumber(arg) {
      var type = typeof arg;
      if (type === "string" || type === "number") {
        return BigInt(arg);
      } else if (type === "bigint") {
        return arg;
      } else {
        throw new Error("Argument is not a number");
      }
    }
    function encodeSingle(type, arg) {
      var size, num, ret, i3;
      if (type === "address") {
        return encodeSingle("uint160", parseNumber(arg));
      } else if (type === "bool") {
        return encodeSingle("uint8", arg ? 1 : 0);
      } else if (type === "string") {
        return encodeSingle("bytes", new Buffer(arg, "utf8"));
      } else if (isArray(type)) {
        if (typeof arg.length === "undefined") {
          throw new Error("Not an array?");
        }
        size = parseTypeArray(type);
        if (size !== "dynamic" && size !== 0 && arg.length > size) {
          throw new Error("Elements exceed array size: " + size);
        }
        ret = [];
        type = type.slice(0, type.lastIndexOf("["));
        if (typeof arg === "string") {
          arg = JSON.parse(arg);
        }
        for (i3 in arg) {
          ret.push(encodeSingle(type, arg[i3]));
        }
        if (size === "dynamic") {
          var length = encodeSingle("uint256", arg.length);
          ret.unshift(length);
        }
        return Buffer.concat(ret);
      } else if (type === "bytes") {
        arg = new Buffer(arg);
        ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
        if (arg.length % 32 !== 0) {
          ret = Buffer.concat([ret, util.zeros(32 - arg.length % 32)]);
        }
        return ret;
      } else if (type.startsWith("bytes")) {
        size = parseTypeN(type);
        if (size < 1 || size > 32) {
          throw new Error("Invalid bytes<N> width: " + size);
        }
        return util.setLengthRight(arg, 32);
      } else if (type.startsWith("uint")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) {
          throw new Error("Invalid uint<N> width: " + size);
        }
        num = parseNumber(arg);
        const bitLength = util.bitLengthFromBigInt(num);
        if (bitLength > size) {
          throw new Error("Supplied uint exceeds width: " + size + " vs " + bitLength);
        }
        if (num < 0) {
          throw new Error("Supplied uint is negative");
        }
        return util.bufferBEFromBigInt(num, 32);
      } else if (type.startsWith("int")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) {
          throw new Error("Invalid int<N> width: " + size);
        }
        num = parseNumber(arg);
        const bitLength = util.bitLengthFromBigInt(num);
        if (bitLength > size) {
          throw new Error("Supplied int exceeds width: " + size + " vs " + bitLength);
        }
        const twos = util.twosFromBigInt(num, 256);
        return util.bufferBEFromBigInt(twos, 32);
      } else if (type.startsWith("ufixed")) {
        size = parseTypeNxM(type);
        num = parseNumber(arg);
        if (num < 0) {
          throw new Error("Supplied ufixed is negative");
        }
        return encodeSingle("uint256", num * BigInt(2) ** BigInt(size[1]));
      } else if (type.startsWith("fixed")) {
        size = parseTypeNxM(type);
        return encodeSingle("int256", parseNumber(arg) * BigInt(2) ** BigInt(size[1]));
      }
      throw new Error("Unsupported or invalid type: " + type);
    }
    function isDynamic(type) {
      return type === "string" || type === "bytes" || parseTypeArray(type) === "dynamic";
    }
    function isArray(type) {
      return type.lastIndexOf("]") === type.length - 1;
    }
    function rawEncode(types, values) {
      var output = [];
      var data = [];
      var headLength = 32 * types.length;
      for (var i3 in types) {
        var type = elementaryName(types[i3]);
        var value = values[i3];
        var cur = encodeSingle(type, value);
        if (isDynamic(type)) {
          output.push(encodeSingle("uint256", headLength));
          data.push(cur);
          headLength += cur.length;
        } else {
          output.push(cur);
        }
      }
      return Buffer.concat(output.concat(data));
    }
    function solidityPack(types, values) {
      if (types.length !== values.length) {
        throw new Error("Number of types are not matching the values");
      }
      var size, num;
      var ret = [];
      for (var i3 = 0; i3 < types.length; i3++) {
        var type = elementaryName(types[i3]);
        var value = values[i3];
        if (type === "bytes") {
          ret.push(value);
        } else if (type === "string") {
          ret.push(new Buffer(value, "utf8"));
        } else if (type === "bool") {
          ret.push(new Buffer(value ? "01" : "00", "hex"));
        } else if (type === "address") {
          ret.push(util.setLength(value, 20));
        } else if (type.startsWith("bytes")) {
          size = parseTypeN(type);
          if (size < 1 || size > 32) {
            throw new Error("Invalid bytes<N> width: " + size);
          }
          ret.push(util.setLengthRight(value, size));
        } else if (type.startsWith("uint")) {
          size = parseTypeN(type);
          if (size % 8 || size < 8 || size > 256) {
            throw new Error("Invalid uint<N> width: " + size);
          }
          num = parseNumber(value);
          const bitLength = util.bitLengthFromBigInt(num);
          if (bitLength > size) {
            throw new Error("Supplied uint exceeds width: " + size + " vs " + bitLength);
          }
          ret.push(util.bufferBEFromBigInt(num, size / 8));
        } else if (type.startsWith("int")) {
          size = parseTypeN(type);
          if (size % 8 || size < 8 || size > 256) {
            throw new Error("Invalid int<N> width: " + size);
          }
          num = parseNumber(value);
          const bitLength = util.bitLengthFromBigInt(num);
          if (bitLength > size) {
            throw new Error("Supplied int exceeds width: " + size + " vs " + bitLength);
          }
          const twos = util.twosFromBigInt(num, size);
          ret.push(util.bufferBEFromBigInt(twos, size / 8));
        } else {
          throw new Error("Unsupported or invalid type: " + type);
        }
      }
      return Buffer.concat(ret);
    }
    function soliditySHA3(types, values) {
      return util.keccak(solidityPack(types, values));
    }
    module.exports = {
      rawEncode,
      solidityPack,
      soliditySHA3
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.cjs
var require_eth_eip712_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.cjs"(exports, module) {
    var util = require_util();
    var abi = require_abi();
    var TYPED_MESSAGE_SCHEMA = {
      type: "object",
      properties: {
        types: {
          type: "object",
          additionalProperties: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                type: { type: "string" }
              },
              required: ["name", "type"]
            }
          }
        },
        primaryType: { type: "string" },
        domain: { type: "object" },
        message: { type: "object" }
      },
      required: ["types", "primaryType", "domain", "message"]
    };
    var TypedDataUtils = {
      /**
       * Encodes an object by encoding and concatenating each of its members
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of an object
       */
      encodeData(primaryType, data, types, useV4 = true) {
        const encodedTypes = ["bytes32"];
        const encodedValues = [this.hashType(primaryType, types)];
        if (useV4) {
          const encodeField = (name, type, value) => {
            if (types[type] !== void 0) {
              return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util.keccak(this.encodeData(type, value, types, useV4))];
            }
            if (value === void 0)
              throw new Error(`missing value for field ${name} of type ${type}`);
            if (type === "bytes") {
              return ["bytes32", util.keccak(value)];
            }
            if (type === "string") {
              if (typeof value === "string") {
                value = Buffer.from(value, "utf8");
              }
              return ["bytes32", util.keccak(value)];
            }
            if (type.lastIndexOf("]") === type.length - 1) {
              const parsedType = type.slice(0, type.lastIndexOf("["));
              const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
              return ["bytes32", util.keccak(abi.rawEncode(
                typeValuePairs.map(([type2]) => type2),
                typeValuePairs.map(([, value2]) => value2)
              ))];
            }
            return [type, value];
          };
          for (const field of types[primaryType]) {
            const [type, value] = encodeField(field.name, field.type, data[field.name]);
            encodedTypes.push(type);
            encodedValues.push(value);
          }
        } else {
          for (const field of types[primaryType]) {
            let value = data[field.name];
            if (value !== void 0) {
              if (field.type === "bytes") {
                encodedTypes.push("bytes32");
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (field.type === "string") {
                encodedTypes.push("bytes32");
                if (typeof value === "string") {
                  value = Buffer.from(value, "utf8");
                }
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (types[field.type] !== void 0) {
                encodedTypes.push("bytes32");
                value = util.keccak(this.encodeData(field.type, value, types, useV4));
                encodedValues.push(value);
              } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
                throw new Error("Arrays currently unimplemented in encodeData");
              } else {
                encodedTypes.push(field.type);
                encodedValues.push(value);
              }
            }
          }
        }
        return abi.rawEncode(encodedTypes, encodedValues);
      },
      /**
       * Encodes the type of an object by encoding a comma delimited list of its members
       *
       * @param {string} primaryType - Root type to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of the type of an object
       */
      encodeType(primaryType, types) {
        let result = "";
        let deps = this.findTypeDependencies(primaryType, types).filter((dep) => dep !== primaryType);
        deps = [primaryType].concat(deps.sort());
        for (const type of deps) {
          const children = types[type];
          if (!children) {
            throw new Error("No type definition specified: " + type);
          }
          result += type + "(" + types[type].map(({ name, type: type2 }) => type2 + " " + name).join(",") + ")";
        }
        return result;
      },
      /**
       * Finds all types within a type definition object
       *
       * @param {string} primaryType - Root type
       * @param {Object} types - Type definitions
       * @param {Array} results - current set of accumulated types
       * @returns {Array} - Set of all types found in the type definition
       */
      findTypeDependencies(primaryType, types, results = []) {
        primaryType = primaryType.match(/^\w*/)[0];
        if (results.includes(primaryType) || types[primaryType] === void 0) {
          return results;
        }
        results.push(primaryType);
        for (const field of types[primaryType]) {
          for (const dep of this.findTypeDependencies(field.type, types, results)) {
            !results.includes(dep) && results.push(dep);
          }
        }
        return results;
      },
      /**
       * Hashes an object
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to hash
       * @param {Object} types - Type definitions
       * @returns {Buffer} - Hash of an object
       */
      hashStruct(primaryType, data, types, useV4 = true) {
        return util.keccak(this.encodeData(primaryType, data, types, useV4));
      },
      /**
       * Hashes the type of an object
       *
       * @param {string} primaryType - Root type to hash
       * @param {Object} types - Type definitions
       * @returns {string} - Hash of an object
       */
      hashType(primaryType, types) {
        return util.keccak(this.encodeType(primaryType, types));
      },
      /**
       * Removes properties from a message object that are not defined per EIP-712
       *
       * @param {Object} data - typed message object
       * @returns {Object} - typed message object with only allowed fields
       */
      sanitizeData(data) {
        const sanitizedData = {};
        for (const key in TYPED_MESSAGE_SCHEMA.properties) {
          data[key] && (sanitizedData[key] = data[key]);
        }
        if (sanitizedData.types) {
          sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
        }
        return sanitizedData;
      },
      /**
       * Returns the hash of a typed message as per EIP-712 for signing
       *
       * @param {Object} typedData - Types message data to sign
       * @returns {string} - sha3 hash for signing
       */
      hash(typedData, useV4 = true) {
        const sanitizedData = this.sanitizeData(typedData);
        const parts = [Buffer.from("1901", "hex")];
        parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
        if (sanitizedData.primaryType !== "EIP712Domain") {
          parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
        }
        return util.keccak(Buffer.concat(parts));
      }
    };
    module.exports = {
      TYPED_MESSAGE_SCHEMA,
      TypedDataUtils,
      hashForSignTypedDataLegacy: function(msgParams) {
        return typedSignatureHashLegacy(msgParams.data);
      },
      hashForSignTypedData_v3: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data, false);
      },
      hashForSignTypedData_v4: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data);
      }
    };
    function typedSignatureHashLegacy(typedData) {
      const error = new Error("Expect argument to be non-empty array");
      if (typeof typedData !== "object" || !typedData.length)
        throw error;
      const data = typedData.map(function(e3) {
        return e3.type === "bytes" ? util.toBuffer(e3.value) : e3.value;
      });
      const types = typedData.map(function(e3) {
        return e3.type;
      });
      const schema = typedData.map(function(e3) {
        if (!e3.name)
          throw error;
        return e3.type + " " + e3.name;
      });
      return abi.soliditySHA3(
        ["bytes32", "bytes32"],
        [
          abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
          abi.soliditySHA3(types, data)
        ]
      );
    }
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i3 = 0, l3 = handlers.length, ee = new Array(l3); i3 < l3; i3++) {
        ee[i3] = handlers[i3].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a22, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i3;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a22), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a22, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a22, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a22, a3, a4, a5), true;
        }
        for (i3 = 1, args = new Array(len - 1); i3 < len; i3++) {
          args[i3 - 1] = arguments[i3];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j3;
        for (i3 = 0; i3 < length; i3++) {
          if (listeners[i3].once)
            this.removeListener(event, listeners[i3].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i3].fn.call(listeners[i3].context);
              break;
            case 2:
              listeners[i3].fn.call(listeners[i3].context, a1);
              break;
            case 3:
              listeners[i3].fn.call(listeners[i3].context, a1, a22);
              break;
            case 4:
              listeners[i3].fn.call(listeners[i3].context, a1, a22, a3);
              break;
            default:
              if (!args)
                for (j3 = 1, args = new Array(len - 1); j3 < len; j3++) {
                  args[j3 - 1] = arguments[j3];
                }
              listeners[i3].fn.apply(listeners[i3].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i3 = 0, events = [], length = listeners.length; i3 < length; i3++) {
          if (listeners[i3].fn !== fn || once && !listeners[i3].once || context && listeners[i3].context !== context) {
            events.push(listeners[i3]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/assets/wallet-logo.js
var walletLogo = (type, width) => {
  let height;
  switch (type) {
    case "standard":
      height = width;
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      height = width;
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      height = (0.1 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      height = (0.25 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      height = (0.1 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      height = (0.25 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      height = width;
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/storage/ScopedLocalStorage.js
var ScopedLocalStorage = class _ScopedLocalStorage {
  constructor(scope, module) {
    this.scope = scope;
    this.module = module;
  }
  storeObject(key, item) {
    this.setItem(key, JSON.stringify(item));
  }
  loadObject(key) {
    const item = this.getItem(key);
    return item ? JSON.parse(item) : void 0;
  }
  setItem(key, value) {
    localStorage.setItem(this.scopedKey(key), value);
  }
  getItem(key) {
    return localStorage.getItem(this.scopedKey(key));
  }
  removeItem(key) {
    localStorage.removeItem(this.scopedKey(key));
  }
  clear() {
    const prefix = this.scopedKey("");
    const keysToRemove = [];
    for (let i3 = 0; i3 < localStorage.length; i3++) {
      const key = localStorage.key(i3);
      if (typeof key === "string" && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }
  scopedKey(key) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${key}`;
  }
  static clearAll() {
    new _ScopedLocalStorage("CBWSDK").clear();
    new _ScopedLocalStorage("walletlink").clear();
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js
var standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
var errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  "4100": {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  "4902": {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js
var FALLBACK_MESSAGE = "Unspecified error message.";
var JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
  if (code && Number.isInteger(code)) {
    const codeString = code.toString();
    if (hasKey(errorValues, codeString)) {
      return errorValues[codeString].message;
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE;
    }
  }
  return fallbackMessage;
}
function isValidCode(code) {
  if (!Number.isInteger(code)) {
    return false;
  }
  const codeString = code.toString();
  if (errorValues[codeString]) {
    return true;
  }
  if (isJsonRpcServerError(code)) {
    return true;
  }
  return false;
}
function serialize(error, { shouldIncludeStack = false } = {}) {
  const serialized = {};
  if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
    const _error = error;
    serialized.code = _error.code;
    if (_error.message && typeof _error.message === "string") {
      serialized.message = _error.message;
      if (hasKey(_error, "data")) {
        serialized.data = _error.data;
      }
    } else {
      serialized.message = getMessageFromCode(serialized.code);
      serialized.data = { originalError: assignOriginalError(error) };
    }
  } else {
    serialized.code = standardErrorCodes.rpc.internal;
    serialized.message = hasStringProperty(error, "message") ? error.message : FALLBACK_MESSAGE;
    serialized.data = { originalError: assignOriginalError(error) };
  }
  if (shouldIncludeStack) {
    serialized.stack = hasStringProperty(error, "stack") ? error.stack : void 0;
  }
  return serialized;
}
function isJsonRpcServerError(code) {
  return code >= -32099 && code <= -32e3;
}
function assignOriginalError(error) {
  if (error && typeof error === "object" && !Array.isArray(error)) {
    return Object.assign({}, error);
  }
  return error;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
  return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
}

// node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js
var standardErrors = {
  rpc: {
    parse: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.parse, arg),
    invalidRequest: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg),
    invalidParams: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg),
    methodNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg),
    internal: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.internal, arg),
    server: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      }
      const { code } = opts;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    invalidInput: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg),
    resourceNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg),
    resourceUnavailable: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg),
    transactionRejected: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg),
    methodNotSupported: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg),
    limitExceeded: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg)
  },
  provider: {
    userRejectedRequest: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
    },
    unauthorized: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
    },
    unsupportedMethod: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
    },
    disconnected: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
    },
    chainDisconnected: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
    },
    unsupportedChain: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
    },
    custom: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      }
      const { code, message, data } = opts;
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string');
      }
      return new EthereumProviderError(code, message, data);
    }
  }
};
function getEthJsonRpcError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumProviderError(code, message || getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === "string") {
      return [arg];
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      const { message, data } = arg;
      if (message && typeof message !== "string") {
        throw new Error("Must specify string message.");
      }
      return [message || void 0, data];
    }
  }
  return [];
}
var EthereumRpcError = class extends Error {
  constructor(code, message, data) {
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(message);
    this.code = code;
    if (data !== void 0) {
      this.data = data;
    }
  }
};
var EthereumProviderError = class extends EthereumRpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(code, message, data) {
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(code, message, data);
  }
};
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}

// node_modules/@coinbase/wallet-sdk/dist/core/type/index.js
function OpaqueType() {
  return (value) => value;
}
var HexString = OpaqueType();
var AddressString = OpaqueType();
var BigIntString = OpaqueType();
function IntNumber(num) {
  return Math.floor(num);
}
var RegExpString = OpaqueType();

// node_modules/@coinbase/wallet-sdk/dist/core/type/util.js
var INT_STRING_REGEX = /^[0-9]*$/;
var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function randomBytesHex(length) {
  return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
function uint8ArrayToHex(value) {
  return [...value].map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function hexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)));
}
function hexStringFromBuffer(buf, includePrefix = false) {
  const hex = buf.toString("hex");
  return HexString(includePrefix ? `0x${hex}` : hex);
}
function encodeToHexString(str) {
  return hexStringFromBuffer(ensureBuffer(str), true);
}
function bigIntStringFromBigInt(bi) {
  return BigIntString(bi.toString(10));
}
function hexStringFromNumber(num) {
  return HexString(`0x${BigInt(num).toString(16)}`);
}
function has0xPrefix(str) {
  return str.startsWith("0x") || str.startsWith("0X");
}
function strip0x(hex) {
  if (has0xPrefix(hex)) {
    return hex.slice(2);
  }
  return hex;
}
function prepend0x(hex) {
  if (has0xPrefix(hex)) {
    return `0x${hex.slice(2)}`;
  }
  return `0x${hex}`;
}
function isHexString(hex) {
  if (typeof hex !== "string") {
    return false;
  }
  const s3 = strip0x(hex).toLowerCase();
  return HEXADECIMAL_STRING_REGEX.test(s3);
}
function ensureHexString(hex, includePrefix = false) {
  if (typeof hex === "string") {
    const s3 = strip0x(hex).toLowerCase();
    if (HEXADECIMAL_STRING_REGEX.test(s3)) {
      return HexString(includePrefix ? `0x${s3}` : s3);
    }
  }
  throw standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
function ensureEvenLengthHexString(hex, includePrefix = false) {
  let h3 = ensureHexString(hex, false);
  if (h3.length % 2 === 1) {
    h3 = HexString(`0${h3}`);
  }
  return includePrefix ? HexString(`0x${h3}`) : h3;
}
function ensureAddressString(str) {
  if (typeof str === "string") {
    const s3 = strip0x(str).toLowerCase();
    if (isHexString(s3) && s3.length === 40) {
      return AddressString(prepend0x(s3));
    }
  }
  throw standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
function ensureBuffer(str) {
  if (Buffer.isBuffer(str)) {
    return str;
  }
  if (typeof str === "string") {
    if (isHexString(str)) {
      const s3 = ensureEvenLengthHexString(str, false);
      return Buffer.from(s3, "hex");
    }
    return Buffer.from(str, "utf8");
  }
  throw standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
function ensureIntNumber(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return IntNumber(num);
  }
  if (typeof num === "string") {
    if (INT_STRING_REGEX.test(num)) {
      return IntNumber(Number(num));
    }
    if (isHexString(num)) {
      return IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
    }
  }
  throw standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
function ensureBigInt(val) {
  if (val !== null && (typeof val === "bigint" || isBigNumber(val))) {
    return BigInt(val.toString(10));
  }
  if (typeof val === "number") {
    return BigInt(ensureIntNumber(val));
  }
  if (typeof val === "string") {
    if (INT_STRING_REGEX.test(val)) {
      return BigInt(val);
    }
    if (isHexString(val)) {
      return BigInt(ensureEvenLengthHexString(val, true));
    }
  }
  throw standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
function ensureParsedJSONObject(val) {
  if (typeof val === "string") {
    return JSON.parse(val);
  }
  if (typeof val === "object") {
    return val;
  }
  throw standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
function isBigNumber(val) {
  if (val == null || typeof val.constructor !== "function") {
    return false;
  }
  const { constructor } = val;
  return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
}
function getFavicon() {
  const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
  const { protocol, host } = document.location;
  const href = el ? el.getAttribute("href") : null;
  if (!href || href.startsWith("javascript:") || href.startsWith("vbscript:")) {
    return `${protocol}//${host}/favicon.ico`;
  }
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
    return href;
  }
  if (href.startsWith("//")) {
    return protocol + href;
  }
  return `${protocol}//${host}${href}`;
}

// node_modules/@coinbase/wallet-sdk/dist/util/cipher.js
async function generateKeyPair() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, true, ["deriveKey"]);
}
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
  return crypto.subtle.deriveKey({
    name: "ECDH",
    public: peerPublicKey
  }, ownPrivateKey, {
    name: "AES-GCM",
    length: 256
  }, false, ["encrypt", "decrypt"]);
}
async function encrypt(sharedSecret, plainText) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipherText = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, new TextEncoder().encode(plainText));
  return { iv, cipherText };
}
async function decrypt(sharedSecret, { iv, cipherText }) {
  const plainText = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, cipherText);
  return new TextDecoder().decode(plainText);
}
function getFormat(keyType) {
  switch (keyType) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
async function exportKeyToHexString(type, key) {
  const format = getFormat(type);
  const exported = await crypto.subtle.exportKey(format, key);
  return uint8ArrayToHex(new Uint8Array(exported));
}
async function importKeyFromHexString(type, hexString) {
  const format = getFormat(type);
  const arrayBuffer = hexStringToUint8Array(hexString).buffer;
  return await crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
    name: "ECDH",
    namedCurve: "P-256"
  }, true, type === "private" ? ["deriveKey"] : []);
}
async function encryptContent(content, sharedSecret) {
  const serialized = JSON.stringify(content, (_2, value) => {
    if (!(value instanceof Error))
      return value;
    const error = value;
    return Object.assign(Object.assign({}, error.code ? { code: error.code } : {}), { message: error.message });
  });
  return encrypt(sharedSecret, serialized);
}
async function decryptContent(encryptedData, sharedSecret) {
  return JSON.parse(await decrypt(sharedSecret, encryptedData));
}

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWKeyManager.js
var OWN_PRIVATE_KEY = {
  storageKey: "ownPrivateKey",
  keyType: "private"
};
var OWN_PUBLIC_KEY = {
  storageKey: "ownPublicKey",
  keyType: "public"
};
var PEER_PUBLIC_KEY = {
  storageKey: "peerPublicKey",
  keyType: "public"
};
var SCWKeyManager = class {
  constructor() {
    this.storage = new ScopedLocalStorage("CBWSDK", "SCWKeyManager");
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
  }
  async getOwnPublicKey() {
    await this.loadKeysIfNeeded();
    return this.ownPublicKey;
  }
  // returns null if the shared secret is not yet derived
  async getSharedSecret() {
    await this.loadKeysIfNeeded();
    return this.sharedSecret;
  }
  async setPeerPublicKey(key) {
    this.sharedSecret = null;
    this.peerPublicKey = key;
    await this.storeKey(PEER_PUBLIC_KEY, key);
    await this.loadKeysIfNeeded();
  }
  async clear() {
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
    this.storage.removeItem(OWN_PUBLIC_KEY.storageKey);
    this.storage.removeItem(OWN_PRIVATE_KEY.storageKey);
    this.storage.removeItem(PEER_PUBLIC_KEY.storageKey);
  }
  async generateKeyPair() {
    const newKeyPair = await generateKeyPair();
    this.ownPrivateKey = newKeyPair.privateKey;
    this.ownPublicKey = newKeyPair.publicKey;
    await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
    await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
  }
  async loadKeysIfNeeded() {
    if (this.ownPrivateKey === null) {
      this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
    }
    if (this.ownPublicKey === null) {
      this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
    }
    if (this.ownPrivateKey === null || this.ownPublicKey === null) {
      await this.generateKeyPair();
    }
    if (this.peerPublicKey === null) {
      this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
    }
    if (this.sharedSecret === null) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null)
        return;
      this.sharedSecret = await deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
    }
  }
  // storage methods
  async loadKey(item) {
    const key = this.storage.getItem(item.storageKey);
    if (!key)
      return null;
    return importKeyFromHexString(item.keyType, key);
  }
  async storeKey(item, key) {
    const hexString = await exportKeyToHexString(item.keyType, key);
    this.storage.setItem(item.storageKey, hexString);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sdk-info.js
var VERSION = "4.2.2";
var NAME = "@coinbase/wallet-sdk";

// node_modules/@coinbase/wallet-sdk/dist/util/provider.js
async function fetchRPCRequest(request, rpcUrl) {
  const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: "2.0", id: crypto.randomUUID() });
  const res = await window.fetch(rpcUrl, {
    method: "POST",
    body: JSON.stringify(requestBody),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-Cbw-Sdk-Version": VERSION,
      "X-Cbw-Sdk-Platform": NAME
    }
  });
  const { result, error } = await res.json();
  if (error)
    throw error;
  return result;
}
function getCoinbaseInjectedLegacyProvider() {
  const window2 = globalThis;
  return window2.coinbaseWalletExtension;
}
function getInjectedEthereum() {
  var _a, _b;
  try {
    const window2 = globalThis;
    return (_a = window2.ethereum) !== null && _a !== void 0 ? _a : (_b = window2.top) === null || _b === void 0 ? void 0 : _b.ethereum;
  } catch (_c) {
    return void 0;
  }
}
function getCoinbaseInjectedProvider({ metadata, preference }) {
  var _a, _b;
  const { appName, appLogoUrl, appChainIds } = metadata;
  if (preference.options !== "smartWalletOnly") {
    const extension = getCoinbaseInjectedLegacyProvider();
    if (extension) {
      (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds, preference);
      return extension;
    }
  }
  const ethereum = getInjectedEthereum();
  if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
    (_b = ethereum.setAppInfo) === null || _b === void 0 ? void 0 : _b.call(ethereum, appName, appLogoUrl, appChainIds, preference);
    return ethereum;
  }
  return void 0;
}
function checkErrorForInvalidRequestArgs(args) {
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    throw standardErrors.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: args
    });
  }
  const { method, params } = args;
  if (typeof method !== "string" || method.length === 0) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: args
    });
  }
  if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: args
    });
  }
  switch (method) {
    case "eth_sign":
    case "eth_signTypedData_v2":
    case "eth_subscribe":
    case "eth_unsubscribe":
      throw standardErrors.provider.unsupportedMethod();
  }
}

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWSigner.js
var ACCOUNTS_KEY = "accounts";
var ACTIVE_CHAIN_STORAGE_KEY = "activeChain";
var AVAILABLE_CHAINS_STORAGE_KEY = "availableChains";
var WALLET_CAPABILITIES_STORAGE_KEY = "walletCapabilities";
var SCWSigner = class {
  constructor(params) {
    var _a, _b, _c;
    this.metadata = params.metadata;
    this.communicator = params.communicator;
    this.callback = params.callback;
    this.keyManager = new SCWKeyManager();
    this.storage = new ScopedLocalStorage("CBWSDK", "SCWStateManager");
    this.accounts = (_a = this.storage.loadObject(ACCOUNTS_KEY)) !== null && _a !== void 0 ? _a : [];
    this.chain = this.storage.loadObject(ACTIVE_CHAIN_STORAGE_KEY) || {
      id: (_c = (_b = params.metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 1
    };
    this.handshake = this.handshake.bind(this);
    this.request = this.request.bind(this);
    this.createRequestMessage = this.createRequestMessage.bind(this);
    this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
  }
  async handshake(args) {
    var _a, _b;
    const handshakeMessage = await this.createRequestMessage({
      handshake: {
        method: args.method,
        params: Object.assign({}, this.metadata, (_a = args.params) !== null && _a !== void 0 ? _a : {})
      }
    });
    const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
    if ("failure" in response.content)
      throw response.content.failure;
    const peerPublicKey = await importKeyFromHexString("public", response.sender);
    await this.keyManager.setPeerPublicKey(peerPublicKey);
    const decrypted = await this.decryptResponseMessage(response);
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    const accounts = result.value;
    this.accounts = accounts;
    this.storage.storeObject(ACCOUNTS_KEY, accounts);
    (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, "accountsChanged", accounts);
  }
  async request(request) {
    var _a;
    if (this.accounts.length === 0) {
      throw standardErrors.provider.unauthorized();
    }
    switch (request.method) {
      case "eth_requestAccounts":
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "connect", { chainId: hexStringFromNumber(this.chain.id) });
        return this.accounts;
      case "eth_accounts":
        return this.accounts;
      case "eth_coinbase":
        return this.accounts[0];
      case "net_version":
        return this.chain.id;
      case "eth_chainId":
        return hexStringFromNumber(this.chain.id);
      case "wallet_getCapabilities":
        return this.storage.loadObject(WALLET_CAPABILITIES_STORAGE_KEY);
      case "wallet_switchEthereumChain":
        return this.handleSwitchChainRequest(request);
      case "eth_ecRecover":
      case "personal_sign":
      case "personal_ecRecover":
      case "eth_signTransaction":
      case "eth_sendTransaction":
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
      case "wallet_addEthereumChain":
      case "wallet_watchAsset":
      case "wallet_sendCalls":
      case "wallet_showCallsStatus":
      case "wallet_grantPermissions":
        return this.sendRequestToPopup(request);
      default:
        if (!this.chain.rpcUrl)
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        return fetchRPCRequest(request, this.chain.rpcUrl);
    }
  }
  async sendRequestToPopup(request) {
    var _a, _b;
    await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
    const response = await this.sendEncryptedRequest(request);
    const decrypted = await this.decryptResponseMessage(response);
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    return result.value;
  }
  async cleanup() {
    var _a, _b;
    this.storage.clear();
    await this.keyManager.clear();
    this.accounts = [];
    this.chain = {
      id: (_b = (_a = this.metadata.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1
    };
  }
  /**
   * @returns `null` if the request was successful.
   * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
   */
  async handleSwitchChainRequest(request) {
    var _a;
    const params = request.params;
    if (!params || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) {
      throw standardErrors.rpc.invalidParams();
    }
    const chainId = ensureIntNumber(params[0].chainId);
    const localResult = this.updateChain(chainId);
    if (localResult)
      return null;
    const popupResult = await this.sendRequestToPopup(request);
    if (popupResult === null) {
      this.updateChain(chainId);
    }
    return popupResult;
  }
  async sendEncryptedRequest(request) {
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
    }
    const encrypted = await encryptContent({
      action: request,
      chainId: this.chain.id
    }, sharedSecret);
    const message = await this.createRequestMessage({ encrypted });
    return this.communicator.postRequestAndWaitForResponse(message);
  }
  async createRequestMessage(content) {
    const publicKey = await exportKeyToHexString("public", await this.keyManager.getOwnPublicKey());
    return {
      id: crypto.randomUUID(),
      sender: publicKey,
      content,
      timestamp: /* @__PURE__ */ new Date()
    };
  }
  async decryptResponseMessage(message) {
    var _a, _b;
    const content = message.content;
    if ("failure" in content) {
      throw content.failure;
    }
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw standardErrors.provider.unauthorized("Invalid session");
    }
    const response = await decryptContent(content.encrypted, sharedSecret);
    const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
    if (availableChains) {
      const chains = Object.entries(availableChains).map(([id, rpcUrl]) => ({
        id: Number(id),
        rpcUrl
      }));
      this.storage.storeObject(AVAILABLE_CHAINS_STORAGE_KEY, chains);
      this.updateChain(this.chain.id, chains);
    }
    const walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
    if (walletCapabilities) {
      this.storage.storeObject(WALLET_CAPABILITIES_STORAGE_KEY, walletCapabilities);
    }
    return response;
  }
  updateChain(chainId, newAvailableChains) {
    var _a;
    const chains = newAvailableChains !== null && newAvailableChains !== void 0 ? newAvailableChains : this.storage.loadObject(AVAILABLE_CHAINS_STORAGE_KEY);
    const chain = chains === null || chains === void 0 ? void 0 : chains.find((chain2) => chain2.id === chainId);
    if (!chain)
      return false;
    if (chain !== this.chain) {
      this.chain = chain;
      this.storage.storeObject(ACTIVE_CHAIN_STORAGE_KEY, chain);
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "chainChanged", hexStringFromNumber(chain.id));
    }
    return true;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js
var import_eth_eip712_util = __toESM(require_eth_eip712_util(), 1);

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/constants.js
var WALLET_USER_NAME_KEY = "walletUsername";
var LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
var APP_VERSION_KEY = "AppVersion";

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/Web3Response.js
function isErrorResponse(response) {
  return response.errorMessage !== void 0;
}

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkCipher.js
var WalletLinkCipher = class {
  // @param secret hex representation of 32-byte secret
  constructor(secret) {
    this.secret = secret;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(plainText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw Error(`secret must be 256 bits`);
    const ivBytes = crypto.getRandomValues(new Uint8Array(12));
    const secretKey = await crypto.subtle.importKey("raw", hexStringToUint8Array(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
    const enc = new TextEncoder();
    const encryptedResult = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: ivBytes
    }, secretKey, enc.encode(plainText));
    const tagLength = 16;
    const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
    const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
    const authTagBytes = new Uint8Array(authTag);
    const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
    const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
    return uint8ArrayToHex(concatted);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(cipherText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw Error(`secret must be 256 bits`);
    return new Promise((resolve, reject) => {
      void async function() {
        const secretKey = await crypto.subtle.importKey("raw", hexStringToUint8Array(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
        const encrypted = hexStringToUint8Array(cipherText);
        const ivBytes = encrypted.slice(0, 12);
        const authTagBytes = encrypted.slice(12, 28);
        const encryptedPlaintextBytes = encrypted.slice(28);
        const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
        const algo = {
          name: "AES-GCM",
          iv: new Uint8Array(ivBytes)
        };
        try {
          const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
          const decoder = new TextDecoder();
          resolve(decoder.decode(decrypted));
        } catch (err) {
          reject(err);
        }
      }();
    });
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkHTTP.js
var WalletLinkHTTP = class {
  constructor(linkAPIUrl, sessionId, sessionKey) {
    this.linkAPIUrl = linkAPIUrl;
    this.sessionId = sessionId;
    const credentials = `${sessionId}:${sessionKey}`;
    this.auth = `Basic ${btoa(credentials)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(events) {
    return Promise.all(events.map((e3) => fetch(`${this.linkAPIUrl}/events/${e3.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((error) => console.error("Unabled to mark event as failed:", error));
  }
  async fetchUnseenEvents() {
    var _a;
    const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (response.ok) {
      const { events, error } = await response.json();
      if (error) {
        throw new Error(`Check unseen events failed: ${error}`);
      }
      const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e3) => e3.event === "Web3Response").map((e3) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: e3.id,
        event: e3.event,
        data: e3.data
      }))) !== null && _a !== void 0 ? _a : [];
      this.markUnseenEventsAsSeen(responseEvents);
      return responseEvents;
    }
    throw new Error(`Check unseen events failed: ${response.status}`);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkWebSocket.js
var ConnectionState;
(function(ConnectionState2) {
  ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
  ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
  ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (ConnectionState = {}));
var WalletLinkWebSocket = class {
  setConnectionStateListener(listener) {
    this.connectionStateListener = listener;
  }
  setIncomingDataListener(listener) {
    this.incomingDataListener = listener;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(url, WebSocketClass = WebSocket) {
    this.WebSocketClass = WebSocketClass;
    this.webSocket = null;
    this.pendingData = [];
    this.url = url.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket) {
      throw new Error("webSocket object is not null");
    }
    return new Promise((resolve, reject) => {
      var _a;
      let webSocket;
      try {
        this.webSocket = webSocket = new this.WebSocketClass(this.url);
      } catch (err) {
        reject(err);
        return;
      }
      (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
      webSocket.onclose = (evt) => {
        var _a2;
        this.clearWebSocket();
        reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
        (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
      };
      webSocket.onopen = (_2) => {
        var _a2;
        resolve();
        (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTED);
        if (this.pendingData.length > 0) {
          const pending = [...this.pendingData];
          pending.forEach((data) => this.sendData(data));
          this.pendingData = [];
        }
      };
      webSocket.onmessage = (evt) => {
        var _a2, _b;
        if (evt.data === "h") {
          (_a2 = this.incomingDataListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
            type: "Heartbeat"
          });
        } else {
          try {
            const message = JSON.parse(evt.data);
            (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
          } catch (_c) {
          }
        }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var _a;
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.clearWebSocket();
    (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
    this.connectionStateListener = void 0;
    this.incomingDataListener = void 0;
    try {
      webSocket.close();
    } catch (_b) {
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(data) {
    const { webSocket } = this;
    if (!webSocket) {
      this.pendingData.push(data);
      this.connect();
      return;
    }
    webSocket.send(data);
  }
  clearWebSocket() {
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.webSocket = null;
    webSocket.onclose = null;
    webSocket.onerror = null;
    webSocket.onmessage = null;
    webSocket.onopen = null;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkConnection.js
var HEARTBEAT_INTERVAL = 1e4;
var REQUEST_TIMEOUT = 6e4;
var WalletLinkConnection = class {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session, linkAPIUrl, listener }) {
    this.destroyed = false;
    this.lastHeartbeatResponse = 0;
    this.nextReqId = IntNumber(1);
    this._connected = false;
    this._linked = false;
    this.shouldFetchUnseenEventsOnConnect = false;
    this.requestResolutions = /* @__PURE__ */ new Map();
    this.handleSessionMetadataUpdated = (metadata) => {
      if (!metadata)
        return;
      const handlers = /* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          // ChainId and JsonRpcUrl are always updated together
          (v3) => metadata.JsonRpcUrl && this.handleChainUpdated(v3, metadata.JsonRpcUrl)
        ]
      ]);
      handlers.forEach((handler, key) => {
        const value = metadata[key];
        if (value === void 0)
          return;
        handler(value);
      });
    };
    this.handleDestroyed = (__destroyed) => {
      var _a;
      if (__destroyed !== "1")
        return;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
    };
    this.handleAccountUpdated = async (encryptedEthereumAddress) => {
      var _a;
      const address = await this.cipher.decrypt(encryptedEthereumAddress);
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
    };
    this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
      var _a;
      const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
    };
    this.handleWalletUsernameUpdated = async (walletUsername) => {
      this.handleMetadataUpdated(WALLET_USER_NAME_KEY, walletUsername);
    };
    this.handleAppVersionUpdated = async (appVersion) => {
      this.handleMetadataUpdated(APP_VERSION_KEY, appVersion);
    };
    this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
      var _a;
      const chainId = await this.cipher.decrypt(encryptedChainId);
      const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
    };
    this.session = session;
    this.cipher = new WalletLinkCipher(session.secret);
    this.listener = listener;
    const ws = new WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocket);
    ws.setConnectionStateListener(async (state) => {
      let connected = false;
      switch (state) {
        case ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const connect = async () => {
              await new Promise((resolve) => setTimeout(resolve, 5e3));
              if (!this.destroyed) {
                ws.connect().catch(() => {
                  connect();
                });
              }
            };
            connect();
          }
          break;
        case ConnectionState.CONNECTED:
          connected = await this.handleConnected();
          this.updateLastHeartbeat();
          setInterval(() => {
            this.heartbeat();
          }, HEARTBEAT_INTERVAL);
          if (this.shouldFetchUnseenEventsOnConnect) {
            this.fetchUnseenEventsAPI();
          }
          break;
        case ConnectionState.CONNECTING:
          break;
      }
      if (this.connected !== connected) {
        this.connected = connected;
      }
    });
    ws.setIncomingDataListener((m2) => {
      var _a;
      switch (m2.type) {
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        case "IsLinkedOK":
        case "Linked": {
          const linked = m2.type === "IsLinkedOK" ? m2.linked : void 0;
          this.linked = linked || m2.onlineGuests > 0;
          break;
        }
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          this.handleSessionMetadataUpdated(m2.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(m2);
          break;
        }
      }
      if (m2.id !== void 0) {
        (_a = this.requestResolutions.get(m2.id)) === null || _a === void 0 ? void 0 : _a(m2);
      }
    });
    this.ws = ws;
    this.http = new WalletLinkHTTP(linkAPIUrl, session.id, session.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    if (this.destroyed) {
      throw new Error("instance is destroyed");
    }
    this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  async destroy() {
    if (this.destroyed)
      return;
    await this.makeRequest({
      type: "SetSessionConfig",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { __destroyed: "1" }
    }, { timeout: 1e3 });
    this.destroyed = true;
    this.ws.disconnect();
    this.listener = void 0;
  }
  get connected() {
    return this._connected;
  }
  set connected(connected) {
    this._connected = connected;
  }
  get linked() {
    return this._linked;
  }
  set linked(linked) {
    var _a, _b;
    this._linked = linked;
    if (linked)
      (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
  }
  setOnceLinked(callback) {
    return new Promise((resolve) => {
      if (this.linked) {
        callback().then(resolve);
      } else {
        this.onceLinked = () => {
          callback().then(resolve);
          this.onceLinked = void 0;
        };
      }
    });
  }
  async handleIncomingEvent(m2) {
    var _a;
    if (m2.type !== "Event" || m2.event !== "Web3Response") {
      return;
    }
    const decryptedData = await this.cipher.decrypt(m2.data);
    const message = JSON.parse(decryptedData);
    if (message.type !== "WEB3_RESPONSE")
      return;
    const { id, response } = message;
    (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(id, response);
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = true;
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (e3) {
      console.error("Unable to check for unseen events", e3);
    }
  }
  async fetchUnseenEventsAPI() {
    this.shouldFetchUnseenEventsOnConnect = false;
    const responseEvents = await this.http.fetchUnseenEvents();
    responseEvents.forEach((e3) => this.handleIncomingEvent(e3));
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(event, unencryptedData, callWebhook = false) {
    const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
    const message = {
      type: "PublishEvent",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      event,
      data,
      callWebhook
    };
    return this.setOnceLinked(async () => {
      const res = await this.makeRequest(message);
      if (res.type === "Fail") {
        throw new Error(res.error || "failed to publish event");
      }
      return res.eventId;
    });
  }
  sendData(message) {
    this.ws.sendData(JSON.stringify(message));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch (_a) {
    }
  }
  async makeRequest(message, options = { timeout: REQUEST_TIMEOUT }) {
    const reqId = message.id;
    this.sendData(message);
    let timeoutId;
    return Promise.race([
      new Promise((_2, reject) => {
        timeoutId = window.setTimeout(() => {
          reject(new Error(`request ${reqId} timed out`));
        }, options.timeout);
      }),
      new Promise((resolve) => {
        this.requestResolutions.set(reqId, (m2) => {
          clearTimeout(timeoutId);
          resolve(m2);
          this.requestResolutions.delete(reqId);
        });
      })
    ]);
  }
  async handleConnected() {
    const res = await this.makeRequest({
      type: "HostSession",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    });
    if (res.type === "Fail")
      return false;
    this.sendData({
      type: "IsLinked",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id
    });
    this.sendData({
      type: "GetSessionConfig",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id
    });
    return true;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/RelayEventManager.js
var RelayEventManager = class {
  constructor() {
    this._nextRequestId = 0;
    this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const id = this._nextRequestId;
    const idStr = prepend0x(id.toString(16));
    const callback = this.callbacks.get(idStr);
    if (callback) {
      this.callbacks.delete(idStr);
    }
    return id;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/WalletLinkSession.js
var STORAGE_KEY_SESSION_ID = "session:id";
var STORAGE_KEY_SESSION_SECRET = "session:secret";
var STORAGE_KEY_SESSION_LINKED = "session:linked";
var WalletLinkSession = class _WalletLinkSession {
  constructor(storage2, id, secret, linked = false) {
    this.storage = storage2;
    this.id = id;
    this.secret = secret;
    this.key = bytesToHex(sha256(`${id}, ${secret} WalletLink`));
    this._linked = !!linked;
  }
  static create(storage2) {
    const id = randomBytesHex(16);
    const secret = randomBytesHex(32);
    return new _WalletLinkSession(storage2, id, secret).save();
  }
  static load(storage2) {
    const id = storage2.getItem(STORAGE_KEY_SESSION_ID);
    const linked = storage2.getItem(STORAGE_KEY_SESSION_LINKED);
    const secret = storage2.getItem(STORAGE_KEY_SESSION_SECRET);
    if (id && secret) {
      return new _WalletLinkSession(storage2, id, secret, linked === "1");
    }
    return null;
  }
  get linked() {
    return this._linked;
  }
  set linked(val) {
    this._linked = val;
    this.persistLinked();
  }
  save() {
    this.storage.setItem(STORAGE_KEY_SESSION_ID, this.id);
    this.storage.setItem(STORAGE_KEY_SESSION_SECRET, this.secret);
    this.persistLinked();
    return this;
  }
  persistLinked() {
    this.storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/util.js
function isInIFrame() {
  try {
    return window.frameElement !== null;
  } catch (e3) {
    return false;
  }
}
function getLocation() {
  try {
    if (isInIFrame() && window.top) {
      return window.top.location;
    }
    return window.location;
  } catch (e3) {
    return window.location;
  }
}
function isMobileWeb() {
  var _a;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
}
function isDarkMode() {
  var _a, _b;
  return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches) !== null && _b !== void 0 ? _b : false;
}

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset-css.js
var cssReset_css_default = (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset.js
function injectCssReset() {
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(cssReset_css_default));
  document.documentElement.appendChild(styleEl);
}

// node_modules/clsx/dist/clsx.m.js
function r(e3) {
  var t3, f3, n2 = "";
  if ("string" == typeof e3 || "number" == typeof e3)
    n2 += e3;
  else if ("object" == typeof e3)
    if (Array.isArray(e3))
      for (t3 = 0; t3 < e3.length; t3++)
        e3[t3] && (f3 = r(e3[t3])) && (n2 && (n2 += " "), n2 += f3);
    else
      for (t3 in e3)
        e3[t3] && (n2 && (n2 += " "), n2 += t3);
  return n2;
}
function clsx() {
  for (var e3, t3, f3 = 0, n2 = ""; f3 < arguments.length; )
    (e3 = arguments[f3++]) && (t3 = r(e3)) && (n2 && (n2 += " "), n2 += t3);
  return n2;
}

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r2;
var f;
var e;
var c;
var s;
var a;
var h = {};
var v = [];
var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var y = Array.isArray;
function d(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function w(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u3, t3) {
  var i3, o3, r4, f3 = {};
  for (r4 in u3)
    "key" == r4 ? i3 = u3[r4] : "ref" == r4 ? o3 = u3[r4] : f3[r4] = u3[r4];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
    for (r4 in l3.defaultProps)
      void 0 === f3[r4] && (f3[r4] = l3.defaultProps[r4]);
  return g(l3, f3, i3, o3, null);
}
function g(n2, t3, i3, o3, r4) {
  var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
  return null == r4 && null != l.vnode && l.vnode(f3), f3;
}
function b(n2) {
  return n2.children;
}
function k(n2, l3) {
  this.props = n2, this.context = l3;
}
function x(n2, l3) {
  if (null == l3)
    return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return C(n2);
  }
}
function S(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r2)(M);
}
function M() {
  var n2, u3, t3, o3, r4, e3, c3, s3;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (u3 = i.length, o3 = void 0, e3 = (r4 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r4, t3.__n, t3.__P.namespaceURI, 32 & r4.__u ? [e3] : null, c3, null == e3 ? x(r4) : e3, !!(32 & r4.__u), s3), o3.__v = r4.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
  M.__r = 0;
}
function P(n2, l3, u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, p3, y3, d3, w3, _2 = t3 && t3.__k || v, g2 = l3.length;
  for (u3.__d = e3, $(u3, l3, _2), e3 = u3.__d, a3 = 0; a3 < g2; a3++)
    null != (y3 = u3.__k[a3]) && (p3 = -1 === y3.__i ? h : _2[y3.__i] || h, y3.__i = a3, O(n2, y3, p3, i3, o3, r4, f3, e3, c3, s3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 65536 & y3.__u || p3.__k === y3.__k ? e3 = I(y3, e3, n2) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
  u3.__d = e3, u3.__e = w3;
}
function $(n2, l3, u3) {
  var t3, i3, o3, r4, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
  for (n2.__k = [], t3 = 0; t3 < e3; t3++)
    null != (i3 = l3[t3]) && "boolean" != typeof i3 && "function" != typeof i3 ? (r4 = t3 + a3, (i3 = n2.__k[t3] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(b, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = n2, i3.__b = n2.__b + 1, o3 = null, -1 !== (f3 = i3.__i = L(i3, u3, r4, s3)) && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r4 && (f3 == r4 - 1 ? a3-- : f3 == r4 + 1 ? a3++ : (f3 > r4 ? a3-- : a3++, i3.__u |= 65536))) : i3 = n2.__k[t3] = null;
  if (s3)
    for (t3 = 0; t3 < c3; t3++)
      null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
}
function I(n2, l3, u3) {
  var t3, i3;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
      t3[i3] && (t3[i3].__ = n2, l3 = I(t3[i3], l3, u3));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = x(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 === l3.nodeType);
  return l3;
}
function L(n2, l3, u3, t3) {
  var i3 = n2.key, o3 = n2.type, r4 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
  if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
    return u3;
  if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
    for (; r4 >= 0 || f3 < l3.length; ) {
      if (r4 >= 0) {
        if ((e3 = l3[r4]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
          return r4;
        r4--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
          return f3;
        f3++;
      }
    }
  return -1;
}
function T(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || p.test(l3) ? u3 : u3 + "px";
}
function A(n2, l3, u3, t3, i3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
          for (l3 in t3)
            u3 && l3 in u3 || T(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
    else {
      if ("http://www.w3.org/2000/svg" == i3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
    }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t3 = this.l[u3.type + n2];
      if (null == u3.t)
        u3.t = e++;
      else if (u3.t < t3.u)
        return;
      return t3(l.event ? l.event(u3) : u3);
    }
  };
}
function O(n2, u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, h3, v3, p3, w3, _2, g2, m2, x2, C3, S2, M2, $2, I2, H, L2, T2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), r4 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
  n:
    if ("function" == typeof T2)
      try {
        if (m2 = u3.props, x2 = "prototype" in T2 && T2.prototype.render, C3 = (a3 = T2.contextType) && i3[a3.__c], S2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? g2 = (h3 = u3.__c = t3.__c).__ = h3.__E : (x2 ? u3.__c = h3 = new T2(m2, S2) : (u3.__c = h3 = new k(m2, S2), h3.constructor = T2, h3.render = q), C3 && C3.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T2.getDerivedStateFromProps(m2, h3.__s))), p3 = h3.props, w3 = h3.state, h3.__v = u3, v3)
          x2 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (x2 && null == T2.getDerivedStateFromProps && m2 !== p3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, S2) || u3.__v === t3.__v)) {
            for (u3.__v !== t3.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
              n3 && (n3.__ = u3);
            }), M2 = 0; M2 < h3._sb.length; M2++)
              h3.__h.push(h3._sb[M2]);
            h3._sb = [], h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, S2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(p3, w3, _2);
          });
        }
        if (h3.context = S2, h3.props = m2, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x2) {
          for (h3.state = h3.__s, h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++)
            h3.__h.push(h3._sb[H]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++I2 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), x2 && !v3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(p3, w3)), P(n2, y(L2 = null != a3 && a3.type === b && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u3, t3, i3, o3, r4, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g2 && (h3.__E = h3.__ = null);
      } catch (n3) {
        if (u3.__v = null, c3 || null != r4) {
          for (u3.__u |= c3 ? 160 : 128; e3 && 8 === e3.nodeType && e3.nextSibling; )
            e3 = e3.nextSibling;
          r4[r4.indexOf(e3)] = null, u3.__e = e3;
        } else
          u3.__e = t3.__e, u3.__k = t3.__k;
        l.__e(n3, u3, t3);
      }
    else
      null == r4 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r4, f3, c3, s3);
  (a3 = l.diffed) && a3(u3);
}
function j(n2, u3, t3) {
  u3.__d = void 0;
  for (var i3 = 0; i3 < t3.length; i3++)
    N(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function z(u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, v3, p3, d3, _2, g2, m2, b2 = i3.props, k3 = t3.props, C3 = t3.type;
  if ("svg" === C3 ? r4 = "http://www.w3.org/2000/svg" : "math" === C3 ? r4 = "http://www.w3.org/1998/Math/MathML" : r4 || (r4 = "http://www.w3.org/1999/xhtml"), null != f3) {
    for (a3 = 0; a3 < f3.length; a3++)
      if ((_2 = f3[a3]) && "setAttribute" in _2 == !!C3 && (C3 ? _2.localName === C3 : 3 === _2.nodeType)) {
        u3 = _2, f3[a3] = null;
        break;
      }
  }
  if (null == u3) {
    if (null === C3)
      return document.createTextNode(k3);
    u3 = document.createElementNS(r4, C3, k3.is && k3), c3 && (l.__m && l.__m(t3, f3), c3 = false), f3 = null;
  }
  if (null === C3)
    b2 === k3 || c3 && u3.data === k3 || (u3.data = k3);
  else {
    if (f3 = f3 && n.call(u3.childNodes), b2 = i3.props || h, !c3 && null != f3)
      for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++)
        b2[(_2 = u3.attributes[a3]).name] = _2.value;
    for (a3 in b2)
      if (_2 = b2[a3], "children" == a3)
        ;
      else if ("dangerouslySetInnerHTML" == a3)
        p3 = _2;
      else if (!(a3 in k3)) {
        if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3)
          continue;
        A(u3, a3, null, _2, r4);
      }
    for (a3 in k3)
      _2 = k3[a3], "children" == a3 ? d3 = _2 : "dangerouslySetInnerHTML" == a3 ? v3 = _2 : "value" == a3 ? g2 = _2 : "checked" == a3 ? m2 = _2 : c3 && "function" != typeof _2 || b2[a3] === _2 || A(u3, a3, _2, b2[a3], r4);
    if (v3)
      c3 || p3 && (v3.__html === p3.__html || v3.__html === u3.innerHTML) || (u3.innerHTML = v3.__html), t3.__k = [];
    else if (p3 && (u3.innerHTML = ""), P(u3, y(d3) ? d3 : [d3], t3, i3, o3, "foreignObject" === C3 ? "http://www.w3.org/1999/xhtml" : r4, f3, e3, f3 ? f3[0] : i3.__k && x(i3, 0), c3, s3), null != f3)
      for (a3 = f3.length; a3--; )
        w(f3[a3]);
    c3 || (a3 = "value", "progress" === C3 && null == g2 ? u3.removeAttribute("value") : void 0 !== g2 && (g2 !== u3[a3] || "progress" === C3 && !g2 || "option" === C3 && g2 !== b2[a3]) && A(u3, a3, g2, b2[a3], r4), a3 = "checked", void 0 !== m2 && m2 !== u3[a3] && A(u3, a3, m2, b2[a3], r4));
  }
  return u3;
}
function N(n2, u3, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else
      n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function V(n2, u3, t3) {
  var i3, o3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k)
    for (o3 = 0; o3 < i3.length; o3++)
      i3[o3] && V(i3[o3], u3, t3 || "function" != typeof n2.type);
  t3 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function B(u3, t3, i3) {
  var o3, r4, f3, e3;
  l.__ && l.__(u3, t3), r4 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = _(b, null, [u3]), r4 || h, h, t3.namespaceURI, !o3 && i3 ? [i3] : r4 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r4 ? r4.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
}
n = v.slice, l = { __e: function(n2, l3, u3, t3) {
  for (var i3, o3, r4; l3 = l3.__; )
    if ((i3 = l3.__c) && !i3.__)
      try {
        if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r4 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r4 = i3.__d), r4)
          return i3.__E = i3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, k.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), S(this));
}, k.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
}, k.prototype.render = b, i = [], r2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r3;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m = c2.unmount;
var s2 = c2.__;
function d2(n2, t3) {
  c2.__h && c2.__h(r3, n2, o2 || t3), o2 = 0;
  var u3 = r3.__H || (r3.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
}
function h2(n2) {
  return o2 = 1, p2(D, n2);
}
function p2(n2, u3, i3) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r4 = o3.t(t3, n3);
    t3 !== r4 && (o3.__N = [r4, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r3, !r3.u)) {
    var f3 = function(n3, t3, r4) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r4);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r4));
    };
    r3.u = true;
    var c3 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
    r3.componentWillUpdate = function(n3, t3, r4) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r4), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r4);
    }, r3.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function y2(n2, u3) {
  var i3 = d2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r3.__H.__h.push(i3));
}
function j2() {
  for (var n2; n2 = f2.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
      } catch (t3) {
        n2.__H.__h = [], c2.__e(t3, n2.__v);
      }
}
c2.__b = function(n2) {
  r3 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r3 = n2.__c).__H;
  i3 && (u2 === r3 ? (i3.__h = [], r3.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r3;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u2 = r3 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r4) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r4, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m && m(n2);
  var t3, r4 = n2.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r4.__H = void 0, t3 && c2.__e(t3, r4.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r4 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r4, 100);
  k2 && (t3 = requestAnimationFrame(r4));
}
function z2(n2) {
  var t3 = r3, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r3 = t3;
}
function B2(n2) {
  var t3 = r3;
  n2.__c = n2.__(), r3 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r4) {
    return t4 !== n2[r4];
  });
}
function D(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar-css.js
var Snackbar_css_default = (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar.js
var cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
var gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
var Snackbar = class {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
    this.nextItemKey = 0;
    this.root = null;
    this.darkMode = isDarkMode();
  }
  attach(el) {
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-snackbar-root";
    el.appendChild(this.root);
    this.render();
  }
  presentItem(itemProps) {
    const key = this.nextItemKey++;
    this.items.set(key, itemProps);
    this.render();
    return () => {
      this.items.delete(key);
      this.render();
    };
  }
  clear() {
    this.items.clear();
    this.render();
  }
  render() {
    if (!this.root) {
      return;
    }
    B(_(
      "div",
      null,
      _(SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => _(SnackbarInstance, Object.assign({}, itemProps, { key }))))
    ), this.root);
  }
};
var SnackbarContainer = (props) => _(
  "div",
  { class: clsx("-cbwsdk-snackbar-container") },
  _("style", null, Snackbar_css_default),
  _("div", { class: "-cbwsdk-snackbar" }, props.children)
);
var SnackbarInstance = ({ autoExpand, message, menuItems }) => {
  const [hidden, setHidden] = h2(true);
  const [expanded, setExpanded] = h2(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
  y2(() => {
    const timers = [
      window.setTimeout(() => {
        setHidden(false);
      }, 1),
      window.setTimeout(() => {
        setExpanded(true);
      }, 1e4)
    ];
    return () => {
      timers.forEach(window.clearTimeout);
    };
  });
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return _(
    "div",
    { class: clsx("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
    _(
      "div",
      { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
      _("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
      " ",
      _("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
      _(
        "div",
        { class: "-gear-container" },
        !expanded && _(
          "svg",
          { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          _("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
        ),
        _("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
      )
    ),
    menuItems && menuItems.length > 0 && _("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i3) => _(
      "div",
      { class: clsx("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i3 },
      _(
        "svg",
        { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        _("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
      ),
      _("span", { class: clsx("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
    )))
  );
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WalletLinkRelayUI.js
var WalletLinkRelayUI = class {
  constructor() {
    this.attached = false;
    this.snackbar = new Snackbar();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    const el = document.documentElement;
    const container = document.createElement("div");
    container.className = "-cbwsdk-css-reset";
    el.appendChild(container);
    this.snackbar.attach(container);
    this.attached = true;
    injectCssReset();
  }
  showConnecting(options) {
    let snackbarProps;
    if (options.isUnlinkedErrorState) {
      snackbarProps = {
        autoExpand: true,
        message: "Connection lost",
        menuItems: [
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    } else {
      snackbarProps = {
        message: "Confirm on phone",
        menuItems: [
          {
            isRed: true,
            info: "Cancel transaction",
            svgWidth: "11",
            svgHeight: "11",
            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
            defaultFillRule: "inherit",
            defaultClipRule: "inherit",
            onClick: options.onCancel
          },
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    }
    return this.snackbar.presentItem(snackbarProps);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog-css.js
var RedirectDialog_css_default = (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog.js
var RedirectDialog = class {
  constructor() {
    this.root = null;
    this.darkMode = isDarkMode();
  }
  attach() {
    const el = document.documentElement;
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-css-reset";
    el.appendChild(this.root);
    injectCssReset();
  }
  present(props) {
    this.render(props);
  }
  clear() {
    this.render(null);
  }
  render(props) {
    if (!this.root)
      return;
    B(null, this.root);
    if (!props)
      return;
    B(_(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
      this.clear();
    }, darkMode: this.darkMode })), this.root);
  }
};
var RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
  const theme = darkMode ? "dark" : "light";
  return _(
    SnackbarContainer,
    { darkMode },
    _(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      _("style", null, RedirectDialog_css_default),
      _("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
      _(
        "div",
        { class: clsx("-cbwsdk-redirect-dialog-box", theme) },
        _("p", null, title),
        _("button", { onClick: onButtonClick }, buttonText)
      )
    )
  );
};

// node_modules/@coinbase/wallet-sdk/dist/core/constants.js
var CB_KEYS_URL = "https://keys.coinbase.com/connect";
var WALLETLINK_URL = "https://www.walletlink.org";
var CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WLMobileRelayUI.js
var WLMobileRelayUI = class {
  constructor() {
    this.attached = false;
    this.redirectDialog = new RedirectDialog();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    this.redirectDialog.attach();
    this.attached = true;
  }
  redirectToCoinbaseWallet(walletLinkUrl) {
    const url = new URL(CBW_MOBILE_DEEPLINK_URL);
    url.searchParams.append("redirect_url", getLocation().href);
    if (walletLinkUrl) {
      url.searchParams.append("wl_url", walletLinkUrl);
    }
    const anchorTag = document.createElement("a");
    anchorTag.target = "cbw-opener";
    anchorTag.href = url.href;
    anchorTag.rel = "noreferrer noopener";
    anchorTag.click();
  }
  openCoinbaseWalletDeeplink(walletLinkUrl) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(walletLinkUrl);
      }
    });
    setTimeout(() => {
      this.redirectToCoinbaseWallet(walletLinkUrl);
    }, 99);
  }
  showConnecting(_options) {
    return () => {
      this.redirectDialog.clear();
    };
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/WalletLinkRelay.js
var WalletLinkRelay = class _WalletLinkRelay {
  constructor(options) {
    this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
    this.isMobileWeb = isMobileWeb();
    this.linkedUpdated = (linked) => {
      this.isLinked = linked;
      const cachedAddresses = this.storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
      if (linked) {
        this._session.linked = linked;
      }
      this.isUnlinkedErrorState = false;
      if (cachedAddresses) {
        const addresses = cachedAddresses.split(" ");
        const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
        if (addresses[0] !== "" && !linked && this._session.linked && !wasConnectedViaStandalone) {
          this.isUnlinkedErrorState = true;
        }
      }
    };
    this.metadataUpdated = (key, value) => {
      this.storage.setItem(key, value);
    };
    this.chainUpdated = (chainId, jsonRpcUrl) => {
      if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
        return;
      }
      this.chainCallbackParams = {
        chainId,
        jsonRpcUrl
      };
      if (this.chainCallback) {
        this.chainCallback(jsonRpcUrl, Number.parseInt(chainId, 10));
      }
    };
    this.accountUpdated = (selectedAddress) => {
      if (this.accountsCallback) {
        this.accountsCallback([selectedAddress]);
      }
      if (_WalletLinkRelay.accountRequestCallbackIds.size > 0) {
        Array.from(_WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
          this.invokeCallback(id, {
            method: "requestEthereumAccounts",
            result: [selectedAddress]
          });
        });
        _WalletLinkRelay.accountRequestCallbackIds.clear();
      }
    };
    this.resetAndReload = this.resetAndReload.bind(this);
    this.linkAPIUrl = options.linkAPIUrl;
    this.storage = options.storage;
    this.metadata = options.metadata;
    this.accountsCallback = options.accountsCallback;
    this.chainCallback = options.chainCallback;
    const { session, ui, connection } = this.subscribe();
    this._session = session;
    this.connection = connection;
    this.relayEventManager = new RelayEventManager();
    this.ui = ui;
    this.ui.attach();
  }
  subscribe() {
    const session = WalletLinkSession.load(this.storage) || WalletLinkSession.create(this.storage);
    const { linkAPIUrl } = this;
    const connection = new WalletLinkConnection({
      session,
      linkAPIUrl,
      listener: this
    });
    const ui = this.isMobileWeb ? new WLMobileRelayUI() : new WalletLinkRelayUI();
    connection.connect();
    return { session, ui, connection };
  }
  resetAndReload() {
    this.connection.destroy().then(() => {
      const storedSession = WalletLinkSession.load(this.storage);
      if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
        ScopedLocalStorage.clearAll();
      }
      document.location.reload();
    }).catch((_2) => {
    });
  }
  signEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: bigIntStringFromBigInt(params.weiValue),
        data: hexStringFromBuffer(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxPriorityFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: false
      }
    });
  }
  signAndSubmitEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: bigIntStringFromBigInt(params.weiValue),
        data: hexStringFromBuffer(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxFeePerGas: params.maxFeePerGas ? bigIntStringFromBigInt(params.maxFeePerGas) : null,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas ? bigIntStringFromBigInt(params.maxPriorityFeePerGas) : null,
        gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: true
      }
    });
  }
  submitEthereumTransaction(signedTransaction, chainId) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: hexStringFromBuffer(signedTransaction, true),
        chainId
      }
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  sendRequest(request) {
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    return new Promise((resolve, reject) => {
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
          // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  publishWeb3RequestEvent(id, request) {
    const message = { type: "WEB3_REQUEST", id, request };
    this.publishEvent("Web3Request", message, true).then((_2) => {
    }).catch((err) => {
      this.handleWeb3ResponseMessage(message.id, {
        method: request.method,
        errorMessage: err.message
      });
    });
    if (this.isMobileWeb) {
      this.openCoinbaseWalletDeeplink(request.method);
    }
  }
  // copied from MobileRelay
  openCoinbaseWalletDeeplink(method) {
    if (!(this.ui instanceof WLMobileRelayUI))
      return;
    switch (method) {
      case "requestEthereumAccounts":
      case "switchEthereumChain":
        return;
      default:
        window.addEventListener("blur", () => {
          window.addEventListener("focus", () => {
            this.connection.checkUnseenEvents();
          }, { once: true });
        }, { once: true });
        this.ui.openCoinbaseWalletDeeplink();
        break;
    }
  }
  publishWeb3RequestCanceledEvent(id) {
    const message = {
      type: "WEB3_REQUEST_CANCELED",
      id
    };
    this.publishEvent("Web3RequestCanceled", message, false).then();
  }
  publishEvent(event, message, callWebhook) {
    return this.connection.publishEvent(event, message, callWebhook);
  }
  handleWeb3ResponseMessage(id, response) {
    if (response.method === "requestEthereumAccounts") {
      _WalletLinkRelay.accountRequestCallbackIds.forEach((id2) => this.invokeCallback(id2, response));
      _WalletLinkRelay.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(id, response);
  }
  handleErrorResponse(id, method, error) {
    var _a;
    const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Unspecified error message.";
    this.handleWeb3ResponseMessage(id, {
      method,
      errorMessage
    });
  }
  invokeCallback(id, response) {
    const callback = this.relayEventManager.callbacks.get(id);
    if (callback) {
      callback(response);
      this.relayEventManager.callbacks.delete(id);
    }
  }
  requestEthereumAccounts() {
    const { appName, appLogoUrl } = this.metadata;
    const request = {
      method: "requestEthereumAccounts",
      params: {
        appName,
        appLogoUrl
      }
    };
    const hideSnackbarItem = null;
    const id = randomBytesHex(8);
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      _WalletLinkRelay.accountRequestCallbackIds.add(id);
      this.publishWeb3RequestEvent(id, request);
    });
  }
  watchAsset(type, address, symbol, decimals, image, chainId) {
    const request = {
      method: "watchAsset",
      params: {
        type,
        options: {
          address,
          symbol,
          decimals,
          image
        },
        chainId
      }
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
    const request = {
      method: "addEthereumChain",
      params: {
        chainId,
        rpcUrls,
        blockExplorerUrls,
        chainName,
        iconUrls,
        nativeCurrency
      }
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  switchEthereumChain(chainId, address) {
    const request = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId }, { address })
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response) && response.errorCode) {
          return reject(standardErrors.provider.custom({
            code: response.errorCode,
            message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
          }));
        } else if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
};
WalletLinkRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js
var DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
var DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
var WalletLinkSigner = class {
  constructor(options) {
    this._relay = null;
    this._addresses = [];
    this.metadata = options.metadata;
    this._storage = new ScopedLocalStorage("walletlink", WALLETLINK_URL);
    this.callback = options.callback || null;
    const cachedAddresses = this._storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
    if (cachedAddresses) {
      const addresses = cachedAddresses.split(" ");
      if (addresses[0] !== "") {
        this._addresses = addresses.map((address) => ensureAddressString(address));
      }
    }
    this.initializeRelay();
  }
  getSession() {
    const relay = this.initializeRelay();
    const { id, secret } = relay.getWalletLinkSession();
    return { id, secret };
  }
  async handshake() {
    await this._eth_requestAccounts();
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get jsonRpcUrl() {
    var _a;
    return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : void 0;
  }
  set jsonRpcUrl(value) {
    this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
  }
  updateProviderInfo(jsonRpcUrl, chainId) {
    var _a;
    this.jsonRpcUrl = jsonRpcUrl;
    const originalChainId = this.getChainId();
    this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
    const chainChanged = ensureIntNumber(chainId) !== originalChainId;
    if (chainChanged) {
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "chainChanged", hexStringFromNumber(chainId));
    }
  }
  async watchAsset(params) {
    const request = Array.isArray(params) ? params[0] : params;
    if (!request.type) {
      throw standardErrors.rpc.invalidParams("Type is required");
    }
    if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
      throw standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
    }
    if (!(request === null || request === void 0 ? void 0 : request.options)) {
      throw standardErrors.rpc.invalidParams("Options are required");
    }
    if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
      throw standardErrors.rpc.invalidParams("Address is required");
    }
    const chainId = this.getChainId();
    const { address, symbol, image, decimals } = request.options;
    const relay = this.initializeRelay();
    const result = await relay.watchAsset(request.type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
    if (isErrorResponse(result))
      return false;
    return !!result.result;
  }
  async addEthereumChain(params) {
    var _a, _b;
    const request = params[0];
    if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      throw standardErrors.rpc.invalidParams("please pass in at least 1 rpcUrl");
    }
    if (!request.chainName || request.chainName.trim() === "") {
      throw standardErrors.rpc.invalidParams("chainName is a required field");
    }
    if (!request.nativeCurrency) {
      throw standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    }
    const chainIdNumber = Number.parseInt(request.chainId, 16);
    if (chainIdNumber === this.getChainId()) {
      return false;
    }
    const relay = this.initializeRelay();
    const { rpcUrls = [], blockExplorerUrls = [], chainName, iconUrls = [], nativeCurrency } = request;
    const res = await relay.addEthereumChain(chainIdNumber.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
    if (isErrorResponse(res))
      return false;
    if (((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true) {
      this.updateProviderInfo(rpcUrls[0], chainIdNumber);
      return null;
    }
    throw standardErrors.rpc.internal("unable to add ethereum chain");
  }
  async switchEthereumChain(params) {
    const request = params[0];
    const chainId = Number.parseInt(request.chainId, 16);
    const relay = this.initializeRelay();
    const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0);
    if (isErrorResponse(res))
      throw res;
    const switchResponse = res.result;
    if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
      this.updateProviderInfo(switchResponse.rpcUrl, chainId);
    }
    return null;
  }
  async cleanup() {
    this.callback = null;
    if (this._relay) {
      this._relay.resetAndReload();
    }
    this._storage.clear();
  }
  _setAddresses(addresses, _2) {
    var _a;
    if (!Array.isArray(addresses)) {
      throw new Error("addresses is not an array");
    }
    const newAddresses = addresses.map((address) => ensureAddressString(address));
    if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
      return;
    }
    this._addresses = newAddresses;
    (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "accountsChanged", newAddresses);
    this._storage.setItem(LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
  }
  async request(request) {
    const params = request.params || [];
    switch (request.method) {
      case "eth_accounts":
        return [...this._addresses];
      case "eth_coinbase":
        return this.selectedAddress || null;
      case "net_version":
        return this.getChainId().toString(10);
      case "eth_chainId":
        return hexStringFromNumber(this.getChainId());
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_ecRecover":
      case "personal_ecRecover":
        return this.ecRecover(request);
      case "personal_sign":
        return this.personalSign(request);
      case "eth_signTransaction":
        return this._eth_signTransaction(params);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(params);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(params);
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this.signTypedData(request);
      case "wallet_addEthereumChain":
        return this.addEthereumChain(params);
      case "wallet_switchEthereumChain":
        return this.switchEthereumChain(params);
      case "wallet_watchAsset":
        return this.watchAsset(params);
      default:
        if (!this.jsonRpcUrl)
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        return fetchRPCRequest(request, this.jsonRpcUrl);
    }
  }
  _ensureKnownAddress(addressString) {
    const addressStr = ensureAddressString(addressString);
    const lowercaseAddresses = this._addresses.map((address) => ensureAddressString(address));
    if (!lowercaseAddresses.includes(addressStr)) {
      throw new Error("Unknown Ethereum address");
    }
  }
  _prepareTransactionParams(tx) {
    const fromAddress = tx.from ? ensureAddressString(tx.from) : this.selectedAddress;
    if (!fromAddress) {
      throw new Error("Ethereum address is unavailable");
    }
    this._ensureKnownAddress(fromAddress);
    const toAddress = tx.to ? ensureAddressString(tx.to) : null;
    const weiValue = tx.value != null ? ensureBigInt(tx.value) : BigInt(0);
    const data = tx.data ? ensureBuffer(tx.data) : Buffer.alloc(0);
    const nonce = tx.nonce != null ? ensureIntNumber(tx.nonce) : null;
    const gasPriceInWei = tx.gasPrice != null ? ensureBigInt(tx.gasPrice) : null;
    const maxFeePerGas = tx.maxFeePerGas != null ? ensureBigInt(tx.maxFeePerGas) : null;
    const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? ensureBigInt(tx.maxPriorityFeePerGas) : null;
    const gasLimit = tx.gas != null ? ensureBigInt(tx.gas) : null;
    const chainId = tx.chainId ? ensureIntNumber(tx.chainId) : this.getChainId();
    return {
      fromAddress,
      toAddress,
      weiValue,
      data,
      nonce,
      gasPriceInWei,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit,
      chainId
    };
  }
  async ecRecover(request) {
    const { method, params } = request;
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: encodeToHexString(params[0]),
        signature: encodeToHexString(params[1]),
        addPrefix: method === "personal_ecRecover"
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  getChainId() {
    var _a;
    return Number.parseInt((_a = this._storage.getItem(DEFAULT_CHAIN_ID_KEY)) !== null && _a !== void 0 ? _a : "1", 10);
  }
  async _eth_requestAccounts() {
    var _a, _b;
    if (this._addresses.length > 0) {
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "connect", { chainId: hexStringFromNumber(this.getChainId()) });
      return this._addresses;
    }
    const relay = this.initializeRelay();
    const res = await relay.requestEthereumAccounts();
    if (isErrorResponse(res))
      throw res;
    if (!res.result) {
      throw new Error("accounts received is empty");
    }
    this._setAddresses(res.result);
    (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, "connect", { chainId: hexStringFromNumber(this.getChainId()) });
    return this._addresses;
  }
  async personalSign({ params }) {
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const address = params[1];
    const rawData = params[0];
    this._ensureKnownAddress(address);
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "signEthereumMessage",
      params: {
        address: ensureAddressString(address),
        message: encodeToHexString(rawData),
        addPrefix: true,
        typedDataJson: null
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_signTransaction(params) {
    const tx = this._prepareTransactionParams(params[0] || {});
    const relay = this.initializeRelay();
    const res = await relay.signEthereumTransaction(tx);
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_sendRawTransaction(params) {
    const signedTransaction = ensureBuffer(params[0]);
    const relay = this.initializeRelay();
    const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_sendTransaction(params) {
    const tx = this._prepareTransactionParams(params[0] || {});
    const relay = this.initializeRelay();
    const res = await relay.signAndSubmitEthereumTransaction(tx);
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async signTypedData(request) {
    const { method, params } = request;
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const encode = (input) => {
      const hashFuncMap = {
        eth_signTypedData_v1: import_eth_eip712_util.default.hashForSignTypedDataLegacy,
        eth_signTypedData_v3: import_eth_eip712_util.default.hashForSignTypedData_v3,
        eth_signTypedData_v4: import_eth_eip712_util.default.hashForSignTypedData_v4,
        eth_signTypedData: import_eth_eip712_util.default.hashForSignTypedData_v4
      };
      return hexStringFromBuffer(hashFuncMap[method]({
        data: ensureParsedJSONObject(input)
      }), true);
    };
    const address = params[method === "eth_signTypedData_v1" ? 1 : 0];
    const rawData = params[method === "eth_signTypedData_v1" ? 0 : 1];
    this._ensureKnownAddress(address);
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "signEthereumMessage",
      params: {
        address: ensureAddressString(address),
        message: encode(rawData),
        typedDataJson: JSON.stringify(rawData, null, 2),
        addPrefix: false
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  initializeRelay() {
    if (!this._relay) {
      this._relay = new WalletLinkRelay({
        linkAPIUrl: WALLETLINK_URL,
        storage: this._storage,
        metadata: this.metadata,
        accountsCallback: this._setAddresses.bind(this),
        chainCallback: this.updateProviderInfo.bind(this)
      });
    }
    return this._relay;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/util.js
var SIGNER_TYPE_KEY = "SignerType";
var storage = new ScopedLocalStorage("CBWSDK", "SignerConfigurator");
function loadSignerType() {
  return storage.getItem(SIGNER_TYPE_KEY);
}
function storeSignerType(signerType) {
  storage.setItem(SIGNER_TYPE_KEY, signerType);
}
async function fetchSignerType(params) {
  const { communicator, metadata, handshakeRequest, callback } = params;
  listenForWalletLinkSessionRequest(communicator, metadata, callback).catch(() => {
  });
  const request = {
    id: crypto.randomUUID(),
    event: "selectSignerType",
    data: Object.assign(Object.assign({}, params.preference), { handshakeRequest })
  };
  const { data } = await communicator.postRequestAndWaitForResponse(request);
  return data;
}
function createSigner(params) {
  const { signerType, metadata, communicator, callback } = params;
  switch (signerType) {
    case "scw": {
      return new SCWSigner({
        metadata,
        callback,
        communicator
      });
    }
    case "walletlink": {
      return new WalletLinkSigner({
        metadata,
        callback
      });
    }
  }
}
async function listenForWalletLinkSessionRequest(communicator, metadata, callback) {
  await communicator.onMessage(({ event }) => event === "WalletLinkSessionRequest");
  const walletlink = new WalletLinkSigner({
    metadata,
    callback
  });
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { session: walletlink.getSession() }
  });
  await walletlink.handshake();
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { connected: true }
  });
}

// node_modules/@coinbase/wallet-sdk/dist/util/checkCrossOriginOpenerPolicy.js
var COOP_ERROR_MESSAGE = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`;
var createCoopChecker = () => {
  let crossOriginOpenerPolicy;
  return {
    getCrossOriginOpenerPolicy: () => {
      if (crossOriginOpenerPolicy === void 0) {
        return "undefined";
      }
      return crossOriginOpenerPolicy;
    },
    checkCrossOriginOpenerPolicy: async () => {
      if (typeof window === "undefined") {
        crossOriginOpenerPolicy = "non-browser-env";
        return;
      }
      try {
        const url = `${window.location.origin}${window.location.pathname}`;
        const response = await fetch(url, {
          method: "HEAD"
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = response.headers.get("Cross-Origin-Opener-Policy");
        crossOriginOpenerPolicy = result !== null && result !== void 0 ? result : "null";
        if (crossOriginOpenerPolicy === "same-origin") {
          console.error(COOP_ERROR_MESSAGE);
        }
      } catch (error) {
        console.error("Error checking Cross-Origin-Opener-Policy:", error.message);
        crossOriginOpenerPolicy = "error";
      }
    }
  };
};
var { checkCrossOriginOpenerPolicy, getCrossOriginOpenerPolicy } = createCoopChecker();

// node_modules/@coinbase/wallet-sdk/dist/util/web.js
var POPUP_WIDTH = 420;
var POPUP_HEIGHT = 540;
function openPopup(url) {
  const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
  const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
  appendAppInfoQueryParams(url);
  const popup = window.open(url, "Smart Wallet", `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
  popup === null || popup === void 0 ? void 0 : popup.focus();
  if (!popup) {
    throw standardErrors.rpc.internal("Pop up window failed to open");
  }
  return popup;
}
function closePopup(popup) {
  if (popup && !popup.closed) {
    popup.close();
  }
}
function appendAppInfoQueryParams(url) {
  const params = {
    sdkName: NAME,
    sdkVersion: VERSION,
    origin: window.location.origin,
    coop: getCrossOriginOpenerPolicy()
  };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value.toString());
  }
}

// node_modules/@coinbase/wallet-sdk/dist/core/communicator/Communicator.js
var Communicator = class {
  constructor({ url = CB_KEYS_URL, metadata, preference }) {
    this.popup = null;
    this.listeners = /* @__PURE__ */ new Map();
    this.postMessage = async (message) => {
      const popup = await this.waitForPopupLoaded();
      popup.postMessage(message, this.url.origin);
    };
    this.postRequestAndWaitForResponse = async (request) => {
      const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
      this.postMessage(request);
      return await responsePromise;
    };
    this.onMessage = async (predicate) => {
      return new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.origin !== this.url.origin)
            return;
          const message = event.data;
          if (predicate(message)) {
            resolve(message);
            window.removeEventListener("message", listener);
            this.listeners.delete(listener);
          }
        };
        window.addEventListener("message", listener);
        this.listeners.set(listener, { reject });
      });
    };
    this.disconnect = () => {
      closePopup(this.popup);
      this.popup = null;
      this.listeners.forEach(({ reject }, listener) => {
        reject(standardErrors.provider.userRejectedRequest("Request rejected"));
        window.removeEventListener("message", listener);
      });
      this.listeners.clear();
    };
    this.waitForPopupLoaded = async () => {
      if (this.popup && !this.popup.closed) {
        this.popup.focus();
        return this.popup;
      }
      this.popup = openPopup(this.url);
      this.onMessage(({ event }) => event === "PopupUnload").then(this.disconnect).catch(() => {
      });
      return this.onMessage(({ event }) => event === "PopupLoaded").then((message) => {
        this.postMessage({
          requestId: message.id,
          data: {
            version: VERSION,
            metadata: this.metadata,
            preference: this.preference,
            location: window.location.toString()
          }
        });
      }).then(() => {
        if (!this.popup)
          throw standardErrors.rpc.internal();
        return this.popup;
      });
    };
    this.url = new URL(url);
    this.metadata = metadata;
    this.preference = preference;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js
function serializeError(error) {
  const serialized = serialize(getErrorObject(error), {
    shouldIncludeStack: true
  });
  const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  docUrl.searchParams.set("version", VERSION);
  docUrl.searchParams.set("code", serialized.code.toString());
  docUrl.searchParams.set("message", serialized.message);
  return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
function getErrorObject(error) {
  var _a;
  if (typeof error === "string") {
    return {
      message: error,
      code: standardErrorCodes.rpc.internal
    };
  } else if (isErrorResponse(error)) {
    const message = error.errorMessage;
    const code = (_a = error.errorCode) !== null && _a !== void 0 ? _a : message.match(/(denied|rejected)/i) ? standardErrorCodes.provider.userRejectedRequest : void 0;
    return Object.assign(Object.assign({}, error), {
      message,
      code,
      data: { method: error.method }
    });
  }
  return error;
}

// node_modules/eventemitter3/index.mjs
var import_index2 = __toESM(require_eventemitter3(), 1);

// node_modules/@coinbase/wallet-sdk/dist/core/provider/interface.js
var ProviderEventEmitter = class extends import_index2.default {
};

// node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletProvider.js
var __rest = function(s3, e3) {
  var t3 = {};
  for (var p3 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
      t3[p3] = s3[p3];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
      if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
        t3[p3[i3]] = s3[p3[i3]];
    }
  return t3;
};
var CoinbaseWalletProvider = class extends ProviderEventEmitter {
  constructor(_a) {
    var { metadata } = _a, _b = _a.preference, { keysUrl } = _b, preference = __rest(_b, ["keysUrl"]);
    super();
    this.signer = null;
    this.isCoinbaseWallet = true;
    this.metadata = metadata;
    this.preference = preference;
    this.communicator = new Communicator({
      url: keysUrl,
      metadata,
      preference
    });
    const signerType = loadSignerType();
    if (signerType) {
      this.signer = this.initSigner(signerType);
    }
  }
  async request(args) {
    try {
      checkErrorForInvalidRequestArgs(args);
      if (!this.signer) {
        switch (args.method) {
          case "eth_requestAccounts": {
            const signerType = await this.requestSignerSelection(args);
            const signer = this.initSigner(signerType);
            await signer.handshake(args);
            this.signer = signer;
            storeSignerType(signerType);
            break;
          }
          case "net_version":
            return 1;
          case "eth_chainId":
            return hexStringFromNumber(1);
          default: {
            throw standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
          }
        }
      }
      return this.signer.request(args);
    } catch (error) {
      const { code } = error;
      if (code === standardErrorCodes.provider.unauthorized)
        this.disconnect();
      return Promise.reject(serializeError(error));
    }
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
    return await this.request({
      method: "eth_requestAccounts"
    });
  }
  async disconnect() {
    var _a;
    await ((_a = this.signer) === null || _a === void 0 ? void 0 : _a.cleanup());
    this.signer = null;
    ScopedLocalStorage.clearAll();
    this.emit("disconnect", standardErrors.provider.disconnected("User initiated disconnection"));
  }
  requestSignerSelection(handshakeRequest) {
    return fetchSignerType({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata,
      handshakeRequest,
      callback: this.emit.bind(this)
    });
  }
  initSigner(signerType) {
    return createSigner({
      signerType,
      metadata: this.metadata,
      communicator: this.communicator,
      callback: this.emit.bind(this)
    });
  }
};

// node_modules/@coinbase/wallet-sdk/dist/util/validatePreferences.js
function validatePreferences(preference) {
  if (!preference) {
    return;
  }
  if (!["all", "smartWalletOnly", "eoaOnly"].includes(preference.options)) {
    throw new Error(`Invalid options: ${preference.options}`);
  }
  if (preference.attribution) {
    if (preference.attribution.auto !== void 0 && preference.attribution.dataSuffix !== void 0) {
      throw new Error(`Attribution cannot contain both auto and dataSuffix properties`);
    }
  }
}

// node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js
var CoinbaseWalletSDK = class {
  constructor(metadata) {
    this.metadata = {
      appName: metadata.appName || "Dapp",
      appLogoUrl: metadata.appLogoUrl || getFavicon(),
      appChainIds: metadata.appChainIds || []
    };
    this.storeLatestVersion();
    void checkCrossOriginOpenerPolicy();
  }
  makeWeb3Provider(preference = { options: "all" }) {
    var _a;
    validatePreferences(preference);
    const params = { metadata: this.metadata, preference };
    return (_a = getCoinbaseInjectedProvider(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider(params);
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(type, width = 240) {
    return walletLogo(type, width);
  }
  storeLatestVersion() {
    const versionStorage = new ScopedLocalStorage("CBWSDK");
    versionStorage.setItem("VERSION", VERSION);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/createCoinbaseWalletProvider.js
function createCoinbaseWalletProvider(options) {
  var _a;
  const params = {
    metadata: options.metadata,
    preference: options.preference
  };
  return (_a = getCoinbaseInjectedProvider(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider(params);
}

// node_modules/@coinbase/wallet-sdk/dist/createCoinbaseWalletSDK.js
var DEFAULT_PREFERENCE = {
  options: "all"
};
function createCoinbaseWalletSDK(params) {
  var _a;
  const versionStorage = new ScopedLocalStorage("CBWSDK");
  versionStorage.setItem("VERSION", VERSION);
  void checkCrossOriginOpenerPolicy();
  const options = {
    metadata: {
      appName: params.appName || "Dapp",
      appLogoUrl: params.appLogoUrl || "",
      appChainIds: params.appChainIds || []
    },
    preference: Object.assign(DEFAULT_PREFERENCE, (_a = params.preference) !== null && _a !== void 0 ? _a : {})
  };
  validatePreferences(options.preference);
  let provider = null;
  return {
    getProvider: () => {
      if (!provider) {
        provider = createCoinbaseWalletProvider(options);
      }
      return provider;
    }
  };
}

// node_modules/@coinbase/wallet-sdk/dist/index.js
var dist_default = CoinbaseWalletSDK;
export {
  CoinbaseWalletSDK,
  createCoinbaseWalletSDK,
  dist_default as default
};
/*! Bundled license information:

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=dist-UZFCJX5W.js.map
