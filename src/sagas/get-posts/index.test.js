import { expectSaga } from 'redux-saga-test-plan'

import { getPostsRoutine } from '../../actions'
import * as postsService from '../../services/posts'

import { mockPosts } from '../../utils/testing/mocks'
import { getPosts as mockGetPosts } from '../../utils/testing/mocks/services'

import getPostsSaga from '.'

describe('Get posts saga', () => {
  it('retrieves posts', () => {
    postsService.getPosts = mockGetPosts

    return expectSaga(getPostsSaga)
      .put({
        type: getPostsRoutine.SUCCESS,
        payload: {
          data: mockPosts,
          meta: { page: 1, pageSize: 10, total: mockPosts.length }
        }
      })
      .dispatch({
        type: getPostsRoutine.TRIGGER,
        payload: { options: {} }
      })

      // suppress redux-saga-test-plan timeout warning
      // due to takeEvery usage
      .silentRun()
  })

  it('handles errors', () => {
    const error = new Error('Error')

    postsService.getPosts = () => { throw error }

    return expectSaga(getPostsSaga)
      .put({
        type: getPostsRoutine.FAILURE,
        payload: [error]
      })
      .dispatch({
        type: getPostsRoutine.TRIGGER,
        payload: {}
      })
      .silentRun()
  })
})
