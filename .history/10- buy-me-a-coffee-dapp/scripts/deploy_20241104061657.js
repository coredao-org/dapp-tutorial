const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const CoffeeDonation = await ethers.getContractFactory("CoffeeDonation");
    const coffeeDonation = await CoffeeDonation.deploy();

    await coffeeDonation.deployed();
    console.log("CoffeeDonation contract deployed to:", coffeeDonation.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
