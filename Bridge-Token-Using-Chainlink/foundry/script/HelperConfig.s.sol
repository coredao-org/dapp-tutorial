// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console2} from "forge-std/Script.sol";

contract HelperConfig is Script {
    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/
    error HelperConfig__InvalidChainId();

    /*//////////////////////////////////////////////////////////////
                                 TYPES
    //////////////////////////////////////////////////////////////*/
    struct NetworkConfig {
        address router;
        address linkToken;
    }

    /*//////////////////////////////////////////////////////////////
                            STATE VARIABLES
    //////////////////////////////////////////////////////////////*/

    uint256 constant ETH_SEPOLIA_CHAIN_ID = 11155111;
    uint256 constant CORE_TESTNET2_CHAIN_ID = 1114;

    mapping(uint256 chainId => NetworkConfig) public networkConfigs;

    /*//////////////////////////////////////////////////////////////
                               FUNCTIONS
    //////////////////////////////////////////////////////////////*/
    constructor() {
        networkConfigs[ETH_SEPOLIA_CHAIN_ID] = getEthSepoliaConfig();
        networkConfigs[CORE_TESTNET2_CHAIN_ID] = getCoreTestnet2Config();
    }

    function getConfig() public returns (NetworkConfig memory) {
        return getConfigByChainId(block.chainid);
    }

    function getConfigByChainId(
        uint256 chainId
    ) public returns (NetworkConfig memory) {
        return networkConfigs[chainId];
    }

    /*//////////////////////////////////////////////////////////////
                                CONFIGS
    //////////////////////////////////////////////////////////////*/

    function getEthSepoliaConfig() public pure returns (NetworkConfig memory) {
        return
            NetworkConfig({
                router: 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59,
                linkToken: 0x779877A7B0D9E8603169DdbD7836e478b4624789
            });
    }

    function getCoreTestnet2Config()
        public
        pure
        returns (NetworkConfig memory)
    {
        return
            NetworkConfig({
                router: 0xded0EE188Fe8F1706D9049e29C82081A5ebEcb2F,
                linkToken: 0x6C475841d1D7871940E93579E5DBaE01634e17aA
            });
    }
}
