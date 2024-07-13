import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const WalletConnect: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null); // State to hold ethers provider

    const connectWallet = async () => {
        const { ethereum } = window as any;

        if (ethereum) {
            try {
                const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                const newProvider = new ethers.providers.Web3Provider(ethereum);
                setProvider(newProvider); // Set ethers provider after connection
            } catch (error) {
                console.error("Error connecting to wallet:", error);
            }
        } else {
            alert("Please install MetaMask or another wallet provider.");
        }
    };

    useEffect(() => {
        const { ethereum } = window as any;
        
        if (ethereum) {
            const handleAccountsChanged = (accounts: string[]) => {
                setAccount(accounts[0] || null); // Set the first account or null if disconnected
            };

            const handleChainChanged = (chainId: string) => {
                console.log("Chain changed to:", chainId);
            };

            ethereum.on('accountsChanged', handleAccountsChanged);
            ethereum.on('chainChanged', handleChainChanged);

            return () => {
                ethereum.removeListener('accountsChanged', handleAccountsChanged);
                ethereum.removeListener('chainChanged', handleChainChanged);
            };
        }
    }, []);

    return (
        <div>
            {account ? (
                <p>Connected account: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;
