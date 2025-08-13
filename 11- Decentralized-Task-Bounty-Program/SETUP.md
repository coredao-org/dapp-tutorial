# Setup Guide for Decentralized Task Bounty Platform

## Quick Start

### 1. Install Dependencies
```bash
# Clean install to avoid dependency conflicts
rm -rf node_modules package-lock.json
npm install
```

### 2. Set Up Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit the .env file with your actual values
nano .env  # or use your preferred editor
```

### 3. Get Your Required Keys

#### A. MetaMask Private Key
1. Open MetaMask browser extension
2. Click on account name → "Account Details"
3. Click "Export Private Key"
4. Enter your password
5. Copy the key (remove '0x' prefix)
6. Add to `.env` file: `PRIVATE_KEY=your_key_here`

#### B. Alchemy API Key (Free)
1. Visit: https://dashboard.alchemy.com/
2. Sign up and create a new app
3. Choose: Ethereum → Sepolia network  
4. Copy the HTTP URL
5. Add to `.env` file: `SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY`

#### C. Etherscan API Key (Optional)
1. Visit: https://etherscan.io/apis
2. Sign up and create API key
3. Add to `.env` file: `ETHERSCAN_API_KEY=your_key_here`

### 4. Get Test ETH
- Visit Sepolia Faucet: https://sepoliafaucet.com/
- Enter your wallet address
- Request test ETH

### 5. Test Your Environment (IMPORTANT!)
```bash
# Test your configuration before deployment
npm run test:env
```

This will check:
- ✅ .env file exists and has correct values
- 🌐 Network connectivity to Sepolia
- 💰 Account balance
- 🔑 Private key validity

**Fix any issues before proceeding to deployment!**

### 6. Compile and Deploy
```bash
# Compile contracts
npm run compile

# Deploy to local network
npm run node  # (in separate terminal)
npm run deploy

# Deploy to Sepolia testnet
npm run deploy:sepolia

# Deploy to Core testnet  
npm run deploy:core
```

**Note:** The project now uses **ethers v6**, which has different API methods than v5. The deployment script has been updated accordingly. Deployed contract addresses are automatically saved to `deployment-addresses.json` for frontend integration.

### 7. Run Tests
```bash
# Run basic tests
npm test

# Run comprehensive contract interaction test
npm run test:interaction
```

### 8. Start Frontend
```bash
npm start
```

## Important Updates

### Ethers v6 Migration
This project has been updated to use **ethers v6** (from v5). Key changes:

#### Deployment Scripts
- ❌ Old (v5): `await contract.deployed()`
- ✅ New (v6): `await contract.waitForDeployment()`
- ❌ Old (v5): `contract.address`  
- ✅ New (v6): `await contract.getAddress()`

#### Contract Interactions
- ❌ Old (v5): `ethers.utils.parseEther()`
- ✅ New (v6): `ethers.parseEther()`
- ❌ Old (v5): `ethers.utils.formatEther()`
- ✅ New (v6): `ethers.formatEther()`

If you're updating existing frontend code, make sure to use the new v6 syntax.

## Network Information

### Sepolia Testnet
- Chain ID: 11155111
- RPC: Uses your Alchemy/Infura URL
- Faucet: https://sepoliafaucet.com/

### Core Testnet
- Chain ID: 1115
- RPC: https://rpc.test.btcs.network
- Faucet: https://scan.test.btcs.network/faucet

### Core Mainnet
- Chain ID: 1116  
- RPC: https://rpc.coredao.org

## Troubleshooting

### Common Installation Issues

#### NPM Dependency Conflicts
If you see errors about peer dependencies or conflicting ethers versions:

```bash
# Clean slate approach (recommended)
rm -rf node_modules package-lock.json
npm install

# Alternative: Use npm's legacy peer deps flag
npm install --legacy-peer-deps
```

#### Security Vulnerabilities
The project may show security warnings due to older dependencies in Truffle. These are generally not critical for development/testnet use:

```bash
# Review vulnerabilities
npm audit

# Fix non-breaking issues
npm audit fix

# Force fix (may cause breaking changes - use with caution)
npm audit fix --force
```

### Runtime Issues

#### "Must be authenticated!" error
This error occurs when deploying to testnets without proper RPC configuration:

```bash
ProviderError: Must be authenticated!
```

**Solution:**
1. **Create `.env` file**: `cp .env.example .env`
2. **Get Alchemy API Key** (Free):
   - Visit: https://dashboard.alchemy.com/
   - Sign up → Create new app → Choose Ethereum + Sepolia
   - Copy the HTTP URL (looks like: `https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY`)
   - Add to `.env`: `SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY`
3. **Get MetaMask Private Key**:
   - MetaMask → Account Details → Export Private Key
   - **Remove the '0x' prefix** from the key
   - Add to `.env`: `PRIVATE_KEY=your_key_without_0x_prefix`
4. **Test connection**: `npm run compile` (should work without network)

#### "insufficient funds" error
- Get test ETH from faucets listed above
- Check that you're using the correct network

#### "invalid private key" error  
- Check your private key in `.env` (no 0x prefix)
- Make sure `.env` file exists and is properly formatted

#### "network error" error
- Check your RPC URL in `.env`
- Verify your API key is correct

### Development Issues

#### Compilation Errors
```bash
# Clean and recompile
npx hardhat clean
npx hardhat compile
```

#### Truffle vs Hardhat Conflicts
If you experience conflicting behavior:
- Use separate terminal sessions for each framework
- Consider standardizing on one framework (Hardhat recommended)
- Ensure both configs point to the same networks

## Security Notes
- Never commit `.env` file to version control
- Never share your private key
- Use testnet for development
- Keep your API keys secret
