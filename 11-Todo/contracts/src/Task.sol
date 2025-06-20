// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;



contract Tasks {
    struct Task{
        bytes32 task;
        bool isCompleted;
        uint lastUpdated;
    }

    Task[] private tasks;
    // mapping (uint256 => Task) private Tasks;
    uint256 private ids;

    event CreateTask(uint);
    event ToggleTask(uint);

    function createTask(string memory _name) external  {
        Task memory task;
        task.task = bytes32(bytes(_name));
        task.lastUpdated = block.timestamp;

        // Tasks[ids] = Task;
        // ids += 1;
        tasks.push(task);
        emit CreateTask(tasks.length);
    }

    function toggleTask(uint index) external {
        Task storage task = tasks[index];
        task.isCompleted = !task.isCompleted;
        task.lastUpdated = block.timestamp;
        emit ToggleTask(index);
    }

    function getAllTasks() external view returns (bytes32[] memory, bool[] memory, uint[] memory) {
        bytes32[] memory taskss = new bytes32[](tasks.length);
        bool[] memory isCompleted = new bool[](tasks.length);
        uint[] memory lastUpdateds = new uint[](tasks.length);

        for (uint256 i = 0; i < tasks.length; i++) {
            taskss[i] = tasks[i].task;
            isCompleted[i] = tasks[i].isCompleted;
            lastUpdateds[i] = tasks[i].lastUpdated;
        }

        
        return (taskss, isCompleted, lastUpdateds);
    }
}