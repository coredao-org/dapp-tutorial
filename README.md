# DApp Tutorial for Core Blockchain


This tutorial provides simple steps to build a DApp to store and retrieve data on Core blockchain. The technology stack used in this tutorial includes MetaMask, Node.js, Ethers.js and React.js.


## Steps to Run

1. Clone the Dapp-Tutorial repository

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
```

2. Go into project directory

```bash
cd dapp-tutorial
```

3. Install all the dependencies (node modules)

```bash
npm install
```

4. Serve with hot reload at <http://localhost:5173>.

```bash
npm run dev
```


## Code Snippet

1. Connect to Metamask

```javascript
  const checkWalletIsConnected = async () => {
    const { ethereum } = window

    if (!ethereum) {
      console.log('Make sure you have Metamask installed!')
      return
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      const account = accounts[0]
      console.log('Found an authorized account: ', account)
      setCurrentAccount(account)
    } else {
      console.log('No authorized account found')
    }
  }
```



2. Write to smart contract

```javascript
  const store = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const storageContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        )

        console.log('Write to contract')
        const tx = await storageContract.store(storeNumber)

        console.log('Wait for the transaction to be confirmed')
        await tx.wait()

        console.log(
          `Transaction confirmed: https://scan.test.btcs.network/tx/${tx.hash}`
        )
      } else {
        console.log('Ethereum object does not exist')
      }
    } catch (err) {
      console.log(err)
    }
  }
```



3. Read from smart contract

```javascript
  const retrieve = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const storageContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        )

        console.log('Read from contract')
        const res = await storageContract.retrieve()
        setRetrievedNumber(res.toString())
      } else {
        console.log('Ethereum object does not exist')
      }
    } catch (err) {
      console.log(err)
    }
  }
```
