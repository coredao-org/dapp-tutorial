// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedCoreToken is ERC20 {
    constructor() ERC20("WrappedCore", "WCORE") {}

    // function deposit(uint256 amount) public payable {
    //     _mint(msg.sender, amount);
    // }

    function mint(address _to, uint256 amount) public {
        _mint(_to, amount);
    }

    // TODO: transfer to burn
}