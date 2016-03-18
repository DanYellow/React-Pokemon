var React         = require('react');
var classNames    = require('classnames');
var $             = jQuery = require('jquery');
var assign        = require('object-assign');
var _             = require('underscore');

var Link          = require('react-router').Link;



var AppDispatcher = require('./dispatcher');
var Actions       = require('./actions');


var PokemonSprite = require('./pokemon-sprite');




var endRenderingLastItem = function(_this) {
  // The last pokemon is rendered
  // _this.props.loadingDelegate(false);
  // Actions.lastPkmnRendered();
}

var endRendering = _.debounce(endRenderingLastItem, 1000);


/** @jsx React.DOM */
var Pokemon = React.createClass({
  propTypes: {
    // If the type of `name` doesn't match React throws an error. Hourra !
    name: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      style: {}
    };
  },
  
  componentDidMount: function() {
    // endRendering(this);
  },

  componentWillReceiveProps: function() {
    // console.log('gregerger');
  },

  pokemonDelegate: function() {
    endRendering(this);
  },

  render: function() {
    var srcSprite = `http://pokeapi.co/media/sprites/pokemon/${this.props.datas.idDex}.png`;

    return (
      <li style={this.props.size}
      className={classNames('pokedex-entry', {'last-pkmn': this.props.datas.isLastRegionPkmn}, this.props.datas.region)}>
        <div className={classNames('pokedex-entry__pkmn-container')}>
          <Link to={'pkmn/' + this.props.datas.idDex} 
          /* activeStyle={{ backgroundColor: "rgba(0, 0, 0, .25)"}} */
          className="pokedex-entry__pkmn">
            <PokemonSprite src={srcSprite} pokemonDelegate={this.pokemonDelegate} />
            <p>
              <span className="pkmn-idDex">#{ this.props.datas.idDex } { this.props.datas.isLast }</span>
              <span className="pkmn-name">{ this.props.datas.name }</span> 
            </p> 
          </Link>
        </div>
      </li>
    );
  } 
});


module.exports = Pokemon;
