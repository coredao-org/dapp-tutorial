import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import storage from '../contract/Storage.json';

// Contract information
const contractAddress = '0x4E3F8ac2D3714f029bCa72854ECcd6bB72D78728';
const abi = storage.abi;

// Constants
const CORESCAN_BASE_URL = 'https://scan.test.btcs.network/address/';

const App: React.FC = () => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [storeNumber, setStoreNumber] = useState<string>('');
  const [retrievedNumber, setRetrievedNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const checkWalletIsConnected = async () => {
    const { ethereum } = window as any;

    if (!ethereum) {
      alert('Please install Metamask!');
      return;
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      setCurrentAccount(accounts[0]);
      console.log('Found an authorized account:', accounts[0]);
    } else {
      console.log('No authorized account found');
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window as any;

    if (!ethereum) {
      alert('Please install Metamask!');
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
      console.log('Connected account:', accounts[0]);
    } catch (err) {
      console.error('Error connecting wallet:', err);
      alert('Connection failed. Please try again.');
    }
  };

  const store = async () => {
    setLoading(true);
    setError('');

    try {
      const { ethereum } = window as any;
      if (!ethereum) throw new Error('Ethereum object does not exist');

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const storageContract = new ethers.Contract(contractAddress, abi, signer);

      console.log('Writing to contract...');
      const tx = await storageContract.store(storeNumber);
      console.log('Waiting for transaction confirmation...');
      await tx.wait();

      console.log(`Transaction confirmed: https://scan.test.btcs.network/tx/${tx.hash}`);
    } catch (err) {
      console.error('Error storing number:', err);
      setError('Failed to store number. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const retrieve = async () => {
    setLoading(true);
    setError('');

    try {
      const { ethereum } = window as any;
      if (!ethereum) throw new Error('Ethereum object does not exist');

      const provider = new ethers.providers.Web3Provider(ethereum);
      const storageContract = new ethers.Contract(contractAddress, abi, provider);

      console.log('Reading from contract...');
      const res = await storageContract.retrieve();
      setRetrievedNumber(res.toString());
    } catch (err) {
      console.error('Error retrieving number:', err);
      setError('Failed to retrieve number. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderConnectWalletButton = () => (
    <button onClick={connectWalletHandler} className="btn-primary w-40 rounded mt-10">
      Connect Wallet
    </button>
  );

  const renderStorageButtons = () => (
    <div>
      <p className="text-xl text-gray-400">
        Click "write" or "read" to call the smart contract
      </p>
      <div className="mt-8 inline-block text-left">
        <div className="text-left">
          <button onClick={store} className="btn-primary w-40 rounded-r-none" disabled={loading}>
            {loading ? 'Writing...' : 'Write number'}
          </button>
          <input
            value={storeNumber}
            onChange={(e) => setStoreNumber(e.target.value)}
            className="rounded-l-none border-2 border-solid border-orange-500 py-1 px-2 h-10"
            disabled={loading}
            placeholder="Enter number"
          />
        </div>
        <div>
          <button onClick={retrieve} className="btn-primary w-40 mt-8 rounded-r-none" disabled={loading}>
            {loading ? 'Reading...' : 'Read number'}
          </button>
          <input
            placeholder="Retrieved number"
            disabled
            value={retrievedNumber}
            className="text-center rounded-l-none border-2 border-solid border-gray-400 py-1 px-2 h-10"
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-8 text-center">
        <span className="text-mm">Contract address:</span>
        <a
          target="_blank"
          className="ml-2 text-mm text-orange-400 hover:text-orange-600"
          href={`${CORESCAN_BASE_URL}${contractAddress}`}
          rel="noreferrer"
        >
          {contractAddress}
        </a>
      </div>
    </div>
  );

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl py-16 px-4">
        <div className="text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center px-2">
                <img className="w-12 mx-1" src="src/public/logo.png" alt="Logo" />
                <p className="my-3 mx-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Core
                </p>
              </div>
              <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                DApp Starter
              </p>
            </div>
          </div>
          {currentAccount ? renderStorageButtons() : renderConnectWalletButton()}
        </div>
      </div>
      <footer className="mt-8 text-center">
        <div>
          <span className="text-mm">Fund your account:</span>
          <a
            target="_blank"
            className="ml-2 text-mm text-orange-400 hover:text-orange-600"
            href="https://scan.test.btcs.network/faucet"
            rel="noreferrer"
          >
            tCORE faucet
          </a>
        </div>
        <div>
          <span className="text-mm">How to connect</span>
          <a
            target="_blank"
            className="ml-2 text-mm text-orange-400 hover:text-orange-600"
            href="https://docs.coredao.org/developer/develop-on-core/using-core-testnet/connect-to-core-testnet"
            rel="noreferrer"
          >
            MetaMask to Core Testnet
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
