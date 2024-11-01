import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useReadContract, useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import abi from './abi/abi.js'
import Confetti from 'react-confetti'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-black text-2xl font-bold">
        <div className='flex justify-between'>
          <div></div>
          <div>
            <button onClick={onClose} className="mt-2 text-black py-1 px-1 rounded">
            &times;
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function App() {
  // State variables
  const [guess, setGuess] = useState(''); // User's guess
  const [result, setResult] = useState(''); // Random number result
  const [reveal, setReveal] = useState(false); // Reveal the number
  const [txHash, setTxHash] = useState(''); // Transaction hash
  const [celebrate, setCelebrate] = useState(false); // Celebration state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [showError, setShowError] = useState(false); // Error display state
  const contractAddress="0x7DfB4C470477CF665AaD2E0E32d905dEAb0cf206"; // Contract address
  const [hasClaimed,setHasClaimed] = useState(false); // Claim state

  const {address,isConnected} = useAccount(); // User account info

  // Read contract data incase you want to use the blockchain for random generation
  // const {data:randomNumber,isSuccess,error} = useReadContract({
  //   address: contractAddress,
  //   abi:abi,
  //   functionName:'getRandomNumber',
  //   account: address,
  // });

  // Write contract data
  const {writeContractAsync,isPending} = useWriteContract();

  // Handle token claim
  const handleClaimToken = async () => {
    if (hasClaimed) {
      toast("You have already claimed your reward.");
      return;
    }
    try {
      const tx = await writeContractAsync({
        address: contractAddress,
        abi: abi,
        functionName: "claimTokens",
        account: address,
        args: [], 
      });
      console.log("tx happening::",tx);
      setTxHash(tx); 
    } catch (err) {
      console.error("Error claiming token:", err);
    }
  } 

  // Restart the game
  const handleRestartGame = async () => {
    generateRandomNumber();
    setCelebrate(false);
    setShowError(false);
    setReveal(false);
    setIsModalOpen(false);
    setGuess('');
  };

  // Wait for transaction receipt
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({
    hash: txHash,
  });

  // Notify user when token is claimed
  useEffect(()=>{
    if(isConfirmed){
      toast("Successfully claimed 1 GSS token")
      setIsModalOpen(false);
      setHasClaimed(true);
    }
  },[isConfirmed])

  // Generate random number on mount
  const generateRandomNumber = () => {
    let num = parseInt(Math.random() * 10 + 1);
    setResult(num);
  }

  useEffect(()=>{
    generateRandomNumber();
  },[])

  // Handle user's guess
  const handleGuess = () => {
    if(guess == result){
      console.log("Correct guess!!!");
      setShowError(false);
      setCelebrate(true);
      setIsModalOpen(true);
    }else{
      console.log("try again next time");
      setCelebrate(false);
      setShowError(true);
    }
  }

  // Reveal the number
  const handleReveal = () => {
    setReveal(true)
  }
       
  return (
    <>
    {celebrate && <Confetti />}
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold">Congratulations!</h2>
        <p>You guessed the correct number! You can claim your reward.</p>
        <button className='bg-blue-500 text-white py-1 px-2 rounded mt-4  w-1/2' onClick={handleClaimToken}>{isPending?"Claiming...":"Claim 1 GSS token"}</button>
    </Modal>
    <div className='h-screen w-full'>
      <ToastContainer/>
      <div className='flex justify-between'>
        <h3>GUESS</h3>
        <ConnectButton />
      </div>

      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Guess the Number!</h1>

          <div className="mt-4">
            <input
              type="number"
              className={`border p-2 rounded w-full ${!isConnected ? 'bg-gray-200 cursor-not-allowed' : ''}`}              
              placeholder="Enter your guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              disabled={!isConnected}
            />
            <div>
            <button
            className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full ${!isConnected ? 'bg-gray-400 cursor-not-allowed' : ''}`}
              onClick={handleGuess}
              disabled={!isConnected}
              >
              Submit Guess
            </button>
            {showError && (
              <div className="mt-4 p-2 bg-red-100 rounded">
                <p className="text-red-500 text-center">Incorrect guess, try again!</p>
              </div>
            )}
            <button
            className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full ${!isConnected ? 'bg-gray-400 cursor-not-allowed' : ''}`}
              disabled={isPending || !isConnected}
              onClick={handleRestartGame}
            >
              Restart Game
            </button>

            <button
            className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full ${!isConnected ? 'bg-gray-400 cursor-not-allowed' : ''}`}
            onClick={handleReveal}
              disabled={!isConnected}
                >
              Reveal 
            </button>

            </div>
          </div>

          {result && (
            <div className="mt-4 p-2 bg-gray-100 rounded">
              <p className='text-center text-2xl font-bold text-black '>
                {reveal ? result.toString() : '???' }
                </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
