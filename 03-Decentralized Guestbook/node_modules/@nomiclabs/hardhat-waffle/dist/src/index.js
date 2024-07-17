"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-ethers");
const config_1 = require("hardhat/config");
const plugins_1 = require("hardhat/plugins");
const deploy_1 = require("./deploy");
const link_1 = require("./link");
const matchers_1 = require("./matchers");
require("./type-extensions");
const skip_estimate_gas_1 = require("./skip-estimate-gas");
const inject_call_history_1 = require("./inject-call-history");
const hardhatChaiMatchersIncompatibilityCheck_1 = require("./hardhatChaiMatchersIncompatibilityCheck");
(0, hardhatChaiMatchersIncompatibilityCheck_1.hardhatChaiMatchersIncompatibilityCheck)();
(0, config_1.extendEnvironment)((hre) => {
    // We can't actually implement a MockProvider because of its private
    // properties, so we cast it here 😢
    hre.waffle = (0, plugins_1.lazyObject)(() => {
        var _a, _b, _c;
        const { WaffleMockProviderAdapter } = require("./waffle-provider-adapter");
        const hardhatWaffleProvider = new WaffleMockProviderAdapter(hre.network);
        // eslint-disable-next-line import/no-extraneous-dependencies
        const { waffleChai } = require("@ethereum-waffle/chai");
        // TODO: next line requires @ethereum-waffle/provider - do we want it to be this way?
        // eslint-disable-next-line import/no-extraneous-dependencies
        const { createFixtureLoader } = require("@ethereum-waffle/provider");
        const hardhatCreateFixtureLoader = (provider, overrideSigners, overrideProvider) => {
            return createFixtureLoader(overrideSigners, overrideProvider !== null && overrideProvider !== void 0 ? overrideProvider : provider);
        };
        if (((_a = hre.config.waffle) === null || _a === void 0 ? void 0 : _a.skipEstimateGas) !== undefined) {
            (0, skip_estimate_gas_1.skipEstimateGas)(hardhatWaffleProvider, (_b = hre.config.waffle) === null || _b === void 0 ? void 0 : _b.skipEstimateGas);
        }
        if (((_c = hre.config.waffle) === null || _c === void 0 ? void 0 : _c.injectCallHistory) === true) {
            (0, inject_call_history_1.injectCallHistory)(hardhatWaffleProvider);
        }
        return {
            provider: hardhatWaffleProvider,
            deployContract: deploy_1.hardhatDeployContract.bind(undefined, hre),
            deployMockContract: (0, deploy_1.getDeployMockContract)(),
            solidity: waffleChai,
            createFixtureLoader: hardhatCreateFixtureLoader.bind(undefined, hardhatWaffleProvider),
            loadFixture: hardhatCreateFixtureLoader(hardhatWaffleProvider),
            link: (0, link_1.getLinkFunction)(),
        };
    });
    (0, matchers_1.initializeWaffleMatchers)(hre.config.paths.root);
});
//# sourceMappingURL=index.js.map