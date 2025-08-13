import { ethers } from 'ethers';

// Contract addresses for different networks
const CONTRACT_ADDRESSES = {
  31337: { // Hardhat local
    taskBounty: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    reputationSystem: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
  },
  11155111: { // Sepolia
    taskBounty: null, // Will be updated after deployment
    reputationSystem: null
  },
  1115: { // Core Testnet
    taskBounty: null,
    reputationSystem: null
  },
  1116: { // Core Mainnet
    taskBounty: null,
    reputationSystem: null
  }
};

// Try to load addresses from deployment file
const loadDeploymentAddresses = async (chainId) => {
  try {
    const response = await fetch('/deployment-addresses.json');
    if (response.ok) {
      const deployment = await response.json();
      console.log('Loaded deployment addresses:', deployment);
      
      // Map deployment network names to chain IDs
      const networkChainIds = {
        'hardhat': 31337,
        'localhost': 31337,
        'sepolia': 11155111,
        'core_testnet': 1115,
        'core_mainnet': 1116
      };
      
      const deploymentChainId = networkChainIds[deployment.network] || parseInt(deployment.network);
      
      // Only update if the deployment matches current network
      if (deploymentChainId === chainId && CONTRACT_ADDRESSES[chainId]) {
        CONTRACT_ADDRESSES[chainId].taskBounty = deployment.taskBounty;
        CONTRACT_ADDRESSES[chainId].reputationSystem = deployment.reputationSystem;
        console.log(`Updated contract addresses for chain ${chainId}:`, CONTRACT_ADDRESSES[chainId]);
      } else {
        console.warn(`Deployment is for chain ${deploymentChainId}, but connected to chain ${chainId}`);
      }
    }
  } catch (error) {
    console.warn('Could not load deployment addresses:', error.message);
  }
};

// Contract ABIs - simplified for demo
const TASK_BOUNTY_ABI = [
  "function createTask(string memory _description, uint _bounty) public payable",
  "function submitCompletion(uint _taskId) public",
  "function verifyCompletion(uint _taskId, address _completer) public",
  "function taskCount() public view returns (uint)",
  "function tasks(uint) public view returns (uint id, address creator, string description, uint bounty, bool completed)",
  "function getTaskCompletions(uint _taskId) public view returns (address[])",
  "function checkHasCompleted(uint _taskId, address _user) public view returns (bool)",
  "event TaskCreated(uint id, address creator, string description, uint bounty)",
  "event TaskCompleted(uint id, address completer)",
  "event RewardDistributed(uint id, address completer, uint bounty)"
];

const REPUTATION_ABI = [
  "function getReputation(address user) external view returns (uint256)",
  "function getCompletedTasks(address user) external view returns (uint256)",
  "function addCompletedTask(address user) external"
];

let provider;
let signer;
let taskBountyContract;
let reputationContract;

// Initialize Web3 connection
export const initWeb3 = async () => {
  try {
    if (!window.ethereum) {
      throw new Error('No Web3 provider found. Please install MetaMask!');
    }

    // Modern dApp browsers
    provider = new ethers.BrowserProvider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    signer = await provider.getSigner();
    
    // Get network info
    const network = await provider.getNetwork();
    const chainId = parseInt(network.chainId.toString());
    console.log('Connected to network:', network.name, 'Chain ID:', chainId);
    
    // Load deployment addresses for current network
    await loadDeploymentAddresses(chainId);
    
    // Get contract addresses for current network
    const addresses = CONTRACT_ADDRESSES[chainId];
    if (!addresses) {
      const supportedNetworks = Object.keys(CONTRACT_ADDRESSES).join(', ');
      throw new Error(`Network not supported. Connected to chain ID ${chainId}, but supported networks are: ${supportedNetworks}. Please switch to a supported network in MetaMask.`);
    }

    if (!addresses.taskBounty || !addresses.reputationSystem) {
      throw new Error(`Contracts not deployed on current network (Chain ID: ${chainId}). Please deploy contracts first or switch to a network where contracts are deployed.`);
    }
    
    // Initialize contracts
    taskBountyContract = new ethers.Contract(
      addresses.taskBounty,
      TASK_BOUNTY_ABI,
      signer
    );
    
    reputationContract = new ethers.Contract(
      addresses.reputationSystem,
      REPUTATION_ABI,
      signer
    );
    
    console.log('Contracts initialized:', {
      taskBounty: addresses.taskBounty,
      reputationSystem: addresses.reputationSystem
    });
    
    return { provider, signer, taskBountyContract, reputationContract };
    
  } catch (error) {
    console.error('Error initializing Web3:', error);
    throw error;
  }
};

// Get current user address
export const getCurrentAccount = async () => {
  try {
    if (!signer) await initWeb3();
    return await signer.getAddress();
  } catch (error) {
    console.error('Error getting current account:', error);
    throw error;
  }
};

// Get all tasks
export const getTasks = async () => {
  try {
    if (!taskBountyContract) {
      const result = await initWeb3();
      if (!result.taskBountyContract) {
        console.warn('TaskBounty contract not available');
        return [];
      }
    }
    
    // Check if contract exists by trying to get the task count
    const taskCount = await taskBountyContract.taskCount();
    const tasks = [];
    
    for (let i = 1; i <= taskCount; i++) {
      try {
        const task = await taskBountyContract.tasks(i);
        tasks.push({
          id: task.id.toString(),
          creator: task.creator,
          description: task.description,
          bounty: ethers.formatEther(task.bounty),
          completed: task.completed
        });
      } catch (error) {
        console.error(`Error fetching task ${i}:`, error);
      }
    }
    
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    
    // If it's a network-related error, provide helpful message
    if (error.message.includes('could not decode result data')) {
      throw new Error('Contracts not deployed on this network. Please deploy contracts first or switch to the correct network.');
    }
    
    return []; // Return empty array instead of throwing
  }
};

