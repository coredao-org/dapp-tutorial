import {
  readContract
} from "./chunk-AG4NO6K6.js";

// node_modules/thirdweb/dist/esm/extensions/erc165/__generated__/IERC165/read/supportsInterface.js
var FN_SELECTOR = "0x01ffc9a7";
var FN_INPUTS = [
  {
    type: "bytes4",
    name: "interfaceId"
  }
];
var FN_OUTPUTS = [
  {
    type: "bool"
  }
];
async function supportsInterface(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.interfaceId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/read/isERC721.js
function isERC721(options) {
  return supportsInterface({
    contract: options.contract,
    interfaceId: "0x80ac58cd"
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/read/isERC1155.js
function isERC1155(options) {
  return supportsInterface({
    contract: options.contract,
    interfaceId: "0xd9b67a26"
  });
}

export {
  isERC721,
  isERC1155
};
//# sourceMappingURL=chunk-QLCPWJYR.js.map
