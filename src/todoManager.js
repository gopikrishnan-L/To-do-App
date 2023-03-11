import './App.css'
import TodoList from './data'
import { useState } from 'react'

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
export default function TodoManager() {

    const [todoList, setTodoList] = useState(initialTodoList)
    const [text, setText] = useState('')
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
            <TodoList todoList={todoList} />
        </>
    )
}