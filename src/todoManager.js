import './App.css'

export default function TodoManager() {
    return (
        <>
            <form className='todo-form'>
                <input className='todo-box' type='text' placeholder='New to-do' />
                <button className='new-todo-but'>Add</button>
            </form>
        </>
    )
}