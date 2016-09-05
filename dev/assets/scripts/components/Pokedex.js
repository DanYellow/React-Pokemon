import React from 'react'

var styles = require('../../stylesheets/main.css');

// console.log(styles)

import { fetchPkmn } from '../actions'

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
            <li className="pokedex-item" key={pkmn.id}>
              <figure>
                <img src={pkmn.datas.sprites.front_default} />
              </figure>
              <p>{pkmn.datas.name}</p>
            </li>
          )}
        </ul>
    );
  }
}


Pokedex.propTypes = {
  pkmns: React.PropTypes.array.isRequired
}

export default Pokedex