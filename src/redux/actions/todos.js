export const addTodo = todo => {
  return { type: 'todos/ADD_TODO', payload: todo }
}

export const updateTodoText = todoText => {
  return { type: 'todos/UPDATE_TODO_TEXT', payload: todoText }
}

export const completeTodo = todoId => {
  return { type: 'todos/COMPLETE_TODO', payload: todoId }
}

export const deleteTodo = todoId => {
  return { type: 'todos/DELETE_TODO', payload: todoId }
}
