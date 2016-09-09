import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'



import { fetchPkmn } from '../actions'

class PokedexItem extends React.Component {
  constructor (props) {
    super(props);
  }
 // types

  render() {
    var datas = this.props.datas;
    
    return (
        <li className={classNames('pokedex-item' )} >
          <figure>
            <img src={datas.sprites.front_default} />
          </figure>
          <p>{datas.name} | #{datas.id}</p>
        </li>
    );
  }
}


// PokedexItem.propTypes = {
//   pkmns: React.PropTypes.object.isRequired
// }

export default PokedexItem