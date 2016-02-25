var React = require('react');

var _     = require('underscore');

// Inspired by http://andrewhfarmer.com/detect-image-load/

var endRenderingLastItem = function(_this) {
  // The last pokemon is rendered
  _this.props.loadingDelegate(false);
}

var endRendering = _.debounce(endRenderingLastItem, 50);


/** @jsx React.DOM */
var PokemonSprite = React.createClass({

  getInitialState: function() {
    return {
      src: 'assets/images/sprite-loader.gif',
      height: 70
    };
  },

  handleImageLoaded: function() {
    // this.props.pokemonDelegate();
    
    // this.setState({
    //   src: this.props.src,
    //   height: 90
    // })
  },
 
  handleImageErrored: function(e) {
    console.log('error in PokemonSprite : ' + e);
  },
  
  render: function() {
    return (
      <img 
        src={this.props.src} height={this.state.height}
        onLoad={this.handleImageLoaded}
        onError={this.handleImageErrored}
      />
    );
  } 
});

module.exports = PokemonSprite;
