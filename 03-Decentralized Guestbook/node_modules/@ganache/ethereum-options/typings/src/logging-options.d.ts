import { Definitions } from "@ganache/options";
export declare type Logger = {
    log(message?: any, ...optionalParams: any[]): void;
};
export declare type LoggingConfig = {
    options: {
        /**
         * Set to `true` to log EVM opcodes.
         *
         * @defaultValue false
         */
        readonly debug: {
            type: boolean;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use logging.debug instead
                 */
                debug: boolean;
            };
        };
        /**
         * An object, like `console`, that implements a `log` function.
         *
         * Defaults to `console` (logs to stdout).
         *
         * @example
         * ```typescript
         * {
         * 	log: (message: any) => {
         * 		// handle `message`
         * 	}
         * }
         * ```
         */
        readonly logger: {
            type: Logger;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use logging.logger instead
                 */
                logger: Logger;
            };
        };
        /**
         * Set to `true` to log all RPC requests and responses.
         *
         * @defaultValue false
         */
        readonly verbose: {
            type: boolean;
            hasDefault: true;
            legacy: {
                /**
                 * @deprecated Use logging.verbose instead
                 */
                verbose: boolean;
            };
        };
        /**
         * Set to `true` to disable logging. This option overrides
         * logging.logger and option.verbose.
         *
         * @defaultValue false
         */
        readonly quiet: {
            type: boolean;
            hasDefault: true;
        };
    };
};
export declare const LoggingOptions: Definitions<LoggingConfig>;
//# sourceMappingURL=logging-options.d.ts.map