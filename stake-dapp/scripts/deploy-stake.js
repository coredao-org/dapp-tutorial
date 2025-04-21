const hre = require("hardhat");

async function main() {

    const rate = ethers.parseUnits("0.001", 18);

    
  const NativeStaking = await hre.ethers.getContractFactory("NativeStaking");
  const stakingContract  = await NativeStaking.deploy(rate);

  console.log("Storage contract deployed to:", stakingContract.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// Telos: Support contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382