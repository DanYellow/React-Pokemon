'use strict';

/**
* @class : Helpers
* @classdesc : Contains every transversal methods of the project 
* It's better to call it without instantiate it
* 
**/

module.exports = {
  /**
   * @function inRange
   * @description Indicate if the value is between range
   *
   * @param {Number} value : value to test
   * @param {Number} minValue : Min value allowed
   * @param {Number} maxValue : Max value allowed 
   * 
   * @return Boolean
  */
  inRange: function(value, minValue, maxValue) {
    return value >= minValue && value <= maxValue;
  },

  /**
   * @function idDex
   * @description Get the national id dex of the given Pokemon
   *
   * @param {Object} pknm : Pokemon datas from server
   * 
   * @return Number
  */
  idDex: function (pkmn) {
    return pkmn["resource_uri"].split('/').filter(Boolean)[pkmn["resource_uri"].split('/').filter(Boolean).length - 1];
  }
};



Array.prototype.CIindexOf = function (searchElement, fromIndex) {
    return this.map(function (value) {
        return value.toLowerCase();
    }).indexOf(searchElement.toLowerCase(), fromIndex);
};