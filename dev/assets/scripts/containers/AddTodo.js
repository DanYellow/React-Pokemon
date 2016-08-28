import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  formSubmited (e) {
    e.preventDefault()
    
    if (!this.refs.myInput.value.trim()) {
      return
    }

    this.props.dispatch(addTodo(this.refs.myInput.value))
    this.refs.myInput.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmited.bind(this)}>
          <input ref="myInput" />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}


AddTodo = connect()(AddTodo)

export default AddTodo
