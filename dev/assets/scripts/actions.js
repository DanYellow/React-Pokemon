var AppDispatcher = require('./dispatcher');
var ActionEvent = require('./list-actions');

var Actions = {
  pkmnSelected: function(item){
    AppDispatcher.handleAction({
      actionType: ActionEvent.SELECT_PKMN,
      datas: item
    });
  },

  showPokedex: function(){
    AppDispatcher.handleAction({
      actionType: ActionEvent.SHOW_POKEDEX,
      datas: {}
    });
  },

  lastPkmnRendered: function() {
    AppDispatcher.handleAction({
      actionType: ActionEvent.LAST_ITEM_RENDERED,
      datas: {}
    });
  },

  modalLoaded: function () {
    AppDispatcher.handleAction({
      actionType: ActionEvent.MODAL_LOADED,
      datas: {}
    });
  }
};

module.exports = Actions;
