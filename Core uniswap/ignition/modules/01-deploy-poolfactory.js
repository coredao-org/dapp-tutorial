// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("PoolFactoryModule", (m) => {
  const deployer =  m.getAccount(0);

  const poolFactory = m.contract("PoolFactory", [deployer]);

  console.log(poolFactory.target);

  return { poolFactory };
});

//address: 0x62e3D5215677776e5830975B707DEFC6F39C76C2
