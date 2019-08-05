import axios from 'axios'

import { handleAxiosRequestError } from '../utils'
import validImageFile from '../../utils/valid-image-file'

const API_URL = process.env.REACT_APP_API_URL

/**
 * Fires a network request to the get-images endpoint
 * to retrieve all uploaded images
 * @return {Promise<object[]>} - Image objects array wrapped
 * in a Promise
 */
const getImages = () => {
  return axios.get(
    `${API_URL}/images`
  ).then(response =>
    response.data.data
  ).catch(handleAxiosRequestError)
}

/**
 * Fires a network request to API to upload the provided
 * image files to the specified folder
 * @param {File[]} imageFiles - Array of File objects
 * @param {string} folder - Name of folder to upload images to
 * @return {Promise<object>} - API response object
 */
const uploadImages = (imageFiles, folder) => {
  if (!folder) {
    throw new Error(
      'A folder must be specified for the uploaded images.'
    )
  }

  const authToken = localStorage.getItem('jr-site-auth-token')
  if (!authToken) {
    throw new Error(
      'An auth token was not found. Not authorized to upload images.'
    )
  }

  // Filter out any invalid image files as a safeguard
  const validImageFiles = imageFiles.filter(imageFile =>
    validImageFile(imageFile.name)
  )

  // Get invalid image files for use in response to consumer
  const invalidImageFiles = imageFiles.filter(imageFile =>
    !validImageFile(imageFile.name)
  )

  // Append folder and image files to FormData object
  const formData = new FormData()
  formData.append('folder', folder)
  validImageFiles.forEach(imageFile =>
    formData.append('images', imageFile)
  )

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`
    },
    data: formData,
    url: `${API_URL}/images/upload`
  }

  // Make POST request to upload images.
  return axios(requestOptions).then(response =>
    ({
      invalidFiles: [
        ...response.data.data.invalidFiles,
        ...invalidImageFiles
      ],
      uploadErrors: response.data.data.uploadErrors,
      uploadedFiles: response.data.data.uploadedFiles

    })
  ).catch(handleAxiosRequestError)
}

export {
  getImages,
  uploadImages
}
