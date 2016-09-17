export class Utils {
  /**
   * Get color for type
   * @param  {String} type Type of pokemon
   * @return {String}      Color associated to the type
   */
  static typeColor(type) {
    var color = '';
    switch (type) {
      case 'poison':
        color = 'purple';
        break;
      case 'grass':
        color = '#77c84f';
        break;
      case 'fire':
        color = '#f07f2f';
        break;
      case 'water':
        color = 'blue';
        break;
      case 'normal':
        color = '#a7a777';
        break;
      case 'bug':
        color = '#a7b71f';
        break;
      case 'ice':
        color = '#97d8d8';
        break;
      case 'steel':
        color = '#b7b7d0';
        break;
      case 'flying':
        color = '#a78ff0';
        break;
      case 'fighting':
        color = '#bf2f27';
        break;
      case 'fairy':
        color = '#e4a1e1';
        break;
      case 'dragon':
        color = '#6f37f8';
        break;
      case 'electric':
        color = '#f8d02f';
        break;
      case 'psychic':
        color = '#f85787';
        break;
      case 'ground':
        color = '#e0bf67';
        break;
      case 'ghost':
        color = '#6f5797';
        break;
      case 'dark':
        color = '#333';
        break;
      case 'rock':
        color = '#b79f37';
        break;
      default:
        color = 'black'
        break;
    }
    return color;
  }

  /**
   * Convert unit
   * @param  {String:String, String:Number} obj Object of value to convert
   * @return {Number}     Value converted
   */
  static unitConvertion(obj) {
    var val = 42;
    switch (obj.unit) {
      case 'weight':
        val = obj.value * (1/0.453592);
        break;
      case 'length':
        val = obj.value * (1/30.48) * 100;
        break;
      default:
        val = 42;
        break;
    }
    return val.toFixed(2);
  }
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
