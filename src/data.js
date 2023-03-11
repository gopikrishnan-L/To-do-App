import Todo from './todo'

export default function TodoList({ todoList }) {

    const listItems = todoList.map(todo =>
        <Todo key={todo.id} todo={todo} />
    );
    return <ul>{listItems}</ul>;
}