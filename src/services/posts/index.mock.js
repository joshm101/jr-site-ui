import moxios from 'moxios'

import { mockPost } from '../../utils/testing/mocks'

const createPostMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: mockPost
      }
    })
  })
)

const createPostRequestErrorMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()

    const requestError = {
      status: 400,
      response: { data: { message: 'error' } }
    }
    request.reject(requestError)
  })
)

export { createPostMock, createPostRequestErrorMock }
