import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'


import { searchPkmn } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    searchPkmn: () => dispatch(searchPkmn()),
  }

}

// console.log(mapDispatchToProps())

var SearchBarContainer = connect(mapDispatchToProps)(SearchBar)

export default SearchBarContainer
