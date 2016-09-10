import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import PokemonDetails from '../components/PokemonDetails'

function mapStateToProps(state) {
  return {
    pkmn: state.pkmn
  }
}


var PokemonDetailsContainer = connect(mapStateToProps)(PokemonDetails)

export default PokemonDetailsContainer
