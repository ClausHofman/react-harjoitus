import React, { useState } from 'react'
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState([]) // object destructuring. useState returns an array with two elements. The first element is the value of the state, the second element is a function that allows us to update the state. We can name these elements whatever we want, but it's common to name them after the state variable and the function that updates it. In this case, the state variable is todos and the function that updates it is setTodos.
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
    )
  }
  
  
  export default App;