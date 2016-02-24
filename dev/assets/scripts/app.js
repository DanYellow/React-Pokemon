var React     = require('react');
var ReactDOM  = require('react-dom');
var $         = jQuery = require('jquery');

var Loader    = require('./loader');


var Pokedex   = require('./pokedex');
var SearchBar = require('./search-bar');
var Modal     = require('./modal');

window.maxIdDex = 718;

var PokedexContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      pokemon: {},
      isLoading: true,
      haveToShowModal: false
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },

  pkmnClicked: function(pkmn) {
    this.setState({
      pokemon: pkmn,
      haveToShowModal: true
    });

    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },

  isLoading: function(isLoadingBOOL) {
    this.setState({
      isLoading: isLoadingBOOL
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Pokedex filterText={this.state.filterText} appDelegate={this.pkmnClicked} loadingDelegate={this.isLoading}/>
        
        <Modal pokemon={this.state.pokemon} loadingDelegate={this.isLoading} isShowing={this.state.haveToShowModal} />

        {this.state.isLoading ? <Loader /> : null}
      </div>
    );
  }
});

ReactDOM.render(
  <PokedexContainer />,
  document.getElementById('pokedex-container')
); 
