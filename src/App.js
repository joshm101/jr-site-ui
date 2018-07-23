import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Login from './routes/Login'
import Home from './routes/Home'
import Interface from './routes/Interface'
import theme from './theme'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="routes-wrapper">
            <Route path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/interface" component={Interface} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
