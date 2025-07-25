// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error LendingUSDToken__NotOwner();

contract LendingUSDToken is ERC20 {

    address public immutable i_owner;

    constructor() ERC20("LendingUSDToken", "USD") {
        i_owner = msg.sender;
    }

    modifier onlyOwner() {
        if(i_owner != msg.sender) revert LendingUSDToken__NotOwner();
        _;
    }


    function mint(address _receipient, uint256 _amount) public {
        _mint(_receipient, _amount);
    }
}
