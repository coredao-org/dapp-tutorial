import {
  approve
} from "./chunk-AWMNEQRO.js";
import {
  toUnits
} from "./chunk-UY2SRO54.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/write/approve.js
function approve2(options) {
  return approve({
    contract: options.contract,
    asyncParams: async () => {
      let amount;
      if ("amount" in options) {
        const { decimals } = await import("./decimals-OWVEHM45.js");
        const d = await decimals(options).catch(() => 18);
        amount = toUnits(options.amount.toString(), d);
      } else {
        amount = options.amountWei;
      }
      return {
        spender: options.spender,
        value: amount,
        overrides: {
          erc20Value: {
            amountWei: amount,
            tokenAddress: options.contract.address
          }
        }
      };
    }
  });
}

export {
  approve2 as approve
};
//# sourceMappingURL=chunk-TTOANXGP.js.map
