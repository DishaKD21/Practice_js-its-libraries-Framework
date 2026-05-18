import { configureStore } from '@reduxjs/toolkit'
import persistentTodoReducer from '../features/persistentTodo/persistentTodoSlice'

const loadPersistentTodos = () => {
    try {
        const savedTodos = localStorage.getItem('persistentTodos')
        return savedTodos ? JSON.parse(savedTodos) : [{ id: 1, title: 'Learn Redux Toolkit' }]
    } catch {
        return [{ id: 1, title: 'Learn Redux Toolkit' }]
    }
}

export const persistentStore = configureStore({
    reducer: {
        persistentTodos: persistentTodoReducer
    },
    preloadedState: {
        persistentTodos: {
            todos: loadPersistentTodos()
        }
    }
})

persistentStore.subscribe(() => {
    const state = persistentStore.getState()
    localStorage.setItem('persistentTodos', JSON.stringify(state.persistentTodos.todos))
})