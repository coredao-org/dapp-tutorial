// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { Tasks } from "../src/Task.sol";


contract TaskScript is Script {

    function setUp() external {}

    function run() external {
        uint256 pk = vm.envUint("PK");
        vm.startBroadcast(pk);
        Tasks task = new Tasks();
        console.log("task is :::", address(task));
        vm.stopBroadcast();
    }
}