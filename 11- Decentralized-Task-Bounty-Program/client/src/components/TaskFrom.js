import React, { useState } from 'react';
import { createTask, getCurrentAccount } from '../utils/web3';

const TaskForm = () => {
    const [description, setDescription] = useState('');
    const [bounty, setBounty] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!description || !bounty) {
            setError('Please fill in all fields');
            return;
        }

        if (parseFloat(bounty) <= 0) {
            setError('Bounty must be greater than 0');
            return;
        }

        try {
            setLoading(true);
            setError('');
            setSuccess(false);

            // Get current account to ensure user is connected
            const currentAccount = await getCurrentAccount();
            console.log('Creating task with account:', currentAccount);

            // Create the task
            const tx = await createTask(description, bounty);
            console.log('Task created successfully:', tx);

            // Reset form
            setDescription('');
            setBounty('');
            setSuccess(true);
            
            setTimeout(() => {
                setSuccess(false);
            }, 5000);

        } catch (error) {
            console.error('Error creating task:', error);
            setError('Error creating task: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="task-form">
            <h2>🚀 Create New Task</h2>
            
            {success && (
                <div className="success">
                    ✅ Task created successfully! It may take a few moments to appear in the task list.
                </div>
            )}
            
            {error && (
                <div className="error">
                    ❌ {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Task Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe what needs to be done..."
                        required
                        disabled={loading}
                    />
                </div>
                
                <div className="form-group">
                    <label>Bounty Amount (ETH):</label>
                    <input
                        type="number"
                        step="0.001"
                        min="0.001"
                        value={bounty}
                        onChange={(e) => setBounty(e.target.value)}
                        placeholder="0.1"
                        required
                        disabled={loading}
                    />
                    <small style={{ color: '#666', fontSize: '0.9em' }}>
                        This amount will be locked in the smart contract until the task is completed
                    </small>
                </div>
                
                <button 
                    type="submit" 
                    className="btn"
                    disabled={loading}
                >
                    {loading ? '⏳ Creating Task...' : '🎯 Create Task'}
                </button>
            </form>
            
            <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '4px' }}>
                <h4>💡 How it works:</h4>
                <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li>You create a task with a description and bounty</li>
                    <li>The bounty amount is locked in the smart contract</li>
                    <li>Other users can submit completions for your task</li>
                    <li>You verify the completion and the bounty is automatically paid</li>
                </ol>
            </div>
        </div>
    );
};

export default TaskForm;