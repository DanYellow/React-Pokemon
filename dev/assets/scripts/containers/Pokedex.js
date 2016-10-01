import React from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import { fetchPkmn, loadingPkmn } from '../actions'
import Pokedex from '../components/Pokedex'



function mapStateToProps(state) {
  return {
    pkmns: state.pkmns,
    filteredPkmns: state.filteredPkmns
  }
}

// Crée alias de dispatch
function mapDispatchToProps(dispatch) {
  return {
    fetchPkmn,
    loadingPkmn
  }
}




var PokedexContainer = connect(
  mapStateToProps,
  mapDispatchToProps()
)(Pokedex)

export default PokedexContainer
