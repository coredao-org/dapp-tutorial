import React, { useEffect, useState } from 'react';
import { getTasks, initWeb3, getNetworkInfo, areContractsDeployed } from '../utils/web3';
import TaskCard from './TaskCard';
import SetupGuide from './SetupGuide';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [networkInfo, setNetworkInfo] = useState(null);
    const [contractStatus, setContractStatus] = useState(null);
    const [showSetupGuide, setShowSetupGuide] = useState(false);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            
            // Initialize Web3 connection
            await initWeb3();
            
            // Get network info
            const network = await getNetworkInfo();
            setNetworkInfo(network);
            
            // Check if contracts are deployed
            const contractCheck = await areContractsDeployed();
            setContractStatus(contractCheck);
            
            if (!contractCheck.deployed) {
                setError(contractCheck.message);
                return;
            }
            
            // Fetch tasks
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleTaskUpdated = () => {
        // Refresh the task list when a task is updated
        fetchTasks();
    };

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading tasks...</h2>
                <p>Connecting to blockchain...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2>🎯 Available Tasks</h2>
                {networkInfo && (
                    <p style={{ color: '#666' }}>
                        Connected to: {networkInfo.name} (Chain ID: {networkInfo.chainId})
                    </p>
                )}
                
                <div className="error">
                    <p><strong>⚠️ {error}</strong></p>
                    
                    {contractStatus && !contractStatus.deployed && (
                        <div style={{ marginTop: '15px' }}>
                            <h4>📋 Next Steps:</h4>
                            <ol style={{ textAlign: 'left', margin: '10px 0' }}>
                                <li>Make sure you've set up your <code>.env</code> file with valid credentials</li>
                                <li>Deploy contracts to {networkInfo?.name} network:
                                    <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
                                        npm run deploy:sepolia
                                    </pre>
                                </li>
                                <li>Or switch to Hardhat local network where contracts are deployed</li>
                            </ol>
                        </div>
                    )}
                    
                    <div style={{ marginTop: '15px' }}>
                        <button className="btn" onClick={fetchTasks} style={{ marginRight: '10px' }}>
                            🔄 Retry Connection
                        </button>
                        <button 
                            className="btn" 
                            onClick={() => window.open('http://localhost:3000', '_blank')}
                            style={{ backgroundColor: '#6c757d' }}
                        >
                            📖 Setup Guide
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <h2>🎯 Available Tasks</h2>
                {networkInfo && (
                    <p style={{ color: '#666' }}>
                        Connected to: {networkInfo.name} (Chain ID: {networkInfo.chainId})
                    </p>
                )}
                <button className="btn" onClick={fetchTasks} style={{ marginBottom: '15px' }}>
                    🔄 Refresh Tasks
                </button>
            </div>
            
            <div className="task-list">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard 
                            key={task.id} 
                            task={task} 
                            onTaskUpdated={handleTaskUpdated}
                        />
                    ))
                ) : (
                    <div style={{ 
                        gridColumn: '1 / -1', 
                        textAlign: 'center', 
                        padding: '40px',
                        background: 'white',
                        borderRadius: '8px'
                    }}>
                        <h3>No tasks available</h3>
                        <p>Be the first to create a task!</p>
                        <a href="/create-task" className="btn">Create Task</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskList;