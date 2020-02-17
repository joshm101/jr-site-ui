import moxios from 'moxios'
import axios from 'axios'

import * as postTypesService from './index'
import * as postTypesServiceMocks from './index.mocks'

import { mockPostTypes } from '../../utils/testing/mocks'

const {
  createPostType,
  updatePostType,
  getPostTypes
} = postTypesService

const {
  createPostTypeMock,
  createPostTypeRequestErrorMock,
  updatePostTypeMock,
  updatePostTypeRequestErrorMock,
  getPostTypesMock,
  getPostTypesRequestErrorMock
} = postTypesServiceMocks

describe('post types service', () => {
  beforeEach(() => {
    moxios.install(axios)
  })

  afterEach(() => {
    moxios.uninstall(axios)
  })

  test('createPostType returns a created post type', () => {
    expect.assertions(1)
    createPostTypeMock()

    return createPostType({ name: 'test' }).then(result =>
      expect(result).toEqual(mockPostTypes[0])
    )
  })

  test('createPostType throws an error when data not provided', () => {
    expect(() => createPostType()).toThrow()
  })

  test('createPostType throws error on request error', () => {
    expect.assertions(1)
    createPostTypeRequestErrorMock()

    return createPostType(mockPostTypes[0]).catch(error =>
      expect(error.message).toEqual('error')
    )
  })

  test('updatePostType throws error when data not provided', () => {
    expect(() => updatePostType('id')).toThrow()
  })

  test('updatePostType throws error when id not provided', () => {
    expect(() => updatePostType()).toThrow()
  })

  test('updatePostType throws an error on request error', () => {
    expect.assertions(1)
    updatePostTypeRequestErrorMock()

    return updatePostType('id', {}).catch(error =>
      expect(error.message).toEqual('error')
    )
  })

  test('updatePostType returns updated post type', () => {
    expect.assertions(1)
    updatePostTypeMock()

    return updatePostType('id', {}).then(result =>
      expect(result).toEqual(mockPostTypes[0])
    )
  })

  test('getPostTypes returns post types', () => {
    expect.assertions(1)
    getPostTypesMock()

    return getPostTypes().then(result =>
      expect(result.data).toEqual(mockPostTypes)
    )
  })

  test('getPostTypes rejects on error', () => {
    expect.assertions(1)
    getPostTypesRequestErrorMock()

    return getPostTypes().catch(error =>
      expect(error.message).toBe('Could not retrieve post types')
    )
  })
})
