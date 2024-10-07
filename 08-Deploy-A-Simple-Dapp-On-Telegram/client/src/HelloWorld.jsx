import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useReadContract, useWriteContract } from 'wagmi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './HelloWorld.css'; 

// Import ABI from JSON file
import HelloWorldABI from './Contract-ABI/HelloWorld.json';

// Replace with your contract's address
const contractAddress = "0xBF46BAA6210Ae6c9050F5453B996070209f69830";

function HelloWorld() {
    const [newMessage, setNewMessage] = useState('');
    const [currentMessage, setCurrentMessage] = useState(null);

    // Contract config
    const contractConfig = {
        address: contractAddress,
        abi: HelloWorldABI.abi,
    };

    // Read the current message from the contract
    const { data: message, refetch: refetchMessage, isFetching } = useReadContract({
        ...contractConfig,
        functionName: 'message',
        onSuccess(data) {
            toast.success('Message retrieved successfully!');
            setCurrentMessage(data?.toString()); // Save the message to state
        },
        onError(error) {
            toast.error('Failed to retrieve message. Please try again.');
            console.error('Error retrieving message:', error);
        }
    });

    // Write contract configuration
    const { writeContract, isError, isLoading, isSuccess } = useWriteContract({
        mutation: {
            onSuccess: (data) => {
                toast.success('Transaction sent successfully!');
                setNewMessage(''); // Clear the input field
            },
            onError: (error) => {
                toast.error('Failed to send the transaction. Please try again.');
                console.error('Error sending transaction:', error);
            }
        }
    });

    // Use effect to update the displayed message after fetching
    useEffect(() => {
        if (message && !isFetching) {
            setCurrentMessage(message?.toString());
            toast.success("message retrieved successfully");
        }
    }, [message, isFetching]);

    // Use effect to refetch message after successful transaction
    // useEffect(() => {
    //     if (isSuccess) {
    //         // Wait a bit for the blockchain to update
    //         const timer = setTimeout(() => {
    //             refetchMessage();
    //             toast.success("message retrieved successfully");

    //         }, 2000); // Adjust this delay as needed
    //         return () => clearTimeout(timer);
    //     }
    // }, [isSuccess, refetchMessage]);

    const handleSendMessage = async () => {
        if (!newMessage.trim()) {
            toast.warn('Please enter a message');
            return;
        }

        writeContract({
            ...contractConfig,
            functionName: 'setMessage',
            args: [newMessage],
        });
    };

    const handleRetrieveMessage = () => {
        refetchMessage();
    };

    return (
        <div>
            <div className="flex justify-center items-center w-full h-screen">
                <div className='border-white'>
                    <div className='mx-2'>
                         <img src={logo} alt="Core DAO Logo" className="logo" /> 
                    </div>
                    <ConnectButton/>
                    <ToastContainer />

                    {currentMessage && (
                        <div className="text-[#e67e22]">{currentMessage}</div>
                    )}
                    <button 
                        className="w-full bg-[#e67e22] my-2" 
                        onClick={handleRetrieveMessage}
                    >
                        Retrieve Current Message
                    </button>
                    <br />
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="w-full h-10 p-2 my-3"
                        placeholder="Enter new message"
                    />
                    <button 
                        className="w-full bg-[#e67e22]" 
                        onClick={handleSendMessage}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send New Message'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HelloWorld;