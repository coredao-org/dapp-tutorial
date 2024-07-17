export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type ArrayToTuple<T extends Readonly<string[]>> = T[number];
//# sourceMappingURL=helper-types.d.ts.map