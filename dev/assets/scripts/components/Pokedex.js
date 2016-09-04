import React from 'react'

var styles = require('../../stylesheets/main.css');

console.log(styles)

import { fetchPkmn } from '../actions'

class Pokedex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    for (var i = 1; i < 4; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  render() {
    return (
        <ul>
          {this.props.pkmns.map(pkmn =>
            <li key={pkmn.id}>{pkmn.datas.name}</li>
          )}
        </ul>
    );
  }
}


Pokedex.propTypes = {
  pkmns: React.PropTypes.array.isRequired
}

export default Pokedex