import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const API_URL = process.env.REACT_APP_API_URL

/**
 * Fires a network request to the login endpoint
 * to login with the provided credentials.
 * @param {string} username
 * @param {string} password
 * @return {Promise<string>} - Successful login token string
 * wrapped in a Promise
 */
const login = (username, password) => {
  if (!username) {
    return Promise.reject(
      new Error('No username was provided.')
    )
  }

  if (!password) {
    return Promise.reject(
      new Error('No password was provided.')
    )
  }

  return axios.post(
    `${API_URL}/auth/login`,
    {
      username, password
    }
  ).then(response =>
    response.data.data
  ).catch(handleAxiosRequestError)
}

export {
  login
}
