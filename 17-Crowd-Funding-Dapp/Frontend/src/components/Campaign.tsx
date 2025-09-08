import React from "react";
import { getContract } from "thirdweb";
import { client } from "../client";
import { useReadContract } from "thirdweb/react";
import { Link } from "react-router-dom";
import { tcore2 } from "../chains";

type CampaignCardProps = {
  campaignAddress: string;
};

export default function Campaign({ campaignAddress }: CampaignCardProps) {
  const formatFromWei = (value: string, decimals = 18): string => {
    if (!value || !/^\d+$/.test(value)) return "0";
    if (value.length <= decimals) {
      const padded = value.padStart(decimals + 1, "0");
      const whole = padded.slice(0, padded.length - decimals);
      const frac = padded.slice(padded.length - decimals).replace(/0+$/, "");
      return frac ? `${whole}.${frac}` : whole;
    }
    const whole = value.slice(0, value.length - decimals);
    const frac = value.slice(value.length - decimals).replace(/0+$/, "");
    return frac ? `${whole}.${frac}` : whole;
  };
  const contract = getContract({
    client: client,
    chain: tcore2,
    address: campaignAddress,
  });

  const { data: campaignName } = useReadContract({
    contract,
    method: "function name() view returns (string)",
    params: [],
  });
  const { data: campaignDescription } = useReadContract({
    contract,
    method: "function description() view returns (string)",
    params: [],
  });
  const { data: goal, isLoading: isLoadGoal } = useReadContract({
    contract,
    method: "function goal() view returns (uint256)",
    params: [],
  });
  const { data: balance, isLoading: isLoadBalance } = useReadContract({
    contract,
    method: "function getcontractBalance() view returns (uint256)",
    params: [],
  });
  const { data: status, isPending } = useReadContract({
    contract,
    method: "function state() view returns (uint8)",
    params: [],
  });

  // Convert status to a readable format
  const getStatusText = (status: number): string => {
    switch (status) {
      case 0:
        return "Active";
      case 1:
        return "Completed";
      case 2:
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  const totalBalance = balance?.toString() || "0";
  const totalGoal = goal?.toString() || "1"; // Prevent division by zero
  let balancePercentage = (parseInt(totalBalance) / parseInt(totalGoal)) * 100;
  if (balancePercentage > 100) balancePercentage = 100;

  return (
    <div className="flex flex-col p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{campaignName || "Campaign Name"}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{campaignDescription || "No description available."}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Status: {status !== undefined ? getStatusText(status) : "Loading..."}
      </p>
      {!isLoadBalance && !isLoadGoal && (
        <div className="w-full mt-2 space-y-2">
          <div className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"
              style={{ width: `${balancePercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-700 dark:text-gray-300">
            <span className="whitespace-nowrap">tCORE2 {formatFromWei(totalBalance)}</span>
            <span className="whitespace-nowrap">{balancePercentage >= 100 ? "Goal Achieved" : `${balancePercentage.toFixed(2)}%`}</span>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between mt-4">
        <p className="text-gray-700 dark:text-gray-300">Goal: tCORE2 {formatFromWei(totalGoal)}</p>
        <p className="text-gray-700 dark:text-gray-300">Balance: tCORE2 {formatFromWei(totalBalance)}</p>
      </div>
      
      <Link to={`/Campaign/${campaignAddress}`}>
        <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg mt-4">
          View Campaign
        </p>
      </Link>
    </div>
  );
}
