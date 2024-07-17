/// <reference types="node" />
export * from "./connector";
export * from "./provider";
export * from "./api";
export declare type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
export declare type KnownKeys<T> = keyof RemoveIndex<T>;
declare global {
    interface JSON {
        parse(text: string | Buffer, reviver?: (key: any, value: any) => any): any;
    }
}
declare type Overloads<T extends (...args: any[]) => any> = T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
} ? ((...args: A1) => R1) | ((...args: A2) => R2) | ((...args: A3) => R3) | ((...args: A4) => R4) | ((...args: A5) => R5) | ((...args: A6) => R6) : T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
} ? ((...args: A1) => R1) | ((...args: A2) => R2) | ((...args: A3) => R3) | ((...args: A4) => R4) | ((...args: A5) => R5) : T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
} ? ((...args: A1) => R1) | ((...args: A2) => R2) | ((...args: A3) => R3) | ((...args: A4) => R4) : T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
} ? ((...args: A1) => R1) | ((...args: A2) => R2) | ((...args: A3) => R3) : T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
} ? ((...args: A1) => R1) | ((...args: A2) => R2) : T extends {
    (...args: infer A1): infer R1;
} ? (...args: A1) => R1 : never;
declare type NoUnknownArray<T> = T extends infer I ? unknown[] extends I ? never : I : T;
export declare type OverloadedParameters<T extends (...args: any[]) => any> = NoUnknownArray<Parameters<Overloads<T>>>;
//# sourceMappingURL=index.d.ts.map