import React from 'react'
import { connect } from 'react-redux'

import PokedexItem from '../components/PokedexItem'

var PokedexItemContainer = connect()(PokedexItem)

export default PokedexItemContainer
