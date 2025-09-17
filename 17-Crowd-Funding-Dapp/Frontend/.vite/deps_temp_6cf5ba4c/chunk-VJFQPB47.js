import {
  base64ToString
} from "./chunk-VJOHABJ4.js";

// node_modules/thirdweb/dist/esm/utils/base64/base64.js
function isBase64JSON(input) {
  if (input.startsWith("data:application/json;base64")) {
    return true;
  }
  return false;
}
function parseBase64String(input) {
  const [, base64] = input.split(",");
  return base64ToString(base64);
}

export {
  isBase64JSON,
  parseBase64String
};
//# sourceMappingURL=chunk-VJFQPB47.js.map
