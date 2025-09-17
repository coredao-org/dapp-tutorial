import {
  decimals
} from "./chunk-QVNJVROL.js";
import {
  withCache
} from "./chunk-GOA7IGSB.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/read/decimals.js
async function decimals2(options) {
  return withCache(() => decimals(options), {
    cacheKey: `${options.contract.chain.id}:${options.contract.address}:decimals`,
    // can never change, so cache forever
    cacheTime: Number.POSITIVE_INFINITY
  });
}

export {
  decimals2 as decimals
};
//# sourceMappingURL=chunk-4RRAU5V7.js.map
