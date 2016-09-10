import React from 'react'
import { searchPkmn } from '../actions'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  formSubmited (e) {
    e.preventDefault();
    
    this.props.dispatch(searchPkmn(this.refs.myInput.value));
  }

  render() {
    return (
      <form>
        <input 
        ref="myInput" 
        type="search" 
        placeholder="Enter a name" 
        onKeyUp={this.formSubmited.bind(this)} />
      </form>
    );
  }
}
