/// <reference types="node" />
/**
 * Trims leading 0s from a buffer and returns a key representing the buffer's
 * trimmed value (`Buffer.from([0, 0, 12, 0])` => `1200`).
 *
 * @param buffer -
 */
export declare function bufferToMinHexKey(buffer: Buffer): string;
//# sourceMappingURL=buffer-to-key.d.ts.map