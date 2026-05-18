import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, title: 'Learn Redux Toolkit' }]
}

export const persistentTodoSlice = createSlice({
    name: 'persistentTodos',
    initialState,
    reducers: {
        addPersistentTodo: (state, action) => {
            const newTodo = { id: nanoid(), title: action.payload }
            state.todos.push(newTodo)
        },
        removePersistentTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addPersistentTodo, removePersistentTodo } = persistentTodoSlice.actions
export default persistentTodoSlice.reducer