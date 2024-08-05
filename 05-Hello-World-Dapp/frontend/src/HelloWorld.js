import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import './HelloWorld.css'; // Import the CSS file

// Import ABI from JSON file
import HelloWorldABI from './Contract-ABI/HelloWorld.json';

// Import the logo image
import logo from './core-dao-logo.png'; // Adjust the path as needed

// Replace with your contract's address
const contractAddress = "0xBF46BAA6210Ae6c9050F5453B996070209f69830";

function HelloWorld() {
    const [message, setMessage] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [showMessage, setShowMessage] = useState(false); // State to control message visibility

    useEffect(() => {
        async function init() {
            if (!window.ethereum) {
                toast.error("No crypto wallet found. Please install MetaMask.");
                return;
            }

            try {
                // Prompt user to connect MetaMask
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(contractAddress, HelloWorldABI.abi, signer);
                setProvider(provider);
                setContract(contract);
            } catch (error) {
                toast.error("Failed to connect to MetaMask. Please try again.");
                console.error("Error initializing MetaMask:", error);
            }
        }

        init();
    }, []);

    const updateMessage = async () => {
        if (!contract) return;
        try {
            const tx = await contract.setMessage(newMessage);
            await tx.wait();
            setNewMessage(''); // Clear the input field after updating
            toast.success("Message updated successfully!");
        } catch (error) {
            toast.error("Failed to update message. Please try again.");
            console.error("Error updating message:", error);
        }
    };

    const retrieveMessage = async () => {
        if (!contract) return;
        try {
            const currentMessage = await contract.message();
            setMessage(currentMessage);
            setShowMessage(true); // Show the message after retrieval
            toast.success("Message retrieved successfully!");
        } catch (error) {
            toast.error("Failed to retrieve message. Please try again.");
            console.error("Error retrieving message:", error);
        }
    };

    return (
        <div className="container">
            <ToastContainer /> {/* Add ToastContainer to display notifications */}
            <img src={logo} alt="Core DAO Logo" className="logo" />
            {showMessage && (
                <div className="message-display">{message}</div>
            )}
            <button className="retrieve-button" onClick={retrieveMessage}>Retrieve Current Message</button>
            <br/>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="input-field"
                placeholder="Enter new message"
            />
            <button className="update-button" onClick={updateMessage}>Set New Message</button>
        </div>
    );
}

export default HelloWorld;
