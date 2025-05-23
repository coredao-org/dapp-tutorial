// frontend/src/ConnectWallet.jsx
import React, { useState } from 'react';

const ConnectWallet = ({ onConnect }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
        if (onConnect) onConnect(accounts[0]);
        alert('Wallet connected: ' + accounts[0]);
      } catch (err) {
        console.error('Wallet connection failed:', err);
        alert('Failed to connect wallet. Check console for details.');
      }
    } else {
      alert('Please install MetaMask.');
    }
  };

  return (
    <button
      onClick={connectWallet}
      disabled={isConnected}
      style={{
        background: isConnected ? '#cccccc' : '#4caf50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: isConnected ? 'not-allowed' : 'pointer',
        margin: '10px',
      }}
    >
      {isConnected ? `Connected: ${account?.slice(0, 6)}...${account?.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWallet;