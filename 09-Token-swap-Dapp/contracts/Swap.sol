// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Swap is Ownable {
    address public feeCollector; // Address to collect fees
    uint32 public feePercent; // Fee percentage (in basis points, e.g., 50 = 0.5%)

    event TokensSwapped(
        address indexed user,
        address indexed tokenA,
        address indexed tokenB,
        uint256 amountIn,
        uint256 amountOut,
        uint256 fee
    );

    constructor(uint32 _feePercent) Ownable(msg.sender){
        require(_feePercent <= 10000, "Fee too high");
        feeCollector = msg.sender;
        feePercent = _feePercent;
    }

    // Swap ERC20 tokens
    function swapTokens(
        address tokenA,
        address tokenB,
        uint256 amountIn
    ) external {
        require(amountIn > 0, "AmountIn must be greater than 0");
        // Calculate fee
        uint256 fee = (amountIn * feePercent) / 10000;
        uint256 amountOut = amountIn - fee;

        require(IERC20(tokenB).balanceOf(address(this)) >= amountOut, "Insufficient tokenB for swap");

        // Transfer tokenA from sender to this contract
        IERC20(tokenA).transferFrom(msg.sender, address(this), amountIn);

        // Send fee to fee collector
        if (fee > 0) {
            IERC20(tokenA).transfer(feeCollector, fee);
        }

        // Transfer tokenB to the receiver
        IERC20(tokenB).transfer(msg.sender, amountOut);

        // Emit event for transparency
        emit TokensSwapped(msg.sender, tokenA, tokenB, amountIn, amountOut, fee);
    }

    // Swap native token (ETH) for ERC20 token
    function swapNativeForToken(address tokenB) external payable {
        require(msg.value > 0, "Amount must be greater than 0");
        uint256 amountIn = msg.value;
        uint256 fee = (amountIn * feePercent) / 10000;
        uint256 amountOut = amountIn - fee;

        require(IERC20(tokenB).balanceOf(address(this)) >= amountOut, "Insufficient token for swap");

        // Send fee to fee collector in native tokens
        if (fee > 0) {
            payable(feeCollector).transfer(fee);
        }

        // Transfer tokenB to the user
        IERC20(tokenB).transfer(msg.sender, amountOut);

        // Emit event for transparency
        emit TokensSwapped(msg.sender, address(0), tokenB, amountIn, amountOut, fee);
    }

    // Withdraw ERC20 tokens from the contract
    function withdrawTokens(address token, uint256 amount) external onlyOwner {
        require(IERC20(token).balanceOf(address(this)) >= amount, "Insufficient token balance");
        IERC20(token).transfer(msg.sender, amount);
    }

    // Withdraw native tokens from the contract
    function withdrawNative(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient ETH balance");
        payable(msg.sender).transfer(amount);
    }

    // Updates the fee percentage
    function updateFee(uint32 newFeePercent) public onlyOwner {
        require(newFeePercent <= 10000, "Fee too high");
        feePercent = newFeePercent;
    }
}
