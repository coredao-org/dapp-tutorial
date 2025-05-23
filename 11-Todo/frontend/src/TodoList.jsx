import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-wrapper">
          <Todo
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            updatedTime={todo.lastUpdated}
            rightIndex={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;