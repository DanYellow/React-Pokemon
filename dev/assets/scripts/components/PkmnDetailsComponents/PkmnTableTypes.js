import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import uuid from 'node-uuid'

export default class PkmnTableTypes extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    let group = [];
    for (var key in this.props.weaknessAndImmune) {
      group.push({type: key, effetiveness: this.props.weaknessAndImmune[key]})
    }
    
    return (
      <div>
        {this._renderTableEffectiveness(group)}
      </div>
    )
  }

  _renderTableEffectiveness (datas) {
    var template = [];
    var titles = {
      "1x" : "Damaged normally by",
      "2x" : "Weak to",
      "0x" : "Immune to",
      "0.5x" : "Resistant to",
      "0.25x" : "Strongly resistant to"
    }
    for (var coefficient in _.groupBy(datas, 'effetiveness')) {
      template.push(
        <div style={Styles.container} key={uuid.v1()}>
          <p key={uuid.v1()}>{titles[coefficient]} : </p>
          <ul key={uuid.v1()} className="list-unstyled pkmn-types" style={Styles.listType} >
            {_.groupBy(datas, 'effetiveness')[coefficient].map((type, index) =>
              <li className={classNames(type.type)} key={uuid.v1()}>{type.type} | {type.effetiveness}</li>
            )}
          </ul>
        </div>
      )
    }
    return template;
  }
}


const Styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '25px',
    flexDirection: 'column'
  },
  listType: {
    marginTop: 0
  }
}