// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IWCore {
    function deposit() external payable;

    function transfer(address to, uint value) external returns (bool);

    function withdraw(uint) external;
}