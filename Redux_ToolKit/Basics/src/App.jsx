import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import PersistentAddTodo from './components/PersistentAddTodo'
import PersistentTodos from './components/PersistentTodos'
import { store } from './store/store'
import { persistentStore } from './store/persistentStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning Redux Toolkit</h1>

      <Provider store={store}>
        <section>
          <h2>Normal Todo Flow</h2>
          <AddTodo />
          <Todos />
        </section>
      </Provider>

      <Provider store={persistentStore}>
        <section>
          <h2>Persistent Todo Flow</h2>
          <PersistentAddTodo />
          <PersistentTodos />
        </section>
      </Provider>
    </>
  )
}

export default App