// Create a new task
export const createTask = async (description, bountyAmount) => {
  try {
    if (!taskBountyContract) await initWeb3();
    
    const bountyWei = ethers.parseEther(bountyAmount.toString());
    const tx = await taskBountyContract.createTask(description, bountyWei, {
      value: bountyWei
    });
    
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Submit completion for a task
export const submitCompletion = async (taskId) => {
  try {
    if (!taskBountyContract) await initWeb3();
    
    const tx = await taskBountyContract.submitCompletion(taskId);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error submitting completion:', error);
    throw error;
  }
};

// Verify completion (only task creator)
export const verifyCompletion = async (taskId, completerAddress) => {
  try {
    if (!taskBountyContract) await initWeb3();
    
    const tx = await taskBountyContract.verifyCompletion(taskId, completerAddress);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error verifying completion:', error);
    throw error;
  }
};

// Get user reputation
export const getUserReputation = async (userAddress) => {
  try {
    if (!reputationContract) await initWeb3();
    
    const reputation = await reputationContract.getReputation(userAddress);
    const completedTasks = await reputationContract.getCompletedTasks(userAddress);
    
    return {
      score: reputation.toString(),
      completedTasks: completedTasks.toString()
    };
  } catch (error) {
    console.error('Error getting user reputation:', error);
    return { score: '0', completedTasks: '0' };
  }
};

// Get task completions
export const getTaskCompletions = async (taskId) => {
  try {
    if (!taskBountyContract) await initWeb3();
    
    const completions = await taskBountyContract.getTaskCompletions(taskId);
    return completions;
  } catch (error) {
    console.error('Error getting task completions:', error);
    return [];
  }
};

// Check if user has completed a task
export const hasUserCompleted = async (taskId, userAddress) => {
  try {
    if (!taskBountyContract) await initWeb3();
    
    const hasCompleted = await taskBountyContract.checkHasCompleted(taskId, userAddress);
    return hasCompleted;
  } catch (error) {
    console.error('Error checking completion status:', error);
    return false;
  }
};

// Update contract addresses (useful for different networks)
export const updateContractAddresses = (taskBountyAddress, reputationAddress) => {
  // Get current network and update addresses
  if (provider) {
    provider.getNetwork().then(network => {
      const chainId = parseInt(network.chainId.toString());
      if (!CONTRACT_ADDRESSES[chainId]) {
        CONTRACT_ADDRESSES[chainId] = {};
      }
      CONTRACT_ADDRESSES[chainId].taskBounty = taskBountyAddress;
      CONTRACT_ADDRESSES[chainId].reputationSystem = reputationAddress;
    });
  }
  
  // Reset contracts to force re-initialization
  taskBountyContract = null;
  reputationContract = null;
};

// Check if contracts are deployed on current network
export const areContractsDeployed = async () => {
  try {
    if (!provider) await initWeb3();
    
    const network = await provider.getNetwork();
    const chainId = parseInt(network.chainId.toString());
    
    // Make sure we have the latest deployment addresses
    await loadDeploymentAddresses(chainId);
    
    const addresses = CONTRACT_ADDRESSES[chainId];
    
    console.log('Checking contracts for chain', chainId, 'addresses:', addresses);
    
    if (!addresses || !addresses.taskBounty || !addresses.reputationSystem) {
      return { deployed: false, message: 'Contract addresses not configured for this network' };
    }
    
    // Check if contracts exist by checking if they have code
    const taskBountyCode = await provider.getCode(addresses.taskBounty);
    const reputationCode = await provider.getCode(addresses.reputationSystem);
    
    console.log('Contract code check:', {
      taskBounty: taskBountyCode !== '0x' ? 'Found' : 'Not found',
      reputation: reputationCode !== '0x' ? 'Found' : 'Not found'
    });
    
    if (taskBountyCode === '0x' || reputationCode === '0x') {
      return { deployed: false, message: 'Contracts not deployed at configured addresses' };
    }
    
    return { deployed: true, addresses };
    
  } catch (error) {
    console.error('Error checking contracts:', error);
    return { deployed: false, message: 'Error checking contract deployment: ' + error.message };
  }
};

// Get network information
export const getNetworkInfo = async () => {
  try {
    if (!provider) await initWeb3();
    
    const network = await provider.getNetwork();
    const chainId = parseInt(network.chainId.toString());
    
    // Map chain IDs to friendly names
    const networkNames = {
      31337: 'Hardhat Local',
      11155111: 'Sepolia Testnet',
      1115: 'Core Testnet',
      1116: 'Core Mainnet',
      1: 'Ethereum Mainnet'
    };
    
    return {
      chainId: network.chainId.toString(),
      name: networkNames[chainId] || `Unknown (${chainId})`
    };
  } catch (error) {
    console.error('Error getting network info:', error);
    return null;
  }
};

export default {
  initWeb3,
  getCurrentAccount,
  getTasks,
  createTask,
  submitCompletion,
  verifyCompletion,
  getUserReputation,
  getTaskCompletions,
  hasUserCompleted,
  updateContractAddresses,
  areContractsDeployed,
  getNetworkInfo
};