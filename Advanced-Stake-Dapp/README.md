# 💰 Staking DApp – Reward-Based Token Staking

A fast, responsive, and developer-friendly staking DApp that allows users to stake tokens, view real-time rewards, and interact with the smart contract using a clean UI.

> 🧠 **GitHub Repository:** [https://github.com/coredao-org/dapp-tutorial](https://github.com/coredao-org/dapp-tutorial)

---

## ✨ Features

* 🖥️ **Modern UI:** Sleek, clean, and intuitive interface built for seamless user interaction.
* ⛏️ **Staking System:** Users can stake and withdraw tokens with clear feedback and updates.
* 💹 **Real-Time Rewards:** Users see their rewards update instantly without needing to reload or resync.
* 🔄 **Claim Rewards:** Reward tokens can be claimed any time, with sufficient pre-minted supply in the contract.
* 🧪 **Test Tokens:** Built-in faucet mechanism to withdraw test tokens for quick experimentation by running a mint.js script.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
cd dapp-tutorial/Adavanced-Stake-Dapp
````

### 2. Setup Environment

Create a `.env` file in the root directory and add your private key:

```bash
PRIVATE_KEY=your_private_key_here
```

> **Note:** Never commit your `.env` file to version control. Keep your private key safe.

### 3. Install Dependencies

Install smart contract dependencies:

```bash
npm install
```

Then navigate to the frontend directory and install frontend dependencies:

```bash
cd ./Frontend
npm install
```

### 4. Run the DApp Locally

```bash
npm run dev
```

> The DApp will be available at `http://localhost:3000`. You can now:
>
> * Stake tokens
> * View your staked balance
> * Claim your real-time rewards
> * Withdraw test tokens for tinkering

---

## 🪙 Reward Token Minting (Optional)

If the **reward token balance** in the contract gets depleted and you can't claim rewards anymore, simply run the `mint.js` script to mint more tokens to the staking contract.

### 📜 Steps to Mint:

1. Open the `scripts/mint.js` file
2. Ensure the contract address and amount are correct
3. Run the script:

```bash
npx hardhat run scripts/mint.js --network yourNetwork
```

Replace `yourNetwork` with the appropriate Hardhat network (e.g., `localhost`, `coreTestnet`).

---

## 👛 View Your Reward Tokens in Wallet

To view your reward token balance in your wallet, you need to **import the token manually**:

* **Token Contract Address:** `0xe11B22597Fbc161e2B8502D5D101C989a62dD288`
* **Token Symbol:** `RTN`
* **Decimals:** `18`

> After importing, you will be able to see your claimed rewards directly in your wallet.

---

## 🗂️ Project Structure

```bash
├── contracts/           # Smart contracts (RewardToken, NativeStaking)
├── scripts/
│   └── mint.js          # Script to mint additional reward tokens
├── Frontend             # Frontend Next.js app
├── hardhat.config.js    # Hardhat config for deployment
├── .env                 # Store your private key here
└── README.md
```

---

## 📘 Tech Stack

* **Next.js** – Frontend framework
* **Tailwind CSS** – Responsive design
* **Hardhat** – Smart contract development
* **Ethers.js** – Blockchain interaction
* **Solidity** – Smart contract language
* **OpenZeppelin** – Secure ERC20 implementation

---

## 🤝 Contributions

Feel free to fork the repo, tweak the staking logic, improve the UI, or submit a PR!

---

## 📞 Contact

For questions or collaborations, feel free to reach out at **[davidkenechukwu591@gmail.com](mailto:davidkenechukwu591@gmail.com)**
