import { combineReducers } from 'redux'
import selections from './selections'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos: selections,
  visibilityFilter
})
