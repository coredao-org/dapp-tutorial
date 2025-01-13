// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

import "./MultiSig.sol";

contract MultiSigFactory {
    address private feeReceiver; // TODO: implement token fee receivers for creating those smart wallets

    address[] private allWallets;

    // struct Transaction {
    //     address proposer;
    //     address to;
    //     bytes data;
    //     uint256 noOfConfirmations;
    //     bool status;
    // }

    event MultiSigCreated(address multisigAddress);

    constructor(address _feeReceiver) {
        feeReceiver = _feeReceiver;
    }

    function createMultiSig(address[] memory _owners, uint256 _noOfConfirmations) payable external returns (address multisigAddress) {

        bytes memory bytecode = getByteCode(_owners, _noOfConfirmations);
        bytes32 salt = keccak256(abi.encodePacked(_owners[0], _owners[1]));

        //TODO: put the salt

        assembly {
            multisigAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        allWallets.push(multisigAddress);

        emit MultiSigCreated(multisigAddress);
    }

    //// ROUTING OR CONTROLLER SECTION
    function submitTransaction(address multisigAddress, address _to, uint256 _value, string memory _description) public returns (bool) {
        bool submitted = MultiSig(multisigAddress).submitProposal(_to, _value, _description);

        return submitted;
    }

    function confirmTransaction(address multisigAddress, uint256 _proposalIndex) public returns (bool) {
        bool isConfirmed = MultiSig(multisigAddress).confirmProposal(_proposalIndex);

        return isConfirmed;
    }

    function revokeConfirmedTransaction(address multisigAddress, uint256 _proposalIndex) public returns (bool) {
        bool isRevoked = MultiSig(multisigAddress).revokeConfirmedProposal(_proposalIndex);

        return isRevoked;
    } 

    function executeTransaction(address multisigAddress, uint _proposalIndex) public returns (bool) {
        bool isExecuted = MultiSig(multisigAddress).executeProposal(_proposalIndex);

        return isExecuted;
    }

    function Deposit(address multisigAddress) public returns(uint256) {
        return MultiSig(multisigAddress).fundWallet();
    }

    // rOUTER TO GETTER FUNCIONS FROM THE MULTISIGS
    function getOwners(address multisigAddress) public view returns (address[] memory) {
        address[] memory owners = MultiSig(multisigAddress).getOwners();
        return owners;
    }

    function getDeployer(address multisigAddress) public view returns (address) {
        return MultiSig(multisigAddress).getDeployer();
    }

    function getAllProposals(address multisigAddress) public view returns (MultiSig.Transaction[] memory) {
        MultiSig.Transaction[] memory transactions = MultiSig(multisigAddress).getAllProposals();
        return transactions;
    }

    function getTimeCreated(address multisigAddress) public view returns (uint256) {
        uint256 deployedTime = MultiSig(multisigAddress).getTimeCreated() ;
        return deployedTime;
    }


    // GETTER FUNCTIONS


    function getAllDeployedMultiSigs() public view returns (address[] memory) {
        return allWallets;
    }


    function getByteCode(address[] memory _owners, uint256 _noOfConfirmations)
        internal
        pure
        returns (bytes memory)
    {
        bytes memory bytecode = type(MultiSig).creationCode;

        return abi.encodePacked(bytecode, abi.encode(_owners, _noOfConfirmations));
    }

}