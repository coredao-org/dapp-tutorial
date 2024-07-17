/// <reference types="node" />
import { Definitions } from "@ganache/options";
export declare type OptionsAccount = {
    balance: string | number | bigint | Buffer;
    secretKey?: string;
};
export declare type WalletConfig = {
    options: {
        /**
         * Number of accounts to generate at startup.
         *
         * @defaultValue 10
         */
        totalAccounts: {
            type: number;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use wallet.totalAccounts instead
                 */
                total_accounts: number;
            };
        };
        /**
         * Array of Accounts. Each object should have a balance key with a hexadecimal
         * value. The key secretKey can also be specified, which represents the
         * account's private key. If no secretKey, the address is auto-generated with
         * the given balance. If specified, the key is used to determine the account's
         * address.
         */
        accounts: {
            type: OptionsAccount[];
            legacy: {
                /**
                 * @deprecated Use wallet.accounts instead
                 */
                accounts: OptionsAccount[];
            };
            cliType: string[];
        };
        /**
         * Use pre-defined, deterministic seed.
         */
        deterministic: {
            type: boolean;
            hasDefault: true;
        };
        /**
         * Seed to use to generate a mnemonic.
         */
        seed: {
            type: string;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use wallet.seed instead
                 */
                seed: string;
            };
        };
        /**
         * Use a specific HD wallet mnemonic to generate initial addresses.
         */
        mnemonic: {
            type: string;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use wallet.mnemonic instead
                 */
                mnemonic: string;
            };
        };
        /**
         * Array of addresses or address indexes specifying which accounts should be unlocked.
         */
        unlockedAccounts: {
            type: Array<string | number>;
            legacy: {
                /**
                 * @deprecated Use wallet.unlockedAccounts instead
                 */
                unlocked_accounts: Array<string | number>;
            };
            cliType: string[];
        };
        /**
         * Lock available accounts by default (good for third party transaction signing).
         *
         * @defaultValue false
         */
        lock: {
            type: boolean;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use wallet.lock instead
                 */
                secure: boolean;
            };
        };
        /**
         * Passphrase to use when locking accounts.
         *
         * @defaultValue ""
         */
        passphrase: {
            type: string;
            hasDefault: true;
        };
        /**
         * Specifies a file to save accounts and private keys to, for testing.
         *
         * Can be a filename or file descriptor.
         *
         * If specifying a filename, the directory path must already exist.
         *
         * See: https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
         */
        accountKeysPath: {
            type: string | number;
            legacy: {
                /**
                 * @deprecated Use wallet.accountKeysPath instead
                 */
                account_keys_path: string | number;
            };
        };
        /**
         * The default account balance, specified in ether.
         *
         * @defaultValue 1000 // ether
         */
        defaultBalance: {
            type: number;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use wallet.defaultBalance instead
                 */
                default_balance_ether: number;
            };
        };
        /**
         * The hierarchical deterministic path to use when generating accounts.
         *
         * @defaultValue "m/44'/60'/0'/0/"
         */
        hdPath: {
            type: string[];
            rawType: string;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use wallet.hdPath instead
                 */
                hd_path: string;
            };
        };
    };
    exclusiveGroups: [
        [
            "accounts",
            "totalAccounts"
        ],
        [
            "deterministic",
            "mnemonic",
            "seed"
        ]
    ];
};
export declare const WalletOptions: Definitions<WalletConfig>;
//# sourceMappingURL=wallet-options.d.ts.map