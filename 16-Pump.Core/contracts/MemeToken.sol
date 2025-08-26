// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MemeToken is ERC20 {

    address payable public owner;
    address public creator;

    // event Withdrawal(uint amount, uint when);

    constructor(address _creator, string memory _name, string memory _symbol, uint256 _totalSupply) ERC20(_name, _symbol) {

        owner = payable(msg.sender);
        creator = _creator;

        _mint(msg.sender, _totalSupply);
    }















    // function withdraw() public {
    //     // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
    //     // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    //     require(block.timestamp >= unlockTime, "You can't withdraw yet");
    //     require(msg.sender == owner, "You aren't the owner");

    //     emit Withdrawal(address(this).balance, block.timestamp);

    //     owner.transfer(address(this).balance);
    // }
}
