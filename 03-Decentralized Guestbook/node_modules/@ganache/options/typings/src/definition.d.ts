import { Base, CliTypeMap, CliTypes } from "./base";
import { ExclusiveGroupsByName, ExclusiveGroupUnionAndUnconstrainedPlus } from "./exclusive";
import { Legacy, OptionCliType, OptionHasCliType, OptionHasDefault, OptionHasLegacy, OptionName, OptionRawType, OptionType } from "./getters";
import { UnionToIntersection } from "./types";
declare type Normalize<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = (rawInput: OptionRawType<C, N>) => OptionType<C, N>;
export declare type ExternalConfig<C extends Base.Config> = Partial<ExclusiveGroupUnionAndUnconstrainedPlus<C, "rawType">>;
export declare type InternalConfig<C extends Base.Config> = ExclusiveGroupUnionAndUnconstrainedPlus<C, "type">;
export declare type Definitions<C extends Base.Config> = {
    [N in OptionName<C>]: {
        readonly normalize: Normalize<C, N>;
        readonly cliDescription: string;
        readonly disableInCLI?: boolean;
        readonly cliAliases?: string[];
        readonly cliChoices?: string[] | number[];
        readonly implies?: ReadonlyArray<Exclude<OptionName<C>, N>>;
    } & (C[ExclusiveGroupsByName<C, N>] extends never ? {} : {
        readonly conflicts: ExclusiveGroupsByName<C, N>[];
    }) & (void extends OptionHasCliType<C, N> ? {
        readonly cliType?: CliTypeMap<CliTypes> | null;
    } : {
        readonly cliType?: CliTypeMap<OptionCliType<C, N>> | null;
        readonly cliCoerce?: (cliType: OptionCliType<C, N>) => OptionRawType<C, N>;
    }) & (void extends OptionHasDefault<C, N> ? {} : {
        readonly default: (config: InternalConfig<C>, flavor: string) => OptionType<C, N>;
        readonly defaultDescription?: string;
    }) & (void extends OptionHasLegacy<C, N> ? {} : {
        readonly legacyName: UnionToIntersection<keyof Legacy<C, N>>;
    });
};
export {};
//# sourceMappingURL=definition.d.ts.map