import React from 'react'
import { connect } from 'react-redux'


import SearchBar from '../components/SearchBar'
import { searchPkmn } from '../actions'


const mapDispatchToProps = {
  searchPkmn
}


var SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar)

export default SearchBarContainer
