import { Api, KnownKeys, OverloadedParameters } from "../types";
declare type JsonRpc = {
    readonly id: string;
    readonly jsonrpc: string;
    toString(): string;
};
export declare type JsonRpcRequest<Ledger extends Api, Method extends KnownKeys<Ledger>> = JsonRpc & {
    readonly id: string | number;
    readonly jsonrpc: string;
    readonly method: Method;
    readonly params?: OverloadedParameters<Ledger[Method]>;
};
export declare type JsonRpcResponse = JsonRpc & {
    readonly result: any;
};
export declare type JsonRpcError = JsonRpc & {
    readonly error: {
        readonly [key: string]: unknown;
        readonly code: number;
        readonly message: any;
    };
    readonly result?: any;
};
export declare const makeRequest: <Ledger extends Api, Method extends keyof import("../types").RemoveIndex<Ledger>>(json: any) => JsonRpcRequest<Ledger, Method>;
export declare const makeResponse: (id: string, result: any) => JsonRpcResponse;
export declare const makeError: <T extends Error & {
    code: number;
}>(id: string | undefined, error: T, result?: unknown) => JsonRpcError;
export declare enum JsonRpcErrorCode {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    PARSE_ERROR = -32700,
    /**
     * The JSON sent is not a valid Request object.
     */
    INVALID_REQUEST = -32600,
    /**
     * The method does not exist / is not available.
     */
    METHOD_NOT_FOUND = -32601,
    /**
     * Invalid method parameter(s).
     */
    INVALID_PARAMS = -32602,
    /**
     * Internal JSON-RPC error.
     */
    INTERNAL_ERROR = -32603,
    /**
     * Missing or invalid parameters
     */
    INVALID_INPUT = -32000,
    /**
     * Transaction creation failed
     */
    TRANSACTION_REJECTED = -32003,
    /**
     * 	Method is not implemented
     */
    METHOD_NOT_SUPPORTED = -32004,
    /**
     * 	Request exceeds defined limit
     */
    LIMIT_EXCEEDED = -32005,
    /**
     * Version of JSON-RPC protocol is not supported
     */
    JSON_RPC_VERSION_NOT_SUPPORTED = -32006
}
export {};
//# sourceMappingURL=jsonrpc.d.ts.map