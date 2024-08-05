# Simple Hello World dApp on Core
In this tutorial, you'll learn how to build a simple decentralized application (dApp) using the Core blockchain TestNet. The focus will be on creating a "Hello World" dApp that interacts with a smart contract. This dApp will allow users to store, retrieve, and update a message on the blockchain. By following the steps in this guide, you will gain hands-on experience with MetaMask wallet integration, smart contract development, and front-end interaction using the Ethers.js library.

## What Are We Building
In this tutorial, we'll develop a simple Hello World decentralized application (dApp) that stores a message in a smart contract deployed on the Core blockchain TestNet. The dApp also has the functionality to retrieve and display the stored message.

## Learning Takeaways
This tutorial will help you gain knowledge on the following learning points:

* MetaMask Wallet connectivity to Core Testnet;
* Smart contract development and deployment on Core Testnet;
* Front-end integration with the smart contract using Ethers.js library;
* Read data from a smart contract;
* Write data to a smart contract;

## Software Prerequisites
* [Git](https://git-scm.com/) v2.44.0
* [Node.js](https://nodejs.org/en) v20.11.1
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v10.2.4
* [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) v2.22.7
* [MetaMask Web Wallet Extension](https://metamask.io/download/)

## Setting up the development environment

1. Create a new directory for the project and navigate into it

```bash
mkdir hello-world-dapp
cd hello-world-dapp
```
2. Install Hardhat

```bash
npm init --yes
npm install --save-dev hardhat
```
3. Initialize Hardhat project by running the following command

```bash
npx hardhat init
```
![dapp-tutorial-1](./assets/hardhat-init.png)


4. Once this project is initialized, you'll find the following project structure:

```bash
dapp-tutorial.
|   .gitignore
|   hardhat-config.js 
|   package-lock.json
|   package.json
|   README.md
| 
+---contracts 
|       Lock.sol
|       
+---ignition 
|   \---modules
|           Lock.js
|                 
+---node_modules
|  
+---test 
|       Lock.js       
|       
```

5. Install and configure MetaMask Chrome Extension to use with Core Testnet. Refer [here](https://docs.coredao.org/docs/Dev-Guide/core-testnet-wallet-config) for a detailed guide.

6. Create a secret.json file in the root folder and store the private key of your MetaMask wallet in it. Refer [here](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) for details on how to get MetaMask account's private key.

```json
{"PrivateKey":"you private key, do not leak this file, do keep it absolutely safe"}
```

> Do not forget to add this file to the `.gitignore` file in the root folder of your project so that you don't accidentally check your private keys/secret phrases into a public repository. Make sure you keep this file in an absolutely safe place!

7. Copy the following into your `hardhat.config.js` file

```js
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const { PrivateKey } = require('./secret.json');
module.exports = {
  defaultNetwork: 'core_testnet',

  networks: {
     hardhat: {
     },
     core_testnet: {
        url: 'https://rpc.test.btcs.network',
        accounts: [PrivateKey],
        chainId: 1115,
     }
  },
  solidity: {
     compilers: [
       {
          version: '0.8.26',
          settings: {
             evmVersion: 'paris',
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
     ],
  },
  paths: {
     sources: './contracts',
     cache: './cache',
     artifacts: './artifacts',
  },
  mocha: {
     timeout: 60000,
  },
};
```

## Writing HelloWorld Smart Contract

1. Navigate to the `contracts` folder in the root directory of your project.
2. Delete the `Lock.sol` file; create a new file `HelloWorld.sol` and paste the following contents into it.

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract HelloWorld {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}

```
### Explanation
The `HelloWorld` Solidity contract stores a message in a public string variable. It initializes this message through the constructor when the contract is deployed. The `setMessage` function allows anyone to update the stored message. The `public` keyword makes the `message` variable readable by anyone.

#### State Variable
* `string public message`: Public string variable to store and read a message.
#### Constructor
* `constructor(string memory _message) { message = _message; }`: Initializes the message state variable with a value provided during deployment.
#### Function
* `function setMessage(string memory _message) public { message = _message; }`: Allows updating the message state variable.

## Compiling Smart Contract

1. To compile the `HelloWorld` smart contract defined in the `HelloWorld.sol`, from the root directory run the following command

```bash
npx hardhat compile
```

## Testing HelloWorld Smart Contracts

1. Before deploying your smart contract on the Core blockchain, it is best adviced to first run a series of tests making sure that the smart contract is working as desired. 

2. Inside the `test` folder, delete the `Lock.js` file, create a new file `HelloWorld.js` and update it with the following:

```javascript
const { expect } = require("chai");

describe("HelloWorld contract", function () {
  let HelloWorld;
  let helloWorld;
  let owner;

  beforeEach(async function () {
    HelloWorld = await ethers.getContractFactory("HelloWorld");
    [owner] = await ethers.getSigners();
    helloWorld = await HelloWorld.deploy("Hello, world!");
    await helloWorld.waitForDeployment(); 
  });

  it("Should return the initial message", async function () {
    expect(await helloWorld.message()).to.equal("Hello, world!");
  });

  it("Should update the message", async function () {
    const tx =await helloWorld.setMessage("Hello, Hardhat!");
    await tx.wait(); // Wait for the transaction to be mined
    expect(await helloWorld.message()).to.equal("Hello, Hardhat!");
  });
});
```

### Explanation
This test script is designed to validate the behavior of the HelloWorld smart contract. In the setup phase (beforeEach), it deploys a new instance of the contract with the initial message "Hello, world!" and waits for the deployment to complete.

The first test, "Should return the initial message," checks that the contract correctly returns the initial message stored during deployment. It ensures that the message is set to "Hello, world!" as expected.

The second test, "Should update the message," updates the message to "Hello, Hardhat!" and then verifies that the message has been updated successfully by checking its new value. This ensures that the setMessage function works correctly and the contract's state is updated as intended.

This test script checks the functionality of the HelloWorld contract:

* **Setup:** It deploys the HelloWorld contract with the initial message "Hello, world!" before each test.
* **Test Initial Message:** It verifies that the contract's initial message is correctly set to "Hello, world!".
* **Test Update Message:** It updates the message to "Hello, Hardhat!" and confirms that the change is successfully reflected.

Overall, these tests confirm that the contract's functionality for setting and retrieving messages operates correctly.

3. Run the test scripts using the command `npx hardhat test` 

![running-hardhat-test-scripts](./assets/hardhat-test.png)

## Deploying HelloWorld Smart Contract 

1. Create a `scripts` folder in the root directory of your project. Inside this folder, create a file `deploy.js`; paste the following script into it.

```javascript
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello, World");

  console.log("HelloWorld Contract Address:", await helloWorld.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```
3. Make sure your MetaMask wallet has tCORE test tokens for the Core Testnet. Refer [here](https://docs.coredao.org/docs/Dev-Guide/core-faucet) for details on how to get tCORE tokens from Core Faucet. 

4. Run the following command from the root directory of your project, to deploy your smart contract on the Core Chain.

```bash
npx hardhat run scripts/deploy.js
```

If succesfully deployed, you will get the following output

![hardhat-deploy-result](./assets/hardhat-deploy.png)

5. Make sure to save the Address of HelloWorld Contract at which is deployed, as obtained above, this will be used for interacting with smart contract from the dApp's frontend.

🎉 Congratulations! You have successfully learned how to create, compile, and deploy a smart contract on the Core Chain Testnet using the Hardhat. 

## Interacting with Smart Contract through Frontend

⚡️ Let's create a frontend interface for interacting with the `HelloWorld` smart contract.

### Set Up React Project
1. Run the following commands to create a react project and install the required depencendy of `ethers.js` to communicate with the HelloWorld smart contract.

```bash
npx create-react-app frontend
cd frontend
npm install ethers
``` 
### Getting HelloWorld Contract ABI
* Copy the `HelloWorld.json` file from `artifacts/contracts/HelloWorld.sol/` to the `frontend/src/Contract-ABI` directory.

### Create the React Components

* Inside `src`, create a file named `HelloWorld.js`. Ensure you replace placeholders like `YOUR_CONTRACT_ADDRESS` with actual values from your deployment.
```javascript
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import './HelloWorld.css'; // Import the CSS file

// Import ABI from JSON file
import HelloWorldABI from './Contract-ABI/HelloWorld.json';

// Import the logo image
import logo from './core-dao-logo.png'; // Adjust the path as needed

// Replace with your contract's address
const contractAddress = "0xBF46BAA6210Ae6c9050F5453B996070209f69830";

function HelloWorld() {
    const [message, setMessage] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [showMessage, setShowMessage] = useState(false); // State to control message visibility

    useEffect(() => {
        async function init() {
            if (!window.ethereum) {
                toast.error("No crypto wallet found. Please install MetaMask.");
                return;
            }

            try {
                // Prompt user to connect MetaMask
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(contractAddress, HelloWorldABI.abi, signer);
                setProvider(provider);
                setContract(contract);
            } catch (error) {
                toast.error("Failed to connect to MetaMask. Please try again.");
                console.error("Error initializing MetaMask:", error);
            }
        }

        init();
    }, []);

    const updateMessage = async () => {
        if (!contract) return;
        try {
            const tx = await contract.setMessage(newMessage);
            await tx.wait();
            setNewMessage(''); // Clear the input field after updating
            toast.success("Message updated successfully!");
        } catch (error) {
            toast.error("Failed to update message. Please try again.");
            console.error("Error updating message:", error);
        }
    };

    const retrieveMessage = async () => {
        if (!contract) return;
        try {
            const currentMessage = await contract.message();
            setMessage(currentMessage);
            setShowMessage(true); // Show the message after retrieval
            toast.success("Message retrieved successfully!");
        } catch (error) {
            toast.error("Failed to retrieve message. Please try again.");
            console.error("Error retrieving message:", error);
        }
    };

    return (
        <div className="container">
            <ToastContainer /> {/* Add ToastContainer to display notifications */}
            <img src={logo} alt="Core DAO Logo" className="logo" />
            {showMessage && (
                <div className="message-display">{message}</div>
            )}
            <button className="retrieve-button" onClick={retrieveMessage}>Retrieve Current Message</button>
            <br/>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="input-field"
                placeholder="Enter new message"
            />
            <button className="update-button" onClick={updateMessage}>Set New Message</button>
        </div>
    );
}

export default HelloWorld;
```

### Create HelloWorld.css

* Inside `src`, create a file named `HelloWorld.css`

```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #2e2e2e;
    color: #e0e0e0;
    padding: 20px;
    box-sizing: border-box;
}

.logo {
    width: 200px;
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.retrieve-button, .update-button {
    background-color: #ff920f;
    color: white;
    border: none;
    padding: 14px 28px;
    margin: 10px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.retrieve-button:hover, .update-button:hover {
    background-color: #e67e22;
    transform: scale(1.05);
}

.message-display {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #ffd54f;
}

.input-field {
    padding: 14px;
    border: 1px solid #555;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    margin-bottom: 20px;
    font-size: 18px;
    background-color: #424242;
    color: #fff;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.retrieve-button {
    margin-top: 20px;
}

.input-field:focus {
    background-color: #616161;
    border-color: #ff920f;
    outline: none;
}
```

### Update App.js 

* Replace the contents of App.js with the following

```jsx
import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HelloWorld />
            </header>
        </div>
    );
}

export default App;
```

## Running Your Application
* Start the React Development Server using the command `npm run start`

```bash
npm start
Your application should now be accessible at http://localhost:3000.
```

## Interact with the dApp

Open your React app in the browser. You should be able to retrieve and set messages using your deployed contract.
![frontend](./assets/frontend-ui.png)

🎉 Congratulations! You've just interacted with your newly-deployed contract using your dApp's front end! You can build on the codebase by deploying and interacting with different contracts, and by adding new UI components to the website for your users.
