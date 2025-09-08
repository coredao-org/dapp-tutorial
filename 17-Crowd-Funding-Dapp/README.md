# CrowdFunding DApp

A decentralized crowdfunding platform built with modern web3 technologies, enabling users to create funding campaigns with multiple tiers and interact with them seamlessly.

## 🚀 Features

- **Campaign Creation**: Create crowdfunding campaigns with custom goals and descriptions
- **Tier System**: Multi-tier funding structure for flexible contribution options
- **Web3 Integration**: Full blockchain integration with wallet connectivity
- **Responsive Design**: Modern UI with dark/light theme support
- **Real-time Updates**: Live campaign data and funding progress
- **Decentralized**: Powered by smart contracts on Core Testnet 2

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Web3**: thirdweb v5 SDK
- **Blockchain**: Core Testnet 2 (tCORE2)
- **Smart Contracts**: Solidity with Factory Pattern

## 📋 Prerequisites

Before you begin, ensure you have the following installed and configured:

### Required Software
- **Node.js** 18.0.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Blockchain Setup
- **MetaMask** wallet extension
- **Core Testnet 2** network added to your wallet
- **Test tokens** (tCORE2) for transactions

### Third-party Services
- **Thirdweb Account** with project setup
- **Thirdweb Client ID** and **Secret Key**

## 🌐 Network Configuration

Add Core Testnet 2 to your wallet with these parameters:

```
Network Name: Core Testnet 2
Chain ID: 1114
RPC URL: https://rpc.test2.btcs.network
Currency Symbol: tCORE2
Block Explorer: https://scan.test2.btcs.network
```

## 🔧 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd crowdfunding-dapp
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Thirdweb Configuration

#### 3.1 Create Thirdweb Account
1. Visit [thirdweb.com](https://thirdweb.com)
2. Sign up for a new account
3. Verify your email address

#### 3.2 Create New Project
1. Navigate to the dashboard
2. Click "Create Project"
3. Choose your project settings
4. Save your **Client ID** and **Secret Key**

![Thirdweb Project Creation](https://github.com/user-attachments/assets/709a2b90-4fa5-47f9-91de-acb71e08c7ca)

![Client ID and Secret](https://github.com/user-attachments/assets/9cdbf85f-83a8-41c7-817d-1636341a9055)

### Step 4: Smart Contract Deployment

#### 4.1 Deploy Factory Contract
```bash
npx thirdweb deploy -k <your-secret-key>
```
- Select **CrowdFundingFactory** when prompted
- Complete the deployment process
- Save the deployed contract address

![Factory Deployment](https://github.com/user-attachments/assets/21ef6e95-760b-4fa0-bbc2-25bd93365cfb)

![Deployment Success](https://github.com/user-attachments/assets/dc01fbd7-57a0-4a44-bfde-3428480478ee)

#### 4.2 Publish Campaign Contract
```bash
npx thirdweb publish -k <your-secret-key>
```
- Select **CrowdFunding** when prompted
- Enter your Factory contract address when requested

![Contract Publishing](https://github.com/user-attachments/assets/c266b2f9-a6d1-4f41-aa6c-cf13c04b93ef)

![Factory Address Input](https://github.com/user-attachments/assets/f8ff0163-8e17-4f8a-b158-11680e1664d3)

### Step 5: Environment Configuration

Create a `.env` file in the project root:

```env
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id_here
```

**Important**: Restart your development server after modifying the `.env` file.

### Step 6: Contract Address Configuration

Update the factory contract address in `src/constants/contract.tsx`:

```typescript
export const CROWDFUNDING_FACTORY = "0xYourDeployedFactoryAddress";
```

## 🚀 Running the Application

### Development Server
```bash
npm run dev
```
Access the application at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── client.ts                    # Thirdweb client configuration
├── chains.ts                    # Custom Core Testnet 2 chain config
├── constants/
│   └── contract.tsx            # Contract addresses and ABIs
├── components/
│   ├── CreateCampaign.tsx      # Campaign creation interface
│   ├── Campaign.tsx            # Campaign listing component
│   ├── TierCard.tsx            # Funding tier display
│   └── Navbar.tsx              # Navigation with wallet connect
└── Campaign/
    └── [campaignAddress]/
        └── Page.tsx            # Individual campaign details
```

### Key Components Explained

#### `client.ts`
Initializes the thirdweb client using your environment variables.

#### `chains.ts`
Defines the Core Testnet 2 blockchain configuration for the application.

#### `CreateCampaign.tsx`
Handles the campaign creation workflow, interfacing with the factory contract's `createCampaign` function.

#### `Campaign.tsx`
Displays a list of all campaigns with essential information and navigation.

#### `TierCard.tsx`
Shows individual funding tiers with options to contribute or remove funds.

#### `Navbar.tsx`
Provides wallet connectivity and theme switching functionality.

## 🔗 Smart Contract Integration

### Factory Contract
- **Purpose**: Deploys and manages campaign contracts
- **Key Functions**: 
  - `createCampaign()`: Creates new campaign instances
  - `getCampaigns()`: Retrieves all campaign addresses

### Campaign Contract
- **Purpose**: Manages individual campaign logic
- **Key Functions**:
  - `fund()`: Accept contributions to tiers
  - `withdraw()`: Campaign owner withdrawals
  - `getTiers()`: Retrieve funding tiers

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes for user preference
- **Real-time Data**: Live updates of campaign progress and blockchain state
- **Wallet Integration**: Seamless MetaMask connection and transaction handling
- **Loading States**: User-friendly feedback during blockchain operations

## 🔍 Troubleshooting

### Common Issues

**Environment Variables Not Loading**
- Ensure your `.env` file is in the project root
- Restart the development server after changes
- Verify variable names start with `VITE_`

**Contract Interaction Failures**
- Confirm you're connected to Core Testnet 2
- Check your wallet has sufficient tCORE2 tokens
- Verify contract addresses are correctly configured

**MetaMask Connection Issues**
- Clear browser cache and cookies
- Reset MetaMask account if necessary
- Ensure Core Testnet 2 is properly added to your wallet

### Getting Help

If you encounter issues:
1. Check the browser console for detailed error messages
2. Verify all prerequisites are properly installed
3. Ensure your wallet is connected to the correct network
4. Review the transaction history on the Core Testnet 2 explorer

## 🔗 Useful Links

- [Core Testnet 2 Explorer](https://scan.test2.btcs.network)
- [Thirdweb Documentation](https://portal.thirdweb.com)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Note**: This is a testnet application. Do not use real funds or deploy to mainnet without proper security audits and testing.
