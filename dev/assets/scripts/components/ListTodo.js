import React from 'react'

class ListTodo extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>{todo.text}</li>
          )}
        </ul>
    );
  }
}


ListTodo.propTypes = {
  todos: React.PropTypes.array.isRequired
}

export default ListTodo