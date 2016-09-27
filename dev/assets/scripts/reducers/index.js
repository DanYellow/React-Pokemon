import { combineReducers } from 'redux'

var pkmns = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_PKMN':
      if (state.indexOf({ id: action.id, datas: action.datas }) > -1) {
        return state
      }

      return [
        ...state,
        { id: action.id, datas: action.datas }
      ]
    case 'FILTER_PKMN':
      return state;
    default:
      return state;
  }
}

var search = function (state = '', action) {
  // console.log("search", action, state)
  switch (action.type) {
    case 'FILTER_PKMN':
      return action;
    default:
      return state;
  }
}

var pkmn = function (state = {}, action) {
  switch (action.type) {
    case 'DETAILS_PKMN':
      return { datas: action.datas };
    default:
      return state;
  }
}


var reducers = combineReducers({
  pkmns,
  search,
  pkmn
});


export default reducers
