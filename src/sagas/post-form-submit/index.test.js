import { testSaga } from 'redux-saga-test-plan'

import { postFormSubmitRoutine } from '../../actions'

import { mockPost } from '../../utils/testing/mocks'

import { handlePostFormSubmit } from '.'

describe('post form submit saga', () => {
  it('can submit create request', () => {
    const successAction = {
      type: postFormSubmitRoutine.SUCCESS,
      payload: { data: mockPost }
    }

    const triggerAction = {
      payload: {
        data: mockPost
      }
    }

    testSaga(handlePostFormSubmit, triggerAction)
      .next()
      .next({ data: mockPost })
      .put(successAction)
  })

  it('can submit update request', () => {
    const successAction = {
      type: postFormSubmitRoutine.SUCCESS,
      payload: { data: mockPost }
    }
    const triggerAction = {
      payload: {
        id: '1',
        data: mockPost
      }
    }

    testSaga(handlePostFormSubmit, triggerAction)
      .next()
      .next({ data: mockPost })
      .put(successAction)
  })
})
