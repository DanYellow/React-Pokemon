import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import ListTodo from '../components/ListTodo'

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

var ListTodoContainer = connect(mapStateToProps, mapDispatchToProps)(ListTodo)

export default ListTodoContainer
