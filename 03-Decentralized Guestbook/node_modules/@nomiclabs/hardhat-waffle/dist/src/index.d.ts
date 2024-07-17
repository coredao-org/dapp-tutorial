import "@nomiclabs/hardhat-ethers";
import "./type-extensions";
declare module "hardhat/types" {
    interface HardhatUserConfig {
        waffle?: {
            /**
             * If true, the call history will be injected into the Hardhat Runtime Environment.
             * This will allow you to use matchers `calledOnContract` and `calledOnContractWith`.
             *
             * @default false
             */
            injectCallHistory?: boolean;
            /**
             * Allows to skip estimateGas step and return specific hex value when executing a transaction.
             * Can be useful for speeding up tests and getting better error messages.
             *
             * @example "0xB71B00"
             * @default undefined
             */
            skipEstimateGas?: string;
        };
    }
    interface HardhatConfig {
        waffle?: {
            injectCallHistory?: boolean;
            skipEstimateGas?: string;
        };
    }
}
//# sourceMappingURL=index.d.ts.map