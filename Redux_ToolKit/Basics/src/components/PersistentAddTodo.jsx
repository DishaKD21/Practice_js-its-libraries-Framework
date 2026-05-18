import React from 'react'
import { useDispatch } from 'react-redux'
import { addPersistentTodo } from '../features/persistentTodo/persistentTodoSlice'

const PersistentAddTodo = () => {
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addPersistentTodo(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    placeholder='Enter persistent todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Add Persistent Todo</button>
            </form>
        </div>
    )
}

export default PersistentAddTodo