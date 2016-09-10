import React from 'react'

import Pokedex from '../containers/Pokedex'
import SearchBar from '../containers/SearchBar'
import PokemonDetails from '../containers/PokemonDetails'

var styles = require('../../stylesheets/main.css');


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div id="container">
          <Pokedex />
          <PokemonDetails />
        </div>
      </div>
    );
  }
}
