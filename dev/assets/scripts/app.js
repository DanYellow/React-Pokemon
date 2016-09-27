import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import App from './components/App'

let store    = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)