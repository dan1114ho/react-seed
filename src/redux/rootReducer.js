import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'

const rootReducer = combineReducers({
  todos,
  user,
})

export default rootReducer
