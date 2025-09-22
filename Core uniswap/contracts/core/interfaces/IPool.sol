// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IPool {
    // event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function init(address _tokenA, address _tokenB) external;

    function mint(address _to) external returns (uint256);

    function liquidateLpTokens(
        address to
    ) external returns (uint256 amountA, uint256 amountB);

    function getTokenReserves() external view returns (uint256, uint256);

    function swap(
        uint256 amount0Out,
        uint256 amount1Out,
        address to /**bytes calldata data */
    ) external;
}