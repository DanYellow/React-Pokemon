import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPkmn } from '../actions'
import Pokedex from '../components/Pokedex'

function mapStateToProps(state) {
  return {
    pkmns: state.pkmns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchPkmn, dispatch)
  }
}

var PokedexContainer = connect(mapStateToProps)(Pokedex)

export default PokedexContainer
