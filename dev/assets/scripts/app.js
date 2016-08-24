import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

var store    = Redux.createStore(todoApp)

console.log(Provider)

// ReactDOM.render(
//   <Provider store={store}></Provider>,
//   document.getElementById('root')
// );


render(
  <div></div>,
  document.getElementById('root')
)
