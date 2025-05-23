import getContractInstance from "./getContractInstance";

const Todo = ({ todo, isCompleted, updatedTime, rightIndex }) => {
  return (
    <div className="todo-card">
      <div className="todo-item">
        <span className="todo-label">Todo:</span>
        <span>{todo}</span>
      </div>
      <div className="todo-item">
        <span className="todo-label">Completed?:</span>
        <span>{isCompleted ? "Yes" : "No"}</span>
      </div>
      <div className="todo-item">Last Updated: {convertToDateTime(updatedTime)}</div>
      <div className="todo-button">
        <button onClick={() => handleToggle(rightIndex)} disabled={isCompleted}>
          Complete
        </button>
      </div>
    </div>
  );
};

const convertToDateTime = (input) => {
  return new Date(Number(input) * 1000).toLocaleString();
};

const handleToggle = async (input) => {
  const contract = await getContractInstance();
  await contract.write.toggleTodo([input]);
  alert("Change made");
};

export default Todo;