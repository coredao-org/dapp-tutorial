const hre = require("hardhat");

async function main() {
  const rewardTokenAddress = "0xe11B22597Fbc161e2B8502D5D101C989a62dD288"; // deployed contract
  const recipient = "0x652Ca0319df1b8ebe9220B4894DC38Da5C9575d3"; // replace with actual recipient
  const amount = hre.ethers.parseUnits("9000000", 18); // mint 1000 tokens (adjust if needed)

  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const rewardToken = await RewardToken.attach(rewardTokenAddress);

  const tx = await rewardToken.mint(recipient, amount);
  await tx.wait();
  const balance = await rewardToken.balanceOf(recipient);
  console.log(balance);

  console.log(`✅ Minted ${amount} RTN to ${recipient}`);
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exitCode = 1;
});
