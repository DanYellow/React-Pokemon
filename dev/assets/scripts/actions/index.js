import _ from 'lodash'
import * as ActionTypes from '../constants/ActionTypes'


export const searchPkmn = function (text) {
  return {
    type: ActionTypes.FILTER_PKMN,
    text
  }
}


export const receivePkmn = function (id, json) {
  return {
    type: ActionTypes.FETCH_PKMN,
    id,
    datas: json
  }
}

export const detailsPkmn = function (datas) {
  return {
    type: 'DETAILS_PKMN',
    datas
  }
}

const foo = _.debounce(isFinishLoading, 1000, { 'trailling': true, 'leading': false });


export const fetchPkmn = function (idDex) {
  return dispatch => {
    dispatch({ type: ActionTypes.LOADING_PKMN });
    
    return fetch(`http://pokeapi.co/api/v2/pokemon/${idDex}/`, { 'cache': 'force-cache' })
      .then(response => response.json())
      .then(function(json) {
        foo();
        return dispatch(receivePkmn(idDex, json))
      })
  }
}

function isFinishLoading() {
  return dispatch => {
    dispatch({ type: ActionTypes.ENDLOADING_PKMN });
  }
}

export const loadingPkmn = function (isLoading) {
  return {
    type: 'LOADING_PKMN'
  }
}

