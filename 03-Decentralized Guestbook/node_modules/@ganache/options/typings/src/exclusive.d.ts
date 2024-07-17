import { Base } from "./base";
import { OptionName, Option, ExclusiveGroupIndex, ExclusiveGroups, Options, OptionType, OptionRawType } from "./getters";
declare type UnconstrainedOptions<C extends Base.Config> = Omit<Options<C>, ExclusiveGroupOptionName<C>>;
declare type UnconstrainedOptionName<C extends Base.Config> = string & keyof UnconstrainedOptions<C>;
declare type UnconstrainedOptionsByType<C extends Base.Config, T extends "type" | "rawType"> = {
    [N in UnconstrainedOptionName<C>]: T extends "type" ? OptionType<C, N> : OptionRawType<C, N>;
};
declare type ExclusiveGroupOptionPairs<C extends Base.Config, G extends unknown[]> = G extends [] ? [] : G extends [infer N, ...infer R] ? [
    [
        N,
        ExclusiveGroupOptionNameOption<C, N>
    ],
    ...ExclusiveGroupOptionPairs<C, R>
] : never;
declare type ExclusiveGroupOptionNameOption<C extends Base.Config, N> = N extends OptionName<C> ? Option<C, N> : never;
declare type PairsToMapping<T extends unknown[]> = T extends [] ? {} : T extends [[infer N, infer O], ...infer R] ? {
    [N_ in string & N]: O;
} & PairsToMapping<R> : never;
declare type RequireOnly<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
declare type ExclusiveGroupOptionalUnionByName<C extends Base.Config, GRP extends ExclusiveGroup<C>, M extends OptionName<C>, T extends "rawType" | "type"> = {
    [K in keyof RequireOnly<ExclusiveGroupOptionsByGroup<C, GRP>, M>]: K extends M ? T extends "type" ? OptionType<C, M> : OptionRawType<C, M> : never;
};
declare type Combine<C extends Base.Config, O extends unknown, GRP extends ExclusiveGroup<C>, T extends "rawType" | "type"> = {
    [N in keyof GRP]: GRP[N] extends OptionName<C> ? {
        [Key in keyof (ExclusiveGroupOptionalUnionByName<C, GRP, GRP[N], T> & UnconstrainedOptionsByType<C, T> & O)]: Key extends keyof ExclusiveGroupOptionalUnionByName<C, GRP, GRP[N], T> ? ExclusiveGroupOptionalUnionByName<C, GRP, GRP[N], T>[Key] : Key extends keyof UnconstrainedOptionsByType<C, T> ? UnconstrainedOptionsByType<C, T>[Key] : Key extends keyof O ? O[Key] : never;
    } : never;
} extends {
    [n: number]: infer I;
} ? I : never;
export declare type ExclusiveGroupsByName<C extends Base.Config, N extends OptionName<C>, GRPS extends ExclusiveGroups<C> = ExclusiveGroups<C>> = GRPS extends [infer GRP, ...infer Rest] ? GRP extends unknown[] ? N extends DeepTupleToUnion<GRP> ? Exclude<DeepTupleToUnion<GRP>, N> : Rest extends any[] ? ExclusiveGroupsByName<C, N, Rest> : never : never : never;
declare type IsNeverType<T> = [T] extends [never] ? true : never;
export declare type ExclusiveGroupUnionAndUnconstrainedPlus<C extends Base.Config, T extends "rawType" | "type", GRPS extends ExclusiveGroups<C> = ExclusiveGroups<C>, O extends unknown[] = []> = GRPS extends [infer GRP, ...infer Rest] ? GRP extends ExclusiveGroup<C> ? Rest extends any[] ? O extends [] ? ExclusiveGroupUnionAndUnconstrainedPlus<C, T, Rest, UnionToTuple<Combine<C, {}, GRP, T>>> : ExclusiveGroupUnionAndUnconstrainedPlus<C, T, Rest, UnionToTuple<{
    [OK in keyof Omit<O, keyof []>]: Combine<C, O[OK], GRP, T>;
} extends {
    [n: number]: infer I;
} ? I : never>> : never : never : O extends {
    [n: number]: infer I;
} ? true extends IsNeverType<I> ? {
    [Key in keyof UnconstrainedOptionsByType<C, T>]: UnconstrainedOptionsByType<C, T>[Key];
} : I : never;
export declare type UnionToTuple<T> = ((T extends any ? (t: T) => T : never) extends infer U ? (U extends any ? (u: U) => any : never) extends (v: infer V) => any ? V : never : never) extends (_: any) => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : [];
declare type ExclusiveGroup<C extends Base.Config, K extends ExclusiveGroupIndex<C> = ExclusiveGroupIndex<C>> = ExclusiveGroups<C>[K];
declare type ExclusiveGroupOptionName<C extends Base.Config, K extends ExclusiveGroupIndex<C> = ExclusiveGroupIndex<C>> = Extract<OptionName<C>, DeepTupleToUnion<ExclusiveGroup<C, K>>>;
declare type DeepTupleToUnion<T extends unknown[]> = T extends [] ? never : T extends [infer N, ...infer R] ? N extends unknown[] ? DeepTupleToUnion<N> | DeepTupleToUnion<R> : N | DeepTupleToUnion<R> : never;
declare type ExclusiveGroupOptionsByGroup<C extends Base.Config, G extends ExclusiveGroup<C>> = PairsToMapping<ExclusiveGroupOptionPairs<C, G>>;
export {};
//# sourceMappingURL=exclusive.d.ts.map