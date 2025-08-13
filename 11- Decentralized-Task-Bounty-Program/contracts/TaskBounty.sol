// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TaskBounty {
    struct Task {
        uint id;
        address creator;
        string description;
        uint bounty;
        bool completed;
        address[] completions;
    }

    mapping(uint => Task) public tasks;
    mapping(uint => mapping(address => bool)) public hasCompleted;
    uint public taskCount;

    event TaskCreated(uint id, address creator, string description, uint bounty);
    event TaskCompleted(uint id, address completer);
    event RewardDistributed(uint id, address completer, uint bounty);

    function createTask(string memory _description, uint _bounty) public payable {
        require(msg.value == _bounty, "Must send bounty amount");
        taskCount++;
        
        // Initialize task properties individually
        Task storage newTask = tasks[taskCount];
        newTask.id = taskCount;
        newTask.creator = msg.sender;
        newTask.description = _description;
        newTask.bounty = _bounty;
        newTask.completed = false;
        // completions array is initialized empty by default
        
        emit TaskCreated(taskCount, msg.sender, _description, _bounty);
    }

    function submitCompletion(uint _taskId) public {
        Task storage task = tasks[_taskId];
        require(task.id != 0, "Task does not exist");
        require(!task.completed, "Task already completed");
        require(!hasCompleted[_taskId][msg.sender], "You have already submitted completion for this task");

        task.completions.push(msg.sender);
        hasCompleted[_taskId][msg.sender] = true;
        emit TaskCompleted(_taskId, msg.sender);
    }

    function verifyCompletion(uint _taskId, address _completer) public {
        Task storage task = tasks[_taskId];
        require(task.id != 0, "Task does not exist");
        require(msg.sender == task.creator, "Only the creator can verify completion");
        require(hasCompleted[_taskId][_completer], "Completion not submitted by this address");
        require(!task.completed, "Task already completed");

        task.completed = true;
        payable(_completer).transfer(task.bounty);
        emit RewardDistributed(_taskId, _completer, task.bounty);
    }

    // Helper function to get task completions
    function getTaskCompletions(uint _taskId) public view returns (address[] memory) {
        return tasks[_taskId].completions;
    }

    // Helper function to check if address has completed task
    function checkHasCompleted(uint _taskId, address _user) public view returns (bool) {
        return hasCompleted[_taskId][_user];
    }
}