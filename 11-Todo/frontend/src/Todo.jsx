const Todo = ({ todo, isCompleted, updatedTime, contractIndex, onToggle }) => {
  const handleToggle = async () => {
    if (onToggle) {
      await onToggle(contractIndex);
    }
  };

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
        <button onClick={handleToggle} disabled={isCompleted}>
          Complete
        </button>
      </div>
    </div>
  );
};

const convertToDateTime = (input) => {
  return new Date(Number(input) * 1000).toLocaleString();
};

export default Todo;