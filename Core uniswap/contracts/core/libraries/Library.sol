// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

error PoolFactory__IdenticalAddress();
error PoolFactory__ZeroAddress();

library DefiLibrary {
    // returns sorted token addresses, used to handle return values from pairs sorted in this order
    function sortTokens(
        address tokenA,
        address tokenB
    ) internal pure returns (address token0, address token1) {
        if (tokenA == tokenB) revert PoolFactory__IdenticalAddress();
        (token0, token1) = tokenA < tokenB
            ? (tokenA, tokenB)
            : (tokenB, tokenA);
        // since tokenA is the smaller address we can check if its == address(0);
        if (token0 == address(0)) revert PoolFactory__ZeroAddress();
    }

    // performs chained getAmountOut calculations on any number of pairs
    // given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset
    function getAmountOut(
        uint amountIn,
        uint reserveIn,
        uint reserveOut
    ) internal pure returns (uint amountOut) {
        require(amountIn > 0, "UniswapV2Library: INSUFFICIENT_INPUT_AMOUNT");
        require(
            reserveIn > 0 && reserveOut > 0,
            "UniswapV2Library: INSUFFICIENT_LIQUIDITY"
        );
        uint amountInWithFee = amountIn * 997;
        uint numerator = amountInWithFee * reserveOut;
        uint denominator = (reserveIn * 1000) + (amountInWithFee);
        amountOut = numerator / denominator;
    }
}