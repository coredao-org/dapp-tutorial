// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

const FEE = ethers.parseUnits("0.01", 18);

module.exports = buildModule("MemeFactoryModule", (m) => {

  const fee = m.getParameter("fee", FEE);

  const memeFactory = m.contract("MemeFactory", [fee]);

  return { memeFactory };
});
