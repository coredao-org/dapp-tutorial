"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keccak = void 0;
const keccak_1 = __importDefault(require("keccak"));
const RATE = 1088;
const CAPACITY = 512;
const instance = (0, keccak_1.default)("keccak256");
/**
 * keccak256, but faster if you use it a lot.
 * @param buffer -
 */
function keccak(buffer) {
    instance._state.absorb(buffer);
    const digest = instance._state.squeeze(32);
    // reset and remove result from memory
    instance._state.initialize(RATE, CAPACITY);
    // make this re-usable
    instance._finalized = false;
    return digest;
}
exports.keccak = keccak;
//# sourceMappingURL=keccak.js.map