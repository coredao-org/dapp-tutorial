// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./interfaces/IPool.sol";
import "./Pool.sol";

error PoolFactory__IdenticalAddress();
error PoolFactory__ZeroAddress();
error PoolFactory__PoolExists();
error PoolFactory__NotSetter();

contract PoolFactory {
    address private feeReceiver;
    mapping(address => bool) private feeReceiverSetter;

    mapping(address => mapping(address => address)) private getPairs;
    address[] private allPairs;

    event PoolCreated(address tokenA, address tokenB, address poolAddress);

    constructor(address _feeReceiverSetter) {
        feeReceiverSetter[_feeReceiverSetter] = true;
    }

    function createPool(
        address tokenA,
        address tokenB
    ) external returns (address poolAddress) {
        if (tokenA == tokenB) revert PoolFactory__IdenticalAddress();
        (address token0, address token1) = tokenA < tokenB
            ? (tokenA, tokenB)
            : (tokenB, tokenA);
        // since tokenA is the smaller address we can check if its == address(0);
        if (token0 == address(0)) revert PoolFactory__ZeroAddress();
        if (getPairs[token0][token1] != address(0))
            revert PoolFactory__PoolExists();

        bytes memory bytecode = type(Pool).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(tokenA, tokenB));

        //TODO: put the salt

        assembly {
            poolAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        Pool(poolAddress).init(tokenA, tokenB);

        getPairs[token0][token1] = poolAddress;
        getPairs[token1][token0] = poolAddress;
        allPairs.push(poolAddress);

        emit PoolCreated(token0, token1, poolAddress);
    }

    function getTokenPairs(
        address _tokenA,
        address _tokenB
    ) external view returns (address) {
        return getPairs[_tokenA][_tokenB];
    }

    function setFeeReceiver(address _feeReceiver) external {
        checkIfSetter();

        feeReceiver = _feeReceiver;
    }

    function addToFeeReceiverSetter(address _feeReceiverSetter) external {
        checkIfSetter();

        feeReceiverSetter[_feeReceiverSetter] = true;
    }

    function removeFromFeeReceiverSetter(address _feeReceiverSetter) external {
        checkIfSetter();

        feeReceiverSetter[_feeReceiverSetter] = false;
    }

    function checkIfSetter() internal view {
        bool ifSetter = feeReceiverSetter[msg.sender];
        if (!ifSetter) revert PoolFactory__NotSetter();
    }
}