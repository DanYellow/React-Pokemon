import React from 'react'

import AddTodo from '../containers/AddTodo'
import ListTodo from '../containers/ListTodo'
import Pokedex from '../containers/Pokedex'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddTodo />
        <ListTodo />
        <Pokedex />
      </div>
    );
  }

}

export default App