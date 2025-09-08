import React, { useState } from "react";
import { getContract } from "thirdweb";
import { client } from "../client";
import { CROWDFUNDING_FACTORY } from "../contants/contract";
import { useReadContract } from "thirdweb/react";
import Campaign from "./Campaign";
import { tcore2 } from "../chains";

function Home() {
  const [filterStatus, setFilterStatus] = useState("all"); // State to store filter criteria

  const contract = getContract({
    client: client,
    chain: tcore2,
    address: CROWDFUNDING_FACTORY,
  });

  const { data: campaigns, isPending } = useReadContract({
    contract,
    method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
    params: [],
  });
  const { data:status, isPending:abc } = useReadContract({
    contract,
    method:
      "function getCampaignStatus() view returns (uint8)",
    params: [],
  });
  // const { data, isPending } = useReadContract({
  //   contract,
  //   method:
  //     "function getCampaignStatus() view returns (uint8)",
  //   params: [],
  // });

  // Filter campaigns based on selected status
  const filteredCampaigns =
    campaigns &&
    campaigns.filter((campaign) => {
      if (filterStatus === "all") return true;
      return status === parseInt(filterStatus);
    });

  return (
    <div className="container mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-black-700 text-2xl font-medium ">All Campaigns</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {!isPending && filteredCampaigns ? (
            filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <Campaign
                  key={campaign.campaignAddress}
                  campaignAddress={campaign.campaignAddress}
                />
              ))
            ) : (
              <p className="text-gray-500">No Campaigns Found</p>
            )
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Home;
