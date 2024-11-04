// scripts/deploy.js

import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const GuessTheNumber = await ethers.getContractFactory("GuessTheNumber");

  const token = "0xa17d389C1a6D8F906c0b8484f510edbd8fD5cD0D"
  
  // Deploy the contract (no constructor parameters needed)
  const tx = await GuessTheNumber.deploy(token);

  // Wait for the deployment to finish
  const  guessTheNumber = await tx.waitForDeployment();

  console.log("GuessTheNumber contract deployed to:", guessTheNumber.target);
}

// Main deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
