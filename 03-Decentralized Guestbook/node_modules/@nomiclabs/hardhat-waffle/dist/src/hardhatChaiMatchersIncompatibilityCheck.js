"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardhatChaiMatchersIncompatibilityCheck = void 0;
function hardhatChaiMatchersIncompatibilityCheck() {
    if (global.__HARDHAT_CHAI_MATCHERS_IS_LOADED === true) {
        throw new Error(`You are using both @nomiclabs/hardhat-waffle and @nomicfoundation/hardhat-chai-matchers. They don't work correctly together, so please make sure you only use one.
We recommend you migrate to @nomicfoundation/hardhat-chai-matchers. Learn how to do it here: https://hardhat.org/migrate-from-waffle`);
    }
    global.__HARDHAT_WAFFLE_IS_LOADED = true;
}
exports.hardhatChaiMatchersIncompatibilityCheck = hardhatChaiMatchersIncompatibilityCheck;
//# sourceMappingURL=hardhatChaiMatchersIncompatibilityCheck.js.map