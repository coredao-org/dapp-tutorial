const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {

    const FEE = ethers.parseUnits("0.01", 18);
    
  const LendingDAIToken = await hre.ethers.getContractFactory("LendingDAIToken");
  const LendingDAI  = await LendingDAIToken.deploy();

  console.log("Lending Dai Token deployed to:", LendingDAI.target);

  const LendingUSDToken = await hre.ethers.getContractFactory("LendingUSDToken");
  const LendingUSD  = await LendingUSDToken.deploy();

  console.log("Lending USDT oken deployed to:", LendingUSD.target);

  const LendingUSDCToken = await hre.ethers.getContractFactory("LendingUSDCToken");
  const LendingUSDC  = await LendingUSDCToken.deploy();

  console.log("Lending USDC Token deployed to:", LendingUSDC.target);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: CoreLend contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382