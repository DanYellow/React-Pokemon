var React    = require('react');
// var $         = jQuery = require('jquery');
// 
var Actions        = require('./actions');
var Store          = require('./stores');

/** @jsx React.DOM */
var SearchBar = React.createClass({
  getInitialState: function() {
    return { filterText: '' };
  },

  _onChange: function(e) {
    this.setState({
      filterText: e.currentTarget.value
    });

    Actions.inputTextChange(e.currentTarget.value);
  },

  submit: function(e) {
    e.preventDefault();
  },

  render: function() { 
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Search..." 
               className="pkmn-searchbar" value={ this.state.filterText }
               defaultValue="Pikachuchu"
               onChange={this._onChange}/>
      </form>
    );
  } 
});

module.exports = SearchBar;
