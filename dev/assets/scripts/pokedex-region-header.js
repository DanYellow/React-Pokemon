var React      = require('react');
var classNames = require('classnames');


/** @jsx React.DOM */
var PokedexRegionHeader = React.createClass({
  render: function() { 
    return (
      <li className={classNames('pokedex-header', this.props.name)}>
        {this.props.name + ' ' }
        ({this.props.range[0]} - {this.props.range[1]})
      </li>
    );
  } 
});

module.exports = PokedexRegionHeader;
