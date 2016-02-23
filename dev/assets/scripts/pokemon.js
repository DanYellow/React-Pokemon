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
    this.props.eventDelegate(this.props); 
  },
  render: function() {
    return (
      //
      <li className={classNames('pokedex-entry', {'last-pkmn': this.props.datas.isLastRegionPkmn}, this.props.datas.region)} onClick={this.handleClick}>
        <a className="pokedex-entry__pkmn">
          <img src={"http://pokeapi.co/media/img/" + this.props.datas.idDex + ".png"} height="90" />
          <p>
            <span className="pkmn-idDex">#{ this.props.datas.idDex } { this.props.datas.isLast }</span>
            <span className="pkmn-name">{ this.props.datas.name }</span> 
          </p> 
        </a>
      </li>
    );
  } 
});

module.exports = Pokemon;
