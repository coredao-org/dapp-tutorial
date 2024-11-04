import { ethers } from "hardhat";

//0xa17d389C1a6D8F906c0b8484f510edbd8fD5cD0D

async function main() {
  // Get the contract factory
  const Token = await ethers.getContractFactory("GuessToken");
  
  // Deploy the contract (no constructor parameters needed)
  const tx = await Token.deploy();

  // Wait for the deployment to finish
  const  token = await tx.waitForDeployment();

  console.log("GuessTheNumber contract deployed to:", token.target);
}

// Main deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });