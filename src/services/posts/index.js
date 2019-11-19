import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const API_URL = process.env.REACT_APP_API_URL

/**
 * Fires a network request to API to create a new post
 * @param {object} data - Data for post being created
 * @return {Promise<object>} - API response data
 */
const createPost = data => {
  if (!data) {
    throw new Error(
      'The provided post data is invalid.'
    )
  }

  const authToken = localStorage.getItem('jr-site-auth-token')

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer: ${authToken}`
    },
    url: `${API_URL}/posts`,
    data
  }

  return axios(requestOptions)
    .then(response => response.data.data)
    .catch(handleAxiosRequestError)
}

export { createPost }
