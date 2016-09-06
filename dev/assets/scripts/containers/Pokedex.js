import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { _ } from 'underscore'

import { fetchPkmn } from '../actions'
import Pokedex from '../components/Pokedex'


// const filterPkmnByName = function(pkmn) {
//   return pkmn.datas.name.indexOf('b') > -1
// }


const filterPkmns = (pkmns, filter = '') => {
  if (filter.trim() == "") {
    return pkmns;
  } else {
    return pkmns.filter(pkmn => pkmn.datas.name.indexOf(filter) > -1)
  }
}

function mapStateToProps(state) {
  return {
    pkmns: _.sortBy(filterPkmns(state.pkmns, state.search.text), function(o) { return o.id; })
  }
}

// Crée alias de dispatch
function mapDispatchToProps(dispatch) {
  return fetchPkmn
}

var PokedexContainer = connect(mapStateToProps)(Pokedex)

export default PokedexContainer
