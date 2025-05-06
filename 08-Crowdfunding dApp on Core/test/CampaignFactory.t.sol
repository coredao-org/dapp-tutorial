// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Test, console} from "forge-std/Test.sol";
import {CampaignFactory} from "../src/CampaignFactory.sol";
contract CampaignFactoryTest is Test {
    CampaignFactory public campaignFactory;

    function setUp() public {
        campaignFactory = new CampaignFactory();
    }

    function test_CreateCampaign() public {
        campaignFactory.createCampaign(
            "Test Campaign",
            "This is a test campaign"
        );
    }

    function test_GetCampaigns() public {
        campaignFactory.createCampaign(
            "Test Campaign",
            "This is a test campaign"
        );
        campaignFactory.createCampaign(
            "Test Campaign",
            "This is a test campaign"
        );

        address[] memory campaigns = campaignFactory.getCampaigns();
        assertEq(campaigns.length, 2);
        assertEq(campaigns[0], address(campaigns[0]));
        assertEq(campaigns[1], address(campaigns[1]));
    }
}
