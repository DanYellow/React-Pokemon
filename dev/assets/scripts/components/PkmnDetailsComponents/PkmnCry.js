import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'


export default class PkmnCry extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.refs.myPlayer.play();
  }

  render() {
    const urlSound = `http://danyellow.ilotreseau.net/pokedex/${this.props.id}.mp3`
    return (
      <audio style={Styles.player} 
             controls="controls"
             volume={0.5}
             autoPlay ref="myPlayer" src={urlSound} type="audio/mp3" />
    );
  }
}


const Styles = {
  player: {
    display: 'none'
  }
}