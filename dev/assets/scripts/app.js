var React    = require('react');
var ReactDOM = require('react-dom');
var $        = require('jquery');
var _        = require('underscore');

var Helpers  = require('./utils');


/** @jsx React.DOM */
var Pokedex = React.createClass({displayName: 'Pokedex',
  /**
   * REACT METHODS
   */
  // Lifecycle methods
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: 'http://pokeapi.co/api/v1/pokedex/1/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('ok')
        this.setState({ data: this.sanitizeWSDatas(data.pokemon) });
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },
  componentDidMount: function() {
  },
  componentWillMount: function () {
    this.loadCommentsFromServer();
    console.log('Pokédex set');
  },
  render: function() {
    var pokemonNodes = [];
    if (this.state) {
      pokemonNodes = this.state.data.map(function(pokemon, index) {
        return (
          <Pokemon key={index} name={pokemon.name} idDex={pokemon.idDex}></Pokemon>
        );
      });
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
    console.log("sanitizeWSDatas");
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

var Pokemon = React.createClass({
  render: function() {
    return (
      <li className="pokedex-entry">
        <a className="pokedex-entry__pkmn">
          <img src={"http://pokeapi.co/media/img/" + this.props.idDex + ".png"} height="90" />
          <p>
            <span className="pkmn-idDex"></span>
            <span className="pkmn-name">{ this.props.name }</span>
          </p>
        </a>
      </li>
    );
  }
});


ReactDOM.render(
  <Pokedex />,
  document.getElementById('content')
);