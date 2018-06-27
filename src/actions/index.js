let nextTodoId = 0
export const search = text => ({
  type: 'SEARCH',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id, completed) => ({
  type: 'TOGGLE_TODO',
  id,
  completed: completed
})

export const selectAll = isChecked => ({
  type: 'SELECT_ALL',
  isChecked
})

export const VisibilityFilters = {
  HIDE: 'HIDE',
  SHOW: 'SHOW'
}
