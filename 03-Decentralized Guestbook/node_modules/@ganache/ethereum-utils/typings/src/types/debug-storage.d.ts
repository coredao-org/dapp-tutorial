/// <reference types="node" />
import { Data } from "@ganache/utils";
export declare type StorageRecords = Record<string, {
    key: Data;
    value: Data;
}>;
export declare type StorageRangeResult = {
    nextKey: Data | null;
    storage: StorageRecords;
};
export declare type StorageKeys = Map<string, {
    key: Buffer;
    hashedKey: Buffer;
}>;
export declare type RangedStorageKeys = {
    keys: Buffer[];
    nextKey: Data;
};
//# sourceMappingURL=debug-storage.d.ts.map