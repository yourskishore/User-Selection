import { connect } from 'react-redux'
import {setVisibilityFilter, toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
  setVisibilityFilter: () => dispatch(setVisibilityFilter('HIDE'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
