// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

import "./MultiSig.sol";
import "./interfaces/IMultiSig.sol";

contract MultiSigFactory {
    address private feeReceiver; // TODO: implement token fee receivers for creating those smart wallets

    address[] private allWallets;

    struct Wallets {
        address walletAddress;
        uint256 timeCreated;
        uint256 balance;
    }

    mapping(address => Wallets[]) private wallets;

    event MultiSigCreated(address multisigAddress);

    constructor(address _feeReceiver) {
        feeReceiver = _feeReceiver;
    }

    function createMultiSig(address[] memory _owners, uint256 _noOfConfirmations) payable public returns (address multisigAddress) {

        bytes memory bytecode = type(MultiSig).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_owners, _noOfConfirmations));

        //TODO: put the salt

        assembly {
            multisigAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        MultiSig(multisigAddress).init(_owners, _noOfConfirmations);

        allWallets.push(multisigAddress);
        Wallets memory wallet = Wallets(multisigAddress, block.timestamp, address(multisigAddress).balance);
        wallets[msg.sender].push(wallet);

        emit MultiSigCreated(multisigAddress);
    }

    //// ROUTING OR CONTROLLER SECTION
    function submitTransaction(address multisigAddress, address _to, uint256 _value, string memory _description) public returns (bool) {
        IMultiSig(multisigAddress).submitProposal(_to, _value, _description);

        return true;
    }

    function confirmTransaction(address multisigAddress, uint256 _proposalIndex) public returns (bool) {
        bool isConfirmed = IMultiSig(multisigAddress).confirmProposal(_proposalIndex);

        return isConfirmed;
    }

    function revokeConfirmedTransaction(address multisigAddress, uint256 _proposalIndex) public returns (bool) {
        bool isRevoked = IMultiSig(multisigAddress).revokeConfirmedProposal(_proposalIndex);

        return isRevoked;
    } 

    function executeTransaction(address multisigAddress, uint _proposalIndex) public returns (bool) {
        bool isExecuted = IMultiSig(multisigAddress).executeProposal(_proposalIndex);

        return isExecuted;
    }

    function Deposit(address multisigAddress) public {
        IMultiSig(multisigAddress).fundWallet();
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
        return MultiSig(multisigAddress).getAllProposals();
    }

    function getTimeCreated(address multisigAddress) public view returns (uint256) {
        return MultiSig(multisigAddress).getTimeCreated();
    }

    function getDeployersWallets(address deployer) public view returns (Wallets[] memory) {
        return wallets[deployer];
    }


    // GETTER FUNCTIONS


    function getAllDeployedMultiSigs() public view returns (address[] memory) {
        return allWallets;
    }


}