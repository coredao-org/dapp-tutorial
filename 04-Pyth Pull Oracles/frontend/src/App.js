import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

// Import Pyth ABI - we'll use require for JSON files
const PythAbi = require('@pythnetwork/pyth-sdk-solidity/abis/IPyth.json');

// Core Mainnet
const contractAddress = '0xA2aa501b19aff244D90cc15a4Cf739D2725B5729';
const provider = new ethers.JsonRpcProvider('https://rpc.coredao.org');
const contract = new ethers.Contract(contractAddress, PythAbi, provider);

const priceId = '0x9b4503710cc8c53f75c30e6e4fda1a7064680ef2e0ee97acd2e3a7c37b3c830c'; // CORE/USD
const age = '60';



function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchPrice = async () => {
      try {
        console.log('Fetching price...');
        
        // Use your new code to fetch price data
        const [price, conf, expo, timestamp] = await contract.getPriceNoOlderThan(priceId, age);
        
        console.log('Raw price data:', { price, conf, expo, timestamp });
        
        // Convert BigInt to Number for calculation
        const expoNumber = Number(expo);
        console.log('Exponent:', expoNumber);
        
        // Adjust the price based on the exponent
        // The price comes with a specific decimal precision, we need to adjust it
        const adjustedPrice = parseFloat(ethers.formatUnits(price, -expoNumber));
        setPrice(adjustedPrice.toFixed(5)); // Format to 5 decimal places
        console.log('Price fetched:', adjustedPrice);
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    // Fetch the price immediately when the component mounts
    fetchPrice();

    // Set up an interval to fetch the price every 2 minutes (120000 milliseconds)
    intervalId = setInterval(fetchPrice, 120000);

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
