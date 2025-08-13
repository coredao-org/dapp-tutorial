const hre = require("hardhat");

async function main() {
    console.log("🧪 Testing Contract Interactions...");
    console.log("Network:", hre.network.name);
    
    const [owner, user1, user2] = await hre.ethers.getSigners();
    console.log("👤 Testing with accounts:");
    console.log("   Owner:", owner.address);
    console.log("   User1:", user1.address);
    console.log("   User2:", user2.address);
    
    // Deploy contracts fresh for testing
    console.log("\n🚀 Deploying contracts for testing...");
    
    const TaskBounty = await hre.ethers.getContractFactory("TaskBounty");
    const taskBounty = await TaskBounty.deploy();
    await taskBounty.waitForDeployment();
    const taskBountyAddress = await taskBounty.getAddress();
    console.log("TaskBounty deployed to:", taskBountyAddress);
    
    const ReputationSystem = await hre.ethers.getContractFactory("ReputationSystem");
    const reputationSystem = await ReputationSystem.deploy();
    await reputationSystem.waitForDeployment();
    const reputationSystemAddress = await reputationSystem.getAddress();
    console.log("ReputationSystem deployed to:", reputationSystemAddress);
    
    console.log("\n📋 Testing TaskBounty Contract...");
    
    // Create a task with bounty
    const bountyAmount = hre.ethers.parseEther("0.1");
    console.log("Creating task with bounty:", hre.ethers.formatEther(bountyAmount), "ETH");
    
    const tx1 = await taskBounty.connect(owner).createTask(
        "Build a simple React component", 
        bountyAmount, 
        { value: bountyAmount }
    );
    await tx1.wait();
    console.log("✅ Task creation transaction confirmed");
    
    // Check task count
    const taskCount = await taskBounty.taskCount();
    console.log("✅ Total tasks:", taskCount.toString());
    
    // Get task details
    const task = await taskBounty.tasks(1);
    console.log("📋 Task Details:");
    console.log("   ID:", task.id.toString());
    console.log("   Creator:", task.creator);
    console.log("   Description:", task.description);
    console.log("   Bounty:", hre.ethers.formatEther(task.bounty), "ETH");
    console.log("   Completed:", task.completed);
    
    // Submit completion as user1
    console.log("\n👷 User1 submitting completion...");
    const tx2 = await taskBounty.connect(user1).submitCompletion(1);
    await tx2.wait();
    console.log("✅ Completion submission confirmed");
    
    // Check if user1 has submitted
    const hasCompleted = await taskBounty.checkHasCompleted(1, user1.address);
    console.log("✅ User1 completion submitted:", hasCompleted);
    
    // Get completions array
    const completions = await taskBounty.getTaskCompletions(1);
    console.log("✅ Task completions:", completions);
    
    // Owner verifies completion
    console.log("\n✅ Owner verifying completion...");
    const balanceBefore = await hre.ethers.provider.getBalance(user1.address);
    console.log("User1 balance before:", hre.ethers.formatEther(balanceBefore), "ETH");
    
    const tx3 = await taskBounty.connect(owner).verifyCompletion(1, user1.address);
    await tx3.wait();
    console.log("✅ Verification transaction confirmed");
    
    const balanceAfter = await hre.ethers.provider.getBalance(user1.address);
    console.log("User1 balance after:", hre.ethers.formatEther(balanceAfter), "ETH");
    
    const balanceDiff = balanceAfter - balanceBefore;
    console.log("Balance increase:", hre.ethers.formatEther(balanceDiff), "ETH");
    
    // Check if task is now completed
    const updatedTask = await taskBounty.tasks(1);
    console.log("Task completed status:", updatedTask.completed);
    
    console.log("\n⭐ Testing ReputationSystem Contract...");
    
    // Add completed task to reputation
    const tx4 = await reputationSystem.addCompletedTask(user1.address);
    await tx4.wait();
    console.log("✅ Reputation update confirmed");
    
    // Check reputation
    const reputation = await reputationSystem.getReputation(user1.address);
    const completedTasks = await reputationSystem.getCompletedTasks(user1.address);
    
    console.log("✅ User1 Reputation:");
    console.log("   Score:", reputation.toString());
    console.log("   Completed Tasks:", completedTasks.toString());
    
    console.log("\n🎉 All tests completed successfully!");
    console.log("💰 Contract Summary:");
    console.log("   TaskBounty:", taskBountyAddress);
    console.log("   ReputationSystem:", reputationSystemAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("❌ Test failed:", error);
        process.exit(1);
    });
