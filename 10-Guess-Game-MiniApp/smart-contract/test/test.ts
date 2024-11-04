import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import hre from "hardhat";

describe("GuessTheNumber", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployGuessContract() {


    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const GuessToken = await ethers.getContractFactory("GuessToken");
    const guessToken = await GuessToken.deploy();

    const GuessContract = await hre.ethers.getContractFactory("GuessTheNumber");
    const guessContract = await GuessContract.deploy(guessToken.target);


    return { guessContract, owner, otherAccount,guessToken };
  }

  describe("Deployment", function () {
    it("it should generate a number between 1-10", async function () {
      const { guessContract,otherAccount } = await loadFixture(deployGuessContract);
     const tx = await guessContract.generateRandomNumber();
     tx.wait();


     const randomValue  = await guessContract.getRandomNumber();

     console.log( "random value:::", randomValue)

     expect(randomValue).to.be.gte(1);
     expect(randomValue).to.be.lte(10);
    });

    it("should generate different random numbers", async function () {
      const { guessContract,otherAccount } = await loadFixture(deployGuessContract);

      const randomValues:bigint[] = [];
      for (let i = 0; i < 5; i++) {
          // Generate a random number
          const tx = await guessContract.generateRandomNumber();
          await tx.wait();  // Wait for the transaction to be mined

          // Retrieve the random number after the transaction is mined
          const randomValue:bigint = await guessContract.getRandomNumber();
          randomValues.push(randomValue);
      }

      // Print the values for visual verification (optional)
      console.log("Random numbers generated:", randomValues);

      // Optional: Check that not all numbers are the same (pseudo-randomness)
      // const allEqual = randomValues.every((val) => val.eq(randomValues[0])); // using `eq` for BigNumber comparison
      // expect(allEqual).to.be.false;
  });

  it("should claim tokens", async function () {
    const { guessContract,otherAccount ,guessToken} = await loadFixture(deployGuessContract);
    const amount  = ethers.parseEther("10000");
    guessToken.transfer(guessContract.target, amount);

    const tx = await guessContract.claimTokens();
    await tx.wait();
  });

 


  });


});
