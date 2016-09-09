import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _ from 'lodash'

import { fetchPkmn } from '../actions'
import Pokedex from '../components/Pokedex'



const filterPkmns = (pkmns, filter = '') => {
  // console.log(pkmns)
  // hzllo = _.map(pkmns.datas.types, getArrayTypes);

  if (filter.trim() == "") {
    return pkmns;
  } else {
    return pkmns.filter(pkmn => pkmn.datas.name.indexOf(filter) > -1)
  }
}

const getArrayTypes = (types) => {
  console.log(types)
    return _.map(types, 'type.name');
}

function mapStateToProps(state) {
  return {
    pkmns: _.sortBy(filterPkmns(state.pkmns, state.search.text), function(o) { return o.id; })
  }
}

// Crée alias de dispatch
function mapDispatchToProps(dispatch) {
  return fetchPkmn
}

var PokedexContainer = connect(mapStateToProps)(Pokedex)

export default PokedexContainer
