const hre = require("hardhat");

async function main() {
  await hre.run('compile'); // Ensure the contracts are compiled

  const Guestbook = await hre.ethers.getContractFactory("Guestbook");
  const guestbook = await Guestbook.deploy();

  await guestbook.deployed();
  console.log("Guestbook contract deployed to:", guestbook.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});