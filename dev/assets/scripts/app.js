var React    = require('react');
var ReactDOM = require('react-dom');


var Pokedex  = require('./pokedex');
var SearchBar = require('./search-bar');
var Modal  = require('./modal');

var PokedexContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      pokemon: {}
    };
  },

  handleUserInput: function(filterText, pokemon) {
    this.setState({
      filterText: filterText
    });
    console.log('handleUserInput', pokemon);
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Pokedex filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Modal pokemon={this.state.pokemon} />
      </div>
    );
  }
});

ReactDOM.render(
  <PokedexContainer />,
  document.getElementById('pokedex-container')
); 
