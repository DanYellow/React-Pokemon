import React from 'react'
import { connect } from 'react-redux'

import PokemonDetails from '../components/PokemonDetails'

/**
 * Adds Pokemon version X, Y, Moon and Sun
 * @type {[type]}
 */
const addLastestVersion = (pkmn) => {
  if (!Object.keys(pkmn).length) {
    return pkmn;
  }

  var pkmnVersions = pkmn.datas.game_indices;

  // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5})
  // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"y"},"game_index":5})
  // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"moon"},"game_index":5})
  // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"sun"},"game_index":5})

  pkmn.datas.game_indices = [...pkmnVersions, {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5}];
  
  return pkmn;
}

function mapStateToProps(state) {
  return {
    pkmn: addLastestVersion(state.pkmn)
  }
}


var PokemonDetailsContainer = connect(mapStateToProps)(PokemonDetails)

export default PokemonDetailsContainer
