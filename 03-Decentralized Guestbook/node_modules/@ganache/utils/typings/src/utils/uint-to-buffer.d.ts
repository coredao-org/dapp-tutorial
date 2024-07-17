/// <reference types="node" />
/**
 * Converts a JavaScript number, treated as a Whole Number (0, 1, 2, 3, 4, ...)
 * less than 64 bits wide, to a Buffer.
 *
 * Numbers that are negative, fractional, or greater than 64 bits wide will
 * return very unexpected results. Numbers that are greater than
 * `Number.MAX_SAFE_INTEGER` will return unexpected results.
 *
 * @param num - A positive whole number <= `Number.MAX_SAFE_INTEGER`
 */
export declare function uintToBuffer(num: number): Buffer;
//# sourceMappingURL=uint-to-buffer.d.ts.map