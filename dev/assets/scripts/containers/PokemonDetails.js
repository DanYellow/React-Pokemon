import React from 'react'
import { connect } from 'react-redux'

import PokemonDetails from '../components/PokemonDetails'

/**
 * Adds Pokemon version X, Y, Moon and Sun
 * @type {[type]}
 */
// const addLastestVersion = (pkmn) => {
  // if (!Object.keys(pkmn).length) {
  //   return pkmn;
  // }
//   let temp = pkmn;
//   console.log('addLastestVersion')
//   var pkmnVersions = temp.datas.game_indices;

//   // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5})
//   // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"y"},"game_index":5})
//   // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"moon"},"game_index":5})
//   // pkmnVersions.unshift({"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"sun"},"game_index":5})
  
//   temp.datas.game_indices = [...pkmnVersions, {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5}];
  
//   return temp;
// }

const addLastestVersion = (pkmn) => {
  console.log(typeof pkmn)
  if (!Object.keys(pkmn).length) { 
    return pkmn;
  } // { pokemons: [], filter: "", filteredPokemons: [] } 
  // http://paste.cdnl.me/paste/XGx-waOI#FVoblRN7iLCm5BVcDQM0KuaagYEk3kcgkubCI4mx9SO
  // http://paste.cdnl.me/paste/aShhPHQT#O2CijqURFE98-2aOZGCKGL9a9ayoEIaJ9g74PWHVKec
  // console.log(pkmn)
  var foo = { ...pkmn }
 
  // newPkmn.datas.game_indices = {
  //   ...newPkmn.datas.game_indices,
  //   {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5}
  // }

  return {};
}


function mapStateToProps(state) {
  return {
    pkmn: addLastestVersion(state.pkmn)
  }
}


var PokemonDetailsContainer = connect(mapStateToProps)(PokemonDetails)

export default PokemonDetailsContainer
