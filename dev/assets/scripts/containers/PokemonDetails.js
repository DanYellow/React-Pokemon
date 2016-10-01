import React from 'react'
import { connect } from 'react-redux'

import PokemonDetails from '../components/PokemonDetails'


function mapStateToProps(state) {
  return {
    pkmn: state.pkmn
  }
}


const PokemonDetailsContainer = connect(mapStateToProps)(PokemonDetails)

export default PokemonDetailsContainer
