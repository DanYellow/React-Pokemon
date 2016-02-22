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
    // console.log('irgjierger', this.props);
    this.props.eventDelegate(this.props); 
  },
  render: function() {
    return (
      // onClick={this.handleClick}
      <li className={classNames('pokedex-entry', {'last-pkmn': this.props.isLastRegionPkmn}, this.props.region)} >
        <a className="pokedex-entry__pkmn">
          <img src={"http://pokeapi.co/media/img/" + this.props.idDex + ".png"} height="90" />
          <p>
            <span className="pkmn-idDex">#{ this.props.idDex } { this.props.isLast }</span>
            <span className="pkmn-name">{ this.props.name }</span> 
          </p> 
        </a>
      </li>
    );
  } 
});

module.exports = Pokemon;
