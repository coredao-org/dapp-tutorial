const hre = require("hardhat");

async function main() {
  console.log("🔑 Hardhat Local Network Accounts:");
  console.log("=====================================");
  
  const accounts = await hre.ethers.getSigners();
  
  for (let i = 0; i < Math.min(accounts.length, 5); i++) {
    const account = accounts[i];
    const balance = await hre.ethers.provider.getBalance(account.address);
    
    console.log(`Account #${i}:`);
    console.log(`  Address: ${account.address}`);
    console.log(`  Balance: ${hre.ethers.formatEther(balance)} ETH`);
    console.log('');
  }
  
  console.log("📝 Default Hardhat Private Keys (for testing only!):");
  console.log("====================================================");
  
  // These are the default Hardhat accounts - NEVER use in production!
  const defaultKeys = [
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
    "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
    "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a"
  ];
  
  defaultKeys.forEach((key, i) => {
    console.log(`Account #${i}: ${key}`);
  });
  
  console.log("\n⚠️  WARNING: These are test keys only! Never use them with real funds!");
}

main().catch(console.error);
