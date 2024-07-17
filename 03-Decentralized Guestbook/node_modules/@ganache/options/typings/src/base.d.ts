import { NoUnion } from "./types";
declare type PrimitiveCliTypes = string | number | boolean;
export declare type CliTypes = PrimitiveCliTypes | PrimitiveCliTypes[] | string[] | number[] | boolean[];
export declare type CliTypeMap<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends NoUnion<infer I>[] ? I extends PrimitiveCliTypes ? `array:${CliTypeMap<I>}` : never : T extends any[] ? "array" : never;
export declare type YargsPrimitiveCliTypeStrings = CliTypeMap<PrimitiveCliTypes> | "array";
export declare namespace Base {
    type Option = {
        rawType?: unknown;
        type: unknown;
        hasDefault?: true;
        legacy?: {
            [name: string]: unknown;
        };
        cliType?: CliTypes;
    };
    type ExclusiveGroupOptionName = string;
    type ExclusiveGroup = ExclusiveGroupOptionName[];
    type Config = {
        options: {
            [optionName: string]: Option;
        };
        exclusiveGroups?: ExclusiveGroup[];
    };
}
export {};
//# sourceMappingURL=base.d.ts.map