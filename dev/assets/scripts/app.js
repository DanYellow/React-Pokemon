var React    = require('react');
var ReactDOM = require('react-dom');


var Pokedex  = require('./pokedex');
var SearchBar = require('./search-bar');

var PokedexContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Pokedex filterText={this.state.filterText} />
      </div>
    );
  }
});

ReactDOM.render(
  <PokedexContainer />,
  document.getElementById('pokedex-container')
); 
