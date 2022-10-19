import React from 'react'
// "rfc" shortcut from VS Code extension ES7 React/Redux/GraphQL/React-Native snippets
export default function Todo({ todo }) {
  return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} />
                {todo.name}
            </label>
        </div>
    )
}
