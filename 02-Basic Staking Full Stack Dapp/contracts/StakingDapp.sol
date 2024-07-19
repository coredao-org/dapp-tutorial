// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface IRewardToken is IERC20 {
    function mint(address to, uint256 amount) external;
}

contract StakingDapp is Ownable {
    using SafeERC20 for IERC20;

    IERC20 public stakingToken;
    IRewardToken public rewardToken;

    struct Stake {
        uint256 amount;
        uint256 lastRewardTime; // Track the last time rewards were calculated
    }

    mapping(address => Stake) public stakes;
    mapping(address => uint256) public rewardBalance;

    uint256 public constant REWARD_AMOUNT = 5; // Reward tokens per interval
    uint256 public constant REWARD_INTERVAL = 10; // 10 seconds per reward interval

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    constructor(address _stakingToken, address _rewardToken) Ownable(msg.sender) {
        require(_stakingToken != address(0) && _rewardToken != address(0), "Invalid token addresses");
        stakingToken = IERC20(_stakingToken);
        rewardToken = IRewardToken(_rewardToken);
    }

    function getStakedAmount(address user) external view returns (uint256) {
        return stakes[user].amount;
    }


    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        
        if (stakes[msg.sender].amount > 0) {
            // Calculate and update reward balance before changing the stake
            uint256 pendingReward = calculateReward(msg.sender);
            rewardBalance[msg.sender] += pendingReward;
        }
        
        stakingToken.safeTransferFrom(msg.sender, address(this), amount);
        
        // Update the stake amount and last reward time
        stakes[msg.sender].amount += amount;
        stakes[msg.sender].lastRewardTime = block.timestamp;
        
        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external {
        require(stakes[msg.sender].amount >= amount, "Insufficient balance");
        
        uint256 pendingReward = calculateReward(msg.sender);
        rewardBalance[msg.sender] += pendingReward;

        // Update the stake amount and last reward time
        stakes[msg.sender].amount -= amount;
        stakes[msg.sender].lastRewardTime = block.timestamp;
        
        stakingToken.safeTransfer(msg.sender, amount);
        
        emit Unstaked(msg.sender, amount);
    }

    function claimReward() external {
        uint256 reward = calculateReward(msg.sender) + rewardBalance[msg.sender];
        require(reward > 0, "No reward available");

        // Reset reward data
        rewardBalance[msg.sender] = 0;
        stakes[msg.sender].lastRewardTime = block.timestamp;
        
        // Mint reward tokens
        rewardToken.mint(msg.sender, reward);
        
        emit RewardClaimed(msg.sender, reward);
    }

    function calculateReward(address user) internal view returns (uint256) {
        Stake memory userStake = stakes[user];
        if (userStake.amount == 0) {
            return 0;
        }

        uint256 currentTime = block.timestamp;
        uint256 timeSinceLastReward = currentTime - userStake.lastRewardTime;
        uint256 intervalsPassed = timeSinceLastReward / REWARD_INTERVAL;
        // Calculate reward based on intervals passed and staked amount
        return intervalsPassed * REWARD_AMOUNT * userStake.amount; // 1e18; // Assumes REWARD_AMOUNT and staked amount are in the same decimal place
    }
    function getRewardAmount(address user) external view returns (uint256) {
        uint256 reward = calculateReward(user);
        return reward;
    }

}
