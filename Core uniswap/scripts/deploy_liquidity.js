const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {
    
  const liquidityContract = await hre.ethers.getContractFactory("LiquidityProvider");
  const liquidity  = await liquidityContract.deploy("0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382", "0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382");

  console.log("Storage contract deployed to:", liquidity.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: Liquidity contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382