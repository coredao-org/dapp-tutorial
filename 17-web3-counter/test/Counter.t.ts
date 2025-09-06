import { expect } from "chai";
import { ethers } from "hardhat";


describe("Counter", function () {
it("increments and decrements", async function () {
const Counter = await ethers.getContractFactory("Counter");
const counter = await Counter.deploy();
await counter.waitForDeployment();


expect(await counter.current()).to.equal(0);


const tx1 = await counter.increment();
await tx1.wait();
expect(await counter.current()).to.equal(1);


const tx2 = await counter.decrement();
await tx2.wait();
expect(await counter.current()).to.equal(0);
});
});