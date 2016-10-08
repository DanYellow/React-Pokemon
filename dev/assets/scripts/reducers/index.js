import { combineReducers } from 'redux'

import * as ActionTypes from '../constants/ActionTypes'


const getArrayTypes = (pkmn) => {
  pkmn.datas.typesString = _.reverse(_.map(pkmn.datas.types, 'type.name'));

  // if (pkmn.datas.typesString.length == 2) {
  //   pkmn.datas.typesString[1] = pkmn.datas.typesString[1] + '-border';
  // }
  return pkmn;
}


const pkmns = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PKMN:
      if (state.some(function(e){ return e.id == action.datas.id; })) {
        return state;
      }
      return _.map(_.sortBy([
        ...state,
        { id: action.id, datas: action.datas }
      ], function(pkmn) { return pkmn.id; }), getArrayTypes);
    case ActionTypes.FILTER_PKMN:
      return state;
    default:
      return state;
  }
}


const search = function (state = '', action) {
  switch (action.type) {
    case ActionTypes.FILTER_PKMN:
      return action.text;
    default:
      return state;
  }
}


const pkmn = function (state = {}, action) {
  switch (action.type) {
    case ActionTypes.DETAILS_PKMN:
      let pkmn = { ...action.datas }
      // Add missing game covers
      // @TODO add Pokemon Rubis Omega and Sapphire Alpha
      pkmn.game_indices = [
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"sun"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"moon"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"omega-ruby"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"alpha-sapphire"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"y"},"game_index":5},
        ...pkmn.game_indices
      ]

      return { datas: pkmn };
    default:
      return state;
  }
}


const isLoadingPkmn = function (state = false, action) {
  switch (action.type) {
    case ActionTypes.LOADING_PKMN:
      return true;
    case ActionTypes.ENDLOADING_PKMN:
      return false;
    default:
      return false;
  }
}


const reducers = combineReducers({
  pkmns,
  search,
  pkmn,
  isLoadingPkmn
});


export default reducers

