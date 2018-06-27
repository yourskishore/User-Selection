let mydata = require('./data.json')

const selections = (state = mydata, action) => {
  switch (action.type) {
    case 'SEARCH':
      if (action.text ){
        return mydata.filter( (data, index) => { 
          if(index)
            return data.text.toLocaleLowerCase().match(action.text.toLocaleLowerCase()) 
          else 
            return true
        });
      }
      else {
        return mydata
      }
    case 'TOGGLE_TODO':
      if(action.id) {
        return state.map( (todo, index) => {
          if(index === 0)
            return {...todo, completed: todo.completed ? false : todo.completed}
          else if(todo.id === action.id)
            return {...todo, completed: !todo.completed}
          else 
            return todo
        })
      } else {
        return state.map( (data, index) => {
            data.completed = !action.completed; 
          return data })
      }
    default:
      return state
  }
}

export default selections
