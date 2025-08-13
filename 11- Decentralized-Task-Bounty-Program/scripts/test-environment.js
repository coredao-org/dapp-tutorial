const fs = require('fs');
require('dotenv').config();

async function main() {
    console.log("🔧 Testing Environment Configuration...\n");

    // Check if .env file exists
    if (!fs.existsSync('.env')) {
        console.log("❌ .env file not found!");
        console.log("   Run: cp .env.example .env");
        console.log("   Then edit .env with your actual values\n");
        console.log("📋 Quick Setup Guide:");
        console.log("1. Get Alchemy API key: https://dashboard.alchemy.com/");
        console.log("2. Create Ethereum app → Choose Sepolia network");
        console.log("3. Copy HTTP URL to SEPOLIA_RPC_URL in .env");
        console.log("4. Export MetaMask private key (remove 0x prefix)");
        console.log("5. Add private key to PRIVATE_KEY in .env\n");
        return;
    }
    console.log("✅ .env file exists");

    // Check environment variables
    const checks = [
        {
            name: 'PRIVATE_KEY',
            value: process.env.PRIVATE_KEY,
            validate: (val) => {
                if (!val) return "Not set";
                if (val.includes('your_') || val.includes('here')) return "Still using placeholder value";
                if (val.startsWith('0x')) return "Remove 0x prefix from private key";
                if (val.length !== 64) return `Should be 64 characters, got ${val.length}`;
                return null;
            }
        },
        {
            name: 'SEPOLIA_RPC_URL', 
            value: process.env.SEPOLIA_RPC_URL,
            validate: (val) => {
                if (!val) return "Not set";
                if (val.includes('YOUR_') || val.includes('your_')) return "Still using placeholder value";
                if (!val.startsWith('https://')) return "Should start with https://";
                if (!val.includes('sepolia')) return "Should be a Sepolia RPC URL";
                return null;
            }
        }
    ];

    let hasErrors = false;
    
    for (const check of checks) {
        const error = check.validate(check.value);
        if (error) {
            console.log(`❌ ${check.name}: ${error}`);
            if (check.value) console.log(`   Current value: ${check.value.substring(0, 20)}...`);
            hasErrors = true;
        } else {
            console.log(`✅ ${check.name}: Valid`);
        }
    }

    if (hasErrors) {
        console.log("\n📋 To fix these issues:");
        console.log("\n🔑 For PRIVATE_KEY:");
        console.log("1. Open MetaMask → Click account name → Account Details");
        console.log("2. Click 'Export Private Key' → Enter password");
        console.log("3. Copy the key WITHOUT the 0x prefix");
        console.log("4. Paste into .env file: PRIVATE_KEY=abc123def456...");
        
        console.log("\n🌐 For SEPOLIA_RPC_URL:");
        console.log("1. Visit: https://dashboard.alchemy.com/");
        console.log("2. Sign up (free) → Create new app");
        console.log("3. Choose 'Ethereum' → 'Sepolia' network");
        console.log("4. Copy the HTTP URL from your app dashboard");
        console.log("5. Paste into .env: SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY");
        
        console.log("\n💰 Don't forget testnet ETH:");
        console.log("Visit: https://sepoliafaucet.com/");
        
        console.log("\n⚠️  Important: Never share your private key or commit .env to git!");
        return;
    }

    console.log("\n✅ All environment variables look good!");
    console.log("🎯 You can now deploy with: npm run deploy:sepolia");
    
    // Additional checks if we can load Hardhat
    try {
        const hre = require("hardhat");
        console.log("\n� Testing network connectivity...");
        
        // Test local hardhat network
        const [signer] = await hre.ethers.getSigners();
        const address = await signer.getAddress();
        console.log(`✅ Local network connection: ${address.substring(0, 10)}...`);
        
    } catch (error) {
        console.log("⚠️  Could not test network connectivity (this is okay for now)");
        console.log("   Error:", error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("❌ Environment test failed:", error.message);
        process.exit(1);
    });
