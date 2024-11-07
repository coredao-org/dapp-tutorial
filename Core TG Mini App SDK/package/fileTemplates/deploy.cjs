const { ethers } = require("hardhat");

async function main() {
  // const vehicleData = await ethers.deployContract("VehicleData");
  // console.log("VehicleData deployed to: ", await vehicleData.getAddress());

  // const vecFT = await ethers.deployContract("VecFT");
  // console.log("VecFT deployed to: ", await vecFT.getAddress());
  //
  const contract = await ethers.getContractFactory("Template");
  const deployedContract = await contract.deploy();
  console.log("Contract deployed to: ", deployedContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
