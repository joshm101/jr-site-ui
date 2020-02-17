import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const API_URL = process.env.REACT_APP_API_URL

const getPostTypes = () => {
  const requestOptions = {
    method: 'GET',
    url: `${API_URL}/post-types`
  }

  return axios(requestOptions)
    .then(response => response.data)
    .catch(handleAxiosRequestError)
}

/**
 * Fires a network request to API to create a new post type
 * @param {object} data - Data for post type being created
 * @return {Promise} - API response data
 */
const createPostType = data => {
  if (!data) {
    throw new Error(
      'The provided post type data is invalid.'
    )
  }

  const authToken = localStorage.getItem('jr-site-auth-token')

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer: ${authToken}`
    },
    url: `${API_URL}/post-types`,
    data
  }

  return axios(requestOptions)
    .then(response => response.data.data)
    .catch(handleAxiosRequestError)
}

/**
 * Fires a network request to API to update post type
 * @param {string} id - ID of post type to update
 * @param {object} data - Post type updates object
 * @return {Promise} data - API response data
 */
const updatePostType = (id, data) => {
  if (!id) {
    throw new Error(
      'No post type specified for updating'
    )
  }

  if (!data) {
    throw new Error(
      'No post type data provided'
    )
  }

  const authToken = localStorage.getItem('jr-site-auth-token')
  const url = `${API_URL}/post-types/${id}`
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

export {
  getPostTypes,
  createPostType,
  updatePostType
}
