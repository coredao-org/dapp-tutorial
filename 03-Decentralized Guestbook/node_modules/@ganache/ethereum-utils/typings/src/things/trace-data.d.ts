/// <reference types="node" />
export interface ITraceData {
    toBuffer(): Buffer;
    toString(): string;
    toJSON(): string;
    isTraceData?: boolean;
}
export declare const TraceDataFactory: () => {
    from: (value: Buffer) => ITraceData;
};
//# sourceMappingURL=trace-data.d.ts.map