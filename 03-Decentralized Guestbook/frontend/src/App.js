import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import GuestbookArtifact from './GuestbookAbi.json'; // Import the entire JSON artifact

const contractAddress = '0x1947bf9c6eB678FB1fbf097a9bF81e1003C3AD4f'; // Replace with your deployed contract address
const GuestbookAbi = GuestbookArtifact.abi; // Extract the ABI

function App() {
  const [contract, setContract] = useState(null);
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        try {
          console.log("Connecting to MetaMask...");
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          
          await provider.send("eth_requestAccounts", []); // Request account access if needed

          const network = await provider.getNetwork();
          if (network.chainId !== 1115) {
            throw new Error("Please switch to the Core Testnet in MetaMask.");
          }

          const signer = provider.getSigner();
          console.log("Signer obtained:", signer);
          const tempContract = new ethers.Contract(contractAddress, GuestbookAbi, signer);
          setContract(tempContract);
          console.log("Contract initialized:", tempContract);

          const entries = await tempContract.getEntries();
          setEntries(entries);
          console.log("Entries loaded:", entries);
        } catch (error) {
          console.error("Error connecting to contract:", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("Please install MetaMask!");
        setError("Please install MetaMask!");
        setLoading(false);
      }
    };
    init();
  }, []);

  const signGuestbook = async () => {
    if (!contract) {
      console.error("Contract is not initialized!");
      setError("Contract is not initialized!");
      return;
    }

    try {
      console.log("Signing guestbook with:", name, message);
      const tx = await contract.signGuestbook(name, message, {
        gasLimit: 300000, // Adjust gas limit as necessary
      });
      console.log("Transaction sent:", tx);
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Transaction mined:", tx);

      const updatedEntries = await contract.getEntries();
      setEntries(updatedEntries);
      console.log("Updated entries:", updatedEntries);
    } catch (error) {
      console.error("Error signing guestbook:", error);
      setError("Error signing guestbook. Please try again.");
    }
  };

  return (
    <div>
      <h1>Guestbook DApp</h1>
      {loading ? (
        <p>Loading contract...</p>
      ) : (
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
          <button onClick={signGuestbook}>Sign Guestbook</button>
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>
                <strong>{entry.name}:</strong> {entry.message}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
