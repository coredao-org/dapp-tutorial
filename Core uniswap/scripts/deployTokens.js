const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {
    
  // const cherryTokenFactory = await hre.ethers.getContractFactory("CherryToken");
  // const storage = await cherryTokenFactory.deploy();

  // console.log("Storage contract deployed to:", storage.target);

  // const appleTokenFactory = await hre.ethers.getContractFactory("AppleToken");
  // const appleToken = await appleTokenFactory.deploy();

  // console.log("Storage contract deployed to:", appleToken.target);

  const wrappedTokenFactory = await hre.ethers.getContractFactory("WrappedCoreToken");
  const wrappedToken = await wrappedTokenFactory.deploy();

  console.log("Storage contract deployed to:", wrappedToken.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: 
// CherryToken contract deployed to: 0xc04229AC77a2A66c52Cc9cB09dCEfE9e89d47bFa
// AppleToken contract deployed to: 0x650ADf6aA8b4e5764273E7f2001B2A3f792859a5
// WrappedCoreToken contract deployed to: 0xAA4CA018D432b66c65c85467FEb08036B860362d 