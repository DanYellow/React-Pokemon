import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPkmn } from '../actions'
import Pokedex from '../components/Pokedex'




const filterPkmns = (pkmns, filter) => {
  if (filter.trim() == "") {
    return pkmns;
  } else {
    return pkmns.filter(filterPkmnByName)
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    pkmns: state.pkmns //filterPkmns(state.pkmns, state.search)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchPkmn, dispatch)
  }
}

var PokedexContainer = connect(mapStateToProps)(Pokedex)

export default PokedexContainer
