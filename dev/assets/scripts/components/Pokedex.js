import React from 'react'

import { fetchPkmn } from '../actions'
import PokedexItem from '../containers/PokedexItem'

export default class Pokedex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    for (var i = 1; i < 50; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  render() {
    return (
        <div className="pokedex__container">
          <ul className="pokedex">
            {this.props.pkmns.map(pkmn =>
              <PokedexItem key={pkmn.id} datas={pkmn.datas} />
            )}
          </ul>
        </div>
    );
  }
}


Pokedex.propTypes = {
  pkmns: React.PropTypes.array.isRequired
}
