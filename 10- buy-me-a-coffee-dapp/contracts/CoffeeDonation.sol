// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract CoffeeDonation {
    address public owner;
    uint256 public coffeePrice = 0.01 ether; 

    struct Donation {
        address donor;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    Donation[] public donations;

    event CoffeeBought(address indexed donor, uint256 amount, string message);

    constructor() {
        owner = msg.sender;
    }

    function buyCoffee(string calldata message) external payable {
        require(msg.value >= coffeePrice, "Minimum donation is 0.01 ETH");

        donations.push(Donation({
            donor: msg.sender,
            amount: msg.value,
            message: message,
            timestamp: block.timestamp
        }));

        emit CoffeeBought(msg.sender, msg.value, message);
    }

    function withdraw() external {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }

    function getDonations() external view returns (Donation[] memory) {
        return donations;
    }
}
