import { Data } from "@ganache/utils";
import Emittery from "emittery";
import { Tag } from "../things/tags";
export declare enum FilterTypes {
    log = 0,
    block = 1,
    pendingTransaction = 2
}
export declare type Topic = string | string[];
export declare type BaseFilterArgs = {
    address?: string | string[];
    topics?: Topic[];
};
export declare type BlockHashFilterArgs = BaseFilterArgs & {
    blockHash?: string;
};
export declare type RangeFilterArgs = BaseFilterArgs & {
    fromBlock?: string | Tag;
    toBlock?: string | Tag;
};
export declare type FilterArgs = BlockHashFilterArgs | RangeFilterArgs;
export declare type Filter = {
    type: FilterTypes;
    updates: Data[];
    unsubscribe: Emittery.UnsubscribeFn;
    filter: FilterArgs;
};
//# sourceMappingURL=filters.d.ts.map