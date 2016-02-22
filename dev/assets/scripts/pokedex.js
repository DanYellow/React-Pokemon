var React   = require('react');
var $       = require('jquery');
var _       = require('underscore');

var Helpers = require('./utils');
var Pokemon = require('./pokemon');
var Modal   = require('./modal');
var Loader  = require('./loader');


/** @jsx React.DOM */
var Pokedex = React.createClass({displayName: 'Pokedex',
  /**
   * REACT METHODS
   */
  // Lifecycle methods
  getInitialState: function() {
    var kantoRange  = { 'name': 'kanto', 'range': [1, 151] };
    var johtoRange  = { 'name': 'johto', 'range': [152, 251] };
    var hoennRange  = { 'name': 'hoenn', 'range': [252, 386] };
    var sinnohRange = { 'name': 'sinnoh', 'range': [387, 493] };
    var unysRange   = { 'name': 'unys', 'range': [494, 649] };
    var kalosRange  = { 'name': 'kalos', 'range': [650, 721] };


    var regions = [kantoRange, johtoRange, hoennRange, sinnohRange, unysRange, kalosRange];

    return {
      data: [],
      filterText: '',
      isLoading: true,
      regions: regions
    };
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: 'http://pokeapi.co/api/v1/pokedex/1/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data: this.sanitizeWSDatas(data.pokemon) });
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },
  componentDidMount: function() {
    console.log("pokédex loaded");
  },
  componentWillMount: function () {
    this.loadCommentsFromServer();
    console.log('Pokédex set');
  },
  /**
   * An utiliy method to render aPokmon
   * @return {[type]} [description]
   */
  renderPokemon: function(obj) {
    return <Pokemon key={obj.index} name={obj.pokemon.name} idDex={obj.pokemon.idDex} region={obj.pokemon.region}></Pokemon>
  },
  render: function() {
    var _this = this;

    var pokemonNodes = [];
    var pokemonFiltered = [];
    
    if (this.state.data.length) {
      var searchValue = this.props.filterText.toLowerCase();
      var pokemonName = null;
      var obj = {};

      pokemonFiltered = this.state.data.filter(function(pokemon, index) {
        pokemonName = pokemon.name.toLowerCase();


        // #######  #####  ####### #     # #######    #     # ####### ######  ####### 
        //    #    #     # #       #     # #     #    ##   ## #     # #     # #       
        //    #    #       #       #     # #     #    # # # # #     # #     # #       
        //    #     #####  #####   ####### #     #    #  #  # #     # #     # #####   
        //    #          # #       #     # #     #    #     # #     # #     # #       
        //    #    #     # #       #     # #     #    #     # #     # #     # #       
        //    #     #####  ####### #     # #######    #     # ####### ######  #######
        if ( searchValue === "tseho" && pokemon.idDex <= 151 ) {
          return true;
        }

        if (pokemonName.indexOf(searchValue) > -1 || pokemon.idDex.indexOf(searchValue) > -1 ) {
          return true;
        };
        return false;
      });
   
      pokemonNodes = pokemonFiltered.map(function(pokemon, index) {        
        obj.index = index;
        obj.pokemon = pokemon;

        return _this.renderPokemon(obj);
      });

      return (
        <div>
          <p className="nb-results">{ pokemonNodes.length} results</p>
          <ul className="list-unstyled pokedex">
            {pokemonNodes}
          </ul>
        </div>
      );
    } else {
      return (
        <Loader />
      );
    }

    
  },

  sanitizeWSDatas: function (datas, region) {
    var _this = this;
    var pkmnArray = datas.map(function(pkmn, index) {
      var idDex = Helpers.idDex(pkmn);
      pkmn['idDex'] = idDex;
      pkmn['sprite'] = `http://pokeapi.co/media/img/${idDex}.png`
      
      // We assignate to the Pokemon its regions (aka his generation)
      _.each(_this.state.regions, (val) => {
        if (Helpers.inRange(idDex, val.range[0], val.range[1])) {
          pkmn['region'] = val.name;
          return true;
        };
      });

      return pkmn;
    });

    // We remove extra transformations (Mega-Evolutions, Forms-A/B/C/Whatever)
    pkmnArray = pkmnArray.filter(function(pkmn) {
      if (pkmn['idDex'] > 721) {
        return false;
      } else {
        return true;
      }
    });

    // order pokemon id
    pkmnArray = pkmnArray.sort(function(a, b) {
        return a.idDex - b.idDex;
    });

    return pkmnArray;
  } 
});


module.exports = Pokedex;