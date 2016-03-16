var React          = require('react');
var classNames     = require('classnames');
var $              = jQuery = require('jquery');
var assign         = require('object-assign');
var _                   = require('underscore');

var Store = require('./stores');



var AppDispatcher = require('./dispatcher');
var Actions = require('./actions');


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

  // getInitialState: function () {
  //   return {
  //     data: {}
  //   };
  // },
  
  componentDidMount: function() {
    endRendering(this);
  },

  handleClick: function(e) {
    var handlerDatas = this.props.datas;
    var id           = this.props.datas.idDex;

    Actions.pkmnSelected(id);
  },

  pokemonDelegate: function() {
    endRendering(this);
  },

  render: function() {
    var srcSprite = `http://pokeapi.co/media/img/${this.props.datas.idDex}.png`;
    return (
      <li className={classNames('pokedex-entry', {'last-pkmn': this.props.datas.isLastRegionPkmn}, this.props.datas.region)} onClick={this.handleClick}>
        <a className="pokedex-entry__pkmn" href={"#/pkmn/" + this.props.datas.idDex}>
          <PokemonSprite src={srcSprite} pokemonDelegate={this.pokemonDelegate} />
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
