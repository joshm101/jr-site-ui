import { testSaga } from 'redux-saga-test-plan'

import { postTypeFormSubmitRoutine } from '../../actions'
import { mockPostTypes } from '../../utils/testing/mocks'

import { handlePostTypeFormSubmit } from '.'

const mockPostType = mockPostTypes[0]

describe('post type form submit saga', () => {
  it('can submit create request', () => {
    const successAction = {
      type: postTypeFormSubmitRoutine.SUCCESS,
      payload: { data: mockPostType }
    }

    const triggerAction = {
      payload: {
        data: mockPostType
      }
    }

    testSaga(handlePostTypeFormSubmit, triggerAction)
      .next()
      .next({ data: mockPostType })
      .put(successAction)
  })

  it('can submit update request', () => {
    const successAction = {
      type: postTypeFormSubmitRoutine.SUCCESS,
      payload: { data: mockPostType }
    }

    const triggerAction = {
      payload: {
        id: '1',
        data: mockPostType
      }
    }

    testSaga(handlePostTypeFormSubmit, triggerAction)
      .next()
      .next({ data: mockPostType })
      .put(successAction)
  })
})
