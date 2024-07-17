import { Base } from "./base";
export declare type Options<C extends Base.Config> = C["options"];
export declare type ExclusiveGroups<C extends Base.Config> = C["exclusiveGroups"];
export declare type OptionName<C extends Base.Config> = keyof Options<C> & string;
export declare type ExclusiveGroupIndex<C extends Base.Config> = number & keyof ExclusiveGroups<C>;
export declare type Option<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = Options<C>[N];
export declare type OptionRawType<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = void extends Option<C, N>["rawType"] ? Option<C, N>["type"] : Option<C, N>["rawType"];
export declare type OptionCliType<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = void extends Option<C, N>["cliType"] ? Option<C, N>["type"] : Option<C, N>["cliType"];
export declare type OptionType<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = Option<C, N>["type"];
export declare type OptionHasDefault<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = Option<C, N>["hasDefault"];
export declare type OptionHasCliType<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = Option<C, N>["cliType"];
export declare type OptionHasLegacy<C extends Base.Config, N extends OptionName<C> = OptionName<C>> = Option<C, N>["legacy"];
export declare type LegacyOptions<C extends Base.Config> = {
    [K in OptionName<C>]: Option<C, K> extends {
        legacy: any;
    } ? K : never;
}[OptionName<C>];
export declare type Legacy<C extends Base.Config, N extends OptionName<C>> = Option<C, N>["legacy"];
//# sourceMappingURL=getters.d.ts.map