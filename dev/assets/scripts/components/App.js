import React from 'react'

// import AddTodo from '../containers/AddTodo'
// import ListTodo from '../containers/ListTodo'
import Pokedex from '../containers/Pokedex'
import SearchBar from '../containers/SearchBar'
import PokemonDetails from '../containers/PokemonDetails'

var styles = require('../../stylesheets/main.css');


class App extends React.Component {
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

export default App