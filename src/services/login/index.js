import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const USERS_API_URL = process.env.REACT_APP_USERS_API_URL

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
    throw new Error('No username was provided.')
  }

  if (!password) {
    throw new Error('No password was provided.')
  }

  return axios.post(
    `${USERS_API_URL}/login`,
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
