import { getPostsRoutine } from '../../actions'

import postsReducer from '.'

import { mockPosts } from '../../utils/testing/mocks'

const mockMeta = { page: 1, pageSize: 10, total: mockPosts.length }

const expectedInitialState = {
  data: [],
  meta: {},
  retrievingPosts: false,
  errors: []
}

const expectedGetPostsTriggerState = {
  ...expectedInitialState,
  retrievingPosts: true
}

const expectedGetPostsSuccessState = {
  ...expectedInitialState,
  data: mockPosts,
  meta: mockMeta
}

const expectedGetPostsFailureState = {
  ...expectedInitialState,
  errors: [{ message: 'no' }, { message: 'bueno' }]
}

describe('posts reducer', () => {
  it('returns initial state', () => {
    expect(
      postsReducer(undefined, {})
    ).toEqual(expectedInitialState)
  })

  it(`handles ${getPostsRoutine.TRIGGER}`, () => {
    const action = {
      type: getPostsRoutine.TRIGGER
    }

    expect(
      postsReducer(undefined, action)
    ).toEqual(expectedGetPostsTriggerState)
  })

  it(`handles ${getPostsRoutine.SUCCESS}`, () => {
    const action = {
      type: getPostsRoutine.SUCCESS,
      payload: {
        data: mockPosts,
        meta: mockMeta
      }
    }

    expect(
      postsReducer(undefined, action)
    ).toEqual(expectedGetPostsSuccessState)
  })

  it(`handles ${getPostsRoutine.FAILURE}`, () => {
    const action = {
      type: getPostsRoutine.FAILURE,
      payload: [{ message: 'no' }, { message: 'bueno' }]
    }

    expect(
      postsReducer(undefined, action)
    ).toEqual(expectedGetPostsFailureState)
  })
})
