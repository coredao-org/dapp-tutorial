"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const json_rpc_base_types_1 = require("./json-rpc-base-types");
const json_rpc_base_types_2 = require("./json-rpc-base-types");
function validateByteLength(byteLength) {
    if (typeof byteLength !== "number" || byteLength < 0) {
        throw new Error(`byteLength must be a number greater than 0`);
    }
}
const byteLengths = new WeakMap();
class Data extends json_rpc_base_types_1.BaseJsonRpcType {
    constructor(value, byteLength) {
        if (typeof value === "bigint") {
            throw new Error(`Cannot create a ${typeof value} as a Data`);
        }
        super(value);
        if (byteLength !== void 0) {
            validateByteLength(byteLength);
            byteLengths.set(this, byteLength | 0);
        }
    }
    toString(byteLength) {
        const str = json_rpc_base_types_2.strCache.get(this);
        if (str !== void 0) {
            return str;
        }
        else {
            let str = json_rpc_base_types_2.toStrings.get(this)();
            let length = str.length;
            if (length % 2 === 1) {
                length++;
                str = `0${str}`;
            }
            if (byteLength !== void 0) {
                validateByteLength(byteLength);
            }
            else {
                byteLength = byteLengths.get(this);
            }
            if (byteLength !== void 0) {
                const strLength = byteLength * 2;
                const padBy = strLength - length;
                if (padBy < 0) {
                    // if our hex-encoded data is longer than it should be, truncate it:
                    str = str.slice(0, strLength);
                }
                else if (padBy > 0) {
                    // if our hex-encoded data is shorter than it should be, pad it:
                    str = "0".repeat(padBy) + str;
                }
            }
            return `0x${str}`;
        }
    }
    static from(value, byteLength) {
        return new Data(value, byteLength);
    }
}
exports.Data = Data;
//# sourceMappingURL=json-rpc-data.js.map