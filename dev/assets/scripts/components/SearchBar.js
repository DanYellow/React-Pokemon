import React from 'react'
import { searchPkmn } from '../actions'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  formSubmited (e) {
    e.preventDefault();
    
    // if (!this.refs.myInput.value.trim()) {
    //   return;
    // }

    this.props.dispatch(searchPkmn(this.refs.myInput.value));
  }

  render() {
    return (
      <div>
        <form>
          <input ref="myInput" onKeyUp={this.formSubmited.bind(this)} />
        </form>
      </div>
    );
  }
}

export default SearchBar
