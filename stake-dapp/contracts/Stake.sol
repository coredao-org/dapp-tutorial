// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract NativeStaking is Ownable, ReentrancyGuard, Pausable {
    struct StakeInfo {
        uint256 amount;
        uint256 since;
    }

    uint256 public totalStaked;
    uint256 public annualRewardRate; // e.g., 10e16 = 10% (using 18 decimals)

    mapping(address => StakeInfo) public stakes;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 principal, uint256 reward);
    event RewardRateUpdated(uint256 newRate);

    constructor(uint256 _annualRewardRate) {
        annualRewardRate = _annualRewardRate;
    }

    /// @notice Stake native tokens. Emits Staked event.
    function stake() external payable whenNotPaused nonReentrant {
        require(msg.value > 0, "Cannot stake zero");
        StakeInfo storage s = stakes[msg.sender];
        s.amount += msg.value;
        s.since = block.timestamp;
        totalStaked += msg.value;
        emit Staked(msg.sender, msg.value);
    }

    /// @notice Withdraw stake plus rewards. Emits Withdrawn event.
    function withdraw() external nonReentrant {
        StakeInfo storage s = stakes[msg.sender];
        require(s.amount > 0, "No stake found");

        uint256 principal = s.amount;
        uint256 stakingTime = block.timestamp - s.since;
        uint256 reward = (principal * annualRewardRate * stakingTime) / (365 days * 1e18);

        // Reset stake
        delete stakes[msg.sender];
        totalStaked -= principal;

        // Transfer back principal + reward
        (bool ok, ) = msg.sender.call{value: principal + reward}("");
        require(ok, "Transfer failed");

        emit Withdrawn(msg.sender, principal, reward);
    }

    /// @notice Update the annual reward rate (owner only).
    function setAnnualRewardRate(uint256 _newRate) external onlyOwner {
        annualRewardRate = _newRate;
        emit RewardRateUpdated(_newRate);
    }

    /// @notice Pause staking and withdrawals (owner only).
    function pause() external onlyOwner {
        _pause();
    }

    /// @notice Resume operations (owner only).
    function unpause() external onlyOwner {
        _unpause();
    }

    /// @notice Fallback to receive native tokens accidentally.
    receive() external payable {
        revert("Use stake()");
    }
}
