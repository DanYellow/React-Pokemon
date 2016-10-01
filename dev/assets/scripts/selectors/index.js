import { createSelector } from 'reselect'

const filterPkmns = (pkmns, filter = '') => {
  if (filter.trim() == "") {
    return pkmns;
  } else {
    return pkmns.filter(pkmn => pkmn.datas.name.indexOf(filter) > -1)
  }
}


const getPokemon = (state) => state.pkmns
const getSearch = (state) => state.search

export const getFilteredPokemon = createSelector(
  [ getPokemon, getSearch ],
  (pokemons, search) => {
    return filterPkmns(pokemons, search)
  }
)
