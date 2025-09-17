import {
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/utils/random.js
function randomBytesHex(length = 32) {
  return uint8ArrayToHex(randomBytesBuffer(length));
}
function randomBytesBuffer(length = 32) {
  return globalThis.crypto.getRandomValues(new Uint8Array(length));
}

export {
  randomBytesHex
};
//# sourceMappingURL=chunk-S6VQW2VI.js.map
