import axios from 'axios'

import {
  handleAxiosRequestError,
  constructQueryString
} from '../utils'

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

/**
 * Fires a network request to API to retrieve posts
 * @param {object} options - Contains various request-related
 * configuration options (such as request query params)
 * @return {Promise<object>} - API response data
 */
const getPosts = (options) => {
  const validQueryProperties = ['id']
  const constructPostsQueryString = (
    constructQueryString(validQueryProperties)
  )

  const { query } = options
  const queryString = constructPostsQueryString(query)
  const url = `${API_URL}/posts${queryString}`
  const authToken = localStorage.getItem('jr-site-auth-token')

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer: ${authToken}`
    },
    url
  }

  return axios(requestOptions)
    .then(response => response.data)
    .catch(handleAxiosRequestError)
}

export {
  createPost,
  getPosts
}
