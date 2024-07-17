import { Definitions, ExternalConfig, InternalConfig } from "./definition";
import { Base } from "./base";
export declare type NamespacedOptions = {
    [key: string]: Base.Config;
};
export declare type ProviderOptions<O extends NamespacedOptions> = Partial<{
    [K in keyof O]: ExternalConfig<O[K]>;
}>;
export declare type InternalOptions<O extends NamespacedOptions> = {
    [K in keyof O]: InternalConfig<O[K]>;
};
export declare type Defaults<O extends NamespacedOptions> = {
    [K in keyof O]: Definitions<O[K]>;
};
export declare class OptionsConfig<O extends NamespacedOptions> {
    #private;
    constructor(defaults: Defaults<O>);
    normalize(options: ProviderOptions<O>): InternalOptions<O>;
}
//# sourceMappingURL=create.d.ts.map