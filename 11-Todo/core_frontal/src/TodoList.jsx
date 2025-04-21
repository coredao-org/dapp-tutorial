import Todo from './Todo';

const Todos = ({ todos }) => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {todos.map((todo, index) => (
                <div key={index} style={{ flex: '0 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)' }}>
                    <Todo todo={todo.todo} isCompleted={todo.isCompleted} updatedTime={todo.lastUpdated} rightIndex={index}/>
                </div>
            ))}
        </div>
    );
}

export default Todos;