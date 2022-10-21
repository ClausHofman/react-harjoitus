import React, { useState, useRef } from 'react' // useRef allows us to access the DOM node that we're referencing. We can use it to get the value of the input field.
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid' // uuid is a library that generates unique ids. We're importing the v4 function from the uuid library and renaming it to uuidv4. We can now use uuidv4 to generate unique ids.

function App() {
  const [todos, setTodos] = useState([]) // object destructuring. useState returns an array with two elements. The first element is the value of the state, the second element is a function that allows us to update the state. We can name these elements whatever we want, but it's common to name them after the state variable and the function that updates it. In this case, the state variable is todos and the function that updates it is setTodos.
  const todoNameRef = useRef()
  function handleAddTodo(e){      {/* handleAddTodo is a function that will be called when the user clicks the Add Todo button. */}
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })  
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos={todos} />  {/* props are passed in as an object. The key is the name of the prop and the value is the value of the prop. */} 
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
    )
  }
  
  
  export default App;