import './App.css';

export default function Todo({ todo }) {
    return (
        <li key={todo.id} className='listoftodo'>
            {todo.id} - {todo.todo}
        </li>
    )
}