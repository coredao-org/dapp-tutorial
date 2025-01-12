// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// import "hardhat/console.sol";

error MultiSig__OwnersRequired();
error MultiSig__InvalidAddress();
error MultiSig__NotConfirmed();
error MultiSig__AlreadyConfirmed();
error MultiSig__ProposalNotExists();
error MultiSig__AlreadyExecuted();
error MultiSig__NotEnoughConfirmations();

contract MultiSig{
    uint256 private deployedTime;
    address private deployer;
    address[] private owners;
    uint private noOfConfirmationsNeeded;

    // Making it more complex by adding time periods for when proposals expires
    // enum Status {
    //     success,
    //     pending,
    //     canceled
    // }

    // event Withdrawal(uint amount, uint when);

    struct Transaction {
        address proposer;
        address to;
        bytes data;
        uint256 noOfConfirmations;
        bool status;
    }

    mapping(uint256 => Transaction) private proposalByIndex;
    mapping(address => bool) private isOwner;
    mapping(address => mapping(uint256 => bool)) private confirmedByIndex;

    Transaction[] private transactions;

    modifier onlyOwners() {
        if(!isOwner[msg.sender]) revert MultiSig__NotOwner();
        _;
    }

    modifier porposalAvailable(_proposalIndex) {
        if(_proposalIndex >= transactions.length) revert MultiSig__ProposalNotExists();
        _;
    }

    constructor(address[] memory _owners, uint256 _noOfConfirmationsNeeded) {

        // Include your address if needed to perform the functions before deploying!

        if(_owners.length < 1) revert MultiSig__OwnersRequired();

        deployedTime = block.timestamp;
        deployer = payable(msg.sender);
        noOfConfirmationsNeeded = _noOfConfirmationsNeeded;

        for(uint i = 0; i < _owners.length; i++) {
            if(_owners[i] == address(0)) revert MultiSig__InvalidAddress();
            owners[i] = _owners[i];
            isOwner[i] = true;
        }
    }

    function submitProposal(address _to, bytes memory _data) public returns(bool) onlyOwners {

        uint256 proposalIndex = transaction.length;

        Transaction storage transaction = Transaction(msg.sender, _to, _data, 0, false);
        transactions.push(transaction);

        proposalByIndex[proposalIndex] = transaction;

        // emit ProposalSubmitted();
    }

    function confirmProposal(uint256 _proposalIndex) public returns (bool) onlyOwners proposalAvailable(_proposalIndex) {
        
        if(confirmedByIndex[msg.sender][_proposalIndex]) revert MultiSig__AlreadyConfirmed();

        Transaction storage transaction = proposalByIndex[_proposalIndex];
        if(transaction.status) revert MultiSig__AlreadyExecuted();
        transaction.noOfConfirmations += 1;

        confirmedByIndex[msg.sender][_proposalIndex] = true;

        // emit Confirmedproposal()
    }

    function revokeConfirmedProposal(uint _proposalIndex) public returns (bool) onlyOwners proposalAvailable(_proposalIndex) {

        //TODO: Require incase the proposal is executed, it should revert
        if(!confirmedByIndex[msg.sender][_proposalIndex]) revert MultiSig__NotConfirmed();

        Transaction storage transaction = proposalByIndex[_proposalIndex];
        if(transaction.status) revert MultiSig__AlreadyExecuted();
        transaction.noOfConfirmations -= 1;

        confirmedByIndex[msg.sender][_proposalIndex] = false;

        // emit RevokedProposal()
    }

    function executeProposal(uint _proposalIndex) public returns (bool) onlyOwners proposalAvailable(_proposalIndex) {
        
        Transaction storage transaction = proposalByIndex[_proposalIndex];
        if(transaction.noOfConfirmations < noOfConfirmationsNeeded) revert MultiSig__NotEnoughConfirmations();

        if(transaction.status) revert MultiSig__AlreadyExecuted();

        transaction.status = true;

        //TODO: execute the proposal
    }




    ////// GETTER FUNCTIONS
    function getdeployer() public returns (address) {
        return deployer;
    }

    function getOwners() public returns (address[] memory) {
        return owners;
    }

    function getTimeCreated() public returns (uint256) {
        return deployedTime;
    }

    function getAllProposals() public returns (Transaction[] memory) {
        return transactions;
    }
}
