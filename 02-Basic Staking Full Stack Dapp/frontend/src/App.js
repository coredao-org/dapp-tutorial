import { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import StakingToken from "./contracts/StakingToken.json";
import StakingDapp from "./contracts/StakingDapp.json";
import RewardToken from "./contracts/RewardToken.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import "./App.css";
import darkLogo from "./assets/dark_logo.webp";
import lightLogo from "./assets/light_logo.webp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const stakingDappAddress = "0x341B5aC2189e73d444883CB608FfF7d8e8AC4F93";
const stakingTokenAddress = "0x9Ba37DAA676B30599B67093FACDA8b3B7BD0Fb44";
const rewardTokenAddress = "0xDa0bBC600188Bf2C995de241Cb3B50f62Da925B5";

function App() {
  const [stakingAmount, setStakingAmount] = useState("");
  const [unstakingAmount, setUnstakingAmount] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [stakedAmount, setStakedAmount] = useState("0");
  const [rewardAmount, setRewardAmount] = useState("0");
  const [totalStkBalance, setTotalStkBalance] = useState("0");
  const [network, setNetwork] = useState("");
  const [faucetAmount, setFaucetAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stakingTokenDecimals, setStakingTokenDecimals] = useState(18);
  const [rewardTokenDecimals, setRewardTokenDecimals] = useState(18);
 const [darkMode, setDarkMode] = useState(true);
  // Check if wallet is connected
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    }

    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found ...");
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  // Check network
  const checkNetwork = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Ethereum object does not exist");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const { chainId } = await provider.getNetwork();

      if (chainId !== 1115) {
        console.log("Please connect to the Core Testnet");
      } else {
        setNetwork("Core Testnet");
      }
    } catch (error) {
      console.error("Error fetching network:", error);
    }
  };

  // Connect wallet
  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
      return;
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Disconnect wallet
  const disconnectWalletHandler = () => {
    setCurrentAccount(null);
    setStakedAmount("0");
    setRewardAmount("0");
    setTotalStkBalance("0");
    setNetwork("");
  };

  // Fetch staked and reward amounts
  const fetchStakedAndRewardAmounts = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingDappContract = new ethers.Contract(
          stakingDappAddress,
          StakingDapp.abi,
          signer
        );

        const stakedAmount = await stakingDappContract.getStakedAmount(
          currentAccount
        );
        const rewardAmount = await stakingDappContract.getRewardAmount(
          currentAccount
        );

        setStakedAmount(
          ethers.utils.formatUnits(stakedAmount, stakingTokenDecimals)
        );
        setRewardAmount(
          ethers.utils.formatUnits(rewardAmount, rewardTokenDecimals)
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error fetching staked and reward amounts:", error);
    }
  }, [currentAccount, stakingTokenDecimals, rewardTokenDecimals]);

  // Fetch staking token balance
  const fetchStkBalance = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const stakingTokenContract = new ethers.Contract(
          stakingTokenAddress,
          StakingToken.abi,
          provider
        );

        const balance = await stakingTokenContract.balanceOf(currentAccount);
        const decimals = await stakingTokenContract.decimals();
        setStakingTokenDecimals(decimals);
        setTotalStkBalance(ethers.utils.formatUnits(balance, decimals));
        console.log('balance',balance)
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error fetching token balance:", error);
    }
  }, [currentAccount]);

  // Fetch reward token decimals
  const fetchRewardTokenDecimals = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const rewardTokenContract = new ethers.Contract(
          rewardTokenAddress,
          RewardToken.abi,
          provider
        );

        const decimals = await rewardTokenContract.decimals();
        setRewardTokenDecimals(decimals);
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error fetching reward token decimals:", error);
    }
  }, []);

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  useEffect(() => {
    if (currentAccount) {
      checkNetwork();
      fetchStakedAndRewardAmounts();
      fetchStkBalance();
      fetchRewardTokenDecimals();
    }
  }, [
    currentAccount,
    fetchStakedAndRewardAmounts,
    fetchStkBalance,
    fetchRewardTokenDecimals,
  ]);

  // Stake tokens
  const stakeTokens = async () => {
    try {
      if (!isValidAmount(stakingAmount)) {
        toast.error("Invalid staking amount. Please enter a positive number.");
        return;
      }

      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingDappContract = new ethers.Contract(
          stakingDappAddress,
          StakingDapp.abi,
          signer
        );
        const tokenContract = new ethers.Contract(
          stakingTokenAddress,
          StakingToken.abi,
          signer
        );

        await tokenContract.approve(
          stakingDappAddress,
          ethers.utils.parseUnits(stakingAmount, stakingTokenDecimals)
        );
        const tx = await stakingDappContract.stake(
          ethers.utils.parseUnits(stakingAmount, stakingTokenDecimals)
        );
        await tx.wait();
        toast.success("Staked successfully");
        fetchStakedAndRewardAmounts();
        fetchStkBalance();
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error staking tokens:", error);
      toast.error("Error staking tokens");
    }
  };

  // Unstake tokens
  const unstakeTokens = async () => {
    try {
      if (!isValidAmount(unstakingAmount)) {
        toast.error(
          "Invalid unstaking amount. Please enter a positive number."
        );
        return;
      }

      // Check if unstaking amount is greater than the staked amount
      if (parseFloat(unstakingAmount) > parseFloat(stakedAmount)) {
        toast.error("Enter value equal to or less than the Staked STK.");
        return;
      }

      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingDappContract = new ethers.Contract(
          stakingDappAddress,
          StakingDapp.abi,
          signer
        );

        const amount = ethers.utils.parseUnits(
          unstakingAmount,
          stakingTokenDecimals
        );
        const tx = await stakingDappContract.unstake(amount);
        await tx.wait();
        toast.success("Unstaked successfully");
        fetchStakedAndRewardAmounts();
        fetchStkBalance();
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error unstaking tokens:", error);
      toast.error("Error unstaking tokens");
    }
  };

  // Open reward modal
  const openRewardModal = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingDappContract = new ethers.Contract(
          stakingDappAddress,
          StakingDapp.abi,
          signer
        );

        const reward = await stakingDappContract.getRewardAmount(
          currentAccount
        );
        const formattedReward = ethers.utils.formatUnits(
          reward,
          rewardTokenDecimals
        );
        console.log(formattedReward);
        if (parseFloat(formattedReward) > 0) {
          setRewardAmount(formattedReward);
          setIsModalOpen(true);
        } else {
          toast.info("No rewards available to claim.");
        }
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error fetching reward amount:", error);
      toast.error("Error fetching reward amount");
    }
  };

  // Claim reward
  const claimReward = async () => {
    try {
      if (parseFloat(rewardAmount) <= 0) {
        toast.error("Cannot claim reward. Amount must be greater than zero.");
        return;
      }

      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingDappContract = new ethers.Contract(
          stakingDappAddress,
          StakingDapp.abi,
          signer
        );

        // Set a high manual gas limit
        const gasLimit = 5000000; // Higher limit to ensure success

        // Try sending the transaction with a higher gas limit
        const tx = await stakingDappContract.claimReward({
          gasLimit: gasLimit,
        });
        await tx.wait();
        toast.success("Reward claimed successfully");
        setIsModalOpen(false);
        fetchStakedAndRewardAmounts();
        fetchStkBalance();
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error claiming reward:", error);
      toast.error(
        "Error claiming reward. Please check the console for details."
      );
    }
  };

  // Faucet tokens
  const faucetTokens = async (amount) => {
    try {
      if (!isValidAmount(amount)) {
        toast.error(
          "Invalid faucet amount. Please enter a positive number less than 100."
        );
        return;
      }

      const parsedAmount = parseFloat(amount);
      if (parsedAmount >= 100) {
        toast.error("Request amount must be less than 100.");
        return;
      }

      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingTokenContract = new ethers.Contract(
          stakingTokenAddress,
          StakingToken.abi,
          signer
        );

        const gasLimit = 600000;

        const tx = await stakingTokenContract.mint(
          currentAccount,
          ethers.utils.parseUnits(amount, stakingTokenDecimals),
          {
            gasLimit: gasLimit,
          }
        );
        await tx.wait();
        toast.success("Tokens minted successfully");
        fetchStkBalance();
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.error("Error minting tokens:", error);
      toast.error("Error minting tokens");
    }
  };

  // Validate amount
  const isValidAmount = (amount) => {
    return !isNaN(Number(amount)) && parseFloat(amount) > 0;
  };
 // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <div className="logo-container">
          <img src={darkMode ? darkLogo : lightLogo} alt="Core Logo" />
        </div>
        
        <div className="header-right">
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg>}
          </button>
          {currentAccount ? (
            <button onClick={disconnectWalletHandler} className="btn-wallet">
              Disconnect Wallet
            </button>            
          ) : ( 
            <button onClick={connectWalletHandler} className="btn-wallet">
              Connect Wallet
            </button>
          )}
        </div>
      </header>
      
      <main>
        <h1 className="main-title">Staking Dashboard</h1>
        
        {!currentAccount ? (
          <div className="connect-prompt">
            <p>Please connect your wallet to access the staking dashboard</p>
            <button onClick={connectWalletHandler} className="btn-wallet large">
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="dashboard">
            <div className="wallet-info">
              <span className="wallet-address">
                Wallet Connected: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
              </span>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <h3>STK Balance</h3>
                <p className="stat-value">{totalStkBalance} STK</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🔒</div>
                <h3>Staked Amount</h3>
                <p className="stat-value">{stakedAmount} STK</p>
              </div>
              
              <div className="stat-card highlight">
                <div className="stat-icon">🎁</div>
                <h3>Rewards</h3>
                <p className="stat-value">{rewardAmount} RTK</p>
                <button onClick={openRewardModal} className="claim-btn">
                  Claim Now
                </button>
              </div>
            </div>
            
            <div className="action-cards">
              <div className="action-card">
                <h3>Stake Tokens</h3>
                <div className="input-group">
                  <input
                    type="number"
                    placeholder="Amount to stake"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(e.target.value)}
                    className="input-field"
                  />
                  <button onClick={stakeTokens} className="btn-action">
                    Stake
                  </button>
                </div>
              </div>
              
              <div className="action-card">
                <h3>Unstake Tokens</h3>
                <div className="input-group">
                  <input
                    type="number"
                    placeholder="Amount to unstake"
                    value={unstakingAmount}
                    onChange={(e) => setUnstakingAmount(e.target.value)}
                    className="input-field"
                  />
                  <button onClick={unstakeTokens} className="btn-action">
                    Unstake
                  </button>
                </div>
              </div>
              
              <div className="action-card">
                <h3>Get Test Tokens</h3>
                <div className="input-group">
                  <input
                    type="number"
                    placeholder="Faucet amount"
                    value={faucetAmount}
                    onChange={(e) => setFaucetAmount(e.target.value)}
                    className="input-field"
                  />
                  <button onClick={faucetTokens} className="btn-action">
                    Get STK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <ToastContainer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClaim={claimReward}
        rewardAmount={rewardAmount}
      />
    </div>
  );
}

export default App;
