# 💰 Staking DApp – Reward-Based Token Staking

A fast, responsive, and developer-friendly staking DApp that allows users to stake tokens, view real-time rewards, and interact with the smart contract using a clean UI.


> 🧠 **GitHub Repository:** [https://github.com/adamsdavee/dapp-tutorial/tree/staking](https://github.com/adamsdavee/dapp-tutorial/tree/staking)

---

## ✨ Features

* 🖥️ **Modern UI:** Sleek, clean, and intuitive interface built for seamless user interaction.
* ⛏️ **Staking System:** Users can stake and withdraw tokens with clear feedback and updates.
* 💹 **Real-Time Rewards:** Users see their rewards update instantly without needing to reload or resync.
* 🔄 **Claim Rewards:** Reward tokens can be claimed any time, with sufficient pre-minted supply in the contract.
* 📁 **Modular Code:** `staker/` directory contains reusable logic to integrate the staking system into your own apps.
* 🧪 **Test Tokens:** Built-in faucet mechanism to withdraw test tokens for quick experimentation.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adamsdavee/dapp-tutorial.git
cd dapp-tutorial
git checkout staking
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the DApp Locally

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

## 🗂️ Project Structure

```bash
├── contracts/           # Smart contracts (RewardToken, NativeStaking)
├── scripts/
│   └── mint.js          # Script to mint additional reward tokens
├── Frontend
├── hardhat.config.js    # Hardhat config for deployment
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

For questions or collaborations, feel free to reach out on \[davidkenechukwu591@gmial.com].