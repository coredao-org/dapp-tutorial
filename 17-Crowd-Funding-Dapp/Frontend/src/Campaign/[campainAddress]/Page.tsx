import React, { useState } from "react";
import { getContract, ThirdwebContract } from "thirdweb";
import { client } from "../../client";
import { useParams } from "react-router-dom";
import {
  lightTheme,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { sendTransaction } from "thirdweb";
import TierCard from "../../components/TierCard";
import { tcore2 } from "../../chains";
import { prepareContractCall } from "thirdweb";
import { useEffect } from "react";

function CampaignPage() {
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
  const { campaignAddress } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [daysToExtend, setDaysToExtend] = useState(0); // New state for days to extend
  const [deadlineUpdated, setDeadlineUpdated] = useState(false);
  const account = useActiveAccount();
  const contract = getContract({
    client: client,
    chain: tcore2,
    address: campaignAddress as string,
  });

  const { data: name, isLoading: isLoadName } = useReadContract({
    contract,
    method: "function name() view returns (string)",
    params: [],
  });

  const { data: deadLine, isLoading: isLoadDeadline } = useReadContract({
    contract,
    method: "function deadLine() view returns (uint256)",
    params: [],
  });
  let deadLineDate = new Date(parseInt(deadLine?.toString() as string) * 1000);
  const deadLinePasses = deadLineDate < new Date();
function abc(){   deadLineDate = new Date(parseInt(deadLine?.toString() as string) * 1000);
  const deadLinePasses = deadLineDate < new Date();
}



  const { data: description } = useReadContract({
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

  const totalBalance = balance?.toString() || "0";
  const totalGoal = goal?.toString() || "1";
  let balancePercentage = (parseInt(totalBalance) / parseInt(totalGoal)) * 100;
  if (balancePercentage > 100) {
    balancePercentage = 100;
  }

  const { data: tiers, isLoading: isLoadingTiers } = useReadContract({
    contract,
    method: "function getTiers() view returns ((string name, uint256 amount, uint256 backers)[])",
    params: [],
  });

  const { data: owner, isLoading: isLoadOwner } = useReadContract({
    contract,
    method: "function owner() view returns (address)",
    params: [],
  });

  const { data: status, isPending } = useReadContract({
    contract,
    method: "function state() view returns (uint8)",
    params: [],
  });

  // const handleWithdraw = async () => {
  //   const transaction = await prepareContractCall({
  //     contract,
  //     method: "function withdraw()",
  //     params: [],
  //   });
  //   await sendTransaction({
  //     transaction,
  //     account: account!,
  //   });
  //   setDeadlineUpdated(!deadlineUpdated);
  // };

  // useEffect(() => {
  // abc();
  // }, [deadlineUpdated]);

  // const handleExtendDeadline = async () => {
  //   const transaction = await prepareContractCall({
  //     contract,
  //     method: "function extendDeadLine(uint256 _daysAdded)",
  //     params: [BigInt(daysToExtend)],
  //   });
  //   await sendTransaction({
  //     transaction,
  //     account: account!,
  //   });
  // };
  // const getStatusText = (status: number): string => {
  //   switch (status) {
  //     case 0:
  //       return "Active";
  //     case 1:
  //       return "Completed";
  //     case 2:
  //       return "Rejected";
  //     default:
  //       return "Unknown";
  //   }
  // };
  
  const handleWithdraw = async () => {
    return prepareContractCall({
      contract,
      method: "function withdraw()",
      params: [],
    });
  };
  
  const handleExtendDeadline = async () => {
    return prepareContractCall({
      contract,
      method: "function extendDeadLine(uint256 _daysAdded)",
      params: [BigInt(daysToExtend)],
    });
  };
  
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
  
  // useEffect example
  useEffect(() => {
    const deadLineDate = new Date(parseInt(deadLine?.toString() || "0") * 1000);
    const deadLinePasses = deadLineDate < new Date();
  }, [deadlineUpdated, deadLine]);
  

  return (
    <div className="mx-auto max-w-5xl px-4 mt-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          {!isLoadName && <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{name}</p>}
        </div>
        {owner === account?.address && (
          <div className="flex items-center space-x-3">
            <button
              className="rounded-lg px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Done" : "Edit"}
            </button>
            {goal === balance && (
              <TransactionButton transaction={handleWithdraw} theme={lightTheme()}>
                Withdraw
              </TransactionButton>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Description</p>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Deadline</p>
          <p className="text-gray-700 dark:text-gray-300">{deadLineDate.toDateString()}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 mt-6">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Campaign Goal</p>
        <p className="text-gray-700 dark:text-gray-300">tCORE2 {formatFromWei(totalGoal)}</p>
        <div className="w-full mt-3 space-y-2">
          <div className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" style={{ width: `${balancePercentage}%` }} />
          </div>
          <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
            <span className="whitespace-nowrap">tCORE2 {formatFromWei(totalBalance)}</span>
            <span className="whitespace-nowrap">{balancePercentage >= 100 ? "Goal Achieved" : `${balancePercentage.toFixed(2)}%`}</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 mt-6">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tiers</p>
          {isEditing && (
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-4 py-2"
              onClick={() => setIsModelOpen(true)}
            >
              + Add Tier
            </button>
          )}
        </div>
        <div className="mt-4">
          {isLoadingTiers ? (
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          ) : (
            tiers && tiers.length > 0 ? (
              tiers.map((tier, index) => (
                <TierCard
                  isEditing={isEditing}
                  key={index}
                  index={index}
                  tier={tier}
                  contract={contract}
                />
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300">No Tiers Available</p>
            )
          )}
        </div>
      </div>

      {isModelOpen && (
        <CreateTierModal setIsModelOpen={setIsModelOpen} contract={contract} />
      )}
    </div>
  );
}



export default CampaignPage;

type CreateTierModelP = {
  setIsModelOpen: (value: boolean) => void;
  contract: ThirdwebContract;
};

const CreateTierModal = ({ setIsModelOpen, contract }: CreateTierModelP) => {
  const [tierName, setTierName] = useState<string>("");
  const [tierAmount, setTierAmount] = useState<bigint>(1n);
  
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center backdrop-blur-sm">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Create a Funding Tier</p>
          <button
            className="text-sm px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-100 rounded-md"
            onClick={() => setIsModelOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700 dark:text-gray-300">Tier Name</label>
          <input
            type="text"
            value={tierName}
            onChange={(e) => setTierName(e.target.value)}
            placeholder="Tier Name"
            className="mb-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="mb-1 text-sm text-gray-700 dark:text-gray-300">Tier Amount (tCORE2)</label>
          <input
            type="number"
            value={parseInt(tierAmount.toString())}
            onChange={(e) => setTierAmount(BigInt(e.target.value))}
            placeholder="Amount"
            className="mb-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract,
              method: "function addTier(string _name, uint256 _amount)",
              params: [tierName, tierAmount],
            })
          }
          theme={lightTheme()}
          className="w-full sm:w-auto mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
          onTransactionConfirmed={()=>{alert("Tier Added Succesfully"); setIsModelOpen(false)}}>
          Create Tier
        </TransactionButton>
      </div>
    </div>
  );
};
