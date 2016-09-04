import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'


var SearchBarContainer = connect()(SearchBar)

export default SearchBarContainer
