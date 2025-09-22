const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {
    
  const FactoryContract = await hre.ethers.getContractFactory("MultiSigFactory");
  const factoryContract  = await FactoryContract.deploy("0x650ADf6aA8b4e5764273E7f2001B2A3f792859a5");

  console.log("Storage contract deployed to:", factoryContract.target);

  // const array = ["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37"]

  //     const addresses = "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37";
  //     const functionName = "transfer";

  //     console.log(factoryContract.target)

  //     await factoryContract.createMultiSig(array, 1);
  //     console.log("here");

  //     const getAddress = await factoryContract.getAllDeployedMultiSigs();
  //     console.log("here");

  //     const deployer = await factoryContract.getDeployer(getAddress[0]);

  //     console.log(deployer);

  //     // console.log(encodedData)
  //     console.log(getAddress[0], array[1]);
  //     // const value = await multiSigContract.connect(getAddress[0]).fundWallet({value: ethers.parseEther("3")});
  //     // console.log(value);
  //     const address = await factoryContract.submitTransaction(getAddress[0], array[0], ethers.parseEther("2"), "Pay to Dave");

  //     const getProposals = await factoryContract.getAllProposals(getAddress[0]);
  //     console.log(getProposals);
  //     await factoryContract.confirmTransaction(getAddress[0], 0);
  //     const wallets = await factoryContract.getDeployersWallets();
  //     console.log(wallets)
  //     const proposalExecuted1 = await factoryContract.getAllProposals(getAddress[0]);
  //     console.log(proposalExecuted1)
  //     // await factoryContract.executeTransaction(getAddress[0], 0);
  //     // const proposalExecuted = await factoryContract.getAllProposals(getAddress[0]);
  //     // console.log(proposalExecuted)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: PoolFactory contract deployed to: 0x5Ac64F5DA22B25559C7D7522b4B2BB7e2012F382