import React from 'react'
import { connect } from 'react-redux'
import { search } from '../actions'

const Search = ({ dispatch }) => {
  let input

  return (
    <div>
      <input className="inputBox" placeholder="Search.." onChange={e => {
          e.preventDefault()
          dispatch(search(input.value))
        }}
      ref={node => input = node} />
    </div>
  )
}

export default connect()(Search)
