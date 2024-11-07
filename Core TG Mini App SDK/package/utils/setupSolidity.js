import fs from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
export default async function setupSolidity(targetDir) {
    console.log("Setting up Solidity contracts...");
    try {
        const packageJsonPath = path.join(targetDir, "package.json");
        try {
            const packageJson = await fs.readJson(packageJsonPath);
            packageJson.dependencies = {
                ...packageJson.dependencies,
                "@nomicfoundation/hardhat-toolbox": "^3.0.0",
                hardhat: "^2.17.0",
            };
            await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
        }
        catch (error) {
            console.log(error);
        }
        console.log("Setup Hardhat configuration for solidity complete");
    }
    catch (error) {
        console.error("Failed to install dependencies:", error);
        process.exit(1);
    }
    await fs.mkdir(path.join(targetDir, "contracts"));
    await fs.writeFile(path.join(targetDir, `contracts/template.sol`), "");
    const solidityTemplatePath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/template.sol");
    const solidityPath = path.join(targetDir, `contracts/template.sol`);
    await fs.copy(solidityTemplatePath, solidityPath);
    const hardhatConfigPath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/hardhatConfig.cts");
    fs.writeFile(path.join(targetDir, "hardhat.config.cts"), "");
    await fs.copy(hardhatConfigPath, path.join(targetDir, "hardhat.config.cts"));
    await fs.mkdir(path.join(targetDir, "scripts"));
    await fs.writeFile(path.join(targetDir, "scripts/deploy.cjs"), "");
    const deployTsPath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/deploy.cjs");
    await fs.copy(deployTsPath, path.join(targetDir, "scripts/deploy.cjs"));
    const packageJsonPath = path.join(targetDir, "package.json");
    try {
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.scripts = {
            ...packageJson.scripts,
            "compile-contracts": "npx hardhat compile",
            "deploy-contracts": "npx hardhat run ./scripts/deploy.cjs --network core_testnet",
            "deploy-app": "vercel --prod",
            "bot-server": "cd bot && npm run start",
            "bot-ngrok": "cd bot && ngrok http 3000",
        };
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }
    catch (error) {
        console.log(error);
    }
}
