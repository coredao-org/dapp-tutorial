/// <reference types="node" />
import { BaseJsonRpcType } from "./json-rpc-base-types";
export declare class Data extends BaseJsonRpcType {
    constructor(value: string | Buffer, byteLength?: number);
    toString(byteLength?: number): string;
    static from<T extends string | Buffer = string | Buffer>(value: T, byteLength?: number): Data;
}
//# sourceMappingURL=json-rpc-data.d.ts.map