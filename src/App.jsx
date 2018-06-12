import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import logo from './logo.svg'
// import style from './App.style'
import Vault from './components/Vault'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/vault" component={Vault} />
      </div>
    )
  }
}

export default App
