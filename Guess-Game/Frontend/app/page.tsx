"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ethers } from "ethers"

// ABIs & Configs
import solidityABI from "./constants/solidityABI.json";
import config from "./constants/config.json";

export default function GuessTheNumber() {
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("Connect your wallet to play!")
  const [attempts, setAttempts] = useState(0)
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState("")
  const [factory, setFactory] = useState<ethers.Contract | undefined>(undefined);
  const [provider, setProvider] = useState<ethers.BrowserProvider | undefined>(undefined);
  const [targetNumber, setTargetNumber] = useState<number>(0)

  useEffect(() => {
    loadBlockchainData()
  }, [])

  async function loadBlockchainData() {
    if (typeof (window as any).ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      setProvider(provider);

      const network = await provider.getNetwork();
      const chainId = network.chainId.toString();
      const address = config[`${chainId}` as keyof typeof config].guessGame.address as string;

      const contractFactory = new ethers.Contract(address, solidityABI, provider);
      setFactory(contractFactory);

      const target = await contractFactory.secret();
      console.log(target);
      setTargetNumber(Number(target)); // Ensure it's stored as a number
    } else {
      console.error("Ethereum provider not found");
    }
  }

  async function connectWallet() {
    if (typeof (window as any).ethereum !== "undefined") {
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
        setMessage("Guess a number between 1 and 100!");
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      setMessage("Please install MetaMask!");
    }
  }

  async function handleGuess(providerr: any, factoryy: any) {

    try {
      const signer = await providerr.getSigner();
      const userGuess = Number.parseInt(guess);

      const transaction = await factoryy.connect(signer).makeGuess(userGuess);
      await transaction.wait();

      const tries = await factoryy.getAttempts(signer.address);
      setAttempts(Number(tries));

      // Fetch secret number again to ensure it's the latest
      const updatedTarget = await factoryy.secret();
      setTargetNumber(Number(updatedTarget));

      if (userGuess === targetNumber) {
        setMessage(`🎉 Congratulations! You guessed the number in ${Number(tries)} attempts!`);
      } else if (userGuess < targetNumber) {
        setMessage("📉 Too low! Try a higher number.");
      } else {
        setMessage("📈 Too high! Try a lower number.");
      }

      setGuess("");
    } catch (error) {
      console.error("Error making guess:", error);
      setMessage("⚠️ Error submitting guess, try again.");
    }
  }

  async function resetGame(providerr: any, factoryy: any) {

    try {
      const signer = await providerr.getSigner();
      const transaction = await factoryy.connect(signer).resetGame();
      await transaction.wait();

      // Reset state
      setGuess("");
      setMessage("Guess a number between 1 and 100!");
      setAttempts(0);

      // Fetch new secret number
      const updatedTarget = await factoryy.secret();
      setTargetNumber(Number(updatedTarget));

      alert("Game Reset");
    } catch (error) {
      console.error("Error resetting game:", error);
      setMessage("⚠️ Error resetting game.");
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Guess the Number</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4">{message}</p>
        {!isConnected ? (
          <Button onClick={connectWallet} className="w-full mb-4">
            Connect Wallet
          </Button>
        ) : (
          <>
            <p className="text-center mb-2 text-sm">
              Connected: {account.slice(0, 6)}...{account.slice(-4)}
            </p>
            <p className="text-center mb-4 text-sm">Attempts: {attempts}</p>
            <div className="flex space-x-2 mb-4">
              <Input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
                className="flex-grow"
              />
              <Button onClick={async() => {
                await handleGuess(provider, factory);
              }} disabled={!isConnected}>
                Guess
              </Button>
            </div>
            <Button onClick={async() => {
              await resetGame(provider, factory)
            }} variant="outline" className="w-full" disabled={!isConnected}>
              New Game
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
