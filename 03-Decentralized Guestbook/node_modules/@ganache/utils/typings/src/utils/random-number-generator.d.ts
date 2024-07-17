/// <reference types="node" />
import seedrandom from "seedrandom";
export declare class RandomNumberGenerator {
    readonly rng: ReturnType<seedrandom.Callback>;
    constructor(seed?: string | null, state?: seedrandom.State);
    getNumber(upperExclusiveBound?: number): number;
    getNumbers(length: number, upperExclusiveBound?: number): number[];
    getBuffer(length: number): Buffer;
    state(): seedrandom.State;
}
//# sourceMappingURL=random-number-generator.d.ts.map