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


var todoApp = combineReducers({
    visibilityFilter
})




export default todoApp