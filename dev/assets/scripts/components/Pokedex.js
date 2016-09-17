import React from 'react'

import { fetchPkmn } from '../actions'
import PokedexItem from '../containers/PokedexItem'
import SearchBar from '../containers/SearchBar'

export default class Pokedex extends React.Component {
  constructor (props) {
    super(props);

    this.lastIndexDex = 14;
    this.maxIndexDex = 7; //721;
    // Debug mode | Work with only one datas
    this.activateInfiniteScroll = true;
  }

  componentWillMount() {
    for (var i = 1; i < this.maxIndexDex; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  render() {
    return (
        <div className="pokedex__container">
          <SearchBar />
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
