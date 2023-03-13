import './styles/App.css';

export default function Todo({ todo }) {
    return (
        <li className='todo-cell'>
            {todo.id} - {todo.todo}
        </li>
    )
}