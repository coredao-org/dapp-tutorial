"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipEstimateGas = void 0;
const ethers_1 = require("ethers");
let processRequest;
function skipEstimateGas(hardhatWaffleProvider, estimateResult) {
    let estimateGasResult;
    try {
        estimateGasResult = ethers_1.BigNumber.from(estimateResult);
    }
    catch (_a) {
        throw new Error(`The value of the skipEstimateGas (${estimateResult}) in \n` +
            "hardhat config property must be a valid BigNumber string");
    }
    const init = hardhatWaffleProvider._hardhatNetwork.provider._wrapped._wrapped._wrapped
        ._init;
    hardhatWaffleProvider._hardhatNetwork.provider._wrapped._wrapped._wrapped._init =
        async function () {
            var _a;
            await init.apply(this);
            if (((_a = getHardhatVMEventEmitter(hardhatWaffleProvider)) === null || _a === void 0 ? void 0 : _a.listenerCount("beforeMessage")) < 2) {
                overrideProcessRequest(hardhatWaffleProvider, estimateGasResult);
            }
        };
}
exports.skipEstimateGas = skipEstimateGas;
function overrideProcessRequest(provider, estimateGasResult) {
    const curProcessRequest = provider._hardhatNetwork.provider._wrapped._wrapped._wrapped._ethModule
        .processRequest;
    if (curProcessRequest !== processRequest) {
        const originalProcess = provider._hardhatNetwork.provider._wrapped._wrapped._wrapped._ethModule.processRequest.bind(provider._hardhatNetwork.provider._wrapped._wrapped._wrapped._ethModule);
        provider._hardhatNetwork.provider._wrapped._wrapped._wrapped._ethModule.processRequest =
            (method, params) => {
                if (method === "eth_estimateGas") {
                    return estimateGasResult.toHexString();
                }
                else {
                    return originalProcess(method, params);
                }
            };
        processRequest =
            provider._hardhatNetwork.provider._wrapped._wrapped._wrapped._ethModule
                .processRequest;
    }
}
function getHardhatVMEventEmitter(provider) {
    var _a, _b, _c, _d, _e, _f, _g;
    const vm = (_e = (_d = (_c = (_b = (_a = provider === null || provider === void 0 ? void 0 : provider._hardhatNetwork.provider) === null || _a === void 0 ? void 0 : _a._wrapped._wrapped) === null || _b === void 0 ? void 0 : _b._wrapped) === null || _c === void 0 ? void 0 : _c._node) === null || _d === void 0 ? void 0 : _d._vmTracer) === null || _e === void 0 ? void 0 : _e._vm;
    /**
     * There were changes related to the location of event emitter introduced
     * in Hardhat version 2.11.0.
     */
    return (_g = (_f = vm === null || vm === void 0 ? void 0 : vm.evm) === null || _f === void 0 ? void 0 : _f.events) !== null && _g !== void 0 ? _g : vm;
}
//# sourceMappingURL=skip-estimate-gas.js.map