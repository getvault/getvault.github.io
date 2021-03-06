import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'isomorphic-fetch'
/* eslint import/no-extraneous-dependencies: 0 import/no-unresolved: 0 */
import 'file?name=[name].[ext]!./index.html'
import './global.scss'

import App from './components/App.container'
import store from './redux/store'

/* eslint-env browser */


render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('index')
)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('app')
// )
