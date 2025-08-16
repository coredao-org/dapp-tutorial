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
    console.log(owner);
    console.log("Hiiiiii")

    // const Lock = await ethers.getContractFactory("Lock");
    // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    const cherryToken = await ethers.getContractFactory("CherryToken");
    const cherryContract = await cherryToken.deploy();

    const appleToken = await ethers.getContractFactory("AppleToken");
    const appleContract = await appleToken.deploy();

    const factory = await ethers.getContractFactory("PoolFactory");
    const factoryContract = await factory.deploy(owner.address);

    const liquidity= await ethers.getContractFactory("LiquidityProvider");
    const liquidityContract = await liquidity.deploy(factoryContract.target, owner);

    return { cherryContract, owner, appleContract, factoryContract, liquidityContract };
  }

  describe("Deployment", function () {
    it("Checks if it creates pair", async function () {
      const { factoryContract, cherryContract, appleContract } = await loadFixture(deployDefi);

      const pair = await factoryContract.createPool(cherryContract.target, appleContract.target);
      // console.log(pair.target);
      const pairAddress = await factoryContract.getTokenPairs(
        cherryContract.target,
        appleContract.target
      );
      // console.log(pairAddress);
      expect(pairAddress).to.not.equal(ethers.ZeroAddress);
    });
    

    it("checks if its adds liquidity", async function () {
      const { factoryContract, cherryContract, appleContract, owner, liquidityContract} = await loadFixture(deployDefi);
      console.log("heyy");
      await cherryContract.mint(owner.address, ethers.parseEther("10"));
      await appleContract.mint(owner.address, ethers.parseEther("10"));
      await cherryContract.approve(liquidityContract.target, ethers.parseEther("10"));
      await appleContract.approve(liquidityContract.target, ethers.parseEther("10"));
      console.log(await appleContract.balanceOf(owner.address));
      console.log(await cherryContract.balanceOf(owner.address));
      const pair = await liquidityContract.addLiquidity(
        cherryContract.target,
        appleContract.target,
        ethers.parseEther("1.5"),
        ethers.parseEther("1"),
        ethers.parseEther(".9"),
        ethers.parseEther("1.3")
      );
      console.log(pair);
    });
  //   it("Should receive and store the funds to lock", async function () {
  //     const { lock, lockedAmount } = await loadFixture(
  //       deployOneYearLockFixture
  //     );

  //     expect(await ethers.provider.getBalance(lock.target)).to.equal(
  //       lockedAmount
  //     );
  //   });

  //   it("Should fail if the unlockTime is not in the future", async function () {
  //     // We don't use the fixture here because we want a different deployment
  //     const latestTime = await time.latest();
  //     const Lock = await ethers.getContractFactory("Lock");
  //     await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
  //       "Unlock time should be in the future"
  //     );
  //   });
  // });

  // describe("Withdrawals", function () {
  //   describe("Validations", function () {
  //     it("Should revert with the right error if called too soon", async function () {
  //       const { lock } = await loadFixture(deployOneYearLockFixture);

  //       await expect(lock.withdraw()).to.be.revertedWith(
  //         "You can't withdraw yet"
  //       );
  //     });

  //     it("Should revert with the right error if called from another account", async function () {
  //       const { lock, unlockTime, otherAccount } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // We can increase the time in Hardhat Network
  //       await time.increaseTo(unlockTime);

  //       // We use lock.connect() to send a transaction from another account
  //       await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
  //         "You aren't the owner"
  //       );
  //     });

  //     it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
  //       const { lock, unlockTime } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // Transactions are sent using the first signer by default
  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).not.to.be.reverted;
  //     });
  //   });

  //   describe("Events", function () {
  //     it("Should emit an event on withdrawals", async function () {
  //       const { lock, unlockTime, lockedAmount } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw())
  //         .to.emit(lock, "Withdrawal")
  //         .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
  //     });
  //   });

  //   describe("Transfers", function () {
  //     it("Should transfer the funds to the owner", async function () {
  //       const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).to.changeEtherBalances(
  //         [owner, lock],
  //         [lockedAmount, -lockedAmount]
  //       );
  //     });
  //   });
  });
});
