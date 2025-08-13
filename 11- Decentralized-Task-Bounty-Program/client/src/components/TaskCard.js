import React, { useState } from 'react';
import { submitCompletion, hasUserCompleted, getCurrentAccount } from '../utils/web3';

const TaskCard = ({ task, onTaskUpdated }) => {
    const [loading, setLoading] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmitCompletion = async () => {
        try {
            setLoading(true);
            const currentAccount = await getCurrentAccount();
            
            // Check if user has already submitted
            const alreadySubmitted = await hasUserCompleted(task.id, currentAccount);
            if (alreadySubmitted) {
                alert('You have already submitted completion for this task');
                return;
            }

            await submitCompletion(task.id);
            setHasSubmitted(true);
            alert('Completion submitted successfully!');
            
            if (onTaskUpdated) {
                onTaskUpdated(); // Refresh task list
            }
        } catch (error) {
            console.error('Error submitting completion:', error);
            alert('Error submitting completion: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="task-card">
            <h3>Task #{task.id}</h3>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Bounty:</strong> {task.bounty} ETH</p>
            <p><strong>Creator:</strong> {task.creator}</p>
            <p><strong>Status:</strong> 
                <span style={{
                    color: task.completed ? 'green' : 'orange',
                    fontWeight: 'bold',
                    marginLeft: '5px'
                }}>
                    {task.completed ? '✅ Completed' : '🕒 Pending'}
                </span>
            </p>
            
            {!task.completed && (
                <button 
                    className="btn" 
                    onClick={handleSubmitCompletion}
                    disabled={loading || hasSubmitted}
                >
                    {loading ? 'Submitting...' : hasSubmitted ? 'Submitted' : 'Submit Completion'}
                </button>
            )}
        </div>
    );
};

export default TaskCard;