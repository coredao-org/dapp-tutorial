// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ReputationSystem {
    struct User {
        uint256 reputationScore;
        uint256 completedTasks;
    }

    mapping(address => User) public users;

    event ReputationUpdated(address indexed user, uint256 newScore);

    function addCompletedTask(address user) external {
        users[user].completedTasks += 1;
        updateReputation(user);
    }

    function updateReputation(address user) internal {
        uint256 newScore = calculateReputationScore(user);
        users[user].reputationScore = newScore;
        emit ReputationUpdated(user, newScore);
    }

    function calculateReputationScore(address user) internal view returns (uint256) {
        return users[user].completedTasks * 10; // Example scoring logic
    }

    function getReputation(address user) external view returns (uint256) {
        return users[user].reputationScore;
    }

    function getCompletedTasks(address user) external view returns (uint256) {
        return users[user].completedTasks;
    }
}