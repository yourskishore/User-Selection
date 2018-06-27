import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = state => ({
    todos: state.todos.slice(1),
    visibilityFilter: state.visibilityFilter
})

export default connect(
    mapStateToProps
)(UserList)
