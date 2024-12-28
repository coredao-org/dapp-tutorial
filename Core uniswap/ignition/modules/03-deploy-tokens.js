// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("CherryTokenModule", (m) => {
  const deployer =  m.getAccount(0);

  const cherryToken = m.contract("CherryToken", []);

  console.log(cherryToken.target);

  return { cherryToken };
});

// // module.exports = buildModule("AppleTokenModule", (m) => {
// //     const deployer =  m.getAccount(0);
  
// //     const appleToken = m.contract("AppleToken", []);
  
// //     console.log(appleToken.target);
  
// //     return { appleToken };
//   });


  // module.exports = buildModule("WrappedEduTokenMod", (m) => {
  //   const deployer =  m.getAccount(0);
  
  //   const wrappedEduToken = m.contract("WrappedEduToken", []);
  
  //   console.log(wrappedEduToken.target);
  
  //   return { wrappedEduToken };
  // });


// apple address: 0x650ADf6aA8b4e5764273E7f2001B2A3f792859a5
// cherry address: 0x1b5619EB448B3C5F1E44CcD4Ef5e1813A53E98fF
