import { combineReducers } from 'redux'

var pkmns = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_PKMN':
      return [
        ...state,
        { id: action.id, datas: action.datas }
      ]
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
    pkmns,
    todos
})




export default todoApp