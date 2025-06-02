const hre = require("hardhat");

async function main() {

  const Guestbook = await hre.ethers.getContractFactory("Guestbook");
  const guestbook = await Guestbook.deploy();


  console.log("Guestbook contract deployed to:", guestbook.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});