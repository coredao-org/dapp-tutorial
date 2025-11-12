import { useEffect, useState, useCallback } from 'react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskRewardSystem from './contracts/TaskRewardSystem';
import "./App.css";
import coreLogo from './core-logo.png';

const contractAddress = "0x4f8B5e623b133f81724b48010c80941C566E99C6";
const taskRewardSystemAbi = TaskRewardSystem.abi;

// Set gas limit for the transactions
const gasLimit = 5000000;

export default function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [network, setNetwork] = useState('');
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskReward, setTaskReward] = useState(0);
  const [allTasks, setAllTasks] = useState([]);
  const [taskDetail, setTaskDetail] = useState(null)
  const [showTasks, setShowTasks] = useState(false);
  const [newAdminAddress, setNewAdminAddress] = useState('');
  const [assigneeAddress, setAssigneeAddress] = useState('');

  const [isTaskListVisible, setIsTaskListVisible] = useState(false);

  const [taskFetched, setTaskFetched] = useState(false);
  const [fetchTaskId, setFetchTaskId] = useState('');
  const [claimTaskId, setClaimTaskId] = useState(''); 
  const [completeTaskId, setCompletedTaskId] = useState('');

  const [assignTaskId, setAssignTaskId] = useState('');
  const [validateTaskId, setValidateTaskId] = useState('');

  const notify = (message, type = 'info') => toast(message, { type });

  // Check if wallet is connected
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have Metamask installed!');
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found');
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  // Check network
  const checkNetwork = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Ethereum object does not exist');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const { chainId } = await provider.getNetwork();

      if (chainId !== 1115) {
        alert('Please connect to the Core Testnet');
      } else {
        setNetwork('Core Testnet');
      }
    } catch (error) {
      console.error('Error fetching network:', error);
    }
  };

  const connectWallet = async () => {
    try {
      setLoading(true);
      if (!window.ethereum) {
        notify('Please install MetaMask!', 'error');
        return;
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setCurrentAccount(accounts[0]);
      notify('Wallet connected successfully!', 'success');
    } catch (err) {
      notify('Failed to connect wallet', 'error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const checkIfAdmin = async (contract) => {
    try {
      const adminRole = await contract.ADMIN_ROLE();
      const isUserAdmin = await contract.hasRole(adminRole, currentAccount);
      setIsAdmin(isUserAdmin);
    } catch (err) {
      console.error('Error checking admin status:', err);
    }
  };

  const setupProviderAndContract = useCallback(async () => {
    if (!currentAccount) return;
    try {
      const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = ethersProvider.getSigner();
      const userAddress = await signer.getAddress();

      const taskContract = new ethers.Contract(contractAddress, taskRewardSystemAbi, signer);
      // Set states
      setCurrentAccount(userAddress);
      setContract(taskContract);
      console.log('Checking if admin after set state...', ethersProvider, taskContract, userAddress);
      await checkIfAdmin(taskContract);
      console.log('Done checking admin role...');
    } catch (err) {
      notify('Error setting up contract connection', 'error');
      console.error(err);
    }
  }, [currentAccount]);



  // Disconnect wallet function
  const disconnectWalletHandler = () => {
    setCurrentAccount(null);
    setContract(null);
    setAllTasks([]);
    setIsAdmin(false);
    setTaskDescription('');
    setTaskReward(0);
  };

  // Handle Transaction
  const handleTransaction = async (operation, ...args) => {
    setLoading(true);  // Start loading
  
    try {
      // Get more details
      const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
      // Get gas price
      const gasPrice = await ethersProvider.getGasPrice();
      // Perform the operation (transaction)
      const tx = await operation(...args, {
        gasPrice,     // Set gas price
        gasLimit,     // Set gas limit
      });

      await tx.wait();  // Wait for transaction confirmation
  
      // Notify user about success
      notify('Transaction successful!', 'success');
  
      // Log before fetching tasks
      console.log('handle transaction trying to fetch all tasks');
      
      // Fetch all tasks and handle errors during fetching
      let allTasks = [];
      try {
        allTasks = await fetchAllTasks();  // Await fetching tasks
        console.log('Fetched all tasks for handle transaction', allTasks);
      } catch (fetchError) {
        // Handle fetch error (e.g., if fetch fails)
        console.error('Error fetching tasks:', fetchError);
        notify('Error fetching tasks: ' + fetchError.message, 'error');
      }
  
      // Set the fetched tasks into the state
      setAllTasks(allTasks);
  
    } catch (err) {
      // Handle errors related to the transaction
      console.error('Transaction error:', err);
      notify(err.message, 'error');
    } finally {
      // Stop loading regardless of success or failure
      setLoading(false);
    }
  };

  // Create Task, admin only
  const createTask = (taskDescription, taskReward) => handleTransaction(
    contract.createTask.bind(contract),
    taskDescription,
    taskReward
  );

  // Claim Task, assignee only
  const claimTask = (claimTaskId) => handleTransaction(
    contract.claimTask.bind(contract),
    claimTaskId
  );

  // Complete task, assignee only
  const completeTask = (claimTaskId) => handleTransaction(
    contract.completeTask.bind(contract),
    claimTaskId
  );

  // Validate task, admin only
  const validateTask = (validateTaskId) => handleTransaction(
    contract.validateTask.bind(contract),
    validateTaskId
  );

  // Fetch Task Details, anyone
  const fetchTaskDetails = async (fetchTaskId, contract) => {
    if (!contract) return;
  
    try {
      console.log("Trying to fetch task details...");
  
      // Fetch the task by ID (this returns the task object)
      const task = await contract.tasks(fetchTaskId);

      // Check if task is falsy (null, undefined, or empty task)
      if (!task) {
        console.log('Task not found.');
        setTaskDetail(null);
        return;
      } else {
        if (task.id === 0) {
          console.log('Task not found.');
          setTaskDetail(null);
          return;
        }
      }

      console.log("Fetched task detail:", task);
  
      // Format the task details
      const formattedTask = {
        id: task.id.toNumber(),
        description: task.description,
        reward: formatBigNumber(task.rewardPoints),
        assignee: task.assignee,
        validator: task.validator, 
        status: task.status,
      };
      setTaskDetail(formattedTask);
      console.log("Formatted task detail:", formattedTask);
  
    } catch (err) {
      console.error('Error fetching task:', err);
      setTaskDetail(null);
    }
  };


// Assign new admin (admin only)
const assignAdmin = async (newAdminAddress) => {
  if (!contract || !isAdmin || !newAdminAddress) return;
  setLoading(true);
  try {
    // Call the contract method directly
    const tx = await contract.assignAdmin(newAdminAddress);
    await tx.wait(); // Wait for the transaction to be mined
    toast.success('New admin assigned successfully');
  } catch (err) {
    console.error('Error assigning new admin:', err);
    toast.error('Failed to assign new admin');
  } finally {
    setLoading(false);
  }
};

// Assign task to assignee (admin only)
const assignAssignee = async (assignTaskId, assigneeAddress) => {
  if (!contract || !isAdmin || !assigneeAddress) return;
  setLoading(true);
  try {
    // Call the contract method directly
    const tx = await contract.assignAssignee(assignTaskId, assigneeAddress);
    await tx.wait(); // Wait for the transaction to be mined
    toast.success('Task assigned successfully');
    console.log('Trying to fetch all task after assigning task')
    const tasks = await fetchAllTasks();
    setAllTasks(tasks);
    console.log('Fetched all tasks after task assignment');
  } catch (err) {
    console.error('Error assigning task:', err);
    toast.error('Failed to assign task');
  } finally {
    setLoading(false);
  }
};

  // Handle toggling show/hide tasks
  const toggleShowTasks = () => setShowTasks(!showTasks);

  // Handle button click to fetch tasks and set state
  const handleFetchTasks = async (fetchTaskId) => {
    try {
      const tasks = await fetchAllTasks(fetchTaskId);
      console.log('All tasks state:', tasks);
      setAllTasks(tasks);
      setShowTasks(true); // Show tasks after fetching
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  useEffect(() => {
    if (currentAccount) {
    checkNetwork();
    setupProviderAndContract();
    }
  }, [currentAccount, setupProviderAndContract]);

  // Function to convert BigNumber to a string or number
  const formatBigNumber = (bigNumber) => {
    return bigNumber.toString();
  };


    // Function to fetch and group tasks
    const fetchAllTasks = async () => {
      setLoading(true);
      try {
        const tasks = await contract.getAllTasks(); // Assume this returns an array of tasks
        console.log('Fetched tasks:', tasks);
        
        if (tasks && tasks.length > 0) {
          const groupedTasks = tasks.reduce((acc, task) => {
            const groupKey = task.status; // Group by task status
            if (!acc[groupKey]) acc[groupKey] = []; // Initialize array for new group
            acc[groupKey].push(task); // Push task into the respective group
            return acc;
          }, {});
  
          // Convert the object of groups into an array of arrays
          const groupedTasksArray = Object.values(groupedTasks);
          return groupedTasksArray; // Return grouped tasks to be used in state
        } else {
          toast.info('No tasks found.');
          return []; // Return an empty array if no tasks found
        }
      } catch (err) {
        console.error('Error fetching tasks:', err);
        toast.error('Failed to fetch tasks');
        return []; // Return an empty array on error
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    const renderAdminPanel = () => {
      return (
        <div className="admin-panel">
          <h2>Admin Panel</h2>
          <div>
            {/* Fetch All Tasks Button */}
            <button onClick={() => { handleFetchTasks(); setIsTaskListVisible(true)}} className="btn-primary" disabled={isTaskListVisible}>
              Fetch All Tasks
            </button>
    
            {/* Toggle Task List Visibility */}
            <button onClick={() => setIsTaskListVisible(!isTaskListVisible)} className="btn-primary" style={{ marginLeft: '10px' }}>
              {isTaskListVisible ? "Hide Tasks" : "View All Tasks"}
            </button>
    
            {/* Show All Tasks */}
            {isTaskListVisible && (
              <div className="task-list">
                <h3>All Tasks</h3>
                <ul>
                  {Array.isArray(allTasks) && allTasks.length > 0 ? (
                    allTasks.map((taskGroup, groupIndex) => (
                      <li key={groupIndex}>
                        <h4>Group {groupIndex + 1}</h4> {/* Display group header */}
                        <ul>
                          {taskGroup.map((task, taskIndex) => (
                            <li key={taskIndex}>
                              <div>
                                <p><strong>Task ID:</strong> {formatBigNumber(task.id)}</p>
                                <p><strong>Description:</strong> {task.description}</p>
                                <p><strong>Status:</strong> {
                                  task.status === 0 ? 'Pending' :
                                  task.status === 1 ? 'Claimed' :
                                  task.status === 2 ? 'Completed' :
                                  task.status === 3 ? 'Validated' :
                                  task.status === 4 ? 'Deleted' :
                                  'Unknown'
                                }</p>
                                <p><strong>Reward:</strong> {formatBigNumber(task.rewardPoints)}</p>
                                <p><strong>Assignee:</strong> {task.assignee}</p>
                                <p><strong>Validator:</strong> {task.validator}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))
                  ) : (
                    <p>No tasks available</p>
                  )}
                </ul>
              </div>
            )}
    
            {/* Task Creation */}
            <div>
              <input className='input-field'
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                id="taskDescription"
                type="text"
                placeholder="Task Description"
              />
              <input className='input-field'
                id="taskReward"
                type="number"
                value={taskReward}
                onChange={(e) => setTaskReward(e.target.value)}
                placeholder="Reward Points"
              />
            <button className="btn-primary"
              onClick={async () => {
                const taskDescription = document.getElementById("taskDescription").value;
                const taskReward = parseInt(document.getElementById("taskReward").value, 10);
    
                if (!taskDescription || !taskReward || isNaN(taskReward)) {
                  toast.error('Please enter valid task description and reward points');
                  return;
                }
    
                setLoading(true);
                try {
                  await createTask(taskDescription, taskReward);
                } catch (error) {
                  toast.error('Failed to create task');
                } finally {
                  setLoading(false);
                }
              }}
            >
              Create Task
            </button>
            </div>
    
            {/* Assign Task */}
            <div>
              <input className='input-field'
                id="taskIdAssign"
                type="number"
                value={assignTaskId}
                onChange={(e) => setAssignTaskId(e.target.value)}
                placeholder="Task ID"
              />
              <input className='input-field'
                id="assigneeAddress"
                type="text"
                value={assigneeAddress}
                onChange={(e) => setAssigneeAddress(e.target.value)}
                placeholder="Assignee Address"
              />
            <button className="btn-primary"
              onClick={async () => {
                const taskId = parseInt(document.getElementById("taskIdAssign").value, 10);
                const assigneeAddress = document.getElementById("assigneeAddress").value;
    
                if (!taskId || !assigneeAddress) {
                  toast.error('Please enter valid Task ID and Assignee Address');
                  return;
                }
    
                setLoading(true);
                try {
                  await assignAssignee(taskId, assigneeAddress);
                } catch (error) {
                  toast.error('Failed to assign task');
                } finally {
                  setLoading(false);
                }
              }}
            >
              Assign Task
            </button>
            </div>
    
            {/* Validate Task */}
            <div>
              <input className='input-field'
                id="taskIdValidate"
                type="number"
                value={validateTaskId}
                onChange={(e) => setValidateTaskId(e.target.value)}
                placeholder="Task ID"
              />
            <button className="btn-primary"
              onClick={async () => {
                const taskId = parseInt(document.getElementById("taskIdValidate").value, 10);
    
                if (!taskId) {
                  toast.error('Please enter a valid Task ID');
                  return;
                }
    
                setLoading(true);
                try {
                  await validateTask(taskId);
                } catch (error) {
                  toast.error('Failed to validate task');
                } finally {
                  setLoading(false);
                }
              }}
            >
              Validate Task
            </button>
            </div>
    
            {/* New Admin Assignment */}
            <div>
              <input className='input-field'
                id="newAdminAddress"
                type="text"
                value={newAdminAddress}
                onChange={(e) => setNewAdminAddress(e.target.value)}
                placeholder="New Admin Address"
              />
            <button className="btn-primary"
              onClick={async () => {
                const newAdminAddress = document.getElementById("newAdminAddress").value;
    
                if (!newAdminAddress) {
                  toast.error('Please enter a valid Admin Address');
                  return;
                }
    
                setLoading(true);
                try {
                  await assignAdmin(newAdminAddress);
                } catch (error) {
                  toast.error('Failed to assign admin role');
                } finally {
                  setLoading(false);
                }
              }}
            >
              Assign Admin Role
            </button>
            </div>
          </div>
          <div>
            <div>
              <h3>Fetch A Task Details</h3>
              <div>
                {/* Input for Task ID */}
                <input className='input-field'
                  type="number"
                  value={fetchTaskId}
                  onChange={(e) => setFetchTaskId(e.target.value)}
                  placeholder="Enter Task ID"
                />
                <button onClick={
              async () => {
                if (!fetchTaskId) {
                  toast.error('Please enter a valid Task ID');
                  return;
                }
                setLoading(true);
                await fetchTaskDetails(fetchTaskId, contract);
                setTaskFetched(true);
                setLoading(false);
              }
            } disabled={loading} className="btn-primary">
              Fetch Task
            </button>
              </div>
    
              {/* Display task details */}
              {taskDetail && (
                <div className="task-detail">
                  <h4>Task ID: {taskDetail.id}</h4>
                  <p><strong>Description:</strong> {taskDetail.description}</p>
                  <p><strong>Reward:</strong> {taskDetail.reward}</p>
                  <p><strong>Status:</strong> {
                  taskDetail.status === 0 ? 'Pending' :
                  taskDetail.status === 1 ? 'Claimed' :
                  taskDetail.status === 1 ? 'Completed' :
                  taskDetail.status === 3 ? 'Validated' :
                  taskDetail.status ===  4 ? 'Deleted' : "Unknown"
                  }</p>
                  <p><strong>Assignee:</strong> {taskDetail.assignee}</p>
                  <p><strong>Validator:</strong> {taskDetail.validator}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };

  const renderAssigneePanel = () => {
    return (
      <div className="assignee-panel">
        <h2>Assignee Panel</h2>
        <div>
          {/* Fetch All Tasks */}
          <button
            className="btn-primary btn-fetch"
            onClick={handleFetchTasks}
            disabled={loading}
          >
            Fetch All Tasks
          </button>
  
          {/* Toggle Show/Hide Tasks */}
          <button onClick={toggleShowTasks} className="btn-primary">
            {showTasks ? 'Hide Tasks' : 'View All Tasks'}
          </button>
  
          {/* Show All Tasks */}
          {showTasks && (
            <div className="task-list">
              <h3>All Tasks</h3>
              <ul>
                {Array.isArray(allTasks) && allTasks.length > 0 ? (
                  allTasks.map((taskGroup, groupIndex) => (
                    <li key={groupIndex}>
                      <h4>Group {groupIndex + 1}</h4> {/* Display group header */}
                      <ul>
                        {taskGroup.map((task, taskIndex) => (
                          <li key={taskIndex}>
                            <div>
                              <p><strong>Task ID:</strong> {formatBigNumber(task.id)}</p>
                              <p><strong>Description:</strong> {task.description}</p>
                              <p><strong>Status:</strong> {
                                task.status === 0 ? 'Pending' :
                                task.status === 1 ? 'Claimed' :
                                task.status === 2 ? 'Completed' :
                                task.status === 3 ? 'Validated' :
                                task.status === 4 ? 'Deleted' :
                                'Unknown'
                              }</p>
                              <p><strong>Reward:</strong> {formatBigNumber(task.rewardPoints)}</p>
                              <p><strong>Assignee:</strong> {task.assignee}</p>
                              <p><strong>Validator:</strong> {task.validator}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))
                ) : (
                  <p>No tasks available</p>
                )}
              </ul>
            </div>
          )}
        </div>
        {/* Claim Task */}
        <div>
          <div>
            <input className='input-field'
              type="number"
              value={claimTaskId}
              onChange={(e) => setClaimTaskId(e.target.value)}
              placeholder="Enter Task ID to Claim"
            />
            <button className="btn-primary"
              onClick={ async () => {
                if (!claimTaskId) {
                  toast.error('Please enter a valid Task ID');
                  return;
                }
                await claimTask(claimTaskId);
              }}
              disabled={loading}
            >
              Claim Task
            </button>
          </div>
  
          {/* Complete Task */}
          <div>
            <input className='input-field'
              type="number"
              value={completeTaskId}
              onChange={(e) => setCompletedTaskId(e.target.value)}
              placeholder="Enter Task ID to Complete"
            />
            <button className="btn-primary"
              onClick={ async () => {
                if (!completeTaskId) {
                  toast.error('Please enter a valid Task ID');
                  return;
                }
                await completeTask(completeTaskId);
              }}
              disabled={loading}
            >
              Complete Task
            </button>
          </div>
        </div>
        <div>
          {/* Fetch A Task Details */}
          <h3>Fetch A Task Details</h3>
          <div>
            {/* Input for Task ID */}
            <input className='input-field'
              type="number"
              value={fetchTaskId}
              onChange={(e) => setFetchTaskId(e.target.value)}
              placeholder="Enter Task ID"
            />
            <button onClick={
              async () => {
                if (!fetchTaskId) {
                  toast.error('Please enter a valid Task ID');
                  return;
                }
                setLoading(true);
                await fetchTaskDetails(fetchTaskId, contract);
                setTaskFetched(true);
                setLoading(false);
              }
            } disabled={loading} className="btn-primary">
              Fetch Task
            </button>
          </div>
  
          {/* Display task details only after fetch button is clicked and task is fetched */}
          {taskFetched && taskDetail ? (
            <div className="task-detail">
              <h4>Task ID: {taskDetail.id}</h4>
              <p><strong>Description:</strong> {taskDetail.description}</p>
              <p><strong>Reward:</strong> {taskDetail.reward}</p>
              <p><strong>Status:</strong> {
                taskDetail.status === 0 ? 'Pending' :
                taskDetail.status === 1 ? 'Claimed' :
                taskDetail.status === 2 ? 'Completed' :
                taskDetail.status === 3 ? 'Validated' :
                taskDetail.status === 4 ? 'Deleted' :
                'Unknown' // Default fallback
              }</p>
              <p><strong>Assignee:</strong> {taskDetail.assignee}</p>
              <p><strong>Validator:</strong> {taskDetail.validator}</p>
            </div>
          ) : ( taskFetched && !taskDetail && <p>No task details found or task is unavailable!</p> )}
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <header className='App-header'>
        <div>
          <div className='logo-container'>
            <img src={coreLogo} alt="Core Logo" className="logo"/>
            <h1>Task Reward System</h1>
          </div>
  
          {/* Only show account info (status and address) when currentAccount is available */}
          {currentAccount && (
            <>
              <div className='App-account-details-container'>
                <div className='account-detail'>
                  <span>Address: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}</span>
                  <p>Status: {isAdmin ? 'Admin' : 'Assignee'}</p>
                </div>
              </div>
            </>
          )}
  
          {/* Render Connect/Disconnect button */}
          <button onClick={currentAccount ? disconnectWalletHandler : connectWallet} className="btn-primary dis--connect-btn">
            {currentAccount ? 'Disconnect Wallet' : 'Connect Wallet'}
          </button>
        </div>
      </header>
    );
  };
  

  // const renderFooter = () => {
  //   return (
  //     <footer>
  //       Task Reward System © 2024
  //     </footer>
  //   );
  // };

  return (
    <>
    <div className='App-container'>
      {renderHeader()}
      <main>
        {!currentAccount ? null : isAdmin ? (
          renderAdminPanel()
        ) : (
          renderAssigneePanel()
        )}
      </main>
      {/* {renderFooter()} */}
      <ToastContainer />
      </div>
    </>
  );
  
}