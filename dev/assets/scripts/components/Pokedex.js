import React from 'react'
import uuid from 'node-uuid'

import PokedexItem from '../containers/PokedexItem'
import SearchBar from '../containers/SearchBar'

export default class Pokedex extends React.Component {
  constructor (props) {
    super(props);

    this.lastIndexDex = 25;
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
  }

  render() {
    let pkmnsSrc = this.props.pkmns;
    let { searchTerm, filteredPkmns } = this.props;
    if (filteredPkmns.length || searchTerm !== '') {
      pkmnsSrc = this.props.filteredPkmns;
    }
    
    return (
        <div className="pokedex__container">
          <SearchBar />
          { this.props.isLoading && this._renderLoading(pkmnsSrc) }
          { (filteredPkmns.length > 0 && !this.props.isLoading) && this._renderPokemon(pkmnsSrc) }
          { (filteredPkmns.length == 0 && searchTerm !== '') && this._renderNoResultScreen(pkmnsSrc) }
        </div>
    );
  }

  _renderNoResultScreen () {
    const url =  require('./../../images/pokedex-no-results.gif');
    return (
      <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img width={130} src={url} />
        <figcation>No results</figcation>
      </figure>
    )
  }

  _renderLoading () {
    const url =  require('./../../images/pika-loader-mini.gif');
    return (
      <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img width={130} src={url} />
        <figcation>Loading</figcation>
      </figure>
    )
  }

  _renderPokemon(datas) {
    return ( 
      <ul className="pokedex">
        {datas.map(pkmn =>
          <PokedexItem key={uuid.v1()} datas={pkmn.datas} />
        )}
      </ul> 
    )
  }
}


Pokedex.propTypes = {
  filteredPkmns: React.PropTypes.array.isRequired,
  pkmns: React.PropTypes.array.isRequired,
  searchTerm: React.PropTypes.string,
}

// this.state.hasDatas && 
