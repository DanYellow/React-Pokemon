import { combineReducers } from 'redux'

var visibilityFilter = function(state, action) {
  if (!state) { state = "SHOW_ALL"; }
  
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}


var todos = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, text: action.text, completed: false }
      ]
    default:
      return state
  }
}


var todoApp = combineReducers({
    visibilityFilter,
    todos
})




export default todoApp