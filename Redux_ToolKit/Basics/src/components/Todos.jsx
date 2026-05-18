import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
        <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
            Remove
            </button>               
        </li>
    ))}
    </>
  )
}

export default Todos
