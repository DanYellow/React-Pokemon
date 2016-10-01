import React from 'react'
import { connect } from 'react-redux'

import { detailsPkmn } from '../actions'

import PokedexItem from '../components/PokedexItem'


const mapDispatchToProps = {
  detailsPkmn
}


const PokedexItemContainer = connect(null, mapDispatchToProps)(PokedexItem)

export default PokedexItemContainer
