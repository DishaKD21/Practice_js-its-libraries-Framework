import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

 
/*
every application will usually have a single store, which is called the single source of truth. the store holds the entire state tree of the application, and the only way to change the state inside it is by dispatching an action.

to set up the store, we do not need much code. we just call configureStore and pass an object with a reducer property. that reducer property contains the reducers for our application. in this case we have only one reducer, which is the todoReducer.

when we have more features later, we can add more reducers and combine them. but for now, because we only have one slice, we can directly pass it in the reducer object.

the key of the reducer object becomes the name of the slice, and the value is the reducer function for that slice. here the slice name is todos, so the state will live under state.todos. inside that slice, we already defined another todos property in the initial state, so the actual array of todos is available at state.todos.todos.

this is important because redux is all about clear data flow. the store should know where every slice of state lives, and every component should read from the correct place instead of guessing the structure.

in the todoSlice, we created the slice with three main things: a name, an initial state, and a reducers list. the name is "todos". the initial state is an object, and inside that object we keep an array of todo objects because we want to store multiple todos, and each todo can have properties like id, title, completed, and more.

the reducers list contains the functions that update the slice state. in our case we have addTodo and removeTodo. these functions receive the current state and the action as arguments, and they return the updated state of the slice.

addTodo creates a new todo object and pushes it into the array. removeTodo filters out the todo whose id matches the action payload.

later, in the components, we use these action creators by importing them and dispatching them through dispatch. that is how the UI tells redux to update the state.

for reading data from the store, we use the useSelector hook from react-redux. we pass a function that receives the full state, and then we return the exact value we want. in our case, we return state.todos.todos to get the todos array.

that todos array is then used in the component to render the list of todos.

so the full flow is simple: the store holds the state, the slice defines how the state changes, the components dispatch actions to update it, and useSelector reads the data back from the store.

earlier, in context api, we often had to manually spread arrays and return new state objects by hand. with redux toolkit, the state is preserved in a cleaner way, and the reducers handle the update logic more naturally.

that is why we export the reducer from the slice file as the default export, and we also export the action creators. the reducer is used in the store setup, and the action creators are used in components when we want to dispatch updates.

now in the removeTodo flow, when we dispatch the action with the id of the todo we want to remove, redux calls the removeTodo reducer, filters out that todo, and updates the store. the component then reads the updated list again and the UI changes automatically.

this is the complete flow of how our store, slice, action creators, dispatch, and selector work together in this app.
*/

