import React, { useState } from 'react'
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']) // object destructuring. useState returns an array with two elements. The first element is the value of the state, the second element is a function that allows us to update the state. We can name these elements whatever we want, but it's common to name them after the state variable and the function that updates it. In this case, the state variable is todos and the function that updates it is setTodos.
  return (
    <>
    <TodoList todos={todos} />  {/* props are passed in as an object. The key is the name of the prop and the value is the value of the prop. */} 
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
    )
  }
  
  
  export default App;