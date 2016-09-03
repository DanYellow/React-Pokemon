import React from 'react'

import { fetchPkmn } from '../actions'

class Pokedex extends React.Component {
  constructor (props) {
    super(props);


    
  }

  componentWillMount() {
    for (var i = 1; i < 43; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  render() {
    return (
        <ul>
          {this.props.pkmns.map(pkmn =>
            <li key={pkmn.id}>{pkmn.datas.name}</li>
          )}
        </ul>
    );
  }
}


// ListTodo.propTypes = {
//   todos: React.PropTypes.array.isRequired
// }

export default Pokedex