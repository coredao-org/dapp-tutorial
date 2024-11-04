// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";



const LockModule = buildModule("GuessTheNumber", (m) => {
   const guessContract = m.contract("GuessTheNumber" );
   

  return { guessContract };
});

export default LockModule;



