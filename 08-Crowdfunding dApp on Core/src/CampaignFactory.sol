// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./Campaign.sol";

contract CampaignFactory {
    address[] public campaigns;

    function createCampaign(
        string memory title,
        string memory description
    ) public {
        Campaign newCampaign = new Campaign(title, description, msg.sender);
        campaigns.push(address(newCampaign));
    }

    function getCampaigns() public view returns (address[] memory) {
        return campaigns;
    }
}
