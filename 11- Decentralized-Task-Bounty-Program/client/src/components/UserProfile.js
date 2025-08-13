import React, { useState, useEffect } from 'react';
import { getCurrentAccount, getUserReputation, getNetworkInfo } from '../utils/web3';

const UserProfile = () => {
    const [userAddress, setUserAddress] = useState('');
    const [reputation, setReputation] = useState({ score: '0', completedTasks: '0' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [networkInfo, setNetworkInfo] = useState(null);

    const fetchUserProfile = async () => {
        try {
            setLoading(true);
            setError('');

            // Get current user address
            const address = await getCurrentAccount();
            setUserAddress(address);

            // Get network info
            const network = await getNetworkInfo();
            setNetworkInfo(network);

            // Get user reputation
            const userRep = await getUserReputation(address);
            setReputation(userRep);

        } catch (error) {
            console.error('Error fetching user profile:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const formatAddress = (address) => {
        if (!address) return '';
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading profile...</h2>
                <p>Getting your blockchain information...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="user-profile">
                <h2>👤 User Profile</h2>
                <div className="error">
                    <p><strong>Error:</strong> {error}</p>
                    <button className="btn" onClick={fetchUserProfile}>Retry</button>
                </div>
            </div>
        );
    }

    return (
        <div className="user-profile">
            <h2>👤 User Profile</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <button className="btn" onClick={fetchUserProfile}>
                    🔄 Refresh Profile
                </button>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px',
                marginBottom: '20px'
            }}>
                <div style={{ 
                    padding: '20px', 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: '8px'
                }}>
                    <h3>🔗 Wallet Address</h3>
                    <p style={{ fontSize: '0.9em', wordBreak: 'break-all' }}>
                        {userAddress}
                    </p>
                    <p style={{ fontSize: '0.8em', opacity: '0.8' }}>
                        Short: {formatAddress(userAddress)}
                    </p>
                </div>

                <div style={{ 
                    padding: '20px', 
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    borderRadius: '8px'
                }}>
                    <h3>⭐ Reputation Score</h3>
                    <p style={{ fontSize: '2em', margin: '10px 0' }}>{reputation.score}</p>
                    <p style={{ fontSize: '0.8em', opacity: '0.8' }}>
                        Based on completed tasks
                    </p>
                </div>

                <div style={{ 
                    padding: '20px', 
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    borderRadius: '8px'
                }}>
                    <h3>✅ Completed Tasks</h3>
                    <p style={{ fontSize: '2em', margin: '10px 0' }}>{reputation.completedTasks}</p>
                    <p style={{ fontSize: '0.8em', opacity: '0.8' }}>
                        Tasks successfully completed
                    </p>
                </div>
            </div>

            {networkInfo && (
                <div style={{ 
                    padding: '15px', 
                    background: '#f8f9fa', 
                    borderRadius: '8px',
                    marginBottom: '20px'
                }}>
                    <h4>🌐 Network Information</h4>
                    <p><strong>Network:</strong> {networkInfo.name}</p>
                    <p><strong>Chain ID:</strong> {networkInfo.chainId}</p>
                </div>
            )}

            <div style={{ 
                padding: '15px', 
                background: '#e8f5e8', 
                borderRadius: '8px',
                border: '1px solid #4CAF50'
            }}>
                <h4>💡 How to earn reputation:</h4>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li>Complete tasks posted by other users</li>
                    <li>Submit quality work that gets verified</li>
                    <li>Each completed task increases your reputation by 10 points</li>
                    <li>Higher reputation builds trust with task creators</li>
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;