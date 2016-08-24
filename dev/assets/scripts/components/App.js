import React from 'react'
import AddTodo from '../containers/AddTodo'

var App = React.createClass({
  render: function() {
    return (
      <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
    );
  }
});

export default App