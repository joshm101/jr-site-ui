import moxios from 'moxios'
import axios from 'axios'

import * as postsService from './index'
import * as postsServiceMocks from './index.mock'

import { mockPost } from '../../utils/testing/mocks'

describe('posts service', () => {
  beforeAll(() => {
    moxios.install(axios)
  })

  afterAll(() => {
    moxios.uninstall(axios)
  })

  test('createPost returns a created post', () => {
    expect.assertions(1)
    postsServiceMocks.createPostMock()

    return postsService.createPost(mockPost).then(result =>
      expect(result).toEqual(mockPost)
    )
  })

  test('createPost throws an error when data not provided', () => {
    expect(() => postsService.createPost()).toThrow()
  })

  test('createPost throws an error to be caught on request error', () => {
    expect.assertions(1)
    postsServiceMocks.createPostRequestErrorMock()

    return postsService.createPost(mockPost).catch(error =>
      expect(error.message).toEqual('error')
    )
  })
})
