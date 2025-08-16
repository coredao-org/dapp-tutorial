// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IFactory {
    function getTokenPairs(
        address tokenA,
        address tokenB
    ) external returns (address);

    function createPool(
        address tokenA,
        address tokenB
    ) external returns (address poolPair);
}