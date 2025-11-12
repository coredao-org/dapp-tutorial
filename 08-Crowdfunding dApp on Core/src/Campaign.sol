// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Campaign {
    address public owner;
    string public title;
    string public description;

    constructor(string memory _title, string memory _description, address _owner) {
        owner = _owner;
        title = _title;
        description = _description;
    }

    function contribute() public payable {
        require(msg.value > 0, "Contribution must be greater than 0");
        (bool success, ) = payable(address(this)).call{value: msg.value}("");
        require(success, "Failed to send funds");
    }

    function withdraw() public payable {
        require(msg.sender == owner, "Only owner can withdraw funds");
        payable(msg.sender).transfer(address(this).balance);
    }
}
