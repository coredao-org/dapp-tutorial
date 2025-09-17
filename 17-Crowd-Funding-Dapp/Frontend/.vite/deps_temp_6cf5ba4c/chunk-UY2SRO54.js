// node_modules/thirdweb/dist/esm/utils/units.js
function toTokens(units, decimals) {
  const stringValue = units.toString();
  const prefix = stringValue[0] === "-" ? "-" : "";
  const absStringValue = prefix ? stringValue.slice(1) : stringValue;
  const paddedValue = absStringValue.padStart(decimals + 1, "0");
  const splitIndex = paddedValue.length - decimals;
  const integerPart = paddedValue.slice(0, splitIndex) || "0";
  let fractionPart = paddedValue.slice(splitIndex);
  for (let i = fractionPart.length - 1; i >= 0; i--) {
    if (fractionPart[i] !== "0") {
      fractionPart = fractionPart.slice(0, i + 1);
      break;
    }
    if (i === 0) {
      fractionPart = "";
    }
  }
  return `${prefix}${integerPart}${fractionPart ? `.${fractionPart}` : ""}`;
}
function toEther(wei) {
  return toTokens(wei, 18);
}
function toUnits(tokens, decimals) {
  let [integerPart, fractionPart = ""] = tokens.split(".");
  const prefix = integerPart.startsWith("-") ? "-" : "";
  if (prefix) {
    integerPart = integerPart.slice(1);
  }
  fractionPart = fractionPart.padEnd(decimals, "0");
  if (decimals === 0) {
    if (fractionPart[0] && Number.parseInt(fractionPart[0]) >= 5) {
      integerPart = (BigInt(integerPart) + 1n).toString();
    }
    fractionPart = "";
  } else {
    if (fractionPart.length > decimals) {
      const roundingDigit = fractionPart[decimals];
      if (roundingDigit && Number.parseInt(roundingDigit, 10) >= 5) {
        const roundedFraction = BigInt(fractionPart.substring(0, decimals)) + 1n;
        fractionPart = roundedFraction.toString().padStart(decimals, "0");
        if (fractionPart.length > decimals) {
          integerPart = (BigInt(integerPart) + 1n).toString();
          fractionPart = fractionPart.substring(fractionPart.length - decimals);
        }
      } else {
        fractionPart = fractionPart.substring(0, decimals);
      }
    }
  }
  return BigInt(`${prefix}${integerPart}${fractionPart}`);
}
function toWei(tokens) {
  return toUnits(tokens, 18);
}
function fromGwei(gwei) {
  return toUnits(gwei, 9);
}

export {
  toTokens,
  toEther,
  toUnits,
  toWei,
  fromGwei
};
//# sourceMappingURL=chunk-UY2SRO54.js.map
