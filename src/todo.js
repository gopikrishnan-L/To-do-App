import './styles/App.css';

export default function Todo({ todo, handleDelete }) {
    return (
        <div className='todo-cell'>
            <li >
                {todo.id} - {todo.todo}
            </li>
            <button className='del-todo-but' onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    )
}