const hre = require("hardhat");

async function main() {

  const GuessTokenContract = await hre.ethers.getContractFactory("GuessToken");
  const guessTokenContract = await GuessTokenContract.deploy();
    
  const GuessGameContract = await hre.ethers.getContractFactory("GuessTheNumber");
  const guessGameContract  = await GuessGameContract.deploy(guessTokenContract.target, ethers.parseEther("2"));


  await guessTokenContract.mint(guessGameContract.target)

  const balance = await guessTokenContract.balanceOf(guessGameContract.target);

  console.log(balance);

  console.log("Guess Token contract deployed to:", guessTokenContract.target);

  console.log("Guess game contract deployed to:", guessGameContract.target);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// Telos: Support contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382