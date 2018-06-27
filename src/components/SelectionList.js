import React from 'react'
import PropTypes from 'prop-types'
import Selection from './Selection'
import {setVisibilityFilter} from "../actions";

const UserList = ({ todos, toggleTodo }) => {
  
  return (
    <ul>
      {todos.map(todo => {
        return <Selection
        key={todo.id}
        {...todo}
        onClick={() => {toggleTodo(todo.id, todo.completed); setVisibilityFilter('HIDE') } }
      />
      }

        
      )}
    </ul>
  )
};

UserList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default UserList
