import { useState, useEffect, useCallback } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0); // Trigger re-fetch

  // ✅ Proper memoized function for fetching todos
  const getAllTodosFromContract = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      setIsLoading(true);
      try {
        const contract = await getContractInstance();
        const allTodos = await buildTodos(contract);
        setAllTodos(allTodos);
        const completedTodos = allTodos.filter((x) => x.isCompleted === true);
        setSortedRes(completedTodos);
      } catch (err) {
        console.log("Error getting message:", err);
        alert("Error getting message. Please check the console for details.");
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isWalletConnected) {
      getAllTodosFromContract();
    }
  }, [isWalletConnected, refreshCount, getAllTodosFromContract]);

  async function sendMessageToCreateTodo() {
    if (typeof window.ethereum !== "undefined") {
      setIsLoading(true);
      try {
        const contract = await getContractInstance();
        if (inputTodo !== "") {
          await contract.write.createTodo([inputTodo]);
          setInputTodo("");
          setRefreshCount((prev) => prev + 1); // Trigger refresh
        } else {
          alert("Input boxes cannot be empty");
        }
      } catch (err) {
        console.log("Error setting message:", err);
        alert("Error setting message. Please check the console for details.");
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function buildTodos(contract) {
    const [todos, isCompleted, lastUpdated] = await contract.read.getAllTodos();
    const todoList = todos.map((todo, i) => ({
      todo: ethers.decodeBytes32String(todo),
      isCompleted: isCompleted[i],
      lastUpdated: Number(lastUpdated[i]),
      contractIndex: i,
    }));
    return todoList.sort((a, b) => b.lastUpdated - a.lastUpdated);
  }

  async function getAllCompletedTodo() {
    if (typeof window.ethereum !== "undefined") {
      setIsLoading(true);
      try {
        const contract = await getContractInstance();
        const allTodos = await buildTodos(contract);
        const result = allTodos.filter((x) => x.isCompleted === true);
        setSortedRes(result);
      } catch (err) {
        alert("Error getting message. Please check the console for details.");
      } finally {
        setIsLoading(false);
      }
    }
  }

  const handleSendTodo = (e) => setInputTodo(e.target.value);

  const clearMessage = () => {
    setAllTodos([]);
    setSortedRes([]);
  };

  const handleToggleTodo = async (contractIndex) => {
    setIsLoading(true);
    try {
      const contract = await getContractInstance();
      await contract.write.toggleTodo([contractIndex]);
      setRefreshCount((prev) => prev + 1); // Trigger refresh
    } catch (err) {
      console.log("Error toggling todo:", err);
      alert("Error toggling todo. Please check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <ConnectWallet onConnect={() => setIsWalletConnected(true)} />
      <div className="container">
        <h1>Simple Todo</h1>
        <h2>Smart Contract and DApp Integration</h2>
        <h3><i>Getter and Setter Function Call</i></h3>
        {isLoading && <div className="loading">Loading...</div>}
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter todo here"
            value={inputTodo}
            onChange={handleSendTodo}
            required
            disabled={!isWalletConnected || isLoading}
          />
          <button onClick={sendMessageToCreateTodo} disabled={!isWalletConnected || isLoading}>
            Create Todo
          </button>
        </div>
        <div className="button-group">
          <button onClick={getAllCompletedTodo} disabled={!isWalletConnected || isLoading}>
            Get Completed Todos
          </button>
          <button onClick={getAllTodosFromContract} disabled={!isWalletConnected || isLoading}>
            Get Todos
          </button>
          <button onClick={clearMessage} disabled={!isWalletConnected || isLoading}>
            Clear Message
          </button>
        </div>
        <div className="todo-section completed-todos">
          <h3>Completed Todos</h3>
          {sortedRes.length > 0 ? (
            <Todos todos={sortedRes} onToggle={handleToggleTodo} />
          ) : (
            <div className="no-todos">No Completed Todos Yet</div>
          )}
        </div>
        <div className="todo-section all-todos">
          <h3>All Todos</h3>
          {getAllTodos.length > 0 ? (
            <Todos todos={getAllTodos} onToggle={handleToggleTodo} />
          ) : (
            <div className="no-todos">No Todos Yet</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contracting;
