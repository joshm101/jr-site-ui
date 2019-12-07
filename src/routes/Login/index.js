import React, { useState, useEffect } from 'react'
import {
  Button,
  CircularProgress
} from '@material-ui/core'

import NotificationRenderer from '../../components/Interface/NotificationRenderer'
import ValidatedLoginField from './ValidatedLoginField'
import {
  NOTIFICATION_ID as AUTH_ERROR_NOTIFICATION_ID
} from './LoginAuthErrorNotice'
import { useAuth, useNotifications } from '../../hooks'

import './index.css'

function Login(props) {
  const initialFormState = {
    username: '',
    password: '',
    usernameTouched: false,
    passwordTouched: false
  }

  const { history } = props

  const [
    loginFormState,
    setLoginFormState
  ] = useState(initialFormState)

  const { state, actions } = useAuth()
  const { actions: notificationActions } = useNotifications()
  const { errors: authErrors } = state

  const { tokenValid } = state
  const {
    tokenValidityCheckRoutine,
    loginFormSubmittedRoutine
  } = actions

  useEffect(() => {
    const token = localStorage.getItem('jr-site-auth-token')
    tokenValidityCheckRoutine(token)
  }, [])

  useEffect(() => {
    if (tokenValid) {
      history.push('/interface')
    }
  }, [tokenValid])

  useEffect(() => {
    if (authErrors.length > 0) {
      notificationActions.showNotification(
        {
          id: AUTH_ERROR_NOTIFICATION_ID,
          props: {}
        }
      )
    }
  }, [authErrors])

  /**
   * Login form submit event handler
   */
  const handleLoginSubmit = (event) => {
    // prevent default submission behavior
    event.preventDefault()

    // get entered credentials and initiate login submit
    // asynchronous action routine.
    const { username, password } = loginFormState
    loginFormSubmittedRoutine({
      username, password
    })
  }

  /**
   * Login form field change event handler
   */
  const handleLoginFormChanged = (event) => {
    const { name, value } = event.target

    const touchedProperty = `${name}Touched`

    setLoginFormState({
      ...loginFormState,
      [name]: value,
      [touchedProperty]: true
    })
  }

  /**
   * Populates array of username errors based on
   * specified validation conditions
   * @return {string[]} - Array of string errors
   */
  const getUsernameErrors = (username) => {
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
  const getPasswordErrors = (password) => {
    const errors = []
    if (!password) {
      errors.push('Password is required.')
    }

    return errors
  }

  const { username, password } = loginFormState
  const usernameErrors = getUsernameErrors(username)
  const passwordErrors = getPasswordErrors(password)
  const errors = usernameErrors.concat(passwordErrors)
  const {
    loginSubmitting,
    checkingTokenValidity
  } = state
  const loading = loginSubmitting || checkingTokenValidity
  const {
    usernameTouched,
    passwordTouched
  } = loginFormState

  return (
    <div className="login-root">
      <div className="login-form-wrapper">
        <h2>Login</h2>
        <form autoComplete="off" onSubmit={handleLoginSubmit}>
          <div className="login-form-fields-container">
            <div className="login-form-field-wrapper">
              <ValidatedLoginField
                label="Username"
                name="username"
                onChange={handleLoginFormChanged}
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
                onChange={handleLoginFormChanged}
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
              variant="contained"
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
      <NotificationRenderer />
    </div>
  )
}

export default Login
