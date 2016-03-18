var EventEmitter   = require('events').EventEmitter;
var assign         = require('object-assign');
var Request        = require('superagent');

var AppDispatcher  = require('./dispatcher');
var ActionEvent    = require('./list-actions');
var PokemonManager = require('./pokemon-manager');


var Store = assign({}, EventEmitter.prototype, {
    emitChange: function () {
      this.emit('change');
    },

    pkmn: {},
    pokedex: [],
    isLoading: false,
    showModal: false,
    filterText: '',

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }
});

var ModalManager = {
  loaded: function () {
    Store.isLoading = false;
    Store.emitChange();
  }
}

var APIManager = {
  fetchPkmn: function(idDex) {
    // Store.isLoading = true;
    // Store.showModal = false;
    // Store.emitChange();
 
    Request
      .get(`https://pokeapi.co/api/v1/pokemon/${idDex}/`)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          console.error('fetchPkmn', err, res);
        };
        if (err || !res.ok) {
          alert('Oh no! error');
        } else {
          var pkmn = res.body;
          var pkmnDatas = PokemonManager.compute(pkmn);
          Store.pkmn = pkmnDatas;

          Store.isLoading = false;
          Store.showModal = true;
          Store.emitChange();
       }
      }.bind(this));
  },

  fetchPokedex: function() {
    Store.isLoading = true;
    Store.emitChange();
    
    Request
      .get('https://pokeapi.co/api/v1/pokedex/1/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          console.error('fetchPokedex', err, res);
        };
        if (err || !res.ok) {
          alert('Oh no! error');
        } else {
          var pokedexDatas = res.body.pokemon;
          Store.pokedex = pokedexDatas;

          Store.isLoading = false;
          Store.showModal = false;
          Store.emitChange();
       }
      }.bind(this));
  }
}

/**
 * Event dispatcher manager
 * @param  {[Object]} payload
 * @return {Bool} true - It's a promise it should return something
 */
AppDispatcher.register( function( payload ) {
  var action = payload.action;
  var datas  = action.datas;
  
  switch(action.actionType){
    case ActionEvent.SELECT_PKMN:
      APIManager.fetchPkmn(datas);
      break;

    case ActionEvent.SHOW_POKEDEX:
      APIManager.fetchPokedex();
      break;

    case ActionEvent.LAST_ITEM_RENDERED:
      Store.isLoading = false;
      Store.emitChange();
      break;

    case ActionEvent.MODAL_LOADED:
      // ModalManager.loaded();
      break;

    case ActionEvent.INPUT_VALUE_CHANGED:
      Store.filterText = datas;
      Store.showModal = false;
      Store.emitChange();
      break;

    default:
      return true;
  }


  return true;
}); 



module.exports = Store;