import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// AddTodo = connect()(AddTodo)

var AddTodo = React.createClass({
  inputSubmited: function (e) {
    alert('frefefer')
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  },

  render: function() {
    return (
      <div>
      <form onSubmit={this.inputSubmited}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
    );
  }
});


AddTodo = connect()(AddTodo)

export default AddTodo
