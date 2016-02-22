var React    = require('react');
var classNames = require('classnames');


/** @jsx React.DOM */
var Pokemon = React.createClass({
  propTypes: {
    // If the type of `name` doesn't match React throws an error. Hourra !
    name: React.PropTypes.string
  },
  componentDidMount: function() {
  },
  handleClick: function(event) {
    console.log('irgjierger');
  },
  render: function() {
    return (
      <li className={classNames('pokedex-entry', this.props.region)} onClick={this.handleClick}>
        <a className="pokedex-entry__pkmn">
          <img src={"http://pokeapi.co/media/img/" + this.props.idDex + ".png"} height="90" />
          <p>
            <span className="pkmn-idDex">#{ this.props.idDex } </span>
            <span className="pkmn-name">{ this.props.name }</span>
          </p>
        </a>
      </li>
    );
  } 
});

module.exports = Pokemon;
