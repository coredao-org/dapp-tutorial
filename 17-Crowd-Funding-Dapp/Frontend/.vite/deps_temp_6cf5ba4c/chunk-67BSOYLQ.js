import {
  keccak_256
} from "./chunk-O6LGEXJ4.js";
import {
  hexToUint8Array,
  isHex,
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js
function keccak256(value, to) {
  const bytes = keccak_256(isHex(value, { strict: false }) ? hexToUint8Array(value) : value);
  if (to === "bytes") {
    return bytes;
  }
  return uint8ArrayToHex(bytes);
}

export {
  keccak256
};
//# sourceMappingURL=chunk-67BSOYLQ.js.map
