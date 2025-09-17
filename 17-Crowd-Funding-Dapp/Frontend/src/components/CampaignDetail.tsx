import React from "react";
import { useParams } from "react-router-dom";

export default function CampaignDetail() {
  const { campaignAddress } = useParams();

  return <div>Details for Campaign {campaignAddress}</div>;
}
