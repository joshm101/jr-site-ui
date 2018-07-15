import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    console.log('login submit')
  }

  handleLoginFormChanged = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="login-root">
        <div className="login-form-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleLoginSubmit}>
            <div className="login-form-fields-container">
              <TextField
                className="login-form-field"
                label="Username"
                name="username"
                onChange={this.handleLoginFormChanged}
                value={username}
                fullWidth
              />
              <TextField
                className="login-form-field"
                label="Password"
                type="password"
                name="password"
                onChange={this.handleLoginFormChanged}
                value={password}
                fullWidth
              />
            </div>
            <div className="login-form-actions-container">
              <Button
                type="submit"
                variant="raised"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
