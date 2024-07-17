import Emittery from "emittery";
declare var Promise: {
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected - The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): PromiEvent<TResult>;
    /**
     * Creates a new resolved promievent for the provided value.
     * @param value - A promise.
     * @returns A promievent whose internal state matches the provided promise.
     */
    resolve<T>(value: T | PromiseLike<T>): PromiEvent<T>;
    /**
     * Creates a new resolved promievent.
     * @returns A resolved promievent.
     */
    resolve(): PromiEvent<void>;
} & PromiseConstructor;
declare const emitteryMethods: readonly ["clearListeners", "once", "on", "emit", "onAny"];
declare class PromiEvent<T> extends Promise<T> {
    constructor(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void);
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected - The callback to execute when the Promise is rejected.
     * @returns A PromiEvent for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): PromiEvent<T | TResult>;
    /**
     * Creates a new resolved promievent.
     * @returns A resolved promievent.
     */
    static resolve(): PromiEvent<void>;
    /**
     * Creates a new resolved promievent for the provided value.
     * @param value - A promise.
     * @returns A promievent whose internal state matches the provided promise.
     */
    static resolve<T = never>(value: T | PromiseLike<T>): PromiEvent<T>;
    /**
     * Used to immediately clear all event listeners on the instance and prevent
     * any additional binding or emission from the Emitter.
     *
     * Once disposed no listeners can be bound to this emitter.
     *
     * Note: `dispose` is pre-bound to the `this`, making it possible to pass the
     * method around detached from it's context.
     */
    dispose: () => void;
}
interface PromiEvent<T> extends Promise<T>, Pick<Emittery, typeof emitteryMethods[number]> {
    emittery: Emittery;
}
export default PromiEvent;
//# sourceMappingURL=promievent.d.ts.map