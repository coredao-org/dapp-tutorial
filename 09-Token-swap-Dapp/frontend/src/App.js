import { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import "./App.css";
import TokenABI from "./contracts/Token.json";
import SwapABI from "./contracts/Swap.json";
import coreLogo from "./assets/core-logo.png";

// Replace these addresses with your actual token and swap contract addresses
const tokenAddresses = {
  CORE: "0x0000000000000000000000000000000000000000",
  USDT: "0xB8D44C863a7eF981E704803323d7F8d5c29D59d5",
  USDC: "0xb871FA65c8026DFc6aeFF9A0Ea7dfF132634D769",
};

const swapContractAddress = "0xC4396b030a6db1F3DEB4B33eA0EB6013d25a6582"; // Add your swap contract address here

const tokens = ["CORE", "USDT", "USDC"];
const feePercentage = 0.5;

function App() {
  const [inputToken, setInputToken] = useState("CORE");
  const [outputToken, setOutputToken] = useState("USDT");
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("0");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [network, setNetwork] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);

  // Check network
  const checkNetwork = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Ethereum object does not exist");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const { chainId } = await provider.getNetwork();

      if (chainId !== 1115) {
        alert("Please connect to the Core Testnet");
      } else {
        setNetwork("Core Testnet");
      }
    } catch (error) {
      console.error("Error fetching network:", error);
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) return alert("Please install MetaMask!");

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setCurrentAccount(accounts[0]);
  };

  // Calculate the output amount based on the input and fee
  const calculateOutputAmount = useCallback(() => {
    if (!inputAmount) {
      setOutputAmount("0");
      return;
    }

    const input = parseFloat(inputAmount);
    const fee = (input * feePercentage) / 100;
    const finalOutput = input - fee;

    setOutputAmount(finalOutput.toFixed(6));
  }, [inputAmount]);

  const getOutputTokenOptions = () => {
    const tokenPairs = {
      USDT: ["USDC"],
      USDC: ["USDT"],
    };

    return (
      tokenPairs[inputToken] || tokens.filter((token) => token !== inputToken)
    );
  };

  useEffect(() => {
    checkNetwork();
    calculateOutputAmount();
  }, [inputToken, outputToken, inputAmount, calculateOutputAmount]);

  const handleInputChange = (value) => {
    if (/^\d*\.?\d*$/.test(value)) setInputAmount(value);
  };

  const handleTokenSwap = async () => {
    if (!currentAccount) return alert("Please connect your wallet.");

    try {
      const { ethereum } = window;
      if (!ethereum) return alert("Ethereum object doesn't exist!");

      setIsSwapping(true);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const parsedInputAmount = ethers.utils.parseUnits(inputAmount, 18);

      const swapContract = new ethers.Contract(
        swapContractAddress,
        SwapABI,
        signer
      );

      if (inputToken === "CORE") {
        // If input token is CORE (native token swap)
        const txSwapNative = await swapContract.swapNativeForToken(
          tokenAddresses[outputToken],
          { value: parsedInputAmount }
        );
        await txSwapNative.wait();
      } else {
        // Approve tokens for swap contract
        const inputTokenAddress = tokenAddresses[inputToken];
        const tokenContract = new ethers.Contract(
          inputTokenAddress,
          TokenABI,
          signer
        );

        const txApprove = await tokenContract.approve(
          swapContractAddress,
          parsedInputAmount
        );
        await txApprove.wait();

        // Perform the swap
        const txSwap = await swapContract.swapTokens(
          inputTokenAddress,
          tokenAddresses[outputToken],
          parsedInputAmount
        );

        await txSwap.wait();
      }
      alert("Swap successful!");
    } catch (error) {
      console.error("Swap failed:", error);
      alert("Swap failed, check the console for details.");
    } finally {
      setIsSwapping(false);
      setInputAmount("");
      setOutputAmount("0");
    }
  };

  const switchTokens = () => {
    setInputToken(outputToken);
    setOutputToken(inputToken);
    setInputAmount("");
    setOutputAmount("0");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={coreLogo} alt="Core Logo" className="logo" />
        </div>
        <h1>Swap Tokens</h1>
        {currentAccount ? (
          <button
            onClick={() => setCurrentAccount(null)}
            className="btn-primary disconnect-btn"
          >
            Disconnect Wallet
          </button>
        ) : (
          <button onClick={connectWalletHandler} className="btn-primary">
            Connect Wallet
          </button>
        )}
      </header>
      <main>
        {currentAccount && (
          <div className="swap-container">
            <div className="swap-box">
              <div>
                <label>You will pay</label>
              </div>
              <div className="swap-input">
                <select
                  className="swap-options"
                  value={inputToken}
                  onChange={(e) => setInputToken(e.target.value)}
                >
                  {tokens.map((token) => (
                    <option key={token} value={token}>
                      {token}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="input-field"
                  value={inputAmount}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="0.0"
                />
              </div>
              <button onClick={switchTokens} className="swap-arrow">
                ⇅
              </button>
              <div>
                <label>To receive</label>
                <div className="swap-input">
                  <select
                    className="swap-options"
                    value={outputToken}
                    onChange={(e) => setOutputToken(e.target.value)}
                  >
                    {getOutputTokenOptions().map((token) => (
                      <option key={token} value={token}>
                        {token}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="input-field"
                    value={outputAmount}
                    readOnly
                    placeholder="0.0"
                  />
                </div>
                <p className="swap-subtitle">
                  Exchange your tokens with a 0.5% fee
                </p>
              </div>
              <button
                onClick={handleTokenSwap}
                className="btn-primary swap-btn"
                disabled={isSwapping}
              >
                {isSwapping ? "Swapping..." : "Swap"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
