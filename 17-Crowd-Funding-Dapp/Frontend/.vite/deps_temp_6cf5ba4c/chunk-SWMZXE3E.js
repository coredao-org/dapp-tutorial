import {
  hexToNumber,
  isHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/utils/signatures/helpers/parseTypedData.js
function parseTypedData(typedData) {
  const domain = typedData.domain;
  if ((domain == null ? void 0 : domain.chainId) !== void 0 && isHex(domain.chainId)) {
    typedData.domain = {
      ...typedData.domain,
      chainId: hexToNumber(typedData.domain.chainId)
    };
  }
  return typedData;
}

export {
  parseTypedData
};
//# sourceMappingURL=chunk-SWMZXE3E.js.map
