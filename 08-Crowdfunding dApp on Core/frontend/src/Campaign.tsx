import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Campaign from "./abis/Campaign.json"
import { ethers } from 'ethers'

export default function CampaignPage() {
    const { campaignAddress } = useParams()

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [funds, setFunds] = useState<number>()
    const [owner, setOwner] = useState<string>('')

    const [fundingAmount, setFundingAmount] = useState<number>(0)

    useEffect(() => {
        async function fetchCampaign() {
            if (!campaignAddress) return
            const provider = new ethers.BrowserProvider(window.ethereum)
            const campaignContract = new ethers.Contract(campaignAddress, Campaign.abi, provider)
            setTitle(await campaignContract.title())
            setDescription(await campaignContract.description())
            setOwner(await campaignContract.owner())
            setFunds(Number(await provider.getBalance(campaignAddress)) / (10 ** 18))
        }
        fetchCampaign()
    }, [])

    async function withdrawFunds() {
        if (!campaignAddress) return
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()

            if ((await signer.getAddress()).toLowerCase() !== owner.toLowerCase()) {
                alert("You are not the owner of this campaign")
                return
            }
            const campaignContract = new ethers.Contract(campaignAddress, Campaign.abi, signer)
            const tx = await campaignContract.withdraw()
            await tx.wait()
        } catch (error) {
            console.error(error)
        }
    }



    async function fundCampaign() {
        if (!campaignAddress) return
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const campaignContract = new ethers.Contract(campaignAddress, Campaign.abi, signer)
            const tx = await campaignContract.fund({ value: ethers.parseEther(fundingAmount.toString()) })
            await tx.wait()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>Funds: {funds}</p>
            <p>Owner: {owner}</p>
            <p>Campaign Address: {campaignAddress}</p>

            <input type="number" value={fundingAmount} onChange={(e) => setFundingAmount(Number(e.target.value))} />
            <button onClick={fundCampaign}>Fund Campaign</button>
            <button onClick={withdrawFunds}>Withdraw Funds</button>
        </div>
    )
}


