import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import { detailsPkmn } from '../actions'

export default class PokedexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  pkmnSelected (pkmn, e) {
    e.preventDefault();
    this.props.dispatch(detailsPkmn(pkmn));
  }

  render() {
    var datas = this.props.datas;
    
    return (
      <li className={classNames('pokedex-item', datas.typesString)} >
        <a href="#" onClick={this.pkmnSelected.bind(this, datas)}>
          <figure>
            <img src={datas.sprites.front_default} />
          </figure>
          <p>{datas.name} | #{datas.id}</p>
        </a>
      </li>
    );
  }
}


PokedexItem.propTypes = {
  datas: React.PropTypes.object.isRequired
}