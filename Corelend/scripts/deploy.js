const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {

    const FEE = ethers.parseUnits("0.01", 18);
    
  const Corelend = await hre.ethers.getContractFactory("CoreLend");
  const corelend  = await Corelend.deploy();

  console.log("CoreLend deployed to:", corelend.target);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: CoreLend contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382