import _ from 'lodash'

/* eslint-disable no-shadow */
const initialState = { todos: [], currentlyEditingTodo: { text: '', completed: false } }

const idForNewTodo = (todos) => _.get(_.maxBy(todos, 'id'), 'id', 0) + 1

const completeTodo = (todos, todoId) => {
  const todoIndex = _.findIndex(todos, (todo) => todo.id === todoId)

  return [
    ...todos.slice(0, todoIndex),
    { ...todos[todoIndex], completed: true },
    ...todos.slice(todoIndex + 1),
  ]
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'todos/UPDATE_TODO_TEXT':
      return { ...state, currentlyEditingTodo: { ...state.currentlyEditingTodo, text: action.payload } }
    case 'todos/ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { ...state.currentlyEditingTodo, id: idForNewTodo(state.todos) }],
        currentlyEditingTodo: initialState.currentlyEditingTodo,
      }
    case 'todos/DELETE_TODO':
      return { ...state, todos: _.reject(state.todos, (todo) => todo.id === action.payload) }
    case 'todos/COMPLETE_TODO':
      return { ...state, todos: completeTodo(state.todos, action.payload) }
    default:
      return state
  }
}
