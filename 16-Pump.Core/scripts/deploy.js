const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {

    const FEE = ethers.parseUnits("0.01", 18);
    
  const FactoryMeme = await hre.ethers.getContractFactory("MemeFactory");
  const factoryMeme  = await FactoryMeme.deploy(FEE);

  console.log("MemeFactory deployed to:", factoryMeme.target);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: PoolFactory contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382