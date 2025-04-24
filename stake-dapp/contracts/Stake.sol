// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title SimpleStaking
 * @notice Stake native ETH, earn rewards in an ERC20 token
 */
contract SimpleStaking {
    IERC20 public immutable rewardToken;
    uint256 public rewardRatePerSecond;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    uint256 private _totalStaked;
    mapping(address => uint256) private _balances;

    // reward accounting
    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    constructor(address _rewardToken, uint256 _rewardRatePerSecond) {
        rewardToken = IERC20(_rewardToken);
        rewardRatePerSecond = _rewardRatePerSecond;
        lastUpdateTime = block.timestamp;
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    // view total staked
    function totalStaked() external view returns (uint256) {
        return _totalStaked;
    }

    // view user staked balance
    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    // view user current earned reward tokens
    function currentEarned(address account) external view returns (uint256) {
        return earned(account);
    }

    // calculate reward per token
    function rewardPerToken() public view returns (uint256) {
        if (_totalStaked == 0) {
            return rewardPerTokenStored;
        }
        return
            rewardPerTokenStored +
            (block.timestamp - lastUpdateTime) * rewardRatePerSecond * 1e18 / _totalStaked;
    }

    // calculate earned rewards
    function earned(address account) internal view returns (uint256) {
        return
            (_balances[account] * (rewardPerToken() - userRewardPerTokenPaid[account]) / 1e18)
            + rewards[account];
    }

    // calculate daily reward rate per staked ETH
    function dailyRewardRate() external view returns (uint256) {
        return rewardRatePerSecond * 86400; // 86400 seconds in a day
    }

    // calculate total reward earned for a given stake amount
    function estimateDailyEarningForStake(uint256 stakeAmount) external view returns (uint256) {
        if (_totalStaked == 0) return 0;
        uint256 dailyRewardPerToken = (rewardRatePerSecond * 86400 * 1e18) / _totalStaked;
        return (stakeAmount * dailyRewardPerToken) / 1e18;
    }

    /**
     * @notice Stake native ETH
     */
    function stake() public payable updateReward(msg.sender) {
        require(msg.value > 0, "Cannot stake 0");
        _totalStaked += msg.value;
        _balances[msg.sender] += msg.value;
        emit Staked(msg.sender, msg.value);
    }

    /**
     * @notice Withdraw staked ETH
     * @param amount Amount of ETH to withdraw
     */
    function withdraw(uint256 amount) public updateReward(msg.sender) {
        require(amount > 0, "Cannot withdraw 0");
        require(_balances[msg.sender] >= amount, "Insufficient balance");

        _totalStaked -= amount;
        _balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdrawn(msg.sender, amount);
    }

    /**
     * @notice Claim accumulated reward tokens
     */
    function getReward() public updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            require(rewardToken.transfer(msg.sender, reward), "Reward transfer failed");
            emit RewardPaid(msg.sender, reward);
        }
    }

    /**
     * @notice Exit staking: withdraw all and claim rewards
     */
    function exit() external {
        withdraw(_balances[msg.sender]);
        getReward();
    }

    // allow contract to receive ETH
    receive() external payable {
        stake();
    }
}
