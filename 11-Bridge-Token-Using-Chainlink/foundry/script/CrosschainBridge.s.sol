// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CrossChainBridge} from "../src/CrosschainBridge.sol";
import {HelperConfig} from "./HelperConfig.s.sol";

contract CrosschainBridgeScript is Script {
    function run() public {
        deployCrosschainBridge();
    }

    function deployCrosschainBridge()
        public
        returns (HelperConfig, CrossChainBridge)
    {
        HelperConfig helperConfig = new HelperConfig();
        HelperConfig.NetworkConfig memory config = helperConfig.getConfig();

        vm.startBroadcast();
        CrossChainBridge crosschainBridge = new CrossChainBridge(
            config.router,
            config.linkToken
        );
        vm.stopBroadcast();
        return (helperConfig, crosschainBridge);
    }
}
