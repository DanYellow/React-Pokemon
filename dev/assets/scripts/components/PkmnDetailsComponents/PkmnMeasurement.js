import React from 'react'
import _ from 'lodash'

import { Utils } from '../../utils'

export default class PkmnMeasurement extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const height = (this.props.height * .1).toFixed(2);
    const weight = (this.props.weight * .1).toFixed(2);

    return (
      <p style={Styles.container}>
        Height: { height } m | { Utils.unitConvertion( {'value': height, 'unit': 'length'} ) } ft <br/>
        Weight: { weight } kg | { Utils.unitConvertion( {'value': weight, 'unit': 'weight'} ) } lbs
      </p>
    );
  }
}


const Styles = {
  container: {
    marginTop: 15
  }
}