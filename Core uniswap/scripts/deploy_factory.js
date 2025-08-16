const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {
    
  const poolFactoryContract = await hre.ethers.getContractFactory("PoolFactory");
  const poolFactory  = await poolFactoryContract.deploy("0x650ADf6aA8b4e5764273E7f2001B2A3f792859a5");

  console.log("Storage contract deployed to:", poolFactory.target);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: PoolFactory contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382