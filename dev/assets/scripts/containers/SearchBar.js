import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import SearchBar from '../components/SearchBar'

import { searchPkmn } from '../actions'


function mapDispatchToProps() {
  return {
    searchPkmn
  }
}

// const mapDispatchToProp = dispatch => ({
//   actions: bindActionCreators({}, dispatch)
// });

// const mapDispatchToProps = {
//   addTodo
// }

console.log(mapDispatchToProp(), mapDispatchToProps())

var SearchBarContainer = connect(null, mapDispatchToProps())(SearchBar)

export default SearchBarContainer
