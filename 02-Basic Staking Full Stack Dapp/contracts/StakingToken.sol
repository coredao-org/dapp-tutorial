// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract StakingToken is ERC20, Ownable, ERC20Permit {
    constructor(string memory name, string memory symbol)
        ERC20(name, symbol)
        Ownable(msg.sender)
        ERC20Permit(name)
    {}

    function mint(address to, uint256 amount) public {
        require(amount <= 100 * 10 ** 18, "amount must be less than 100");
        _mint(to, amount);
    }
}