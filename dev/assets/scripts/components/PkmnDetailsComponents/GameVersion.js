import React from 'react'
import _ from 'lodash'


export default class GameVersion extends React.Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    const url =  require(`./../../../images/games_cover/${this.props.name}.png`);
    return (
      <figure style={Styles.gameVersion}>
        <img width={130} src={url} />
      </figure>
    ) 
  } 
}

const Styles = {
  gameVersion: {
    margin:5
  }
}