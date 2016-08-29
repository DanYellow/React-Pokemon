import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class ListTodo extends React.Component {
  render() {
    return (
        <ul>
        {this.props.todos.map(todo =>
          <li>{todo.text}</li>
        )}
        </ul>
    );
  }
}

ListTodo.propTypes = {
  todos: React.PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addTodo, dispatch)
  }
}


ListTodo = connect(mapStateToProps, mapDispatchToProps)(ListTodo)

export default ListTodo
