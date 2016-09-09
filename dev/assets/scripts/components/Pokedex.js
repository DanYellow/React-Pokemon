import React from 'react'

import { fetchPkmn } from '../actions'
import PokedexItem from './PokedexItem'

var styles = require('../../stylesheets/main.css');

// console.log(styles)


class Pokedex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    for (var i = 1; i < 10; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  render() {
    return (
        <ul className="pokedex">
          {this.props.pkmns.map(pkmn =>
            <PokedexItem key={pkmn.id} datas={pkmn.datas} />
          )}
        </ul>
    );
  }
}


Pokedex.propTypes = {
  pkmns: React.PropTypes.array.isRequired
}

export default Pokedex