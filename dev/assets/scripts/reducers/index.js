import { combineReducers } from 'redux'

const pkmns = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_PKMN':
      return [
        ...state,
        { id: action.id, datas: action.datas }
      ]
    case 'LOADING_PKMN':
      return action.isLoading
    default:
      return state;
  }
}

const search = function (state = '', action) {
  switch (action.type) {
    case 'FILTER_PKMN':
      return action.text;
    default:
      return state;
  }
}

const pkmn = function (state = {}, action) {
  switch (action.type) {
    case 'DETAILS_PKMN':
      return { datas: action.datas };
    default:
      return state;
  }
}


const reducers = combineReducers({
  pkmns,
  search,
  pkmn
});


export default reducers
