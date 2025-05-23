import {useState} from "react";
import "./App.css";
import Todos from "./TodoList";
import getContractInstance from "./getContractInstance";
import { ethers } from "ethers";


function Contracting() {

  const [inputTodo, setInputTodo] = useState("");
  const [getAllTodos, setAllTodos] = useState([]);
  const [sortedRes, setSortedRes] = useState([]);

  async function sendMessageToCreateTodo() {
    if (typeof window.ethereum !== "undefined") {
      try {
        // await requestAccount();
        const contract = await getContractInstance();

          if(inputTodo !== ""){
            await contract.write.createTodo([inputTodo]);
            
            setInputTodo(""); 
            await getAllTodosFromContract();
          }else alert("input boxes cannot be empty");
      } catch (err) {
        console.log("Error setting message:", err);
        alert("Error setting message. Please check the console for details.");
      }
    }
  }

  async function getAllTodosFromContract() {
    if (typeof window.ethereum !== "undefined") {
      try {
        // await requestAccount();
        const contract = await getContractInstance();
        console.log("contract instance is ::: ", contract);

        // console.log("logging :::", await contract.getAllTodos());
        const allTodos = await  await buildTodos(contract);
        
        setAllTodos(allTodos);
      } catch (err) {
        console.log("Error getting message:", err);
        alert("Error getting message. Please check the console for details.");
      }
    }
  }

  async function buildTodos(contract) {
    const [todos, isCompleted, lastUpdated ] = await contract.read.getAllTodos();
    return todos.map((todo, i) => ({
          todo: ethers.decodeBytes32String(todo),
          isCompleted: isCompleted[i],
          lastUpdated: lastUpdated[i]
        }));
  } 

  async function getAllCompletedTodo() {
    if (typeof window.ethereum !== "undefined") {
      try {
        // await requestAccount();
        const contract = await getContractInstance();

        const allTodos = await buildTodos(contract);

        const result = allTodos.filter(x => x.isCompleted === true);

        setSortedRes(result);

      } catch (err) {
        // console.log("Error getting message:", err.message);
        alert("Error getting message. Please check the console for details.");
      }
    }
  }

  const handleSendTodo = (e) => setInputTodo(e.target.value);

  const clearMessage = () => {
    setAllTodos([]);
    setSortedRes([]);    
  }


  return (
    <div className="App" style={{background: "black"}}>
      <div>
        <h1>Simple Todo</h1>
        <h2>Smart Contract and DApp Integration</h2>
        <h3>
          <i>Getter and Setter Function call</i>
        </h3>
        <br />
        <input
          type="text"
          placeholder="enter todo here"
          value={inputTodo}
          onChange={handleSendTodo}
          required
        />
        <button onClick={sendMessageToCreateTodo}>Create Todo</button>
        <br /><br />
        
        <button onClick={getAllCompletedTodo}>Get Completed Todos</button>
        <br /><br />
        <div>
          { sortedRes.length > 0 ?
            <Todos todos={sortedRes}/> : <div style={{background: "white"}}>"No Completed Todo yet"</div>}
        </div>
        <button onClick={getAllTodosFromContract}>Get Todos</button>
        <br /> <br />
      </div>
      <div>
        <Todos todos={getAllTodos}/>
        <button onClick={clearMessage}>Clear message</button>
      </div>
    </div>
  );
}

export default Contracting;