import React from 'react'
import uuid from 'node-uuid'

import PokedexItem from '../containers/PokedexItem'
import SearchBar from '../containers/SearchBar'

export default class Pokedex extends React.Component {
  constructor (props) {
    super(props);

    this.lastIndexDex = 5;
    this.maxIndexDex = 721;
    // Debug mode | Work with only one datas
    this.activateInfiniteScroll = true;

    this.bindEvents(this)

    this.state = {
      hasDatas: true
    }
  }

  bindEvents () {
    // window.addEventListener('scroll', this.scrollListener.bind(this));
  }

  componentWillMount() {
    for (let i = 1; i < this.lastIndexDex; i++) {
      this.props.fetchPkmn(i);
    }

    this.props.loadingPkmn(true)
  }

  scrollListener () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (this.lastIndexDex >= this.maxIndexDex || this.activateInfiniteScroll == false) {
        return;
      }

      for (let i = this.lastIndexDex; i < this.lastIndexDex + 5; i++) {
        this.props.fetchPkmn(i);
      }
      this.lastIndexDex += 5;
    }
  }

  render() {
    let pkmnsSrc = this.props.pkmns;
    // if (this.props.filteredPkmns.length) {
    //   pkmnsSrc = this.props.filteredPkmns;
    // }

    return (
        <div className="pokedex__container">
          <SearchBar />
          {this.state.hasDatas && <ul className="pokedex">
            {pkmnsSrc.map(pkmn =>
              <PokedexItem key={uuid.v1()} datas={pkmn.datas} />
            )}
          </ul>}
        </div>
    );
  }
}


Pokedex.propTypes = {
  pkmns: React.PropTypes.array.isRequired
}
