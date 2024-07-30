import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MyNFTAbi from "./abis/MyNFTAbi.json";
import core_logo from "./assets/core-logo.png";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState();
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

  const contractAddress = "0x984eE96FE316006533c0BB78c97e3A02E41c7759";
  const abi = MyNFTAbi.abi;
  const nftImage =
    "https://raw.githubusercontent.com/GM-11/NFT_Minting_Tutorial/master/assets/nft.png";
  const nftUri =
    "https://raw.githubusercontent.com/GM-11/NFT_Minting_Tutorial/master/assets/metadata.json";

  async function connectWallet() {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(ethereum);
      const [account] = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const signer = await provider.getSigner();

      setProvider(provider);
      setSigner(signer);
      setWalletAddress(account);
    } catch (error) {
      console.log("Error fetching network:", error);
    }
  }
  useEffect(() => {
    connectWallet();
  }, []);

  async function mintNFT() {
    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.safeMint(walletAddress, nftUri);
      await tx.wait();
    } catch (error) {
      console.log("Error minting NFT:", error);
    }
  }

  return (
    <main>
      <img src={core_logo} alt="akldfj" width={500}/>
      <h1>NFT Minting Dapp</h1>

      {walletAddress ? (
        <section className="nft-section">
          <p>
            Connected Address: <strong>{walletAddress}</strong>
          </p>

          <img src={nftImage} alt="" />
          <br />
          <button onClick={mintNFT}>Mint this NFT</button>
        </section>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </main>
  );
}

export default App;
