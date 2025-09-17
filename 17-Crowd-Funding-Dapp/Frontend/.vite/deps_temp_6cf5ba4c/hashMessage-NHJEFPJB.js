import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-LO5SQBMX.js";
import {
  keccak256
} from "./chunk-67BSOYLQ.js";
import {
  stringToBytes,
  toBytes
} from "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import {
  concat
} from "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/utils/hashing/hashMessage.js
var presignMessagePrefix = "Ethereum Signed Message:\n";
function hashMessage(message, to_) {
  const messageBytes = (() => {
    if (typeof message === "string") {
      return stringToBytes(message);
    }
    if (message.raw instanceof Uint8Array) {
      return message.raw;
    }
    return toBytes(message.raw);
  })();
  const prefixBytes = stringToBytes(`${presignMessagePrefix}${messageBytes.length}`);
  return keccak256(concat([prefixBytes, messageBytes]), to_);
}
export {
  hashMessage
};
//# sourceMappingURL=hashMessage-NHJEFPJB.js.map
