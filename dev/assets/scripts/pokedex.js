var React   = require('react');
var $       = require('jquery');
var _       = require('underscore');

var Helpers = require('./utils');
var Pokemon = require('./pokemon');
var Modal   = require('./modal');


/** @jsx React.DOM */
var Pokedex = React.createClass({displayName: 'Pokedex',
  /**
   * REACT METHODS
   */
  // Lifecycle methods
  getInitialState: function() {
    return {
      data: [],
      filterText: ''
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
  render: function() {
    var _this = self;

    var pokemonNodes = [];
    
    if (this.state.data.length) {
      var searchValue = this.props.filterText.toLowerCase();
      var pokemonName = null;

      pokemonNodes = this.state.data.map(function(pokemon, index) {
        pokemonName = pokemon.name.toLowerCase();


        
        // #######  #####  ####### #     # #######    #     # ####### ######  ####### 
        //    #    #     # #       #     # #     #    ##   ## #     # #     # #       
        //    #    #       #       #     # #     #    # # # # #     # #     # #       
        //    #     #####  #####   ####### #     #    #  #  # #     # #     # #####   
        //    #          # #       #     # #     #    #     # #     # #     # #       
        //    #    #     # #       #     # #     #    #     # #     # #     # #       
        //    #     #####  ####### #     # #######    #     # ####### ######  ####### 
                                                                                   
        if ( searchValue === "tseho" && pokemon.idDex <= 151 ) {
          return <Pokemon key={index} name={pokemon.name} idDex={pokemon.idDex}></Pokemon>;
        };

        if (pokemonName.indexOf(searchValue) === -1 && pokemon.idDex.indexOf(searchValue) === -1 ) {
          return;
        };

        return (
          <Pokemon key={index} name={pokemon.name} idDex={pokemon.idDex}></Pokemon>
        );
      });
      console.log("okk");
    } else {
      console.log('loading...');
    }
    
    return (
      <ul className="list-unstyled pokedex">
        {pokemonNodes}
      </ul>
    );
  },

  sanitizeWSDatas: function (datas, region) {
    var pkmnArray = datas.map(function(pkmn, index) {
      var idDex = Helpers.idDex(pkmn);
      pkmn["idDex"] = idDex;
      pkmn["sprite"] = `http://pokeapi.co/media/img/${idDex}.png`
      
      // We assignate to the Pokemon its regions (aka his generation)
      _.each(self.regions, (val) => {
        if (Helpers.inRange(idDex, val.range[0], val.range[1])) {
          pkmn["region"] = val.name;
          return true;
        };
      });

      return pkmn;
    });

    // We remove extra transformations (Mega-Evolutions, Forms-A/B/C/Whatever)
    pkmnArray = pkmnArray.filter(function(pkmn) {
      if (pkmn["idDex"] > 721) {
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