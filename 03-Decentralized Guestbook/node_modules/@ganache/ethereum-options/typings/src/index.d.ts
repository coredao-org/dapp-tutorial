import { ChainConfig } from "./chain-options";
import { DatabaseConfig } from "./database-options";
import { LoggingConfig } from "./logging-options";
import { MinerConfig } from "./miner-options";
import { WalletConfig } from "./wallet-options";
import { ForkConfig } from "./fork-options";
import { Base, Defaults, ExternalConfig, InternalConfig, Legacy, LegacyOptions, OptionName, OptionRawType, OptionsConfig } from "@ganache/options";
import { UnionToIntersection } from "./helper-types";
declare type EthereumConfig = {
    chain: ChainConfig;
    database: DatabaseConfig;
    logging: LoggingConfig;
    miner: MinerConfig;
    wallet: WalletConfig;
    fork: ForkConfig;
};
declare type MakeLegacyOptions<C extends Base.Config> = UnionToIntersection<{
    [K in OptionName<C>]: K extends LegacyOptions<C> ? Legacy<C, K> : Record<K, OptionRawType<C, K>>;
}[OptionName<C>]>;
export declare type EthereumLegacyProviderOptions = Partial<MakeLegacyOptions<ChainConfig> & MakeLegacyOptions<DatabaseConfig> & MakeLegacyOptions<LoggingConfig> & MakeLegacyOptions<MinerConfig> & MakeLegacyOptions<WalletConfig> & MakeLegacyOptions<ForkConfig>>;
export declare type EthereumProviderOptions = Partial<{
    [K in keyof EthereumConfig]: ExternalConfig<EthereumConfig[K]>;
}>;
export declare type EthereumInternalOptions = {
    [K in keyof EthereumConfig]: InternalConfig<EthereumConfig[K]>;
};
export declare const EthereumDefaults: Defaults<EthereumConfig>;
export declare const EthereumOptionsConfig: OptionsConfig<EthereumConfig>;
export * from "./chain-options";
export * from "./database-options";
export * from "./helpers";
export * from "./logging-options";
export * from "./miner-options";
export * from "./wallet-options";
export * from "./fork-options";
//# sourceMappingURL=index.d.ts.map