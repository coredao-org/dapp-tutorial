"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberGenerator = void 0;
const seedrandom_1 = __importDefault(require("seedrandom"));
class RandomNumberGenerator {
    // I was planning on using `state` here to restore the RNG
    // from a saved state (via the db on run or upon a revert),
    // but this functionality was postponed. I'm keeping the arg
    // here as it still applies and is valid code.
    // https://github.com/trufflesuite/ganache/issues/756
    constructor(seed, state) {
        if (typeof seed === "string" && typeof state === "undefined") {
            this.rng = seedrandom_1.default.alea(seed, { state: true });
        }
        else if (typeof state === "object") {
            // We can ignore seed even if it was provided.
            // The user is reseeding the rng from a prior state,
            // so let's initialize accordingly
            this.rng = seedrandom_1.default.alea("", { state });
        }
        else {
            const entropy = Math.random() * Date.now();
            this.rng = seedrandom_1.default.alea(`${entropy}`, { state: true });
        }
    }
    getNumber(upperExclusiveBound = 1) {
        // I believe this check may be a tiny bit faster than
        // always multiplying by 1
        if (upperExclusiveBound !== 1) {
            return this.rng() * upperExclusiveBound;
        }
        else {
            return this.rng();
        }
    }
    getNumbers(length, upperExclusiveBound = 1) {
        const numbers = [];
        for (let i = 0; i < length; i++) {
            numbers.push(this.getNumber(upperExclusiveBound));
        }
        return numbers;
    }
    getBuffer(length) {
        return Buffer.from(this.getNumbers(length, 256));
    }
    state() {
        return this.rng.state();
    }
}
exports.RandomNumberGenerator = RandomNumberGenerator;
//# sourceMappingURL=random-number-generator.js.map