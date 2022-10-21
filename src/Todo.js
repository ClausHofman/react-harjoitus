import React from 'react'
// "rfc" shortcut from VS Code extension ES7 React/Redux/GraphQL/React-Native snippets
export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange=
                {handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}
