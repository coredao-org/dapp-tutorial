import {
  isAddress
} from "./chunk-EIVAOYE5.js";
import {
  concat,
  slice
} from "./chunk-GINVHONX.js";
import {
  boolToHex,
  isHex,
  numberToHex,
  padHex,
  stringToHex
} from "./chunk-BBNNHC5G.js";

// node_modules/thirdweb/dist/esm/utils/encoding/helpers/byte-size.js
function byteSize(value) {
  if (isHex(value, { strict: false })) {
    return Math.ceil((value.length - 2) / 2);
  }
  return value.length;
}

// node_modules/thirdweb/dist/esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length) {
    throw new Error("The number of parameters and values must match.");
  }
  const preparedParams = prepareParams({
    params,
    values
  });
  const data = encodeParams(preparedParams);
  if (data.length === 0) {
    return "0x";
  }
  return data;
}
function prepareParams({ params, values }) {
  const preparedParams = [];
  for (let i = 0; i < params.length; i++) {
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  }
  return preparedParams;
}
function prepareParam({ param, value }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple") {
    return encodeTuple(value, {
      param
    });
  }
  if (param.type === "address") {
    return encodeAddress(value);
  }
  if (param.type === "bool") {
    return encodeBool(value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    const signed = param.type.startsWith("int");
    return encodeNumber(value, { signed });
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(value, { param });
  }
  if (param.type === "string") {
    return encodeString(value);
  }
  throw new Error(`Unsupported parameter type: ${param.type}`);
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticSize += 32;
    } else {
      staticSize += byteSize(encoded);
    }
  }
  const staticParams = [];
  const dynamicParams = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
      dynamicParams.push(encoded);
      dynamicSize += byteSize(encoded);
    } else {
      staticParams.push(encoded);
    }
  }
  return concat([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (value !== "" && value !== void 0 && !isAddress(value)) {
    throw new Error(`Invalid address: ${value}`);
  }
  return { dynamic: false, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  const dynamic = length === null;
  if (!Array.isArray(value)) {
    throw new Error("Invalid array value.");
  }
  if (!dynamic && value.length !== length) {
    throw new Error("Invalid array length.");
  }
  let dynamicChild = false;
  const preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParam({ param, value: value[i] });
    if (preparedParam.dynamic) {
      dynamicChild = true;
    }
    preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encodeParams(preparedParams);
    if (dynamic) {
      const length_ = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParams.length > 0 ? concat([length_, data]) : length_
      };
    }
    if (dynamicChild) {
      return { dynamic: true, encoded: data };
    }
  }
  return {
    dynamic: false,
    encoded: concat(preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  const [, paramSize] = param.type.split("bytes");
  const bytesSize = byteSize(value);
  if (!paramSize) {
    let value_ = value;
    if (bytesSize % 32 !== 0) {
      value_ = padHex(value_, {
        dir: "right",
        size: Math.ceil((value.length - 2) / 2 / 32) * 32
      });
    }
    return {
      dynamic: true,
      encoded: concat([padHex(numberToHex(bytesSize, { size: 32 })), value_])
    };
  }
  if (bytesSize !== Number.parseInt(paramSize)) {
    throw new Error(`Invalid bytes${paramSize} size: ${bytesSize}`);
  }
  return { dynamic: false, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  return { dynamic: false, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed }) {
  return {
    dynamic: false,
    encoded: numberToHex(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = stringToHex(value);
  const partsLength = Math.ceil(byteSize(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  }
  return {
    dynamic: true,
    encoded: concat([
      padHex(numberToHex(byteSize(hexValue), { size: 32 })),
      ...parts
    ])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = false;
  const preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    const param_ = param.components[i];
    const index = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParam({
      param: param_,
      // biome-ignore lint/style/noNonNullAssertion: we know the value is not `undefined`.
      // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
      value: value[index]
    });
    preparedParams.push(preparedParam);
    if (preparedParam.dynamic) {
      dynamic = true;
    }
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concat(preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    // biome-ignore lint/style/noNonNullAssertion: we know the value is not `undefined`.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}

export {
  encodeAbiParameters,
  prepareParam,
  encodeAddress
};
//# sourceMappingURL=chunk-U7TO6S3N.js.map
