// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AppleToken is ERC20 {
    constructor() ERC20("Apple", "APT") {}

    function mint(address _to, uint256 amount) public {
        _mint(_to, amount);
    }

    // TODO: transfer to burn
}