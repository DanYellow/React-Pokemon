import React from 'react'
import { searchPkmn } from '../actions'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  keyUp (e) {
    e.preventDefault();
    
    this.props.searchPkmn(this.refs.myInput.value);
  }

  render() {
    return (
      <form>
        <legend>{ this.props.pkmns.length } Pokemon founded</legend>
        <input 
        ref="myInput"
        type="search"
        placeholder="Enter a name" 
        onKeyUp={this.keyUp.bind(this)} />
      </form>
    );
  }
}
