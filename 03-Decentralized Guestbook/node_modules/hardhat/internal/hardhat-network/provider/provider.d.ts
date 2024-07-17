/// <reference types="node" />
import type { Artifacts, BoundExperimentalHardhatNetworkMessageTraceHook, EIP1193Provider, HardhatNetworkChainsConfig, RequestArguments } from "../../../types";
import type { EdrContext } from "@nomicfoundation/edr";
import { EventEmitter } from "events";
import { VMTracer } from "../stack-traces/vm-tracer";
import { ForkConfig, GenesisAccount, IntervalMiningConfig, MempoolOrder, NodeConfig, TracingConfig } from "./node-types";
import { LoggerConfig } from "./modules/logger";
export declare const DEFAULT_COINBASE = "0xc014ba5ec014ba5ec014ba5ec014ba5ec014ba5e";
export declare function getGlobalEdrContext(): EdrContext;
interface HardhatNetworkProviderConfig {
    hardfork: string;
    chainId: number;
    networkId: number;
    blockGasLimit: number;
    minGasPrice: bigint;
    automine: boolean;
    intervalMining: IntervalMiningConfig;
    mempoolOrder: MempoolOrder;
    chains: HardhatNetworkChainsConfig;
    genesisAccounts: GenesisAccount[];
    allowUnlimitedContractSize: boolean;
    throwOnTransactionFailures: boolean;
    throwOnCallFailures: boolean;
    allowBlocksWithSameTimestamp: boolean;
    initialBaseFeePerGas?: number;
    initialDate?: Date;
    coinbase?: string;
    experimentalHardhatNetworkMessageTraceHooks?: BoundExperimentalHardhatNetworkMessageTraceHook[];
    forkConfig?: ForkConfig;
    forkCachePath?: string;
    enableTransientStorage: boolean;
}
export declare function getNodeConfig(config: HardhatNetworkProviderConfig, tracingConfig?: TracingConfig): NodeConfig;
export declare class EdrProviderWrapper extends EventEmitter implements EIP1193Provider {
    private readonly _provider;
    private readonly _node;
    private readonly _eventAdapter;
    private readonly _vmTraceDecoder;
    private readonly _common;
    private _failedStackTraces;
    private _callOverrideCallback?;
    /** Used for internal stack trace tests. */
    private _vmTracer?;
    private constructor();
    static create(config: HardhatNetworkProviderConfig, loggerConfig: LoggerConfig, tracingConfig?: TracingConfig): Promise<EdrProviderWrapper>;
    request(args: RequestArguments): Promise<unknown>;
    /**
     * Sets a `VMTracer` that observes EVM throughout requests.
     *
     * Used for internal stack traces integration tests.
     */
    setVmTracer(vmTracer?: VMTracer): void;
    private _setCallOverrideCallback;
    private _setVerboseTracing;
    private _ethEventListener;
    private _emitLegacySubscriptionEvent;
    private _emitEip1193SubscriptionEvent;
    private _addCompilationResultParams;
    private _addCompilationResultAction;
    private _getStackTraceFailuresCountParams;
    private _getStackTraceFailuresCountAction;
    private _rawTraceToSolidityStackTrace;
}
export declare function createHardhatNetworkProvider(hardhatNetworkProviderConfig: HardhatNetworkProviderConfig, loggerConfig: LoggerConfig, artifacts?: Artifacts): Promise<EIP1193Provider>;
export {};
//# sourceMappingURL=provider.d.ts.map