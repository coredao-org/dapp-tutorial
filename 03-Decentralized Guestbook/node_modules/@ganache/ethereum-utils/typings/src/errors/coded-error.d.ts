/// <reference types="node" />
import { JsonRpcErrorCode } from "@ganache/utils";
export declare class CodedError extends Error {
    code: number;
    constructor(message: string, code: number);
    static from(error: Error, code: JsonRpcErrorCode): CodedError;
    static nonEnumerableProperty(value: any): {
        value: any;
        writable: boolean;
        configurable: boolean;
    };
    static captureStackTraceExtended(message: string): void;
    static createRevertReason(returnValue: Buffer): string;
}
//# sourceMappingURL=coded-error.d.ts.map