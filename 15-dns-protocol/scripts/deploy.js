const hre = require("hardhat");

async function main() {

    const fee = ethers.parseUnits("0.01", 18);

    
  const ENSRegistry = await hre.ethers.getContractFactory("ENSRegistry");
  const ensContract  = await ENSRegistry.deploy();

  console.log("Storage contract deployed to:", ensContract.target);



  const RegistrarContract = await hre.ethers.getContractFactory("Registrar");
  const registrarContract  = await RegistrarContract.deploy(ensContract.target, fee);

  console.log("Storage contract deployed to:", registrarContract.target);


//   const bytes322 = ethers.encodeBytes32String("David.core");
//   const bytes3 = ethers.encodeBytes32String("alice.core");
//   const decode = ethers.decodeBytes32String(bytes322);

//   console.log(bytes3)
//   console.log(decode)

//   await registrarContract.register(bytes322);
//   await registrarContract.register(bytes3);

//   const specificRecord = await ensContract.getSpecificRecord(bytes322);
//   console.log(specificRecord);

//   const allRecords = await ensContract.getAllRecords();
//   console.log(allRecords);






}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// Telos: Support contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382