"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToBigInt = void 0;
const bigint_buffer_1 = require("@trufflesuite/bigint-buffer");
/**
 * note: this doesn't handle negative values
 * @param value - Buffer representation of a bigint, most-significant bit first (Big-endian)
 */
function bufferToBigInt(value) {
    // Parsed as BE.
    // This doesn't handle negative values. We may need to add logic to handle
    // it because it is possible values returned from the VM could be negative
    // and stored in a buffer.
    const length = value.byteLength;
    if (length === 0) {
        return null;
    }
    // Buffers that are 6 bytes or less can be converted with built-in methods
    if (length <= 6) {
        return BigInt(value.readUIntBE(0, length));
    }
    let view;
    // Buffers that are 7 bytes need to be padded to 8 bytes
    if (length === 7) {
        const padded = new Uint8Array(8);
        // set byte 0 to 0, and bytes 1-8 to the value's 7 bytes:
        padded.set(value, 1);
        view = new DataView(padded.buffer);
    }
    else if (length === 8) {
        view = new DataView(value.buffer, value.byteOffset, length);
    }
    else {
        // TODO: toBigIntBE is a native lib with no pure JS fallback yet.
        return (0, bigint_buffer_1.toBigIntBE)(value);
    }
    return view.getBigUint64(0);
}
exports.bufferToBigInt = bufferToBigInt;
//# sourceMappingURL=buffer-to-bigint.js.map