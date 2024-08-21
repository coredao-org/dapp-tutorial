import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers'; // Updated import for Web3Provider
import { Contract } from 'ethers';
import GuestbookArtifact from './GuestbookAbi.json';

const contractAddress = '0x0D0b3bAc514d53AafC95c74294Bb1B613D1862c2';
const GuestbookAbi = GuestbookArtifact.abi;

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
          const provider = new Web3Provider(window.ethereum); // Updated to Web3Provider
          
          await provider.send("eth_requestAccounts", []);

          const network = await provider.getNetwork();
          if (network.chainId !== 1115) {
            throw new Error("Please switch to the Core Testnet in MetaMask.");
          }

          const signer = provider.getSigner();
          console.log("Signer obtained:", signer);
          const tempContract = new Contract(contractAddress, GuestbookAbi, signer);
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
        gasLimit: 300000, 
      });
      console.log("Transaction sent:", tx);
      await tx.wait(); 

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
