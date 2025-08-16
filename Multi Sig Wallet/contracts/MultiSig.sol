// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// import "hardhat/console.sol";

error MultiSig__OwnersRequired();
error MultiSig__InvalidAddress();
error MultiSig__NotConfirmed();
error MultiSig__AlreadyConfirmed();
error MultiSig__ProposalNotExists();
error MultiSig__AlreadyExecuted();
error MultiSig__NotEnoughConfirmations();
error MultiSig__NotOwner();
error MultiSig__TransferFailed();

contract MultiSig {
    uint256 private deployedTime;
    address private deployer;
    address[] private owners;
    uint private noOfConfirmationsNeeded;
    address private immutable sigFactory;
    uint256 public proposalIndex = 0;

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
        uint256 value;
        // bytes data; TODO: Complex functions
        string description;
        uint256 noOfConfirmations;
        bool status;
    }

    mapping(uint256 => Transaction) public proposalByIndex;
    mapping(address => bool) private isOwner;
    mapping(address => mapping(uint256 => bool)) private confirmedByIndex;

    Transaction[] public transactions;

    modifier onlyOwners() {
        if(!isOwner[msg.sender]) revert MultiSig__NotOwner();
        _;
    }

    modifier proposalAvailable(uint256 _proposalIndex) {
        if(_proposalIndex >= transactions.length) revert MultiSig__ProposalNotExists();
        _;
    }

    constructor() {
        sigFactory = msg.sender;
    }


    // Init function to be called only once by factory

    function init (address[] memory _owners, uint256 _noOfConfirmationsNeeded) external {

        if(sigFactory != msg.sender) revert MultiSig__NotOwner();

        // Include your address if needed to perform the functions before deploying!

        if(_owners.length < 1) revert MultiSig__OwnersRequired();

        deployedTime = block.timestamp;
        deployer = msg.sender;
        noOfConfirmationsNeeded = _noOfConfirmationsNeeded;

        for(uint i = 0; i < _owners.length; i++) {
            if(_owners[i] == address(0)) revert MultiSig__InvalidAddress();
            owners.push(_owners[i]);
            isOwner[_owners[i]] = true;
        }
    }

    function submitProposal(address _to, uint256 _value, string memory _description) public returns (bool) {

        Transaction memory transaction = Transaction(msg.sender, _to, _value, _description, 0, false);
        transactions.push(transaction);

        proposalByIndex[proposalIndex] = transaction;

        proposalIndex += 1;

        return true;

        // emit ProposalSubmitted();
    }

    function confirmProposal(uint256 _proposalIndex) public /**onlyOwners*/  proposalAvailable(_proposalIndex) returns (bool) {
        
        if(confirmedByIndex[msg.sender][_proposalIndex]) revert MultiSig__AlreadyConfirmed();

        Transaction storage transaction = proposalByIndex[_proposalIndex];
        if(transaction.status) revert MultiSig__AlreadyExecuted();
        transaction.noOfConfirmations = transaction.noOfConfirmations + 1;

        transactions[_proposalIndex].noOfConfirmations += 1;

        confirmedByIndex[msg.sender][_proposalIndex] = true;

        // emit Confirmedproposal()
    }

    function revokeConfirmedProposal(uint256 _proposalIndex) public /**onlyOwners*/  proposalAvailable(_proposalIndex) returns (bool) {

        //TODO: Require incase the proposal is executed, it should revert
        if(!confirmedByIndex[msg.sender][_proposalIndex]) revert MultiSig__NotConfirmed();

        Transaction storage transaction = proposalByIndex[_proposalIndex];
        if(transaction.status) revert MultiSig__AlreadyExecuted();
        transaction.noOfConfirmations = transaction.noOfConfirmations - 1;

        confirmedByIndex[msg.sender][_proposalIndex] = false;

        // emit RevokedProposal()
    }

    function executeProposal(uint _proposalIndex) public /**onlyOwners*/  proposalAvailable(_proposalIndex) returns (bool) {
        
        Transaction storage transaction = proposalByIndex[_proposalIndex];
        if(transaction.noOfConfirmations < noOfConfirmationsNeeded) revert MultiSig__NotEnoughConfirmations();

        if(transaction.status) revert MultiSig__AlreadyExecuted();

        transaction.status = true;

        //TODO: execute the proposal
        (bool success, ) = transaction.to.call{value: transaction.value}(""/**transaction.data*/);
        if(!success) revert MultiSig__TransferFailed();
    }

    function fundWallet() public payable {}




    ////// GETTER FUNCTIONS
    function getDeployer() public view returns (address) {
        return deployer;
    }

    function getOwners() public view returns (address[] memory) {
        return owners;
    }

    function getTimeCreated() public view returns (uint256) {
        return deployedTime;
    }

    function getAllProposals() public view returns (Transaction[] memory) {
        return transactions;
    }
}
