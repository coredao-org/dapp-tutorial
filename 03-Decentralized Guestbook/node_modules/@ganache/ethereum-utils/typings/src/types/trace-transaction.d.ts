import { Data } from "@ganache/utils";
import { ITraceData } from "../things/trace-data";
import { TraceStorageMap } from "../things/trace-storage-map";
export declare type TransactionTraceOptions = {
    disableStorage?: boolean;
    disableMemory?: boolean;
    disableStack?: boolean;
};
export declare type StructLog = {
    depth: number;
    error: string;
    gas: number;
    gasCost: number;
    memory: Array<ITraceData>;
    op: string;
    pc: number;
    stack: Array<ITraceData>;
    storage: TraceStorageMap;
};
export declare type TraceTransactionResult = {
    gas: number;
    structLogs: StructLog[];
    returnValue: string;
    storage: Record<string, {
        key: Data;
        value: Data;
    }>;
};
//# sourceMappingURL=trace-transaction.d.ts.map