const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployDefi() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log("Heyyyyyyy");

    // const Lock = await ethers.getContractFactory("Lock");
    // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    const array = ["0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37"]

    const multiSig = await ethers.getContractFactory("MultiSig");
    const multiSigContract = await multiSig.deploy(array, 2);

    const multiSigFactory = await ethers.getContractFactory("MultiSigFactory");
    const factoryContract = await multiSigFactory.deploy("0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37");


    return { factoryContract, multiSigContract };
  }

  describe("Deployment", function () {
    it("Checks if it creates pair", async function () {
      const { factoryContract } = await loadFixture(deployDefi);

      const array = ["0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37"]

      const pair = await factoryContract.createMultiSig(array, 2);
      const pairs = await factoryContract.createMultiSig(array, 2);
      const getAddress = await factoryContract.getAllDeployedMultiSigs();
      const address = await factoryContract.getOwners(getAddress[0]);
      console.log(address);


    });



    it("Checks if it creates pair", async function () {
      const { multiSigContract } = await loadFixture(deployDefi);

      // const getAddress = await multisigContract.getAllDeployedMultiSigs();
      const address = await multiSigContract.submitProposal("0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", 20000000," 0x736f6d6520737472696e67");
      console.log(address);


    });

    it.only("Checks if it creates pair", async function () {
      const { factoryContract, multiSigContract } = await loadFixture(deployDefi);
      const array = ["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37", "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37"]

      const addresses = "0xF5c87bFCE1999d3E48f0407E43F0Db10394A4B37";
      const functionName = "transfer";

      const pair = await factoryContract.createMultiSig(array, 1);
      const pairs = await factoryContract.createMultiSig( array, 1);

      const getAddress = await factoryContract.getAllDeployedMultiSigs();

      const deployer = await factoryContract.getDeployer(getAddress[0]);

      console.log(deployer);

      // console.log(encodedData)
      console.log(getAddress[0], array[1]);
      // const value = await multiSigContract.connect(getAddress[0]).fundWallet({value: ethers.parseEther("3")});
      // console.log(value);
      const address = await factoryContract.submitTransaction(getAddress[0], array[0], ethers.parseEther("2"), "Pay to Dave");

      const getProposals = await factoryContract.getAllProposals(getAddress[0]);
      console.log(getProposals);
      await factoryContract.confirmTransaction(getAddress[0], 0);
      const proposalExecuted1 = await factoryContract.getAllProposals(getAddress[0]);
      console.log(proposalExecuted1)
      await factoryContract.executeTransaction(getAddress[0], 0);
      const proposalExecuted = await factoryContract.getAllProposals(getAddress[0]);
      console.log(proposalExecuted)


    });

    

    // it("checks if its adds liquidity", async function () {
    //   const { factoryContract, cherryContract, appleContract, owner, liquidityContract} = await loadFixture(deployDefi);
    //   console.log("heyy");
    //   await cherryContract.mint(owner.address, ethers.parseEther("10"));
    //   await appleContract.mint(owner.address, ethers.parseEther("10"));
    //   await cherryContract.approve(liquidityContract.target, ethers.parseEther("10"));
    //   await appleContract.approve(liquidityContract.target, ethers.parseEther("10"));
    //   console.log(await appleContract.balanceOf(owner.address));
    //   console.log(await cherryContract.balanceOf(owner.address));
    //   const pair = await liquidityContract.addLiquidity(
    //     cherryContract.target,
    //     appleContract.target,
    //     ethers.parseEther("1.5"),
    //     ethers.parseEther("1"),
    //     ethers.parseEther(".9"),
    //     ethers.parseEther("1.3")
    //   );
    //   console.log(pair);
    // });
    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.target)).to.equal(
    //     lockedAmount
    //   );
    // });


  });
});
