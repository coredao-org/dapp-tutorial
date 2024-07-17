/// <reference types="node" />
export declare const strCache: WeakMap<object, any>;
export declare const bufCache: WeakMap<object, any>;
export declare const toStrings: WeakMap<object, any>;
export declare const toBuffers: WeakMap<object, any>;
declare const inspect: unique symbol;
export declare class BaseJsonRpcType<T extends number | bigint | string | Buffer = number | bigint | string | Buffer> {
    [Symbol.toStringTag]: string;
    protected value: T;
    private [inspect];
    constructor(value: T);
    toString(): string | null;
    toBuffer(): Buffer;
    valueOf(): T | null;
    toJSON(): string | null;
    isNull(): boolean;
}
export declare type JsonRpcType<T extends number | bigint | string | Buffer> = BaseJsonRpcType<T>;
export {};
//# sourceMappingURL=json-rpc-base-types.d.ts.map