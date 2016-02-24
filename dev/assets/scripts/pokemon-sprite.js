var React = require('react');

var _     = require('underscore');



var endRenderingLastItem = function(_this) {
  // The last pokemon is rendered
  _this.props.loadingDelegate(false);
}

var endRendering = _.debounce(endRenderingLastItem, 50);


/** @jsx React.DOM */
var PokemonSprite = React.createClass({

  getInitialState: function() {
    return null;
  },

  handleImageLoaded: function() {
    this.props.pokemonDelegate();
  },
 
  handleImageErrored: function(e) {
    console.log('error in PokemonSprite : ' + e);
  },
  
  render: function() {
    return (
      <img 
        src={this.props.src} height="90"
        onLoad={this.handleImageLoaded}
        onError={this.handleImageErrored}
      />
    );
  } 
});

module.exports = PokemonSprite;
