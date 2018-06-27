import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
      <FilterLink filter={VisibilityFilters.SHOW}>
          Apply
      </FilterLink>
  </div>
)

export default Footer
