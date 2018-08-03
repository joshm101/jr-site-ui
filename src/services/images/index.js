import axios from 'axios'

import { handleAxiosRequestError } from '../utils'

const IMAGES_API_URL = process.env.REACT_APP_IMAGES_API_URL

/**
 * Fires a network request to the get-images endpoint
 * to retrieve all uploaded images
 * @return {Promise<object[]>} - Image objects array wrapped
 * in a Promise
 */
const getImages = () => {
  return axios.get(
    `${IMAGES_API_URL}/get-images`
  ).then(response =>
    response.data.data
  ).catch(handleAxiosRequestError)
}

export {
  getImages
}
