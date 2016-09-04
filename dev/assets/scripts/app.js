import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import todoApp from './reducers'
import App from './components/App'

var store    = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)