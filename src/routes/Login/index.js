import React, { Component } from 'react'
import {
  Button,
  CircularProgress,
  Snackbar
} from '@material-ui/core'

import ValidatedLoginField from './ValidatedLoginField'
import withAuthActions from '../../hoc/withAuthActions'
import withAuthState from '../../hoc/withAuthState'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    usernameTouched: false,
    passwordTouched: false
  }

  componentDidMount() {
    if (this.props.auth.tokenValid) {
      this.props.history.push('/interface')
      return
    }
    const token = localStorage.getItem('jr-site-auth-token')
    this.props.tokenValidityCheckRoutine(token)
  }

  componentDidUpdate() {
    if (this.props.auth.tokenValid) {
      this.props.history.push('/interface')
    }
  }

  /**
   * Login form submit event handler
   */
  handleLoginSubmit = (event) => {
    // prevent default submission behavior
    event.preventDefault()

    // get entered credentials and initiate login submit
    // asynchronous action routine.
    const { username, password } = this.state
    const { loginFormSubmittedRoutine } = this.props
    loginFormSubmittedRoutine({
      username, password
    })
  }

  /**
   * Login form field change event handler
   */
  handleLoginFormChanged = (event) => {
    const { name, value } = event.target

    const touchedProperty = `${name}Touched`
    this.setState({
      [name]: value,
      [touchedProperty]: true
    })
  }

  /**
   * Error notification dismiss event handler
   */
  handleErrorDismiss = () => {
    const { authErrorsDismissed } = this.props

    authErrorsDismissed()
  }

  /**
   * Populates array of username errors based on
   * specified validation conditions
   * @return {string[]} - Array of string errors
   */
  usernameErrors = (username) => {
    const errors = []
    if (!username) {
      errors.push('Username is required.')
    }

    return errors
  }

  /**
   * Populates array of password errors based on
   * specified validation conditions
   * @return {string[]} - Array of string errors
   */
  passwordErrors = (password) => {
    const errors = []
    if (!password) {
      errors.push('Password is required.')
    }

    return errors
  }

  render() {
    const { username, password } = this.state
    const usernameErrors = this.usernameErrors(username)
    const passwordErrors = this.passwordErrors(password)
    const errors = usernameErrors.concat(passwordErrors)
    const {
      loginSubmitting,
      checkingTokenValidity
    } = this.props.auth
    const loading = loginSubmitting || checkingTokenValidity
    const authErrors = this.props.auth.errors
    const {
      usernameTouched,
      passwordTouched
    } = this.state
    return (
      <div className="login-root">
        <div className="login-form-wrapper">
          <h2>Login</h2>
          <form autoComplete="off" onSubmit={this.handleLoginSubmit}>
            <div className="login-form-fields-container">
              <div className="login-form-field-wrapper">
                <ValidatedLoginField
                  label="Username"
                  name="username"
                  onChange={this.handleLoginFormChanged}
                  value={username}
                  errors={usernameErrors}
                  touched={usernameTouched}
                  disabled={loading}
                />
              </div>
              <div className="login-form-field-wrapper">
                <ValidatedLoginField
                  label="Password"
                  name="password"
                  onChange={this.handleLoginFormChanged}
                  value={password}
                  errors={passwordErrors}
                  touched={passwordTouched}
                  type="password"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="login-form-actions-container">
              <Button
                type="submit"
                variant="raised"
                color="primary"
                disabled={errors.length > 0 || loading}
              >
                {loading &&
                  <CircularProgress
                    size={20}
                    className="login-loading-indicator"
                  />
                }
                Submit
              </Button>
            </div>
          </form>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          autoHideDuration={3000}
          open={authErrors.length > 0}
          onClose={this.handleErrorDismiss}
          message={
            authErrors.map(authError =>
              <div key={authError}>
                {authError}
              </div>
            )
          }
        />
      </div>
    )
  }
}

export default withAuthState(
  withAuthActions(Login)
)
