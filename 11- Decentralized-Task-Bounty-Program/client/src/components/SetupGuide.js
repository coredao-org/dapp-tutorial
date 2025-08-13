import React, { useState } from 'react';

const SetupGuide = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        {
            title: "1. Install Dependencies",
            content: (
                <div>
                    <p>Make sure all dependencies are installed:</p>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                        cd /path/to/project{'\n'}
                        npm install
                    </pre>
                </div>
            )
        },
        {
            title: "2. Setup Environment",
            content: (
                <div>
                    <p>Create your <code>.env</code> file:</p>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                        cp .env.example .env{'\n'}
                        nano .env
                    </pre>
                    <p>Add your keys:</p>
                    <ul>
                        <li><strong>PRIVATE_KEY</strong>: Your MetaMask private key (without 0x)</li>
                        <li><strong>SEPOLIA_RPC_URL</strong>: Get from <a href="https://alchemy.com" target="_blank" rel="noreferrer">Alchemy</a></li>
                        <li><strong>ETHERSCAN_API_KEY</strong>: Get from <a href="https://etherscan.io/apis" target="_blank" rel="noreferrer">Etherscan</a></li>
                    </ul>
                </div>
            )
        },
        {
            title: "3. Get Test ETH",
            content: (
                <div>
                    <p>Get Sepolia testnet ETH:</p>
                    <ul>
                        <li>Visit <a href="https://sepoliafaucet.com/" target="_blank" rel="noreferrer">Sepolia Faucet</a></li>
                        <li>Enter your wallet address</li>
                        <li>Request test ETH</li>
                    </ul>
                </div>
            )
        },
        {
            title: "4. Deploy Contracts",
            content: (
                <div>
                    <p>Deploy to Sepolia testnet:</p>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                        npm run deploy:sepolia
                    </pre>
                    <p>Or deploy locally for testing:</p>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                        npm run node    # In one terminal{'\n'}
                        npm run deploy  # In another terminal
                    </pre>
                </div>
            )
        }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                maxWidth: '600px',
                maxHeight: '80vh',
                overflow: 'auto',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '15px',
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer'
                    }}
                >
                    ×
                </button>

                <h2>🚀 Setup Guide</h2>
                <p>Follow these steps to get your dApp running:</p>

                <div style={{ marginBottom: '20px' }}>
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentStep(index + 1)}
                            style={{
                                margin: '0 5px 10px 0',
                                padding: '8px 12px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                background: currentStep === index + 1 ? '#007bff' : 'white',
                                color: currentStep === index + 1 ? 'white' : 'black',
                                cursor: 'pointer'
                            }}
                        >
                            Step {index + 1}
                        </button>
                    ))}
                </div>

                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    minHeight: '200px'
                }}>
                    <h3>{steps[currentStep - 1].title}</h3>
                    {steps[currentStep - 1].content}
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <button
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                        className="btn"
                        style={{ marginRight: '10px' }}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                        disabled={currentStep === steps.length}
                        className="btn"
                    >
                        Next
                    </button>
                </div>

                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#e8f4f8',
                    borderRadius: '8px'
                }}>
                    <p><strong>💡 Need help?</strong></p>
                    <p>Check the <code>SETUP.md</code> file in your project root for detailed instructions.</p>
                </div>
            </div>
        </div>
    );
};

export default SetupGuide;
