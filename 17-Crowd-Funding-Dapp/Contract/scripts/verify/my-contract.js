const hre = require("hardhat");

// to run the script:
//      npx hardhat run scripts/verify/my-contract.js --network zkSyncSepoliaTestnet

async function main() {
  const contractAddress = "<YOUR CONTRACT ADDRESS>"; // TODO: contract address
  const constructorArgs = []; // TODO: add constructor params here, if any

  console.log("Verifying contract.");
  await verify(
    contractAddress,
    "contracts/Contract.sol:MyContract",
    constructorArgs
  );
}

async function verify(address, contract, args) {
  try {
    return await hre.run("verify:verify", {
      address: address,
      contract: contract,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(address, args, e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
