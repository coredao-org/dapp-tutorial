const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ERC20 = await ethers.getContractFactory("Token");
  const usdt = await ERC20.deploy("usdt", "USDT");
  const usdc = await ERC20.deploy("usdc", "USDC");

  const fee = 10;

  const Swap = await ethers.getContractFactory("Swap");
  const swap = await Swap.deploy(fee);

  console.log("Contracts deployed:");
  console.log("Swap Contract:", await swap.getAddress());
  console.log("usdt Token:", await usdt.getAddress());
  console.log("usdc Token:", await usdc.getAddress());

  const swapContractAddr = await swap.getAddress();

  await usdt.approve(swapContractAddr, ethers.parseEther("100"));
  await usdt.transfer(swapContractAddr, ethers.parseEther("100"));
  await usdc.approve(swapContractAddr, ethers.parseEther("100"));
  await usdc.transfer(swapContractAddr, ethers.parseEther("100"));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
