import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.HIDE, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    case 'TOGGLE_TODO':
      return 'HIDE'
    default:
      return state
  }
}

export default visibilityFilter
