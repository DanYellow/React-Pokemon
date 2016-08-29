import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'


var AddTodoContainer = connect()(AddTodo)

export default AddTodoContainer
