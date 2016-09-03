let nextTodoId = 0
export const addTodo = function (text) {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
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


export const fetchPkmn = function (idDex) {
  return dispatch => {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${idDex}/`)
      .then(response => response.json())
      .then(json => dispatch(receivePkmn(idDex, json)))
  }
}