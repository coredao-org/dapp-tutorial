// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract TaskRewardSystem is AccessControl, ReentrancyGuard {
    enum TaskStatus { Pending, Claimed, Completed, Validated, Inactive}

    struct Task {
        uint id;
        string description;
        uint rewardPoints;
        address assignee;
        address validator;
        TaskStatus status;
    }

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ASSIGNEE_ROLE = keccak256("ASSIGNEE_ROLE");

    address public deployer;
    uint public nextTaskId;
    uint public taskCount;
    mapping(uint => Task) public tasks;
    mapping(address => uint) public balances;

    Task[] public allTasks;

    event TaskCreated(uint taskId, string description, uint rewardPoints);
    event TaskClaimed(uint taskId, address assignee);
    event TaskCompleted(uint taskId);
    event TaskValidated(uint taskId, address assignee, uint rewardPoints);
    event TaskAssigned(uint taskId, address assignee);
    event TaskRewardTransferred(uint taskId, address assignee, uint rewardPoints);
    event AdminAssigned(address newAdmin);
    event AssigneeAssigned(uint taskId, address assignee);
    event TaskUpdated(uint taskId, string newDescription, uint newRewardPoints);
    event TaskDeleted(uint taskId);

    modifier onlyAdmin() {
        require(hasRole(ADMIN_ROLE, msg.sender), "Only admin can perform this action");
        _;
    }

    modifier onlyAssignee(uint taskId) {
        require(tasks[taskId].assignee == msg.sender || hasRole(ASSIGNEE_ROLE, msg.sender), "Not authorized");
        _;
    }

    modifier taskNotCompleted(uint taskId) {
        require(tasks[taskId].status != TaskStatus.Completed, "Task is already completed");
        _;
    }

    modifier taskNotValidated(uint taskId) {
        require(tasks[taskId].status != TaskStatus.Validated, "Task is already validated");
        _;
    }
    
    modifier taskCanBeClaimed(uint taskId) {
        require(tasks[taskId].status != TaskStatus.Claimed, "Task already claimed");
        require(tasks[taskId].status != TaskStatus.Validated, "Task already validated");
        require(tasks[taskId].status != TaskStatus.Completed, "Task already completed");
        require(tasks[taskId].status != TaskStatus.Inactive, "Task already deleted");
        _;
    }

    constructor() {
        deployer = msg.sender;
        _grantRole(ADMIN_ROLE, msg.sender);
        _setRoleAdmin(ASSIGNEE_ROLE, ADMIN_ROLE);
        nextTaskId = 1;
        taskCount = 0;
    }

    // Create task
    function createTask(string memory description, uint rewardPoints) public onlyAdmin {
        tasks[nextTaskId] = Task(nextTaskId, description, rewardPoints, address(0), address(0), TaskStatus.Pending);
        taskCount++;
        allTasks.push(tasks[nextTaskId]);
        emit TaskCreated(nextTaskId, description, rewardPoints);
        nextTaskId++;
    }

    // Assign assignee to a task (only admin can assign an assignee)
    function assignAssignee(uint taskId, address assignee) public onlyAdmin {
        require(tasks[taskId].assignee == address(0), "Task already has an assignee");
        tasks[taskId].assignee = assignee;
        _grantRole(ASSIGNEE_ROLE, assignee);  // Grant ASSIGNEE_ROLE to the assignee
        allTasks[taskId - 1] = tasks[taskId];
        emit AssigneeAssigned(taskId, assignee);
    }

    // Claim task automatically
    function claimTask(uint taskId) public taskNotCompleted(taskId) taskCanBeClaimed(taskId) {
        tasks[taskId].assignee = msg.sender;
        tasks[taskId].status = TaskStatus.Claimed;
        allTasks[taskId - 1] = tasks[taskId];
        emit TaskClaimed(taskId, msg.sender);
        emit TaskAssigned(taskId, msg.sender);  // Emit task assigned event
    }

    // Mark task as complete
    function completeTask(uint taskId) public onlyAssignee(taskId) taskNotCompleted(taskId) {
        tasks[taskId].status = TaskStatus.Completed;
        allTasks[taskId - 1] = tasks[taskId];
        emit TaskCompleted(taskId);
    }

    // Validate task and reward
    function validateTask(uint taskId) public onlyAdmin taskNotValidated(taskId) nonReentrant {
        require(tasks[taskId].status == TaskStatus.Completed, "Task not completed yet");
        tasks[taskId].status = TaskStatus.Validated;
        tasks[taskId].validator = msg.sender;
        balances[tasks[taskId].assignee] += tasks[taskId].rewardPoints;
        allTasks[taskId - 1] = tasks[taskId];
        emit TaskValidated(taskId, tasks[taskId].assignee, tasks[taskId].rewardPoints);
        emit TaskRewardTransferred(taskId, tasks[taskId].assignee, tasks[taskId].rewardPoints);  // Emit reward transfer event
    }

    // View task status
    function viewTaskStatus(uint taskId) public view returns (TaskStatus) {
        return tasks[taskId].status;
    }

    // Assign new admin (Deployer assigns a new admin by passing their address)
    function assignAdmin(address newAdmin) public {
        require(msg.sender == deployer, "Only the deployer can assign a new admin");
        require(newAdmin != address(0), "New admin address cannot be zero address");
        _grantRole(ADMIN_ROLE, newAdmin);
        emit AdminAssigned(newAdmin);
    }

    // Get global overview of all tasks
    function getAllTasks() public view returns (Task[] memory) {
        return allTasks;
    }
    // Get reward points for a given task
    function getRewardPoints(uint taskId) public view returns (uint) {
        return tasks[taskId].rewardPoints;
    }

    // Mark a task as inactive (instead of deleting it)
    function deleteTask(uint taskId) public onlyAdmin {
        tasks[taskId].status = TaskStatus.Inactive;
        allTasks[taskId - 1] = tasks[taskId];  // Mark as inactive in the array
        emit TaskDeleted(taskId);
    }

    // Update task description or reward points (only admin can use this function)
    function updateTask(uint taskId, string memory newDescription, uint newRewardPoints) public onlyAdmin {
        tasks[taskId].description = newDescription;
        tasks[taskId].rewardPoints = newRewardPoints;
        allTasks[taskId - 1] = tasks[taskId];
        emit TaskUpdated(taskId, newDescription, newRewardPoints);
    }
}