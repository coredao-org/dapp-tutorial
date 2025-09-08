import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import {
  prepareTransaction
} from "./chunk-CNLOA7AS.js";
import {
  isAbiFunction,
  prepareMethod
} from "./chunk-NPJBMLFY.js";
import {
  encodeAbiParameters
} from "./chunk-U7TO6S3N.js";
import {
  parseAbiItem
} from "./chunk-GINVHONX.js";

// node_modules/thirdweb/dist/esm/transaction/prepare-contract-call.js
function prepareContractCall(options) {
  const { contract, method, params, ...rest } = options;
  const preparedMethodPromise = () => (async () => {
    var _a, _b;
    if (Array.isArray(method)) {
      return method;
    }
    if (isAbiFunction(method)) {
      return prepareMethod(method);
    }
    if (typeof method === "function") {
      return prepareMethod(
        // @ts-expect-error - method *is* function in this case
        await method(contract)
      );
    }
    if (typeof method === "string" && method.startsWith("function ")) {
      const abiItem = parseAbiItem(method);
      if (abiItem.type === "function") {
        return prepareMethod(abiItem);
      }
      throw new Error(`"method" passed is not of type "function"`);
    }
    if (contract.abi && ((_a = contract.abi) == null ? void 0 : _a.length) > 0) {
      const abiFunction = (_b = contract.abi) == null ? void 0 : _b.find((item) => item.type === "function" && item.name === method);
      if (abiFunction) {
        return prepareMethod(abiFunction);
      }
    }
    throw new Error(`Could not resolve method "${method}".`);
  })();
  return prepareTransaction({
    ...rest,
    // these always inferred from the contract
    to: contract.address,
    chain: contract.chain,
    client: contract.client,
    data: async () => {
      let preparedM;
      if (Array.isArray(method)) {
        preparedM = method;
      } else {
        preparedM = await preparedMethodPromise();
      }
      if (preparedM[1].length === 0) {
        return preparedM[0];
      }
      return preparedM[0] + encodeAbiParameters(
        preparedM[1],
        // @ts-expect-error - TODO: fix this type issue
        await resolvePromisedValue(params ?? [])
      ).slice(2);
    }
  }, {
    preparedMethod: preparedMethodPromise,
    contract
  });
}

// node_modules/thirdweb/dist/esm/utils/promise/once.js
function once(fn) {
  let result;
  return () => {
    if (!result) {
      result = fn();
    }
    return result;
  };
}

export {
  prepareContractCall,
  once
};
//# sourceMappingURL=chunk-6XF6HOWC.js.map
