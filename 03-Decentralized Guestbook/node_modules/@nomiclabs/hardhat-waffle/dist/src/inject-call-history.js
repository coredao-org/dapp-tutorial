"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectCallHistory = void 0;
const ethers_1 = require("ethers");
/**
 * Injects call history into hardhat provider,
 * making it possible to use matchers like calledOnContract
 */
class CallHistory {
    constructor() {
        this.recordedCalls = [];
    }
    addUniqueCall(call) {
        if (this.recordedCalls.find((c) => c.address === call.address && c.data === call.data) === undefined) {
            this.recordedCalls.push(call);
        }
    }
    clearAll() {
        this.recordedCalls = [];
    }
}
function toRecordedCall(message) {
    var _a;
    return {
        address: ((_a = message.to) === null || _a === void 0 ? void 0 : _a.buf)
            ? ethers_1.utils.getAddress(ethers_1.utils.hexlify(message.to.buf))
            : undefined,
        data: message.data ? ethers_1.utils.hexlify(message.data) : "0x",
    };
}
function getHardhatVMEventEmitter(hardhatWaffleProvider) {
    var _a, _b, _c, _d, _e, _f, _g;
    const vm = (_e = (_d = (_c = (_b = (_a = hardhatWaffleProvider === null || hardhatWaffleProvider === void 0 ? void 0 : hardhatWaffleProvider._hardhatNetwork.provider) === null || _a === void 0 ? void 0 : _a._wrapped._wrapped) === null || _b === void 0 ? void 0 : _b._wrapped) === null || _c === void 0 ? void 0 : _c._node) === null || _d === void 0 ? void 0 : _d._vmTracer) === null || _e === void 0 ? void 0 : _e._vm;
    /**
     * There were changes related to the location of event emitter introduced
     * in Hardhat version 2.11.0.
     */
    return (_g = (_f = vm === null || vm === void 0 ? void 0 : vm.evm) === null || _f === void 0 ? void 0 : _f.events) !== null && _g !== void 0 ? _g : vm;
}
let injected = false;
const injectCallHistory = (hardhatWaffleProvider) => {
    var _a, _b, _c, _d, _e;
    if (injected) {
        return;
    }
    const callHistory = new CallHistory();
    hardhatWaffleProvider.clearCallHistory = () => {
        callHistory.clearAll();
    };
    let beforeMessageListener;
    const init = (_e = (_d = (_c = (_b = (_a = hardhatWaffleProvider === null || hardhatWaffleProvider === void 0 ? void 0 : hardhatWaffleProvider._hardhatNetwork) === null || _a === void 0 ? void 0 : _a.provider) === null || _b === void 0 ? void 0 : _b._wrapped) === null || _c === void 0 ? void 0 : _c._wrapped) === null || _d === void 0 ? void 0 : _d._wrapped) === null || _e === void 0 ? void 0 : _e._init;
    if (!init) {
        throw new Error("Could not inject call history into hardhat provider");
    }
    hardhatWaffleProvider._hardhatNetwork.provider._wrapped._wrapped._wrapped._init =
        async function () {
            var _a, _b, _c, _d;
            await init.apply(this);
            if (typeof beforeMessageListener === "function") {
                // has to be here because of weird behaviour of init function, which requires us to re-register the handler.
                (_b = (_a = getHardhatVMEventEmitter(hardhatWaffleProvider)) === null || _a === void 0 ? void 0 : _a.off) === null || _b === void 0 ? void 0 : _b.call(_a, "beforeMessage", beforeMessageListener);
            }
            beforeMessageListener = (message) => {
                callHistory.addUniqueCall(toRecordedCall(message));
            };
            hardhatWaffleProvider.callHistory = callHistory.recordedCalls;
            (_d = (_c = getHardhatVMEventEmitter(hardhatWaffleProvider)) === null || _c === void 0 ? void 0 : _c.on) === null || _d === void 0 ? void 0 : _d.call(_c, "beforeMessage", beforeMessageListener);
        };
    injected = true;
};
exports.injectCallHistory = injectCallHistory;
//# sourceMappingURL=inject-call-history.js.map