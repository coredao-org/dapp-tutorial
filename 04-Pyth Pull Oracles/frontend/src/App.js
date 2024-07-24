import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import PythFeedBoilerplateArtifact from './PythFeedBoilerplateAbi.json';

// Replace with your deployed contract address on the mainnet
const PythFeedBoilerplateAddress = '0xd83f0E21D8b7364A9617C56B00d150067a7E2Db7'; // Use the actual deployed contract address

// Extract the ABI from the artifact
const PythFeedBoilerplateABI = PythFeedBoilerplateArtifact.abi;

function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchPrice = async () => {
      try {
        if (!window.ethereum) {
          console.error('MetaMask not detected');
          return;
        }

        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a new provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(PythFeedBoilerplateAddress, PythFeedBoilerplateABI, provider);

        console.log('Fetching price...');
        const priceFeedId = "0x9b4503710cc8c53f75c30e6e4fda1a7064680ef2e0ee97acd2e3a7c37b3c830c"; // CORE/USD
        const [rawPrice, expo] = await contract.getPriceWithoutUpdate(priceFeedId);

        // Adjust the price based on the exponent
        const adjustedPrice = rawPrice * Math.pow(10, expo);  // Ensure correct adjustment
        setPrice(adjustedPrice.toFixed(5)); // Format to 5 decimal places
        console.log('Price fetched:', adjustedPrice);
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    // Fetch the price immediately when the component mounts
    fetchPrice();

    // Set up an interval to fetch the price every 3 seconds (3000 milliseconds)
    intervalId = setInterval(fetchPrice, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pyth Feed Boilerplate</h1>
      </header>
      <div className="price-container">
        <p>CORE / USD</p>
        <p className="price">Price: {price !== null ? `$${price}` : 'Loading...'}</p>
      </div>
    </div>
  );
}

export default App;
