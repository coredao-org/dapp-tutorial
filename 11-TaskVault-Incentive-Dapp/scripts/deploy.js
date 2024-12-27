const hre = require("hardhat");

async function main() {
  // Get both deployer and assignee accounts
  const [deployer, assignee] = await hre.ethers.getSigners();
  
  // Deploy the TaskRewardSystem contract using the deployer's private key
  const TaskRewardSystem = await hre.ethers.getContractFactory("TaskRewardSystem", deployer);
  const taskRewardSystem = await TaskRewardSystem.deploy();
  await taskRewardSystem.deployed();
  console.log("TaskRewardSystem contract deployed to:", taskRewardSystem.address);

  // Set gas price and gas limit for the transactions
  const gasPrice = await hre.ethers.provider.getGasPrice();  // Get current gas price
  const gasLimit = 5000000;

  // Assign deployer as admin (done in constructor but can be done explicitly here)
  const txAssignAdmin = await taskRewardSystem.assignAdmin(deployer.address, {
    gasLimit: gasLimit,
    gasPrice: gasPrice
  });
  await txAssignAdmin.wait();
  console.log("Deployer has been assigned the ADMIN_ROLE.");

  // Create a new task
  console.log("Creating a new task...");
  const txCreateTask = await taskRewardSystem.createTask("Sundry the Plates", 10, {
    gasLimit: gasLimit,
    gasPrice: gasPrice
  });
  await txCreateTask.wait();
  console.log("Task created successfully.");

  // Retrieve the task ID (based on nextTaskId)
  const taskId = await taskRewardSystem.nextTaskId() - 1;

  // Assign the assignee to the task
  console.log("Assigning assignee to the task...");
  const txAssignAssignee = await taskRewardSystem.assignAssignee(taskId, assignee.address, {
    gasLimit: gasLimit,
    gasPrice: gasPrice
  });
  await txAssignAssignee.wait();
  console.log("Assignee has been assigned to the task.");

  // Claim task as assigned (Sign in as the assignee here)
  console.log("Claiming the task...");
  let task = await taskRewardSystem.tasks(taskId);
  console.log("Task details before claiming:", task);
  
  // Ensure only the assignee can claim the task
  if (task.assignee === assignee.address) {
      const txClaimTask = await taskRewardSystem.connect(assignee).claimTask(taskId, {
          gasLimit: gasLimit,
          gasPrice: gasPrice
      });
      await txClaimTask.wait();
      console.log("Task claimed successfully.");
      task = await taskRewardSystem.tasks(taskId);
      console.log(task);
  } else {
      console.log("You are not the assignee of this task!");
  }

  // Complete the task (done by the assignee, signed in as the assignee)
  console.log("Completing the task...");
  task = await taskRewardSystem.tasks(taskId);
  if (task.status === 1) { // Only complete if it's claimed
    const txCompleteTask = await taskRewardSystem.connect(assignee).completeTask(taskId, {
      gasLimit: gasLimit,
      gasPrice: gasPrice
    });
    await txCompleteTask.wait();
    console.log("Task completed.");
  } else {
    console.log("Task cannot be completed as it's not claimed.");
  }

  // Admin validates the task and rewards the assignee (Sign in as the deployer/admin)
  console.log("Admin validating the task...");
  const admin = deployer;  // Deployer is the admin in this case
  task = await taskRewardSystem.tasks(taskId);
  if (task.status === 2) { // TaskStatus.Completed is 2
    const txValidateTask = await taskRewardSystem.connect(admin).validateTask(taskId, {
      gasLimit: gasLimit,
      gasPrice: gasPrice
    });
    await txValidateTask.wait();
    console.log("Task validated and reward distributed.");
  } else {
    console.log("Task cannot be validated as it's not completed.");
  }

  // Retrieve task information after validation
  task = await taskRewardSystem.tasks(taskId);
  console.log("Task details after validation:", task);

  // Update task description and reward points (admin only)
  console.log("Updating task...");
  const txUpdateTask = await taskRewardSystem.updateTask(taskId, "Washed the dishes and cleaned the kitchen", 500, {
    gasLimit: gasLimit,
    gasPrice: gasPrice
  });
  await txUpdateTask.wait();
  console.log("Task updated successfully.");

  // Delete task (admin only)
  console.log("Deleting the task...");
  const txDeleteTask = await taskRewardSystem.deleteTask(taskId, {
    gasLimit: gasLimit,
    gasPrice: gasPrice
  });
  const delTx = await txDeleteTask.wait();
  console.log("Task deleted.", delTx);

  // Retrieve the reward points of the task
  const rewardPoints = await taskRewardSystem.getRewardPoints(taskId);
  console.log(`Reward points for task ${taskId}:`, rewardPoints.toString());

  // View the task status
  const taskStatus = await taskRewardSystem.viewTaskStatus(taskId);
  console.log(`Task ${taskId} status:`, taskStatus.toString());

  // Get all tasks from the contract
  const allTasks = await taskRewardSystem.getAllTasks();
  console.log("All tasks:", allTasks);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
