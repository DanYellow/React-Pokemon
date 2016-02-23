var React    = require('react');

/** @jsx React.DOM */
var SearchBar = React.createClass({
  getInitialState: function() {
    return { filterText: 'Hello!' };
  },
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },

  submit: function(e) {
    e.preventDefault();
  },

  render: function() { 
    return (
      <form>
        <input type="text" placeholder="Search..." 
               className="pkmn-searchbar" value={ this.props.filterText }
               defaultValue="Pikachuchu"
               ref="filterTextInput" 
               onChange={this.handleChange} onSubmit={this.submit}/>
      </form>
    );
  } 
});

module.exports = SearchBar;
