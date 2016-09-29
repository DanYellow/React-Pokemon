import React from 'react'
import { connect } from 'react-redux'

import { detailsPkmn } from '../actions'

import PokedexItem from '../components/PokedexItem'


const mapDispatchToProps = {
  detailsPkmn
}


var PokedexItemContainer = connect(null, mapDispatchToProps)(PokedexItem)

export default PokedexItemContainer
