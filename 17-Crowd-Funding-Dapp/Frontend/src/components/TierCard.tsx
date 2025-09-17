import React from "react";
import { prepareContractCall, ThirdwebContract } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { useReadContract } from "thirdweb/react";


type Tier = {
  name: string;
  amount: bigint;
  backers: bigint;
};

type TierCardProps = {
  tier: Tier;
  contract: ThirdwebContract;
  index:number;
  isEditing:boolean;
};

function TierCard({ tier, contract ,index,isEditing }: TierCardProps) 
{
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
  const { data:status, isPending:isloadingstatus } = useReadContract({
    contract,
    method:
      "function getCampaignStatus() view returns (uint8)",
    params: [],
  });
  const isActive = !isloadingstatus && status === 0;

  return (
    <div className="max-w-sm mb-4 p-5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{tier.name}</p>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Total Backers: {tier.backers.toString()}</p>
        </div>
        <span className="shrink-0 inline-flex items-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 text-xs font-medium">tCORE2 {formatFromWei(tier.amount.toString())}</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className={`text-xs font-medium ${isActive ? "text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30" : "text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/30"} px-2 py-1 rounded-full`}>
          {isActive ? "Active" : "Unavailable"}
        </span>
        <div className="flex items-center gap-1 flex-wrap justify-end">
          {isEditing && (
            <TransactionButton
              transaction={() => prepareContractCall({
                contract,
                method: "function removeTier(uint256 _index)",
                params: [BigInt(index)]
              })}
              onTransactionConfirmed={async => alert("Removed")}
              className="bg-red-600 hover:bg-red-700 text-white px-1.5 py-0.5 text-[10px] leading-none rounded"
            >
              Remove
            </TransactionButton>
          )}
          {isActive && (
            <TransactionButton
              transaction={() => prepareContractCall({
                contract,
                method: "function fund(uint256 _tierIndex) payable",
                params: [BigInt(index)],
                value: tier.amount,
              })}
              onTransactionConfirmed={async () => alert("Transaction Successful")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 text-[10px] leading-none rounded"
            >
              Select
            </TransactionButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default TierCard;
