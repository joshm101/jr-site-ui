import moxios from 'moxios'

import { mockPost, mockPosts } from '../../utils/testing/mocks'

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

const getPostsMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: mockPosts,
        meta: { page: 1, pageSize: 10, total: mockPosts.length }
      }
    })
  })
)

const getPostsRequestErrorMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()

    const requestError = {
      status: 500,
      response: {
        data: {
          errors: [{ message: 'An unknown error occurred' }],
          message: 'Could not retrieve posts'
        }
      }
    }

    request.reject(requestError)
  })
)

export {
  createPostMock,
  createPostRequestErrorMock,
  getPostsMock,
  getPostsRequestErrorMock
}
