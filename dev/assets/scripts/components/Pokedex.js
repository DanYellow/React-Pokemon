import React from 'react'

import { fetchPkmn } from '../actions'
import PokedexItem from '../containers/PokedexItem'
import SearchBar from '../containers/SearchBar'

export default class Pokedex extends React.Component {
  constructor (props) {
    super(props);

    this.lastIndexDex = 347;
    this.maxIndexDex = 721; //721;
    // Debug mode | Work with only one datas
    this.activateInfiniteScroll = true;

    this.bindEvents(this)
  }

  bindEvents () {
    // window.addEventListener('scroll', this.scrollListener.bind(this));
  }

  componentWillMount() {
    for (var i = 1; i < this.lastIndexDex; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  scrollListener () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (this.lastIndexDex >= this.maxIndexDex || this.activateInfiniteScroll == false) {
        return;
      }

      for (var i = this.lastIndexDex; i < this.lastIndexDex + 5; i++) {
        this.props.dispatch(fetchPkmn(i));
      }
      this.lastIndexDex += 5;
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
