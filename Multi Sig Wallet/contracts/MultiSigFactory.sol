// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

import "./interfaces/IPool.sol";
import "./Pool.sol";

contract MultiSigFactory {
    address private feeReceiver; // TODO: implement token fee receivers for creating those smart wallets

    address[] private allWallets;

    event PoolCreated(address tokenA, address tokenB, address poolAddress);

    constructor(address _feeReceiver) {
        feeReceiver = _feeReceiver;
    }

    function createMultiSig(address[] memory _owners, uint256 noOfConfirmations) 
    external returns (address multisigAddress) {

        bytes memory bytecode = getByteCode(_owners, _noOfConfirmations);
        bytes32 salt = keccak256(abi.encodePacked(_owners[0], _owners[1]));

        //TODO: put the salt

        assembly {
            multisigAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        allWallets.push(multisigAddress);

        emit MultiSigCreated(multisigAddress);
    }


    function getAllDeployedMultiSigs() public returns (address[] memory) {
        return allWallets;
    }


    function getBytecode(address[] memory _owners)
        internal
        pure
        returns (bytes memory)
    {
        bytes memory bytecode = type(MultiSig).creationCode;

        return abi.encodePacked(bytecode, abi.encode(_owners, _noOfConfirmations));
    }
}