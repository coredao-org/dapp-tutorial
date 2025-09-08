import {
  formatBlock
} from "./chunk-LO5SQBMX.js";
import {
  numberToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getBlockByNumber.js
async function eth_getBlockByNumber(request, params) {
  const blockTag = params.blockTag ?? "latest";
  const includeTransactions = params.includeTransactions ?? false;
  const blockNumberHex = params.blockNumber !== void 0 ? numberToHex(params.blockNumber) : void 0;
  const block = await request({
    method: "eth_getBlockByNumber",
    params: [blockNumberHex || blockTag, includeTransactions]
  });
  if (!block) {
    throw new Error("Block not found");
  }
  return formatBlock(block);
}

export {
  eth_getBlockByNumber
};
//# sourceMappingURL=chunk-CXAZLQ2Z.js.map
