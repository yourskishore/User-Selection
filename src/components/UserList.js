import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ todos, visibilityFilter }) => {
    if(visibilityFilter === 'SHOW')
        return (
            <div>
                <div className="selectedList">
                <h3> Selected List </h3>
                    <ul>
                        {todos.filter( data => data.completed ).map(todo => {
                                return <User
                                    key={todo.id}
                                    {...todo}
                                />
                            }
                        )}
                    </ul>
                    </div>
                    <div className="unselectedList">
                <h3> Unselected List </h3>
                <ul>
                    {todos.filter( data => !data.completed ).map(todo => {
                            return <User
                                key={todo.id}
                                {...todo}
                            />
                        }
                    )}
                </ul>
                </div>
            </div>
        )
    else {
        return null
    }
}

UserList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default UserList