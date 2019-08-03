import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const API_URL = process.env.REACT_APP_API_URL

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
    url: `${API_URL}/auth/token-valid`
  }

  return axios(options).then(response =>
    response.data.data
  ).catch(handleAxiosRequestError)
}

export {
  tokenValid
}
