"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletOptions = void 0;
const helpers_1 = require("./helpers");
const seedrandom_1 = __importDefault(require("seedrandom"));
const bip39_1 = require("bip39");
const options_1 = require("@ganache/options");
const unseededRng = (0, seedrandom_1.default)();
/**
 * WARNING: to maintain compatibility with ganache v2 this RNG only generates
 * numbers from 0-254 instead of 0-255! Hence the name, `notVeryRandomBytes`
 * @param length -
 * @param rng -
 */
function notVeryRandomBytes(length, rng) {
    const buf = Buffer.allocUnsafe(length);
    for (let i = 0; i < length; i++) {
        buf[i] = (rng() * 255) | 0;
    }
    return buf;
}
const randomAlphaNumericString = (() => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const alphabetLength = alphabet.length;
    return (length, rng) => {
        let text = "";
        for (let i = 0; i < length; i++) {
            text += alphabet[(rng() * alphabetLength) | 0];
        }
        return text;
    };
})();
exports.WalletOptions = {
    accounts: {
        normalize: helpers_1.normalize,
        cliDescription: `Account data in the form \`<private_key>,<initial_balance>\`, can be specified multiple times. Note that private keys are 64 characters long and must be entered as an 0x-prefixed hex string. Balance can either be input as an integer, or as a 0x-prefixed hex string with either form specifying the initial balance in wei.`,
        legacyName: "accounts",
        cliAliases: ["account"],
        cliType: "array:string",
        cliCoerce: rawInput => {
            return rawInput.map(accountString => {
                // split *1* time on the first comma
                const [secretKey, balance] = accountString.split(/,(.+)/);
                return {
                    secretKey,
                    balance: BigInt(balance)
                };
            });
        },
        conflicts: ["totalAccounts"]
    },
    totalAccounts: {
        normalize: helpers_1.normalize,
        cliDescription: "Number of accounts to generate at startup.",
        default: config => (config.accounts == null ? 10 : 0),
        legacyName: "total_accounts",
        cliAliases: ["a", "accounts"],
        cliType: "number",
        conflicts: ["accounts"]
    },
    deterministic: {
        normalize: helpers_1.normalize,
        cliDescription: "Use pre-defined, deterministic seed.",
        default: () => false,
        cliAliases: ["d", "deterministic"],
        cliType: "boolean",
        conflicts: ["mnemonic", "seed"]
    },
    seed: {
        normalize: helpers_1.normalize,
        cliDescription: "Seed to use to generate a mnemonic.",
        // The order of the options matter here! `wallet.deterministic`
        // needs to be prior to `wallet.seed` for `config.deterministic`
        // below to be set correctly
        default: config => config.deterministic === true
            ? options_1.DeterministicSeedPhrase
            : randomAlphaNumericString(10, unseededRng),
        defaultDescription: "Random value, unless wallet.deterministic is specified",
        legacyName: "seed",
        cliAliases: ["s", "seed"],
        cliType: "string",
        conflicts: ["mnemonic", "deterministic"]
    },
    mnemonic: {
        normalize: helpers_1.normalize,
        cliDescription: "Use a specific HD wallet mnemonic to generate initial addresses.",
        // The order of the options matter here! `wallet.seed`
        // needs to be prior to `wallet.mnemonic` for `config.seed`
        // below to be set correctly
        default: config => (0, bip39_1.entropyToMnemonic)(notVeryRandomBytes(16, (0, seedrandom_1.default)(config.seed))),
        defaultDescription: "Generated from wallet.seed",
        legacyName: "mnemonic",
        cliAliases: ["m", "mnemonic"],
        cliType: "string",
        conflicts: ["seed", "deterministic"]
    },
    unlockedAccounts: {
        normalize: helpers_1.normalize,
        cliDescription: "Array of addresses or address indexes specifying which accounts should be unlocked.",
        legacyName: "unlocked_accounts",
        cliAliases: ["u", "unlock"],
        cliType: "array:string"
    },
    lock: {
        normalize: helpers_1.normalize,
        cliDescription: "Lock available accounts by default (good for third party transaction signing).",
        default: () => false,
        legacyName: "secure",
        cliAliases: ["n", "secure", "lock"],
        cliType: "boolean"
    },
    passphrase: {
        normalize: helpers_1.normalize,
        cliDescription: "Passphrase to use when locking accounts.",
        default: () => "",
        cliAliases: ["passphrase"],
        cliType: "string"
    },
    accountKeysPath: {
        normalize: helpers_1.normalize,
        cliDescription: "Specifies a file to save accounts and private keys to, for testing.",
        legacyName: "account_keys_path",
        cliAliases: ["account_keys_path", "acctKeys"],
        cliType: "string"
    },
    defaultBalance: {
        normalize: helpers_1.normalize,
        cliDescription: "The default account balance, specified in ether.",
        default: () => 1000,
        legacyName: "default_balance_ether",
        cliAliases: ["e", "defaultBalanceEther"],
        cliType: "number"
    },
    hdPath: {
        normalize: (path) => {
            return path.split("/");
        },
        cliDescription: "The hierarchical deterministic path to use when generating accounts.",
        default: () => ["m", "44'", "60'", "0'", "0"],
        legacyName: "hd_path",
        cliType: "string"
    }
};
//# sourceMappingURL=wallet-options.js.map