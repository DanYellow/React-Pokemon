import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

var store    = createStore(todoApp)

console.log(Provider)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)