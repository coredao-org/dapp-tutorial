declare type TuplePrepend<Tuple extends readonly unknown[], NewElement> = [
    NewElement,
    ...Tuple
];
declare type Consumer<Value> = (value: Value) => void;
declare type IntersectionFromUnion<Union> = (Union extends unknown ? Consumer<Union> : never) extends Consumer<infer ResultIntersection> ? ResultIntersection : never;
declare type OverloadedConsumerFromUnion<Union> = IntersectionFromUnion<Union extends unknown ? Consumer<Union> : never>;
declare type UnionLast<Union> = OverloadedConsumerFromUnion<Union> extends (a: infer A) => void ? A : never;
declare type UnionExcludingLast<Union> = Exclude<Union, UnionLast<Union>>;
declare type TupleFromUnionRec<RemainingUnion, CurrentTuple extends readonly unknown[]> = [RemainingUnion] extends [never] ? CurrentTuple : TupleFromUnionRec<UnionExcludingLast<RemainingUnion>, TuplePrepend<CurrentTuple, UnionLast<RemainingUnion>>>;
export declare type TupleFromUnion<Union> = TupleFromUnionRec<Union, []>;
export {};
//# sourceMappingURL=tuple-from-union.d.ts.map