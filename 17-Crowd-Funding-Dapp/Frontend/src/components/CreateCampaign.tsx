import React, { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { tcore2 } from "../chains";
import { client } from "../client";
import { getContract, prepareContractCall, sendTransaction } from "thirdweb";
import { CROWDFUNDING_FACTORY } from "../contants/contract";
import { useNavigate } from "react-router-dom";

interface Errors {
  campaignName?: string;
  campaignDescription?: string;
  campaignGoal?: string;
  campaignDeadline?: string;
}

function CreateCampaign() {
  const account = useActiveAccount();
  const [campaignName, setCampaignName] = useState<string>("");
  const [campaignDescription, setCampaignDescription] = useState<string>("");
  const [campaignGoal, setCampaignGoal] = useState<string>("");
  const [campaignDeadline, setCampaignDeadline] = useState<string>("");
  const [isDeploying, setIsDeploying] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  // Function to validate form fields
  const validateForm = () => {
    const newErrors: Errors = {};
    
    if (!campaignName) newErrors.campaignName = "Campaign name is required.";
    if (!campaignDescription) newErrors.campaignDescription = "Campaign description is required.";
    
    if (!campaignGoal || Number(campaignGoal) <= 0) {
      newErrors.campaignGoal = "Campaign goal must be a positive number.";
    }
    
    if (!campaignDeadline || Number(campaignDeadline) <= 0) {
      newErrors.campaignDeadline = "Campaign deadline must be a valid number.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDeployContract = async () => {
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setIsDeploying(true);
    try {
      // Convert user-entered tCORE2 (18 decimals) to wei BigInt
      const parseToWei = (amount: string, decimals: number): bigint => {
        const [whole, frac = ""] = amount.split(".");
        const fracPadded = (frac + "0".repeat(decimals)).slice(0, decimals);
        const normalized = `${whole || "0"}${fracPadded}`.replace(/^0+(?=\d)/, "");
        return BigInt(normalized || "0");
      };
      const goalWei = parseToWei(campaignGoal, 18);

      const factory = getContract({ client, chain: tcore2, address: CROWDFUNDING_FACTORY });
      const transaction = await prepareContractCall({
        contract: factory,
        method: "function createCampaign(string _name, string _description, uint256 _goal, uint256 _duration)",
        params: [campaignName, campaignDescription, goalWei, BigInt(Number(campaignDeadline))],
      });
      await sendTransaction({ transaction, account: account! });
      alert("Campaign created successfully!");
      navigate("/dashboard/:id"); // Redirect to Dashboard after creation
    } catch (err) {
      console.error(err);
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Create a Campaign</h2>

        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Name</label>
            <input
              type="text"
              placeholder="e.g. Build a community garden"
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
            {errors.campaignName && <p className="mt-1 text-sm text-red-500">{errors.campaignName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Description</label>
            <input
              type="text"
              placeholder="What are you raising funds for?"
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={campaignDescription}
              onChange={(e) => setCampaignDescription(e.target.value)}
            />
            {errors.campaignDescription && <p className="mt-1 text-sm text-red-500">{errors.campaignDescription}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Goal (tCORE2)</label>
              <input
                type="number"
                placeholder="e.g. 1.5"
                className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={campaignGoal}
                onChange={(e) => setCampaignGoal(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Enter amount in tCORE2. We will convert to wei on-chain.</p>
              {errors.campaignGoal && <p className="mt-1 text-sm text-red-500">{errors.campaignGoal}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration (days)</label>
              <input
                type="number"
                placeholder="e.g. 30"
                className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={campaignDeadline}
                onChange={(e) => setCampaignDeadline(e.target.value)}
              />
              {errors.campaignDeadline && <p className="mt-1 text-sm text-red-500">{errors.campaignDeadline}</p>}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-60"
              onClick={handleDeployContract}
              disabled={isDeploying}
            >
              {isDeploying ? "Creating..." : "Create Campaign"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCampaign;
