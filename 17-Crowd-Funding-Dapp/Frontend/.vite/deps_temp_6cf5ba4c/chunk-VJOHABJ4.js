// node_modules/thirdweb/dist/esm/utils/text-decoder.js
var textDecoder;
function cachedTextDecoder() {
  if (!textDecoder) {
    textDecoder = new TextDecoder();
  }
  return textDecoder;
}

// node_modules/thirdweb/dist/esm/utils/uint8-array.js
var uint8ArrayStringified = "[object Uint8Array]";
function assertUint8Array(value) {
  if (!isUint8Array(value)) {
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
  }
}
function isUint8Array(value) {
  if (!value) {
    return false;
  }
  if (value.constructor === Uint8Array) {
    return true;
  }
  return Object.prototype.toString.call(value) === uint8ArrayStringified;
}
function areUint8ArraysEqual(a, b) {
  assertUint8Array(a);
  assertUint8Array(b);
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
function uint8ArrayToString(array) {
  assertUint8Array(array);
  return cachedTextDecoder().decode(array);
}
function assertString(value) {
  if (typeof value !== "string") {
    throw new TypeError(`Expected \`string\`, got \`${typeof value}\``);
  }
}
function base64UrlToBase64(base64url) {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padding = base64.length % 4;
  if (padding !== 0) {
    base64 += "=".repeat(4 - padding);
  }
  return base64;
}
function base64ToUint8Array(base64String) {
  assertString(base64String);
  return Uint8Array.from(
    globalThis.atob(base64UrlToBase64(base64String)),
    // biome-ignore lint/style/noNonNullAssertion: we know that the code points exist
    (x) => x.codePointAt(0)
  );
}
function base64ToString(base64String) {
  assertString(base64String);
  return uint8ArrayToString(base64ToUint8Array(base64String));
}
function concatUint8Arrays(arrays, totalLength) {
  if (arrays.length === 0) {
    return new Uint8Array(0);
  }
  const calculatedTotalLength = totalLength ?? arrays.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
  const returnValue = new Uint8Array(calculatedTotalLength);
  let offset = 0;
  for (const array of arrays) {
    assertUint8Array(array);
    returnValue.set(array, offset);
    offset += array.length;
  }
  return returnValue;
}
function compareUint8Arrays(a, b) {
  assertUint8Array(a);
  assertUint8Array(b);
  const length = Math.min(a.length, b.length);
  for (let index = 0; index < length; index++) {
    const diff = a[index] - b[index];
    if (diff !== 0) {
      return Math.sign(diff);
    }
  }
  return Math.sign(a.length - b.length);
}

export {
  isUint8Array,
  areUint8ArraysEqual,
  base64UrlToBase64,
  base64ToString,
  concatUint8Arrays,
  compareUint8Arrays
};
//# sourceMappingURL=chunk-VJOHABJ4.js.map
