import {
  defineChain
} from "./chunk-TFBEDS4S.js";

// node_modules/thirdweb/dist/esm/chains/chain-definitions/ethereum.js
var ethereum = defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  blockExplorers: [
    {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  ]
});

export {
  ethereum
};
//# sourceMappingURL=chunk-ZLJ6VYSG.js.map
