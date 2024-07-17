"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unref = void 0;
/**
 * In node, calling `unref(timer)` on a running timer ensures that the timer
 * does not require that the Node.js event remain active. If there is no other
 * activity keeping the event loop running, the process may exit before the
 * timer's callback is invoked.
 * @param timer -
 * @returns `true` if the timer could be `unref`ed, otherwise returns `false`
 */
function unref(timer) {
    if (typeof timer === "object" && typeof timer.unref === "function") {
        timer.unref();
        return true;
    }
    else {
        return false;
    }
}
exports.unref = unref;
//# sourceMappingURL=unref.js.map