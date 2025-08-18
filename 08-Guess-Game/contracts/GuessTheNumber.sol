// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GuessTheNumber is Ownable {
    uint256 public secretNumber;
    address public lastWinner;
    mapping(address => uint256) public attempts;
    IERC20 public rewardToken;
    uint256 public rewardAmount;

    event GameStarted(uint256 blockNumber);
    event GuessMade(address indexed player, uint256 guess, string message);
    event GameWon(address indexed winner, uint256 attempts, uint256 reward);

    constructor(address _rewardToken, uint256 _rewardAmount) Ownable(msg.sender) {
        rewardToken = IERC20(_rewardToken);
        rewardAmount = _rewardAmount;
        resetGame();
    }

    function resetGame() public {
        // Generate random number using blockhash and timestamp
        secretNumber = uint256(keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))) % 100 + 1;
        attempts[msg.sender] = 0;
        emit GameStarted(block.number);
    }

    function makeGuess(uint256 _guess) public {
        require(_guess >= 1 && _guess <= 100, "Guess must be between 1 and 100");
        attempts[msg.sender]++;

        if (_guess == secretNumber) {
            lastWinner = msg.sender;
            
            // Reward the winner (if the contract has enough tokens)
            if (rewardToken.balanceOf(address(this)) >= rewardAmount) {
                rewardToken.transfer(msg.sender, rewardAmount);
            }

            emit GameWon(msg.sender, attempts[msg.sender], rewardAmount);
            resetGame();
        } else if (_guess < secretNumber) {
            emit GuessMade(msg.sender, _guess, "Too low! Try a higher number.");
        } else {
            emit GuessMade(msg.sender, _guess, "Too high! Try a lower number.");
        }
    }

    // Owner can set new reward amount
    function setReward(uint256 _newAmount) external onlyOwner {
        rewardAmount = _newAmount;
    }

    // Deposit ERC-20 tokens to fund rewards
    function depositRewards(uint256 amount) external {
        require(rewardToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
    }

    // Withdraw ERC-20 tokens (only owner)
    function withdrawTokens(uint256 amount) external onlyOwner {
        require(rewardToken.transfer(msg.sender, amount), "Transfer failed");
    }

    function secret() public view returns (uint256) {
        return secretNumber;
    }

    function getAttempts(address _playerAddress) public view returns (uint256) {
        return attempts[_playerAddress];
    }
}
