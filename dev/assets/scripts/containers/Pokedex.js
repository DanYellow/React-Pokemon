import React from 'react'
import { connect } from 'react-redux'


import { fetchPkmn, loadingPkmn } from '../actions'
import Pokedex from '../components/Pokedex'
import { getFilteredPokemon } from '../selectors'




function mapStateToProps(state) {
  return {
    pkmns: state.pkmns,
    filteredPkmns: getFilteredPokemon(state),
    searchTerm: state.search,
    isLoading: state.isLoadingPkmn
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
