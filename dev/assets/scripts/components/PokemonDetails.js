import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import { fetchPkmn } from '../actions'


export default class PokemonDetails extends React.Component {
  constructor (props) {
    super(props);

    this.hasDatas = false;
    this.datas = props.pkmn;
  }

  componentWillReceiveProps() {
    console.log('fezfez')
  }

  render() {
    this.hasDatas = !_.isEmpty(this.props.pkmn);
    this.datas = (this.hasDatas) ? this.props.pkmn.datas : {};

    if (!this.datas.typesString) { return null; }
    
    return (
      <article id="pkmn-details" className={classNames({'show': this.hasDatas })}>
        <section>
          <header>
            <h3>{this.datas.name}</h3>
            <ul className="list-unstyled pkmn-types">
              {this.datas.typesString.map((type, index) =>
                <li className={classNames(type.replace('-border',''))} key={index}>{type.replace('-border','')}</li>
              )}
            </ul>
          </header>
        </section>
      </article>
    );
  }
}
