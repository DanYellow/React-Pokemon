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
  render: function() { 
    return (
      <form>
        <input type="text" placeholder="Search..." 
               className="pkmn-searchbar" value={ this.props.filterText }
               defaultValue="Pikachuchu"
               ref="filterTextInput" onChange={this.handleChange}
        />
      </form>
    );
  } 
});

module.exports = SearchBar;
