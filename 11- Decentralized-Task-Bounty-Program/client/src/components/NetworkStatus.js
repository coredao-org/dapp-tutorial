import React, { useState, useEffect } from 'react';
import { getNetworkInfo, areContractsDeployed, getCurrentAccount } from '../utils/web3';

const NetworkStatus = () => {
    const [networkInfo, setNetworkInfo] = useState(null);
    const [contractStatus, setContractStatus] = useState(null);
    const [userAddress, setUserAddress] = useState('');
    const [loading, setLoading] = useState(true);

    const checkStatus = async () => {
        try {
            setLoading(true);
            
            // Get network info
            const network = await getNetworkInfo();
            setNetworkInfo(network);
            
            // Get user address
            const address = await getCurrentAccount();
            setUserAddress(address);
            
            // Check contracts
            const contracts = await areContractsDeployed();
            setContractStatus(contracts);
            
        } catch (error) {
            console.error('Error checking status:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkStatus();
    }, []);

    const getNetworkColor = (chainId) => {
        switch (chainId) {
            case '31337': return '#ff9800'; // Hardhat - orange
            case '11155111': return '#627eea'; // Sepolia - blue
            case '1115': return '#f39c12'; // Core testnet - yellow
            case '1': return '#627eea'; // Mainnet - blue
            default: return '#6c757d'; // Unknown - grey
        }
    };

    if (loading) {
        return (
            <div style={{ 
                position: 'fixed', 
                top: '10px', 
                right: '10px', 
                background: 'white', 
                padding: '10px', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                minWidth: '200px'
            }}>
                <p>🔄 Checking network...</p>
            </div>
        );
    }

    return (
        <div style={{ 
            position: 'fixed', 
            top: '10px', 
            right: '10px', 
            background: 'white', 
            padding: '15px', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minWidth: '250px',
            fontSize: '0.9em'
        }}>
            <h4 style={{ margin: '0 0 10px 0' }}>🌐 Network Status</h4>
            
            {networkInfo && (
                <div style={{ marginBottom: '10px' }}>
                    <div style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: getNetworkColor(networkInfo.chainId),
                        marginRight: '8px'
                    }}></div>
                    <strong>{networkInfo.name}</strong> ({networkInfo.chainId})
                </div>
            )}
            
            {userAddress && (
                <div style={{ marginBottom: '10px' }}>
                    <strong>Account:</strong><br />
                    <span style={{ fontSize: '0.8em', color: '#666' }}>
                        {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
                    </span>
                </div>
            )}
            
            <div>
                <strong>Contracts:</strong> {' '}
                <span style={{ 
                    color: contractStatus?.deployed ? 'green' : 'red',
                    fontWeight: 'bold'
                }}>
                    {contractStatus?.deployed ? '✅ Deployed' : '❌ Not Found'}
                </span>
            </div>
            
            <button 
                onClick={checkStatus}
                style={{ 
                    marginTop: '10px',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '4px',
                    background: '#007bff',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '0.8em'
                }}
            >
                🔄 Refresh
            </button>
        </div>
    );
};

export default NetworkStatus;
