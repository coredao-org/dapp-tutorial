// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LiquidityProviderModule", (m) => {
  const deployer =  m.getAccount(0);

  const liquidityProvider = m.contract("LiquidityProvider", ["0x62e3D5215677776e5830975B707DEFC6F39C76C2", deployer]);

  console.log(liquidityProvider.target);

  return {liquidityProvider };
});

//address: 0xb7e2979167e46A03Cf44171c349945D7041B6C2D