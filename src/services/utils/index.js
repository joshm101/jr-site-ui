import constructQueryString from './construct-query-string'

const handleAxiosRequestError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a
    // status code that falls out of the range of 2xx
    if (
      error.response.data.errors &&
      error.response.data.errors.length
    ) {
      throw new Error(error.response.data.errors[0].message)
    }

    throw new Error(error.response.data.message)
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('Unable to get a response from the server.')
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error('The request could not be made.')
  }
}

export {
  handleAxiosRequestError,
  constructQueryString
}
