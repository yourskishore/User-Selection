import React from 'react'
import PropTypes from 'prop-types'

const User = ({ onClick, completed, text }) => (
    <li>
        {text}
    </li>
)

User.propTypes = {
    text: PropTypes.string.isRequired
}

export default User
