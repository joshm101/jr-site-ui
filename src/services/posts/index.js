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
 * Fires a network request to API to update post specified by
 * id argument
 * @param {string} id - ID of post to update
 * @param {object} data - Post updates object
 * @return {Promise<object>} - API response data
 */
const updatePost = (id, data) => {
  if (!id) {
    throw new Error(
      'No post specified for updating'
    )
  }

  if (!data) {
    throw new Error(
      'No post data provided'
    )
  }

  const authToken = localStorage.getItem('jr-site-auth-token')
  const url = `${API_URL}/posts/${id}`
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer: ${authToken}`
    },
    url,
    data
  }

  return axios(requestOptions)
    .then(response => response.data.data)
    .catch(handleAxiosRequestError)
}

const deletePost = id => {
  if (!id) {
    throw new Error(
      'No post specified for deletion'
    )
  }

  const authToken = localStorage.getItem('jr-site-auth-token')
  const url = `${API_URL}/posts/${id}`
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer: ${authToken}`
    },
    url
  }

  return axios(requestOptions)
    .then(() => 'Post deleted')
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
  updatePost,
  deletePost,
  getPosts
}
