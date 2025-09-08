// import { CROWDFUNDING_FACTORY } from "../../contants/contract";
// import { client } from "../../client";
// import { baseSepolia } from "thirdweb/chains";
// import { getContract } from "thirdweb";
// import { useActiveAccount, useReadContract } from "thirdweb/react";
// import Campaign from "../../components/Campaign";
// import { useEffect, useState } from "react";
// import { deployPublishedContract } from "thirdweb/deploys";

// function Dashboard() {
//   const [modelOpen, setModelOpen] = useState(false);
//   const account = useActiveAccount();
//   const [campaigns, setCampaigns] = useState([]);
  
//   const contract = getContract({
//     client: client,
//     chain: baseSepolia,
//     address: CROWDFUNDING_FACTORY,
//   });

//   const { data, isLoading, refetch } = useReadContract({
//     contract,
//     method:
//       "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
//     params: [account?.address as string],
//   });

//   // Fetch campaigns when data is available or refetched
//   useEffect(() => {
//     if (data) {
//       setCampaigns(data);
//     }
//   }, [data]);

//   const refreshCampaigns = async () => {
//     await refetch();
//   };

//   return (
//     <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8">
//       <div className="flex flex-row justify-between items-center mb-8">
//         <p className="text-4xl font-semibold">Dashboard</p>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={() => setModelOpen(true)}
//         >
//           Create Campaign
//         </button>
//       </div>

//       <p className="text-2xl font-semibold mb-4">Your Campaigns</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
//         {isLoading ? (
//           <p>Loading campaigns...</p>
//         ) : campaigns.length > 0 ? (
//           campaigns.map((campaign, index) => (
//             <Campaign key={index} campaignAddress={campaign.campaignAddress} />
//           ))
//         ) : (
//           <p>No Campaigns Found!</p>
//         )}
//       </div>

//       {modelOpen && (
//         <CreateCampaignModal ismodelOpen={setModelOpen} onCampaignCreated={refreshCampaigns} />
//       )}
//     </div>
//   );
// }

// export default Dashboard;
// const CreateCampaignModal = ({ ismodelOpen, onCampaignCreated }) => {
//   const account = useActiveAccount();
//   const [campaignName, setCampaignName] = useState<string>("");
//   const [campaignDescription, setCampaignDescription] = useState<string>("");
//   const [campaignGoal, setCampaignGoal] = useState<number>(1);
//   const [campaignDeadline, setCampaignDeadline] = useState<number>(1);
//   const [isDeploying, setIsDeploying] = useState(false);

//   const handleDeployContract = async () => {
//     setIsDeploying(true);
//     try {
//       const contractAddress = await deployPublishedContract({
//         client: client,
//         chain: baseSepolia,
//         account: account!,
//         contractParams: { 
//           name: campaignName,
//           description: campaignDescription,
//           goal: campaignGoal,
//           duration: campaignDeadline,
//         },
//         contractId: "CrowdFunding",
//         publisher: "0x561c8D54eD5433a229B91654B4927f043782CCF0",
//         version: "1.0.3",
//       });
//       alert("Campaign created successfully!");

//       // Trigger a refresh of campaigns in the Dashboard
//       onCampaignCreated();
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsDeploying(false);
//       ismodelOpen(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center backdrop-blur-md">
//       <div className="bg-white p-6 rounded-lg w-1/3">
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-lg font-semibold">Create a Campaign</p>
//           <button
//             className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
//             onClick={() => ismodelOpen(false)}
//           >
//             Close
//           </button>
//         </div>
//         <input
//           type="text"
//           placeholder="Campaign Name"
//           className="w-full p-2 mb-4 border"
//           value={campaignName}
//           onChange={(e) => setCampaignName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Campaign Description"
//           className="w-full p-2 mb-4 border"
//           value={campaignDescription}
//           onChange={(e) => setCampaignDescription(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Campaign Goal"
//           className="w-full p-2 mb-4 border"
//           value={campaignGoal}
//           onChange={(e) => setCampaignGoal(Number(e.target.value))}
//         />
//         <input
//           type="number"
//           placeholder="Campaign Deadline"
//           className="w-full p-2 mb-4 border"
//           value={campaignDeadline}
//           onChange={(e) => setCampaignDeadline(Number(e.target.value))}
//         />
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={handleDeployContract}
//           disabled={isDeploying}
//         >
//           {isDeploying ? "Creating..." : "Create Campaign"}
//         </button>
//       </div>
//     </div>
//   );
// };
import { CROWDFUNDING_FACTORY } from "../../contants/contract";
import { client } from "../../client";
import { tcore2 } from "../../chains";
import { getContract } from "thirdweb";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import Campaign from "../../components/Campaign";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const account = useActiveAccount();
//   const [campaigns, setCampaigns] = useState([]);
//   const navigate = useNavigate();

//   const contract = getContract({
//     client: client,
//     chain: baseSepolia,
//     address: CROWDFUNDING_FACTORY,
//   });

//   const { data, isLoading, refetch } = useReadContract({
//     contract,
//     method:
//       "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
//     params: [account?.address as string],
//   });

//   // Fetch campaigns when data is available or refetched
//   useEffect(() => {
//     if (data) {
//       setCampaigns(data);
//     }
//   }, [data]);

//   const refreshCampaigns = async () => {
//     await refetch();
//   };

//   return (
//     <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8">
//       <div className="flex flex-row justify-between items-center mb-8">
//         <p className="text-4xl font-semibold">Dashboard</p>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={() => navigate("/create-campaign")}
//         >
//           Create Campaign
//         </button>
//       </div>

//       <p className="text-2xl font-semibold mb-4">Your Campaigns</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
//         {isLoading ? (
//           <p>Loading campaigns...</p>
//         ) : campaigns.length > 0 ? (
//           campaigns.map((campaign, index) => (
//             <Campaign key={index} campaignAddress={campaign.campaignAddress} />
//           ))
//         ) : (
//           <p>No Campaigns Found!</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


function Dashboard() {
  const [filterStatus, setFilterStatus] = useState("all"); // State to store filter criteria

  const contract = getContract({
    client: client,
    chain: tcore2,
    address: CROWDFUNDING_FACTORY,
  });
  const account = useActiveAccount();
    //  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  // const { data: campaigns, isPending } = useReadContract({
  //   contract,
  //   method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
  //   params: [],
  // });
    const { data:campaigns, isPending, refetch } = useReadContract({
    contract,
    method:
      "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
    params: [account?.address as string],
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
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-black-700 text-2xl font-medium">Dashboard</h1>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => navigate("/create-campaign")}
            >
              Create Campaign
            </button>
          </div>
        
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

export default Dashboard;
