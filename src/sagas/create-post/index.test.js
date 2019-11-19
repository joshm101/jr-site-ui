import { expectSaga } from 'redux-saga-test-plan'

import { createPostRoutine } from '../../actions'
import * as postsService from '../../services/posts'

import { mockPost } from '../../utils/testing/mocks'
import { createPost as mockCreatePost } from '../../utils/testing/mocks/services'

import createPostSaga from '.'

describe('Create post saga', () => {
  it('creates a post', () => {
    postsService.createPost = mockCreatePost

    return expectSaga(createPostSaga)
      .put({
        type: createPostRoutine.SUCCESS,
        payload: mockPost
      })
      .dispatch({
        type: createPostRoutine.TRIGGER,
        payload: {}
      })

      // suppress redux-saga-test-plan timeout
      // warning due to takeEvery usage
      .silentRun()
  })
})
