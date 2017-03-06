import React from 'react'

export default (props) => {
  const completedText = props.todo.completed ? '- Completed!' : ''
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} >
      <p>{props.todo.text}</p>
      <p>{completedText}</p>
      <button onClick={() => props.onTodoCompleted(props.todo.id)}>Complete</button>
      <button onClick={() => props.onTodoDeleted(props.todo.id)}>Delete</button>
    </div>
  )
}
