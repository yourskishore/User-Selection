import React from 'react'
import PropTypes from 'prop-types'

const Selection = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'nono' : 'none'
    }}
  >
    <input checked={completed} type="checkbox" />
    {text}
  </li>
)

Selection.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Selection
