import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'


export default class PkmnSprite extends React.Component {
  constructor(props, context) { 
    super(props, context);

    this.isFemaleSprite = this._isFemaleSprite(props.image);
  }

  componentWillReceiveProps(nextProps) {
    this.isFemaleSprite = this._isFemaleSprite(nextProps.image);
  }

  sexSign () {
    if (this.isFemaleSprite) {
      return '♀';
    } else {
      return '♂';
    }
  }

  _isFemaleSprite (path) {
    if (!path) {
      return false;
    }

    if (path.indexOf('female') > -1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (!this.props.image) {
      return null;
    }

    return (
      <div style={Styles.container}>
        <img src={this.props.image}/>
        <p style={Object.assign(Styles.signColor(this.isFemaleSprite), Styles.sign)}>{this.sexSign()}</p>
      </div>
    );
  }
}


const Styles = {
  container: {
    flexDirection:'column', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0.5,
    display: 'flex'
  },
  sign: { 
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signColor: function(isFemaleSprite) {
    if (isFemaleSprite) {
      return { color: '#f7d' }
    } else {
      return { color: '#35f' }
    }
  }
}