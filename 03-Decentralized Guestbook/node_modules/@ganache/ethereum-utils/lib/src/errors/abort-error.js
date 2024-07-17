"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortError = void 0;
class AbortError extends Error {
    constructor() {
        super("The user aborted a request.");
    }
}
exports.AbortError = AbortError;
//# sourceMappingURL=abort-error.js.map