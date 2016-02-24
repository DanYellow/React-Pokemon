var React          = require('react');
var classNames     = require('classnames');
var $              = jQuery = require('jquery');
var assign         = require('object-assign');

var PokemonManager = require('./pokemon-manager');
var Request        = require('superagent');

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
  },

  handleClick: function(e) {
    var handlerDatas = this.props.datas;
    var id           = this.props.datas.idDex;

    console.log(this.props);
    this.props.loadingDelegate(true);

    Request
      .get(`http://pokeapi.co/api/v1/pokemon/${id}/`)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err || !res.ok) {
          alert('Oh no! error');
        } else {
          var pkmn = res.body;
          var pkmnDatas = PokemonManager.compute(pkmn);
          pkmnDatas = assign(pkmnDatas, handlerDatas);

          this.props.pokedexDelegate(pkmnDatas);
       }
      }.bind(this));
  },
  render: function() {
    return (
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
