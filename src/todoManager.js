import './styles/App.css';
import { useState } from 'react'
import Todo from './todo'

const initialTodoList = [
    {
        id: 1,
        todo: "Buy groceries from the corner store"
    },
    {
        id: 2,
        todo: "Go return books to the library"
    },
    {
        id: 3,
        todo: "Visit the museum"
    }
]
let nextid = 4;

export function TodoList({ todoList, handleDelete }) {

    const listItems = todoList.map(todo =>
        <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
    );
    return <ul>{listItems}</ul>;
}

export default function TodoManager() {

    const [todoList, setTodoList] = useState(initialTodoList)
    const [text, setText] = useState('')

    function handleDelete(id) {
        setTodoList(todoList.filter((t) => t.id !== id))
    }

    return (
        <>
            <form className='todo-form'
                onSubmit={(e) => {
                    e.preventDefault()
                    setTodoList([
                        ...todoList,
                        {
                            id: nextid++,
                            todo: text
                        }
                    ])
                }}>
                <input className='todo-box' type='text' placeholder='New to-do' onChange={e => setText(e.target.value)} />
                <button className='new-todo-but'>Add</button>
            </form>
            <TodoList todoList={todoList} handleDelete={handleDelete} />
        </>
    )
}