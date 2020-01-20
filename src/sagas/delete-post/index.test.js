import { testSaga } from 'redux-saga-test-plan'

import { deletePostRoutine } from '../../actions'
import { handleDeletePost } from '.'

describe('delete post saga', () => {
  it('can submit delete request', () => {
    const successAction = {
      type: deletePostRoutine.SUCCESS,
      payload: 'Post deleted'
    }

    const triggerAction = {
      type: deletePostRoutine.TRIGGER,
      payload: 'post-id'
    }

    testSaga(handleDeletePost, triggerAction)
      .next()
      .next('Post deleted')
      .put(successAction)
  })

  it('handles errors', () => {
    const errorAction = {
      type: deletePostRoutine.FAILURE,
      payload: ['oh crap']
    }

    const triggerAction = {
      payload: 'post-id',
      type: deletePostRoutine.TRIGGER
    }

    const error = new Error('oh crap')

    testSaga(handleDeletePost, triggerAction)
      .next()
      .throw(error)
      .put(errorAction)
      .next()
      .isDone()
  })
})
