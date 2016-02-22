var React     = require('react');
var $         = require('jquery');
var _         = require('underscore');

var Helpers   = require('./utils');
var Pokemon   = require('./pokemon');


/** @jsx React.DOM */
var Modal = React.createClass({displayName: 'Modal',
  /**
   * REACT METHODS
   */
  // Lifecycle methods
  getInitialState: function() {
    return {
      data: [],
      filterText: ''
    };
  },
  componentDidMount: function() {
    console.log("pokédex loaded");
  },
  componentWillMount: function () {
    console.log('Pokédex set');
  },
  render: function() {
    var pokemonNodes = [];
    console.log(this.state, this.state.filterText);
    if (this.state.data.length) {
      pokemonNodes = this.state.data.map(function(pokemon, index) {
        return (
          <Pokemon key={index} name={pokemon.name} idDex={pokemon.idDex}></Pokemon>
        );
      });
      console.log("okk");
    } else {
      console.log('loading...');
    }
    
    return (
      <ul className="list-unstyled pokedex">
        {pokemonNodes}
      </ul>
    );
  } 
});


module.exports = Modal;