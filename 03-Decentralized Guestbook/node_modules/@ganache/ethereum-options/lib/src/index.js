"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthereumOptionsConfig = exports.EthereumDefaults = void 0;
const chain_options_1 = require("./chain-options");
const database_options_1 = require("./database-options");
const logging_options_1 = require("./logging-options");
const miner_options_1 = require("./miner-options");
const wallet_options_1 = require("./wallet-options");
const fork_options_1 = require("./fork-options");
const options_1 = require("@ganache/options");
exports.EthereumDefaults = {
    chain: chain_options_1.ChainOptions,
    database: database_options_1.DatabaseOptions,
    logging: logging_options_1.LoggingOptions,
    miner: miner_options_1.MinerOptions,
    wallet: wallet_options_1.WalletOptions,
    fork: fork_options_1.ForkOptions
};
exports.EthereumOptionsConfig = new options_1.OptionsConfig(exports.EthereumDefaults);
__exportStar(require("./chain-options"), exports);
__exportStar(require("./database-options"), exports);
__exportStar(require("./helpers"), exports);
__exportStar(require("./logging-options"), exports);
__exportStar(require("./miner-options"), exports);
__exportStar(require("./wallet-options"), exports);
__exportStar(require("./fork-options"), exports);
//# sourceMappingURL=index.js.map