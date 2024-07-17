import { EVMResult } from "@ethereumjs/vm/dist/evm/evm";
import { Data } from "@ganache/utils";
import { CodedError } from "./coded-error";
import { JsonRpcErrorCode } from "@ganache/utils";
export declare enum RETURN_TYPES {
    TRANSACTION_HASH = 0,
    RETURN_VALUE = 1
}
export declare class RuntimeError extends CodedError {
    code: JsonRpcErrorCode;
    data: {
        hash: string;
        programCounter: number;
        result: string;
        reason?: string;
        message: string;
    };
    constructor(transactionHash: Data, result: EVMResult, returnType: RETURN_TYPES);
}
//# sourceMappingURL=runtime-error.d.ts.map