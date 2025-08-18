// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// import "hardhat/console.sol";


interface IMultiSig {

    struct Transaction {
        address proposer;
        address to;
        uint256 value;
        // bytes data; TODO: Complex functions
        string description;
        uint256 noOfConfirmations;
        bool status;
    }


    function submitProposal(address _to, uint256 _value, string memory _description) external returns (bool);

     function confirmProposal(uint256 _proposalIndex) external returns (bool);

     function revokeConfirmedProposal(uint256 _proposalIndex) external returns (bool);

     function executeProposal(uint _proposalIndex) external returns (bool);

     function fundWallet() external payable;

     function getAllProposals() external returns (Transaction[] memory);

     function getOwners() external returns (address[] memory);

     function getTimeCreated() external returns (uint256);

     function getDeployer() external returns (address);
}