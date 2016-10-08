import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import uuid from 'node-uuid'

import { fetchPkmn } from '../actions'

import { Utils } from '../utils'


import PkmnCry from './PkmnDetailsComponents/PkmnCry'
import PkmnMeasurement from './PkmnDetailsComponents/PkmnMeasurement'
import PkmnSprite from './PkmnDetailsComponents/PkmnSprite'
import GameVersion from './PkmnDetailsComponents/GameVersion'
import PkmnTableTypes from './PkmnDetailsComponents/PkmnTableTypes'

export default class PokemonDetails extends React.Component {
  constructor (props) {
    super(props);
  }

  static defaultProps () {
    return {
      pkmn: { }
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (!this.props.pkmn.datas) { return true; }

    return nextProps.pkmn.datas.id !== this.props.pkmn.datas.id;
  }
  
  render() {
    const pkmnDatas = this.props.pkmn.datas;

    if (!pkmnDatas) { return null; }

    this.hasDatas = !_.isEmpty(this.props.pkmn);
    this.datas = (this.hasDatas) ? this.props.pkmn.datas : {};
    


    return (
      <article id="pkmn-details" className={classNames({'show': this.hasDatas })}>
        <section>
          
          
          <header>
            <div style={{flex:0.25, alignItems: 'center'}}>
              <PkmnSprite image={ pkmnDatas.sprites.front_default } />
              <PkmnSprite image={ pkmnDatas.sprites.front_female } />
            </div>
            <section>
              <h3>#{this.datas.id} | {this.datas.name}</h3>
              <ul className="list-unstyled pkmn-types">
                {this.datas.typesString.map((type, index) =>
                  <li className={classNames(type.replace('-border',''))} key={uuid.v1()}>{type.replace('-border','')}</li>
                )}
              </ul>
              <PkmnMeasurement {...{weight: pkmnDatas.weight, height: pkmnDatas.height }} />
            </section>
          </header>
          
          <h3>Type effectiveness</h3>
          <PkmnTableTypes weaknessAndImmune={Utils.getWeaknessAndImmunes(this.datas.typesString.join('/'))} />

          <h3>Appears in </h3>
          <div style={Styles.gameCoversContainer}>
            {this.datas.game_indices.map((data, index) =>
              <GameVersion name={data.version.name} key={uuid.v1()}/>
            )}
          </div>

          <PkmnCry id={this.datas.id} />
        </section>
      </article>
    );
  }
}


const Styles = {
  gameCoversContainer: {
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    padding:5
  }
}
