import React from 'react'
import AddTodo from '../containers/AddTodo'
import ListTodo from '../containers/ListTodo'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AddTodo />
        <ListTodo />
      </div>
    );
  }
});

export default App