// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GuessToken is ERC20 {
    constructor() ERC20("GuessToken", "GTK") {}


    function mint(address gameAddress) public {
        _mint(gameAddress, 100000 * 10 ** 18);
    }
}
