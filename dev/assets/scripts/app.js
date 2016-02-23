var React     = require('react');
var ReactDOM  = require('react-dom');
var $         = jQuery = require('jquery');
var bootstrap = require('bootstrap');


var Pokedex   = require('./pokedex');
var SearchBar = require('./search-bar');
var Modal     = require('./modal');

window.maxIdDex = 718;

var PokedexContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      pokemon: {},
      isLoading: true
    };
  },

  handleUserInput: function(filterText, pokemon) {
    this.setState({
      filterText: filterText
    });
  },

  pkmnClicked: function(pkmn) {
    this.setState({
      pokemon: pkmn
    });

    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Pokedex filterText={this.state.filterText} onUserInput={this.pkmnClicked} />
        <Modal pokemon={this.state.pokemon} ref='modal' />
      </div>
    );
  }
});

ReactDOM.render(
  <PokedexContainer />,
  document.getElementById('pokedex-container')
); 
