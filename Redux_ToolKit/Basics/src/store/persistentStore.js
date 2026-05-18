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

/*
learning note for this persistent store file

previous version idea

export const persistentStore = configureStore({
    reducer: {
        persistentTodos: persistentTodoReducer
    }
})

this would create the store, but the data would live only in memory.
when the page reloads, the todo list would start again from the initial state.

current version

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

the reducer object works the same way as in the normal store.
the key persistentTodos becomes the slice name in redux state.
that means the full slice lives at state.persistentTodos.
inside that slice, the array of todos is stored at state.persistentTodos.todos.

how the persistence works step by step

1. loadPersistentTodos checks localStorage for saved todos.
2. if saved data exists, JSON.parse converts it back into an array.
3. if nothing is saved yet, we return a default todo array.
4. configureStore uses that returned data as preloadedState.
5. persistentStore.subscribe listens for every state update.
6. after every update, we save the latest todos array back to localStorage.

why we need both preload and subscribe

preloadedState is for loading old data when the app starts.
subscribe is for saving new data after the user adds or removes todos.
one handles reading, the other handles writing.

important data path

localStorage -> loadPersistentTodos -> preloadedState -> state.persistentTodos.todos

and in the other direction:

dispatch action -> reducer updates state -> subscribe saves to localStorage

so the full flow is:
read saved todos on startup, place them into redux, update them through actions, and save the latest version back into localStorage.
*/