import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import Login from './routes/Login'
import Home from './routes/Home'
import Interface from './routes/Interface'
import theme from './theme'
import './App.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="routes-wrapper">
            <Route path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/interface" component={Interface} />
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
