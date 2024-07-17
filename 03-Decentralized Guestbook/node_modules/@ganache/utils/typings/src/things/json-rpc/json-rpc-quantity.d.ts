/// <reference types="node" />
import { BaseJsonRpcType } from "./json-rpc-base-types";
export declare class Quantity extends BaseJsonRpcType {
    _nullable: boolean;
    static from(value: number | bigint | string | Buffer, nullable?: boolean): Quantity;
    toString(): string | null;
    toBuffer(): Buffer;
    toBigInt(): bigint | null;
    toNumber(): number;
    valueOf(): bigint;
}
export default Quantity;
//# sourceMappingURL=json-rpc-quantity.d.ts.map