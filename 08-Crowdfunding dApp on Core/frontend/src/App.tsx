import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import CampaignFactory from "./abis/CampaignFactory.json"
import Campaign from "./abis/Campaign.json"
import { Link } from 'react-router-dom'

type Campaign = {
  title: string
  description: string
  owner: string
  fund: number
  campaignAddress: string
}

const contractAddress = "0x6732D0158D83da10fC3cd49708edA26f339a944a"; // replace with your contract address

function App() {
  const [allCampaigns, setAllCampaigns] = useState<Campaign[]>([]);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  async function getAllCampaigns() {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const contract = new ethers.Contract(contractAddress, CampaignFactory.abi, provider);

    console.log(contract) 
    const _campaigns = await contract.getCampaigns();
    console.log(_campaigns)
    let campaigns: Campaign[] = [];

    for (let i = 0; i < _campaigns.length; i++) {
      const campaign = _campaigns[i];
      console.log(campaign)
      const campaignContract = new ethers.Contract(campaign, Campaign.abi, provider);
      console.log(campaignContract)
      campaigns.push({
        title: await campaignContract.title(),
        description: await campaignContract.description(),
        owner: await campaignContract.owner(),
        fund: Number(await provider.getBalance(campaign)) / (10 ** 18),
        campaignAddress: campaign
      });
    }
    setAllCampaigns(campaigns);
  }

  async function connectWallet() {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const [account] = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(account);
    } catch (error) {
      console.log("Error fetching network:", error);
    }
  }
  useEffect(() => {
    connectWallet();
    getAllCampaigns();
  }, []);

  async function createCampaign() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, CampaignFactory.abi, signer);
      const tx = await contract.createCampaign(title, description);
      await tx.wait();
      getAllCampaigns();

    } catch (error) {
      console.log("Error creating campaign:", error);
    }
  }


  return (
    <main>
      {
        walletAddress ? (
          <>
            <h2>Create new campaign</h2>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={createCampaign}>Create</button>
            <p>
              Connected Address: <strong>{walletAddress}</strong>
              {
                allCampaigns.map((campaign, index) => (
                  <Link to={`/campaign/${campaign.campaignAddress}`} key={index}>
                    <h3>{campaign.title}</h3>
                    <p>{campaign.description}</p>
                    <p>Owner: {campaign.owner}</p>
                    <p>Fund: {campaign.fund}</p>
                  </Link>
                ))
              }
            </p></>
        ) : (
          <p>Please connect your wallet</p>
        )
      }


    </main>
  )
}

export default App
