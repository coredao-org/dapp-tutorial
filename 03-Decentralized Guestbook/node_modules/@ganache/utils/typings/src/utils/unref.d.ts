/// <reference types="node" />
/**
 * In node, calling `unref(timer)` on a running timer ensures that the timer
 * does not require that the Node.js event remain active. If there is no other
 * activity keeping the event loop running, the process may exit before the
 * timer's callback is invoked.
 * @param timer -
 * @returns `true` if the timer could be `unref`ed, otherwise returns `false`
 */
export declare function unref(timer: NodeJS.Timeout | number): timer is NodeJS.Timeout;
//# sourceMappingURL=unref.d.ts.map