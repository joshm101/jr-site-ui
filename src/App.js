import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './routes/Login'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="routes-wrapper">
          <Route exact path="/">
            <div className="App">

            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App
