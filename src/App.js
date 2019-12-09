import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import { history } from './store'
import Login from './routes/Login'
import Home from './routes/Home'
import Interface from './routes/Interface'
import { ROUTES } from './routes/routes.constants'
import theme from './theme'
import './App.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <div className="routes-wrapper">
            <Route path={`/${ROUTES.HOME}`} component={Home} />
            <Route exact path={`/${ROUTES.LOGIN}`} component={Login} />
            <Route path={`/${ROUTES.INTERFACE}`} component={Interface} />
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
