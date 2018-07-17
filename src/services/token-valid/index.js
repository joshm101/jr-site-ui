import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const USERS_API_URL = process.env.REACT_APP_USERS_API_URL

const tokenValid = () => {
  const token = localStorage.getItem('jr-site-auth-token')
  if (!token) {
    // token does not exist, token is not valid,
    // return false wrapped in a Promise
    return new Promise((resolve) => resolve(false))
  }

  const options = {
    method: 'GET',
    headers: { 'Authorization': `Bearer: ${token}` },
    url: `${USERS_API_URL}/token-valid`
  }

  return axios(options).then(response =>
    response.data.data
  ).catch(handleAxiosRequestError)
}

export {
  tokenValid
}
