import React, { useState, useEffect } from 'react';
import { ethers, formatEther, parseEther, Web3Provider } from 'ethers';
import coffeeDonationAbi from '../../artifacts/contracts/CoffeeDonation.sol/CoffeeDonation.json';

const contractAddress = "0x657D354a2Dc66Dcbc3d4bF420188E899F9f51a44";

function App() {
    const [account, setAccount] = useState(null);
    const [message, setMessage] = useState("");
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetchDonations();
    }, []);

    async function connectWallet() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } else {
            alert("Please install MetaMask");
        }
    }

    async function fetchDonations() {
        const provider = new Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, coffeeDonationAbi.abi, provider);
        const donations = await contract.getDonations();
        setDonations(donations);
    }

    async function buyCoffee() {
        if (!message) return;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, coffeeDonationAbi.abi, signer);

        try {
            const tx = await contract.buyCoffee(message, { value: parseEther("0.01") });
            await tx.wait();
            setMessage("");
            fetchDonations(); // Refresh donations
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Buy Me a Coffee</h1>
            {!account && <button onClick={connectWallet}>Connect Wallet</button>}
            {account && <p>Connected as: {account}</p>}
            <input
                type="text"
                placeholder="Leave a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={buyCoffee}>Buy Coffee (0.01 ETH)</button>

            <h2>Recent Donations</h2>
            <ul>
                {donations.map((donation, index) => (
                    <li key={index}>
                        <p><strong>From:</strong> {donation.donor}</p>
                        <p><strong>Message:</strong> {donation.message}</p>
                        <p><strong>Amount:</strong> {formatEther(donation.amount)} ETH</p>
                        <p><small>{new Date(donation.timestamp * 1000).toLocaleString()}</small></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
