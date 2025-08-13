const hre = require("hardhat");

async function main() {
    console.log("Starting deployment...");
    console.log("Network:", hre.network.name);
    
    // Get the deployer account
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);
    console.log("Account balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "ETH");

    // Deploy the TaskBounty contract
    console.log("\nDeploying TaskBounty contract...");
    const TaskBounty = await hre.ethers.getContractFactory("TaskBounty");
    const taskBounty = await TaskBounty.deploy();
    await taskBounty.waitForDeployment();
    const taskBountyAddress = await taskBounty.getAddress();
    console.log("TaskBounty deployed to:", taskBountyAddress);

    // Deploy the ReputationSystem contract
    console.log("\nDeploying ReputationSystem contract...");
    const ReputationSystem = await hre.ethers.getContractFactory("ReputationSystem");
    const reputationSystem = await ReputationSystem.deploy();
    await reputationSystem.waitForDeployment();
    const reputationSystemAddress = await reputationSystem.getAddress();
    console.log("ReputationSystem deployed to:", reputationSystemAddress);

    // Summary
    console.log("\n🎉 Deployment completed successfully!");
    console.log("📋 Contract Addresses:");
    console.log("   TaskBounty:", taskBountyAddress);
    console.log("   ReputationSystem:", reputationSystemAddress);
    
    // Save deployment addresses to a file for frontend use
    const fs = require('fs');
    const deploymentInfo = {
        network: hre.network.name,
        taskBounty: taskBountyAddress,
        reputationSystem: reputationSystemAddress,
        deployedAt: new Date().toISOString()
    };
    
    fs.writeFileSync(
        'deployment-addresses.json', 
        JSON.stringify(deploymentInfo, null, 2)
    );
    console.log("💾 Addresses saved to deployment-addresses.json");
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });