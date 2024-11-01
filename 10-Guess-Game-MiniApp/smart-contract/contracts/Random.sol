// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GuessTheNumber {
    address public owner;
    uint256 private randomNumber;
    bool public isGameActive;
    IERC20 public tCoreToken;
    
    event GameResult(bool win, uint256 guessedNumber, uint256 correctNumber);
    
    constructor(address _tCoreTokenAddress) {
        owner = msg.sender;
        isGameActive = true;
        generateRandomNumber();
        tCoreToken = IERC20(_tCoreTokenAddress);
    }


    function claimTokens() public {
        uint256 amount = 1 * 10 ** 18; // 1 tCore token (assuming 18 decimals)
        require(tCoreToken.balanceOf(address(this)) >= amount, "Not enough tokens in the contract");
        tCoreToken.transfer(msg.sender, amount);
    }

    // Function to generate a pseudo-random number between 1 and 10
    function generateRandomNumber() public {
        // Uses block timestamp and difficulty to generate pseudo-randomness
        randomNumber = (uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao))) % 10) + 1;
    }

     function getRandomNumber() public view returns (uint256) {
        return randomNumber;
    }

    // Function for the player to guess the number
    function guess(uint256 _guess) public returns (string memory) {
        require(isGameActive, "The game is not active.");
        require(_guess >= 1 && _guess <= 10, "Guess must be between 1 and 10.");

        if (_guess == randomNumber) {
            emit GameResult(true, _guess, randomNumber);
            generateRandomNumber();  // Generate a new number for the next round
            return "Congratulations, you guessed the correct number!";
        } else {
            emit GameResult(false, _guess, randomNumber);
            return "Sorry, wrong guess. Try again!";
        }
    }

    // Function for the owner to end the game
    function endGame() public {
        require(msg.sender == owner, "Only the owner can end the game.");
        isGameActive = false;
    }

    // Function for the owner to restart the game with a new random number
    function restartGame() public {
        require(msg.sender == owner, "Only the owner can restart the game.");
        isGameActive = true;
        generateRandomNumber();
    }
}
