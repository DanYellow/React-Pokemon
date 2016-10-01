import React from 'react'
import { connect } from 'react-redux'


import SearchBar from '../components/SearchBar'
import { searchPkmn } from '../actions'


function mapStateToProps(state) {
  return {
    pkmns: state.pkmns,
    filteredPkmns: state.filteredPkmns
  }
}

const mapDispatchToProps = {
  searchPkmn
}


var SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default SearchBarContainer
