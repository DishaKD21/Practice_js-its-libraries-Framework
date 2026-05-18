import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePersistentTodo } from '../features/persistentTodo/persistentTodoSlice'

const PersistentTodos = () => {
    const todos = useSelector((state) => state.persistentTodos.todos ?? [])
    const dispatch = useDispatch()

    return (
        <>
            <div>Persistent Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => dispatch(removePersistentTodo(todo.id))}>
                        Remove
                    </button>
                </li>
            ))}
        </>
    )
}

export default PersistentTodos