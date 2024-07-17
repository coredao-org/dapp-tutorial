"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PromiEvent_1;
Object.defineProperty(exports, "__esModule", { value: true });
const emittery_1 = __importDefault(require("emittery"));
const emitteryMethods = [
    "clearListeners",
    "once",
    "on",
    "emit",
    "onAny"
];
// A hack to fix Emittery's `mixin` type.
// issue: https://github.com/sindresorhus/emittery/issues/79
const mixin = emittery_1.default.mixin.bind(emittery_1.default);
let PromiEvent = PromiEvent_1 = class PromiEvent extends Promise {
    constructor(executor) {
        super(executor);
        /**
         * Used to immediately clear all event listeners on the instance and prevent
         * any additional binding or emission from the Emitter.
         *
         * Once disposed no listeners can be bound to this emitter.
         *
         * Note: `dispose` is pre-bound to the `this`, making it possible to pass the
         * method around detached from it's context.
         */
        this.dispose = () => {
            if (!this.clearListeners)
                throw new Error("PromiEvent already disposed");
            this.clearListeners();
            // Ensure that once disposed no listeners can be bound to this emitter.
            const fn = () => {
                throw new Error("PromiEvent bound after dispose");
            };
            emitteryMethods
                .filter(m => m !== "emit")
                .forEach(methodName => {
                Object.defineProperty(this, methodName, {
                    enumerable: false,
                    value: fn
                });
            });
        };
    }
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected - The callback to execute when the Promise is rejected.
     * @returns A PromiEvent for the completion of the callback.
     */
    catch(onrejected) {
        const prom = new PromiEvent_1((resolve, reject) => {
            this.onAny((eventName, eventData) => {
                return prom.emit(eventName, eventData);
            });
            const p = super.catch(onrejected);
            p.then(resolve, reject);
        });
        return prom;
    }
    static resolve(value) {
        return new PromiEvent_1(resolve => {
            resolve(value);
        });
    }
};
PromiEvent = PromiEvent_1 = __decorate([
    mixin(Symbol.for("emittery"), emitteryMethods)
], PromiEvent);
exports.default = PromiEvent;
//# sourceMappingURL=promievent.js.map