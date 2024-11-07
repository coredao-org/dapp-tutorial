# Core TG Mini App SDK

**`create-tma-core`** is an NPM command-line utility that helps you quickly generate boilerplate code for developing a Telegram Mini App on the Core blockchain.

### Prerequisites

Before getting started, ensure you have the following software and tools installed:

- [**Git**](https://git-scm.com/downloads): Version 2.43.0 or higher
- [**Node.js**](https://nodejs.org/): Version 22.9.0 or higher
- [**NPM**](https://www.npmjs.com/): Version 10.8.3 or higher (bundled with Node.js)
- [**Hardhat**](https://hardhat.org/getting-started/#installation): Version 2.22.7
- [**MetaMask**](https://metamask.io/): Web wallet extension with some Core testnet tokens to interact with Core blockchain
  [Get core testnet tokens](https://scan.test.btcs.network/faucet)
- [**Telegram App**](https://telegram.org/): Required to test your Telegram Mini App
- [**VS Code**](https://code.visualstudio.com/): Code editor with extensions for Solidity and Hardhat
- [**Vercel CLI**](https://vercel.com/docs/cli): Command-line interface for deploying TMA to Vercel
- [**Ngrok**](https://ngrok.com/): A proxy to test our bot server on telegram.

### Installation & Setup

To generate a new project, run the following command in your terminal:

```bash
npx create-tma-core
```

You will be prompted to:

1. Enter your project name.
2. Choose whether or not to use TailwindCSS.

Once the process completes, a new project template will be created. Open the project in your preferred code editor to start development.

### Project Structure

The generated project includes:

- A React app built with Vite.
- A `contracts` directory containing all Solidity files.
- A `hardhat.config.ts` file with configurations for deploying contracts on the Core Testnet.

To configure the project, create a `.env` file in the root directory and add your Core wallet's private key.

### Registering Your Bot on Telegram

To use your Telegram Mini App, you'll need to register a bot on Telegram:

1. **Open the Telegram app** and search for **BotFather**.
2. Start a chat with BotFather and use the command `/newbot`.
3. Follow the instructions to name your bot and create a unique username for it.
4. After registration, BotFather will provide you with an API token. Keep this token secure; you'll need it to configure your bot in the project.

### Compiling and Deploying Smart Contracts

To compile the smart contracts, execute the following command:

```bash
npm run compile-contracts
```

To deploy the contracts to the Core Testnet, use:

```bash
npm run deploy-contracts
```

After deployment, you'll find the contract ABIs in the `artifacts` folder. Ensure you securely store the addresses of the deployed contracts for future reference.

### Testing the Telegram Mini App

To test your Telegram Mini App, follow these steps:

1. **Obtain BOT_TOKEN**: Create and register your bot using the [BotFather](https://t.me/@BotFather) to receive a BOT_TOKEN.

2. **Configure Environment**: Add the BOT_TOKEN to the `.env` file in your project's root directory:

   ```
   BOT_TOKEN=your_bot_token_here
   ```

3. **Run Bot Server**: Execute the following commands to start the bot server and create a secure tunnel:

   ```bash
   npm run bot-server
   ```

   ```bash
   npm run bot-ngrok
   ```

   This process utilizes [ngrok](https://ngrok.com/) to create an HTTPS tunnel to your localhost, enabling Telegram to communicate with your bot.

4. **Deploy Mini App**: Deploy your React.js project to Vercel using:

   ```bash
   npm run deploy-app
   ```

5. **Update Bot Configuration**: In the `bot/index.ts` file, replace `<VERCEL_URL>` with your Vercel deployment URL:

   ```javascript
   bot.start((ctx) => {
     ctx.reply("Open the mini app", {
       reply_markup: {
         inline_keyboard: [
           [
             {
               text: "Open Mini App",
               web_app: { url: "https://your-vercel-url.vercel.app" },
             },
           ],
         ],
       },
     });
   });
   ```

6. **Launch the Bot**: Start your bot to see the Mini App in action within Telegram.

By following these steps, you'll successfully compile and deploy your smart contracts, and have your Telegram Mini App up and running for testing.
