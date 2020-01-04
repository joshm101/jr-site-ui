import moxios from 'moxios'
import axios from 'axios'

import * as postsService from './index'
import * as postsServiceMocks from './index.mock'

import { mockPost, mockPosts } from '../../utils/testing/mocks'

describe('posts service', () => {
  beforeEach(() => {
    moxios.install(axios)
  })

  afterEach(() => {
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

  test('updatePost throws error when data not provided', () => {
    expect(
      () => postsService.updatePost('id')
    ).toThrow()
  })

  test('updatePost throws error when id not provided', () => {
    expect(
      () => postsService.updatePost(undefined, {})
    ).toThrow()
  })

  test('updatePost throws an error to be caught on request error', () => {
    // expect.assertions(1)
    postsServiceMocks.updatePostRequestErrorMock()

    return postsService.updatePost('id', {}).catch(error =>
      expect(error.message).toEqual('error')
    )
  })

  test('getPosts returns posts', () => {
    expect.assertions(1)
    postsServiceMocks.getPostsMock()

    return postsService.getPosts(mockPosts).then(result =>
      expect(result.data).toEqual(mockPosts)
    )
  })

  test('getPosts rejects on error', () => {
    expect.assertions(1)
    postsServiceMocks.getPostsRequestErrorMock()

    return postsService.getPosts().catch(error =>
      expect(error.message.length).toBeTruthy()
    )
  })
})
