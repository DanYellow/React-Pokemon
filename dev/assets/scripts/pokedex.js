var React               = require('react');
var ReactDOM            = require('react-dom');
var $                   = jQuery = require('jquery');
var _                   = require('underscore');
var Request             = require('superagent');


var Helpers             = require('./utils');
var Pokemon             = require('./pokemon');
var Loader              = require('./loader');
var PokedexRegionHeader = require('./pokedex-region-header');

var Actions = require('./actions');
var Store = require('./stores');

/** @jsx React.DOM */
var Pokedex = React.createClass({displayName: 'Pokedex',
  /**
   * REACT METHODS
   */ 
  // Lifecycle methods
  getInitialState: function() {
    var kantoRange  = { 'name': 'kanto', 'range': [1, 151], 'generation': 'First generation' };
    var johtoRange  = { 'name': 'johto', 'range': [152, 251], 'generation': 'Second generation' };
    var hoennRange  = { 'name': 'hoenn', 'range': [252, 386], 'generation': 'Third generation' };
    var sinnohRange = { 'name': 'sinnoh', 'range': [387, 493], 'generation': 'Fourth generation' };
    var unysRange   = { 'name': 'unys', 'range': [494, 649], 'generation': 'fifth generation' };
    var kalosRange  = { 'name': 'kalos', 'range': [650, window.maxIdDex], 'generation': 'Sixth generation' };

    var regions = [kantoRange, johtoRange, hoennRange, sinnohRange, unysRange, kalosRange];

    return {
      data: [],
      filterText: '',
      isLoading: true,
      regions: regions,
      count: 0
    };
  },

  loadPokedexDatas: function() {
    Actions.showPokedex();
  },

  componentDidMount: function() {
    this.loadPokedexDatas();

    Store.addChangeListener(this._onChange);
  },

  componentWillMount: function () {
    // console.log('Pokédex set');
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ data: this.sanitizeWSDatas(Store.pokedex) });
  },

  /**
   * An utiliy method to render aPokmon
   * @return {[type]} [description]
   */
  renderPokemon: function(obj, _this, size) {
    return <Pokemon key={obj.index} datas={obj.pokemon} size={size} /> 
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
        if ( searchValue === 'tseho' && pokemon.idDex <= 151 ) {
          return true;
        }


        // Search by region name
        if (pokemon.region === searchValue) {
          return true;
        } 

        // Classic search by Pokemon name or Pokemon's ID dex;
        if (pokemonName.indexOf(searchValue) > -1 || pokemon.idDex.indexOf(searchValue) > -1 ) {
          return true;
        }

        return false;
      });
   
      var lastRegion   = null;
      var regionDatas  = null;
      var size         = {};

      this.state.count = pokemonFiltered.length;
      if (this.state.count > 300) {
        size = {'width': '120px','height': '120px'}
      } else {
        size = {'width': '160px','height': '160px'}
      }

      pokemonFiltered.forEach(function(pokemon, index) {        
        obj.index   = index;
        obj.pokemon = pokemon;

        // If the region name is new, we push a header component
        if (lastRegion !== pokemon.region) {
          regionDatas = _.findWhere(this.state.regions, {'name': pokemon.region});
          pokemonNodes.push(<PokedexRegionHeader name={pokemon.region} key={pokemon.region} regionDatas={regionDatas} />);
        };
        lastRegion = pokemon.region;

        // http://facebook.github.io/react/tips/communicate-between-components.html
        // http://stackoverflow.com/questions/24103072/reactjs-onclick-handler-not-firing-when-placed-on-a-child-component
        // This works only for divs 
        pokemonNodes.push(this.renderPokemon(obj, _this, size));
      }.bind(this));

      return (
        <div>
          <p className="nb-results">{ pokemonFiltered.length } results</p>
          <ul className="list-unstyled pokedex">
            {pokemonNodes}
          </ul>
        </div>
      );
    } else {
      return (
        null
      );
    }
  },

  sanitizeWSDatas: function (datas, region) {
    var _this = this;

    if (_.isEmpty(datas)) {
      return [];
    };

    var pkmnArray = datas.map(function(pkmn, index) {
      var idDex   = Helpers.idDex(pkmn);
      pkmn.idDex  = idDex;
      pkmn.sprite = `http://pokeapi.co/media/img/${idDex}.png`;
      
      // We assignate to the Pokemon its regions (aka his generation)
      _.each(_this.state.regions, (val) => {
        if (Helpers.inRange(idDex, val.range[0], val.range[1])) {
          pkmn.region = val.name;
          // If the extreme boundary is equals to val.range[1] so the pokemon is the last of its region
          pkmn.isLast = (String(idDex) === String(val.range[1])) ? true : false;

          return true;
        };
      });

      return pkmn;
    });

    // We remove extra transformations (Mega-Evolutions, Forms-A/B/C/Whatever)
    pkmnArray = pkmnArray.filter(function(pkmn) {
      if (pkmn.idDex > window.maxIdDex) {
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
