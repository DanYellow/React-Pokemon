var _       = require('underscore');
var Helpers = require('./utils');

/*
  @PokemonManager
  @desc : Manage the pokemon datas from the server
 */

var PokemonManager = (function() {
  /**
   * @desc get Pokemon's types
   *
   * @returns {Array}
   */

  var types = function(typesArray) {
    return _.pluck(typesArray, 'name');
  };


  /**
   * @desc get Pokemon's moves
   *
   * @returns {Array}
   */

  var moves = function(moves) {
    var tempMoves = _.mapObject(_.groupBy(moves, 'learn_type'), function(moves) {
      
      return _.sortBy(moves, 'level');
    });

    return tempMoves;
  };


  /**
   * @desc get Pokemon's evolutions
   *
   * @returns {Array}
   */

  var evolutions = function(evolutions) {
    var idDex = 0;

    var tempArray = _.map(evolutions, function(evol) {
      idDex = Helpers.idDex(evol); 
      evol.sprite = `http://pokeapi.co/media/img/${idDex}.png`;
      evol.idDex = idDex;

      return evol;
    });

    return _.sortBy(tempArray, 'idDex');
  };


  /**
   * @desc get Pokemon's region origin aka its generation
   *
   * @returns {String}
   */

  var region = function(idDex) {
    var region;
    _.each(this.regions, (val) => {
      if (Helpers.inRange(idDex, val.range[0], val.range[1])) {
        region = val.name;
        return true;
      };
    });

    return region;
  };


  /**
   * @desc get Pokemon abilities ("Talents" (Gen. 6+) or "Capacités spéciales" (Gen 3-5) in French)
   *
   * @returns {Array}
   */

  var abilities = function(abilities) {
    return _.pluck(abilities, 'name');
  };

 //this is our instance holder
  var instance;

 //this is an emulation of static variables and methods
  var _static = {

   //It returns a singleton instance of a singleton object
    getInstance: function (){
      if (instance === undefined) {
        instance = new PokedexManagerSingleton();
      }
      return instance;
    },

    /**
     * Transform pokemon Datas
     * @param  {[type]} datas [description]
     * @return {[type]}       [description]
     */
    compute: function(datas) {
      // console.dir(datas);
      datas.moves      = moves(datas.moves);
      
      var idDex        = datas.national_id;
      datas.sprite     = `http://pokeapi.co/media/img/${idDex}.png`
      
      datas.evolutions = evolutions(datas.evolutions);
      // datas.region     = region(idDex);
      datas.abilities  = abilities(datas.abilities);


      return datas;
    }
  };
  return _static;
})();


module.exports = PokemonManager; 


