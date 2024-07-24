async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Replace with the actual Pyth contract address for CoreDAO testnet
    const pythContractAddress = "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729";  // Replace with actual address

    const PythFeedBoilerplate = await ethers.getContractFactory("PythFeedBoilerplate");
    const pythFeedBoilerplate = await PythFeedBoilerplate.deploy(pythContractAddress);

    console.log("PythFeedBoilerplate deployed to:", pythFeedBoilerplate.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
