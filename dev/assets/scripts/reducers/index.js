import { combineReducers } from 'redux'


const filterPkmns = (pkmns, filter = '') => {
  if (filter.trim() == "") {
    return pkmns;
  } else {
    return pkmns.filter(pkmn => pkmn.datas.name.indexOf(filter) > -1)
  }
}

const getArrayTypes = (pkmn) => {
  pkmn.datas.typesString = _.reverse(_.map(pkmn.datas.types, 'type.name'));

  if (pkmn.datas.typesString.length == 2) {
    pkmn.datas.typesString[1] = pkmn.datas.typesString[1] + '-border';
  }
  return pkmn;
}


const pkmns = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PKMN':
      return _.map(_.sortBy([
        ...state,
        { id: action.id, datas: action.datas }
      ], function(pkmn) { return pkmn.id; }), getArrayTypes);
    case 'FILTER_PKMN':
      return state;
    default:
      return state;
  }
}




const filteredPkmns = (state = pkmns(undefined, 'FILTER_PKMN'), action) => {
  switch (action.type) {
    case 'FILTER_PKMN':
      console.log("reer", { ...state, ...pkmns(undefined, action)}, state, action)
      return [...state, ...pkmns(undefined, action)]; //_.sortBy(filterPkmns(state, action.text), function(o) { return o.id; });
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
      let pkmn = { ...action.datas }
      // Add missing game covers
      pkmn.game_indices = [
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"sun"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"moon"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"y"},"game_index":5},
        ...pkmn.game_indices
      ]

      return { datas: pkmn };
    default:
      return state;
  }
}


const reducers = combineReducers({
  pkmns,
  search,
  pkmn,
  filteredPkmns
});


export default reducers
