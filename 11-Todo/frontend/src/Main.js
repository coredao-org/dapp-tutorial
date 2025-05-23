import { useState } from "react";
import "./App.css";
import Todos from "./TodoList";
import getContractInstance from "./getContractInstance";
import { ethers } from "ethers";
import ConnectWallet from "./connectWallet";

function Contracting() {
  const [inputTodo, setInputTodo] = useState("");
  const [getAllTodos, setAllTodos] = useState([]);
  const [sortedRes, setSortedRes] = useState([]);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  async function sendMessageToCreateTodo() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const contract = await getContractInstance();
        if (inputTodo !== "") {
          await contract.write.createTodo([inputTodo]);
          setInputTodo("");
          await getAllTodosFromContract();
        } else {
          alert("Input boxes cannot be empty");
        }
      } catch (err) {
        console.log("Error setting message:", err);
        alert("Error setting message. Please check the console for details.");
      }
    }
  }

  async function getAllTodosFromContract() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const contract = await getContractInstance();
        console.log("contract instance is ::: ", contract);
        const allTodos = await buildTodos(contract);
        setAllTodos(allTodos);
      } catch (err) {
        console.log("Error getting message:", err);
        alert("Error getting message. Please check the console for details.");
      }
    }
  }

  async function buildTodos(contract) {
    const [todos, isCompleted, lastUpdated] = await contract.read.getAllTodos();
    return todos.map((todo, i) => ({
      todo: ethers.decodeBytes32String(todo),
      isCompleted: isCompleted[i],
      lastUpdated: lastUpdated[i],
    }));
  }

  async function getAllCompletedTodo() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const contract = await getContractInstance();
        const allTodos = await buildTodos(contract);
        const result = allTodos.filter((x) => x.isCompleted === true);
        setSortedRes(result);
      } catch (err) {
        alert("Error getting message. Please check the console for details.");
      }
    }
  }

  const handleSendTodo = (e) => setInputTodo(e.target.value);

  const clearMessage = () => {
    setAllTodos([]);
    setSortedRes([]);
  };

  return (
    <div className="App">
      <ConnectWallet onConnect={() => setIsWalletConnected(true)} />
      <div className="container">
        <h1>Simple Todo</h1>
        <h2>Smart Contract and DApp Integration</h2>
        <h3>
          <i>Getter and Setter Function Call</i>
        </h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter todo here"
            value={inputTodo}
            onChange={handleSendTodo}
            required
            disabled={!isWalletConnected}
          />
          <button onClick={sendMessageToCreateTodo} disabled={!isWalletConnected}>
            Create Todo
          </button>
        </div>
        <div className="button-group">
          <button onClick={getAllCompletedTodo} disabled={!isWalletConnected}>
            Get Completed Todos
          </button>
          <button onClick={getAllTodosFromContract} disabled={!isWalletConnected}>
            Get Todos
          </button>
          <button onClick={clearMessage} disabled={!isWalletConnected}>
            Clear Message
          </button>
        </div>
        <div className="todo-section">
          {sortedRes.length > 0 ? (
            <Todos todos={sortedRes} />
          ) : (
            <div className="no-todos">No Completed Todos Yet</div>
          )}
        </div>
        <div className="todo-section">
          <Todos todos={getAllTodos} />
        </div>
      </div>
    </div>
  );
}

export default Contracting;