import moxios from 'moxios'

import { mockPostTypes } from '../../utils/testing/mocks'

const createPostTypeMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: mockPostTypes[0]
      }
    })
  })
)

const createPostTypeRequestErrorMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()

    const requestError = {
      status: 400,
      response: { data: { message: 'error' } }
    }

    request.reject(requestError)
  })
)

const updatePostTypeMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: mockPostTypes[0]
      }
    })
  })
)

const updatePostTypeRequestErrorMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()

    const requestError = {
      status: 400,
      response: { data: { message: 'error' } }
    }

    request.reject(requestError)
  })
)

const getPostTypesMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: { data: mockPostTypes }
    })
  })
)

const getPostTypesRequestErrorMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()

    const requestError = {
      status: 500,
      response: {
        data: {
          errors: [{ message: 'An unkown error occurred' }],
          message: 'Could not retrieve post types'
        }
      }
    }

    request.reject(requestError)
  })
)

export {
  createPostTypeMock,
  createPostTypeRequestErrorMock,
  updatePostTypeMock,
  updatePostTypeRequestErrorMock,
  getPostTypesMock,
  getPostTypesRequestErrorMock
}
