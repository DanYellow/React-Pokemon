var React    = require('react');
// var $         = jQuery = require('jquery');

/** @jsx React.DOM */
var SearchBar = React.createClass({
  getInitialState: function() {
    return { filterText: 'Hello!' };
  },

  handleChange: function(e) {
    this.props.onUserInput(
      e.currentTarget.value
    );
  },

  submit: function(e) {
    e.preventDefault();
  },

  render: function() { 
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Search..." 
               className="pkmn-searchbar" value={ this.props.filterText }
               defaultValue="Pikachuchu"
               onChange={this.handleChange}/>
      </form>
    );
  } 
});

module.exports = SearchBar;
