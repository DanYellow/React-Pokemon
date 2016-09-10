export const searchPkmn = function (text) {
  return {
    type: 'FILTER_PKMN',
    text
  }
}


export const receivePkmn = function (id, json) {
  return {
    type: 'FETCH_PKMN',
    id: id,
    id,
    datas: json
  }
}

export const detailsPkmn = function (datas) {
  return {
    type: 'DETAILS_PKMN',
    datas: datas
  }
}


export const fetchPkmn = function (idDex) {
  return dispatch => {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${idDex}/`, { 'cache': 'force-cache' })
      .then(response => response.json())
      .then(function(json) {
        return dispatch(receivePkmn(idDex, json))
      })
  }
}